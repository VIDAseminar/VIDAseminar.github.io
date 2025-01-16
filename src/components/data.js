// src/data.js

export const nextTalk = {
  date: "Wed, Dec 18, 2024",
  time: "11:00 - 12:00",
  location: "Room 1114, 370 Jay St",
  zoomLink: "https://nyu.zoom.us/j/95901395759",
  speaker1: "Christos Koutras",
  topic1: "Tabular Schema Matching for Modern Settings",
  speaker2: "Stella Holbrook",
  topic2: "Spatial Indexes in Correlated Data Discovery",
};

export const talkDetails = {
  title1: "Topic1: " + nextTalk.topic1,
  researcher1: `${nextTalk.speaker1}, Postdoc, Advised by Juliana Freire`,
  image1: "./images/christos.jpg",
  abstract1:
    "Schema matching is a critical data integration process, which aims at capturing relevance between elements of different datasets; when datasets are tabular, it translates to the process of discovering related columns among them. Accurately discovering column matches is integral for several applications, such as entity resolution, data cleaning and data augmentation. While there exists a multitude of schema matching methods in the literature, we identify three major issues: i) there is no comprehensive study of comparing them in terms of effectiveness and efficiency, due to not available implementations and lack of evaluation datasets, ii) existing methods might be impractical and even inapplicable in certain modern settings, and iii) the heterogeneity and complexity of data can impede capturing relevance among columns for existing methods, as certain assumptions might not be holding for the entirety of underlying datasets. In this talk, I will briefly discuss how we tackled these issues in my doctoral thesis, by reviewing existing schema matching techniques and proposing novel methods capable of addressing challenges imposed by modern settings. I will conclude the talk by discussing future directions for the field.",
  
  title2: "Topic2: " + nextTalk.topic2,
  researcher2: `${nextTalk.speaker2}, PhD Student, Advised by Juliana Freire`,
  image2: "./images/stella.png",
  abstract2:
    "Correlated data discovery is a set of methods in data augmentation which compute a correlation statistic between attributes of disparate datasets along a join key. The value of this statistic determines whether the user seeking data should be brought those data which have had their correlations between attributes calculated. Previous work on this kind of data discovery (Santos 21), (Santos 24) has been limited to tabular data. While tabular data can use spatial, temporal or both attributes as a key to calculate correlations from, it is not capable of harmonizing disparate spatial and temporal data types such as coordinates and regions and their associated timestamps. Space filling curves laid over the earth are a solution to make different spatial data join-able with one another. I will begin my presentation by showcasing the methodology behind join-correlation queries used in correlated data discovery and then go on to highlight a popular spatial index known as a geohash which is organized as a space filling curve. The geohash is a spatial index which can enable correlated data discovery over Geo-spatial domains.",
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
            zoomLink: "https://drive.google.com/file/d/11ZTC-uEBshdkXlmRJOw1onHBdPv75ppC/view?usp=drive_link",
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
{
  date: "Dec 18, 2024",
  speakers: [
      {
          name: "Christos Koutras",
          title: "Tabular Schema Matching for Modern Settings",
          zoomLink: "https://nyu.zoom.us/rec/play/EQwbk8CxHqpsYS4JFnYNnN1BoW7kpTYANlOP5mkXuiYmb101t8-L0XzxlsfPV10zU0P574XZcL73BaGe.QcscdOqK_rAn8qvu?canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fnyu.zoom.us%2Frec%2Fshare%2F4KaqcZmABP7coExGHgzbmc77IARYsZzMvLdWC__VJYo_bCVSgJhGcjnfYM-9DUs2.g2ZDjy73Mjuqjmqt",
          slidesLink: "https://drive.google.com/file/d/1OnrjEMEsZ6PY4KPvgYrG0XTZmblpZGPC/view?usp=drive_link"
      },
      {
          name: "Stella Holbrook",
          title: "Spatial Indexes in Correlated Data Discovery",
          zoomLink: "https://nyu.zoom.us/rec/play/EQwbk8CxHqpsYS4JFnYNnN1BoW7kpTYANlOP5mkXuiYmb101t8-L0XzxlsfPV10zU0P574XZcL73BaGe.QcscdOqK_rAn8qvu?canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fnyu.zoom.us%2Frec%2Fshare%2F4KaqcZmABP7coExGHgzbmc77IARYsZzMvLdWC__VJYo_bCVSgJhGcjnfYM-9DUs2.g2ZDjy73Mjuqjmqt",
          slidesLink: "https://drive.google.com/file/d/1LEpnyf0GA-zaiTanBdu2q7SggLt2hG7N/view?usp=drive_link"
      }
  ]
},
  // Additional events...
];
