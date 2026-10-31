"""Validate built static routes and user-visible navigation without third-party dependencies."""
import argparse
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import xml.etree.ElementTree as ET

class Document(HTMLParser):
    def __init__(self, text):
        super().__init__(); self.nodes=[]; self.text=[]; self.feed(text)
    def handle_starttag(self, tag, attrs): self.nodes.append((tag,dict(attrs)))
    def handle_data(self, value): self.text.append(value)
    def find(self, tag, **attrs):
        return [a for t,a in self.nodes if t==tag and all(a.get(k)==v for k,v in attrs.items())]

def check(stage):
    root=Path('dist'); domain='https://airdb.hk'
    slugs=['','platform','solutions','developers','trust','research','company']
    if stage=='complete': slugs+=['research/ai-cross-border-payments']
    locales={'':'en','zh-hans':'zh-Hans','zh-hant':'zh-Hant'}
    paths={('/'+('/'.join(x for x in [locale,slug] if x))+'/').replace('//','/'):lang for locale,lang in locales.items() for slug in slugs}
    docs={}
    for path,lang in paths.items():
        file=root/path.lstrip('/')/'index.html'
        assert file.exists(),f'Missing route {path}'
        d=Document(file.read_text()); docs[path]=d
        assert len(d.find('main',id='main'))==1,path+' main'
        assert len(d.find('h1'))==1,path+' h1'
        assert len(d.find('title'))==1,path+' title'
        assert d.find('html',lang=lang),path+' lang'
        assert d.find('meta',name='description')[0].get('content','').strip(),path+' description'
        assert d.find('link',rel='canonical',href=domain+path),path+' canonical'
        locale=next((l for l in ['zh-hans','zh-hant'] if path.startswith('/'+l+'/')),'')
        slug=path.removeprefix('/'+locale+'/') if locale else path[1:]
        for target,targetlang in locales.items():
            expected=domain+'/'+(target+'/' if target else '')+slug
            assert d.find('link',rel='alternate',hreflang=targetlang,href=expected),path+' alternate '+targetlang
        assert d.find('link',rel='alternate',hreflang='x-default',href=domain+'/'+slug),path+' x-default'
        ids=[a['id'] for _,a in d.nodes if 'id' in a]
        assert len(ids)==len(set(ids)),path+' duplicate IDs'
        for tag in ['form','input','iframe']:
            assert not d.find(tag),path+' prohibited '+tag
        assert not [a for a in d.find('script') if a.get('src','').startswith(('http','//'))],path+' remote script'
        for a in d.find('span'):
            if 'data-status' in a: assert a['data-status'] in ['planned','exploring'],path+' status'
        if not slug:
            for anchor in ['scenarios','infrastructure','protocol','roadmap','contact','top']:
                assert anchor in ids,path+' old anchor '+anchor
        assert d.find('a',href='mailto:info@airdb.com'),path+' email'
        assert d.find('a',href='https://airdb.group'),path+' Group'
        if 'ai-cross-border-payments' in path:
            assert d.find('article',**{'data-translation-key':'ai-cross-border-payments'}),path+' article identity'
            assert len(d.find('h2'))>=9,path+' full article'
            assert d.find('time') and all(a.get('datetime') for a in d.find('time')),path+' dates'
            assert d.find('section',id='sources'),path+' sources'
    for path,d in docs.items():
        for a in d.find('a'):
            href=a.get('href',''); url=urlsplit(href)
            if url.scheme or url.netloc: continue
            target=unquote(url.path) or path
            if not target.startswith('/'): raise AssertionError(path+' relative link '+href)
            if stage=='company' and target.endswith('/research/ai-cross-border-payments/'):continue
            if target in docs:
                if url.fragment:assert any(at.get('id')==unquote(url.fragment) for _,at in docs[target].nodes),path+' missing anchor '+href
            else:assert (root/target.lstrip('/')).is_file(),path+' broken link '+href
    actual={ '/'+str(f.parent.relative_to(root)).replace('.','').strip('/')+'/' for f in root.rglob('index.html') }
    actual={p.replace('//','/') for p in actual}
    assert actual==set(paths),f'Unexpected route set {actual ^ set(paths)}'
    d=Document((root/'404.html').read_text())
    assert d.find('meta',name='robots',content='noindex'),'404 noindex'
    for path in ['/','/zh-hans/','/zh-hant/']:assert d.find('a',href=path),'404 '+path
    assert not d.find('link',rel='canonical'),'404 canonical'
    if stage=='complete':
        urls=set()
        for file in root.glob('sitemap*.xml'):
            tree=ET.parse(file)
            for node in tree.iter():
                if node.tag.endswith('loc') and node.text and not node.text.endswith('.xml'):urls.add(node.text)
        assert urls=={domain+p for p in paths},'sitemap mismatch'
    print(f'PASS {len(paths)} content routes + 404; metadata, links, anchors, states and safety boundaries')

if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('--stage',choices=['company','complete'],default='complete')
    check(parser.parse_args().stage)
