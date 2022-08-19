# React-App

## 🛠 Libraries and tools used

 - [react] : useContext, useState, useEffect, Suspense, createContext,
 - [react-router-dom] : BrowserRouter ,useParams, useNavigate, Link, NavLink, Navigate,Routes, Route, Outlet
   useLocalStorage - to set localStorage user and order information


## Base URL

 App run on: http://localhost:3000 

# Endpoints: 

  *** Public ***

  -> Home - '/'
  -> Login - '/login'
  -> Register - '/register'
  -> Menu - '/menu'
  -> Pizza menu - '/pizza-menu'
  -> Burger menu - '/burger-menu'
  -> Burger details - '/burger/details/:burgerId'

  *** Privete ***

  -> Profile - '/profile'

  -> Order menu - '/order'
  -> Order details - '/order/information'

  -> Reservation create - '/make-reservation'
  -> Reservation menu - '/reservation'
  -> reservation details - '/reservation/details/:reservationId'
  -> reservation edit - '/reservation/edit/:reservationId'


 # Api send a request (Service)

  *** Auth-User *** 

  -> Register - '/api/users/register' - POST - body {email, firstName, phoneNumber, password, repeatPassword} 
  -> Login - '/api/users/login' - POST - body {email, password} 
  -> Logout - '/api/users/logout' - GET - Logout user at server and client, clearing userInformation on Browser 

  *** Auction ***

  -> Reservation menu    ->  '/api/users/:userId' - GET - Get all user reservations
  -> Reservation details ->  '/api/reservation/:reservationId'  - GET - Get all information for this reservation 
  -> Reservation edit    ->  'api/reservation/edit/:reservationId' - POST - body {email, firstName, phoneNumber, guests, date}
  -> Reservation create  ->  '/api/reservation' - POST - body {email, firstName, phoneNumber, guests, date}
  -> Reservation delete  ->  '/api/reservation/delete/:reservationId' - DELETE - body {reservationId}

  -> Oder create -> '/api/orde/:userId' - POST - body {userId, orderData}
