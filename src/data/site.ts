export const profile = {
  name: "Zihao Tang",
  chineseName: "唐子豪",
  handle: "IshiKura-a",
  email: "tangzihao@zju.edu.cn",
  location: "Microsoft · Zhejiang University",
  thesis: "I work on LLM agents, AI memory, and agentic reinforcement learning.",
  links: [
    { label: "Scholar", href: "https://scholar.google.com/citations?user=YBffTgsAAAAJ" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/%E5%AD%90%E8%B1%AA-%E5%94%90-99aa85367/" },
    { label: "Email", href: "mailto:tangzihao@zju.edu.cn" },
  ],
};

export const thesisItems = [
  {
    title: "LLM Agents",
    body: "I care about agents that remain reliable when tasks require long-horizon planning, tool use, search, and code interaction rather than one-shot response generation.",
  },
  {
    title: "AI Memory",
    body: "I care about memory that is organized, selective, and useful for future decisions, not just a larger context window or similarity-based recall.",
  },
  {
    title: "Agentic RL",
    body: "I care about agents that improve from interaction and feedback, turning repeated experience into reusable procedures rather than isolated task traces.",
  },
];

export const publications = [
  {
    year: "2026",
    venue: "ACL",
    title: "Mnemis: Dual-Route Retrieval on Hierarchical Graphs for Long-Term LLM Memory",
    authors: ["Zihao Tang", "Xin Yu", "Ziyu Xiao", "Zengxuan Wen", "Zelin Li", "Jiaxi Zhou", "Hualei Wang", "Haohua Wang", "Haizhen Huang", "Weiwei Deng", "Feng Sun", "Qi Zhang"],
    note: "Long-term memory retrieval for LLM agents; reaches 93.9 on LoCoMo and 91.6 on LongMemEval-S with GPT-4.1-mini.",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2602.15313" },
      { label: "Code", href: "https://github.com/microsoft/Mnemis" },
    ],
  },
  {
    year: "2026",
    venue: "ACL",
    title: "TL; DR: Too Long, Do Re-weighting for Efficient LLM Reasoning Compression",
    authors: ["Zhong-Zhi Li", "Xiao Liang", "Zihao Tang", "Lei Ji", "Peijie Wang", "Haotian Xu", "Xing W", "Haizhen Huang", "Weiwei Deng", "Yeyun Gong", "Zhijiang Guo", "Xiao Liu", "Fei Yin", "Cheng-Lin Liu"],
    note: "Reasoning compression through Thinking Length Data Re-weighting, reducing output tokens by nearly 40% while maintaining accuracy.",
    links: [
      { label: "Paper", href: "https://openreview.net/forum?id=U8XHQLcdeQ" },
      { label: "Code", href: "https://github.com/zzli2022/TLDR" },
    ],
  },
  {
    year: "2025",
    venue: "arXiv",
    title: "Sigma: Differential Rescaling of Query, Key and Value for Efficient Language Models",
    authors: ["Zhenghao Lin", "Zihao Tang", "Xiao Liu", "Yeyun Gong", "Yi Cheng", "Qi Chen", "Hang Li", "Ying Xin", "Ziyue Yang", "Kailai Yang", "Yu Yan", "Xiao Liang", "Shuai Lu", "Yiming Huang", "Zheheng Luo", "Lei Qu", "Xuan Feng", "Yaoxiang Wang", "Yuqing Xia", "Feiyang Chen", "Yuting Jiang", "Yasen Hu", "Hao Ni", "Binyang Li", "Guoshuai Zhao", "Jui-Hao Chiang", "Zhongxin Guo", "Chen Lin", "Kun Kuang", "Wenjie Li", "Yelong Shen", "Jian Jiao", "Peng Cheng", "Mao Yang"],
    note: "Efficient system-domain language modeling with DiffQKV attention for faster long-context inference.",
    links: [{ label: "Paper", href: "https://arxiv.org/abs/2501.13629" }],
  },
  {
    year: "2024",
    venue: "arXiv",
    title: "ModelGPT: Unleashing LLM's Capabilities for Tailored Model Generation",
    authors: ["Zihao Tang", "Zheqi Lv", "Shengyu Zhang", "Fei Wu", "Kun Kuang"],
    note: "LLM-assisted model generation from user data or task descriptions.",
    links: [
      { label: "Paper", href: "https://arxiv.org/abs/2402.12408" },
      { label: "Code", href: "https://github.com/IshiKura-a/ModelGPT" },
    ],
  },
  {
    year: "2024",
    venue: "ICLR",
    title: "AuG-KD: Anchor-Based Mixup Generation for Out-of-Domain Knowledge Distillation",
    authors: ["Zihao Tang", "Zheqi Lv", "Shengyu Zhang", "Yifan Zhou", "Xinyu Duan", "Fei Wu", "Kun Kuang"],
    note: "Data-free knowledge distillation under domain shift with uncertainty-guided anchors and mixup generation.",
    links: [
      { label: "Paper", href: "https://openreview.net/forum?id=fcqWJ8JgMR" },
      { label: "Code", href: "https://github.com/IshiKura-a/AuG-KD" },
    ],
  },
  {
    year: "2025",
    venue: "ICML",
    title: "Latent Score-Based Reweighting for Robust Classification on Imbalanced Tabular Data",
    authors: ["Yunze Tong", "Fengda Zhang", "Zihao Tang", "Kaifeng Gao", "Kai Huang", "Pengfei Lyu", "Jun Xiao", "Kun Kuang"],
    note: "Robust reweighting for classification on imbalanced tabular data.",
    links: [{ label: "Paper", href: "https://openreview.net/forum?id=nnO4TpeUnH" }],
  },
];
