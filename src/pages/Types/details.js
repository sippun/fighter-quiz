const descriptions = {
  "E": "Enduring",
  "I": "Intensive",
  "M": "Mental",
  "P": "Physical",
  "T": "Tactical",
  "R": "Reflexive",
  "J": "Justice",
  "S": "Self",
}

const getDescription = (type) => {
  let description = "";
  for(let i = 0; i < type.length; i++) {
    let letter = type[i];
    description.push(descriptions[letter]);
    if(i < type.length - 1) description.push(", ");
  }
  return description;
}

const details = [
  {
    name: "EMTJ",
    description: getDescription(this.name),
    characters: [
      {
        name: "Itachi Uchiha",
        mal_id: "14",
      }
    ],
  },
  {
    name: "EMTS",
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
]