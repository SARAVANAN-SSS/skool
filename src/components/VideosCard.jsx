
const VideosCard = ({info}) => {

    const {snippet, statistics} = info;
    const {title, channelTitle, thumbnails} = snippet;

    
  return (
    <div className="p-3 m-3 shadow-lg w-52 hover:bg-slate-200 cursor-pointer rounded-md">
        <img
            className="rounded-lg"
            alt='thumbnail'
            src={thumbnails.medium.url}
        />
        <ul>
            <li className="font-bold py-2">{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

// This is HOC - Higher Order Component - a function which takes a component and returns a another component.
// Here we use to make a slight modification in video card to show Advideocard in the screen
export const AdVideoCard = ({info}) => {
  return (
    <div className="p-3 border border-red-900"><VideosCard info={info} /></div>
  )
}

export default VideosCard