import supabase from '/supabase'
import {useEffect, useState } from 'react'


const Home = () => {
  const [fetchError, setFetchError] = useState(null)
  const [smoothies, setSmoothies] = useState(null)
  
  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase
      .from('smoothies')
      .select()

      if(error) {
        setFetchError('could not fetch')
        setSmoothies(null)
        console.log(error)
    }
      if(data) {
        setSmoothies(data)
        setFetchError(null)
      }
  fetchSmoothies()
      
  }, [])
  return (
    <div className = "page home">
    {fetchError &&(<p>{fetchError}</p>)}
    {smoothies && (
      <div classname='smoothies'>
      {smoothies.map(smoothie => {
        <p>{smoothies.title}</p>
      </div>
    </div>
  )
}

export default Home
