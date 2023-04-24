import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Spinner from './Spinner'
import useGif from '../hooks/useGif'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

const Tag = () => {
  const [tag, setTag] = useState('')

  const {gif, loading, fetchData} = useGif(tag)
  
  function clickHandler(){
    fetchData()
  }

  function changeHandler(event){
    setTag(event.target.value)
  }

  return (
    <div className="w-1/2 bg-blue-500 rounded-lg border-black flex flex-col items-center gap-y-5 mt-[15px] ">
      
      <h1 className="text-2xl mt-[15px] underline uppercase font-bold">Random GIF</h1>
      
      {
        loading ? (<Spinner />) : (<img src={gif} width={450}/>)
      }
      
      <input 
        type="text"
        value={tag}
        onChange={changeHandler}
        className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
      />
      <button onClick={() => fetchData()} className="w-10/12 bg-white opacity-30 text-lg py-2 rounded-lg mb-[20px]">Generate</button>
    </div>
  )
}

export default Tag
