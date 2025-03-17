// src/data.js

export const nextTalk = {
  date: "Wed, Mar 12, 2025",
  time: "12:00 - 12:30",
  location: "Room 1114, 370 Jay St",
  zoomLink: "https://nyu.zoom.us/j/95901395759",
  speaker1: "Apoorv Vikram Singh",
  topic1:
    "Differentially Private Synthetic Data Generation using Moment Matching",
  // speaker2: "",
  // topic2: "",
};

export const talkDetails = {
  title1: "Topic1: " + nextTalk.topic1,
  researcher1: `${nextTalk.speaker1}, Ph.D. Student, Advised by Chris Musco`,
  image1: "./images/apoorv.jpeg",
  abstract1:
    'One of the most fundamental problems in statistics is the method of moments: given the moments of a probability distribution, the goal is to estimate the distribution (or a function of it). I will show how to do this efficiently using Chebyshev polynomials, leading to an optimal and practical algorithm. Next, I will introduce differential privacy and demonstrate how to generate differentially private synthetic data using the same approach. If time permits, I will also sketch the proof. No background in distribution learning or differential privacy is assumed. This talk is based on joint work with Cameron Musco, Christopher Musco, and Lucas Rosenblatt.',

  // title2: "Topic2: " + nextTalk.topic2,
  // researcher2: `${nextTalk.speaker2}, M.S. Student, Advised by Claudio Silva`,
  // image2: "./images/jewelina.JPG",
  // abstract2:
  //   "By leveraging computational methods, physiological sensing, and AI-driven adaptation, I develop intelligent interfaces that dynamically respond to users' cognitive and behavioral states, optimizing experience and performance in real time. My work spans aviation, driving assistance, healthcare, and gaming, demonstrating the impact of adaptive systems across diverse domains.",
};

export const upcomingTalks = [
  {
    date: "Apr 2, 2025",
    time: "12:00 - 12:30",
    location: "Room 1114, 370 Jay St",
    speaker: "TBD",
    topic: "",
  },
  {
    date: "Mar 12, 2025",
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
