import {useSearch} from "../context/search";

const SearchResults = () => {
  const {results} = useSearch();

  return <>
    {results && results.length > 0 && (
      <div className="searchResults">
        {results.map(r => {
          return (
            <div key={r.id}>
              <a href={r.link}>{r.icon}<span>{r.name}</span></a>
            </div>
          )
        })}
      </div>
    )}
    <style jsx>{`
      .searchResults {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        font-size: 1rem;
      }

      .searchResults a {
        display: flex;
        align-items: center;
      }

      .searchResults span {
        margin-left: .6rem;
      }
    `}</style>
  </>
}

export default SearchResults;
