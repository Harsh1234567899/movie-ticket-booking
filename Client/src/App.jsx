import React from "react";
import NevBar from "./components/NevBar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MyBooking from "./pages/MyBoking";
import MovieDetails from "./pages/MovieDetails";
import Favorite from "./pages/Favorite";
import SeatLayout from "./pages/SeatLayout";
import { Toaster } from 'react-hot-toast'
import Footer from "./components/Footer,";
import Layout from "./pages/admin/Layout";
import Dashboard from "./pages/admin/Dashboard";
import AddShows from "./pages/admin/AddShows";
import ListShows from "./pages/admin/ListShows";
import ListBookings from "./pages/admin/ListBookings";


const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  return(
    <>
    <Toaster/>
    {!isAdminRoute && <NevBar/>}
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/movies' element={<Movies/>} />
      <Route path='//movies/:id' element={<MovieDetails/>} />
      <Route path='//movies/:id/:date' element={<SeatLayout/>} />
      <Route path='/my-bookings' element={<MyBooking/>} />
      <Route path='/favorite' element={<Favorite/>} />

      <Route path='/admin/*' element={<Layout/>}>
      <Route index element={<Dashboard/>}/>
      <Route path='add-shows' index element={<AddShows/>}/>
      <Route path='list-shows' index element={<ListShows/>}/>
      <Route path='list-bookings' index element={<ListBookings/>}/>
      </Route>
    </Routes>
    {!isAdminRoute && <Footer/>}
    
    </>
  )
}

export default App