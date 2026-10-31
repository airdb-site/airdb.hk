import type { LocaleCopy } from "./model.ts";
const content = {
  lang: "zh-Hant",
  nav: {
    platform: "平台",
    solutions: "場景",
    developers: "開發者",
    research: "研究",
    company: "公司",
  },
  ui: {
    menu: "選單",
    contact: "聯絡團隊",
    skip: "跳至內容",
    top: "返回頂部",
    primary: "平台",
    secondary: "聯絡團隊",
    notice: "探索與規劃階段；本站不處理真實支付。",
    legal:
      "本網站僅作構想與能力展示，不提供實際錢包、託管、兌換或清算服務，不暗示監管批准或官方關聯。",
    figureNote: "架構示意 · 非實際清算通道",
    status: {
      planned: "規劃中",
      exploring: "探索中",
    },
    flow: ["支付意圖", "授權策略", "支付編排", "通道接入", "回執與對賬"],
    read: "閱讀核心專題",
    flowTitle: "一次交易意圖，一條受控路徑。",
    external: "外部通道 · 未來接入評估",
    human: "例外情況 → 人工覆核",
    vision: "我們的方向",
    research: "研究觀點",
    back: "返回平台",
    source: "來源與適用範圍",
    date: "研究日期",
    author: "AirDB 編輯",
  },
  pages: {
    home: {
      title: "為企業與智能體，構建可信的全球交易基礎設施。 — AirDB",
      description:
        "從跨境貿易支付出發，探索連接授權、支付編排與對賬的技術，讓人與 Agent 在清晰邊界內協作。",
      heading: "為企業與智能體，構建可信的全球交易基礎設施。",
      intro:
        "從跨境貿易支付出發，探索連接授權、支付編排與對賬的技術，讓人與 Agent 在清晰邊界內協作。",
      sections: [
        {
          id: "problem",
          title: "系統之間，還有很多工作。",
          paragraphs: [
            "付款只是業務交易的一部分。訂單、權限與回執分散在不同系統中。我們的起點，是讓這些交接變得更清晰。",
          ],
        },
        {
          id: "platform",
          title: "四類能力，一個共同基礎。",
          paragraphs: [
            "連接流程，也明確責任。以下能力均為擬議方向，本站不提供實際支付服務。",
          ],
        },
        {
          id: "audience",
          title: "圍繞真實流程建設。",
          paragraphs: [
            "優先服務跨境業務平台與貿易科技團隊，再面向 Agent 與付費 API 開發者。先從一個流程、一位明確的負責人開始。",
          ],
        },
        {
          id: "closing",
          title: "從一個真實流程，開始共同設計。",
          paragraphs: [
            "告訴我們，審批、付款狀態或對賬在哪一步變得困難。先理解問題，再討論技術接入。",
          ],
        },
      ],
    },
    platform: {
      title: "從交易意圖，到可核對的結果。 — AirDB",
      description:
        "一個規劃中的平台，四類相互連接的能力。圍繞企業真實流程，為交易意圖、權限與結果建立共同語言。",
      heading: "從交易意圖，到可核對的結果。",
      intro:
        "一個規劃中的平台，四類相互連接的能力。圍繞企業真實流程，為交易意圖、權限與結果建立共同語言。",
      sections: [
        {
          id: "roadmap",
          title: "循序驗證，再向前一步。",
          paragraphs: [
            "產品探索 → 無資金原型 → 有條件的合作評估 → 平台擴展。每一步以證據為前提，不以承諾上線日期代替驗證。",
          ],
        },
        {
          id: "mandate",
          title: "Agent 授權策略示例",
          paragraphs: [
            "授權策略示例：API 與算力用途；單筆等值 ¥1.00；每日等值 ¥100.00；僅限已批准服務商；例外需要人工審批。數值不是產品定價，也不代表已支援的支付幣種。",
          ],
          bullets: [
            "預算與限額 — 單筆限額、累計預算與授權有效期。",
            "收款方範圍 — 限定可付款對象及允許購買的服務。",
            "人工審批 — 異常與超限請求，在執行前交由人工覆核。",
            "可追溯事件 — 串聯支付意圖、策略決策與交易回執。",
          ],
        },
      ],
    },
    solutions: {
      title: "從跨境貿易出發，理解下一代交易。 — AirDB",
      description:
        "先理解訂單、審批與付款核對之間的工作，再將同樣的問題延伸到 Agent 採購與付費 API。",
      heading: "從跨境貿易出發，理解下一代交易。",
      intro:
        "先理解訂單、審批與付款核對之間的工作，再將同樣的問題延伸到 Agent 採購與付費 API。",
      sections: [
        {
          id: "trade",
          title: "跨境貿易支付",
          paragraphs: [
            "將採購訂單、供應商付款與對賬連接為可追溯的流程。數字人民幣通道接入屬於擬議方向。",
            "訂單 → 支付 → 對賬",
          ],
        },
        {
          id: "agent",
          title: "Agent 授權支付",
          paragraphs: [
            "為智能體設定明確預算和用途，在授權範圍內自動支付，超出權限的請求交由人工審批。",
            "授權 → 策略校驗 → 執行",
          ],
        },
        {
          id: "x402",
          title: "x402 按次付費",
          paragraphs: [
            "探索 API、數據與數字服務的 HTTP 原生支付協商，將付款融入請求與回應流程。",
            "請求 → 402 → 支付 → 回應",
          ],
        },
        {
          id: "micropayments",
          title: "小額高頻支付",
          paragraphs: [
            "面向模型推理、算力和內容服務，探索按次、按量付費，以及適用場景下的聚合計費。",
            "API 調用 · 算力 · 數字內容",
          ],
        },
      ],
    },
    developers: {
      title: "為受控的機器交易設計介面。 — AirDB",
      description:
        "了解 Agent 授權交易背後的架構和協議思路。這裏展示設計示例，不是生產介面或已開放的沙盒。",
      heading: "為受控的機器交易設計介面。",
      intro:
        "了解 Agent 授權交易背後的架構和協議思路。這裏展示設計示例，不是生產介面或已開放的沙盒。",
      sections: [
        {
          id: "protocol",
          title: "協議、資產與通道，是不同的層次。",
          paragraphs: [
            "HTTP 原生支付協商只是工作流的一部分。資產、網絡、執行方和業務責任都需要分別評估。下方示例不代表 AirDB 已接入真實通道，也不代表 x402 原生支援數字人民幣。",
          ],
        },
        {
          id: "sandbox",
          title: "沙盒是下一步，不是當前服務。",
          paragraphs: [
            "規劃內容包括測試身份、模擬餘額、策略拒絕與對賬事件。這裏不提供實際沙盒、API 密鑰、SDK 或真實資金介面。",
          ],
        },
      ],
    },
    trust: {
      title: "自主行動，需要明確責任。 — AirDB",
      description:
        "信任始於清楚說明：現在有甚麼、哪些仍在規劃、由誰作出決定。擬議控制將金融授權與模型輸出分開。",
      heading: "自主行動，需要明確責任。",
      intro:
        "信任始於清楚說明：現在有甚麼、哪些仍在規劃、由誰作出決定。擬議控制將金融授權與模型輸出分開。",
      sections: [
        {
          id: "current",
          title: "當前真實狀態",
          paragraphs: [
            "本站展示研究與擬議能力。金融功能仍在探索或規劃中，沒有實際錢包、託管、兌換或清算服務。",
          ],
        },
        {
          id: "mandates",
          title: "明確授權",
          paragraphs: [
            "AI 可以提出交易意圖，但是否進入下一步，要由確定性的策略和承擔責任的人決定。",
          ],
        },
        {
          id: "uncertainty",
          title: "保留不確定性",
          paragraphs: [
            "結果未知時應核查，不能盲目重付。撤銷授權限制後續請求，不代表能夠逆轉已完成交易。",
          ],
        },
        {
          id: "evidence",
          title: "先有證據，再作聲明",
          paragraphs: [
            "沒有證據，不發佈客戶、牌照、效能或清算能力聲明。路線圖不是可用性承諾。",
          ],
        },
        {
          id: "privacy",
          title: "網站數據與聯絡",
          paragraphs: [
            "本站沒有帳戶、自建表單或分析追蹤器。託管服務商可能處理訪問日誌，郵件由你的郵件服務商與收件方郵件服務處理。請描述業務場景，不要發送身份證件、帳戶憑證、私鑰或真實支付記錄。",
          ],
        },
      ],
    },
    research: {
      title: "探索下一代數字經濟。 — AirDB",
      description:
        "連接具體的貿易流程與一個長期問題：當軟件開始參與經濟活動，交易需要怎樣改變？",
      heading: "探索下一代數字經濟。",
      intro:
        "連接具體的貿易流程與一個長期問題：當軟件開始參與經濟活動，交易需要怎樣改變？",
      sections: [
        {
          id: "editorial",
          title: "先有證據，再作聲明",
          paragraphs: [
            "沒有證據，不發佈客戶、牌照、效能或清算能力聲明。路線圖不是可用性承諾。",
          ],
        },
      ],
    },
    article: {
      title: "AI重構跨境支付：效率、風控與Agent商業時代 — AirDB",
      description:
        "當軟件開始發起經濟行為，效率、授權與責任需要一起演進。這是 AirDB 的研究觀點，不是產品上線公告。",
      heading: "AI重構跨境支付：效率、風控與Agent商業時代",
      intro:
        "當軟件開始發起經濟行為，效率、授權與責任需要一起演進。這是 AirDB 的研究觀點，不是產品上線公告。",
      sections: [],
    },
    company: {
      title: "為下一代數字經濟，建設長期可信的技術。 — AirDB",
      description:
        "AirDB 探索面向 AI 與 Agent 時代的金融基礎設施。跨境貿易是切入點，更互聯的數字經濟是長期方向。",
      heading: "為下一代數字經濟，建設長期可信的技術。",
      intro:
        "AirDB 探索面向 AI 與 Agent 時代的金融基礎設施。跨境貿易是切入點，更互聯的數字經濟是長期方向。",
      sections: [
        {
          id: "story",
          title: "從貿易，走向 Agent 商業",
          paragraphs: [
            "跨境貿易提供了具體的授權、付款協同與對賬問題。同樣的基礎，未來也可能服務於代表個人和組織行動的軟件。",
          ],
        },
        {
          id: "foundation",
          title: "建設可複用的基礎",
          paragraphs: [
            "我們以企業軟件為方向，以有用的工作流和可靠工程衡量進展。軟件訂閱、按使用量服務與企業支援屬於商業模式假設，不是當前報價。",
          ],
        },
        {
          id: "public-purpose",
          title: "讓技術產生公共價值",
          paragraphs: [
            "技術公益是文化初心：讓知識更容易獲得，分享有用的工作，參與開放協作。這是原則，不是對資助、項目或成果的虛構聲明。",
          ],
        },
        {
          id: "contact",
          title: "一起理解你的業務場景。",
          paragraphs: [
            "可以介紹工作流程、你的角色，以及希望解決的問題。請勿發送敏感金融或身份資訊。",
          ],
        },
      ],
    },
  },
  capabilities: {
    orchestration: {
      title: "支付編排",
      summary: "將訂單、審批與外部付款結果連接為可追溯的工作流。",
      input: "訂單與意圖",
      output: "協同工作流",
      boundaries: ["編排不代表 AirDB 持有資金或擁有清算網絡。"],
    },
    authorization: {
      title: "授權與風控",
      summary: "明確誰可以行動、為了甚麼、額度多少，並將例外交由人工覆核。",
      input: "身份與授權",
      output: "策略決定",
      boundaries: ["擬議控制不承諾消除欺詐，模型不能批准自己的異常。"],
    },
    reconciliation: {
      title: "交易記錄與對賬",
      summary: "關聯業務事件與外部回執，讓團隊有依據地核對與處理差異。",
      input: "事件與回執",
      output: "可核對的業務記錄",
      boundaries: ["業務記錄不等於銀行餘額，也不是最終清算證明。"],
    },
    agent: {
      title: "Agent 交易介面",
      summary: "將機器請求映射到有邊界的交易意圖，探索協議適配與付費調用。",
      input: "服務請求",
      output: "受控交易意圖",
      boundaries: ["這不是無限授權錢包，也不證明 x402 原生支援數字人民幣。"],
    },
  },
} satisfies LocaleCopy;
export default content;
