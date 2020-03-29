import { Pokemon } from './pokemon_infos.model'

let POKEMONS: Pokemon[] = [
  {
    "Number": "001",
    "Name": "Bulbasaur",
    "Generation": "Generation I",
    "About": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    "Types": [
      "Grass",
      "Poison"
    ],
    "Resistant": [
      "Water",
      "Electric",
      "Grass",
      "Fighting",
      "Fairy"
    ],
    "Weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "Fast_Attack": [
      {
        "Name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      },
      {
        "Name": "Vine Whip",
        "Type": "Grass",
        "Damage": 7
      }
    ],
    "Special_Attack": [
      {
        "Name": "Power Whip",
        "Type": "Grass",
        "Damage": 70
      },
      {
        "Name": "Seed Bomb",
        "Type": "Grass",
        "Damage": 40
      },
      {
        "Name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "6.04kg",
      "Maximum": "7.76kg"
    },
    "Height": {
      "Minimum": "0.61m",
      "Maximum": "0.79m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "90 stamina points.",
    "Base_Attack": "118 attack points.",
    "Base_Defense": "118 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 25,
      "Name": "Bulbasaur candies"
    },
    "Next_evolution": [
      {
        "Number": 2,
        "Name": "Ivysaur"
      },
      {
        "Number": 3,
        "Name": "Venusaur"
      }
    ],
    "MaxCP": 951,
    "MaxHP": 1071
  },
  {
    "Number": "002",
    "Name": "Ivysaur",
    "Generation": "Generation I",
    "About": "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
    "Types": [
      "Grass",
      "Poison"
    ],
    "Resistant": [
      "Water",
      "Electric",
      "Grass",
      "Fighting",
      "Fairy"
    ],
    "Weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "Fast_Attack": [
      {
        "Name": "Razor Leaf",
        "Type": "Grass",
        "Damage": 15
      },
      {
        "Name": "Vine Whip",
        "Type": "Grass",
        "Damage": 7
      }
    ],
    "Special_Attack": [
      {
        "Name": "Power Whip",
        "Type": "Grass",
        "Damage": 70
      },
      {
        "Name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      },
      {
        "Name": "Solar Beam",
        "Type": "Grass",
        "Damage": 120
      }
    ],
    "Weight": {
      "Minimum": "11.38kg",
      "Maximum": "14.63kg"
    },
    "Height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "120 stamina points.",
    "Base_Attack": "151 attack points.",
    "Base_Defense": "151 defense points.",
    "Base_Flee_Rate": "7% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 1,
        "Name": "Bulbasaur"
      }
    ],
    "Next_Evolution_Requirements": {
      "Amount": 100,
      "Name": "Bulbasaur candies"
    },
    "Next_evolution": [
      {
        "Number": 3,
        "Name": "Venusaur"
      }
    ],
    "MaxCP": 1483,
    "MaxHP": 1632
  },
  {
    "Number": "003",
    "Name": "Venusaur",
    "Generation": "Generation I",
    "About": "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
    "Types": [
      "Grass",
      "Poison"
    ],
    "Resistant": [
      "Water",
      "Electric",
      "Grass",
      "Fighting",
      "Fairy"
    ],
    "Weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "Fast_Attack": [
      {
        "Name": "Razor Leaf",
        "Type": "Grass",
        "Damage": 15
      },
      {
        "Name": "Vine Whip",
        "Type": "Grass",
        "Damage": 7
      }
    ],
    "Special_Attack": [
      {
        "Name": "Petal Blizzard",
        "Type": "Grass",
        "Damage": 65
      },
      {
        "Name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      },
      {
        "Name": "Solar Beam",
        "Type": "Grass",
        "Damage": 120
      }
    ],
    "Weight": {
      "Minimum": "87.5kg",
      "Maximum": "112.5kg"
    },
    "Height": {
      "Minimum": "1.75m",
      "Maximum": "2.25m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "160 stamina points.",
    "Base_Attack": "198 attack points.",
    "Base_Defense": "198 defense points.",
    "Base_Flee_Rate": "5% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 1,
        "Name": "Bulbasaur"
      },
      {
        "Number": 2,
        "Name": "Ivysaur"
      }
    ],
    "MaxCP": 2392,
    "MaxHP": 2580
  },
  {
    "Number": "004",
    "Name": "Charmander",
    "Generation": "Generation I",
    "About": "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
    "Types": [
      "Fire"
    ],
    "Resistant": [
      "Fire",
      "Grass",
      "Ice",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "Weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Ember",
        "Type": "Fire",
        "Damage": 10
      },
      {
        "Name": "Scratch",
        "Type": "Normal",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Flame Burst",
        "Type": "Fire",
        "Damage": 30
      },
      {
        "Name": "Flame Charge",
        "Type": "Fire",
        "Damage": 25
      },
      {
        "Name": "Flamethrower",
        "Type": "Fire",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "7.44kg",
      "Maximum": "9.56kg"
    },
    "Height": {
      "Minimum": "0.53m",
      "Maximum": "0.68m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "78 stamina points.",
    "Base_Attack": "116 attack points.",
    "Base_Defense": "96 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 25,
      "Name": "Charmander candies"
    },
    "Next_evolution": [
      {
        "Number": 5,
        "Name": "Charmeleon"
      },
      {
        "Number": 6,
        "Name": "Charizard"
      }
    ],
    "MaxCP": 841,
    "MaxHP": 955
  },
  {
    "Number": "005",
    "Name": "Charmeleon",
    "Generation": "Generation I",
    "About": "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.",
    "Types": [
      "Fire"
    ],
    "Resistant": [
      "Fire",
      "Grass",
      "Ice",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "Weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Ember",
        "Type": "Fire",
        "Damage": 10
      },
      {
        "Name": "Scratch",
        "Type": "Normal",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Fire Punch",
        "Type": "Fire",
        "Damage": 40
      },
      {
        "Name": "Flame Burst",
        "Type": "Fire",
        "Damage": 30
      },
      {
        "Name": "Flamethrower",
        "Type": "Fire",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "16.63kg",
      "Maximum": "21.38kg"
    },
    "Height": {
      "Minimum": "0.96m",
      "Maximum": "1.24m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "116 stamina points.",
    "Base_Attack": "158 attack points.",
    "Base_Defense": "129 defense points.",
    "Base_Flee_Rate": "7% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 4,
        "Name": "Charmander"
      }
    ],
    "Next_Evolution_Requirements": {
      "Amount": 100,
      "Name": "Charmander candies"
    },
    "Next_evolution": [
      {
        "Number": 6,
        "Name": "Charizard"
      }
    ],
    "MaxCP": 1411,
    "MaxHP": 1557
  },
  {
    "Number": "006",
    "Name": "Charizard",
    "Generation": "Generation I",
    "About": "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
    "Types": [
      "Fire",
      "Flying"
    ],
    "Resistant": [
      "Fire",
      "Grass",
      "Fighting",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "Weaknesses": [
      "Water",
      "Electric",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Ember",
        "Type": "Fire",
        "Damage": 10
      },
      {
        "Name": "Wing Attack",
        "Type": "Flying",
        "Damage": 9
      }
    ],
    "Special_Attack": [
      {
        "Name": "Dragon Claw",
        "Type": "Dragon",
        "Damage": 35
      },
      {
        "Name": "Fire Blast",
        "Type": "Fire",
        "Damage": 100
      },
      {
        "Name": "Flamethrower",
        "Type": "Fire",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "79.19kg",
      "Maximum": "101.81kg"
    },
    "Height": {
      "Minimum": "1.49m",
      "Maximum": "1.91m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "156 stamina points.",
    "Base_Attack": "223 attack points.",
    "Base_Defense": "176 defense points.",
    "Base_Flee_Rate": "5% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 4,
        "Name": "Charmander"
      },
      {
        "Number": 5,
        "Name": "Charmeleon"
      }
    ],
    "MaxCP": 2413,
    "MaxHP": 2602
  },
  {
    "Number": "007",
    "Name": "Squirtle",
    "Generation": "Generation I",
    "About": "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
    "Types": [
      "Water"
    ],
    "Resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "Weaknesses": [
      "Electric",
      "Grass"
    ],
    "Fast_Attack": [
      {
        "Name": "Bubble",
        "Type": "Water",
        "Damage": 25
      },
      {
        "Name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Aqua Jet",
        "Type": "Water",
        "Damage": 25
      },
      {
        "Name": "Aqua Tail",
        "Type": "Water",
        "Damage": 45
      },
      {
        "Name": "Water Pulse",
        "Type": "Water",
        "Damage": 35
      }
    ],
    "Weight": {
      "Minimum": "7.88kg",
      "Maximum": "10.13kg"
    },
    "Height": {
      "Minimum": "0.44m",
      "Maximum": "0.56m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "88 stamina points.",
    "Base_Attack": "94 attack points.",
    "Base_Defense": "122 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 25,
      "Name": "Squirtle candies"
    },
    "Next_evolution": [
      {
        "Number": 8,
        "Name": "Wartortle"
      },
      {
        "Number": 9,
        "Name": "Blastoise"
      }
    ],
    "MaxCP": 891,
    "MaxHP": 1008
  },
  {
    "Number": "008",
    "Name": "Wartortle",
    "Generation": "Generation I",
    "About": "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon's toughness as a battler.",
    "Types": [
      "Water"
    ],
    "Resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "Weaknesses": [
      "Electric",
      "Grass"
    ],
    "Fast_Attack": [
      {
        "Name": "Bite",
        "Type": "Dark",
        "Damage": 6
      },
      {
        "Name": "Water Gun",
        "Type": "Water",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Aqua Jet",
        "Type": "Water",
        "Damage": 25
      },
      {
        "Name": "Hydro Pump",
        "Type": "Water",
        "Damage": 90
      },
      {
        "Name": "Ice Beam",
        "Type": "Ice",
        "Damage": 65
      }
    ],
    "Weight": {
      "Minimum": "19.69kg",
      "Maximum": "25.31kg"
    },
    "Height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "118 stamina points.",
    "Base_Attack": "126 attack points.",
    "Base_Defense": "155 defense points.",
    "Base_Flee_Rate": "7% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 7,
        "Name": "Squirtle"
      }
    ],
    "Next_Evolution_Requirements": {
      "Amount": 100,
      "Name": "Squirtle candies"
    },
    "Next_evolution": [
      {
        "Number": 9,
        "Name": "Blastoise"
      }
    ],
    "MaxCP": 1435,
    "MaxHP": 1582
  },
  {
    "Number": "009",
    "Name": "Blastoise",
    "Generation": "Generation I",
    "About": "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.",
    "Types": [
      "Water"
    ],
    "Resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "Weaknesses": [
      "Electric",
      "Grass"
    ],
    "Fast_Attack": [
      {
        "Name": "Bite",
        "Type": "Dark",
        "Damage": 6
      },
      {
        "Name": "Water Gun",
        "Type": "Water",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Flash Cannon",
        "Type": "Steel",
        "Damage": 60
      },
      {
        "Name": "Hydro Pump",
        "Type": "Water",
        "Damage": 90
      },
      {
        "Name": "Ice Beam",
        "Type": "Ice",
        "Damage": 65
      }
    ],
    "Weight": {
      "Minimum": "74.81kg",
      "Maximum": "96.19kg"
    },
    "Height": {
      "Minimum": "1.4m",
      "Maximum": "1.8m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "158 stamina points.",
    "Base_Attack": "171 attack points.",
    "Base_Defense": "210 defense points.",
    "Base_Flee_Rate": "5% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 7,
        "Name": "Squirtle"
      },
      {
        "Number": 8,
        "Name": "Wartortle"
      }
    ],
    "MaxCP": 2355,
    "MaxHP": 2542
  },
  {
    "Number": "010",
    "Name": "Caterpie",
    "Generation": "Generation I",
    "About": "Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pokémon releases a terrifically strong odor.",
    "Types": [
      "Bug"
    ],
    "Resistant": [
      "Grass",
      "Fighting",
      "Ground"
    ],
    "Weaknesses": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Bug Bite",
        "Type": "Bug",
        "Damage": 5
      },
      {
        "Name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "Weight": {
      "Minimum": "2.54kg",
      "Maximum": "3.26kg"
    },
    "Height": {
      "Minimum": "0.26m",
      "Maximum": "0.34m"
    },
    "Buddy_Distance": "1km (Shoulder)",
    "Base_Stamina": "90 stamina points.",
    "Base_Attack": "55 attack points.",
    "Base_Defense": "62 defense points.",
    "Base_Flee_Rate": "20% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 12,
      "Name": "Caterpie candies"
    },
    "Next_evolution": [
      {
        "Number": 11,
        "Name": "Metapod"
      },
      {
        "Number": 12,
        "Name": "Butterfree"
      }
    ],
    "MaxCP": 367,
    "MaxHP": 443
  },
  {
    "Number": "011",
    "Name": "Metapod",
    "Generation": "Generation I",
    "About": "The shell covering this Pokémon’s body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.",
    "Types": [
      "Bug"
    ],
    "Resistant": [
      "Grass",
      "Fighting",
      "Ground"
    ],
    "Weaknesses": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Bug Bite",
        "Type": "Bug",
        "Damage": 5
      },
      {
        "Name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "Weight": {
      "Minimum": "8.66kg",
      "Maximum": "11.14kg"
    },
    "Height": {
      "Minimum": "0.61m",
      "Maximum": "0.79m"
    },
    "Buddy_Distance": "1km (Medium)",
    "Base_Stamina": "100 stamina points.",
    "Base_Attack": "45 attack points.",
    "Base_Defense": "94 defense points.",
    "Base_Flee_Rate": "9% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 10,
        "Name": "Caterpie"
      }
    ],
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Caterpie candies"
    },
    "Next_evolution": [
      {
        "Number": 12,
        "Name": "Butterfree"
      }
    ],
    "MaxCP": 397,
    "MaxHP": 477
  },
  {
    "Number": "012",
    "Name": "Butterfree",
    "Generation": "Generation I",
    "About": "Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.",
    "Types": [
      "Bug",
      "Flying"
    ],
    "Resistant": [
      "Grass",
      "Fighting",
      "Ground",
      "Bug"
    ],
    "Weaknesses": [
      "Fire",
      "Electric",
      "Ice",
      "Flying",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Bug Bite",
        "Type": "Bug",
        "Damage": 5
      },
      {
        "Name": "Confusion",
        "Type": "Psychic",
        "Damage": 15
      }
    ],
    "Special_Attack": [
      {
        "Name": "Bug Buzz",
        "Type": "Bug",
        "Damage": 75
      },
      {
        "Name": "Psychic",
        "Type": "Psychic",
        "Damage": 55
      },
      {
        "Name": "Signal Beam",
        "Type": "Bug",
        "Damage": 45
      }
    ],
    "Weight": {
      "Minimum": "28kg",
      "Maximum": "36kg"
    },
    "Height": {
      "Minimum": "0.96m",
      "Maximum": "1.24m"
    },
    "Buddy_Distance": "1km (Flying)",
    "Base_Stamina": "120 stamina points.",
    "Base_Attack": "167 attack points.",
    "Base_Defense": "151 defense points.",
    "Base_Flee_Rate": "6% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 10,
        "Name": "Caterpie"
      },
      {
        "Number": 11,
        "Name": "Metapod"
      }
    ],
    "MaxCP": 1315,
    "MaxHP": 1454
  },
  {
    "Number": "013",
    "Name": "Weedle",
    "Generation": "Generation I",
    "About": "Weedle has an extremely acute sense of smell. It is capable of distinguishing its favorite kinds of leaves from those it dislikes just by sniffing with its big red proboscis (nose).",
    "Types": [
      "Bug",
      "Poison"
    ],
    "Resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "Weaknesses": [
      "Fire",
      "Flying",
      "Psychic",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Bug Bite",
        "Type": "Bug",
        "Damage": 5
      },
      {
        "Name": "Poison Sting",
        "Type": "Poison",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "Weight": {
      "Minimum": "2.8kg",
      "Maximum": "3.6kg"
    },
    "Height": {
      "Minimum": "0.26m",
      "Maximum": "0.34m"
    },
    "Buddy_Distance": "1km (Shoulder)",
    "Base_Stamina": "80 stamina points.",
    "Base_Attack": "63 attack points.",
    "Base_Defense": "55 defense points.",
    "Base_Flee_Rate": "20% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 12,
      "Name": "Weedle candies"
    },
    "Next_evolution": [
      {
        "Number": 14,
        "Name": "Kakuna"
      },
      {
        "Number": 15,
        "Name": "Beedrill"
      }
    ],
    "MaxCP": 372,
    "MaxHP": 449
  },
  {
    "Number": "014",
    "Name": "Kakuna",
    "Generation": "Generation I",
    "About": "Kakuna remains virtually immobile as it clings to a tree. However, on the inside, it is extremely busy as it prepares for its coming evolution. This is evident from how hot the shell becomes to the touch.",
    "Types": [
      "Bug",
      "Poison"
    ],
    "Resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "Weaknesses": [
      "Fire",
      "Flying",
      "Psychic",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Bug Bite",
        "Type": "Bug",
        "Damage": 5
      },
      {
        "Name": "Poison Sting",
        "Type": "Poison",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "Weight": {
      "Minimum": "8.75kg",
      "Maximum": "11.25kg"
    },
    "Height": {
      "Minimum": "0.53m",
      "Maximum": "0.68m"
    },
    "Buddy_Distance": "1km (Medium)",
    "Base_Stamina": "90 stamina points.",
    "Base_Attack": "46 attack points.",
    "Base_Defense": "86 defense points.",
    "Base_Flee_Rate": "9% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 13,
        "Name": "Weedle"
      }
    ],
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Weedle candies"
    },
    "Next_evolution": [
      {
        "Number": 15,
        "Name": "Beedrill"
      }
    ],
    "MaxCP": 405,
    "MaxHP": 485
  },
  {
    "Number": "015",
    "Name": "Beedrill",
    "Generation": "Generation I",
    "About": "Beedrill is extremely territorial. No one should ever approach its nest—this is for their own safety. If angered, they will attack in a furious swarm.",
    "Types": [
      "Bug",
      "Poison"
    ],
    "Resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "Weaknesses": [
      "Fire",
      "Flying",
      "Psychic",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Bug Bite",
        "Type": "Bug",
        "Damage": 5
      },
      {
        "Name": "Poison Jab",
        "Type": "Poison",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Aerial Ace",
        "Type": "Flying",
        "Damage": 30
      },
      {
        "Name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      },
      {
        "Name": "X Scissor",
        "Type": "Bug",
        "Damage": 35
      }
    ],
    "Weight": {
      "Minimum": "25.81kg",
      "Maximum": "33.19kg"
    },
    "Height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "Buddy_Distance": "1km (Flying)",
    "Base_Stamina": "130 stamina points.",
    "Base_Attack": "169 attack points.",
    "Base_Defense": "150 defense points.",
    "Base_Flee_Rate": "6% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 13,
        "Name": "Weedle"
      },
      {
        "Number": 14,
        "Name": "Kakuna"
      }
    ],
    "MaxCP": 1301,
    "MaxHP": 1439
  },
  {
    "Number": "016",
    "Name": "Pidgey",
    "Generation": "Generation I",
    "About": "Pidgey has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings.",
    "Types": [
      "Normal",
      "Flying"
    ],
    "Resistant": [
      "Grass",
      "Ground",
      "Bug",
      "Ghost"
    ],
    "Weaknesses": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Quick Attack",
        "Type": "Normal",
        "Damage": 10
      },
      {
        "Name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Aerial Ace",
        "Type": "Flying",
        "Damage": 30
      },
      {
        "Name": "Air Cutter",
        "Type": "Flying",
        "Damage": 30
      },
      {
        "Name": "Twister",
        "Type": "Dragon",
        "Damage": 25
      }
    ],
    "Weight": {
      "Minimum": "1.57kg",
      "Maximum": "2.02kg"
    },
    "Height": {
      "Minimum": "0.26m",
      "Maximum": "0.34m"
    },
    "Buddy_Distance": "1km (Shoulder)",
    "Base_Stamina": "80 stamina points.",
    "Base_Attack": "85 attack points.",
    "Base_Defense": "76 defense points.",
    "Base_Flee_Rate": "20% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 12,
      "Name": "Pidgey candies"
    },
    "Next_evolution": [
      {
        "Number": 17,
        "Name": "Pidgeotto"
      },
      {
        "Number": 18,
        "Name": "Pidgeot"
      }
    ],
    "MaxCP": 585,
    "MaxHP": 679
  },
  {
    "Number": "017",
    "Name": "Pidgeotto",
    "Generation": "Generation I",
    "About": "Pidgeotto claims a large area as its own territory. This Pokémon flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.",
    "Types": [
      "Normal",
      "Flying"
    ],
    "Resistant": [
      "Grass",
      "Ground",
      "Bug",
      "Ghost"
    ],
    "Weaknesses": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Steel Wing",
        "Type": "Steel",
        "Damage": 15
      },
      {
        "Name": "Wing Attack",
        "Type": "Flying",
        "Damage": 9
      }
    ],
    "Special_Attack": [
      {
        "Name": "Aerial Ace",
        "Type": "Flying",
        "Damage": 30
      },
      {
        "Name": "Air Cutter",
        "Type": "Flying",
        "Damage": 30
      },
      {
        "Name": "Twister",
        "Type": "Dragon",
        "Damage": 25
      }
    ],
    "Weight": {
      "Minimum": "26.25kg",
      "Maximum": "33.75kg"
    },
    "Height": {
      "Minimum": "0.96m",
      "Maximum": "1.24m"
    },
    "Buddy_Distance": "1km (Flying)",
    "Base_Stamina": "126 stamina points.",
    "Base_Attack": "117 attack points.",
    "Base_Defense": "108 defense points.",
    "Base_Flee_Rate": "9% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 16,
        "Name": "Pidgey"
      }
    ],
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Pidgey candies"
    },
    "Next_evolution": [
      {
        "Number": 18,
        "Name": "Pidgeot"
      }
    ],
    "MaxCP": 1096,
    "MaxHP": 1223
  },
  {
    "Number": "019",
    "Name": "Rattata",
    "Generation": "Generation I",
    "About": "Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere.",
    "Types": [
      "Normal"
    ],
    "Resistant": [
      "Ghost"
    ],
    "Weaknesses": [
      "Fighting"
    ],
    "Fast_Attack": [
      {
        "Name": "Quick Attack",
        "Type": "Normal",
        "Damage": 10
      },
      {
        "Name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Body Slam",
        "Type": "Normal",
        "Damage": 40
      },
      {
        "Name": "Dig",
        "Type": "Ground",
        "Damage": 70
      },
      {
        "Name": "Hyper Fang",
        "Type": "Normal",
        "Damage": 35
      }
    ],
    "Weight": {
      "Minimum": "3.06kg",
      "Maximum": "3.94kg"
    },
    "Height": {
      "Minimum": "0.26m",
      "Maximum": "0.34m"
    },
    "Buddy_Distance": "1km (Medium)",
    "Base_Stamina": "60 stamina points.",
    "Base_Attack": "103 attack points.",
    "Base_Defense": "70 defense points.",
    "Base_Flee_Rate": "20% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 25,
      "Name": "Rattata candies"
    },
    "Next_evolution": [
      {
        "Number": 20,
        "Name": "Raticate"
      }
    ],
    "MaxCP": 493,
    "MaxHP": 581
  },
  {
    "Number": "020",
    "Name": "Raticate",
    "Generation": "Generation I",
    "About": "Raticate’s sturdy fangs grow steadily. To keep them ground down, it gnaws on rocks and logs. It may even chew on the walls of houses.",
    "Types": [
      "Normal"
    ],
    "Resistant": [
      "Ghost"
    ],
    "Weaknesses": [
      "Fighting"
    ],
    "Fast_Attack": [
      {
        "Name": "Bite",
        "Type": "Dark",
        "Damage": 6
      },
      {
        "Name": "Quick Attack",
        "Type": "Normal",
        "Damage": 10
      }
    ],
    "Special_Attack": [
      {
        "Name": "Dig",
        "Type": "Ground",
        "Damage": 70
      },
      {
        "Name": "Hyper Beam",
        "Type": "Normal",
        "Damage": 120
      },
      {
        "Name": "Hyper Fang",
        "Type": "Normal",
        "Damage": 35
      }
    ],
    "Weight": {
      "Minimum": "16.19kg",
      "Maximum": "20.81kg"
    },
    "Height": {
      "Minimum": "0.61m",
      "Maximum": "0.79m"
    },
    "Buddy_Distance": "1km (Medium)",
    "Base_Stamina": "110 stamina points.",
    "Base_Attack": "161 attack points.",
    "Base_Defense": "144 defense points.",
    "Base_Flee_Rate": "7% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 19,
        "Name": "Rattata"
      }
    ],
    "MaxCP": 1304,
    "MaxHP": 1444
  },
  {
    "Number": "021",
    "Name": "Spearow",
    "Generation": "Generation I",
    "About": "Spearow has a very loud cry that can be heard over half a mile away. If its high, keening cry is heard echoing all around, it is a sign that they are warning each other of danger.",
    "Types": [
      "Normal",
      "Flying"
    ],
    "Resistant": [
      "Grass",
      "Ground",
      "Bug",
      "Ghost"
    ],
    "Weaknesses": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Peck",
        "Type": "Flying",
        "Damage": 10
      },
      {
        "Name": "Quick Attack",
        "Type": "Normal",
        "Damage": 10
      }
    ],
    "Special_Attack": [
      {
        "Name": "Aerial Ace",
        "Type": "Flying",
        "Damage": 30
      },
      {
        "Name": "Drill Peck",
        "Type": "Flying",
        "Damage": 40
      },
      {
        "Name": "Twister",
        "Type": "Dragon",
        "Damage": 25
      }
    ],
    "Weight": {
      "Minimum": "1.75kg",
      "Maximum": "2.25kg"
    },
    "Height": {
      "Minimum": "0.26m",
      "Maximum": "0.34m"
    },
    "Buddy_Distance": "1km (Shoulder)",
    "Base_Stamina": "80 stamina points.",
    "Base_Attack": "112 attack points.",
    "Base_Defense": "61 defense points.",
    "Base_Flee_Rate": "15% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Spearow candies"
    },
    "Next_evolution": [
      {
        "Number": 22,
        "Name": "Fearow"
      }
    ],
    "MaxCP": 591,
    "MaxHP": 686
  },
  {
    "Number": "022",
    "Name": "Fearow",
    "Generation": "Generation I",
    "About": "Fearow is recognized by its long neck and elongated beak. They are conveniently shaped for catching prey in soil or water. It deftly moves its long and skinny beak to pluck prey.",
    "Types": [
      "Normal",
      "Flying"
    ],
    "Resistant": [
      "Grass",
      "Ground",
      "Bug",
      "Ghost"
    ],
    "Weaknesses": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Peck",
        "Type": "Flying",
        "Damage": 10
      },
      {
        "Name": "Steel Wing",
        "Type": "Steel",
        "Damage": 15
      }
    ],
    "Special_Attack": [
      {
        "Name": "Aerial Ace",
        "Type": "Flying",
        "Damage": 30
      },
      {
        "Name": "Drill Run",
        "Type": "Ground",
        "Damage": 50
      },
      {
        "Name": "Twister",
        "Type": "Dragon",
        "Damage": 25
      }
    ],
    "Weight": {
      "Minimum": "33.25kg",
      "Maximum": "42.75kg"
    },
    "Height": {
      "Minimum": "1.05m",
      "Maximum": "1.35m"
    },
    "Buddy_Distance": "1km (Flying)",
    "Base_Stamina": "130 stamina points.",
    "Base_Attack": "182 attack points.",
    "Base_Defense": "135 defense points.",
    "Base_Flee_Rate": "7% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 21,
        "Name": "Spearow"
      }
    ],
    "MaxCP": 1592,
    "MaxHP": 1746
  },
  {
    "Number": "023",
    "Name": "Ekans",
    "Generation": "Generation I",
    "About": "Ekans curls itself up in a spiral while it rests. Assuming this position allows it to quickly respond to a threat from any direction with a glare from its upraised head.",
    "Types": [
      "Poison"
    ],
    "Resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "Weaknesses": [
      "Ground",
      "Psychic"
    ],
    "Fast_Attack": [
      {
        "Name": "Acid",
        "Type": "Poison",
        "Damage": 10
      },
      {
        "Name": "Poison Sting",
        "Type": "Poison",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Gunk Shot",
        "Type": "Poison",
        "Damage": 65
      },
      {
        "Name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      },
      {
        "Name": "Wrap",
        "Type": "Normal",
        "Damage": 25
      }
    ],
    "Weight": {
      "Minimum": "6.04kg",
      "Maximum": "7.76kg"
    },
    "Height": {
      "Minimum": "1.75m",
      "Maximum": "2.25m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "70 stamina points.",
    "Base_Attack": "110 attack points.",
    "Base_Defense": "102 defense points.",
    "Base_Flee_Rate": "15% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Ekans candies"
    },
    "Next_evolution": [
      {
        "Number": 24,
        "Name": "Arbok"
      }
    ],
    "MaxCP": 718,
    "MaxHP": 824
  },
  {
    "Number": "024",
    "Name": "Arbok",
    "Generation": "Generation I",
    "About": "This Pokémon is terrifically strong in order to constrict things with its body. It can even flatten steel oil drums. Once Arbok wraps its body around its foe, escaping its crunching embrace is impossible.",
    "Types": [
      "Poison"
    ],
    "Resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "Weaknesses": [
      "Ground",
      "Psychic"
    ],
    "Fast_Attack": [
      {
        "Name": "Acid",
        "Type": "Poison",
        "Damage": 10
      },
      {
        "Name": "Bite",
        "Type": "Dark",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Dark Pulse",
        "Type": "Dark",
        "Damage": 45
      },
      {
        "Name": "Gunk Shot",
        "Type": "Poison",
        "Damage": 65
      },
      {
        "Name": "Sludge Wave",
        "Type": "Poison",
        "Damage": 70
      }
    ],
    "Weight": {
      "Minimum": "56.88kg",
      "Maximum": "73.13kg"
    },
    "Height": {
      "Minimum": "3.06m",
      "Maximum": "3.94m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "120 stamina points.",
    "Base_Attack": "167 attack points.",
    "Base_Defense": "158 defense points.",
    "Base_Flee_Rate": "7% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 23,
        "Name": "Ekans"
      }
    ],
    "MaxCP": 1611,
    "MaxHP": 1767
  },
  {
    "Number": "025",
    "Name": "Pikachu",
    "Generation": "Generation I",
    "About": "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
    "Types": [
      "Electric"
    ],
    "Resistant": [
      "Electric",
      "Flying",
      "Steel"
    ],
    "Weaknesses": [
      "Ground"
    ],
    "Fast_Attack": [
      {
        "Name": "Quick Attack",
        "Type": "Normal",
        "Damage": 10
      },
      {
        "Name": "Thunder Shock",
        "Type": "Electric",
        "Damage": 5
      }
    ],
    "Special_Attack": [
      {
        "Name": "Discharge",
        "Type": "Electric",
        "Damage": 35
      },
      {
        "Name": "Thunder",
        "Type": "Electric",
        "Damage": 100
      },
      {
        "Name": "Thunderbolt",
        "Type": "Electric",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "5.25kg",
      "Maximum": "6.75kg"
    },
    "Height": {
      "Minimum": "0.35m",
      "Maximum": "0.45m"
    },
    "Buddy_Distance": "1km (Shoulder)",
    "Base_Stamina": "70 stamina points.",
    "Base_Attack": "112 attack points.",
    "Base_Defense": "101 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 172,
        "Name": "Pichu"
      }
    ],
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Pikachu candies"
    },
    "Next_evolution": [
      {
        "Number": 26,
        "Name": "Raichu"
      }
    ],
    "MaxCP": 777,
    "MaxHP": 887
  },
  {
    "Number": "026",
    "Name": "Raichu",
    "Generation": "Generation I",
    "About": "If the electrical sacs become excessively charged, Raichu plants its tail in the ground and discharges. Scorched patches of ground will be found near this Pokémon's nest.",
    "Types": [
      "Electric"
    ],
    "Resistant": [
      "Electric",
      "Flying",
      "Steel"
    ],
    "Weaknesses": [
      "Ground"
    ],
    "Fast_Attack": [
      {
        "Name": "Spark",
        "Type": "Electric",
        "Damage": 7
      },
      {
        "Name": "Thunder Shock",
        "Type": "Electric",
        "Damage": 5
      }
    ],
    "Special_Attack": [
      {
        "Name": "Brick Break",
        "Type": "Fighting",
        "Damage": 30
      },
      {
        "Name": "Thunder",
        "Type": "Electric",
        "Damage": 100
      },
      {
        "Name": "Thunder Punch",
        "Type": "Electric",
        "Damage": 40
      }
    ],
    "Weight": {
      "Minimum": "26.25kg",
      "Maximum": "33.75kg"
    },
    "Height": {
      "Minimum": "0.7m",
      "Maximum": "0.9m"
    },
    "Buddy_Distance": "1km (Medium)",
    "Base_Stamina": "120 stamina points.",
    "Base_Attack": "193 attack points.",
    "Base_Defense": "165 defense points.",
    "Base_Flee_Rate": "6% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 172,
        "Name": "Pichu"
      },
      {
        "Number": 25,
        "Name": "Pikachu"
      }
    ],
    "MaxCP": 1859,
    "MaxHP": 2028
  },
  {
    "Number": "027",
    "Name": "Sandshrew",
    "Generation": "Generation I",
    "About": "Sandshrew's body is configured to absorb water without waste, enabling it to survive in an arid desert. This Pokémon curls up to protect itself from its enemies.",
    "Types": [
      "Ground"
    ],
    "Resistant": [
      "Electric",
      "Poison",
      "Rock"
    ],
    "Weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "Fast_Attack": [
      {
        "Name": "Mud Shot",
        "Type": "Ground",
        "Damage": 6
      },
      {
        "Name": "Scratch",
        "Type": "Normal",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Dig",
        "Type": "Ground",
        "Damage": 70
      },
      {
        "Name": "Rock Slide",
        "Type": "Rock",
        "Damage": 50
      },
      {
        "Name": "Rock Tomb",
        "Type": "Rock",
        "Damage": 30
      }
    ],
    "Weight": {
      "Minimum": "10.5kg",
      "Maximum": "13.5kg"
    },
    "Height": {
      "Minimum": "0.53m",
      "Maximum": "0.68m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "100 stamina points.",
    "Base_Attack": "126 attack points.",
    "Base_Defense": "145 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Sandshrew candies"
    },
    "Next_evolution": [
      {
        "Number": 28,
        "Name": "Sandslash"
      }
    ],
    "MaxCP": 695,
    "MaxHP": 798
  },
  {
    "Number": "028",
    "Name": "Sandslash",
    "Generation": "Generation I",
    "About": "Sandslash's body is covered by tough spikes, which are hardened sections of its hide. Once a year, the old spikes fall out, to be replaced with new spikes that grow out from beneath the old ones.",
    "Types": [
      "Ground"
    ],
    "Resistant": [
      "Electric",
      "Poison",
      "Rock"
    ],
    "Weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "Fast_Attack": [
      {
        "Name": "Metal Claw",
        "Type": "Steel",
        "Damage": 8
      },
      {
        "Name": "Mud Shot",
        "Type": "Ground",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Bulldoze",
        "Type": "Ground",
        "Damage": 35
      },
      {
        "Name": "Earthquake",
        "Type": "Ground",
        "Damage": 100
      },
      {
        "Name": "Rock Tomb",
        "Type": "Rock",
        "Damage": 30
      }
    ],
    "Weight": {
      "Minimum": "25.81kg",
      "Maximum": "33.19kg"
    },
    "Height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "150 stamina points.",
    "Base_Attack": "182 attack points.",
    "Base_Defense": "202 defense points.",
    "Base_Flee_Rate": "6% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 27,
        "Name": "Sandshrew"
      }
    ],
    "MaxCP": 1654,
    "MaxHP": 1810
  },
  {
    "Number": "029",
    "Name": "Nidoran ♀",
    "Generation": "Generation I",
    "About": "Nidoran♀ has barbs that secrete a powerful poison. They are thought to have developed as protection for this small-bodied Pokémon. When enraged, it releases a horrible toxin from its horn.",
    "Types": [
      "Poison"
    ],
    "Resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "Weaknesses": [
      "Ground",
      "Psychic"
    ],
    "Fast_Attack": [
      {
        "Name": "Bite",
        "Type": "Dark",
        "Damage": 6
      },
      {
        "Name": "Poison Sting",
        "Type": "Poison",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Body Slam",
        "Type": "Normal",
        "Damage": 40
      },
      {
        "Name": "Poison Fang",
        "Type": "Poison",
        "Damage": 25
      },
      {
        "Name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "6.13kg",
      "Maximum": "7.88kg"
    },
    "Height": {
      "Minimum": "0.35m",
      "Maximum": "0.45m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "110 stamina points.",
    "Base_Attack": "86 attack points.",
    "Base_Defense": "94 defense points.",
    "Base_Flee_Rate": "15% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 25,
      "Name": "Nidoran Female candies"
    },
    "Next_evolution": [
      {
        "Number": 30,
        "Name": "Nidorina"
      },
      {
        "Number": 31,
        "Name": "Nidoqueen"
      }
    ],
    "MaxCP": 768,
    "MaxHP": 876
  },
  {
    "Number": "030",
    "Name": "Nidorina",
    "Generation": "Generation I",
    "About": "When Nidorina are with their friends or family, they keep their barbs tucked away to prevent hurting each other. This Pokémon appears to become nervous if separated from the others.",
    "Types": [
      "Poison"
    ],
    "Resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "Weaknesses": [
      "Ground",
      "Psychic"
    ],
    "Fast_Attack": [
      {
        "Name": "Bite",
        "Type": "Dark",
        "Damage": 6
      },
      {
        "Name": "Poison Sting",
        "Type": "Poison",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Dig",
        "Type": "Ground",
        "Damage": 70
      },
      {
        "Name": "Poison Fang",
        "Type": "Poison",
        "Damage": 25
      },
      {
        "Name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "17.5kg",
      "Maximum": "22.5kg"
    },
    "Height": {
      "Minimum": "0.7m",
      "Maximum": "0.9m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "140 stamina points.",
    "Base_Attack": "117 attack points.",
    "Base_Defense": "126 defense points.",
    "Base_Flee_Rate": "7% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 29,
        "Name": "Nidoran"
      }
    ],
    "Next_Evolution_Requirements": {
      "Amount": 100,
      "Name": "Nidoran Female candies"
    },
    "Next_evolution": [
      {
        "Number": 31,
        "Name": "Nidoqueen"
      }
    ],
    "MaxCP": 1267,
    "MaxHP": 1404
  },
  {
    "Number": "031",
    "Name": "Nidoqueen",
    "Generation": "Generation I",
    "About": "Nidoqueen's body is encased in extremely hard scales. It is adept at sending foes flying with harsh tackles. This Pokémon is at its strongest when it is defending its young.",
    "Types": [
      "Poison",
      "Ground"
    ],
    "Resistant": [
      "Electric",
      "Fighting",
      "Poison",
      "Bug",
      "Rock",
      "Fairy"
    ],
    "Weaknesses": [
      "Water",
      "Ice",
      "Ground",
      "Psychic"
    ],
    "Fast_Attack": [
      {
        "Name": "Bite",
        "Type": "Dark",
        "Damage": 6
      },
      {
        "Name": "Poison Jab",
        "Type": "Poison",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Earthquake",
        "Type": "Ground",
        "Damage": 100
      },
      {
        "Name": "Sludge Wave",
        "Type": "Poison",
        "Damage": 70
      },
      {
        "Name": "Stone Edge",
        "Type": "Rock",
        "Damage": 80
      }
    ],
    "Weight": {
      "Minimum": "52.5kg",
      "Maximum": "67.5kg"
    },
    "Height": {
      "Minimum": "1.14m",
      "Maximum": "1.46m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "180 stamina points.",
    "Base_Attack": "180 attack points.",
    "Base_Defense": "174 defense points.",
    "Base_Flee_Rate": "5% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 29,
        "Name": "Nidoran"
      },
      {
        "Number": 30,
        "Name": "Nidorina"
      }
    ],
    "MaxCP": 2301,
    "MaxHP": 2485
  },
  {
    "Number": "032",
    "Name": "Nidoran ♂",
    "Generation": "Generation I",
    "About": "Nidoran♂ has developed muscles for moving its ears. Thanks to them, the ears can be freely moved in any direction. Even the slightest sound does not escape this Pokémon's notice.",
    "Types": [
      "Poison"
    ],
    "Resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "Weaknesses": [
      "Ground",
      "Psychic"
    ],
    "Fast_Attack": [
      {
        "Name": "Peck",
        "Type": "Flying",
        "Damage": 10
      },
      {
        "Name": "Poison Sting",
        "Type": "Poison",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Body Slam",
        "Type": "Normal",
        "Damage": 40
      },
      {
        "Name": "Horn Attack",
        "Type": "Normal",
        "Damage": 25
      },
      {
        "Name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "7.88kg",
      "Maximum": "10.13kg"
    },
    "Height": {
      "Minimum": "0.44m",
      "Maximum": "0.56m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "92 stamina points.",
    "Base_Attack": "105 attack points.",
    "Base_Defense": "76 defense points.",
    "Base_Flee_Rate": "15% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 25,
      "Name": "Nidoran Male candies"
    },
    "Next_evolution": [
      {
        "Number": 33,
        "Name": "Nidorino"
      },
      {
        "Number": 34,
        "Name": "Nidoking"
      }
    ],
    "MaxCP": 737,
    "MaxHP": 843
  },
  {
    "Number": "033",
    "Name": "Nidorino",
    "Generation": "Generation I",
    "About": "Nidorino has a horn that is harder than a diamond. If it senses a hostile presence, all the barbs on its back bristle up at once, and it challenges the foe with all its might.",
    "Types": [
      "Poison"
    ],
    "Resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "Weaknesses": [
      "Ground",
      "Psychic"
    ],
    "Fast_Attack": [
      {
        "Name": "Poison Jab",
        "Type": "Poison",
        "Damage": 12
      },
      {
        "Name": "Poison Sting",
        "Type": "Poison",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Dig",
        "Type": "Ground",
        "Damage": 70
      },
      {
        "Name": "Horn Attack",
        "Type": "Normal",
        "Damage": 25
      },
      {
        "Name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "17.06kg",
      "Maximum": "21.94kg"
    },
    "Height": {
      "Minimum": "0.79m",
      "Maximum": "1.01m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "122 stamina points.",
    "Base_Attack": "137 attack points.",
    "Base_Defense": "112 defense points.",
    "Base_Flee_Rate": "7% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 32,
        "Name": "Nidoran"
      }
    ],
    "Next_Evolution_Requirements": {
      "Amount": 100,
      "Name": "Nidoran Male candies"
    },
    "Next_evolution": [
      {
        "Number": 34,
        "Name": "Nidoking"
      }
    ],
    "MaxCP": 1236,
    "MaxHP": 1372
  },
  {
    "Number": "034",
    "Name": "Nidoking",
    "Generation": "Generation I",
    "About": "Nidoking's thick tail packs enormously destructive power. With one swing, it can topple a metal transmission tower. Once this Pokémon goes on a rampage, there is no stopping it.",
    "Types": [
      "Poison",
      "Ground"
    ],
    "Resistant": [
      "Electric",
      "Fighting",
      "Poison",
      "Bug",
      "Rock",
      "Fairy"
    ],
    "Weaknesses": [
      "Water",
      "Ice",
      "Ground",
      "Psychic"
    ],
    "Fast_Attack": [
      {
        "Name": "Fury Cutter",
        "Type": "Bug",
        "Damage": 3
      },
      {
        "Name": "Poison Jab",
        "Type": "Poison",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Earthquake",
        "Type": "Ground",
        "Damage": 100
      },
      {
        "Name": "Megahorn",
        "Type": "Bug",
        "Damage": 80
      },
      {
        "Name": "Sludge Wave",
        "Type": "Poison",
        "Damage": 70
      }
    ],
    "Weight": {
      "Minimum": "54.25kg",
      "Maximum": "69.75kg"
    },
    "Height": {
      "Minimum": "1.22m",
      "Maximum": "1.57m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "162 stamina points.",
    "Base_Attack": "204 attack points.",
    "Base_Defense": "157 defense points.",
    "Base_Flee_Rate": "5% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 32,
        "Name": "Nidoran"
      },
      {
        "Number": 33,
        "Name": "Nidorino"
      }
    ],
    "MaxCP": 2291,
    "MaxHP": 2475
  },
  {
    "Number": "035",
    "Name": "Clefairy",
    "Generation": "Generation I",
    "About": "On every night of a full moon, groups of this Pokémon come out to play. When dawn arrives, the tired Clefairy return to their quiet mountain retreats and go to sleep nestled up against each other.",
    "Types": [
      "Fairy"
    ],
    "Resistant": [
      "Fighting",
      "Bug",
      "Dragon",
      "Dark"
    ],
    "Weaknesses": [
      "Poison",
      "Steel"
    ],
    "Fast_Attack": [
      {
        "Name": "Pound",
        "Type": "Normal",
        "Damage": 7
      },
      {
        "Name": "Zen Headbutt",
        "Type": "Psychic",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Body Slam",
        "Type": "Normal",
        "Damage": 40
      },
      {
        "Name": "Disarming Voice",
        "Type": "Fairy",
        "Damage": 25
      },
      {
        "Name": "Moonblast",
        "Type": "Fairy",
        "Damage": 85
      }
    ],
    "Weight": {
      "Minimum": "6.56kg",
      "Maximum": "8.44kg"
    },
    "Height": {
      "Minimum": "0.53m",
      "Maximum": "0.68m"
    },
    "Buddy_Distance": "1km (Medium)",
    "Base_Stamina": "140 stamina points.",
    "Base_Attack": "107 attack points.",
    "Base_Defense": "116 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 173,
        "Name": "Cleffa"
      }
    ],
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Clefairy candies"
    },
    "Next_evolution": [
      {
        "Number": 36,
        "Name": "Clefable"
      }
    ],
    "MaxCP": 1074,
    "MaxHP": 1200
  },
  {
    "Number": "036",
    "Name": "Clefable",
    "Generation": "Generation I",
    "About": "Clefable moves by skipping lightly as if it were flying using its wings. Its bouncy step even lets it walk on water. It is known to take strolls on lakes on quiet, moonlit nights.",
    "Types": [
      "Fairy"
    ],
    "Resistant": [
      "Fighting",
      "Bug",
      "Dragon",
      "Dark"
    ],
    "Weaknesses": [
      "Poison",
      "Steel"
    ],
    "Fast_Attack": [
      {
        "Name": "Pound",
        "Type": "Normal",
        "Damage": 7
      },
      {
        "Name": "Zen Headbutt",
        "Type": "Psychic",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Dazzling Gleam",
        "Type": "Fairy",
        "Damage": 55
      },
      {
        "Name": "Moonblast",
        "Type": "Fairy",
        "Damage": 85
      },
      {
        "Name": "Psychic",
        "Type": "Psychic",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "35kg",
      "Maximum": "45kg"
    },
    "Height": {
      "Minimum": "1.14m",
      "Maximum": "1.46m"
    },
    "Buddy_Distance": "1km (Big)",
    "Base_Stamina": "190 stamina points.",
    "Base_Attack": "178 attack points.",
    "Base_Defense": "171 defense points.",
    "Base_Flee_Rate": "6% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 173,
        "Name": "Cleffa"
      },
      {
        "Number": 35,
        "Name": "Clefairy"
      }
    ],
    "MaxCP": 2217,
    "MaxHP": 2397
  },
  {
    "Number": "037",
    "Name": "Vulpix",
    "Generation": "Generation I",
    "About": "At the time of its birth, Vulpix has one white tail. The tail separates into six if this Pokémon receives plenty of love from its trainer. The six tails become magnificently curled.",
    "Types": [
      "Fire"
    ],
    "Resistant": [
      "Fire",
      "Grass",
      "Ice",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "Weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Ember",
        "Type": "Fire",
        "Damage": 10
      },
      {
        "Name": "Quick Attack",
        "Type": "Normal",
        "Damage": 10
      }
    ],
    "Special_Attack": [
      {
        "Name": "Body Slam",
        "Type": "Normal",
        "Damage": 40
      },
      {
        "Name": "Flame Charge",
        "Type": "Fire",
        "Damage": 25
      },
      {
        "Name": "Flamethrower",
        "Type": "Fire",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "8.66kg",
      "Maximum": "11.14kg"
    },
    "Height": {
      "Minimum": "0.53m",
      "Maximum": "0.68m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "76 stamina points.",
    "Base_Attack": "96 attack points.",
    "Base_Defense": "122 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Vulpi"
    },
    "Next_evolution": [
      {
        "Number": 38,
        "Name": "Ninetales"
      }
    ],
    "MaxCP": 725,
    "MaxHP": 831
  },
  {
    "Number": "038",
    "Name": "Ninetales",
    "Generation": "Generation I",
    "About": "Ninetales casts a sinister light from its bright red eyes to gain total control over its foe's mind. This Pokémon is said to live for one thousand years.",
    "Types": [
      "Fire"
    ],
    "Resistant": [
      "Fire",
      "Grass",
      "Ice",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "Weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Ember",
        "Type": "Fire",
        "Damage": 10
      },
      {
        "Name": "Feint Attack",
        "Type": "Dark",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Fire Blast",
        "Type": "Fire",
        "Damage": 100
      },
      {
        "Name": "Flamethrower",
        "Type": "Fire",
        "Damage": 55
      },
      {
        "Name": "Heat Wave",
        "Type": "Fire",
        "Damage": 80
      }
    ],
    "Weight": {
      "Minimum": "17.41kg",
      "Maximum": "22.39kg"
    },
    "Height": {
      "Minimum": "0.96m",
      "Maximum": "1.24m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "146 stamina points.",
    "Base_Attack": "169 attack points.",
    "Base_Defense": "204 defense points.",
    "Base_Flee_Rate": "6% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 37,
        "Name": "Vulpix"
      }
    ],
    "MaxCP": 2015,
    "MaxHP": 2188
  },
  {
    "Number": "039",
    "Name": "Jigglypuff",
    "Generation": "Generation I",
    "About": "Jigglypuff's vocal cords can freely adjust the wavelength of its voice. This Pokémon uses this ability to sing at precisely the right wavelength to make its foes most drowsy.",
    "Types": [
      "Normal",
      "Fairy"
    ],
    "Resistant": [
      "Bug",
      "Ghost",
      "Dragon",
      "Dark"
    ],
    "Weaknesses": [
      "Poison",
      "Steel"
    ],
    "Fast_Attack": [
      {
        "Name": "Feint Attack",
        "Type": "Dark",
        "Damage": 12
      },
      {
        "Name": "Pound",
        "Type": "Normal",
        "Damage": 7
      }
    ],
    "Special_Attack": [
      {
        "Name": "Body Slam",
        "Type": "Normal",
        "Damage": 40
      },
      {
        "Name": "Dazzling Gleam",
        "Type": "Fairy",
        "Damage": 55
      },
      {
        "Name": "Disarming Voice",
        "Type": "Fairy",
        "Damage": 25
      }
    ],
    "Weight": {
      "Minimum": "4.81kg",
      "Maximum": "6.19kg"
    },
    "Height": {
      "Minimum": "0.44m",
      "Maximum": "0.56m"
    },
    "Buddy_Distance": "1km (Medium)",
    "Base_Stamina": "230 stamina points.",
    "Base_Attack": "80 attack points.",
    "Base_Defense": "44 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 174,
        "Name": "Igglybuff"
      }
    ],
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Jigglypuff candies"
    },
    "Next_evolution": [
      {
        "Number": 40,
        "Name": "Wigglytuff"
      }
    ],
    "MaxCP": 796,
    "MaxHP": 917
  },
  {
    "Number": "040",
    "Name": "Wigglytuff",
    "Generation": "Generation I",
    "About": "Wigglytuff has large, saucerlike eyes. The surfaces of its eyes are always covered with a thin layer of tears. If any dust gets in this Pokémon's eyes, it is quickly washed away.",
    "Types": [
      "Normal",
      "Fairy"
    ],
    "Resistant": [
      "Bug",
      "Ghost",
      "Dragon",
      "Dark"
    ],
    "Weaknesses": [
      "Poison",
      "Steel"
    ],
    "Fast_Attack": [
      {
        "Name": "Feint Attack",
        "Type": "Dark",
        "Damage": 12
      },
      {
        "Name": "Pound",
        "Type": "Normal",
        "Damage": 7
      }
    ],
    "Special_Attack": [
      {
        "Name": "Dazzling Gleam",
        "Type": "Fairy",
        "Damage": 55
      },
      {
        "Name": "Hyper Beam",
        "Type": "Normal",
        "Damage": 120
      },
      {
        "Name": "Play Rough",
        "Type": "Fairy",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "10.5kg",
      "Maximum": "13.5kg"
    },
    "Height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "Buddy_Distance": "1km (Big)",
    "Base_Stamina": "280 stamina points.",
    "Base_Attack": "156 attack points.",
    "Base_Defense": "93 defense points.",
    "Base_Flee_Rate": "6% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 174,
        "Name": "Igglybuff"
      },
      {
        "Number": 39,
        "Name": "Jigglypuff"
      }
    ],
    "MaxCP": 1997,
    "MaxHP": 2177
  },
  {
    "Number": "041",
    "Name": "Zubat",
    "Generation": "Generation I",
    "About": "Zubat remains quietly unmoving in a dark spot during the bright daylight hours. It does so because prolonged exposure to the sun causes its body to become slightly burned.",
    "Types": [
      "Poison",
      "Flying"
    ],
    "Resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "Weaknesses": [
      "Electric",
      "Ice",
      "Psychic",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Bite",
        "Type": "Dark",
        "Damage": 6
      },
      {
        "Name": "Quick Attack",
        "Type": "Normal",
        "Damage": 10
      }
    ],
    "Special_Attack": [
      {
        "Name": "Air Cutter",
        "Type": "Flying",
        "Damage": 30
      },
      {
        "Name": "Poison Fang",
        "Type": "Poison",
        "Damage": 25
      },
      {
        "Name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "6.56kg",
      "Maximum": "8.44kg"
    },
    "Height": {
      "Minimum": "0.7m",
      "Maximum": "0.9m"
    },
    "Buddy_Distance": "1km (Flying)",
    "Base_Stamina": "80 stamina points.",
    "Base_Attack": "83 attack points.",
    "Base_Defense": "76 defense points.",
    "Base_Flee_Rate": "20% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Zubat candies"
    },
    "Next_evolution": [
      {
        "Number": 42,
        "Name": "Golbat"
      },
      {
        "Number": 169,
        "Name": "Crobat"
      }
    ],
    "MaxCP": 550,
    "MaxHP": 642
  },
  {
    "Number": "042",
    "Name": "Golbat",
    "Generation": "Generation I",
    "About": "Golbat loves to drink the blood of living things. It is particularly active in the pitch black of night. This Pokémon flits around in the night skies, seeking fresh blood.",
    "Types": [
      "Poison",
      "Flying"
    ],
    "Resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "Weaknesses": [
      "Electric",
      "Ice",
      "Psychic",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Bite",
        "Type": "Dark",
        "Damage": 6
      },
      {
        "Name": "Wing Attack",
        "Type": "Flying",
        "Damage": 9
      }
    ],
    "Special_Attack": [
      {
        "Name": "Air Cutter",
        "Type": "Flying",
        "Damage": 30
      },
      {
        "Name": "Ominous Wind",
        "Type": "Ghost",
        "Damage": 30
      },
      {
        "Name": "Poison Fang",
        "Type": "Poison",
        "Damage": 25
      }
    ],
    "Weight": {
      "Minimum": "48.13kg",
      "Maximum": "61.88kg"
    },
    "Height": {
      "Minimum": "1.4m",
      "Maximum": "1.8m"
    },
    "Buddy_Distance": "1km (Flying)",
    "Base_Stamina": "150 stamina points.",
    "Base_Attack": "161 attack points.",
    "Base_Defense": "153 defense points.",
    "Base_Flee_Rate": "7% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 41,
        "Name": "Zubat"
      }
    ],
    "Next_evolution": [
      {
        "Number": 169,
        "Name": "Crobat"
      }
    ],
    "MaxCP": 1760,
    "MaxHP": 1921
  },
  {
    "Number": "043",
    "Name": "Oddish",
    "Generation": "Generation I",
    "About": "During the daytime, Oddish buries itself in soil to absorb nutrients from the ground using its entire body. The more fertile the soil, the glossier its leaves become.",
    "Types": [
      "Grass",
      "Poison"
    ],
    "Resistant": [
      "Water",
      "Electric",
      "Grass",
      "Fighting",
      "Fairy"
    ],
    "Weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "Fast_Attack": [
      {
        "Name": "Acid",
        "Type": "Poison",
        "Damage": 10
      },
      {
        "Name": "Razor Leaf",
        "Type": "Grass",
        "Damage": 15
      }
    ],
    "Special_Attack": [
      {
        "Name": "Moonblast",
        "Type": "Fairy",
        "Damage": 85
      },
      {
        "Name": "Seed Bomb",
        "Type": "Grass",
        "Damage": 40
      },
      {
        "Name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "4.73kg",
      "Maximum": "6.08kg"
    },
    "Height": {
      "Minimum": "0.44m",
      "Maximum": "0.56m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "90 stamina points.",
    "Base_Attack": "131 attack points.",
    "Base_Defense": "116 defense points.",
    "Base_Flee_Rate": "15% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 25,
      "Name": "Oddish candies"
    },
    "Next_evolution": [
      {
        "Number": 44,
        "Name": "Gloom"
      },
      {
        "Number": 45,
        "Name": "Vileplume"
      },
      {
        "Number": 182,
        "Name": "Bellossom"
      }
    ],
    "MaxCP": 1023,
    "MaxHP": 1148
  },
  {
    "Number": "044",
    "Name": "Gloom",
    "Generation": "Generation I",
    "About": "Gloom releases a foul fragrance from the pistil of its flower. When faced with danger, the stench worsens. If this Pokémon is feeling calm and secure, it does not release its usual stinky aroma.",
    "Types": [
      "Grass",
      "Poison"
    ],
    "Resistant": [
      "Water",
      "Electric",
      "Grass",
      "Fighting",
      "Fairy"
    ],
    "Weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "Fast_Attack": [
      {
        "Name": "Acid",
        "Type": "Poison",
        "Damage": 10
      },
      {
        "Name": "Razor Leaf",
        "Type": "Grass",
        "Damage": 15
      }
    ],
    "Special_Attack": [
      {
        "Name": "Moonblast",
        "Type": "Fairy",
        "Damage": 85
      },
      {
        "Name": "Petal Blizzard",
        "Type": "Grass",
        "Damage": 65
      },
      {
        "Name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "7.53kg",
      "Maximum": "9.68kg"
    },
    "Height": {
      "Minimum": "0.7m",
      "Maximum": "0.9m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "120 stamina points.",
    "Base_Attack": "153 attack points.",
    "Base_Defense": "139 defense points.",
    "Base_Flee_Rate": "7% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 43,
        "Name": "Oddish"
      }
    ],
    "Next_Evolution_Requirements": {
      "Amount": 100,
      "Name": "Oddish candies"
    },
    "Next_evolution": [
      {
        "Number": 45,
        "Name": "Vileplume"
      },
      {
        "Number": 182,
        "Name": "Bellossom"
      }
    ],
    "MaxCP": 1537,
    "MaxHP": 1689
  },
  {
    "Number": "045",
    "Name": "Vileplume",
    "Generation": "Generation I",
    "About": "Vileplume's toxic pollen triggers atrocious allergy attacks. That's why it is advisable never to approach any attractive flowers in a jungle, however pretty they may be.",
    "Types": [
      "Grass",
      "Poison"
    ],
    "Resistant": [
      "Water",
      "Electric",
      "Grass",
      "Fighting",
      "Fairy"
    ],
    "Weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "Fast_Attack": [
      {
        "Name": "Acid",
        "Type": "Poison",
        "Damage": 10
      },
      {
        "Name": "Razor Leaf",
        "Type": "Grass",
        "Damage": 15
      }
    ],
    "Special_Attack": [
      {
        "Name": "Moonblast",
        "Type": "Fairy",
        "Damage": 85
      },
      {
        "Name": "Petal Blizzard",
        "Type": "Grass",
        "Damage": 65
      },
      {
        "Name": "Solar Beam",
        "Type": "Grass",
        "Damage": 120
      }
    ],
    "Weight": {
      "Minimum": "16.28kg",
      "Maximum": "20.93kg"
    },
    "Height": {
      "Minimum": "1.05m",
      "Maximum": "1.35m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "150 stamina points.",
    "Base_Attack": "202 attack points.",
    "Base_Defense": "170 defense points.",
    "Base_Flee_Rate": "5% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 43,
        "Name": "Oddish"
      },
      {
        "Number": 44,
        "Name": "Gloom"
      }
    ],
    "MaxCP": 2307,
    "MaxHP": 2492
  },
  {
    "Number": "046",
    "Name": "Paras",
    "Generation": "Generation I",
    "About": "Paras has parasitic mushrooms growing on its back called tochukaso. They grow large by drawing nutrients from this Bug Pokémon host. They are highly valued as a medicine for extending life.",
    "Types": [
      "Bug",
      "Grass"
    ],
    "Resistant": [
      "Water",
      "Electric",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "Weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Bug Bite",
        "Type": "Bug",
        "Damage": 5
      },
      {
        "Name": "Scratch",
        "Type": "Normal",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Cross Poison",
        "Type": "Poison",
        "Damage": 25
      },
      {
        "Name": "Seed Bomb",
        "Type": "Grass",
        "Damage": 40
      },
      {
        "Name": "X Scissor",
        "Type": "Bug",
        "Damage": 35
      }
    ],
    "Weight": {
      "Minimum": "4.73kg",
      "Maximum": "6.08kg"
    },
    "Height": {
      "Minimum": "0.26m",
      "Maximum": "0.34m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "70 stamina points.",
    "Base_Attack": "121 attack points.",
    "Base_Defense": "99 defense points.",
    "Base_Flee_Rate": "15% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Paras candies"
    },
    "Next_evolution": [
      {
        "Number": 47,
        "Name": "Parasect"
      }
    ],
    "MaxCP": 804,
    "MaxHP": 916
  },
  {
    "Number": "047",
    "Name": "Parasect",
    "Generation": "Generation I",
    "About": "Parasect is known to infest large trees en masse and drain nutrients from the lower trunk and roots. When an infested tree dies, they move onto another tree all at once.",
    "Types": [
      "Bug",
      "Grass"
    ],
    "Resistant": [
      "Water",
      "Electric",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "Weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Bug Bite",
        "Type": "Bug",
        "Damage": 5
      },
      {
        "Name": "Fury Cutter",
        "Type": "Bug",
        "Damage": 3
      }
    ],
    "Special_Attack": [
      {
        "Name": "Cross Poison",
        "Type": "Poison",
        "Damage": 25
      },
      {
        "Name": "Solar Beam",
        "Type": "Grass",
        "Damage": 120
      },
      {
        "Name": "X Scissor",
        "Type": "Bug",
        "Damage": 35
      }
    ],
    "Weight": {
      "Minimum": "25.81kg",
      "Maximum": "33.19kg"
    },
    "Height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "120 stamina points.",
    "Base_Attack": "165 attack points.",
    "Base_Defense": "146 defense points.",
    "Base_Flee_Rate": "7% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 46,
        "Name": "Paras"
      }
    ],
    "MaxCP": 1592,
    "MaxHP": 1747
  },
  {
    "Number": "048",
    "Name": "Venonat",
    "Generation": "Generation I",
    "About": "Venonat is said to have evolved with a coat of thin, stiff hair that covers its entire body for protection. It possesses large eyes that never fail to spot even miniscule prey.",
    "Types": [
      "Bug",
      "Poison"
    ],
    "Resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "Weaknesses": [
      "Fire",
      "Flying",
      "Psychic",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Bug Bite",
        "Type": "Bug",
        "Damage": 5
      },
      {
        "Name": "Confusion",
        "Type": "Psychic",
        "Damage": 15
      }
    ],
    "Special_Attack": [
      {
        "Name": "Poison Fang",
        "Type": "Poison",
        "Damage": 25
      },
      {
        "Name": "Psybeam",
        "Type": "Psychic",
        "Damage": 40
      },
      {
        "Name": "Signal Beam",
        "Type": "Bug",
        "Damage": 45
      }
    ],
    "Weight": {
      "Minimum": "26.25kg",
      "Maximum": "33.75kg"
    },
    "Height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "120 stamina points.",
    "Base_Attack": "100 attack points.",
    "Base_Defense": "102 defense points.",
    "Base_Flee_Rate": "15% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Venonat candies"
    },
    "Next_evolution": [
      {
        "Number": 49,
        "Name": "Venomoth"
      }
    ],
    "MaxCP": 912,
    "MaxHP": 1029
  },
  {
    "Number": "049",
    "Name": "Venomoth",
    "Generation": "Generation I",
    "About": "Venomoth is nocturnal—it is a Pokémon that only becomes active at night. Its favorite prey are small insects that gather around streetlights, attracted by the light in the darkness.",
    "Types": [
      "Bug",
      "Poison"
    ],
    "Resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "Weaknesses": [
      "Fire",
      "Flying",
      "Psychic",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Bug Bite",
        "Type": "Bug",
        "Damage": 5
      },
      {
        "Name": "Confusion",
        "Type": "Psychic",
        "Damage": 15
      }
    ],
    "Special_Attack": [
      {
        "Name": "Bug Buzz",
        "Type": "Bug",
        "Damage": 75
      },
      {
        "Name": "Poison Fang",
        "Type": "Poison",
        "Damage": 25
      },
      {
        "Name": "Psychic",
        "Type": "Psychic",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "10.94kg",
      "Maximum": "14.06kg"
    },
    "Height": {
      "Minimum": "1.31m",
      "Maximum": "1.69m"
    },
    "Buddy_Distance": "3km (Flying)",
    "Base_Stamina": "140 stamina points.",
    "Base_Attack": "179 attack points.",
    "Base_Defense": "150 defense points.",
    "Base_Flee_Rate": "7% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 48,
        "Name": "Venonat"
      }
    ],
    "MaxCP": 1730,
    "MaxHP": 1890
  },
  {
    "Number": "050",
    "Name": "Diglett",
    "Generation": "Generation I",
    "About": "Diglett are raised in most farms. The reason is simple—wherever this Pokémon burrows, the soil is left perfectly tilled for planting crops. This soil is made ideal for growing delicious vegetables.",
    "Types": [
      "Ground"
    ],
    "Resistant": [
      "Electric",
      "Poison",
      "Rock"
    ],
    "Weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "Fast_Attack": [
      {
        "Name": "Mud Slap",
        "Type": "Ground",
        "Damage": 15
      },
      {
        "Name": "Scratch",
        "Type": "Normal",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Dig",
        "Type": "Ground",
        "Damage": 70
      },
      {
        "Name": "Mud Bomb",
        "Type": "Ground",
        "Damage": 30
      },
      {
        "Name": "Rock Tomb",
        "Type": "Rock",
        "Damage": 30
      }
    ],
    "Weight": {
      "Minimum": "0.7kg",
      "Maximum": "0.9kg"
    },
    "Height": {
      "Minimum": "0.18m",
      "Maximum": "0.23m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "20 stamina points.",
    "Base_Attack": "109 attack points.",
    "Base_Defense": "88 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Diglett candies"
    },
    "Next_evolution": [
      {
        "Number": 51,
        "Name": "Dugtrio"
      }
    ],
    "MaxCP": 365,
    "MaxHP": 456
  },
  {
    "Number": "051",
    "Name": "Dugtrio",
    "Generation": "Generation I",
    "About": "Dugtrio are actually triplets that emerged from one body. As a result, each triplet thinks exactly like the other two triplets. They work cooperatively to burrow endlessly.",
    "Types": [
      "Ground"
    ],
    "Resistant": [
      "Electric",
      "Poison",
      "Rock"
    ],
    "Weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "Fast_Attack": [
      {
        "Name": "Mud Slap",
        "Type": "Ground",
        "Damage": 15
      },
      {
        "Name": "Sucker Punch",
        "Type": "Dark",
        "Damage": 7
      }
    ],
    "Special_Attack": [
      {
        "Name": "Earthquake",
        "Type": "Ground",
        "Damage": 100
      },
      {
        "Name": "Mud Bomb",
        "Type": "Ground",
        "Damage": 30
      },
      {
        "Name": "Stone Edge",
        "Type": "Rock",
        "Damage": 80
      }
    ],
    "Weight": {
      "Minimum": "29.14kg",
      "Maximum": "37.46kg"
    },
    "Height": {
      "Minimum": "0.61m",
      "Maximum": "0.79m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "70 stamina points.",
    "Base_Attack": "167 attack points.",
    "Base_Defense": "147 defense points.",
    "Base_Flee_Rate": "6% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 50,
        "Name": "Diglett"
      }
    ],
    "MaxCP": 1038,
    "MaxHP": 1168
  },
  {
    "Number": "052",
    "Name": "Meowth",
    "Generation": "Generation I",
    "About": "Meowth withdraws its sharp claws into its paws to slinkily sneak about without making any incriminating footsteps. For some reason, this Pokémon loves shiny coins that glitter with light.",
    "Types": [
      "Normal"
    ],
    "Resistant": [
      "Ghost"
    ],
    "Weaknesses": [
      "Fighting"
    ],
    "Fast_Attack": [
      {
        "Name": "Bite",
        "Type": "Dark",
        "Damage": 6
      },
      {
        "Name": "Scratch",
        "Type": "Normal",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Body Slam",
        "Type": "Normal",
        "Damage": 40
      },
      {
        "Name": "Dark Pulse",
        "Type": "Dark",
        "Damage": 45
      },
      {
        "Name": "Night Slash",
        "Type": "Dark",
        "Damage": 30
      }
    ],
    "Weight": {
      "Minimum": "3.67kg",
      "Maximum": "4.72kg"
    },
    "Height": {
      "Minimum": "0.35m",
      "Maximum": "0.45m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "80 stamina points.",
    "Base_Attack": "92 attack points.",
    "Base_Defense": "81 defense points.",
    "Base_Flee_Rate": "15% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Meowth candies"
    },
    "Next_evolution": [
      {
        "Number": 53,
        "Name": "Persian"
      }
    ],
    "MaxCP": 656,
    "MaxHP": 756
  },
  {
    "Number": "053",
    "Name": "Persian",
    "Generation": "Generation I",
    "About": "Persian has six bold whiskers that give it a look of toughness. The whiskers sense air movements to determine what is in the Pokémon's surrounding vicinity. It becomes docile if grabbed by the whiskers.",
    "Types": [
      "Normal"
    ],
    "Resistant": [
      "Ghost"
    ],
    "Weaknesses": [
      "Fighting"
    ],
    "Fast_Attack": [
      {
        "Name": "Feint Attack",
        "Type": "Dark",
        "Damage": 12
      },
      {
        "Name": "Scratch",
        "Type": "Normal",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Night Slash",
        "Type": "Dark",
        "Damage": 30
      },
      {
        "Name": "Play Rough",
        "Type": "Fairy",
        "Damage": 55
      },
      {
        "Name": "Power Gem",
        "Type": "Rock",
        "Damage": 40
      }
    ],
    "Weight": {
      "Minimum": "28kg",
      "Maximum": "36kg"
    },
    "Height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "130 stamina points.",
    "Base_Attack": "150 attack points.",
    "Base_Defense": "139 defense points.",
    "Base_Flee_Rate": "7% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 52,
        "Name": "Meowth"
      }
    ],
    "MaxCP": 1483,
    "MaxHP": 1631
  },
  {
    "Number": "054",
    "Name": "Psyduck",
    "Generation": "Generation I",
    "About": "Psyduck uses a mysterious power. When it does so, this Pokémon generates brain waves that are supposedly only seen in sleepers. This discovery spurred controversy among scholars.",
    "Types": [
      "Water"
    ],
    "Resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "Weaknesses": [
      "Electric",
      "Grass"
    ],
    "Fast_Attack": [
      {
        "Name": "Water Gun",
        "Type": "Water",
        "Damage": 6
      },
      {
        "Name": "Zen Headbutt",
        "Type": "Psychic",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Aqua Tail",
        "Type": "Water",
        "Damage": 45
      },
      {
        "Name": "Cross Chop",
        "Type": "Fighting",
        "Damage": 60
      },
      {
        "Name": "Psybeam",
        "Type": "Psychic",
        "Damage": 40
      }
    ],
    "Weight": {
      "Minimum": "17.15kg",
      "Maximum": "22.05kg"
    },
    "Height": {
      "Minimum": "0.7m",
      "Maximum": "0.9m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "100 stamina points.",
    "Base_Attack": "122 attack points.",
    "Base_Defense": "96 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Psyduck candies"
    },
    "Next_evolution": [
      {
        "Number": 55,
        "Name": "Golduck"
      }
    ],
    "MaxCP": 987,
    "MaxHP": 1109
  },
  {
    "Number": "055",
    "Name": "Golduck",
    "Generation": "Generation I",
    "About": "The webbed flippers on its forelegs and hind legs and the streamlined body of Golduck give it frightening speed. The Pokémon is definitely much faster than even the most athletic swimmer.",
    "Types": [
      "Water"
    ],
    "Resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "Weaknesses": [
      "Electric",
      "Grass"
    ],
    "Fast_Attack": [
      {
        "Name": "Confusion",
        "Type": "Psychic",
        "Damage": 15
      },
      {
        "Name": "Water Gun",
        "Type": "Water",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Hydro Pump",
        "Type": "Water",
        "Damage": 90
      },
      {
        "Name": "Ice Beam",
        "Type": "Ice",
        "Damage": 65
      },
      {
        "Name": "Psychic",
        "Type": "Psychic",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "67.02kg",
      "Maximum": "86.17kg"
    },
    "Height": {
      "Minimum": "1.49m",
      "Maximum": "1.91m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "160 stamina points.",
    "Base_Attack": "191 attack points.",
    "Base_Defense": "163 defense points.",
    "Base_Flee_Rate": "6% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 54,
        "Name": "Psyduck"
      }
    ],
    "MaxCP": 2206,
    "MaxHP": 2386
  },
  {
    "Number": "056",
    "Name": "Mankey",
    "Generation": "Generation I",
    "About": "When Mankey starts shaking and its nasal breathing turns rough, it's a sure sign that it is becoming angry. However, because it goes into a towering rage almost instantly, it is impossible for anyone to flee its wrath.",
    "Types": [
      "Fighting"
    ],
    "Resistant": [
      "Bug",
      "Rock",
      "Dark"
    ],
    "Weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "Fast_Attack": [
      {
        "Name": "Karate Chop",
        "Type": "Fighting",
        "Damage": 6
      },
      {
        "Name": "Scratch",
        "Type": "Normal",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Brick Break",
        "Type": "Fighting",
        "Damage": 30
      },
      {
        "Name": "Cross Chop",
        "Type": "Fighting",
        "Damage": 60
      },
      {
        "Name": "Low Sweep",
        "Type": "Fighting",
        "Damage": 30
      }
    ],
    "Weight": {
      "Minimum": "24.5kg",
      "Maximum": "31.5kg"
    },
    "Height": {
      "Minimum": "0.44m",
      "Maximum": "0.56m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "80 stamina points.",
    "Base_Attack": "148 attack points.",
    "Base_Defense": "87 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Mankey candies"
    },
    "Next_evolution": [
      {
        "Number": 57,
        "Name": "Primeape"
      }
    ],
    "MaxCP": 769,
    "MaxHP": 878
  },
  {
    "Number": "057",
    "Name": "Primeape",
    "Generation": "Generation I",
    "About": "When Primeape becomes furious, its blood circulation is boosted. In turn, its muscles are made even stronger. However, it also becomes much less intelligent at the same time.",
    "Types": [
      "Fighting"
    ],
    "Resistant": [
      "Bug",
      "Rock",
      "Dark"
    ],
    "Weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "Fast_Attack": [
      {
        "Name": "Karate Chop",
        "Type": "Fighting",
        "Damage": 6
      },
      {
        "Name": "Low Kick",
        "Type": "Fighting",
        "Damage": 5
      }
    ],
    "Special_Attack": [
      {
        "Name": "Cross Chop",
        "Type": "Fighting",
        "Damage": 60
      },
      {
        "Name": "Low Sweep",
        "Type": "Fighting",
        "Damage": 30
      },
      {
        "Name": "Night Slash",
        "Type": "Dark",
        "Damage": 30
      }
    ],
    "Weight": {
      "Minimum": "28kg",
      "Maximum": "36kg"
    },
    "Height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "130 stamina points.",
    "Base_Attack": "207 attack points.",
    "Base_Defense": "144 defense points.",
    "Base_Flee_Rate": "6% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 56,
        "Name": "Mankey"
      }
    ],
    "MaxCP": 1704,
    "MaxHP": 1864
  },
  {
    "Number": "058",
    "Name": "Growlithe",
    "Generation": "Generation I",
    "About": "Growlithe has a superb sense of smell. Once it smells anything, this Pokémon won't forget the scent, no matter what. It uses its advanced olfactory sense to determine the emotions of other living things.",
    "Types": [
      "Fire"
    ],
    "Resistant": [
      "Fire",
      "Grass",
      "Ice",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "Weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Bite",
        "Type": "Dark",
        "Damage": 6
      },
      {
        "Name": "Ember",
        "Type": "Fire",
        "Damage": 10
      }
    ],
    "Special_Attack": [
      {
        "Name": "Body Slam",
        "Type": "Normal",
        "Damage": 40
      },
      {
        "Name": "Flame Wheel",
        "Type": "Fire",
        "Damage": 40
      },
      {
        "Name": "Flamethrower",
        "Type": "Fire",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "16.63kg",
      "Maximum": "21.38kg"
    },
    "Height": {
      "Minimum": "0.61m",
      "Maximum": "0.79m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "110 stamina points.",
    "Base_Attack": "136 attack points.",
    "Base_Defense": "96 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Growlithe candies"
    },
    "Next_evolution": [
      {
        "Number": 59,
        "Name": "Arcanine"
      }
    ],
    "MaxCP": 1199,
    "MaxHP": 1335
  },
  {
    "Number": "059",
    "Name": "Arcanine",
    "Generation": "Generation I",
    "About": "Arcanine is known for its high speed. It is said to be capable of running over 6,200 miles in a single day and night. The fire that blazes wildly within this Pokémon's body is its source of power.",
    "Types": [
      "Fire"
    ],
    "Resistant": [
      "Fire",
      "Grass",
      "Ice",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "Weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Bite",
        "Type": "Dark",
        "Damage": 6
      },
      {
        "Name": "Fire Fang",
        "Type": "Fire",
        "Damage": 10
      }
    ],
    "Special_Attack": [
      {
        "Name": "Bulldoze",
        "Type": "Ground",
        "Damage": 35
      },
      {
        "Name": "Fire Blast",
        "Type": "Fire",
        "Damage": 100
      },
      {
        "Name": "Flamethrower",
        "Type": "Fire",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "135.63kg",
      "Maximum": "174.38kg"
    },
    "Height": {
      "Minimum": "1.66m",
      "Maximum": "2.14m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "180 stamina points.",
    "Base_Attack": "227 attack points.",
    "Base_Defense": "166 defense points.",
    "Base_Flee_Rate": "6% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 58,
        "Name": "Growlithe"
      }
    ],
    "MaxCP": 2781,
    "MaxHP": 2983
  },
  {
    "Number": "060",
    "Name": "Poliwag",
    "Generation": "Generation I",
    "About": "Poliwag has a very thin skin. It is possible to see the Pokémon's spiral innards right through the skin. Despite its thinness, however, the skin is also very flexible. Even sharp fangs bounce right off it.",
    "Types": [
      "Water"
    ],
    "Resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "Weaknesses": [
      "Electric",
      "Grass"
    ],
    "Fast_Attack": [
      {
        "Name": "Bubble",
        "Type": "Water",
        "Damage": 25
      },
      {
        "Name": "Mud Shot",
        "Type": "Ground",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Body Slam",
        "Type": "Normal",
        "Damage": 40
      },
      {
        "Name": "Bubble Beam",
        "Type": "Water",
        "Damage": 30
      },
      {
        "Name": "Mud Bomb",
        "Type": "Ground",
        "Damage": 30
      }
    ],
    "Weight": {
      "Minimum": "10.85kg",
      "Maximum": "13.95kg"
    },
    "Height": {
      "Minimum": "0.53m",
      "Maximum": "0.68m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "80 stamina points.",
    "Base_Attack": "101 attack points.",
    "Base_Defense": "82 defense points.",
    "Base_Flee_Rate": "15% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 25,
      "Name": "Poliwag candies"
    },
    "Next_evolution": [
      {
        "Number": 61,
        "Name": "Poliwhirl"
      },
      {
        "Number": 62,
        "Name": "Poliwrath"
      },
      {
        "Number": 186,
        "Name": "Politoed"
      }
    ],
    "MaxCP": 693,
    "MaxHP": 795
  },
  {
    "Number": "061",
    "Name": "Poliwhirl",
    "Generation": "Generation I",
    "About": "The surface of Poliwhirl's body is always wet and slick with an oily fluid. Because of this greasy covering, it can easily slip and slide out of the clutches of any enemy in battle.",
    "Types": [
      "Water"
    ],
    "Resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "Weaknesses": [
      "Electric",
      "Grass"
    ],
    "Fast_Attack": [
      {
        "Name": "Bubble",
        "Type": "Water",
        "Damage": 25
      },
      {
        "Name": "Mud Shot",
        "Type": "Ground",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Bubble Beam",
        "Type": "Water",
        "Damage": 30
      },
      {
        "Name": "Mud Bomb",
        "Type": "Ground",
        "Damage": 30
      },
      {
        "Name": "Scald",
        "Type": "Water",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "17.5kg",
      "Maximum": "22.5kg"
    },
    "Height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "130 stamina points.",
    "Base_Attack": "130 attack points.",
    "Base_Defense": "130 defense points.",
    "Base_Flee_Rate": "7% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 60,
        "Name": "Poliwag"
      }
    ],
    "Next_Evolution_Requirements": {
      "Amount": 100,
      "Name": "Poliwag candies"
    },
    "Next_evolution": [
      {
        "Number": 62,
        "Name": "Poliwrath"
      },
      {
        "Number": 186,
        "Name": "Politoed"
      }
    ],
    "MaxCP": 1206,
    "MaxHP": 1340
  },
  {
    "Number": "062",
    "Name": "Poliwrath",
    "Generation": "Generation I",
    "About": "Poliwrath's highly developed, brawny muscles never grow fatigued, however much it exercises. It is so tirelessly strong, this Pokémon can swim back and forth across the ocean without effort.",
    "Types": [
      "Water",
      "Fighting"
    ],
    "Resistant": [
      "Fire",
      "Water",
      "Ice",
      "Bug",
      "Rock",
      "Dark",
      "Steel"
    ],
    "Weaknesses": [
      "Electric",
      "Grass",
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "Fast_Attack": [
      {
        "Name": "Bubble",
        "Type": "Water",
        "Damage": 25
      },
      {
        "Name": "Mud Shot",
        "Type": "Ground",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Hydro Pump",
        "Type": "Water",
        "Damage": 90
      },
      {
        "Name": "Ice Punch",
        "Type": "Ice",
        "Damage": 45
      },
      {
        "Name": "Submission",
        "Type": "Fighting",
        "Damage": 30
      }
    ],
    "Weight": {
      "Minimum": "47.25kg",
      "Maximum": "60.75kg"
    },
    "Height": {
      "Minimum": "1.14m",
      "Maximum": "1.46m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "180 stamina points.",
    "Base_Attack": "182 attack points.",
    "Base_Defense": "187 defense points.",
    "Base_Flee_Rate": "5% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 60,
        "Name": "Poliwag"
      },
      {
        "Number": 61,
        "Name": "Poliwhirl"
      }
    ],
    "MaxCP": 2321,
    "MaxHP": 2505
  },
  {
    "Number": "063",
    "Name": "Abra",
    "Generation": "Generation I",
    "About": "Abra sleeps for eighteen hours a day. However, it can sense the presence of foes even while it is sleeping. In such a situation, this Pokémon immediately teleports to safety.",
    "Types": [
      "Psychic"
    ],
    "Resistant": [
      "Fighting",
      "Psychic"
    ],
    "Weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "Fast_Attack": [
      {
        "Name": "Zen Headbutt",
        "Type": "Psychic",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Psyshock",
        "Type": "Psychic",
        "Damage": 40
      },
      {
        "Name": "Shadow Ball",
        "Type": "Ghost",
        "Damage": 45
      },
      {
        "Name": "Signal Beam",
        "Type": "Bug",
        "Damage": 45
      }
    ],
    "Weight": {
      "Minimum": "17.06kg",
      "Maximum": "21.94kg"
    },
    "Height": {
      "Minimum": "0.79m",
      "Maximum": "1.01m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "50 stamina points.",
    "Base_Attack": "195 attack points.",
    "Base_Defense": "103 defense points.",
    "Base_Flee_Rate": "99% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 25,
      "Name": "Abra candies"
    },
    "Next_evolution": [
      {
        "Number": 64,
        "Name": "Kadabra"
      },
      {
        "Number": 65,
        "Name": "Alakazam"
      }
    ],
    "MaxCP": 508,
    "MaxHP": 600
  },
  {
    "Number": "064",
    "Name": "Kadabra",
    "Generation": "Generation I",
    "About": "Kadabra emits a peculiar alpha wave if it develops a headache. Only those people with a particularly strong psyche can hope to become a trainer of this Pokémon.",
    "Types": [
      "Psychic"
    ],
    "Resistant": [
      "Fighting",
      "Psychic"
    ],
    "Weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "Fast_Attack": [
      {
        "Name": "Confusion",
        "Type": "Psychic",
        "Damage": 15
      },
      {
        "Name": "Psycho Cut",
        "Type": "Psychic",
        "Damage": 7
      }
    ],
    "Special_Attack": [
      {
        "Name": "Dazzling Gleam",
        "Type": "Fairy",
        "Damage": 55
      },
      {
        "Name": "Psybeam",
        "Type": "Psychic",
        "Damage": 40
      },
      {
        "Name": "Shadow Ball",
        "Type": "Ghost",
        "Damage": 45
      }
    ],
    "Weight": {
      "Minimum": "49.44kg",
      "Maximum": "63.56kg"
    },
    "Height": {
      "Minimum": "1.14m",
      "Maximum": "1.46m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "80 stamina points.",
    "Base_Attack": "232 attack points.",
    "Base_Defense": "138 defense points.",
    "Base_Flee_Rate": "7% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 63,
        "Name": "Abra"
      }
    ],
    "Next_Evolution_Requirements": {
      "Amount": 100,
      "Name": "Abra candies"
    },
    "Next_evolution": [
      {
        "Number": 65,
        "Name": "Alakazam"
      }
    ],
    "MaxCP": 1005,
    "MaxHP": 1131
  },
  {
    "Number": "065",
    "Name": "Alakazam",
    "Generation": "Generation I",
    "About": "Alakazam's brain continually grows, making its head far too heavy to support with its neck. This Pokémon holds its head up using its psychokinetic power instead.",
    "Types": [
      "Psychic"
    ],
    "Resistant": [
      "Fighting",
      "Psychic"
    ],
    "Weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "Fast_Attack": [
      {
        "Name": "Confusion",
        "Type": "Psychic",
        "Damage": 15
      },
      {
        "Name": "Psycho Cut",
        "Type": "Psychic",
        "Damage": 7
      }
    ],
    "Special_Attack": [
      {
        "Name": "Dazzling Gleam",
        "Type": "Fairy",
        "Damage": 55
      },
      {
        "Name": "Psychic",
        "Type": "Psychic",
        "Damage": 55
      },
      {
        "Name": "Shadow Ball",
        "Type": "Ghost",
        "Damage": 45
      }
    ],
    "Weight": {
      "Minimum": "42kg",
      "Maximum": "54kg"
    },
    "Height": {
      "Minimum": "1.31m",
      "Maximum": "1.69m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "110 stamina points.",
    "Base_Attack": "271 attack points.",
    "Base_Defense": "194 defense points.",
    "Base_Flee_Rate": "5% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 63,
        "Name": "Abra"
      },
      {
        "Number": 64,
        "Name": "Kadabra"
      }
    ],
    "MaxCP": 1654,
    "MaxHP": 1813
  },
  {
    "Number": "066",
    "Name": "Machop",
    "Generation": "Generation I",
    "About": "Machop's muscles are special—they never get sore no matter how much they are used in exercise. This Pokémon has sufficient power to hurl a hundred adult humans.",
    "Types": [
      "Fighting"
    ],
    "Resistant": [
      "Bug",
      "Rock",
      "Dark"
    ],
    "Weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "Fast_Attack": [
      {
        "Name": "Karate Chop",
        "Type": "Fighting",
        "Damage": 6
      },
      {
        "Name": "Low Kick",
        "Type": "Fighting",
        "Damage": 5
      }
    ],
    "Special_Attack": [
      {
        "Name": "Brick Break",
        "Type": "Fighting",
        "Damage": 30
      },
      {
        "Name": "Cross Chop",
        "Type": "Fighting",
        "Damage": 60
      },
      {
        "Name": "Low Sweep",
        "Type": "Fighting",
        "Damage": 30
      }
    ],
    "Weight": {
      "Minimum": "17.06kg",
      "Maximum": "21.94kg"
    },
    "Height": {
      "Minimum": "0.7m",
      "Maximum": "0.9m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "140 stamina points.",
    "Base_Attack": "137 attack points.",
    "Base_Defense": "88 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 25,
      "Name": "Machop candies"
    },
    "Next_evolution": [
      {
        "Number": 67,
        "Name": "Machoke"
      },
      {
        "Number": 68,
        "Name": "Machamp"
      }
    ],
    "MaxCP": 968,
    "MaxHP": 1089
  },
  {
    "Number": "067",
    "Name": "Machoke",
    "Generation": "Generation I",
    "About": "Machoke's thoroughly toned muscles possess the hardness of steel. This Pokémon has so much strength, it can easily hold aloft a sumo wrestler on just one finger.",
    "Types": [
      "Fighting"
    ],
    "Resistant": [
      "Bug",
      "Rock",
      "Dark"
    ],
    "Weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "Fast_Attack": [
      {
        "Name": "Karate Chop",
        "Type": "Fighting",
        "Damage": 6
      },
      {
        "Name": "Low Kick",
        "Type": "Fighting",
        "Damage": 5
      }
    ],
    "Special_Attack": [
      {
        "Name": "Brick Break",
        "Type": "Fighting",
        "Damage": 30
      },
      {
        "Name": "Cross Chop",
        "Type": "Fighting",
        "Damage": 60
      },
      {
        "Name": "Submission",
        "Type": "Fighting",
        "Damage": 30
      }
    ],
    "Weight": {
      "Minimum": "61.69kg",
      "Maximum": "79.31kg"
    },
    "Height": {
      "Minimum": "1.31m",
      "Maximum": "1.69m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "160 stamina points.",
    "Base_Attack": "177 attack points.",
    "Base_Defense": "130 defense points.",
    "Base_Flee_Rate": "7% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 66,
        "Name": "Machop"
      }
    ],
    "Next_Evolution_Requirements": {
      "Amount": 100,
      "Name": "Machop candies"
    },
    "Next_evolution": [
      {
        "Number": 68,
        "Name": "Machamp"
      }
    ],
    "MaxCP": 1606,
    "MaxHP": 1760
  },
  {
    "Number": "068",
    "Name": "Machamp",
    "Generation": "Generation I",
    "About": "Machamp has the power to hurl anything aside. However, trying to do any work requiring care and dexterity causes its arms to get tangled. This Pokémon tends to leap into action before it thinks.",
    "Types": [
      "Fighting"
    ],
    "Resistant": [
      "Bug",
      "Rock",
      "Dark"
    ],
    "Weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "Fast_Attack": [
      {
        "Name": "Bullet Punch",
        "Type": "Steel",
        "Damage": 10
      },
      {
        "Name": "Karate Chop",
        "Type": "Fighting",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Cross Chop",
        "Type": "Fighting",
        "Damage": 60
      },
      {
        "Name": "Stone Edge",
        "Type": "Rock",
        "Damage": 80
      },
      {
        "Name": "Submission",
        "Type": "Fighting",
        "Damage": 30
      }
    ],
    "Weight": {
      "Minimum": "113.75kg",
      "Maximum": "146.25kg"
    },
    "Height": {
      "Minimum": "1.4m",
      "Maximum": "1.8m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "180 stamina points.",
    "Base_Attack": "234 attack points.",
    "Base_Defense": "162 defense points.",
    "Base_Flee_Rate": "5% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 66,
        "Name": "Machop"
      },
      {
        "Number": 67,
        "Name": "Machoke"
      }
    ],
    "MaxCP": 2406,
    "MaxHP": 2594
  },
  {
    "Number": "069",
    "Name": "Bellsprout",
    "Generation": "Generation I",
    "About": "Bellsprout's thin and flexible body lets it bend and sway to avoid any attack, however strong it may be. From its mouth, this Pokémon spits a corrosive fluid that melts even iron.",
    "Types": [
      "Grass",
      "Poison"
    ],
    "Resistant": [
      "Water",
      "Electric",
      "Grass",
      "Fighting",
      "Fairy"
    ],
    "Weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "Fast_Attack": [
      {
        "Name": "Acid",
        "Type": "Poison",
        "Damage": 10
      },
      {
        "Name": "Vine Whip",
        "Type": "Grass",
        "Damage": 7
      }
    ],
    "Special_Attack": [
      {
        "Name": "Power Whip",
        "Type": "Grass",
        "Damage": 70
      },
      {
        "Name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      },
      {
        "Name": "Wrap",
        "Type": "Normal",
        "Damage": 25
      }
    ],
    "Weight": {
      "Minimum": "3.5kg",
      "Maximum": "4.5kg"
    },
    "Height": {
      "Minimum": "0.61m",
      "Maximum": "0.79m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "100 stamina points.",
    "Base_Attack": "139 attack points.",
    "Base_Defense": "64 defense points.",
    "Base_Flee_Rate": "15% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 25,
      "Name": "Bellsprout candies"
    },
    "Next_evolution": [
      {
        "Number": 70,
        "Name": "Weepinbell"
      },
      {
        "Number": 71,
        "Name": "Victreebel"
      }
    ],
    "MaxCP": 990,
    "MaxHP": 1117
  },
  {
    "Number": "070",
    "Name": "Weepinbell",
    "Generation": "Generation I",
    "About": "Weepinbell has a large hook on its rear end. At night, the Pokémon hooks on to a tree branch and goes to sleep. If it moves around in its sleep, it may wake up to find itself on the ground.",
    "Types": [
      "Grass",
      "Poison"
    ],
    "Resistant": [
      "Water",
      "Electric",
      "Grass",
      "Fighting",
      "Fairy"
    ],
    "Weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "Fast_Attack": [
      {
        "Name": "Acid",
        "Type": "Poison",
        "Damage": 10
      },
      {
        "Name": "Razor Leaf",
        "Type": "Grass",
        "Damage": 15
      }
    ],
    "Special_Attack": [
      {
        "Name": "Power Whip",
        "Type": "Grass",
        "Damage": 70
      },
      {
        "Name": "Seed Bomb",
        "Type": "Grass",
        "Damage": 40
      },
      {
        "Name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "5.6kg",
      "Maximum": "7.2kg"
    },
    "Height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "130 stamina points.",
    "Base_Attack": "172 attack points.",
    "Base_Defense": "95 defense points.",
    "Base_Flee_Rate": "7% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 69,
        "Name": "Bellsprout"
      }
    ],
    "Next_Evolution_Requirements": {
      "Amount": 100,
      "Name": "Bellsprout candies"
    },
    "Next_evolution": [
      {
        "Number": 71,
        "Name": "Victreebel"
      }
    ],
    "MaxCP": 1567,
    "MaxHP": 1723
  },
  {
    "Number": "071",
    "Name": "Victreebel",
    "Generation": "Generation I",
    "About": "Victreebel has a long vine that extends from its head. This vine is waved and flicked about as if it were an animal to attract prey. When an unsuspecting prey draws near, this Pokémon swallows it whole.",
    "Types": [
      "Grass",
      "Poison"
    ],
    "Resistant": [
      "Water",
      "Electric",
      "Grass",
      "Fighting",
      "Fairy"
    ],
    "Weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "Fast_Attack": [
      {
        "Name": "Acid",
        "Type": "Poison",
        "Damage": 10
      },
      {
        "Name": "Razor Leaf",
        "Type": "Grass",
        "Damage": 15
      }
    ],
    "Special_Attack": [
      {
        "Name": "Leaf Blade",
        "Type": "Grass",
        "Damage": 55
      },
      {
        "Name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      },
      {
        "Name": "Solar Beam",
        "Type": "Grass",
        "Damage": 120
      }
    ],
    "Weight": {
      "Minimum": "13.56kg",
      "Maximum": "17.44kg"
    },
    "Height": {
      "Minimum": "1.49m",
      "Maximum": "1.91m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "160 stamina points.",
    "Base_Attack": "207 attack points.",
    "Base_Defense": "138 defense points.",
    "Base_Flee_Rate": "5% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 69,
        "Name": "Bellsprout"
      },
      {
        "Number": 70,
        "Name": "Weepinbell"
      }
    ],
    "MaxCP": 2342,
    "MaxHP": 2530
  },
  {
    "Number": "072",
    "Name": "Tentacool",
    "Generation": "Generation I",
    "About": "Tentacool's body is largely composed of water. If it is removed from the sea, it dries up like parchment. If this Pokémon happens to become dehydrated, put it back into the sea.",
    "Types": [
      "Water",
      "Poison"
    ],
    "Resistant": [
      "Fire",
      "Water",
      "Ice",
      "Fighting",
      "Poison",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "Weaknesses": [
      "Electric",
      "Ground",
      "Psychic"
    ],
    "Fast_Attack": [
      {
        "Name": "Bubble",
        "Type": "Water",
        "Damage": 25
      },
      {
        "Name": "Poison Sting",
        "Type": "Poison",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Bubble Beam",
        "Type": "Water",
        "Damage": 30
      },
      {
        "Name": "Water Pulse",
        "Type": "Water",
        "Damage": 35
      },
      {
        "Name": "Wrap",
        "Type": "Normal",
        "Damage": 25
      }
    ],
    "Weight": {
      "Minimum": "39.81kg",
      "Maximum": "51.19kg"
    },
    "Height": {
      "Minimum": "0.79m",
      "Maximum": "1.01m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "80 stamina points.",
    "Base_Attack": "97 attack points.",
    "Base_Defense": "182 defense points.",
    "Base_Flee_Rate": "15% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Tentacool candies"
    },
    "Next_evolution": [
      {
        "Number": 73,
        "Name": "Tentacruel"
      }
    ],
    "MaxCP": 794,
    "MaxHP": 905
  },
  {
    "Number": "073",
    "Name": "Tentacruel",
    "Generation": "Generation I",
    "About": "Tentacruel has large red orbs on its head. The orbs glow before lashing the vicinity with a harsh ultrasonic blast. This Pokémon's outburst creates rough waves around it.",
    "Types": [
      "Water",
      "Poison"
    ],
    "Resistant": [
      "Fire",
      "Water",
      "Ice",
      "Fighting",
      "Poison",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "Weaknesses": [
      "Electric",
      "Ground",
      "Psychic"
    ],
    "Fast_Attack": [
      {
        "Name": "Acid",
        "Type": "Poison",
        "Damage": 10
      },
      {
        "Name": "Poison Jab",
        "Type": "Poison",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Blizzard",
        "Type": "Ice",
        "Damage": 100
      },
      {
        "Name": "Hydro Pump",
        "Type": "Water",
        "Damage": 90
      },
      {
        "Name": "Sludge Wave",
        "Type": "Poison",
        "Damage": 70
      }
    ],
    "Weight": {
      "Minimum": "48.13kg",
      "Maximum": "61.88kg"
    },
    "Height": {
      "Minimum": "1.4m",
      "Maximum": "1.8m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "160 stamina points.",
    "Base_Attack": "166 attack points.",
    "Base_Defense": "237 defense points.",
    "Base_Flee_Rate": "7% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 72,
        "Name": "Tentacool"
      }
    ],
    "MaxCP": 2046,
    "MaxHP": 2220
  },
  {
    "Number": "074",
    "Name": "Geodude",
    "Generation": "Generation I",
    "About": "The longer a Geodude lives, the more its edges are chipped and worn away, making it more rounded in appearance. However, this Pokémon's heart will remain hard, craggy, and rough always.",
    "Types": [
      "Rock",
      "Ground"
    ],
    "Resistant": [
      "Normal",
      "Fire",
      "Electric",
      "Poison",
      "Flying",
      "Rock"
    ],
    "Weaknesses": [
      "Water",
      "Grass",
      "Ice",
      "Fighting",
      "Ground",
      "Steel"
    ],
    "Fast_Attack": [
      {
        "Name": "Rock Throw",
        "Type": "Rock",
        "Damage": 12
      },
      {
        "Name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Dig",
        "Type": "Ground",
        "Damage": 70
      },
      {
        "Name": "Rock Slide",
        "Type": "Rock",
        "Damage": 50
      },
      {
        "Name": "Rock Tomb",
        "Type": "Rock",
        "Damage": 30
      }
    ],
    "Weight": {
      "Minimum": "17.5kg",
      "Maximum": "22.5kg"
    },
    "Height": {
      "Minimum": "0.35m",
      "Maximum": "0.45m"
    },
    "Buddy_Distance": "1km (Medium)",
    "Base_Stamina": "80 stamina points.",
    "Base_Attack": "132 attack points.",
    "Base_Defense": "163 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 25,
      "Name": "Geodude candies"
    },
    "Next_evolution": [
      {
        "Number": 75,
        "Name": "Graveler"
      },
      {
        "Number": 76,
        "Name": "Golem"
      }
    ],
    "MaxCP": 742,
    "MaxHP": 849
  },
  {
    "Number": "075",
    "Name": "Graveler",
    "Generation": "Generation I",
    "About": "Graveler grows by feeding on rocks. Apparently, it prefers to eat rocks that are covered in moss. This Pokémon eats its way through a ton of rocks on a daily basis.",
    "Types": [
      "Rock",
      "Ground"
    ],
    "Resistant": [
      "Normal",
      "Fire",
      "Electric",
      "Poison",
      "Flying",
      "Rock"
    ],
    "Weaknesses": [
      "Water",
      "Grass",
      "Ice",
      "Fighting",
      "Ground",
      "Steel"
    ],
    "Fast_Attack": [
      {
        "Name": "Mud Slap",
        "Type": "Ground",
        "Damage": 15
      },
      {
        "Name": "Rock Throw",
        "Type": "Rock",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Dig",
        "Type": "Ground",
        "Damage": 70
      },
      {
        "Name": "Rock Slide",
        "Type": "Rock",
        "Damage": 50
      },
      {
        "Name": "Stone Edge",
        "Type": "Rock",
        "Damage": 80
      }
    ],
    "Weight": {
      "Minimum": "91.88kg",
      "Maximum": "118.13kg"
    },
    "Height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "Buddy_Distance": "1km (Big)",
    "Base_Stamina": "110 stamina points.",
    "Base_Attack": "164 attack points.",
    "Base_Defense": "196 defense points.",
    "Base_Flee_Rate": "7% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 74,
        "Name": "Geodude"
      }
    ],
    "Next_Evolution_Requirements": {
      "Amount": 100,
      "Name": "Geodude candies"
    },
    "Next_evolution": [
      {
        "Number": 76,
        "Name": "Golem"
      }
    ],
    "MaxCP": 1294,
    "MaxHP": 1433
  },
  {
    "Number": "076",
    "Name": "Golem",
    "Generation": "Generation I",
    "About": "Golem live up on mountains. If there is a large earthquake, these Pokémon will come rolling down off the mountains en masse to the foothills below.",
    "Types": [
      "Rock",
      "Ground"
    ],
    "Resistant": [
      "Normal",
      "Fire",
      "Electric",
      "Poison",
      "Flying",
      "Rock"
    ],
    "Weaknesses": [
      "Water",
      "Grass",
      "Ice",
      "Fighting",
      "Ground",
      "Steel"
    ],
    "Fast_Attack": [
      {
        "Name": "Mud Slap",
        "Type": "Ground",
        "Damage": 15
      },
      {
        "Name": "Rock Throw",
        "Type": "Rock",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Ancient Power",
        "Type": "Rock",
        "Damage": 35
      },
      {
        "Name": "Earthquake",
        "Type": "Ground",
        "Damage": 100
      },
      {
        "Name": "Stone Edge",
        "Type": "Rock",
        "Damage": 80
      }
    ],
    "Weight": {
      "Minimum": "262.5kg",
      "Maximum": "337.5kg"
    },
    "Height": {
      "Minimum": "1.22m",
      "Maximum": "1.57m"
    },
    "Buddy_Distance": "1km (Big)",
    "Base_Stamina": "160 stamina points.",
    "Base_Attack": "211 attack points.",
    "Base_Defense": "229 defense points.",
    "Base_Flee_Rate": "5% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 74,
        "Name": "Geodude"
      },
      {
        "Number": 75,
        "Name": "Graveler"
      }
    ],
    "MaxCP": 2126,
    "MaxHP": 2303
  },
  {
    "Number": "077",
    "Name": "Ponyta",
    "Generation": "Generation I",
    "About": "Ponyta is very weak at birth. It can barely stand up. This Pokémon becomes stronger by stumbling and falling to keep up with its parent.",
    "Types": [
      "Fire"
    ],
    "Resistant": [
      "Fire",
      "Grass",
      "Ice",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "Weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Ember",
        "Type": "Fire",
        "Damage": 10
      },
      {
        "Name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Fire Blast",
        "Type": "Fire",
        "Damage": 100
      },
      {
        "Name": "Flame Charge",
        "Type": "Fire",
        "Damage": 25
      },
      {
        "Name": "Flame Wheel",
        "Type": "Fire",
        "Damage": 40
      }
    ],
    "Weight": {
      "Minimum": "26.25kg",
      "Maximum": "33.75kg"
    },
    "Height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "100 stamina points.",
    "Base_Attack": "170 attack points.",
    "Base_Defense": "132 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Ponyta candies"
    },
    "Next_evolution": [
      {
        "Number": 78,
        "Name": "Rapidash"
      }
    ],
    "MaxCP": 1370,
    "MaxHP": 1516
  },
  {
    "Number": "078",
    "Name": "Rapidash",
    "Generation": "Generation I",
    "About": "Rapidash usually can be seen casually cantering in the fields and plains. However, when this Pokémon turns serious, its fiery manes flare and blaze as it gallops its way up to 150 mph.",
    "Types": [
      "Fire"
    ],
    "Resistant": [
      "Fire",
      "Grass",
      "Ice",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "Weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Ember",
        "Type": "Fire",
        "Damage": 10
      },
      {
        "Name": "Low Kick",
        "Type": "Fighting",
        "Damage": 5
      }
    ],
    "Special_Attack": [
      {
        "Name": "Drill Run",
        "Type": "Ground",
        "Damage": 50
      },
      {
        "Name": "Fire Blast",
        "Type": "Fire",
        "Damage": 100
      },
      {
        "Name": "Heat Wave",
        "Type": "Fire",
        "Damage": 80
      }
    ],
    "Weight": {
      "Minimum": "83.13kg",
      "Maximum": "106.88kg"
    },
    "Height": {
      "Minimum": "1.49m",
      "Maximum": "1.91m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "130 stamina points.",
    "Base_Attack": "207 attack points.",
    "Base_Defense": "167 defense points.",
    "Base_Flee_Rate": "6% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 77,
        "Name": "Ponyta"
      }
    ],
    "MaxCP": 2024,
    "MaxHP": 2199
  },
  {
    "Number": "079",
    "Name": "Slowpoke",
    "Generation": "Generation I",
    "About": "Slowpoke uses its tail to catch prey by dipping it in water at the side of a river. However, this Pokémon often forgets what it's doing and often spends entire days just loafing at water's edge.",
    "Types": [
      "Water",
      "Psychic"
    ],
    "Resistant": [
      "Fire",
      "Water",
      "Ice",
      "Fighting",
      "Psychic",
      "Steel"
    ],
    "Weaknesses": [
      "Electric",
      "Grass",
      "Bug",
      "Ghost",
      "Dark"
    ],
    "Fast_Attack": [
      {
        "Name": "Confusion",
        "Type": "Psychic",
        "Damage": 15
      },
      {
        "Name": "Water Gun",
        "Type": "Water",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Psychic",
        "Type": "Psychic",
        "Damage": 55
      },
      {
        "Name": "Psyshock",
        "Type": "Psychic",
        "Damage": 40
      },
      {
        "Name": "Water Pulse",
        "Type": "Water",
        "Damage": 35
      }
    ],
    "Weight": {
      "Minimum": "31.5kg",
      "Maximum": "40.5kg"
    },
    "Height": {
      "Minimum": "1.05m",
      "Maximum": "1.35m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "180 stamina points.",
    "Base_Attack": "109 attack points.",
    "Base_Defense": "109 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Slowpoke candies"
    },
    "Next_evolution": [
      {
        "Number": 80,
        "Name": "Slowbro"
      },
      {
        "Number": 199,
        "Name": "Slowking"
      }
    ],
    "MaxCP": 1089,
    "MaxHP": 1218
  },
  {
    "Number": "080",
    "Name": "Slowbro",
    "Generation": "Generation I",
    "About": "Slowbro's tail has a Shellder firmly attached with a bite. As a result, the tail can't be used for fishing anymore. This causes Slowbro to grudgingly swim and catch prey instead.",
    "Types": [
      "Water",
      "Psychic"
    ],
    "Resistant": [
      "Fire",
      "Water",
      "Ice",
      "Fighting",
      "Psychic",
      "Steel"
    ],
    "Weaknesses": [
      "Electric",
      "Grass",
      "Bug",
      "Ghost",
      "Dark"
    ],
    "Fast_Attack": [
      {
        "Name": "Confusion",
        "Type": "Psychic",
        "Damage": 15
      },
      {
        "Name": "Water Gun",
        "Type": "Water",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Ice Beam",
        "Type": "Ice",
        "Damage": 65
      },
      {
        "Name": "Psychic",
        "Type": "Psychic",
        "Damage": 55
      },
      {
        "Name": "Water Pulse",
        "Type": "Water",
        "Damage": 35
      }
    ],
    "Weight": {
      "Minimum": "68.69kg",
      "Maximum": "88.31kg"
    },
    "Height": {
      "Minimum": "1.4m",
      "Maximum": "1.8m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "190 stamina points.",
    "Base_Attack": "177 attack points.",
    "Base_Defense": "194 defense points.",
    "Base_Flee_Rate": "6% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 79,
        "Name": "Slowpoke"
      }
    ],
    "MaxCP": 2409,
    "MaxHP": 2597
  },
  {
    "Number": "081",
    "Name": "Magnemite",
    "Generation": "Generation I",
    "About": "Magnemite attaches itself to power lines to feed on electricity. If your house has a power outage, check your circuit breakers. You may find a large number of this Pokémon clinging to the breaker box.",
    "Types": [
      "Electric",
      "Steel"
    ],
    "Resistant": [
      "Normal",
      "Electric",
      "Grass",
      "Ice",
      "Poison",
      "Flying",
      "Psychic",
      "Bug",
      "Rock",
      "Dragon",
      "Steel",
      "Fairy"
    ],
    "Weaknesses": [
      "Fire",
      "Fighting",
      "Ground"
    ],
    "Fast_Attack": [
      {
        "Name": "Spark",
        "Type": "Electric",
        "Damage": 7
      },
      {
        "Name": "Thunder Shock",
        "Type": "Electric",
        "Damage": 5
      }
    ],
    "Special_Attack": [
      {
        "Name": "Discharge",
        "Type": "Electric",
        "Damage": 35
      },
      {
        "Name": "Magnet Bomb",
        "Type": "Steel",
        "Damage": 30
      },
      {
        "Name": "Thunderbolt",
        "Type": "Electric",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "5.25kg",
      "Maximum": "6.75kg"
    },
    "Height": {
      "Minimum": "0.26m",
      "Maximum": "0.34m"
    },
    "Buddy_Distance": "3km (Flying)",
    "Base_Stamina": "50 stamina points.",
    "Base_Attack": "165 attack points.",
    "Base_Defense": "128 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Magnemite candies"
    },
    "Next_evolution": [
      {
        "Number": 82,
        "Name": "Magneton"
      }
    ],
    "MaxCP": 774,
    "MaxHP": 890
  },
  {
    "Number": "082",
    "Name": "Magneton",
    "Generation": "Generation I",
    "About": "Magneton emits a powerful magnetic force that is fatal to mechanical devices. As a result, large cities sound sirens to warn citizens of large-scale outbreaks of this Pokémon.",
    "Types": [
      "Electric",
      "Steel"
    ],
    "Resistant": [
      "Normal",
      "Electric",
      "Grass",
      "Ice",
      "Poison",
      "Flying",
      "Psychic",
      "Bug",
      "Rock",
      "Dragon",
      "Steel",
      "Fairy"
    ],
    "Weaknesses": [
      "Fire",
      "Fighting",
      "Ground"
    ],
    "Fast_Attack": [
      {
        "Name": "Spark",
        "Type": "Electric",
        "Damage": 7
      },
      {
        "Name": "Thunder Shock",
        "Type": "Electric",
        "Damage": 5
      }
    ],
    "Special_Attack": [
      {
        "Name": "Discharge",
        "Type": "Electric",
        "Damage": 35
      },
      {
        "Name": "Flash Cannon",
        "Type": "Steel",
        "Damage": 60
      },
      {
        "Name": "Magnet Bomb",
        "Type": "Steel",
        "Damage": 30
      }
    ],
    "Weight": {
      "Minimum": "52.5kg",
      "Maximum": "67.5kg"
    },
    "Height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "100 stamina points.",
    "Base_Attack": "223 attack points.",
    "Base_Defense": "182 defense points.",
    "Base_Flee_Rate": "6% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 81,
        "Name": "Magnemite"
      }
    ],
    "MaxCP": 1715,
    "MaxHP": 1879
  },
  {
    "Number": "083",
    "Name": "Farfetchd",
    "Generation": "Generation I",
    "About": "Farfetch'd is always seen with a stalk from a plant of some sort. Apparently, there are good stalks and bad stalks. This Pokémon has been known to fight with others over stalks.",
    "Types": [
      "Normal",
      "Flying"
    ],
    "Resistant": [
      "Grass",
      "Ground",
      "Bug",
      "Ghost"
    ],
    "Weaknesses": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Cut",
        "Type": "Normal",
        "Damage": 12
      },
      {
        "Name": "Fury Cutter",
        "Type": "Bug",
        "Damage": 3
      }
    ],
    "Special_Attack": [
      {
        "Name": "Aerial Ace",
        "Type": "Flying",
        "Damage": 30
      },
      {
        "Name": "Air Cutter",
        "Type": "Flying",
        "Damage": 30
      },
      {
        "Name": "Leaf Blade",
        "Type": "Grass",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "13.13kg",
      "Maximum": "16.88kg"
    },
    "Height": {
      "Minimum": "0.7m",
      "Maximum": "0.9m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "104 stamina points.",
    "Base_Attack": "124 attack points.",
    "Base_Defense": "118 defense points.",
    "Base_Flee_Rate": "9% chance to flee.",
    "MaxCP": 1133,
    "MaxHP": 1263
  },
  {
    "Number": "084",
    "Name": "Doduo",
    "Generation": "Generation I",
    "About": "Doduo's two heads never sleep at the same time. Its two heads take turns sleeping, so one head can always keep watch for enemies while the other one sleeps.",
    "Types": [
      "Normal",
      "Flying"
    ],
    "Resistant": [
      "Grass",
      "Ground",
      "Bug",
      "Ghost"
    ],
    "Weaknesses": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Peck",
        "Type": "Flying",
        "Damage": 10
      },
      {
        "Name": "Quick Attack",
        "Type": "Normal",
        "Damage": 10
      }
    ],
    "Special_Attack": [
      {
        "Name": "Aerial Ace",
        "Type": "Flying",
        "Damage": 30
      },
      {
        "Name": "Drill Peck",
        "Type": "Flying",
        "Damage": 40
      },
      {
        "Name": "Swift",
        "Type": "Normal",
        "Damage": 30
      }
    ],
    "Weight": {
      "Minimum": "34.3kg",
      "Maximum": "44.1kg"
    },
    "Height": {
      "Minimum": "1.22m",
      "Maximum": "1.57m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "70 stamina points.",
    "Base_Attack": "158 attack points.",
    "Base_Defense": "88 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Doduo candies"
    },
    "Next_evolution": [
      {
        "Number": 85,
        "Name": "Dodrio"
      }
    ],
    "MaxCP": 746,
    "MaxHP": 855
  },
  {
    "Number": "085",
    "Name": "Dodrio",
    "Generation": "Generation I",
    "About": "Watch out if Dodrio's three heads are looking in three separate directions. It's a sure sign that it is on its guard. Don't go near this Pokémon if it's being wary-it may decide to peck you.",
    "Types": [
      "Normal",
      "Flying"
    ],
    "Resistant": [
      "Grass",
      "Ground",
      "Bug",
      "Ghost"
    ],
    "Weaknesses": [
      "Electric",
      "Ice",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Feint Attack",
        "Type": "Dark",
        "Damage": 12
      },
      {
        "Name": "Steel Wing",
        "Type": "Steel",
        "Damage": 15
      }
    ],
    "Special_Attack": [
      {
        "Name": "Aerial Ace",
        "Type": "Flying",
        "Damage": 30
      },
      {
        "Name": "Air Cutter",
        "Type": "Flying",
        "Damage": 30
      },
      {
        "Name": "Drill Peck",
        "Type": "Flying",
        "Damage": 40
      }
    ],
    "Weight": {
      "Minimum": "74.55kg",
      "Maximum": "95.85kg"
    },
    "Height": {
      "Minimum": "1.57m",
      "Maximum": "2.02m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "120 stamina points.",
    "Base_Attack": "218 attack points.",
    "Base_Defense": "145 defense points.",
    "Base_Flee_Rate": "6% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 84,
        "Name": "Doduo"
      }
    ],
    "MaxCP": 1677,
    "MaxHP": 1836
  },
  {
    "Number": "086",
    "Name": "Seel",
    "Generation": "Generation I",
    "About": "Seel hunts for prey in the frigid sea underneath sheets of ice. When it needs to breathe, it punches a hole through the ice with the sharply protruding section of its head.",
    "Types": [
      "Water"
    ],
    "Resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "Weaknesses": [
      "Electric",
      "Grass"
    ],
    "Fast_Attack": [
      {
        "Name": "Ice Shard",
        "Type": "Ice",
        "Damage": 15
      },
      {
        "Name": "Lick",
        "Type": "Ghost",
        "Damage": 5
      }
    ],
    "Special_Attack": [
      {
        "Name": "Aqua Jet",
        "Type": "Water",
        "Damage": 25
      },
      {
        "Name": "Aqua Tail",
        "Type": "Water",
        "Damage": 45
      },
      {
        "Name": "Icy Wind",
        "Type": "Ice",
        "Damage": 25
      }
    ],
    "Weight": {
      "Minimum": "78.75kg",
      "Maximum": "101.25kg"
    },
    "Height": {
      "Minimum": "0.96m",
      "Maximum": "1.24m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "130 stamina points.",
    "Base_Attack": "85 attack points.",
    "Base_Defense": "128 defense points.",
    "Base_Flee_Rate": "9% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Seel candies"
    },
    "Next_evolution": [
      {
        "Number": 87,
        "Name": "Dewgong"
      }
    ],
    "MaxCP": 985,
    "MaxHP": 1107
  },
  {
    "Number": "087",
    "Name": "Dewgong",
    "Generation": "Generation I",
    "About": "Dewgong loves to snooze on bitterly cold ice. The sight of this Pokémon sleeping on a glacier was mistakenly thought to be a mermaid by a mariner long ago.",
    "Types": [
      "Water",
      "Ice"
    ],
    "Resistant": [
      "Water",
      "Ice"
    ],
    "Weaknesses": [
      "Electric",
      "Grass",
      "Fighting",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Frost Breath",
        "Type": "Ice",
        "Damage": 9
      },
      {
        "Name": "Ice Shard",
        "Type": "Ice",
        "Damage": 15
      }
    ],
    "Special_Attack": [
      {
        "Name": "Aqua Jet",
        "Type": "Water",
        "Damage": 25
      },
      {
        "Name": "Blizzard",
        "Type": "Ice",
        "Damage": 100
      },
      {
        "Name": "Icy Wind",
        "Type": "Ice",
        "Damage": 25
      }
    ],
    "Weight": {
      "Minimum": "105kg",
      "Maximum": "135kg"
    },
    "Height": {
      "Minimum": "1.49m",
      "Maximum": "1.91m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "180 stamina points.",
    "Base_Attack": "139 attack points.",
    "Base_Defense": "184 defense points.",
    "Base_Flee_Rate": "6% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 86,
        "Name": "Seel"
      }
    ],
    "MaxCP": 1975,
    "MaxHP": 2145
  },
  {
    "Number": "088",
    "Name": "Grimer",
    "Generation": "Generation I",
    "About": "Grimer's sludgy and rubbery body can be forced through any opening, however small it may be. This Pokémon enters sewer pipes to drink filthy wastewater.",
    "Types": [
      "Poison"
    ],
    "Resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "Weaknesses": [
      "Ground",
      "Psychic"
    ],
    "Fast_Attack": [
      {
        "Name": "Mud Slap",
        "Type": "Ground",
        "Damage": 15
      },
      {
        "Name": "Poison Jab",
        "Type": "Poison",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Mud Bomb",
        "Type": "Ground",
        "Damage": 30
      },
      {
        "Name": "Sludge",
        "Type": "Poison",
        "Damage": 30
      },
      {
        "Name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "26.25kg",
      "Maximum": "33.75kg"
    },
    "Height": {
      "Minimum": "0.79m",
      "Maximum": "1.01m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "160 stamina points.",
    "Base_Attack": "135 attack points.",
    "Base_Defense": "90 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Grimer candies"
    },
    "Next_evolution": [
      {
        "Number": 89,
        "Name": "Muk"
      }
    ],
    "MaxCP": 1152,
    "MaxHP": 1284
  },
  {
    "Number": "089",
    "Name": "Muk",
    "Generation": "Generation I",
    "About": "From Muk's body seeps a foul fluid that gives off a nose-bendingly horrible stench. Just one drop of this Pokémon's body fluid can turn a pool stagnant and rancid.",
    "Types": [
      "Poison"
    ],
    "Resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "Weaknesses": [
      "Ground",
      "Psychic"
    ],
    "Fast_Attack": [
      {
        "Name": "Lick",
        "Type": "Ghost",
        "Damage": 5
      },
      {
        "Name": "Poison Jab",
        "Type": "Poison",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Dark Pulse",
        "Type": "Dark",
        "Damage": 45
      },
      {
        "Name": "Gunk Shot",
        "Type": "Poison",
        "Damage": 65
      },
      {
        "Name": "Sludge Wave",
        "Type": "Poison",
        "Damage": 70
      }
    ],
    "Weight": {
      "Minimum": "26.25kg",
      "Maximum": "33.75kg"
    },
    "Height": {
      "Minimum": "1.05m",
      "Maximum": "1.35m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "210 stamina points.",
    "Base_Attack": "190 attack points.",
    "Base_Defense": "184 defense points.",
    "Base_Flee_Rate": "6% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 88,
        "Name": "Grimer"
      }
    ],
    "MaxCP": 2414,
    "MaxHP": 2602
  },
  {
    "Number": "090",
    "Name": "Shellder",
    "Generation": "Generation I",
    "About": "At night, this Pokémon uses its broad tongue to burrow a hole in the seafloor sand and then sleep in it. While it is sleeping, Shellder closes its shell, but leaves its tongue hanging out.",
    "Types": [
      "Water"
    ],
    "Resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "Weaknesses": [
      "Electric",
      "Grass"
    ],
    "Fast_Attack": [
      {
        "Name": "Ice Shard",
        "Type": "Ice",
        "Damage": 15
      },
      {
        "Name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Bubble Beam",
        "Type": "Water",
        "Damage": 30
      },
      {
        "Name": "Icy Wind",
        "Type": "Ice",
        "Damage": 25
      },
      {
        "Name": "Water Pulse",
        "Type": "Water",
        "Damage": 35
      }
    ],
    "Weight": {
      "Minimum": "3.5kg",
      "Maximum": "4.5kg"
    },
    "Height": {
      "Minimum": "0.26m",
      "Maximum": "0.34m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "60 stamina points.",
    "Base_Attack": "116 attack points.",
    "Base_Defense": "168 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Shellder candies"
    },
    "Next_evolution": [
      {
        "Number": 91,
        "Name": "Cloyster"
      }
    ],
    "MaxCP": 715,
    "MaxHP": 822
  },
  {
    "Number": "091",
    "Name": "Cloyster",
    "Generation": "Generation I",
    "About": "Cloyster is capable of swimming in the sea. It does so by swallowing water, then jetting it out toward the rear. This Pokémon shoots spikes from its shell using the same system.",
    "Types": [
      "Water",
      "Ice"
    ],
    "Resistant": [
      "Water",
      "Ice"
    ],
    "Weaknesses": [
      "Electric",
      "Grass",
      "Fighting",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Frost Breath",
        "Type": "Ice",
        "Damage": 9
      },
      {
        "Name": "Ice Shard",
        "Type": "Ice",
        "Damage": 15
      }
    ],
    "Special_Attack": [
      {
        "Name": "Blizzard",
        "Type": "Ice",
        "Damage": 100
      },
      {
        "Name": "Hydro Pump",
        "Type": "Water",
        "Damage": 90
      },
      {
        "Name": "Icy Wind",
        "Type": "Ice",
        "Damage": 25
      }
    ],
    "Weight": {
      "Minimum": "115.94kg",
      "Maximum": "149.06kg"
    },
    "Height": {
      "Minimum": "1.31m",
      "Maximum": "1.69m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "100 stamina points.",
    "Base_Attack": "186 attack points.",
    "Base_Defense": "323 defense points.",
    "Base_Flee_Rate": "6% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 90,
        "Name": "Shellder"
      }
    ],
    "MaxCP": 1879,
    "MaxHP": 2052
  },
  {
    "Number": "092",
    "Name": "Gastly",
    "Generation": "Generation I",
    "About": "Gastly is largely composed of gaseous matter. When exposed to a strong wind, the gaseous body quickly dwindles away. Groups of this Pokémon cluster under the eaves of houses to escape the ravages of wind.",
    "Types": [
      "Ghost",
      "Poison"
    ],
    "Resistant": [
      "Normal",
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "Weaknesses": [
      "Ground",
      "Psychic",
      "Ghost",
      "Dark"
    ],
    "Fast_Attack": [
      {
        "Name": "Lick",
        "Type": "Ghost",
        "Damage": 5
      },
      {
        "Name": "Sucker Punch",
        "Type": "Dark",
        "Damage": 7
      }
    ],
    "Special_Attack": [
      {
        "Name": "Dark Pulse",
        "Type": "Dark",
        "Damage": 45
      },
      {
        "Name": "Ominous Wind",
        "Type": "Ghost",
        "Damage": 30
      },
      {
        "Name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "0.09kg",
      "Maximum": "0.11kg"
    },
    "Height": {
      "Minimum": "1.14m",
      "Maximum": "1.46m"
    },
    "Buddy_Distance": "3km (Flying)",
    "Base_Stamina": "60 stamina points.",
    "Base_Attack": "186 attack points.",
    "Base_Defense": "70 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 25,
      "Name": "Gastly candies"
    },
    "Next_evolution": [
      {
        "Number": 93,
        "Name": "Haunter"
      },
      {
        "Number": 94,
        "Name": "Gengar"
      }
    ],
    "MaxCP": 696,
    "MaxHP": 804
  },
  {
    "Number": "093",
    "Name": "Haunter",
    "Generation": "Generation I",
    "About": "Haunter is a dangerous Pokémon. If one beckons you while floating in darkness, you must never approach it. This Pokémon will try to lick you with its tongue and steal your life away.",
    "Types": [
      "Ghost",
      "Poison"
    ],
    "Resistant": [
      "Normal",
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "Weaknesses": [
      "Ground",
      "Psychic",
      "Ghost",
      "Dark"
    ],
    "Fast_Attack": [
      {
        "Name": "Lick",
        "Type": "Ghost",
        "Damage": 5
      },
      {
        "Name": "Shadow Claw",
        "Type": "Ghost",
        "Damage": 11
      }
    ],
    "Special_Attack": [
      {
        "Name": "Dark Pulse",
        "Type": "Dark",
        "Damage": 45
      },
      {
        "Name": "Shadow Ball",
        "Type": "Ghost",
        "Damage": 45
      },
      {
        "Name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "0.09kg",
      "Maximum": "0.11kg"
    },
    "Height": {
      "Minimum": "1.4m",
      "Maximum": "1.8m"
    },
    "Buddy_Distance": "3km (Flying)",
    "Base_Stamina": "90 stamina points.",
    "Base_Attack": "223 attack points.",
    "Base_Defense": "112 defense points.",
    "Base_Flee_Rate": "7% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 92,
        "Name": "Gastly"
      }
    ],
    "Next_Evolution_Requirements": {
      "Amount": 100,
      "Name": "Gastly candies"
    },
    "Next_evolution": [
      {
        "Number": 94,
        "Name": "Gengar"
      }
    ],
    "MaxCP": 1240,
    "MaxHP": 1380
  },
  {
    "Number": "094",
    "Name": "Gengar",
    "Generation": "Generation I",
    "About": "Sometimes, on a dark night, your shadow thrown by a streetlight will suddenly and startlingly overtake you. It is actually a Gengar running past you, pretending to be your shadow.",
    "Types": [
      "Ghost",
      "Poison"
    ],
    "Resistant": [
      "Normal",
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "Weaknesses": [
      "Ground",
      "Psychic",
      "Ghost",
      "Dark"
    ],
    "Fast_Attack": [
      {
        "Name": "Shadow Claw",
        "Type": "Ghost",
        "Damage": 11
      },
      {
        "Name": "Sucker Punch",
        "Type": "Dark",
        "Damage": 7
      }
    ],
    "Special_Attack": [
      {
        "Name": "Dark Pulse",
        "Type": "Dark",
        "Damage": 45
      },
      {
        "Name": "Shadow Ball",
        "Type": "Ghost",
        "Damage": 45
      },
      {
        "Name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "35.44kg",
      "Maximum": "45.56kg"
    },
    "Height": {
      "Minimum": "1.31m",
      "Maximum": "1.69m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "120 stamina points.",
    "Base_Attack": "261 attack points.",
    "Base_Defense": "156 defense points.",
    "Base_Flee_Rate": "5% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 92,
        "Name": "Gastly"
      },
      {
        "Number": 93,
        "Name": "Haunter"
      }
    ],
    "MaxCP": 1907,
    "MaxHP": 2078
  },
  {
    "Number": "095",
    "Name": "Onix",
    "Generation": "Generation I",
    "About": "Onix has a magnet in its brain. It acts as a compass so that this Pokémon does not lose direction while it is tunneling. As it grows older, its body becomes increasingly rounder and smoother.",
    "Types": [
      "Rock",
      "Ground"
    ],
    "Resistant": [
      "Normal",
      "Fire",
      "Electric",
      "Poison",
      "Flying",
      "Rock"
    ],
    "Weaknesses": [
      "Water",
      "Grass",
      "Ice",
      "Fighting",
      "Ground",
      "Steel"
    ],
    "Fast_Attack": [
      {
        "Name": "Rock Throw",
        "Type": "Rock",
        "Damage": 12
      },
      {
        "Name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Iron Head",
        "Type": "Steel",
        "Damage": 30
      },
      {
        "Name": "Rock Slide",
        "Type": "Rock",
        "Damage": 50
      },
      {
        "Name": "Stone Edge",
        "Type": "Rock",
        "Damage": 80
      }
    ],
    "Weight": {
      "Minimum": "183.75kg",
      "Maximum": "236.25kg"
    },
    "Height": {
      "Minimum": "7.7m",
      "Maximum": "9.9m"
    },
    "Buddy_Distance": "5km (Big)",
    "Base_Stamina": "70 stamina points.",
    "Base_Attack": "85 attack points.",
    "Base_Defense": "288 defense points.",
    "Base_Flee_Rate": "9% chance to flee.",
    "Next_evolution": [
      {
        "Number": 208,
        "Name": "Steelix"
      }
    ],
    "MaxCP": 745,
    "MaxHP": 857
  },
  {
    "Number": "096",
    "Name": "Drowzee",
    "Generation": "Generation I",
    "About": "If your nose becomes itchy while you are sleeping, it's a sure sign that one of these Pokémon is standing above your pillow and trying to eat you dream through your nostrils.",
    "Types": [
      "Psychic"
    ],
    "Resistant": [
      "Fighting",
      "Psychic"
    ],
    "Weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "Fast_Attack": [
      {
        "Name": "Confusion",
        "Type": "Psychic",
        "Damage": 15
      },
      {
        "Name": "Pound",
        "Type": "Normal",
        "Damage": 7
      }
    ],
    "Special_Attack": [
      {
        "Name": "Psybeam",
        "Type": "Psychic",
        "Damage": 40
      },
      {
        "Name": "Psychic",
        "Type": "Psychic",
        "Damage": 55
      },
      {
        "Name": "Psyshock",
        "Type": "Psychic",
        "Damage": 40
      }
    ],
    "Weight": {
      "Minimum": "28.35kg",
      "Maximum": "36.45kg"
    },
    "Height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "120 stamina points.",
    "Base_Attack": "89 attack points.",
    "Base_Defense": "158 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Drowzee candies"
    },
    "Next_evolution": [
      {
        "Number": 97,
        "Name": "Hypno"
      }
    ],
    "MaxCP": 955,
    "MaxHP": 1075
  },
  {
    "Number": "097",
    "Name": "Hypno",
    "Generation": "Generation I",
    "About": "Hypno holds a pendulum in its hand. The arcing movement and glitter of the pendulum lull the foe into a deep state of hypnosis. While this Pokémon searches for prey, it polishes the pendulum.",
    "Types": [
      "Psychic"
    ],
    "Resistant": [
      "Fighting",
      "Psychic"
    ],
    "Weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "Fast_Attack": [
      {
        "Name": "Confusion",
        "Type": "Psychic",
        "Damage": 15
      },
      {
        "Name": "Zen Headbutt",
        "Type": "Psychic",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Psychic",
        "Type": "Psychic",
        "Damage": 55
      },
      {
        "Name": "Psyshock",
        "Type": "Psychic",
        "Damage": 40
      },
      {
        "Name": "Shadow Ball",
        "Type": "Ghost",
        "Damage": 45
      }
    ],
    "Weight": {
      "Minimum": "66.15kg",
      "Maximum": "85.05kg"
    },
    "Height": {
      "Minimum": "1.4m",
      "Maximum": "1.8m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "170 stamina points.",
    "Base_Attack": "144 attack points.",
    "Base_Defense": "215 defense points.",
    "Base_Flee_Rate": "6% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 96,
        "Name": "Drowzee"
      }
    ],
    "MaxCP": 2012,
    "MaxHP": 2184
  },
  {
    "Number": "098",
    "Name": "Krabby",
    "Generation": "Generation I",
    "About": "Krabby live on beaches, burrowed inside holes dug into the sand. On sandy beaches with little in the way of food, these Pokémon can be seen squabbling with each other over territory.",
    "Types": [
      "Water"
    ],
    "Resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "Weaknesses": [
      "Electric",
      "Grass"
    ],
    "Fast_Attack": [
      {
        "Name": "Bubble",
        "Type": "Water",
        "Damage": 25
      },
      {
        "Name": "Mud Shot",
        "Type": "Ground",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Bubble Beam",
        "Type": "Water",
        "Damage": 30
      },
      {
        "Name": "Vice Grip",
        "Type": "Normal",
        "Damage": 25
      },
      {
        "Name": "Water Pulse",
        "Type": "Water",
        "Damage": 35
      }
    ],
    "Weight": {
      "Minimum": "5.69kg",
      "Maximum": "7.31kg"
    },
    "Height": {
      "Minimum": "0.35m",
      "Maximum": "0.45m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "60 stamina points.",
    "Base_Attack": "181 attack points.",
    "Base_Defense": "156 defense points.",
    "Base_Flee_Rate": "15% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Krabby candies"
    },
    "Next_evolution": [
      {
        "Number": 99,
        "Name": "Kingler"
      }
    ],
    "MaxCP": 686,
    "MaxHP": 792
  },
  {
    "Number": "099",
    "Name": "Kingler",
    "Generation": "Generation I",
    "About": "Kingler has an enormous, oversized claw. It waves this huge claw in the air to communicate with others. However, because the claw is so heavy, the Pokémon quickly tires.",
    "Types": [
      "Water"
    ],
    "Resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "Weaknesses": [
      "Electric",
      "Grass"
    ],
    "Fast_Attack": [
      {
        "Name": "Metal Claw",
        "Type": "Steel",
        "Damage": 8
      },
      {
        "Name": "Mud Shot",
        "Type": "Ground",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Vice Grip",
        "Type": "Normal",
        "Damage": 25
      },
      {
        "Name": "Water Pulse",
        "Type": "Water",
        "Damage": 35
      },
      {
        "Name": "X Scissor",
        "Type": "Bug",
        "Damage": 35
      }
    ],
    "Weight": {
      "Minimum": "52.5kg",
      "Maximum": "67.5kg"
    },
    "Height": {
      "Minimum": "1.14m",
      "Maximum": "1.46m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "110 stamina points.",
    "Base_Attack": "240 attack points.",
    "Base_Defense": "214 defense points.",
    "Base_Flee_Rate": "7% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 98,
        "Name": "Krabby"
      }
    ],
    "MaxCP": 1663,
    "MaxHP": 1823
  },
  {
    "Number": "100",
    "Name": "Voltorb",
    "Generation": "Generation I",
    "About": "Voltorb was first sighted at a company that manufactures Poké Balls. The link between that sighting and the fact that this Pokémon looks very similar to a Poké Ball remains a mystery.",
    "Types": [
      "Electric"
    ],
    "Resistant": [
      "Electric",
      "Flying",
      "Steel"
    ],
    "Weaknesses": [
      "Ground"
    ],
    "Fast_Attack": [
      {
        "Name": "Spark",
        "Type": "Electric",
        "Damage": 7
      },
      {
        "Name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Discharge",
        "Type": "Electric",
        "Damage": 35
      },
      {
        "Name": "Signal Beam",
        "Type": "Bug",
        "Damage": 45
      },
      {
        "Name": "Thunderbolt",
        "Type": "Electric",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "9.1kg",
      "Maximum": "11.7kg"
    },
    "Height": {
      "Minimum": "0.44m",
      "Maximum": "0.56m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "80 stamina points.",
    "Base_Attack": "109 attack points.",
    "Base_Defense": "114 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Voltorb candies"
    },
    "Next_evolution": [
      {
        "Number": 101,
        "Name": "Electrode"
      }
    ],
    "MaxCP": 733,
    "MaxHP": 839
  },
  {
    "Number": "101",
    "Name": "Electrode",
    "Generation": "Generation I",
    "About": "Electrode eats electricity in the atmosphere. On days when lightning strikes, you can see this Pokémon exploding all over the place from eating too much electricity.",
    "Types": [
      "Electric"
    ],
    "Resistant": [
      "Electric",
      "Flying",
      "Steel"
    ],
    "Weaknesses": [
      "Ground"
    ],
    "Fast_Attack": [
      {
        "Name": "Spark",
        "Type": "Electric",
        "Damage": 7
      },
      {
        "Name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Discharge",
        "Type": "Electric",
        "Damage": 35
      },
      {
        "Name": "Hyper Beam",
        "Type": "Normal",
        "Damage": 120
      },
      {
        "Name": "Thunderbolt",
        "Type": "Electric",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "58.27kg",
      "Maximum": "74.92kg"
    },
    "Height": {
      "Minimum": "1.05m",
      "Maximum": "1.35m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "120 stamina points.",
    "Base_Attack": "173 attack points.",
    "Base_Defense": "179 defense points.",
    "Base_Flee_Rate": "6% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 100,
        "Name": "Voltorb"
      }
    ],
    "MaxCP": 1496,
    "MaxHP": 1646
  },
  {
    "Number": "102",
    "Name": "Exeggcute",
    "Generation": "Generation I",
    "About": "This Pokémon consists of six eggs that form a closely knit cluster. The six eggs attract each other and spin around. When cracks increasingly appear on the eggs, Exeggcute is close to evolution.",
    "Types": [
      "Grass",
      "Psychic"
    ],
    "Resistant": [
      "Water",
      "Electric",
      "Grass",
      "Fighting",
      "Ground",
      "Psychic"
    ],
    "Weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug",
      "Ghost",
      "Dark"
    ],
    "Fast_Attack": [
      {
        "Name": "Confusion",
        "Type": "Psychic",
        "Damage": 15
      }
    ],
    "Special_Attack": [
      {
        "Name": "Ancient Power",
        "Type": "Rock",
        "Damage": 35
      },
      {
        "Name": "Psychic",
        "Type": "Psychic",
        "Damage": 55
      },
      {
        "Name": "Seed Bomb",
        "Type": "Grass",
        "Damage": 40
      }
    ],
    "Weight": {
      "Minimum": "2.19kg",
      "Maximum": "2.81kg"
    },
    "Height": {
      "Minimum": "0.35m",
      "Maximum": "0.45m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "120 stamina points.",
    "Base_Attack": "107 attack points.",
    "Base_Defense": "140 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "E"
    },
    "Next_evolution": [
      {
        "Number": 103,
        "Name": "Exeggutor"
      }
    ],
    "MaxCP": 978,
    "MaxHP": 1099
  },
  {
    "Number": "103",
    "Name": "Exeggutor",
    "Generation": "Generation I",
    "About": "Exeggutor originally came from the tropics. Its heads steadily grow larger from exposure to strong sunlight. It is said that when the heads fall off, they group together to form Exeggcute.",
    "Types": [
      "Grass",
      "Psychic"
    ],
    "Resistant": [
      "Water",
      "Electric",
      "Grass",
      "Fighting",
      "Ground",
      "Psychic"
    ],
    "Weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug",
      "Ghost",
      "Dark"
    ],
    "Fast_Attack": [
      {
        "Name": "Confusion",
        "Type": "Psychic",
        "Damage": 15
      },
      {
        "Name": "Zen Headbutt",
        "Type": "Psychic",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Psychic",
        "Type": "Psychic",
        "Damage": 55
      },
      {
        "Name": "Seed Bomb",
        "Type": "Grass",
        "Damage": 40
      },
      {
        "Name": "Solar Beam",
        "Type": "Grass",
        "Damage": 120
      }
    ],
    "Weight": {
      "Minimum": "105kg",
      "Maximum": "135kg"
    },
    "Height": {
      "Minimum": "1.75m",
      "Maximum": "2.25m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "190 stamina points.",
    "Base_Attack": "233 attack points.",
    "Base_Defense": "158 defense points.",
    "Base_Flee_Rate": "6% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 102,
        "Name": "Exeggcute"
      }
    ],
    "MaxCP": 2752,
    "MaxHP": 2955
  },
  {
    "Number": "104",
    "Name": "Cubone",
    "Generation": "Generation I",
    "About": "Cubone pines for the mother it will never see again. Seeing a likeness of its mother in the full moon, it cries. The stains on the skull the Pokémon wears are made by the tears it sheds.",
    "Types": [
      "Ground"
    ],
    "Resistant": [
      "Electric",
      "Poison",
      "Rock"
    ],
    "Weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "Fast_Attack": [
      {
        "Name": "Mud Slap",
        "Type": "Ground",
        "Damage": 15
      },
      {
        "Name": "Rock Smash",
        "Type": "Fighting",
        "Damage": 15
      }
    ],
    "Special_Attack": [
      {
        "Name": "Bone Club",
        "Type": "Ground",
        "Damage": 25
      },
      {
        "Name": "Bulldoze",
        "Type": "Ground",
        "Damage": 35
      },
      {
        "Name": "Dig",
        "Type": "Ground",
        "Damage": 70
      }
    ],
    "Weight": {
      "Minimum": "5.69kg",
      "Maximum": "7.31kg"
    },
    "Height": {
      "Minimum": "0.35m",
      "Maximum": "0.45m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "100 stamina points.",
    "Base_Attack": "90 attack points.",
    "Base_Defense": "165 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Cubone candies"
    },
    "Next_evolution": [
      {
        "Number": 105,
        "Name": "Marowak"
      }
    ],
    "MaxCP": 889,
    "MaxHP": 1006
  },
  {
    "Number": "105",
    "Name": "Marowak",
    "Generation": "Generation I",
    "About": "Marowak is the evolved form of a Cubone that has overcome its sadness at the loss of its mother and grown tough. This Pokémon's tempered and hardened spirit is not easily broken.",
    "Types": [
      "Ground"
    ],
    "Resistant": [
      "Electric",
      "Poison",
      "Rock"
    ],
    "Weaknesses": [
      "Water",
      "Grass",
      "Ice"
    ],
    "Fast_Attack": [
      {
        "Name": "Mud Slap",
        "Type": "Ground",
        "Damage": 15
      },
      {
        "Name": "Rock Smash",
        "Type": "Fighting",
        "Damage": 15
      }
    ],
    "Special_Attack": [
      {
        "Name": "Bone Club",
        "Type": "Ground",
        "Damage": 25
      },
      {
        "Name": "Dig",
        "Type": "Ground",
        "Damage": 70
      },
      {
        "Name": "Earthquake",
        "Type": "Ground",
        "Damage": 100
      }
    ],
    "Weight": {
      "Minimum": "39.38kg",
      "Maximum": "50.63kg"
    },
    "Height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "120 stamina points.",
    "Base_Attack": "144 attack points.",
    "Base_Defense": "200 defense points.",
    "Base_Flee_Rate": "6% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 104,
        "Name": "Cubone"
      }
    ],
    "MaxCP": 1505,
    "MaxHP": 1656
  },
  {
    "Number": "106",
    "Name": "Hitmonlee",
    "Generation": "Generation I",
    "About": "Hitmonlee's legs freely contract and stretch. Using these springlike legs, it bowls over foes with devastating kicks. After battle, it rubs down its legs and loosens the muscles to overcome fatigue.",
    "Types": [
      "Fighting"
    ],
    "Resistant": [
      "Bug",
      "Rock",
      "Dark"
    ],
    "Weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "Fast_Attack": [
      {
        "Name": "Low Kick",
        "Type": "Fighting",
        "Damage": 5
      },
      {
        "Name": "Rock Smash",
        "Type": "Fighting",
        "Damage": 15
      }
    ],
    "Special_Attack": [
      {
        "Name": "Brick Break",
        "Type": "Fighting",
        "Damage": 30
      },
      {
        "Name": "Low Sweep",
        "Type": "Fighting",
        "Damage": 30
      },
      {
        "Name": "Stone Edge",
        "Type": "Rock",
        "Damage": 80
      }
    ],
    "Weight": {
      "Minimum": "43.57kg",
      "Maximum": "56.02kg"
    },
    "Height": {
      "Minimum": "1.31m",
      "Maximum": "1.69m"
    },
    "Buddy_Distance": "5km (Big)",
    "Base_Stamina": "100 stamina points.",
    "Base_Attack": "224 attack points.",
    "Base_Defense": "211 defense points.",
    "Base_Flee_Rate": "9% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 236,
        "Name": "Tyrogue"
      }
    ],
    "MaxCP": 1349,
    "MaxHP": 1492
  },
  {
    "Number": "107",
    "Name": "Hitmonchan",
    "Generation": "Generation I",
    "About": "Hitmonchan is said to possess the spirit of a boxer who had been working toward a world championship. This Pokémon has an indomitable spirit and will never give up in the face of adversity.",
    "Types": [
      "Fighting"
    ],
    "Resistant": [
      "Bug",
      "Rock",
      "Dark"
    ],
    "Weaknesses": [
      "Flying",
      "Psychic",
      "Fairy"
    ],
    "Fast_Attack": [
      {
        "Name": "Bullet Punch",
        "Type": "Steel",
        "Damage": 10
      },
      {
        "Name": "Rock Smash",
        "Type": "Fighting",
        "Damage": 15
      }
    ],
    "Special_Attack": [
      {
        "Name": "Brick Break",
        "Type": "Fighting",
        "Damage": 30
      },
      {
        "Name": "Fire Punch",
        "Type": "Fire",
        "Damage": 40
      },
      {
        "Name": "Ice Punch",
        "Type": "Ice",
        "Damage": 45
      },
      {
        "Name": "Thunder Punch",
        "Type": "Electric",
        "Damage": 40
      }
    ],
    "Weight": {
      "Minimum": "43.93kg",
      "Maximum": "56.48kg"
    },
    "Height": {
      "Minimum": "1.22m",
      "Maximum": "1.57m"
    },
    "Buddy_Distance": "5km (Big)",
    "Base_Stamina": "100 stamina points.",
    "Base_Attack": "193 attack points.",
    "Base_Defense": "212 defense points.",
    "Base_Flee_Rate": "9% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 236,
        "Name": "Tyrogue"
      }
    ],
    "MaxCP": 1370,
    "MaxHP": 1516
  },
  {
    "Number": "108",
    "Name": "Lickitung",
    "Generation": "Generation I",
    "About": "Whenever Lickitung comes across something new, it will unfailingly give it a lick. It does so because it memorizes things by texture and by taste. It is somewhat put off by sour things.",
    "Types": [
      "Normal"
    ],
    "Resistant": [
      "Ghost"
    ],
    "Weaknesses": [
      "Fighting"
    ],
    "Fast_Attack": [
      {
        "Name": "Lick",
        "Type": "Ghost",
        "Damage": 5
      },
      {
        "Name": "Zen Headbutt",
        "Type": "Psychic",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Hyper Beam",
        "Type": "Normal",
        "Damage": 120
      },
      {
        "Name": "Power Whip",
        "Type": "Grass",
        "Damage": 70
      },
      {
        "Name": "Stomp",
        "Type": "Normal",
        "Damage": 30
      }
    ],
    "Weight": {
      "Minimum": "57.31kg",
      "Maximum": "73.69kg"
    },
    "Height": {
      "Minimum": "1.05m",
      "Maximum": "1.35m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "180 stamina points.",
    "Base_Attack": "108 attack points.",
    "Base_Defense": "137 defense points.",
    "Base_Flee_Rate": "9% chance to flee.",
    "MaxCP": 1477,
    "MaxHP": 1626
  },
  {
    "Number": "109",
    "Name": "Koffing",
    "Generation": "Generation I",
    "About": "If Koffing becomes agitated, it raises the toxicity of its internal gases and then jets them out from all over its body. This Pokémon may also overinflate its round body, then explode.",
    "Types": [
      "Poison"
    ],
    "Resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "Weaknesses": [
      "Ground",
      "Psychic"
    ],
    "Fast_Attack": [
      {
        "Name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Dark Pulse",
        "Type": "Dark",
        "Damage": 45
      },
      {
        "Name": "Sludge",
        "Type": "Poison",
        "Damage": 30
      },
      {
        "Name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "0.88kg",
      "Maximum": "1.13kg"
    },
    "Height": {
      "Minimum": "0.53m",
      "Maximum": "0.68m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "80 stamina points.",
    "Base_Attack": "119 attack points.",
    "Base_Defense": "164 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Koffing candies"
    },
    "Next_evolution": [
      {
        "Number": 110,
        "Name": "Weezing"
      }
    ],
    "MaxCP": 1025,
    "MaxHP": 1151
  },
  {
    "Number": "110",
    "Name": "Weezing",
    "Generation": "Generation I",
    "About": "Weezing loves the gases given off by rotted kitchen garbage. This Pokémon will find a dirty, unkempt house and make it its home. At night, when the people in the house are asleep, it will go through the trash.",
    "Types": [
      "Poison"
    ],
    "Resistant": [
      "Grass",
      "Fighting",
      "Poison",
      "Bug",
      "Fairy"
    ],
    "Weaknesses": [
      "Ground",
      "Psychic"
    ],
    "Fast_Attack": [
      {
        "Name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Dark Pulse",
        "Type": "Dark",
        "Damage": 45
      },
      {
        "Name": "Shadow Ball",
        "Type": "Ghost",
        "Damage": 45
      },
      {
        "Name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "8.31kg",
      "Maximum": "10.69kg"
    },
    "Height": {
      "Minimum": "1.05m",
      "Maximum": "1.35m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "130 stamina points.",
    "Base_Attack": "174 attack points.",
    "Base_Defense": "221 defense points.",
    "Base_Flee_Rate": "6% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 109,
        "Name": "Koffing"
      }
    ],
    "MaxCP": 2073,
    "MaxHP": 2250
  },
  {
    "Number": "111",
    "Name": "Rhyhorn",
    "Generation": "Generation I",
    "About": "Rhyhorn runs in a straight line, smashing everything in its path. It is not bothered even if it rushes headlong into a block of steel. This Pokémon may feel some pain from the collision the next day, however.",
    "Types": [
      "Ground",
      "Rock"
    ],
    "Resistant": [
      "Normal",
      "Fire",
      "Electric",
      "Poison",
      "Flying",
      "Rock"
    ],
    "Weaknesses": [
      "Water",
      "Grass",
      "Ice",
      "Fighting",
      "Ground",
      "Steel"
    ],
    "Fast_Attack": [
      {
        "Name": "Mud Slap",
        "Type": "Ground",
        "Damage": 15
      },
      {
        "Name": "Rock Smash",
        "Type": "Fighting",
        "Damage": 15
      }
    ],
    "Special_Attack": [
      {
        "Name": "Bulldoze",
        "Type": "Ground",
        "Damage": 35
      },
      {
        "Name": "Horn Attack",
        "Type": "Normal",
        "Damage": 25
      },
      {
        "Name": "Stomp",
        "Type": "Normal",
        "Damage": 30
      }
    ],
    "Weight": {
      "Minimum": "100.63kg",
      "Maximum": "129.38kg"
    },
    "Height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "160 stamina points.",
    "Base_Attack": "140 attack points.",
    "Base_Defense": "157 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Rhyhorn candies"
    },
    "Next_evolution": [
      {
        "Number": 112,
        "Name": "Rhydon"
      }
    ],
    "MaxCP": 1055,
    "MaxHP": 1182
  },
  {
    "Number": "112",
    "Name": "Rhydon",
    "Generation": "Generation I",
    "About": "Rhydon's horn can crush even uncut diamonds. One sweeping blow of its tail can topple a building. This Pokémon's hide is extremely tough. Even direct cannon hits don't leave a scratch.",
    "Types": [
      "Ground",
      "Rock"
    ],
    "Resistant": [
      "Normal",
      "Fire",
      "Electric",
      "Poison",
      "Flying",
      "Rock"
    ],
    "Weaknesses": [
      "Water",
      "Grass",
      "Ice",
      "Fighting",
      "Ground",
      "Steel"
    ],
    "Fast_Attack": [
      {
        "Name": "Mud Slap",
        "Type": "Ground",
        "Damage": 15
      },
      {
        "Name": "Rock Smash",
        "Type": "Fighting",
        "Damage": 15
      }
    ],
    "Special_Attack": [
      {
        "Name": "Earthquake",
        "Type": "Ground",
        "Damage": 100
      },
      {
        "Name": "Megahorn",
        "Type": "Bug",
        "Damage": 80
      },
      {
        "Name": "Stone Edge",
        "Type": "Rock",
        "Damage": 80
      }
    ],
    "Weight": {
      "Minimum": "105kg",
      "Maximum": "135kg"
    },
    "Height": {
      "Minimum": "1.66m",
      "Maximum": "2.14m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "210 stamina points.",
    "Base_Attack": "222 attack points.",
    "Base_Defense": "206 defense points.",
    "Base_Flee_Rate": "6% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 111,
        "Name": "Rhyhorn"
      }
    ],
    "MaxCP": 2068,
    "MaxHP": 2243
  },
  {
    "Number": "113",
    "Name": "Chansey",
    "Generation": "Generation I",
    "About": "Chansey lays nutritionally excellent eggs on an everyday basis. The eggs are so delicious, they are easily and eagerly devoured by even those people who have lost their appetite.",
    "Types": [
      "Normal"
    ],
    "Resistant": [
      "Ghost"
    ],
    "Weaknesses": [
      "Fighting"
    ],
    "Fast_Attack": [
      {
        "Name": "Pound",
        "Type": "Normal",
        "Damage": 7
      },
      {
        "Name": "Zen Headbutt",
        "Type": "Psychic",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Dazzling Gleam",
        "Type": "Fairy",
        "Damage": 55
      },
      {
        "Name": "Hyper Beam",
        "Type": "Normal",
        "Damage": 120
      },
      {
        "Name": "Psychic",
        "Type": "Psychic",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "30.27kg",
      "Maximum": "38.92kg"
    },
    "Height": {
      "Minimum": "0.96m",
      "Maximum": "1.24m"
    },
    "Buddy_Distance": "5km (Big)",
    "Base_Stamina": "500 stamina points.",
    "Base_Attack": "60 attack points.",
    "Base_Defense": "176 defense points.",
    "Base_Flee_Rate": "9% chance to flee.",
    "Next_evolution": [
      {
        "Number": 242,
        "Name": "Blissey"
      }
    ],
    "MaxCP": 549,
    "MaxHP": 675
  },
  {
    "Number": "114",
    "Name": "Tangela",
    "Generation": "Generation I",
    "About": "Tangela's vines snap off easily if they are grabbed. This happens without pain, allowing it to make a quick getaway. The lost vines are replaced by newly grown vines the very next day.",
    "Types": [
      "Grass"
    ],
    "Resistant": [
      "Water",
      "Electric",
      "Grass",
      "Ground"
    ],
    "Weaknesses": [
      "Fire",
      "Ice",
      "Poison",
      "Flying",
      "Bug"
    ],
    "Fast_Attack": [
      {
        "Name": "Vine Whip",
        "Type": "Grass",
        "Damage": 7
      }
    ],
    "Special_Attack": [
      {
        "Name": "Power Whip",
        "Type": "Grass",
        "Damage": 70
      },
      {
        "Name": "Sludge Bomb",
        "Type": "Poison",
        "Damage": 55
      },
      {
        "Name": "Solar Beam",
        "Type": "Grass",
        "Damage": 120
      }
    ],
    "Weight": {
      "Minimum": "30.63kg",
      "Maximum": "39.38kg"
    },
    "Height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "130 stamina points.",
    "Base_Attack": "183 attack points.",
    "Base_Defense": "205 defense points.",
    "Base_Flee_Rate": "9% chance to flee.",
    "MaxCP": 1586,
    "MaxHP": 1739
  },
  {
    "Number": "115",
    "Name": "Kangaskhan",
    "Generation": "Generation I",
    "About": "If you come across a young Kangaskhan playing by itself, you must never disturb it or attempt to catch it. The baby Pokémon's parent is sure to be in the area, and it will become violently enraged at you.",
    "Types": [
      "Normal"
    ],
    "Resistant": [
      "Ghost"
    ],
    "Weaknesses": [
      "Fighting"
    ],
    "Fast_Attack": [
      {
        "Name": "Low Kick",
        "Type": "Fighting",
        "Damage": 5
      },
      {
        "Name": "Mud Slap",
        "Type": "Ground",
        "Damage": 15
      }
    ],
    "Special_Attack": [
      {
        "Name": "Brick Break",
        "Type": "Fighting",
        "Damage": 30
      },
      {
        "Name": "Earthquake",
        "Type": "Ground",
        "Damage": 100
      },
      {
        "Name": "Stomp",
        "Type": "Normal",
        "Damage": 30
      }
    ],
    "Weight": {
      "Minimum": "70kg",
      "Maximum": "90kg"
    },
    "Height": {
      "Minimum": "1.93m",
      "Maximum": "2.48m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "210 stamina points.",
    "Base_Attack": "181 attack points.",
    "Base_Defense": "165 defense points.",
    "Base_Flee_Rate": "9% chance to flee.",
    "MaxCP": 1875,
    "MaxHP": 2043
  },
  {
    "Number": "116",
    "Name": "Horsea",
    "Generation": "Generation I",
    "About": "Horsea eats small insects and moss off of rocks. If the ocean current turns fast, this Pokémon anchors itself by wrapping its tail around rocks or coral to prevent being washed away.",
    "Types": [
      "Water"
    ],
    "Resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "Weaknesses": [
      "Electric",
      "Grass"
    ],
    "Fast_Attack": [
      {
        "Name": "Bubble",
        "Type": "Water",
        "Damage": 25
      },
      {
        "Name": "Water Gun",
        "Type": "Water",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Bubble Beam",
        "Type": "Water",
        "Damage": 30
      },
      {
        "Name": "Dragon Pulse",
        "Type": "Dragon",
        "Damage": 65
      },
      {
        "Name": "Flash Cannon",
        "Type": "Steel",
        "Damage": 60
      }
    ],
    "Weight": {
      "Minimum": "7kg",
      "Maximum": "9kg"
    },
    "Height": {
      "Minimum": "0.35m",
      "Maximum": "0.45m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "60 stamina points.",
    "Base_Attack": "129 attack points.",
    "Base_Defense": "125 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Horsea candies"
    },
    "Next_evolution": [
      {
        "Number": 117,
        "Name": "Seadra"
      },
      {
        "Number": 230,
        "Name": "Kingdra"
      }
    ],
    "MaxCP": 688,
    "MaxHP": 794
  },
  {
    "Number": "117",
    "Name": "Seadra",
    "Generation": "Generation I",
    "About": "Seadra sleeps after wriggling itself between the branches of coral. Those trying to harvest coral are occasionally stung by this Pokémon's poison barbs if they fail to notice it.",
    "Types": [
      "Water"
    ],
    "Resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "Weaknesses": [
      "Electric",
      "Grass"
    ],
    "Fast_Attack": [
      {
        "Name": "Dragon Breath",
        "Type": "Dragon",
        "Damage": 6
      },
      {
        "Name": "Water Gun",
        "Type": "Water",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Blizzard",
        "Type": "Ice",
        "Damage": 100
      },
      {
        "Name": "Dragon Pulse",
        "Type": "Dragon",
        "Damage": 65
      },
      {
        "Name": "Hydro Pump",
        "Type": "Water",
        "Damage": 90
      }
    ],
    "Weight": {
      "Minimum": "21.88kg",
      "Maximum": "28.13kg"
    },
    "Height": {
      "Minimum": "1.05m",
      "Maximum": "1.35m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "110 stamina points.",
    "Base_Attack": "187 attack points.",
    "Base_Defense": "182 defense points.",
    "Base_Flee_Rate": "6% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 116,
        "Name": "Horsea"
      }
    ],
    "Next_evolution": [
      {
        "Number": 230,
        "Name": "Kingdra"
      }
    ],
    "MaxCP": 1559,
    "MaxHP": 1713
  },
  {
    "Number": "118",
    "Name": "Goldeen",
    "Generation": "Generation I",
    "About": "Goldeen is a very beautiful Pokémon with fins that billow elegantly in water. However, don't let your guard down around this Pokémon—it could ram you powerfully with its horn.",
    "Types": [
      "Water"
    ],
    "Resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "Weaknesses": [
      "Electric",
      "Grass"
    ],
    "Fast_Attack": [
      {
        "Name": "Mud Shot",
        "Type": "Ground",
        "Damage": 6
      },
      {
        "Name": "Peck",
        "Type": "Flying",
        "Damage": 10
      }
    ],
    "Special_Attack": [
      {
        "Name": "Aqua Tail",
        "Type": "Water",
        "Damage": 45
      },
      {
        "Name": "Horn Attack",
        "Type": "Normal",
        "Damage": 25
      },
      {
        "Name": "Water Pulse",
        "Type": "Water",
        "Damage": 35
      }
    ],
    "Weight": {
      "Minimum": "13.13kg",
      "Maximum": "16.88kg"
    },
    "Height": {
      "Minimum": "0.53m",
      "Maximum": "0.68m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "90 stamina points.",
    "Base_Attack": "123 attack points.",
    "Base_Defense": "115 defense points.",
    "Base_Flee_Rate": "15% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Goldeen candies"
    },
    "Next_evolution": [
      {
        "Number": 119,
        "Name": "Seaking"
      }
    ],
    "MaxCP": 851,
    "MaxHP": 965
  },
  {
    "Number": "119",
    "Name": "Seaking",
    "Generation": "Generation I",
    "About": "In the autumn, Seaking males can be seen performing courtship dances in riverbeds to woo females. During this season, this Pokémon's body coloration is at its most beautiful.",
    "Types": [
      "Water"
    ],
    "Resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "Weaknesses": [
      "Electric",
      "Grass"
    ],
    "Fast_Attack": [
      {
        "Name": "Peck",
        "Type": "Flying",
        "Damage": 10
      },
      {
        "Name": "Poison Jab",
        "Type": "Poison",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Drill Run",
        "Type": "Ground",
        "Damage": 50
      },
      {
        "Name": "Icy Wind",
        "Type": "Ice",
        "Damage": 25
      },
      {
        "Name": "Megahorn",
        "Type": "Bug",
        "Damage": 80
      }
    ],
    "Weight": {
      "Minimum": "34.13kg",
      "Maximum": "43.88kg"
    },
    "Height": {
      "Minimum": "1.14m",
      "Maximum": "1.46m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "160 stamina points.",
    "Base_Attack": "175 attack points.",
    "Base_Defense": "154 defense points.",
    "Base_Flee_Rate": "7% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 118,
        "Name": "Goldeen"
      }
    ],
    "MaxCP": 1877,
    "MaxHP": 2043
  },
  {
    "Number": "120",
    "Name": "Staryu",
    "Generation": "Generation I",
    "About": "Staryu's center section has an organ called the core that shines bright red. If you go to a beach toward the end of summer, the glowing cores of these Pokémon look like the stars in the sky.",
    "Types": [
      "Water"
    ],
    "Resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "Weaknesses": [
      "Electric",
      "Grass"
    ],
    "Fast_Attack": [
      {
        "Name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      },
      {
        "Name": "Water Gun",
        "Type": "Water",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Bubble Beam",
        "Type": "Water",
        "Damage": 30
      },
      {
        "Name": "Power Gem",
        "Type": "Rock",
        "Damage": 40
      },
      {
        "Name": "Swift",
        "Type": "Normal",
        "Damage": 30
      }
    ],
    "Weight": {
      "Minimum": "30.19kg",
      "Maximum": "38.81kg"
    },
    "Height": {
      "Minimum": "0.7m",
      "Maximum": "0.9m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "60 stamina points.",
    "Base_Attack": "137 attack points.",
    "Base_Defense": "112 defense points.",
    "Base_Flee_Rate": "15% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Staryu candies"
    },
    "Next_evolution": [
      {
        "Number": 121,
        "Name": "Starmie"
      }
    ],
    "MaxCP": 821,
    "MaxHP": 937
  },
  {
    "Number": "121",
    "Name": "Starmie",
    "Generation": "Generation I",
    "About": "Starmie's center section-the core-glows brightly in seven colors. Because of its luminous nature, this Pokémon has been given the nickname the gem of the sea.\"\"",
    "Types": [
      "Water",
      "Psychic"
    ],
    "Resistant": [
      "Fire",
      "Water",
      "Ice",
      "Fighting",
      "Psychic",
      "Steel"
    ],
    "Weaknesses": [
      "Electric",
      "Grass",
      "Bug",
      "Ghost",
      "Dark"
    ],
    "Fast_Attack": [
      {
        "Name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      },
      {
        "Name": "Water Gun",
        "Type": "Water",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Hydro Pump",
        "Type": "Water",
        "Damage": 90
      },
      {
        "Name": "Power Gem",
        "Type": "Rock",
        "Damage": 40
      },
      {
        "Name": "Psychic",
        "Type": "Psychic",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "70kg",
      "Maximum": "90kg"
    },
    "Height": {
      "Minimum": "0.96m",
      "Maximum": "1.24m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "120 stamina points.",
    "Base_Attack": "210 attack points.",
    "Base_Defense": "184 defense points.",
    "Base_Flee_Rate": "6% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 120,
        "Name": "Staryu"
      }
    ],
    "MaxCP": 2007,
    "MaxHP": 2182
  },
  {
    "Number": "122",
    "Name": "Mr Mime",
    "Generation": "Generation I",
    "About": "Mr. Mime is a master of pantomime. Its gestures and motions convince watchers that something unseeable actually exists. Once the watchers are convinced, the unseeable thing exists as if it were real.",
    "Types": [
      "Psychic",
      "Fairy"
    ],
    "Resistant": [
      "Fighting",
      "Psychic",
      "Dragon"
    ],
    "Weaknesses": [
      "Poison",
      "Ghost",
      "Steel"
    ],
    "Fast_Attack": [
      {
        "Name": "Confusion",
        "Type": "Psychic",
        "Damage": 15
      },
      {
        "Name": "Zen Headbutt",
        "Type": "Psychic",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Psybeam",
        "Type": "Psychic",
        "Damage": 40
      },
      {
        "Name": "Psychic",
        "Type": "Psychic",
        "Damage": 55
      },
      {
        "Name": "Shadow Ball",
        "Type": "Ghost",
        "Damage": 45
      }
    ],
    "Weight": {
      "Minimum": "47.69kg",
      "Maximum": "61.31kg"
    },
    "Height": {
      "Minimum": "1.14m",
      "Maximum": "1.46m"
    },
    "Buddy_Distance": "5km (Medium)",
    "Base_Stamina": "80 stamina points.",
    "Base_Attack": "192 attack points.",
    "Base_Defense": "233 defense points.",
    "Base_Flee_Rate": "9% chance to flee.",
    "MaxCP": 1345,
    "MaxHP": 1494
  },
  {
    "Number": "123",
    "Name": "Scyther",
    "Generation": "Generation I",
    "About": "Scyther is blindingly fast. Its blazing speed enhances the effectiveness of the twin scythes on its forearms. This Pokémon's scythes are so effective, they can slice through thick logs in one wicked stroke.",
    "Types": [
      "Bug",
      "Flying"
    ],
    "Resistant": [
      "Grass",
      "Fighting",
      "Ground",
      "Bug"
    ],
    "Weaknesses": [
      "Fire",
      "Electric",
      "Ice",
      "Flying",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Fury Cutter",
        "Type": "Bug",
        "Damage": 3
      },
      {
        "Name": "Steel Wing",
        "Type": "Steel",
        "Damage": 15
      }
    ],
    "Special_Attack": [
      {
        "Name": "Bug Buzz",
        "Type": "Bug",
        "Damage": 75
      },
      {
        "Name": "Night Slash",
        "Type": "Dark",
        "Damage": 30
      },
      {
        "Name": "X Scissor",
        "Type": "Bug",
        "Damage": 35
      }
    ],
    "Weight": {
      "Minimum": "49kg",
      "Maximum": "63kg"
    },
    "Height": {
      "Minimum": "1.31m",
      "Maximum": "1.69m"
    },
    "Buddy_Distance": "5km (Big)",
    "Base_Stamina": "140 stamina points.",
    "Base_Attack": "218 attack points.",
    "Base_Defense": "170 defense points.",
    "Base_Flee_Rate": "9% chance to flee.",
    "Next_evolution": [
      {
        "Number": 212,
        "Name": "Scizor"
      }
    ],
    "MaxCP": 1905,
    "MaxHP": 2073
  },
  {
    "Number": "124",
    "Name": "Jynx",
    "Generation": "Generation I",
    "About": "Jynx walks rhythmically, swaying and shaking its hips as if it were dancing. Its motions are so bouncingly alluring, people seeing it are compelled to shake their hips without giving any thought to what they are doing.",
    "Types": [
      "Ice",
      "Psychic"
    ],
    "Resistant": [
      "Ice",
      "Psychic"
    ],
    "Weaknesses": [
      "Fire",
      "Bug",
      "Rock",
      "Ghost",
      "Dark",
      "Steel"
    ],
    "Fast_Attack": [
      {
        "Name": "Frost Breath",
        "Type": "Ice",
        "Damage": 9
      },
      {
        "Name": "Pound",
        "Type": "Normal",
        "Damage": 7
      }
    ],
    "Special_Attack": [
      {
        "Name": "Draining Kiss",
        "Type": "Fairy",
        "Damage": 25
      },
      {
        "Name": "Ice Punch",
        "Type": "Ice",
        "Damage": 45
      },
      {
        "Name": "Psyshock",
        "Type": "Psychic",
        "Damage": 40
      }
    ],
    "Weight": {
      "Minimum": "35.52kg",
      "Maximum": "45.67kg"
    },
    "Height": {
      "Minimum": "1.22m",
      "Maximum": "1.57m"
    },
    "Buddy_Distance": "5km (Big)",
    "Base_Stamina": "130 stamina points.",
    "Base_Attack": "223 attack points.",
    "Base_Defense": "182 defense points.",
    "Base_Flee_Rate": "9% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 238,
        "Name": "Smoochum"
      }
    ],
    "MaxCP": 1563,
    "MaxHP": 1716
  },
  {
    "Number": "125",
    "Name": "Electabuzz",
    "Generation": "Generation I",
    "About": "When a storm arrives, gangs of this Pokémon compete with each other to scale heights that are likely to be stricken by lightning bolts. Some towns use Electabuzz in place of lightning rods.",
    "Types": [
      "Electric"
    ],
    "Resistant": [
      "Electric",
      "Flying",
      "Steel"
    ],
    "Weaknesses": [
      "Ground"
    ],
    "Fast_Attack": [
      {
        "Name": "Low Kick",
        "Type": "Fighting",
        "Damage": 5
      },
      {
        "Name": "Thunder Shock",
        "Type": "Electric",
        "Damage": 5
      }
    ],
    "Special_Attack": [
      {
        "Name": "Thunder",
        "Type": "Electric",
        "Damage": 100
      },
      {
        "Name": "Thunder Punch",
        "Type": "Electric",
        "Damage": 40
      },
      {
        "Name": "Thunderbolt",
        "Type": "Electric",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "26.25kg",
      "Maximum": "33.75kg"
    },
    "Height": {
      "Minimum": "0.96m",
      "Maximum": "1.24m"
    },
    "Buddy_Distance": "5km (Medium)",
    "Base_Stamina": "130 stamina points.",
    "Base_Attack": "198 attack points.",
    "Base_Defense": "173 defense points.",
    "Base_Flee_Rate": "9% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 239,
        "Name": "Elekid"
      }
    ],
    "MaxCP": 1947,
    "MaxHP": 2119
  },
  {
    "Number": "126",
    "Name": "Magmar",
    "Generation": "Generation I",
    "About": "In battle, Magmar blows out intensely hot flames from all over its body to intimidate its opponent. This Pokémon's fiery bursts create heat waves that ignite grass and trees in its surroundings.",
    "Types": [
      "Fire"
    ],
    "Resistant": [
      "Fire",
      "Grass",
      "Ice",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "Weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Ember",
        "Type": "Fire",
        "Damage": 10
      },
      {
        "Name": "Karate Chop",
        "Type": "Fighting",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Fire Blast",
        "Type": "Fire",
        "Damage": 100
      },
      {
        "Name": "Fire Punch",
        "Type": "Fire",
        "Damage": 40
      },
      {
        "Name": "Flamethrower",
        "Type": "Fire",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "38.94kg",
      "Maximum": "50.06kg"
    },
    "Height": {
      "Minimum": "1.14m",
      "Maximum": "1.46m"
    },
    "Buddy_Distance": "5km (Big)",
    "Base_Stamina": "130 stamina points.",
    "Base_Attack": "206 attack points.",
    "Base_Defense": "169 defense points.",
    "Base_Flee_Rate": "9% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 240,
        "Name": "Magby"
      }
    ],
    "MaxCP": 2086,
    "MaxHP": 2265
  },
  {
    "Number": "127",
    "Name": "Pinsir",
    "Generation": "Generation I",
    "About": "Pinsir is astoundingly strong. It can grip a foe weighing twice its weight in its horns and easily lift it. This Pokémon's movements turn sluggish in cold places.",
    "Types": [
      "Bug"
    ],
    "Resistant": [
      "Grass",
      "Fighting",
      "Ground"
    ],
    "Weaknesses": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Fury Cutter",
        "Type": "Bug",
        "Damage": 3
      },
      {
        "Name": "Rock Smash",
        "Type": "Fighting",
        "Damage": 15
      }
    ],
    "Special_Attack": [
      {
        "Name": "Submission",
        "Type": "Fighting",
        "Damage": 30
      },
      {
        "Name": "Vice Grip",
        "Type": "Normal",
        "Damage": 25
      },
      {
        "Name": "X Scissor",
        "Type": "Bug",
        "Damage": 35
      }
    ],
    "Weight": {
      "Minimum": "48.13kg",
      "Maximum": "61.88kg"
    },
    "Height": {
      "Minimum": "1.31m",
      "Maximum": "1.69m"
    },
    "Buddy_Distance": "5km (Big)",
    "Base_Stamina": "130 stamina points.",
    "Base_Attack": "238 attack points.",
    "Base_Defense": "197 defense points.",
    "Base_Flee_Rate": "9% chance to flee.",
    "MaxCP": 1950,
    "MaxHP": 2121
  },
  {
    "Number": "128",
    "Name": "Tauros",
    "Generation": "Generation I",
    "About": "This Pokémon is not satisfied unless it is rampaging at all times. If there is no opponent for Tauros to battle, it will charge at thick trees and knock them down to calm itself.",
    "Types": [
      "Normal"
    ],
    "Resistant": [
      "Ghost"
    ],
    "Weaknesses": [
      "Fighting"
    ],
    "Fast_Attack": [
      {
        "Name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      },
      {
        "Name": "Zen Headbutt",
        "Type": "Psychic",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Earthquake",
        "Type": "Ground",
        "Damage": 100
      },
      {
        "Name": "Horn Attack",
        "Type": "Normal",
        "Damage": 25
      },
      {
        "Name": "Iron Head",
        "Type": "Steel",
        "Damage": 30
      }
    ],
    "Weight": {
      "Minimum": "77.35kg",
      "Maximum": "99.45kg"
    },
    "Height": {
      "Minimum": "1.22m",
      "Maximum": "1.57m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "150 stamina points.",
    "Base_Attack": "198 attack points.",
    "Base_Defense": "197 defense points.",
    "Base_Flee_Rate": "9% chance to flee.",
    "MaxCP": 1686,
    "MaxHP": 1844
  },
  {
    "Number": "129",
    "Name": "Magikarp",
    "Generation": "Generation I",
    "About": "Magikarp is a pathetic excuse for a Pokémon that is only capable of flopping and splashing. This behavior prompted scientists to undertake research into it.",
    "Types": [
      "Water"
    ],
    "Resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "Weaknesses": [
      "Electric",
      "Grass"
    ],
    "Fast_Attack": [
      {
        "Name": "Splash",
        "Type": "Water",
        "Damage": 0
      }
    ],
    "Special_Attack": [
      {
        "Name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "Weight": {
      "Minimum": "8.75kg",
      "Maximum": "11.25kg"
    },
    "Height": {
      "Minimum": "0.79m",
      "Maximum": "1.01m"
    },
    "Buddy_Distance": "1km (Medium)",
    "Base_Stamina": "40 stamina points.",
    "Base_Attack": "29 attack points.",
    "Base_Defense": "102 defense points.",
    "Base_Flee_Rate": "15% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 400,
      "Name": "Magikarp candies"
    },
    "Next_evolution": [
      {
        "Number": 130,
        "Name": "Gyarados"
      }
    ],
    "MaxCP": 203,
    "MaxHP": 262
  },
  {
    "Number": "130",
    "Name": "Gyarados",
    "Generation": "Generation I",
    "About": "When Magikarp evolves into Gyarados, its brain cells undergo a structural transformation. It is said that this transformation is to blame for this Pokémon's wildly violent nature.",
    "Types": [
      "Water",
      "Flying"
    ],
    "Resistant": [
      "Fire",
      "Water",
      "Fighting",
      "Ground",
      "Bug",
      "Steel"
    ],
    "Weaknesses": [
      "Electric",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Bite",
        "Type": "Dark",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Dragon Pulse",
        "Type": "Dragon",
        "Damage": 65
      },
      {
        "Name": "Hydro Pump",
        "Type": "Water",
        "Damage": 90
      },
      {
        "Name": "Twister",
        "Type": "Dragon",
        "Damage": 25
      }
    ],
    "Weight": {
      "Minimum": "205.63kg",
      "Maximum": "264.38kg"
    },
    "Height": {
      "Minimum": "5.69m",
      "Maximum": "7.31m"
    },
    "Buddy_Distance": "1km (Big)",
    "Base_Stamina": "190 stamina points.",
    "Base_Attack": "237 attack points.",
    "Base_Defense": "197 defense points.",
    "Base_Flee_Rate": "7% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 129,
        "Name": "Magikarp"
      }
    ],
    "MaxCP": 2498,
    "MaxHP": 2688
  },
  {
    "Number": "131",
    "Name": "Lapras",
    "Generation": "Generation I",
    "About": "People have driven Lapras almost to the point of extinction. In the evenings, this Pokémon is said to sing plaintively as it seeks what few others of its kind still remain.",
    "Types": [
      "Water",
      "Ice"
    ],
    "Resistant": [
      "Water",
      "Ice"
    ],
    "Weaknesses": [
      "Electric",
      "Grass",
      "Fighting",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Frost Breath",
        "Type": "Ice",
        "Damage": 9
      },
      {
        "Name": "Ice Shard",
        "Type": "Ice",
        "Damage": 15
      }
    ],
    "Special_Attack": [
      {
        "Name": "Blizzard",
        "Type": "Ice",
        "Damage": 100
      },
      {
        "Name": "Dragon Pulse",
        "Type": "Dragon",
        "Damage": 65
      },
      {
        "Name": "Ice Beam",
        "Type": "Ice",
        "Damage": 65
      }
    ],
    "Weight": {
      "Minimum": "192.5kg",
      "Maximum": "247.5kg"
    },
    "Height": {
      "Minimum": "2.19m",
      "Maximum": "2.81m"
    },
    "Buddy_Distance": "5km (Big)",
    "Base_Stamina": "260 stamina points.",
    "Base_Attack": "186 attack points.",
    "Base_Defense": "190 defense points.",
    "Base_Flee_Rate": "9% chance to flee.",
    "MaxCP": 2777,
    "MaxHP": 2980
  },
  {
    "Number": "132",
    "Name": "Ditto",
    "Generation": "Generation I",
    "About": "Ditto rearranges its cell structure to transform itself into other shapes. However, if it tries to transform itself into something by relying on its memory, this Pokémon manages to get details wrong.",
    "Types": [
      "Normal"
    ],
    "Resistant": [
      "Ghost"
    ],
    "Weaknesses": [
      "Fighting"
    ],
    "Fast_Attack": [
      {
        "Name": "Transform",
        "Type": "Normal",
        "Damage": 0
      }
    ],
    "Special_Attack": [
      {
        "Name": "Struggle",
        "Type": "Normal",
        "Damage": 15
      }
    ],
    "Weight": {
      "Minimum": "3.5kg",
      "Maximum": "4.5kg"
    },
    "Height": {
      "Minimum": "0.26m",
      "Maximum": "0.34m"
    },
    "Buddy_Distance": "3km (Medium)",
    "Base_Stamina": "96 stamina points.",
    "Base_Attack": "91 attack points.",
    "Base_Defense": "91 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "MaxCP": 809,
    "MaxHP": 919
  },
  {
    "Number": "133",
    "Name": "Eevee",
    "Generation": "Generation I",
    "About": "Eevee has an unstable genetic makeup that suddenly mutates due to the environment in which it lives. Radiation from various stones causes this Pokémon to evolve.",
    "Types": [
      "Normal"
    ],
    "Resistant": [
      "Ghost"
    ],
    "Weaknesses": [
      "Fighting"
    ],
    "Fast_Attack": [
      {
        "Name": "Quick Attack",
        "Type": "Normal",
        "Damage": 10
      },
      {
        "Name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Body Slam",
        "Type": "Normal",
        "Damage": 40
      },
      {
        "Name": "Dig",
        "Type": "Ground",
        "Damage": 70
      },
      {
        "Name": "Swift",
        "Type": "Normal",
        "Damage": 30
      }
    ],
    "Weight": {
      "Minimum": "5.69kg",
      "Maximum": "7.31kg"
    },
    "Height": {
      "Minimum": "0.26m",
      "Maximum": "0.34m"
    },
    "Buddy_Distance": "5km (Shoulder)",
    "Base_Stamina": "110 stamina points.",
    "Base_Attack": "104 attack points.",
    "Base_Defense": "121 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 25,
      "Name": "Eevee candies"
    },
    "Next_evolution": [
      {
        "Number": 134,
        "Name": "Vaporeon"
      },
      {
        "Number": 135,
        "Name": "Jolteon"
      },
      {
        "Number": 136,
        "Name": "Flareon"
      },
      {
        "Number": 196,
        "Name": "Espeon"
      },
      {
        "Number": 197,
        "Name": "Umbreon"
      }
    ],
    "MaxCP": 957,
    "MaxHP": 1077
  },
  {
    "Number": "134",
    "Name": "Vaporeon",
    "Generation": "Generation I",
    "About": "Vaporeon underwent a spontaneous mutation and grew fins and gills that allow it to live underwater. This Pokémon has the ability to freely control water.",
    "Types": [
      "Water"
    ],
    "Resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "Weaknesses": [
      "Electric",
      "Grass"
    ],
    "Fast_Attack": [
      {
        "Name": "Water Gun",
        "Type": "Water",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Aqua Tail",
        "Type": "Water",
        "Damage": 45
      },
      {
        "Name": "Hydro Pump",
        "Type": "Water",
        "Damage": 90
      },
      {
        "Name": "Water Pulse",
        "Type": "Water",
        "Damage": 35
      }
    ],
    "Weight": {
      "Minimum": "25.38kg",
      "Maximum": "32.63kg"
    },
    "Height": {
      "Minimum": "0.88m",
      "Maximum": "1.13m"
    },
    "Buddy_Distance": "5km (Medium)",
    "Base_Stamina": "260 stamina points.",
    "Base_Attack": "205 attack points.",
    "Base_Defense": "177 defense points.",
    "Base_Flee_Rate": "6% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 133,
        "Name": "Eevee"
      }
    ],
    "MaxCP": 2618,
    "MaxHP": 2816
  },
  {
    "Number": "135",
    "Name": "Jolteon",
    "Generation": "Generation I",
    "About": "Jolteon's cells generate a low level of electricity. This power is amplified by the static electricity of its fur, enabling the Pokémon to drop thunderbolts. The bristling fur is made of electrically charged needles.",
    "Types": [
      "Electric"
    ],
    "Resistant": [
      "Electric",
      "Flying",
      "Steel"
    ],
    "Weaknesses": [
      "Ground"
    ],
    "Fast_Attack": [
      {
        "Name": "Thunder Shock",
        "Type": "Electric",
        "Damage": 5
      }
    ],
    "Special_Attack": [
      {
        "Name": "Discharge",
        "Type": "Electric",
        "Damage": 35
      },
      {
        "Name": "Thunder",
        "Type": "Electric",
        "Damage": 100
      },
      {
        "Name": "Thunderbolt",
        "Type": "Electric",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "21.44kg",
      "Maximum": "27.56kg"
    },
    "Height": {
      "Minimum": "0.7m",
      "Maximum": "0.9m"
    },
    "Buddy_Distance": "5km (Medium)",
    "Base_Stamina": "130 stamina points.",
    "Base_Attack": "232 attack points.",
    "Base_Defense": "201 defense points.",
    "Base_Flee_Rate": "6% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 133,
        "Name": "Eevee"
      }
    ],
    "MaxCP": 1968,
    "MaxHP": 2140
  },
  {
    "Number": "136",
    "Name": "Flareon",
    "Generation": "Generation I",
    "About": "Flareon's fluffy fur has a functional purpose-it releases heat into the air so that its body does not get excessively hot. This Pokémon's body temperature can rise to a maximum of 1,650 degrees Fahrenheit.",
    "Types": [
      "Fire"
    ],
    "Resistant": [
      "Fire",
      "Grass",
      "Ice",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "Weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Ember",
        "Type": "Fire",
        "Damage": 10
      }
    ],
    "Special_Attack": [
      {
        "Name": "Fire Blast",
        "Type": "Fire",
        "Damage": 100
      },
      {
        "Name": "Flamethrower",
        "Type": "Fire",
        "Damage": 55
      },
      {
        "Name": "Heat Wave",
        "Type": "Fire",
        "Damage": 80
      }
    ],
    "Weight": {
      "Minimum": "21.88kg",
      "Maximum": "28.13kg"
    },
    "Height": {
      "Minimum": "0.79m",
      "Maximum": "1.01m"
    },
    "Buddy_Distance": "5km (Medium)",
    "Base_Stamina": "130 stamina points.",
    "Base_Attack": "246 attack points.",
    "Base_Defense": "204 defense points.",
    "Base_Flee_Rate": "6% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 133,
        "Name": "Eevee"
      }
    ],
    "MaxCP": 2448,
    "MaxHP": 2643
  },
  {
    "Number": "137",
    "Name": "Porygon",
    "Generation": "Generation I",
    "About": "Porygon is capable of reverting itself entirely back to program data and entering cyberspace. This Pokémon is copy-protected so it cannot be duplicated by copying.",
    "Types": [
      "Normal"
    ],
    "Resistant": [
      "Ghost"
    ],
    "Weaknesses": [
      "Fighting"
    ],
    "Fast_Attack": [
      {
        "Name": "Tackle",
        "Type": "Normal",
        "Damage": 12
      },
      {
        "Name": "Zen Headbutt",
        "Type": "Psychic",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Discharge",
        "Type": "Electric",
        "Damage": 35
      },
      {
        "Name": "Psybeam",
        "Type": "Psychic",
        "Damage": 40
      },
      {
        "Name": "Signal Beam",
        "Type": "Bug",
        "Damage": 45
      }
    ],
    "Weight": {
      "Minimum": "31.94kg",
      "Maximum": "41.06kg"
    },
    "Height": {
      "Minimum": "0.7m",
      "Maximum": "0.9m"
    },
    "Buddy_Distance": "3km (Big)",
    "Base_Stamina": "130 stamina points.",
    "Base_Attack": "153 attack points.",
    "Base_Defense": "139 defense points.",
    "Base_Flee_Rate": "9% chance to flee.",
    "Next_evolution": [
      {
        "Number": 233,
        "Name": "Porygon2"
      }
    ],
    "MaxCP": 1540,
    "MaxHP": 1691
  },
  {
    "Number": "138",
    "Name": "Omanyte",
    "Generation": "Generation I",
    "About": "Omanyte is one of the ancient and long-since-extinct Pokémon that have been regenerated from fossils by people. If attacked by an enemy, it withdraws itself inside its hard shell.",
    "Types": [
      "Rock",
      "Water"
    ],
    "Resistant": [
      "Normal",
      "Fire",
      "Ice",
      "Poison",
      "Flying"
    ],
    "Weaknesses": [
      "Electric",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "Fast_Attack": [
      {
        "Name": "Mud Shot",
        "Type": "Ground",
        "Damage": 6
      },
      {
        "Name": "Water Gun",
        "Type": "Water",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Ancient Power",
        "Type": "Rock",
        "Damage": 35
      },
      {
        "Name": "Brine",
        "Type": "Water",
        "Damage": 25
      },
      {
        "Name": "Rock Tomb",
        "Type": "Rock",
        "Damage": 30
      }
    ],
    "Weight": {
      "Minimum": "6.56kg",
      "Maximum": "8.44kg"
    },
    "Height": {
      "Minimum": "0.35m",
      "Maximum": "0.45m"
    },
    "Buddy_Distance": "5km (Medium)",
    "Base_Stamina": "70 stamina points.",
    "Base_Attack": "155 attack points.",
    "Base_Defense": "174 defense points.",
    "Base_Flee_Rate": "9% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Omanyte candies"
    },
    "Next_evolution": [
      {
        "Number": 139,
        "Name": "Omastar"
      }
    ],
    "MaxCP": 992,
    "MaxHP": 1119
  },
  {
    "Number": "140",
    "Name": "Kabuto",
    "Generation": "Generation I",
    "About": "Kabuto is a Pokémon that has been regenerated from a fossil. However, in extremely rare cases, living examples have been discovered. The Pokémon has not changed at all for 300 million years.",
    "Types": [
      "Rock",
      "Water"
    ],
    "Resistant": [
      "Normal",
      "Fire",
      "Ice",
      "Poison",
      "Flying"
    ],
    "Weaknesses": [
      "Electric",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "Fast_Attack": [
      {
        "Name": "Mud Shot",
        "Type": "Ground",
        "Damage": 6
      },
      {
        "Name": "Scratch",
        "Type": "Normal",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Ancient Power",
        "Type": "Rock",
        "Damage": 35
      },
      {
        "Name": "Aqua Jet",
        "Type": "Water",
        "Damage": 25
      },
      {
        "Name": "Rock Tomb",
        "Type": "Rock",
        "Damage": 30
      }
    ],
    "Weight": {
      "Minimum": "10.06kg",
      "Maximum": "12.94kg"
    },
    "Height": {
      "Minimum": "0.44m",
      "Maximum": "0.56m"
    },
    "Buddy_Distance": "5km (Medium)",
    "Base_Stamina": "60 stamina points.",
    "Base_Attack": "148 attack points.",
    "Base_Defense": "162 defense points.",
    "Base_Flee_Rate": "9% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 50,
      "Name": "Kabuto candies"
    },
    "Next_evolution": [
      {
        "Number": 141,
        "Name": "Kabutops"
      }
    ],
    "MaxCP": 975,
    "MaxHP": 1104
  },
  {
    "Number": "141",
    "Name": "Kabutops",
    "Generation": "Generation I",
    "About": "Kabutops swam underwater to hunt for its prey in ancient times. The Pokémon was apparently evolving from being a water-dweller to living on land as evident from the beginnings of change in its gills and legs.",
    "Types": [
      "Rock",
      "Water"
    ],
    "Resistant": [
      "Normal",
      "Fire",
      "Ice",
      "Poison",
      "Flying"
    ],
    "Weaknesses": [
      "Electric",
      "Grass",
      "Fighting",
      "Ground"
    ],
    "Fast_Attack": [
      {
        "Name": "Fury Cutter",
        "Type": "Bug",
        "Damage": 3
      },
      {
        "Name": "Mud Shot",
        "Type": "Ground",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Ancient Power",
        "Type": "Rock",
        "Damage": 35
      },
      {
        "Name": "Stone Edge",
        "Type": "Rock",
        "Damage": 80
      },
      {
        "Name": "Water Pulse",
        "Type": "Water",
        "Damage": 35
      }
    ],
    "Weight": {
      "Minimum": "35.44kg",
      "Maximum": "45.56kg"
    },
    "Height": {
      "Minimum": "1.14m",
      "Maximum": "1.46m"
    },
    "Buddy_Distance": "5km (Big)",
    "Base_Stamina": "120 stamina points.",
    "Base_Attack": "220 attack points.",
    "Base_Defense": "203 defense points.",
    "Base_Flee_Rate": "5% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 140,
        "Name": "Kabuto"
      }
    ],
    "MaxCP": 1957,
    "MaxHP": 2130
  },
  {
    "Number": "142",
    "Name": "Aerodactyl",
    "Generation": "Generation I",
    "About": "Aerodactyl is a Pokémon from the age of dinosaurs. It was regenerated from genetic material extracted from amber. It is imagined to have been the king of the skies in ancient times.",
    "Types": [
      "Rock",
      "Flying"
    ],
    "Resistant": [
      "Normal",
      "Fire",
      "Poison",
      "Flying",
      "Bug"
    ],
    "Weaknesses": [
      "Water",
      "Electric",
      "Ice",
      "Rock",
      "Steel"
    ],
    "Fast_Attack": [
      {
        "Name": "Bite",
        "Type": "Dark",
        "Damage": 6
      },
      {
        "Name": "Steel Wing",
        "Type": "Steel",
        "Damage": 15
      }
    ],
    "Special_Attack": [
      {
        "Name": "Ancient Power",
        "Type": "Rock",
        "Damage": 35
      },
      {
        "Name": "Hyper Beam",
        "Type": "Normal",
        "Damage": 120
      },
      {
        "Name": "Iron Head",
        "Type": "Steel",
        "Damage": 30
      }
    ],
    "Weight": {
      "Minimum": "51.63kg",
      "Maximum": "66.38kg"
    },
    "Height": {
      "Minimum": "1.57m",
      "Maximum": "2.02m"
    },
    "Buddy_Distance": "5km (Big)",
    "Base_Stamina": "160 stamina points.",
    "Base_Attack": "221 attack points.",
    "Base_Defense": "164 defense points.",
    "Base_Flee_Rate": "9% chance to flee.",
    "MaxCP": 1994,
    "MaxHP": 2165
  },
  {
    "Number": "143",
    "Name": "Snorlax",
    "Generation": "Generation I",
    "About": "Snorlax's typical day consists of nothing more than eating and sleeping. It is such a docile Pokémon that there are children who use its expansive belly as a place to play.",
    "Types": [
      "Normal"
    ],
    "Resistant": [
      "Ghost"
    ],
    "Weaknesses": [
      "Fighting"
    ],
    "Fast_Attack": [
      {
        "Name": "Lick",
        "Type": "Ghost",
        "Damage": 5
      },
      {
        "Name": "Zen Headbutt",
        "Type": "Psychic",
        "Damage": 12
      }
    ],
    "Special_Attack": [
      {
        "Name": "Body Slam",
        "Type": "Normal",
        "Damage": 40
      },
      {
        "Name": "Earthquake",
        "Type": "Ground",
        "Damage": 100
      },
      {
        "Name": "Hyper Beam",
        "Type": "Normal",
        "Damage": 120
      }
    ],
    "Weight": {
      "Minimum": "402.5kg",
      "Maximum": "517.5kg"
    },
    "Height": {
      "Minimum": "1.84m",
      "Maximum": "2.36m"
    },
    "Buddy_Distance": "5km (Big)",
    "Base_Stamina": "320 stamina points.",
    "Base_Attack": "190 attack points.",
    "Base_Defense": "190 defense points.",
    "Base_Flee_Rate": "9% chance to flee.",
    "MaxCP": 2901,
    "MaxHP": 3112
  },
  {
    "Number": "144",
    "Name": "Articuno",
    "Generation": "Generation I",
    "About": "Articuno is a legendary bird Pokémon that can control ice. The flapping of its wings chills the air. As a result, it is said that when this Pokémon flies, snow will fall.",
    "Types": [
      "Ice",
      "Flying"
    ],
    "Resistant": [
      "Grass",
      "Ground",
      "Bug"
    ],
    "Weaknesses": [
      "Fire",
      "Electric",
      "Rock",
      "Steel"
    ],
    "Fast_Attack": [
      {
        "Name": "Frost Breath",
        "Type": "Ice",
        "Damage": 9
      }
    ],
    "Special_Attack": [
      {
        "Name": "Blizzard",
        "Type": "Ice",
        "Damage": 100
      },
      {
        "Name": "Ice Beam",
        "Type": "Ice",
        "Damage": 65
      },
      {
        "Name": "Icy Wind",
        "Type": "Ice",
        "Damage": 25
      }
    ],
    "Weight": {
      "Minimum": "48.48kg",
      "Maximum": "62.33kg"
    },
    "Height": {
      "Minimum": "1.49m",
      "Maximum": "1.91m"
    },
    "Buddy_Distance": "5km (Flying)",
    "Base_Stamina": "180 stamina points.",
    "Base_Attack": "192 attack points.",
    "Base_Defense": "249 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "MaxCP": 2776,
    "MaxHP": 2978
  },
  {
    "Number": "145",
    "Name": "Zapdos",
    "Generation": "Generation I",
    "About": "Zapdos is a legendary bird Pokémon that has the ability to control electricity. It usually lives in thunderclouds. The Pokémon gains power if it is stricken by lightning bolts.",
    "Types": [
      "Electric",
      "Flying"
    ],
    "Resistant": [
      "Grass",
      "Fighting",
      "Flying",
      "Bug",
      "Steel"
    ],
    "Weaknesses": [
      "Ice",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Thunder Shock",
        "Type": "Electric",
        "Damage": 5
      }
    ],
    "Special_Attack": [
      {
        "Name": "Discharge",
        "Type": "Electric",
        "Damage": 35
      },
      {
        "Name": "Thunder",
        "Type": "Electric",
        "Damage": 100
      },
      {
        "Name": "Thunderbolt",
        "Type": "Electric",
        "Damage": 55
      }
    ],
    "Weight": {
      "Minimum": "46.02kg",
      "Maximum": "59.17kg"
    },
    "Height": {
      "Minimum": "1.4m",
      "Maximum": "1.8m"
    },
    "Buddy_Distance": "5km (Flying)",
    "Base_Stamina": "180 stamina points.",
    "Base_Attack": "253 attack points.",
    "Base_Defense": "188 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "MaxCP": 2907,
    "MaxHP": 3114
  },
  {
    "Number": "146",
    "Name": "Moltres",
    "Generation": "Generation I",
    "About": "Moltres is a legendary bird Pokémon that has the ability to control fire. If this Pokémon is injured, it is said to dip its body in the molten magma of a volcano to burn and heal itself.",
    "Types": [
      "Fire",
      "Flying"
    ],
    "Resistant": [
      "Fire",
      "Grass",
      "Fighting",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "Weaknesses": [
      "Water",
      "Electric",
      "Rock"
    ],
    "Fast_Attack": [
      {
        "Name": "Ember",
        "Type": "Fire",
        "Damage": 10
      }
    ],
    "Special_Attack": [
      {
        "Name": "Fire Blast",
        "Type": "Fire",
        "Damage": 100
      },
      {
        "Name": "Flamethrower",
        "Type": "Fire",
        "Damage": 55
      },
      {
        "Name": "Heat Wave",
        "Type": "Fire",
        "Damage": 80
      }
    ],
    "Weight": {
      "Minimum": "52.5kg",
      "Maximum": "67.5kg"
    },
    "Height": {
      "Minimum": "1.75m",
      "Maximum": "2.25m"
    },
    "Buddy_Distance": "5km (Big)",
    "Base_Stamina": "180 stamina points.",
    "Base_Attack": "251 attack points.",
    "Base_Defense": "184 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "MaxCP": 3028,
    "MaxHP": 3240
  },
  {
    "Number": "147",
    "Name": "Dratini",
    "Generation": "Generation I",
    "About": "Dratini continually molts and sloughs off its old skin. It does so because the life energy within its body steadily builds to reach uncontrollable levels.",
    "Types": [
      "Dragon"
    ],
    "Resistant": [
      "Fire",
      "Water",
      "Electric",
      "Grass"
    ],
    "Weaknesses": [
      "Ice",
      "Dragon",
      "Fairy"
    ],
    "Fast_Attack": [
      {
        "Name": "Dragon Breath",
        "Type": "Dragon",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Aqua Tail",
        "Type": "Water",
        "Damage": 45
      },
      {
        "Name": "Twister",
        "Type": "Dragon",
        "Damage": 25
      },
      {
        "Name": "Wrap",
        "Type": "Normal",
        "Damage": 25
      }
    ],
    "Weight": {
      "Minimum": "2.89kg",
      "Maximum": "3.71kg"
    },
    "Height": {
      "Minimum": "1.57m",
      "Maximum": "2.02m"
    },
    "Buddy_Distance": "5km (Medium)",
    "Base_Stamina": "82 stamina points.",
    "Base_Attack": "119 attack points.",
    "Base_Defense": "94 defense points.",
    "Base_Flee_Rate": "9% chance to flee.",
    "Next_Evolution_Requirements": {
      "Amount": 25,
      "Name": "Dratini candies"
    },
    "Next_evolution": [
      {
        "Number": 148,
        "Name": "Dragonair"
      },
      {
        "Number": 149,
        "Name": "Dragonite"
      }
    ],
    "MaxCP": 867,
    "MaxHP": 983
  },
  {
    "Number": "148",
    "Name": "Dragonair",
    "Generation": "Generation I",
    "About": "Dragonair stores an enormous amount of energy inside its body. It is said to alter weather conditions in its vicinity by discharging energy from its crystals on its neck and tail.",
    "Types": [
      "Dragon"
    ],
    "Resistant": [
      "Fire",
      "Water",
      "Electric",
      "Grass"
    ],
    "Weaknesses": [
      "Ice",
      "Dragon",
      "Fairy"
    ],
    "Fast_Attack": [
      {
        "Name": "Dragon Breath",
        "Type": "Dragon",
        "Damage": 6
      }
    ],
    "Special_Attack": [
      {
        "Name": "Aqua Tail",
        "Type": "Water",
        "Damage": 45
      },
      {
        "Name": "Dragon Pulse",
        "Type": "Dragon",
        "Damage": 65
      },
      {
        "Name": "Wrap",
        "Type": "Normal",
        "Damage": 25
      }
    ],
    "Weight": {
      "Minimum": "14.44kg",
      "Maximum": "18.56kg"
    },
    "Height": {
      "Minimum": "3.5m",
      "Maximum": "4.5m"
    },
    "Buddy_Distance": "5km (Big)",
    "Base_Stamina": "122 stamina points.",
    "Base_Attack": "163 attack points.",
    "Base_Defense": "138 defense points.",
    "Base_Flee_Rate": "6% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 147,
        "Name": "Dratini"
      }
    ],
    "Next_Evolution_Requirements": {
      "Amount": 100,
      "Name": "Dratini candies"
    },
    "Next_evolution": [
      {
        "Number": 149,
        "Name": "Dragonite"
      }
    ],
    "MaxCP": 1593,
    "MaxHP": 1747
  },
  {
    "Number": "149",
    "Name": "Dragonite",
    "Generation": "Generation I",
    "About": "Dragonite is capable of circling the globe in just 16 hours. It is a kindhearted Pokémon that leads lost and foundering ships in a storm to the safety of land.",
    "Types": [
      "Dragon",
      "Flying"
    ],
    "Resistant": [
      "Fire",
      "Water",
      "Grass",
      "Fighting",
      "Ground",
      "Bug"
    ],
    "Weaknesses": [
      "Ice",
      "Rock",
      "Dragon",
      "Fairy"
    ],
    "Fast_Attack": [
      {
        "Name": "Dragon Breath",
        "Type": "Dragon",
        "Damage": 6
      },
      {
        "Name": "Steel Wing",
        "Type": "Steel",
        "Damage": 15
      }
    ],
    "Special_Attack": [
      {
        "Name": "Dragon Claw",
        "Type": "Dragon",
        "Damage": 35
      },
      {
        "Name": "Dragon Pulse",
        "Type": "Dragon",
        "Damage": 65
      },
      {
        "Name": "Hyper Beam",
        "Type": "Normal",
        "Damage": 120
      }
    ],
    "Weight": {
      "Minimum": "183.75kg",
      "Maximum": "236.25kg"
    },
    "Height": {
      "Minimum": "1.93m",
      "Maximum": "2.48m"
    },
    "Buddy_Distance": "5km (Big)",
    "Base_Stamina": "182 stamina points.",
    "Base_Attack": "263 attack points.",
    "Base_Defense": "201 defense points.",
    "Base_Flee_Rate": "5% chance to flee.",
    "Previous_evolution": [
      {
        "Number": 147,
        "Name": "Dratini"
      },
      {
        "Number": 148,
        "Name": "Dragonair"
      }
    ],
    "MaxCP": 3280,
    "MaxHP": 3500
  },
  {
    "Number": "150",
    "Name": "Mewtwo",
    "Generation": "Generation I",
    "About": "Mewtwo is a Pokémon that was created by genetic manipulation. However, even though the scientific power of humans created this Pokémon's body, they failed to endow Mewtwo with a compassionate heart",
    "Types": [
      "Psychic"
    ],
    "Resistant": [
      "Fighting",
      "Psychic"
    ],
    "Weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "Fast_Attack": [
      {
        "Name": "Confusion",
        "Type": "Psychic",
        "Damage": 15
      },
      {
        "Name": "Psycho Cut",
        "Type": "Psychic",
        "Damage": 7
      }
    ],
    "Special_Attack": [
      {
        "Name": "Hyper Beam",
        "Type": "Normal",
        "Damage": 120
      },
      {
        "Name": "Psychic",
        "Type": "Psychic",
        "Damage": 55
      },
      {
        "Name": "Shadow Ball",
        "Type": "Ghost",
        "Damage": 45
      }
    ],
    "Weight": {
      "Minimum": "106.75kg",
      "Maximum": "137.25kg"
    },
    "Height": {
      "Minimum": "1.75m",
      "Maximum": "2.25m"
    },
    "Buddy_Distance": "5km (Big)",
    "Base_Stamina": "212 stamina points.",
    "Base_Attack": "330 attack points.",
    "Base_Defense": "200 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "MaxCP": 3904,
    "MaxHP": 4144
  },
  {
    "Number": "151",
    "Name": "Mew",
    "Generation": "Generation I",
    "About": "Mew is said to possess the genetic composition of all Pokémon. It is capable of making itself invisible at will, so it entirely avoids notice even if it approaches people.",
    "Types": [
      "Psychic"
    ],
    "Resistant": [
      "Fighting",
      "Psychic"
    ],
    "Weaknesses": [
      "Bug",
      "Ghost",
      "Dark"
    ],
    "Fast_Attack": [
      {
        "Name": "Pound",
        "Type": "Normal",
        "Damage": 7
      }
    ],
    "Special_Attack": [
      {
        "Name": "Blizzard",
        "Type": "Ice",
        "Damage": 100
      },
      {
        "Name": "Dragon Pulse",
        "Type": "Dragon",
        "Damage": 65
      },
      {
        "Name": "Earthquake",
        "Type": "Ground",
        "Damage": 100
      },
      {
        "Name": "Fire Blast",
        "Type": "Fire",
        "Damage": 100
      },
      {
        "Name": "Hyper Beam",
        "Type": "Normal",
        "Damage": 120
      },
      {
        "Name": "Psychic",
        "Type": "Psychic",
        "Damage": 55
      },
      {
        "Name": "Solar Beam",
        "Type": "Grass",
        "Damage": 120
      },
      {
        "Name": "Thunder",
        "Type": "Electric",
        "Damage": 100
      }
    ],
    "Weight": {
      "Minimum": "3.5kg",
      "Maximum": "4.5kg"
    },
    "Height": {
      "Minimum": "0.35m",
      "Maximum": "0.45m"
    },
    "Buddy_Distance": "5km (Medium)",
    "Base_Stamina": "200 stamina points.",
    "Base_Attack": "210 attack points.",
    "Base_Defense": "210 defense points.",
    "Base_Flee_Rate": "10% chance to flee.",
    "MaxCP": 3087,
    "MaxHP": 3299
  }
]

export default POKEMONS
