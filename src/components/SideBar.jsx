import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

const SideBar = () => {

  const isMenuOpen = useSelector(store=> store.app.isMenuOpen);

// Early return pattern;
  if(!isMenuOpen) return null;
  return (
    <div className="w-48 shadow-lg p-3">
    <ul className="cursor-pointer">
      <li><Link to='/'>Home</Link></li>
      <li>Shorts</li>
      <li>Videos</li>
      <li>Live</li>
    </ul>
    <h1 className="font-bold mt-5">Subscriptions</h1>
    <ul className="cursor-pointer">
      <li>Bk Shivani</li>
      <li>Anurag</li>
      <li>Mani</li>
      <li>Kani</li>
    </ul>

    <h1 className="font-bold mt-5">Watch Later</h1>
    <ul className="cursor-pointer">
    <li>Bk Shivani</li>
      <li>Anurag</li>
      <li>Mani</li>
      <li>Kani</li>
    </ul>

    <h1 className="font-bold mt-5">Watch Later</h1>
    <ul className="cursor-pointer">
    <li>Bk Shivani</li>
      <li>Anurag</li>
      <li>Mani</li>
      <li>Kani</li>
    </ul>
    </div>
  )
}

export default SideBar