// const descriptions = {
//   "E": "Enduring",
//   "I": "Intensive",
//   "M": "Mental",
//   "P": "Physical",
//   "T": "Tactical",
//   "R": "Reflexive",
//   "J": "Justice",
//   "S": "Self",
// }

// function getDescription(type) {
//   let description = "TEST";
//   for(let i = 0; i < type.length; i++) {
//     let letter = type[i];
//     description.push(descriptions[letter]);
//     if(i < type.length - 1) description.push(", ");
//   }
//   return description;
// }

const details = [
  {
    name: "EMTJ",
    description: "Enduring, Mental, Tactical, Justice",
    characters: [
      {
        name: "Itachi Uchiha",
        mal_id: "14",
      }
    ],
  },
  {
    name: "EMTS",
    // description: function() {
    //   return getDescription("EMTS");
    // },
    description: "Enduring, Mental, Tactical, Self",
    characters: [
      {
        name: "Joseph Joestar",
        mal_id: "6356",
      }
    ],
  },
  {
    name: "EMRJ",
    description: "Enduring, Mental, Reflexive, Justice",
    characters: [
      {
        name: "Kyojuro Rengoku",
        mal_id: "151143",
      },
      {
        name: "Tsunade",
        mal_id: "2767",
      },
      {
        name: "Gaara",
        mal_id: "1662",
      },
    ],
  },
  {
    name: "EMRS",
    description: "Enduring, Mental, Reflexive, Self",
    characters: [
      {
        name: "Hinata Hyuga",
        mal_id: "1555",
      }
    ],
  },
  {
    name: "EPTJ",
    description: "Enduring, Physical, Tactical, Justice",
    characters: [
      {
        name: "Kaneki Ken",
        mal_id: "87275",
      }
    ],
  },
  {
    name: "EPTS",
    description: "Enduring, Physical, Tactical, Self",
    characters: [
      {
        name: "Ippo Makunouchi",
        mal_id: "15",
      }
    ],
  },
  {
    name: "EPRJ",
    description: "Enduring, Physical, Reflexive, Justice",
    characters: [
      {
        name: "Takemichi Hanagaki",
        mal_id: "171969",
      },
      {
        name: "Eren Yeager",
        mal_id: "40882",
      },
      {
        name: "Nezuko Kamado",
        mal_id: "146157",
      },
    ],
  },
  {
    name: "EPRS",
    description: "Enduring, Physical, Reflexive, Self",
    characters: [
      {
        name: "Rock Lee",
        mal_id: "306",
      },
      {
        name: "Might Guy",
        mal_id: "307",
      },
      {
        name: "Monkey D. Luffy",
        mal_id: "40",
      },
      {
        name: "Saitama",
        mal_id: "73935",
      },
      {
        name: "Sakura Haruno",
        mal_id: "145",
      },
    ],
  },
  {
    name: "IMTJ",
    description: "Intensive, Mental, Tactical, Justice",
    characters: [
      {
        name: "Shikamaru Nara",
        mal_id: "2007",
      },
      {
        name: "Ochako Uraraka",
        mal_id: "117917",
      },
    ],
  },
  {
    name: "IMTS",
    description: "Intensive, Mental, Tactical, Self",
    characters: [
      {
        name: "Kakashi Hatake",
        mal_id: "85",
      },
      {
        name: "Shinobu Kochou",
        mal_id: "146736",
      },
      {
        name: "Armin Arlert",
        mal_id: "46494",
      },
    ],
  },
  {
    name: "IMRJ",
    description: "Intensive, Mental, Reflexive, Justice",
    characters: [
      {
        name: "Tanjirou Kamado",
        mal_id: "146156",
      },
      {
        name: "Ichigo Kurosaki",
        mal_id: "5",
      },
      {
        name: "Usagi Tsukino",
        mal_id: "2030",
      },
      {
        name: "Saber",
        mal_id: "497",
      },
    ],
  },
  {
    name: "IMRS",
    description: "Intensive, Mental, Reflexive, Self",
    characters: [
      {
        name: "Shigeo Kageyama",
        mal_id: "109929",
      },
      {
        name: "Zenitsu Agatsuma",
        mal_id: "146158",
      },
      {
        name: "Sasuke Uchiha",
        mal_id: "13",
      },
    ],
  },
  {
    name: "IPTJ",
    description: "Intensive, Physical, Tactical, Justice",
    characters: [
      {
        name: "Izuku Midoriya",
        mal_id: "117909",
      },
      {
        name: "Mikasa Ackerman",
        mal_id: "40881",
      },
      {
        name: "Motoko Kusanagi",
        mal_id: "1795",
      },
    ],
  },
  {
    name: "IPTS",
    description: "Intensive, Physical, Tactical, Self",
    characters: [
      {
        name: "Aoi Toudou",
        mal_id: "164484",
      },
    ],
  },
  {
    name: "IPRJ",
    description: "Intensive, Physical, Reflexive, Justice",
    characters: [
      {
        name: "Yuuji Itadori",
        mal_id: "163847",
      },
      {
        name: "Whitebeard",
        mal_id: "2751",
      },
    ],
  },
  {
    name: "IPRS",
    description: "Intensive, Physical, Reflexive, Self",
    characters: [
      {
        name: "Naruto Uzumaki",
        mal_id: "17",
      },
      {
        name: "Katsuki Bakugou",
        mal_id: "117911",
      },
    ],
  },
];

export function getType(typeId) {
  return details.find(({ name }) => name === typeId);
}

export function getDetails() {
  return details;
}
