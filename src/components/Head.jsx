import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from "../utils/appSlice"
import { useEffect, useState } from "react"
import {YOUTUBE_SEARCH_API} from "../utils/constants"
import { cachedResults } from "../utils/searchSlice"

const Head = () => {

  const [searchQuery, setSearchQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  const searchCache = useSelector(store=> store.search)

  const dispatch = useDispatch()

  const toggleMenuBar = () => {
    dispatch(toggleMenu());
  }


  useEffect(()=>{
    const timerId = setTimeout(()=>
    {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery])
      }else{
        getSuggestions()
      }
      
      }, 200
      
      )

    return(()=>{
      clearTimeout(timerId)
    })
  },[searchQuery])

  const getSuggestions = async()=>{
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1])

    dispatch(cachedResults({
      [searchQuery] : json[1]
    }))
  }
  return (
    <div className="grid grid-flow-col p-3 shadow-md">
        <div className="flex items-center col-span-1">
            <img onClick={toggleMenuBar} className="h-7 cursor-pointer" alt='Menu' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAUVBMVEX///8AAABLS0vPz8+Wlpb39/fFxcWQkJCmpqaCgoI4ODhiYmLr6+vh4eGxsbF0dHQbGxvX19cQEBCIiIh6enpXV1egoKC7u7tcXFxvb28ZGRl6p2Y9AAACVUlEQVR4nO3di04CMRCF4QrsglwE8e77P6jZqEGjmXZpk8mZ/t8TzMkuLS1DmxIAAAAAAAAAAAAAAAAAdGBc7xY6dutxXrz9442ex315wLV3sVdaF+Ybtt6VXm07FAU8e9dZ4VwSUfcJTrb5gLfeNVa6zQU8eFdY7ZBJuPMusNrODjh419eAPdjceZfXwJ2Z8OhdXgNHM6H2VPHJnjC8q2ui84Qn7+oaOJkJn7zLa+DJTKi6bvrJXkMtvctr4N5MGGGosQOmjXd91TaZhPKjqT2STu69S6yU+RTqv6fZd3Ty7F1lheeSgCmN3nVerXhbeNBcRB2L9hK/7Fdq66jtasaW99eDPCx1HOY8PgAAAAAAAAAAIGYYNysdm3HuDxcvC+/fkmZbvMzIt9RsVzgtSwPqNrNn29g/vXrXWeG1JOCbd5VV3vIB1Tu97S7vFKFZPzdtPHgXWO0hk9C7vgbsgLrNQhd225DuVHhhT4p6X9b+WpgJlf9d+e1sJvSuronOn2H8z2H8sTT+fBhhqLEDdvC9NP7aIv76sIM1fgf7NMqjTeFeWwf7pSn+nvck+u8WAAAAAAAAAABASPBzoqKf9RX+vDbdtqHCM/fCn5sY/uzL+OeXvnuXWCl7Bq32OzrJvafe9TVgB4x/nnf8M9njn6uv2e71mz2aelfXROcJ1dZM/7HvmdFcNv1m3xWk3uU9sTu99Vv1s8364e9d6+DuPPn/dhU0s2tPGAV3WKZBeQ1cdA9p/Ltkk+4aqvQ+4NTBnc6T4PdyAwAAAAAAAAAAAAAAAICmD8U+UWQoPgYYAAAAAElFTkSuQmCC'/>
            <img className="h-9 ml-3 cursor-pointer" alt='Logo' src='data:image/png;base64,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' />
        </div>

        <div className="col-span-10 ml-56">
          <div>
          
            <input className="w-1/2 border border-gray-500 p-2 rounded-l-full" type='text'
            value={searchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)}
             />
            <button className="border border-gray-500 px-5 py-2 rounded-r-full cursor-pointer">🔍</button>
            </div>

            { showSuggestions && (<div className="w-[27rem] bg-white rounded-lg shadow-lg px-2 border border-gray absolute">
              <ul>
                {suggestions.map((s)=>(<li key={s} className="hover:bg-gray-200 py-1">{s}</li>))}
              </ul>
            </div>)}

        </div>
        <div className="col-span-1">
            <img className="h-9" alt='User' src='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png' />
        </div>
    </div>
  )
}

export default Head