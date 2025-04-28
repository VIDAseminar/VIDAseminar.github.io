// src/data.js

export const nextTalk = {
  date: "Wed, Apr 30, 2025",
  time: "12:20 - 13:20",
  location: "Room 1114, 370 Jay St",
  zoomLink: "https://nyu.zoom.us/j/95901395759",
  speaker1: "Majid Daliri",
  topic1:
    "QJL: 1-Bit Quantized JL Transform for KV Cache Quantization with Zero Overhead",
  speaker2: "Alessio Buonacucina",
  topic2:
    "From discrete data to continuous 3D model: a reverse engineering approach.",
};

export const talkDetails = {
  title1: "Topic1: " + nextTalk.topic1,
  researcher1: `${nextTalk.speaker1}, Ph.D. Student, Advised by Christopher Musco`,
  image1: "./images/Majid.jpg",
  abstract1:
    "Serving LLMs requires substantial memory due to the storage requirements of Key-Value (KV) embeddings in the KV cache, which grows with sequence length. An effective approach to compress KV cache is quantization. However, traditional quantization methods face significant memory overhead due to the need to store quantization constants (at least a zero point and a scale) in full precision per data block. Depending on the block size, this overhead can add 1 or 2 bits per quantized number. We introduce QJL, a new quantization approach that consists of a Johnson-Lindenstrauss (JL) transform followed by sign-bit quantization. In contrast to existing methods, QJL eliminates memory overheads by removing the need for storing quantization constants. We propose an asymmetric estimator for the inner product of two vectors and demonstrate that applying QJL to one vector and a standard JL transform without quantization to the other provides an unbiased estimator with minimal distortion. We have developed an efficient implementation of the QJL sketch and its corresponding inner product estimator, incorporating a lightweight CUDA kernel for optimized computation. When applied across various LLMs and NLP tasks to quantize the KV cache to only 3 bits, QJL demonstrates a more than fivefold reduction in KV cache memory usage without compromising accuracy, all while achieving faster runtime.",

  title2: "Topic2: " + nextTalk.topic2,
  researcher2: `${nextTalk.speaker2}, Visiting Ph.D Student, Advised by Claudio Silva`,
  image2: "./images/alessio.jpg",
  abstract2:
    "Reverse engineering is the translation of physical reality into digital design. Transforming point cloud data, usually acquired by 3D scanning objects, into continuous 3D models suitable for prototyping involves a series of time-consuming and repetitive operations. This research proposes an approach that combines surface reconstruction algorithms with Convolutional Neural Networks for semantic segmentation, enabling a more informed and structured generation of accurate digital geometry.",
};

export const upcomingTalks = [
  {
    date: "Apr 30, 2025",
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
        zoomLink: "",
        slidesLink:
          "https://drive.google.com/file/d/1LEpnyf0GA-zaiTanBdu2q7SggLt2hG7N/view?usp=sharing",
      },
      {
        name: "Christos Koutras ",
        title: "Tabular Schema Matching for Modern Settings",
        zoomLink: "",
        slidesLink:
          "https://drive.google.com/file/d/1OnrjEMEsZ6PY4KPvgYrG0XTZmblpZGPC/view?usp=sharing",
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
        title: "Common Sense Bias Modeling for Classification Tasks",
        zoomLink: "",
        slidesLink:
          "https://docs.google.com/presentation/d/1EKuVQBcNwW79M7pGCYW_TlNGBNRFgnw-wODxuwp5F5U/edit?usp=gmail",
      },
      {
        name: "Kelly Marshall",
        title: "Language Representations For 3D Machine Learning",
        zoomLink: "",
        slidesLink:
          "https://drive.google.com/file/d/1UfWjZ4BYt91eyL5NG_cgZGzWS6mz-SWM/view?usp=drive_link",
      },
    ],
  },
  // Additional events...
];
