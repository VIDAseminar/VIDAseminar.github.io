// src/data.js

export const nextTalk = {
  date: "Wed, Apr 16, 2025",
  time: "12:20 - 13:20",
  location: "Room 1114, 370 Jay St",
  zoomLink: "https://nyu.zoom.us/j/95901395759",
  speaker1: "Benjamin Feuer",
  topic1: "A Year of Explosive Progress in LLMs, Seen Through a Data-centric Lens",
  speaker2: "Tianxiao He",
  topic2: "Self supervised learning for in vivo localization of microelectrode arrays",
};

export const talkDetails = {
  title1: "Topic1: " + nextTalk.topic1,
  researcher1: `${nextTalk.speaker1}, Ph.D. Student, Advised by Chinmay Hegde`,
  image1: "./images/Benjamin.jpeg",
  abstract1:
    "LLMs have experienced an extended \"annus mirabilis\" since the public debut of ChatGPT, with innovation proceeding at an unprecedented pace. But many open scientific questions remain. When is it safe to replace human evaluators with LLM judges? What are the trade-offs we can expect? How trustworthy are the benchmarks we use to measure progress, and how can we improve them? How can we maximize the potential of synthetic data for training LLMs? My talk will cover some of my recent research in these areas, and highlight some areas I think are important for future progress.",

  title2: "Topic2: " + nextTalk.topic2,
  researcher2: `${nextTalk.speaker2}, Ph.D Student, Advised by Erdem Varol`,
  image2: "./images/tianxiao.jpeg",
  abstract2:
    "In electrophysiology, precise in-vivo localization of deep brain recording sites is crucial for longitudinal studies and targeted stimulation. However, existing methods—atlas-guided insertion, CT/MRI scans, and post hoc histology—each have limitations in precision, resolution, or longitudinal tracking. To address this, we present a self-supervised localizer to predict hippocampal regions from raw recordings, independent of probe geometry. Our framework operates on neural population activity and leverages a pre-trained transformer with contrastive learning to extract latent features from raw waveforms. We demonstrate our method on mouse Neuronexus recordings, consistently outperforming other approaches in zero-shot prediction of hippocampal regions in novel subjects. This facilitates precise detection, localization, and modulation of hippocampal activity for future interventions in memory-related disorders.",
};

export const upcomingTalks = [
  {
    date: "Apr 130, 2025",
    time: "12:20 - 12:50",
    location: "Room 1114, 370 Jay St",
    speaker: "TBD",
    topic: "",
  },
  {
    date: "Apr 16, 2025",
    time: "12:50 - 13:20",
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
    date: "Dec 18, 2024",
    speakers: [
      {
        name: "Stella Holbrook",
        title: "Spatial indexes in correlated data discovery",
        zoomLink:
          "",
        slidesLink:
          "https://drive.google.com/file/d/1LEpnyf0GA-zaiTanBdu2q7SggLt2hG7N/view?usp=sharing",
      },
      {
        name: "Christos Koutras ",
        title: "Tabular Schema Matching for Modern Settings",
        zoomLink:
          "",
        slidesLink: "https://drive.google.com/file/d/1OnrjEMEsZ6PY4KPvgYrG0XTZmblpZGPC/view?usp=sharing",
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
  {
    date: "Apr 2, 2025",
    speakers: [
      {
        name: "Miao Zhang",
        title:
          "Common Sense Bias Modeling for Classification Tasks",
        zoomLink:
          "",
        slidesLink: "https://docs.google.com/presentation/d/1EKuVQBcNwW79M7pGCYW_TlNGBNRFgnw-wODxuwp5F5U/edit?usp=gmail",
      },
      {
        name: "Kelly Marshall",
        title:
          "Language Representations For 3D Machine Learning",
        zoomLink:
          "",
        slidesLink: "https://drive.google.com/file/d/1UfWjZ4BYt91eyL5NG_cgZGzWS6mz-SWM/view?usp=drive_link",
      }
    ],
  },
  // Additional events...
];
