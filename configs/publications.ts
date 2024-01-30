type Publication = {
  title: string;
  authors: string[];
  conference: string;
  pdf?: string;
  doi?: string;
  award?: string;
  video?: string;
  code?: string;
  website?: string;
};

export const PUBLICATIONS: Publication[] = [
  {
    title:
      "A Human-AI Collaborative System to Support Mitosis Assessment in Pathology.",
    authors: [
      "Chunxu Yang",
      // Mohammad Haeri, Shino Magaki, Neda Zarrin-Khameh, Hongyan Gu, Xiang 'Anthony' Chen.
      "Mohammad Haeri",
      "Shino Magaki",
      "Neda Zarrin-Khameh",
      "Hongyan Gu",
      "Xiang 'Anthony' Chen",
    ],
    conference: "IUI 2024 (Just accepted)",
  },
  {
    title:
      "Enhancing Mitosis Quantification and Detection in in Meningiomas with Computational Digital Pathology",
    // Hongyan Gu, Chunxu Yang, Issa Al-kharouf, Shino Magaki, Nelli Lakis, Christopher Kazu Williams, Sallam Mohammad Alrosan, Ellie Kate Onstott, Wenzhong Yan1, Negar Khanlou, Inma Cobos, Xinhai Robert Zhang, Neda Zarrin-Khameh, Harry V. Vinters, Xiang ‘Anthony’ Chen, Mohammad Haeri.
    authors: [
      "Hongyan Gu",
      "Chunxu Yang",
      "Issa Al-kharouf",
      "Shino Magaki",
      "Nelli Lakis",
      "Christopher Kazu Williams",
      "Sallam Mohammad Alrosan",
      "Ellie Kate Onstott",
      "Wenzhong Yan",
      "Negar Khanlou",
      "Inma Cobos",
      "Xinhai Robert Zhang",
      "Neda Zarrin-Khameh",
      "Harry V. Vinters",
      "Xiang 'Anthony' Chen",
      "Mohammad Haeri",
    ],
    conference: "Acta Neuropathologica Communications",
    doi: "https://doi.org/10.1186/s40478-023-01707-6",
    pdf: "https://actaneurocomms.biomedcentral.com/articles/10.1186/s40478-023-01707-6",
  },
  {
    title:
      "XCreation: A Graph-based Crossmodal Generative Creativity Support Tool",
    authors: [
      "Zihan Yan",
      "Chunxu Yang",
      "Qihao Liang",
      "Xiang 'Anthony' Chen",
    ],
    conference: "UIST 2023",
    doi: "https://doi.org/10.1145/3586183.3606826",
    pdf: "https://dl.acm.org/doi/pdf/10.1145/3586183.3606826",
    video: "https://www.youtube.com/watch?v=vfQvrATPjt0",
  },
  {
    title: "INTELMO: Enhancing Models' Adoption of Interactive Interfaces",
    authors: [
      "Chunxu Yang",
      // Chien-Sheng Wu, Lidiya Murakhovs’ka, Philippe Laban, Xiang `Anthony' Chen.
      "Chien-Sheng Wu",
      "Lidiya Murakhovs’ka",
      "Philippe Laban",
      "Xiang 'Anthony' Chen",
    ],
    conference: "EMNLP 2023",
    video: "https://vimeo.com/manage/videos/852034145",
    code: "https://github.com/INTELMO/intelmo",
    // website: "https://intelmo.github.io/",
    pdf: "https://aclanthology.org/2023.emnlp-demo.14.pdf",
    doi: "https://doi.org/10.18653/v1/2023.emnlp-demo.14",
  },
  {
    title:
      "Augmenting Pathologists with NaviPath: Design and Evaluation of a Human-AI Collaborative Navigation System",
    // Hongyan Gu, Chunxu Yang, Mohammad Haeri, Jing Wang, Shirley Tang, Wenzhong Yan, Shujin He, Christopher Kazu Williams, Shino Magaki, Xiang 'Anthony' Chen
    authors: [
      "Hongyan Gu",
      "Chunxu Yang",
      "Mohammad Haeri",
      "Jing Wang",
      "Shirley Tang",
      "Wenzhong Yan",
      "Shujin He",
      "Christopher Kazu Williams",
      "Shino Magaki",
      "Xiang 'Anthony' Chen",
    ],
    conference: "ACM CHI 2023",
    pdf: "https://arxiv.org/pdf/2302.07309.pdf",
    doi: "https://doi.org/10.1145/3544548.3580694",
    award: "Best paper honorable mention award",
    video: "https://www.youtube.com/watch?v=qsOXyacbKfw",
  },
];
