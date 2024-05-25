import React, { Suspense, lazy, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import HeaderLayout from './components/HeaderLayout';
import Body from './components/Body';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import ErrorPage from './components/ErrorPage';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';

const Grocery = lazy(()=> import('./components/Grocery'));

const AppLayout = () => {
    const [userName, setUserName] = useState();

    useEffect(() => {
        // API to get user data
        setUserName("Chandra")
    },[])
    return (
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div className='app'>
            <HeaderLayout />
            <Outlet />
        </div>
        </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: 'restaurants/:resId',
                element: <RestaurantMenu />
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>
            }
        ],
        errorElement: <ErrorPage />
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);