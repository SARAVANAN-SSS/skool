import { Provider } from "react-redux"
import Body from "./components/Body"
import Head from "./components/Head"
import store from "./utils/store"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainContainer from './components/MainContainer'
import WatchPage from "./components/WatchPage"

const App = () => {

  const appRouter = createBrowserRouter([{
    path:'/',
    element: <Body />,
    children: [
     { path: '/',
      element: <MainContainer />
    },
    { path: 'watch',
      element: <WatchPage />
    },
    ]
  }])
  return (

    // Initial Experimentation: 
    // <div className="text-center mt-2">
    // <h1 className="">Skool</h1>
    // {/* <button className="px-5 py-3 bg-black text-white rounded-lg my-2 font-bold">Subscribe</button> */}
    // <button className="btn">Subscribe</button>
    // </div>

    <Provider store={store}>
    <div>
    <Head />
    <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  )
}

export default App