// src/data.js

export const nextTalk = {
  date: "Wed, Nov 20, 2024",
  time: "11:00 - 12:00",
  location: "Room 1114, 370 Jay St",
  zoomLink: "https://nyu.zoom.us/j/95901395759",
  speaker1: "Alexander Ratzan",
  topic1: "Molecular Connectomics from Small to Large Brains",
  speaker2: "Felipe Inagaki de Oliveira",
  topic2: "TopoMap++: A faster and more space efficient technique to compute projections with topological guarantees",
};

export const talkDetails = {
  title1: "Topic1: " + nextTalk.topic1,
  researcher1: `${nextTalk.speaker1}, Second year PhD student, Advised by Erdem Varol`,
  image1: "./images/Alex.jpg",
  abstract1:
    "Biological neural networks, or ’connectomes’, evolved under stringent evolutionary constraints to enable brains of all scales to perform complex behaviors. A longstanding goal of systems neuroscience is to uncover the genetic and molecular factors that contribute to the precise wiring of these networks. In this talk, I will present modeling approaches aimed at integrating genomics and neuroimaging to provide insight into the multimodal factors that shape the connectome across species. I will further address key challenges and considerations, such as data harmonization and model interpretability, which are critical to downstream applications in precision medicine and neuromorphic computing.",
  
  title2: "Topic2: " + nextTalk.topic2,
  researcher2: `${nextTalk.speaker2}, Second year PhD student, Advised by Claudio Silva`,
  image2: "./images/Felipe.jpeg",
  abstract2:
    "High-dimensional data, characterized by many features, can be difficult to visualize effectively. Dimensionality reduction techniques, such as PCA, UMAP, and t-SNE, address this challenge by projecting the data into a lower-dimensional space while preserving important relationships. TopoMap is another technique that excels at preserving the underlying structure of the data, leading to interpretable visualizations. In particular, TopoMap maps the high-dimensional data into a visual space, guaranteeing that the 0-dimensional persistence diagram of the Rips filtration of the visual space matches the one from the high-dimensional data. However, the original TopoMap algorithm can be slow and its layout can be too sparse for large and complex datasets. Our work propose three improvements to TopoMap: 1) a more space-efficient layout, 2) a significantly faster implementation, and 3) a novel TreeMap-based representation that makes use of the topological hierarchy to aid the exploration of the projections.These advancements make TopoMap, now referred to as TopoMap++, a more powerful tool for visualizing high-dimensional data which we demonstrate through different use case scenarios.",
};

export const upcomingTalks = [
  {
    date: "Dec 4, 2024",
    time: "11:00 - 11:30",
    location: "Room TBD, 370 Jay St",
    speaker: "Guande Wu",
    topic: ""
  },
  {
    date: "Dec 4, 2024",
    time: "11:30 - 12:00",
    location: "Room TBD, 370 Jay St",
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
  // Additional events...
];
