// src/data.js

export const nextTalk = {
  date: "Wed, Dec 4, 2024",
  time: "12:10 - 13:10",
  location: "Room 1114, 370 Jay St",
  zoomLink: "https://nyu.zoom.us/j/95901395759",
  speaker1: "Andrew Bell",
  topic1: "Safeguarding Large Language Models in Real-time with Tunable Safety-Performance Trade-offs",
  speaker2: "Jewelina Wen",
  topic2: "Understanding, Enhancing, and Augmenting Human Interaction through Adaptive Systems",
};

export const talkDetails = {
  title1: "Topic1: " + nextTalk.topic1,
  researcher1: `${nextTalk.speaker1}, Ph.D. Candidate, Advised by Julia Stoyanovich`,
  image1: "./images/Andrew.JPG",
  abstract1:
    "Large Language Models (LLMs) have been shown to be susceptible to jailbreak attacks, or adversarial attacks used to illicit high risk behavior from a model. Jailbreaks have been exploited by cybercriminals and blackhat actors to cause significant harm, highlighting the critical need to safeguard widely-deployed models. Safeguarding approaches, which include fine-tuning models or having LLMs \"self-reflect\", may lengthen the inference time of a model, incur a computational penalty, reduce the semantic fluency of an output, and restrict 'normal' model behavior. Importantly, these Safety-Performance Trade-offs (SPTs) remain an understudied area. In this work, we introduce a novel safeguard, called SafeNudge, that combines Controlled Text Generation with \"nudging,\" or using text interventions to change the behavior of a model. SafeNudge triggers during text-generation while a jailbreak attack is being executed, and can reduce successful jailbreak attempts by 30% by guiding the LLM towards a safe responses. It adds minimal latency to inference and has a negligible impact on the semantic fluency of outputs. Further, we allow for tunable SPTs. SafeNudge is open-source and available through https://pypi.org/, and is compatible with models loaded with the Hugging Face transformers library.",

  title2: "Topic2: " + nextTalk.topic2,
  researcher2: `${nextTalk.speaker2}, M.S. Student, Advised by Claudio Silva`,
  image2: "./images/jewelina.JPG",
  abstract2:
    "By leveraging computational methods, physiological sensing, and AI-driven adaptation, I develop intelligent interfaces that dynamically respond to users' cognitive and behavioral states, optimizing experience and performance in real time. My work spans aviation, driving assistance, healthcare, and gaming, demonstrating the impact of adaptive systems across diverse domains.",
};

export const upcomingTalks = [
  {
    date: "Mar 12, 2025",
    time: "11:00 - 11:30",
    location: "Room 1114, 370 Jay St",
    speaker: "TBD",
    topic: "",
  },
  {
    date: "Mar 12, 2025",
    time: "11:30 - 12:00",
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
          zoomLink: "https://drive.google.com/file/d/1iNOJLoltkFRHgMf3QNYkiM_tLLVt8aDB/view?usp=drive_link",
          slidesLink: ""
      }
  ]
},
  // Additional events...
  {
    date: "Feb 26, 2025",
    speakers: [
      {
        name: "Andrew Bell",
        title: "Safeguarding Large Language Models in Real-time with Tunable Safety-Performance Trade-offs",
        zoomLink:
          "https://drive.google.com/file/d/1sj2UKfmXvQJAJvR7_uTzw1T7FUsvt4hm/view?usp=sharing",
        slidesLink:
          "",
      },
      {
          name: "Jewelina Wen",
          title: "Understanding, Enhancing, and Augmenting Human Interaction through Adaptive Systems",
          zoomLink: "https://drive.google.com/file/d/1sj2UKfmXvQJAJvR7_uTzw1T7FUsvt4hm/view?usp=sharing",
          slidesLink: "https://docs.google.com/presentation/d/1JO3gsuysW5UAIDfT-2Ryde6GyALQ5lyt/edit?usp=sharing&ouid=103225470520735592499&rtpof=true&sd=true"
      }
  ]
},
];
