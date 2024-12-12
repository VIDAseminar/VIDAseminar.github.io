// src/data.js

export const nextTalk = {
  date: "Wed, Dec 4, 2024",
  time: "11:00 - 12:00",
  location: "Room 1114, 370 Jay St",
  zoomLink: "https://nyu.zoom.us/j/95901395759",
  speaker1: "Guande Wu",
  topic1: "Evaluating Collaborative Capabilities of Language Models",
  speaker2: "Aécio Santos",
  topic2: "Sampling-Based Sketching Methods for Correlated Data Discovery",
};

export const talkDetails = {
  title1: "Topic1: " + nextTalk.topic1,
  researcher1: `${nextTalk.speaker1}, 4th year PhD student, Advised by Claudio Silva`,
  image1: "./images/guande.png",
  abstract1:
    "Language agents that interact with the world on their own have great potential for automating digital tasks. While large language model (LLM) agents have made progress in understanding and executing tasks such as textual games and webpage control, many real-world tasks also require collaboration with humans or other LLMs in equal roles, which involves intent understanding, task coordination, and communication. To test LLM's ability to collaborate, we design a blocks-world environment, where two agents, each having unique goals and skills, build a target structure together. To complete the goals, they can act in the world and communicate in natural language. Under this environment, we design increasingly challenging settings to evaluate different collaboration perspectives, from independent to more complex, dependent tasks. We further adopt chain-of-thought prompts that include intermediate reasoning steps to model the partner's state and identify and correct execution errors. Both human-machine and machine-machine experiments show that LLM agents have strong grounding capacities, and our approach significantly improves the evaluation metric.",
  
  title2: "Topic2: " + nextTalk.topic2,
  researcher2: `${nextTalk.speaker2}, Research Engineer, Advised by Juliana Freire`,
  image2: "./images/Aecio.jpeg",
  abstract2:
    "Dataset search is emerging as a critical capability in both research and industry: it has spurred many novel applications such as data augmentation for enriching data analyses and improving machine learning models. This talk presents an overview of our work that explores new sampling-based sketching algorithms to solve dataset search and discovery problems. We will present new methods for efficiently answering queries that uncover data relationships in large table collections, focusing on join-correlation queries: given an input query table, find the top-k tables that are both joinable with it and contain columns strongly correlated with a column in the query table. We will also present extensions for estimating correlations over tables containing join keys with repeated values, and more general dependence measures such as mutual information. Finally, we demonstrate practical applications of our methods using two use cases: feature discovery over data lakes to improve machine learning models and gene mutation prediction from proteomics data.",
};

export const upcomingTalks = [
  {
    date: "Dec 18, 2024",
    time: "11:00 - 11:30",
    location: "Room 1114, 370 Jay St",
    speaker: "TBD",
    topic: ""
  },
  {
    date: "Dec 18, 2024",
    time: "11:30 - 12:00",
    location: "Room 1114, 370 Jay St",
    speaker: "TBD",
    topic: "",
  }
];

export const historyTalksData = [
  {
      date: "Nov 6, 2024",
      speakers: [
          {
              name: "Teal Witter",
              title: "Provably Accurate Estimators for Shapley Values",
              zoomLink: "https://drive.google.com/file/d/1sbsi3bMhd1Vteu_aHCDVr6Zo6lfH1SXI/view?usp=drive_link",
              slidesLink: "https://drive.google.com/file/d/1Lcknq7lghj9I56zokmK0zKex-U94PGyn/view?usp=drive_link"
          },
          {
              name: "Niv Cohen",
              title: "Discovering and Erasing Undesired Concepts",
              zoomLink: "https://drive.google.com/file/d/1obz3bRHseG45eXnTXLqfZEwJv0oXNz1j/view?usp=drive_link",
              slidesLink: "https://drive.google.com/file/d/1meFaiUg22yKswZtZ6eYWojTUoWGyCefT/view?usp=drive_link"
          }
      ]
  },
  {
    date: "Nov 20, 2024",
    speakers: [
        {
            name: "Alexander Ratzan",
            title: "Molecular Connectomics from Small to Large Brains",
            zoomLink: "https://drive.google.com/file/d/1jXq5pxLoFCmy9oHRHctXykwANUnnMNiA/view?usp=drive_link",
            slidesLink: "https://drive.google.com/file/d/11iOsm16DZ9iTEq_bMp0nlXBnrz7wb4pW/view?usp=drive_link"
        },
        {
            name: "Felipe Inagaki de Oliveira",
            title: "TopoMap++: A faster and more space efficient technique to compute projections with topological guarantees",
            zoomLink: "https://drive.google.com/file/d/1jXq5pxLoFCmy9oHRHctXykwANUnnMNiA/view?usp=drive_link",
            slidesLink: "https://drive.google.com/file/d/1SzKt8_z_7cxJCMTt62jN5sYKiNmP0RU8/view?usp=drive_link"
        }
    ]
},
{
  date: "Dec 4, 2024",
  speakers: [
      {
          name: "Guande Wu",
          title: "Evaluating Collaborative Capabilities of Language Models",
          zoomLink: "https://nyu.zoom.us/rec/share/G8M2TYy8n2iG9Qz64Ui6UfHVDspU8NXt4mD2PVf_dioLm0zrp40WFjM2vDn4wws.m-RU7ItKEoF6_P_k",
          slidesLink: "https://drive.google.com/file/d/1MaszoGCBtldtvtHKSde9U8fVBTXbmeXH/view?usp=drive_link"
      },
      {
          name: "Aécio Santos",
          title: "Sampling-Based Sketching Methods for Correlated Data Discovery",
          zoomLink: "https://nyu.zoom.us/rec/share/G8M2TYy8n2iG9Qz64Ui6UfHVDspU8NXt4mD2PVf_dioLm0zrp40WFjM2vDn4wws.m-RU7ItKEoF6_P_k",
          slidesLink: ""
      }
  ]
},
  // Additional events...
];
