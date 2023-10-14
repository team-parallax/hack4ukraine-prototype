import {useState} from "react"
import {useStateValue} from "./state"
const getFlag = (lang) => {
    switch (lang) {
        case "de": return "🇩🇪"
        case "ua": return "🇺🇦"
        case "en": return "🇺🇸"
    }
}

export const Flag = () => {
    const {
        state, setState
    } = useStateValue()
    const [open, setOpen] = useState(false)
    return (
        <div class="relative mr-2" data-te-dropdown-ref>
          <a
            class="mr-4 flex items-center text-gray-500 transition duration-200 hover:text-gray-700 hover:ease-in-out focus:text-gray-700 motion-reduce:transition-none"
            href="#"
            id="navbarDropdown"
            role="button"
            onClick={() => setOpen(!open)}
            data-te-dropdown-toggle-ref
            aria-expanded="false">
            <span
              class="relative inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit">
                <span className="inline-block h-[11px] w-4 content-[''] ">{getFlag(state.language)}</span>
              </span>
            <span class="w-2 pl-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd" />
              </svg>
            </span>
          </a>
          <ul
            className={`absolute left-0 z-[1000] float-left m-0 list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-zinc-700 [&[data-te-dropdown-show]]:block ${open ? "": "hidden"}` }
            aria-labelledby="navbarDropdown"
            data-te-dropdown-menu-ref>
            <li>
              <a
                class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                href="#"
                onClick={() => {
                    setState(state => ({...state, language: "de"}))
                    setOpen(false)
                }}
                data-te-dropdown-item-ref>
                <span
                  class="relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit">
                  <span
                    class="inline-block h-[11px] w-4 content-[''] ">🇩🇪</span>
                </span>
                {/*<span class="mr-4">DE</span>*/}
                {state.language === "de" ? <span
                  class="inline-block fill-green-600 dark:fill-gray-200 [&>svg]:h-3.5 [&>svg]:w-3.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </span> : null}
              </a>
            </li>
            <li><hr class="my-2" /></li>
            <li>
              <a
                class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                href="#"
                onClick={() => {
                    setState(state => ({...state, language: "ua"}))
                    setOpen(false)
                }}
                data-te-dropdown-item-ref>
                <span
                  class="relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit">
                  <span
                    class="inline-block h-[11px] w-4 content-[''] ">🇺🇦</span>
                </span>
                {/*<span class="mr-4">UA</span>*/}
                
                {state.language === "ua" ? <span
                  class="inline-block fill-green-600 dark:fill-gray-200 [&>svg]:h-3.5 [&>svg]:w-3.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                      d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </span> : null}
              </a>
            </li>
              <li><hr className="my-3" /></li>
              <li>
                  <a
                      className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 active:text-zinc-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-gray-400 dark:text-gray-200 dark:hover:bg-white/30"
                      href="#"
                      onClick={() => {
                          setState(state => ({...state, language: "en"}))
                          setOpen(false)
                      }}
                      data-te-dropdown-item-ref>
                <span
                    className="relative mr-2 inline-block h-[11px] w-4 overflow-hidden bg-gray-200 leading-[11px] decoration-inherit">
                  <span
                      className="inline-block h-[11px] w-4 content-[''] ">🇺🇸</span>
                </span>
                      {/*<span className="mr-4">EN</span>*/}

                      {state.language === "en" ? <span
                          className="inline-block fill-green-600 dark:fill-gray-200 [&>svg]:h-3.5 [&>svg]:w-3.5">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512">
                    <path
                        d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                  </svg>
                </span> : null}
                  </a>
              </li>
          </ul>
        </div>
    )
}