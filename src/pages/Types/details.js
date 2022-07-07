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
        mal_id: "",
      },
      {
        name: "Tsunade",
        mal_id: "",
      },
      {
        name: "Gaara",
        mal_id: "",
      },
    ],
  },
  {
    name: "EMRS",
    description: "Enduring, Mental, Reflexive, Self",
    characters: [
      {
        name: "Hinata Hyuga",
        mal_id: "",
      }
    ],
  },
  {
    name: "EPTJ",
    description: "Enduring, Physical, Tactical, Justice",
    characters: [
      {
        name: "Kaneki Ken",
        mal_id: "",
      }
    ],
  },
  {
    name: "EPTS",
    description: "Enduring, Physical, Tactical, Self",
    characters: [
      {
        name: "Ippo Makunouchi",
        mal_id: "",
      }
    ],
  },
  {
    name: "EPRJ",
    description: "Enduring, Physical, Reflexive, Justice",
    characters: [
      {
        name: "Takemichi Hanagaki",
        mal_id: "",
      },
      {
        name: "Eren Yeager",
        mal_id: "",
      },
      {
        name: "Nezuko Kamado",
        mal_id: "",
      },
    ],
  },
  {
    name: "EPRS",
    description: "Enduring, Physical, Reflexive, Self",
    characters: [
      {
        name: "Rock Lee",
        mal_id: "",
      },
      {
        name: "Might Guy",
        mal_id: "",
      },
      {
        name: "Luffy",
        mal_id: "",
      },
      {
        name: "Saitama",
        mal_id: "",
      },
      {
        name: "Sakura Haruno",
        mal_id: "",
      },
    ],
  },
  {
    name: "IMTJ",
    description: "Intensive, Mental, Tactical, Justice",
    characters: [
      {
        name: "Shikamaru Nara",
        mal_id: "",
      },
      {
        name: "Ochako Uraraka",
        mal_id: "",
      },
    ],
  },
  {
    name: "IMTS",
    description: "Intensive, Mental, Tactical, Self",
    characters: [
      {
        name: "Kakashi Hatake",
        mal_id: "",
      },
      {
        name: "Shinobu Kocho",
        mal_id: "",
      },
      {
        name: "Armin",
        mal_id: "",
      },
    ],
  },
  {
    name: "IMRJ",
    description: "Intensive, Mental, Reflexive, Justice",
    characters: [
      {
        name: "Tanjiro Kamado",
        mal_id: "",
      },
      {
        name: "Ichigo Kurosaki",
        mal_id: "",
      },
      {
        name: "Usagi Tsukino",
        mal_id: "",
      },
      {
        name: "Saber",
        mal_id: "",
      },
    ],
  },
  {
    name: "IMRS",
    description: "Intensive, Mental, Reflexive, Self",
    characters: [
      {
        name: "Shigeo Kageyama",
        mal_id: "",
      },
      {
        name: "Zenitsu Agatsuma",
        mal_id: "",
      },
      {
        name: "Sasuke Uchiha",
        mal_id: "",
      },
    ],
  },
  {
    name: "IPTJ",
    description: "Intensive, Physical, Tactical, Justice",
    characters: [
      {
        name: "Izuku Midoriya",
        mal_id: "",
      },
      {
        name: "Mikasa Ackerman",
        mal_id: "",
      },
      {
        name: "Motoko Kusanagi",
        mal_id: "",
      },
    ],
  },
  {
    name: "IPTS",
    description: "Intensive, Physical, Tactical, Self",
    characters: [
      {
        name: "Aoi Todo",
        mal_id: "",
      },
    ],
  },
  {
    name: "IPRJ",
    description: "Intensive, Physical, Reflexive, Justice",
    characters: [
      {
        name: "Yuji Itadori",
        mal_id: "",
      },
      {
        name: "Whitebeard",
        mal_id: "",
      },
    ],
  },
  {
    name: "IPRS",
    description: "Intensive, Physical, Reflexive, Self",
    characters: [
      {
        name: "Naruto Uzumaki",
        mal_id: "",
      },
      {
        name: "Katsuki Bakugo",
        mal_id: "",
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
