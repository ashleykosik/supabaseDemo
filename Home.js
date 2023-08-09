import supabase from '/supabase'
import {useEffect, useState } from 'react'

//components
import SmoothieCard from '/components'

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
      <div className -'smoothie-grid'>
      {smoothies.map(smoothie => {
        <SmoothieCard key={smoothie.id} smoothie ={smoothie}/>
      ))}
      </div>
  )}
    </div>
  )
}

export default Home
