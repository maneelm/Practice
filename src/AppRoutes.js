import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import BookPage1 from './pages/Book/BookPage1'
import CartPage from './pages/Cart/CartPage'
import LoginPage from './pages/Login/LoginPage'
import RegisterPage from './pages/Register/RegisterPage'

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/search/:searchTerm" element={<HomePage/>} />
        <Route path="/tag/:tag" element={<HomePage/>} />
        <Route path="/book/:id" element={<BookPage1/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
    </Routes>
  )
}
