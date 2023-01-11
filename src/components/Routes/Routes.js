import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../Home/Home"
import Topics from "../Topics/Topics";
import Quizdetails from "../Quizdetails/Quizdetails"
import Statistics from "../Statistics/Statistics"
import Blog from "../Blog/Blog"
import NotFound from "../NotFound/NotFound"
const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader: async () =>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element:<Home></Home>
        },
        {
          path:'/topics',    
          loader: async () =>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },      
          element:<Topics></Topics>
        },
        {
          path:'/topics/:topicsId',
          loader:async ({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicsId}`)
          },
          element:<Quizdetails></Quizdetails>
        },
        {
          path:'statistics',
          loader: async () =>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element:<Statistics></Statistics>
        },
        {
          path:'blog',
          element:<Blog></Blog>
        }
      ]          
    },
    {
      path:"*",
      element:<NotFound></NotFound>
    }
  ])

  export default router;