// src/data.js

export const nextTalk = {
  date: "Wed, Apr 2, 2025",
  time: "12:00 - 13:00",
  location: "Room 1114, 370 Jay St",
  zoomLink: "https://nyu.zoom.us/j/95901395759",
  speaker1: "Miao Zhang",
  topic1: "Common Sense Bias Modeling for Classification Tasks",
  speaker2: "Kelly Marshall",
  topic2: "Language Representations For 3D Machine Learning",
};

export const talkDetails = {
  title1: "Topic1: " + nextTalk.topic1,
  researcher1: `${nextTalk.speaker1}, Ph.D. Student, Advised by Rumi Chunara`,
  image1: "./images/miao.JPG",
  abstract1:
    "Machine learning model bias can arise from dataset composition: correlated sensitive features can distort the downstream classification model's decision boundary and lead to performance differences along these features. To this end, we propose a novel framework to extract comprehensive biases in image datasets based on textual descriptions, a common sense-rich modality. Specifically, features are constructed by clustering noun phrase embeddings with similar semantics. The presence of each feature across the dataset is inferred, and their co-occurrence statistics are measured, with spurious correlations optionally examined by a human-in-the-loop module. Our method uncovers novel model biases in multiple image benchmark datasets. Furthermore, the discovered bias can be mitigated by simple data re-weighting to de-correlate the features, achieving state-of-the-art performance.",

  title2: "Topic2: " + nextTalk.topic2,
  researcher2: `${nextTalk.speaker2}, Ph.D Student, Advised by Chinmay Hegde`,
  image2: "./images/kelly.jpg",
  abstract2:
    "Over the past decade, the generative capabilities of machine learning systems has undergone transformational development, enabling high-quality data synthesis at previously unthinkable levels. Until now, these advances have been largely confined to the image and language modalities, where usable data is abundant. Now, 3D generative modeling promises to carry this revolution beyond words and pixels, bringing it into the world we inhabit. These developments motivate the desire to connect language and 3D modalities to allow user control over 3D tools and give them access to the vast knowledge present in existing text corpuses. To accomplish this, we introduce several works which demonstrate the value of representing 3D data as language, simplifying the problem of connecting the two domains. We show the effectiveness of this approach for 3D generative modeling for the generation of both physical assets (e.g 3D printing) as well as digital assets.",
};

export const upcomingTalks = [
  {
    date: "Apr 16, 2025",
    time: "12:00 - 12:30",
    location: "Room 1114, 370 Jay St",
    speaker: "TBD",
    topic: "",
  },
  {
    date: "Apr 16, 2025",
    time: "12:30 - 13:00",
    location: "Room 1114, 370 Jay St",
    speaker: "TBD",
    topic: "",
  },
];

export const historyTalksData = [
  {
    date: "Nov 6, 2024",
    speakers: [
      {
        name: "Teal Witter",
        title: "Provably Accurate Estimators for Shapley Values",
        zoomLink:
          "https://drive.google.com/file/d/1sbsi3bMhd1Vteu_aHCDVr6Zo6lfH1SXI/view?usp=drive_link",
        slidesLink:
          "https://drive.google.com/file/d/1Lcknq7lghj9I56zokmK0zKex-U94PGyn/view?usp=drive_link",
      },
      {
        name: "Niv Cohen",
        title: "Discovering and Erasing Undesired Concepts",
        zoomLink:
          "https://drive.google.com/file/d/1obz3bRHseG45eXnTXLqfZEwJv0oXNz1j/view?usp=drive_link",
        slidesLink:
          "https://drive.google.com/file/d/1meFaiUg22yKswZtZ6eYWojTUoWGyCefT/view?usp=drive_link",
      },
    ],
  },
  {
    date: "Nov 20, 2024",
    speakers: [
      {
        name: "Alexander Ratzan",
        title: "Molecular Connectomics from Small to Large Brains",
        zoomLink:
          "https://drive.google.com/file/d/1w9tbwW5canWQLMuf04Us0pBmV1kTb6Fa/view?usp=drive_link",
        slidesLink:
          "https://drive.google.com/file/d/11iOsm16DZ9iTEq_bMp0nlXBnrz7wb4pW/view?usp=drive_link",
      },
      {
        name: "Felipe Inagaki de Oliveira",
        title:
          "TopoMap++: A faster and more space efficient technique to compute projections with topological guarantees",
        zoomLink:
          "https://drive.google.com/file/d/11ZTC-uEBshdkXlmRJOw1onHBdPv75ppC/view?usp=drive_link",
        slidesLink:
          "https://drive.google.com/file/d/1SzKt8_z_7cxJCMTt62jN5sYKiNmP0RU8/view?usp=drive_link",
      },
    ],
  },

  {
    date: "Dec 4, 2024",
    speakers: [
      {
        name: "Guande Wu",
        title: "Evaluating Collaborative Capabilities of Language Models",
        zoomLink:
          "https://drive.google.com/file/d/1iNOJLoltkFRHgMf3QNYkiM_tLLVt8aDB/view?usp=drive_link",
        slidesLink:
          "https://drive.google.com/file/d/1MaszoGCBtldtvtHKSde9U8fVBTXbmeXH/view?usp=drive_link",
      },
      {
        name: "Aécio Santos",
        title: "Sampling-Based Sketching Methods for Correlated Data Discovery",
        zoomLink:
          "https://drive.google.com/file/d/1iNOJLoltkFRHgMf3QNYkiM_tLLVt8aDB/view?usp=drive_link",
        slidesLink: "",
      },
    ],
  },
  {
    date: "Feb 26, 2025",
    speakers: [
      {
        name: "Andrew Bell",
        title:
          "Safeguarding Large Language Models in Real-time with Tunable Safety-Performance Trade-offs",
        zoomLink:
          "https://drive.google.com/file/d/1sj2UKfmXvQJAJvR7_uTzw1T7FUsvt4hm/view?usp=sharing",
        slidesLink: "",
      },
      {
        name: "Jewelina Wen",
        title:
          "Understanding, Enhancing, and Augmenting Human Interaction through Adaptive Systems",
        zoomLink:
          "https://drive.google.com/file/d/1sj2UKfmXvQJAJvR7_uTzw1T7FUsvt4hm/view?usp=sharing",
        slidesLink:
          "https://docs.google.com/presentation/d/1JO3gsuysW5UAIDfT-2Ryde6GyALQ5lyt/edit?usp=sharing&ouid=103225470520735592499&rtpof=true&sd=true",
      },
    ],
  },
  {
    date: "Mar 12, 2025",
    speakers: [
      {
        name: "Apoorv Vikram Singh",
        title:
          "Differentially Private Synthetic Data Generation using Moment Matching",
        zoomLink:
          "https://drive.google.com/file/d/1Enca1ZOS4xnX9_tlDWFTKOg1JuRpg62O/view?usp=drive_link",
        slidesLink: "",
      },
    ],
  },
  // Additional events...
];
