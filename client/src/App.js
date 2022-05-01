import { useEffect, useState } from "react"
import axios from "axios"

import Table from "./Table"
import "./App.css"

function App() {
  const [query, setQuery] = useState("")
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:5000/?q=${query}`)
      setData(res.data)
    }

    if (query.length === 0 || query.length > 2) fetchUsers()
  }, [query])

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={data} />
    </div>
  )
}

export default App
