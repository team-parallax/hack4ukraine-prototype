import React, { useEffect, useState } from 'react';
import {Navbar} from "./navbar"
import {Search} from './search';
import Shelf from "./shelf"
import {Articles} from "./articles"
import {Article} from "./article"
import {useStateValue} from "./state"
function App() {
  const {
    state, setState
} = useStateValue()

  return (
    <>
      <div className='sticky top-0 z-50 bg-white'>
        <Navbar/>
        {state.showArticle ? null:(
          <>
            <Search/>
        <Shelf/>
          </>
        )}
        
      </div>
      {state.showArticle ? <Article article={state.showArticle} />: <Articles/>}
      
    </>
  );
}

export default App;
