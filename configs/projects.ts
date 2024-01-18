export type Project = {
  title: string;
  description: string;
  image: string;
  extra?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "NaviPath",
    description: "A human-AI collaborative navigation system for pathologists",
    extra:
      "Artificial Intelligence (AI) brings advancements to support pathologists in navigating high-resolution tumor images to search for pathology patterns of interest. However, existing AI-assisted tools have not realized this promised potential due to a lack of insight into pathology and HCI considerations for pathologists' navigation workflows in practice. We first conducted a formative study with six medical professionals in pathology to capture their navigation strategies. By incorporating our observations along with the pathologists' domain knowledge, we designed NaviPath — a human-AI collaborative navigation system. An evaluation study with 15 medical professionals in pathology indicated that: (i) compared to the manual navigation, participants saw more than twice the number of pathological patterns in unit time with NaviPath, and (ii) participants achieved higher precision and recall against the AI and the manual navigation on average. Further qualitative analysis revealed that navigation was more consistent with NaviPath, which can improve the overall examination quality.",
    image: "/images/project-navipath.jpeg",
  },
  {
    title: "XCreation",
    description: "A Graph-based Crossmodal Generative Creativity Support Tool",
    extra:
      "Creativity Support Tools (CSTs) aid in the efficient and effective composition of creative content, such as picture books. However, many existing CSTs only allow for mono-modal creation, whereas previous studies have become theoretically and technically mature to support multi-modal innovative creations. To overcome this limitation, we introduce XCreation, a novel CST that leverages generative AI to support cross-modal storybook creation. Nevertheless, directly deploying AI models to CSTs can still be problematic as they are mostly black-box architectures that are not comprehensible to human users. Therefore, we integrate an interpretable entity-relation graph to intuitively represent picture elements and their relations, improving the usability of the underlying generative structures. Our between-subject user study demonstrates that XCreation supports continuous plot creation with increased creativity, controllability, usability, and interpretability. XCreation is applicable to various scenarios, including interactive storytelling and picture book creation, thanks to its multimodal nature.",
    image: "/images/project-xcreation.png",
  },
  {
    title: "INTELMO",
    description:
      "An library enabling interactive interface adoption for NLP models",
    extra:
      "INTELMO is short for Interactive Interface Toolkit for Language Models. It's an easy-to-use library to help model developers adopt user-faced interactive interfaces and articles from real-time RSS sources for their language models. The library categorizes common NLP tasks and provides default style patterns, streamlining the process of creating interfaces with minimal code modifications while ensuring an intuitive user experience. Moreover, INTELMO employs a multi-granular hierarchical abstraction to afford developers fine-grained and flexible control over user interfaces.",
    image: "/images/project-intelmo.png",
  },
];
