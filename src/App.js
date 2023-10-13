import React from 'react';
import {Navbar} from "./navbar"
import {Search} from './search';
import Shelf from "./shelf"
import List from "./list"
import ListItem from "./listitem"
const movies = [
  {
    id: 1,
    title: "EIn Soldat",
    rating: "PG-13",
    starRating: 1.23,
    year: 2023,
    genre: "Action",
    runtime: "11:11h",
    cast: "Jack Ryan"
  },
  {
    id: 1,
    title: "EIn Soldat",
    rating: "PG-13",
    starRating: 1.23,
    year: 2023,
    genre: "Action",
    runtime: "11:11h",
    cast: "Jack Ryan"
  },
  {
    id: 1,
    title: "EIn Soldat",
    rating: "PG-13",
    starRating: 1.23,
    year: 2023,
    genre: "Action",
    runtime: "11:11h",
    cast: "Jack Ryan"
  },
  
]
function App() {
  return (
    <>
    <Navbar/>
    <Search/>
    <Shelf/>
    <List>
      {movies.map((movie) => (
        <ListItem key={movie.id} movie={movie} />
      ))}
    </List>
    </>
  );
}

export default App;
