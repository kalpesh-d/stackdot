const Search = ({ search, setSearch }) => {
  return (
    <form className="search-container">
      <input className="search-input" type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="search" />
    </form>
  )
}

export default Search