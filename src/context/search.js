import {useState, createContext, useContext} from 'react'
import {useCafes} from "./cafes";
import {useRoasteries} from "./roasteries";

export const SearchContext = createContext();

export default function SearchProvider({children}) {
  const [results, setResults] = useState(null)
  const {searchCafes} = useCafes();
  const {searchRoasteries} = useRoasteries();

  const search = (q) => {
    if (!q || q === '') {
      setResults([]);
      return
    }
    const res = searchCafes(q).slice(0, 5);
    res.push(...searchRoasteries(q).slice(0, 5));
    setResults(res)
  }

  return (
    <SearchContext.Provider value={{search, results}}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => useContext(SearchContext)
