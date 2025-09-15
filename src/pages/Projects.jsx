import React from 'react'
import './Projects.css'
import LinesMove from '../components/LinesMove'
import Haat from '../assets/Haatvideo.mp4'
import CarMoving from '../assets/CarMoving.mp4'
import DashBoardWeb from '../assets/DashBoardWeb.mp4'
import DroolWeb from '../assets/DroolWeb.mp4'
import EflyerWeb from '../assets/EflyerWeb.mp4'
// import ludo from '../assets/ludoImage.mp4'
// import PacMan from '../assets/PacmanMove.mp4'
import SolarSystem from '../assets/SolarSystem.mp4'
import TodoApp from '../assets/TodoApp.mp4'
import Restaurant from '../assets/Restaurant.mp4'
import RestaurantWeb from '../assets/RestaurantWeb.mp4'

import HaatPoster from '../assets/poster.png'
import CarPoster from '../assets/CarMoving.png'
import DashBoardPoster from '../assets/DashBoardWeb.png'
import DroolPoster from '../assets/DroolWeb.png'
import EflyerPoster from '../assets/EflyerWeb.png'
// import LudoPoster from '../assets/Ludo.png'
// import PacmanPoster from '../assets/PacmanMove.png'
import RestaurantPoster from '../assets/Restaurant.png'
import RestaurantWebPoster from '../assets/RestaurantWeb.png'
import SolarPoster from '../assets/SolarSystem.png'
import TodoAppPoster from '../assets/TodoApp.png'

import VideoShow from '../components/VideoShow'



const Projects = () => {
  const videoContent = [
    {
      title1: "The Haat : E-Commerce Website",
      title2: "Using : React.js + Node.js + mongoDB + npm packages",
      videoName: Haat,
      posterName: HaatPoster
    },
    {
      title1: "Restaurant : Normal WebSite",
      title2: "Using : React.js ",
      videoName: RestaurantWeb,
      posterName: RestaurantWebPoster
    },
    {
      title1: "DashBoardTodo : Website",
      title2: " USing : React.js ",
      videoName: DashBoardWeb,
      posterName: DashBoardPoster
    },
    {
      title1: "TodoApp : website",
      title2: "Using : React.js ",
      videoName: TodoApp,
      posterName: TodoAppPoster
    },
    {
      title1: "Restaurant : Webpage",
      title2: "Using : HTML CSS",
      videoName: Restaurant,
      posterName: RestaurantPoster
    },
    {
      title1: "Drool : Webpage",
      title2: "Using : HTML CSS",
      videoName: DroolWeb,
      posterName: DroolPoster
    },
    {
      title1: "Eflyer :  Webpage",
      title2: "USing : HTML CSS",
      videoName: EflyerWeb,
      posterName: EflyerPoster
    },
    {
      title1: "Solar Planet Moving : WebPage",
       title2: "Using : HTML CSS (Animation)",
      videoName: SolarSystem,
      posterName: SolarPoster
    },
     {
      title1: "Car Moving : Webpage",
       title2: "Using : HTML CSS (Animation)",
      videoName: CarMoving,
      posterName: CarPoster
    },
    //  {
    //   title1: "Pacman : Webpage",
    //     title2: "Using : HTML CSS (Animation)",
    //   videoName: PacMan,
    //   posterName: PacmanPoster
    // },
    //  {
    //   title1: "Ludo : Webpage",
    //   title2: "Using : HTML CSS",
    //   videoName: ludo,
    //   posterName: LudoPoster
    // },
  ]
  return (
    <>
      <LinesMove />
      <div className='project' >
        {videoContent.map((item, index) => (
        <VideoShow item={item} key={index} />
        ))}
      </div>
    </>
  )
}

export default Projects