// src/data.js

export const nextTalk = {
  date: "Wed, Dec 4, 2024",
  time: "11:00 - 12:00",
  location: "Room 1114, 370 Jay St",
  zoomLink: "https://nyu.zoom.us/j/95901395759",
  speaker1: "Christos Koutras",
  topic1: "Tabular Schema Matching for Modern Settings",
  speaker2: "Stella Holbrook",
  topic2: "",
};

export const talkDetails = {
  title1: "Topic1: " + nextTalk.topic1,
  researcher1: `${nextTalk.speaker1}, Postdoc, Advised by Juliana Freire`,
  image1: "./images/christos.jpg",
  abstract1:
    "Schema matching is a critical data integration process, which aims at capturing relevance between elements of different        datasets; when datasets are tabular, it translates to the process of discovering related columns among them. Accurately discovering column matches is integral for several applications, such as entity resolution, data cleaning and data augmentation. While there exists a multitude of schema matching methods in the literature, we identify three major issues: i) there is no comprehensive study of comparing them in terms of effectiveness and efficiency, due to not available implementations and lack of evaluation datasets, ii) existing methods might be impractical and even inapplicable in certain modern settings, and iii) the heterogeneity and complexity of data can impede capturing relevance among columns for existing methods, as certain assumptions might not be holding for the entirety of underlying datasets. In this talk, I will briefly discuss how we tackled these issues in my doctoral thesis, by reviewing existing schema matching techniques and proposing novel methods capable of addressing challenges imposed by modern settings. I will conclude the talk by discussing future directions for the field.",
  
  title2: "Topic2: " + nextTalk.topic2,
  researcher2: `${nextTalk.speaker2}, Research Engineer, Advised by Juliana Freire`,
  image2: "./images/",
  abstract2:
    "",
};

export const upcomingTalks = [
  {
    date: "TBD, 2025",
    time: "11:00 - 11:30",
    location: "Room 1114, 370 Jay St",
    speaker: "TBD",
    topic: ""
  },
  {
    date: "TBD, 2025",
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
            zoomLink: "https://drive.google.com/file/d/1w9tbwW5canWQLMuf04Us0pBmV1kTb6Fa/view?usp=drive_link",
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
          zoomLink: "https://drive.google.com/file/d/1iNOJLoltkFRHgMf3QNYkiM_tLLVt8aDB/view?usp=drive_link",
          slidesLink: "https://drive.google.com/file/d/1MaszoGCBtldtvtHKSde9U8fVBTXbmeXH/view?usp=drive_link"
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
];
