import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { closeMenu } from "../utils/appSlice"
import { useSearchParams } from "react-router-dom"
import { VIDEOBY_ID } from "../utils/constants"
import CommentsContainer from "./CommentsContainer"
import LiveChat from "./LiveChat"

const WatchPage = () => {
    const dispatch = useDispatch()

    const [searchParams] = useSearchParams()


    useEffect(()=>{
        getvideobyid();
    },[])

    const getvideobyid = async() => {

        const data = await fetch(VIDEOBY_ID);
        const json = await data.json();

    }



    useEffect(()=>{
        dispatch(closeMenu())
    },[])
  return (
    <div className="flex flex-col p-3 m-3 w-full">
        <div className="flex">
        <iframe className='m-3' width="795" height="391" src={'https://www.youtube.com/embed/' + searchParams.get('v')} title="Pushpa 2 - The Rule Trailer (Hindi) | Allu Arjun | Sukumar | Rashmika Mandanna | Fahadh Faasil | DSP" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <div className="w-[40%]">
            <LiveChat />
        </div>
        </div>
        <CommentsContainer />
    </div>
  )
}

export default WatchPage