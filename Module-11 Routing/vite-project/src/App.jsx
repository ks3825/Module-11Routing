
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<div>
        <Navbar/>
        <Home/>
      </div>
       
    },

    {
      path:"/about",
      element:<div> 
      <Navbar/>
      <About/>
      </div>
    }

    
  ]
);
  


function App() {
  
  return (
    <>
        <RouterProvider router={router}/> 
    </>
  )
}

export default App
