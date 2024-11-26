import { useEffect, useState } from "react"
import { YOUTUBE_API } from "../utils/constants";
import VideosCard, { AdVideoCard } from "./VideosCard";
import { Link } from "react-router-dom";


const VideoContainer = () => {
  
  const [videos, setVideos] = useState([])
  
  useEffect(()=>{
    
    getVideos();
    
  },[])
  
  const getVideos = async() => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items)
  }

  if (!videos?.length > 0) return <h1 className='p-3 m-3'>Loading...</h1>
  return (
    <div className="flex flex-wrap">

    {videos && <AdVideoCard info={videos[0]} />}

    {
      videos.map((video)=>(
        <Link key={video.id} to={'/watch?v='+video.id}><VideosCard info={video}/></Link>
      ))
    }
    </div>
  )
}

export default VideoContainer