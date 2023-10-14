import React, { useEffect, useState } from 'react';
import {Navbar} from "./navbar"
import {Search} from './search';
import Shelf from "./shelf"
import List from "./list"
import ListItem from "./listitem"
import {StateProvider, useStateValue } from "./state"
const moviesUa = [
  {
    id: 1,
    title: "Інформація про медичне забезпечення від Федерального міністерства охорони здоров'я",
    rating: [
      {
        emoji: "💊",
        text: "Медицина"
      },
    ],
    isPinned: true,
    starRating: 13,
    date: "23.07.2023"
  },
  {
    id: 2,
    title: "Безкоштовні SIM-карти від Telekom та Vodafone",
    isHot: true,
    rating: [  
      {
        emoji: "🤝",
        text: "Мережі"
      },
      {
        emoji: "💸",
        text: "Безкоштовно"
      },
    ],
    starRating: 53,
    date: "13.10.2023"
  },
  {
    id: 3,
    title: "Мовні курси на місці",
    rating: [  
      {
        emoji: "🇩🇪",
        text: "Мовний курс"
      },
      {
        emoji: "💸",
        text: "Безкоштовно"
      },
    ],
    starRating: 31,
    date: "13.09.2023"
  },
  {
    id: 4,
    title: "Робота для українських біженців",
    rating: [  
      {
        emoji: "👩‍💼",
        text: "Робота"
      },
    ],
    starRating: 16,
    date: "2.08.2023"
  },
  {
    id: 5,
    title: "Безкоштовна видача їжі",
    rating: [  
      {
        emoji: "🍕",
        text: "Продукти харчування"
      },
      {
        emoji: "💸",
        text: "Безкоштовно"
      },
    ],
    starRating: 15,
    date: "2.08.2023"
  },
  {
    id: 6,
    title: "Центральний пункт прибуття у Виставковому павільйоні 6",
    rating: [  
      {
        emoji: "🏠",
        text: "Проживання"
      }
    ],
    starRating: 7,
    date: "2.05.2023"
  },
];

const moviesDe = [
  {
    id: 1,
    title: "Infos zur medizinischen Versorgung vom Bundesgesundheitsministerium",
    rating: [
      {
        emoji: "💊",
        text: "Medizin"
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
        text: "Umsonst"
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
        text: "Umsonst"
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
        text: "Arbeit"
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
      text: "Umsonst"
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
  const {
    state, setState
} = useStateValue()
  const [filteredArticles, setFilteredArticles] = useState(state.language === "de" ? moviesDe : moviesUa)
  useEffect(() => {
    setFilteredArticles(state.language === "de" ? moviesDe : moviesUa
      .filter(article => state.searchString ?
        article.title.toLocaleLowerCase().includes(state.searchString)
        || article.rating.find(r => r.text.toLocaleLowerCase().includes(state.searchString))
      : true))
  }, [state.searchString, state.language]) 
  return (
    <>
      <div className='sticky top-0 z-50 bg-white'>
        <Navbar/>
        <Search/>
        <Shelf/>
      </div>
      <List>
        {filteredArticles
          .map((movie) => (
          <ListItem key={movie.id} movie={movie} />
        ))}
      </List>
    </>
  );
}

export default App;
