import { useEffect, useState } from "react"
import { getPost } from "./service/fetch"
import Search from "./components/Search";
import BlogPost from "./components/BlogPost";

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState({});
  const [search, setSearch] = useState('')

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const resp = await getPost('posts')
        setData(resp.data)
      } catch (err) {
        throw new Error("Error while fetching data")
      } finally {
        setLoading(false)
      }
    }

    getData();
  }, [])

  const filteredData = data.filter(blog =>
    blog.title.toLowerCase().includes(search.toLowerCase()) ||
    blog.body.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      {loading ? <p className="loading">Loading...</p>
        :
        <>
          <Search search={search} setSearch={setSearch} />
          <BlogPost filteredData={filteredData} expanded={expanded} setExpanded={setExpanded} />
        </>
      }
    </>
  )
}

export default App
