import React, { useEffect, useState } from 'react';
import {Navbar} from "./navbar"
import {Search} from './search';
import Shelf from "./shelf"
import {Articles} from "./articles"
import {Article} from "./article"
import {useStateValue} from "./state"
import {Tour} from "./tour";
import {Banner} from "./banner";
function App() {
  const {
    state, setState
} = useStateValue()
    const [showBanner, setShowBanner] = useState(true)

  return (
    <>

      <div className='sticky top-0 z-50 bg-white'>
        <Navbar/>
        { state.currentPage === "article" || state.currentPage === "tour" ? null:(
          <>
              <Banner
                  showBanner={showBanner}
                  closeBannerHandler={() => setShowBanner(false)}
              />
            <Search/>
            <Shelf/>
          </>
        )}

      </div>
      {state.currentPage === "article"
          ? <Article article={state.showArticle} />
          : state.currentPage === "articles"
            ? <Articles/>
            : <Tour/>
      }

    </>
  );
}

export default App;
