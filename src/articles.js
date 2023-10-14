import React, {useEffect, useState} from 'react';
import {Navbar} from "./navbar"
import {Search} from './search';
import Shelf from "./shelf"
import List from "./list"
import ListItem from "./listitem"
import {StateProvider, useStateValue} from "./state"

export const moviesUa = [
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
        date: "23.07.2023",
        // location: "Ulm/Neu-Ulm"
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
        date: "13.10.2023",
        location: "Ulm/Neu-Ulm"
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
        date: "13.09.2023",
        location: "Ulm/Neu-Ulm"
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
        date: "2.08.2023",
        location: "Ulm/Neu-Ulm"
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
        date: "2.08.2023",
        location: "Ulm/Neu-Ulm"
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
        date: "2.05.2023",
        location: "Ulm/Neu-Ulm"
    },
    {
        id: 7,
        title: "Щось у Штутгарті",
        rating: [
            {
                emoji: "🏠",
                text: "Habitation"
            }
        ],
        starRating: 7,
        date: "2.05.2023",
        location: "Stuttgart"
    },
];

export const moviesDe = [
    {
        id: 1,
        title: "Infos zur medizinischen Versorgung vom Bundesgesundheitsministerium",
        rating: [
            {
                emoji: "💊",
                text: "Medizin"
            },
            {
                emoji: "💸",
                text: "Umsonst"
            },
        ],
        isPinned: true,
        starRating: 13,
        date: "23.07.2023",
        // location: "Ulm/Neu-Ulm"
    },
    {
        id: 8,
        title: "Aktuell werden keine weiteren Flüchtlinge aufgenommen",
        isHot: true,
        rating: [
            {
                emoji: "🏠",
                text: "Wohnen"
            },
            {
                emoji: "🚩",
                text: "Wichtig"
            },
        ],
        starRating: 53,
        date: "13.10.2023",
        location: "Ulm/Neu-Ulm"
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
        date: "13.09.2023",
        location: "Ulm/Neu-Ulm"
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
        date: "2.08.2023",
        location: "Ulm/Neu-Ulm"
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
        date: "2.08.2023",
        location: "Ulm/Neu-Ulm"
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
        date: "2.05.2023",
        location: "Ulm/Neu-Ulm"
    },
    {
        id: 7,
        title: "Irgendwas in Stuttgart",
        rating: [
            {
                emoji: "🏠",
                text: "Wohnen"
            }
        ],
        starRating: 7,
        date: "2.05.2023",
        location: "Stuttgart"
    },
    {
        id: 2,
        notCurrent: true,
        title: "Kostenlose SIM-Karten der Telekom und Vodafone",
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
        date: "13.10.2023",
        location: "Ulm/Neu-Ulm"
    },
]

export const moviesEn = [
    {
        id: 1,
        title: "Medicial care from the the department of health",
        rating: [
            {
                emoji: "💊",
                text: "Medicine"
            },
        ],
        isPinned: true,
        starRating: 13,
        date: "23.07.2023",
        // location: "Ulm/Neu-Ulm"
    },
    {
        id: 2,
        title: "Free sim-cards by Telekom and Vodafone",
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
        date: "13.10.2023",
        location: "Ulm/Neu-Ulm"
    },
    {
        id: 3,
        title: "Local language courses",
        rating: [
            {
                emoji: "🇩🇪",
                text: "Language Course"
            },
            {
                text: "Free",
                emoji: "💸"
            },
        ],
        starRating: 31,
        date: "13.09.2023",
        location: "Ulm/Neu-Ulm"
    },
    {
        id: 4,
        title: "Jobs for Ukrainian refugees",
        rating: [
            {
                emoji: "👩‍💼",
                text: "Work"
            },
        ],
        starRating: 16,
        date: "2.08.2023",
        location: "Ulm/Neu-Ulm"
    },
    {
        id: 5,
        title: "Free food distribution",
        rating: [
            {
                emoji: "🍕",
                text: "Groceries"
            },
            {
                emoji: "💸",
                text: "Free"
            },
        ],
        starRating: 15,
        date: "2.08.2023",
        location: "Ulm/Neu-Ulm"
    },
    {
        id: 6,
        title: "Central arrival center in exhibition hall 6",
        rating: [
            {
                emoji: "🏠",
                text: "Habitation"
            }
        ],
        starRating: 7,
        date: "2.05.2023",
        location: "Ulm/Neu-Ulm"
    },
    {
        id: 7,
        title: "Something in Stuttgart",
        rating: [
            {
                emoji: "🏠",
                text: "Habitation"
            }
        ],
        starRating: 7,
        date: "2.05.2023",
        location: "Stuttgart"
    },
]

const getMovies = (lang) => {
    switch (lang) {
        case "de":
            return moviesDe;
        case "en":
            return moviesEn;
        case "ua":
            return moviesUa
        default:
            return moviesDe
    }
}
export const Articles = () => {
    const {
        state, setState
    } = useStateValue()
    const [filteredArticles, setFilteredArticles] = useState(getMovies(state.language))
    useEffect(() => {
        setFilteredArticles((getMovies(state.language))
            .filter(article => state.searchString ?
                article.title.toLocaleLowerCase().includes(state.searchString)
                || article.rating.find(r => r.text.toLocaleLowerCase().includes(state.searchString))
                : true)
            .filter(a => a.location ? a.location === state.location : true))
    }, [state.searchString, state.language, state.location])
    return (
        <List>
            {filteredArticles
                .map((movie) => (
                    <ListItem key={movie.id} movie={movie}/>
                ))}
        </List>
    )
}