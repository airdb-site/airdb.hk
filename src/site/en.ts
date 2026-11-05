import type { LocaleCopy } from "./model.ts";
const content = {
  "lang": "en",
  "nav": {
    "platform": "Platform",
    "solutions": "Solutions",
    "developers": "Developers",
    "research": "Research",
    "company": "Company"
  },
  "ui": {
    "menu": "Menu",
    "contact": "Talk to us",
    "skip": "Skip to content",
    "top": "Back to top",
    "primary": "See the payment scenarios",
    "secondary": "Discuss your workflow",
    "notice": "Exploration & planning stage. This site does not process payments.",
    "legal": "Concept and capability showcase. No live wallet, custody, exchange or settlement service is provided here. No regulatory approval or official affiliation is implied.",
    "figureNote": "Illustrative architecture · no live settlement",
    "status": {
      "planned": "Planned",
      "exploring": "Exploring"
    },
    "flow": [
      "Payment intent",
      "Authorization policy",
      "Payment orchestration",
      "Channel integration",
      "Receipt & reconciliation"
    ],
    "read": "Read the research",
    "flowTitle": "One intent. A controlled path.",
    "external": "External channel · future evaluation",
    "human": "Exceptions → human review",
    "vision": "Our direction",
    "research": "Research perspective",
    "back": "Back to the platform",
    "source": "Sources & scope",
    "date": "Research date",
    "author": "AirDB editorial"
  },
  "pages": {
    "home": {
      "title": "Connect orders, payment approvals and reconciliation. — AirDB",
      "description": "For cross-border trade platforms and Agent development teams. From Hong Kong, we are designing the workflow between a business request and a verified payment result — with digital renminbi channels and open payment protocols as integration research directions.",
      "heading": "Connect orders, payment approvals and reconciliation.",
      "intro": "For cross-border trade platforms and Agent development teams. From Hong Kong, we are designing the workflow between a business request and a verified payment result — with digital renminbi channels and open payment protocols as integration research directions.",
      "sections": [
        {
          "id": "problem",
          "title": "Hong Kong as the starting point. Cross-border workflows as the focus.",
          "paragraphs": [
            "Our Hong Kong focus connects the needs of trade involving China with software built for global businesses. Digital renminbi channel research addresses the payment-rail layer; Agent authorization and x402 research address how software requests and approves a payment. We are exploring how these layers can work together, without assuming they are already connected."
          ]
        },
        {
          "id": "platform",
          "title": "Four capabilities. One shared foundation.",
          "paragraphs": [
            "Order context, authorization decisions and payment receipts: four proposed capabilities to keep the handoffs connected."
          ]
        },
        {
          "id": "audience",
          "title": "Built around real workflows",
          "paragraphs": [
            "For cross-border platforms and trade technology teams first. For Agent and paid-API developers next. Start with one workflow and a clearly defined owner."
          ]
        },
        {
          "id": "closing",
          "title": "Bring one workflow. Find the next practical step.",
          "paragraphs": [
            "Describe your trade-payment process or Agent purchase use case. We will start by discussing the inputs, decision owner and result you need."
          ]
        }
      ]
    },
    "platform": {
      "title": "From transaction intent to a reconciled result. — AirDB",
      "description": "One proposed platform. Four connected capabilities. A shared language for intent, permission and outcomes, designed around the needs of enterprise teams.",
      "heading": "From transaction intent to a reconciled result.",
      "intro": "One proposed platform. Four connected capabilities. A shared language for intent, permission and outcomes, designed around the needs of enterprise teams.",
      "sections": [
        {
          "id": "roadmap",
          "title": "A measured path forward",
          "paragraphs": [
            "Product exploration → no-funds prototype → conditional partner evaluation → platform expansion. Each step depends on evidence, not a promised launch date."
          ]
        },
        {
          "id": "mandate",
          "title": "Example agent mandate",
          "paragraphs": [
            "Illustrative mandate: API & compute; ¥1.00 equivalent per payment; ¥100.00 equivalent daily; approved providers only; exceptions require human approval. Values are not pricing or supported payment denominations."
          ],
          "bullets": [
            "Budget & limits — Per-payment limits, cumulative budgets and validity periods.",
            "Approved recipients — Restrict who can be paid and for which services.",
            "Human approval — Route exceptions for review before a payment proceeds.",
            "Traceable events — Connect payment intent, policy decisions and receipts in an audit trail."
          ]
        }
      ]
    },
    "solutions": {
      "title": "Start with trade. Design for what comes next. — AirDB",
      "description": "We begin with the work between an order, an approval and a reconciled payment. Agent procurement and paid APIs extend the same questions into software.",
      "heading": "Start with trade. Design for what comes next.",
      "intro": "We begin with the work between an order, an approval and a reconciled payment. Agent procurement and paid APIs extend the same questions into software.",
      "sections": [
        {
          "id": "trade",
          "title": "A supplier invoice, from order to reconciliation",
          "paragraphs": [
            "For trade platforms coordinating buyers, finance teams and suppliers: connect an invoice to its approval and payment receipt.",
            "An order-to-receipt record showing what was approved, its payment status and any reconciliation difference."
          ],
          "bullets": [
            "Input: a buyer receives a supplier invoice linked to a purchase order.",
            "Verify: match the order, invoice amount and approved supplier details.",
            "Approve: the finance owner reviews the request against the company mandate.",
            "Execute: an eligible external payment provider executes the approved instruction in a future integration.",
            "Reconcile: associate the provider receipt with the invoice and record outstanding differences."
          ],
          "caseStudy": {
            "label": "Illustrative workflow · no real funds",
            "stepsLabel": "Proposed workflow",
            "resultLabel": "Expected output",
            "exceptionLabel": "Exception handling",
            "exception": "If payment status is unknown, query the provider and send the case for review before issuing a new instruction.",
            "cta": "Discuss a trade-payment workflow"
          }
        },
        {
          "id": "agent",
          "title": "An Agent buys a paid data response",
          "paragraphs": [
            "For Agent and paid-API teams: turn a service request into a budgeted purchase with an accountable authorization decision.",
            "A trace of the request, policy decision, payment result and delivered resource — or an explicit unresolved state."
          ],
          "bullets": [
            "Input: an Agent requests a paid data resource; the service returns x402 payment requirements.",
            "Evaluate: check the quoted asset, network, amount and recipient against an explicit mandate.",
            "Authorize: allow only purchases within the budget and validity period; send exceptions to a person.",
            "Execute: a compatible payment client submits authorization through its selected payment channel.",
            "Record: associate the payment result and service response with the original request."
          ],
          "caseStudy": {
            "label": "Illustrative workflow · no real funds",
            "stepsLabel": "Proposed workflow",
            "resultLabel": "Expected output",
            "exceptionLabel": "Exception handling",
            "exception": "An unapproved recipient or exceeded budget stops the automatic path. Unknown results are investigated before retrying.",
            "cta": "Co-design an Agent payment flow"
          }
        },
        {
          "id": "x402",
          "title": "x402 & pay-per-request",
          "paragraphs": [
            "Explore HTTP-native payment negotiation for APIs, data and digital services. Make payment part of the request-and-response flow.",
            "Request → 402 → payment → response"
          ]
        },
        {
          "id": "micropayments",
          "title": "Small payments. Frequent value.",
          "paragraphs": [
            "Support the design of usage-based payments for inference, compute and content. Explore per-call charging and aggregated billing where appropriate.",
            "API calls · compute · digital content"
          ]
        }
      ]
    },
    "developers": {
      "title": "Interfaces for controlled machine commerce. — AirDB",
      "description": "Explore the architecture and protocol ideas behind authorized Agent transactions. These are design examples, not production endpoints or a live sandbox.",
      "heading": "Interfaces for controlled machine commerce.",
      "intro": "Explore the architecture and protocol ideas behind authorized Agent transactions. These are design examples, not production endpoints or a live sandbox.",
      "sections": [
        {
          "id": "protocol",
          "title": "Protocol, asset and channel are different layers.",
          "paragraphs": [
            "HTTP-native negotiation is one piece of the workflow. The asset, network, execution provider and business responsibilities need separate evaluation. The illustration below does not establish a live AirDB integration or native e-CNY support."
          ]
        },
        {
          "id": "sandbox",
          "title": "A sandbox is a next step, not a current service.",
          "paragraphs": [
            "Planned work includes test identities, simulated balances, policy rejection and reconciliation events. No live sandbox, API key, SDK or real-money interface is offered here."
          ]
        }
      ]
    },
    "trust": {
      "title": "Autonomy needs accountability. — AirDB",
      "description": "Trust begins with a clear account of what exists, what is planned and who decides. Our proposed controls keep financial authority separate from model output.",
      "heading": "Autonomy needs accountability.",
      "intro": "Trust begins with a clear account of what exists, what is planned and who decides. Our proposed controls keep financial authority separate from model output.",
      "sections": [
        {
          "id": "current",
          "title": "What exists today",
          "paragraphs": [
            "This website shares research and proposed capabilities. Financial features remain in exploration or planning. There is no live wallet, custody, exchange or settlement service."
          ]
        },
        {
          "id": "mandates",
          "title": "Clear mandates",
          "paragraphs": [
            "AI may propose an intent. Deterministic policy and accountable people decide whether it can proceed."
          ]
        },
        {
          "id": "uncertainty",
          "title": "Uncertainty stays visible",
          "paragraphs": [
            "An unknown outcome must be investigated, not blindly retried. Revoking a mandate restricts future requests; it does not reverse completed transactions."
          ]
        },
        {
          "id": "evidence",
          "title": "Evidence before claims",
          "paragraphs": [
            "We do not publish customer, licensing, performance or settlement claims without evidence. A roadmap is not a promise of availability."
          ]
        },
        {
          "id": "privacy",
          "title": "Website data & contact",
          "paragraphs": [
            "There is no account, self-hosted form or analytics tracker on this site. Hosting providers may process access logs. Email is handled by your mail provider and the recipient’s email service. Please share a business scenario, not identity documents, account credentials, private keys or actual payment records."
          ]
        }
      ]
    },
    "research": {
      "title": "Ideas for the next digital economy. — AirDB",
      "description": "Our research connects practical trade workflows with a longer-term question: what changes when software participates in economic activity?",
      "heading": "Ideas for the next digital economy.",
      "intro": "Our research connects practical trade workflows with a longer-term question: what changes when software participates in economic activity?",
      "sections": [
        {
          "id": "editorial",
          "title": "Evidence before claims",
          "paragraphs": [
            "We do not publish customer, licensing, performance or settlement claims without evidence. A roadmap is not a promise of availability."
          ]
        }
      ]
    },
    "article": {
      "title": "AI reshapes cross-border payments: efficiency, risk and the Agent economy — AirDB",
      "description": "When software begins to initiate transactions, efficiency, authorization and responsibility must evolve together. An AirDB research perspective, not a product availability announcement.",
      "heading": "AI reshapes cross-border payments: efficiency, risk and the Agent economy",
      "intro": "When software begins to initiate transactions, efficiency, authorization and responsibility must evolve together. An AirDB research perspective, not a product availability announcement.",
      "sections": []
    },
    "company": {
      "title": "Build for the next generation of commerce. — AirDB",
      "description": "AirDB explores financial infrastructure for the AI and Agent era. Cross-border trade is our starting point; a more connected digital economy is the long-term direction.",
      "heading": "Build for the next generation of commerce.",
      "intro": "AirDB explores financial infrastructure for the AI and Agent era. Cross-border trade is our starting point; a more connected digital economy is the long-term direction.",
      "sections": [
        {
          "id": "story",
          "title": "From trade to the Agent economy",
          "paragraphs": [
            "We see cross-border trade as a concrete place to understand authorization, payment coordination and reconciliation. The same foundations may support software acting on behalf of people and organizations."
          ]
        },
        {
          "id": "foundation",
          "title": "Build shared foundations",
          "paragraphs": [
            "Our direction is enterprise software, measured by useful workflows and reliable engineering. Software subscriptions, usage-based services and enterprise support are business-model hypotheses, not current price plans."
          ]
        },
        {
          "id": "public-purpose",
          "title": "Technology with a public purpose",
          "paragraphs": [
            "Technology for public benefit is part of our culture: making knowledge easier to access, sharing useful work and contributing to open collaboration. It is a principle, not a claim of grants, programs or outcomes."
          ]
        },
        {
          "id": "contact",
          "title": "Choose a starting conversation.",
          "paragraphs": [
            "For a trade workflow, share the order-to-payment handoffs and who approves them. For an Agent use case, share the paid service, authorization scope and expected result. Describe the process without sending live payment records or credentials."
          ]
        }
      ]
    }
  },
  "capabilities": {
    "orchestration": {
      "title": "Payment orchestration",
      "summary": "Connect an order, an approval and an external payment result in a traceable workflow.",
      "input": "Order & intent",
      "output": "Coordinated workflow",
      "boundaries": [
        "Orchestration does not imply custody of funds or ownership of a settlement network."
      ]
    },
    "authorization": {
      "title": "Authorization & risk controls",
      "summary": "Define who may act, for what purpose, within which limits — with human review for exceptions.",
      "input": "Identity & mandate",
      "output": "Policy decision",
      "boundaries": [
        "Planned controls do not eliminate fraud. A model cannot approve its own exception."
      ]
    },
    "reconciliation": {
      "title": "Records & reconciliation",
      "summary": "Link business events and external receipts so teams can investigate differences.",
      "input": "Events & receipts",
      "output": "Reconciled business record",
      "boundaries": [
        "A business record is not a bank balance or proof of final settlement."
      ]
    },
    "agent": {
      "title": "Agent transaction interfaces",
      "summary": "Translate machine requests into bounded transaction intents and explore protocol adapters.",
      "input": "Service request",
      "output": "Authorized intent",
      "boundaries": [
        "This is neither an unrestricted wallet nor proof of native e-CNY support in x402."
      ]
    }
  }
} satisfies LocaleCopy;
export default content;
