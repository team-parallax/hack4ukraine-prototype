import React from 'react';
import {Navbar} from "./navbar"
import {Search} from './search';
import Shelf from "./shelf"
import List from "./list"
import ListItem from "./listitem"
const movies = [
  {
    id: 1,
    title: "Infos zur medizinischen Versorgung vom Bundesgesundheitsministerium",
    rating: [
      {
        emoji: "💊",
        text: "Medicine"
      },
    ],
    isPinned: true,
    starRating: 13,
    date: "23.07.2023"
  },
  {
    id: 2,
    title: "Kostenlose SIM-Karten der Telekom und Vodafone",
    isHot: true,
    rating: [  
      {
        emoji: "🤝",
        text: "Networking"
      },
      {
        emoji: "💸",
        text: "Free"
      },
    ],
    starRating: 53,
    date: "13.10.2023"
  },
  {
    id: 3,
    title: "Sprachkurse vor Ort",
    rating: [  
      {
        emoji: "🇩🇪",
        text: "Sprachkurs"
      },
      {
        emoji: "💸",
        text: "Free"
      },
    ],
    starRating: 31,
    date: "13.09.2023"
  },
  {
    id: 4,
    title: "Jobs für ukrainische Geflüchtete",
    rating: [  
      {
        emoji: "👩‍💼",
        text: "Work"
      },
    ],
    starRating: 16,
    date: "2.08.2023"
  },
  {
    id: 5,
    title: "Kostenlose Essensausgabe",
    rating: [  
      {
        emoji: "🍕",
        text: "Lebensmittel"
    },
    {
      emoji: "💸",
      text: "Free"
    },
    ],
    starRating: 15,
    date: "2.08.2023"
  },
  {
    id: 6,
    title: "Zentrales Ankunftszentrum in der Messehalle 6",
    rating: [  
      {
        emoji: "🏠",
        text: "Wohnen"
      }
    ],
    starRating: 7,
    date: "2.05.2023"
  },
]
function App() {
  return (
    <>
    <div className='sticky top-0 z-50 bg-white'>
    <Navbar/>
    <Search/>
    <Shelf/>
    </div>
    <List>
      {movies.map((movie) => (
        <ListItem key={movie.id} movie={movie} />
      ))}
    </List>
    </>
  );
}

export default App;
