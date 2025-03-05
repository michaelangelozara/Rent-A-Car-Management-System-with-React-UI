import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import Login_Sign_Up_Layout from './layouts/Login_Sign_Up_Layout';
import Login, { loginLoader } from './components/Login';
import Sign_Up from './components/Sign_Up';
import NotFound from './pages/NotFound';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'>
        <Route index element={<Home />} />
        <Route element={<Login_Sign_Up_Layout />}>
          <Route path='login' element={<Login />} loader={loginLoader} />
          <Route path='sign-up' element={<Sign_Up />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />
}

export default App