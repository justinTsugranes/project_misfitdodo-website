import { useEffect, useState } from 'react'
import { sanityClient } from '../lib'

export const useFetchData = (query) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await sanityClient.fetch(query)
        console.log(result)
        setData(result)
      } catch (err) {
        console.error(err)
        setError(err)
      }
    }
    fetchData()
  }, [query])

  return { data, error }
}
