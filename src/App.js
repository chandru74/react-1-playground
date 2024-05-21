import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderLayout from './components/HeaderLayout';
import Body from './components/Body';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import ErrorPage from './components/ErrorPage';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';

const AppLayout = () => {
    return (
        <div className='app'>
            <HeaderLayout />
            <Outlet />
        </div>
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
            }
        ],
        errorElement: <ErrorPage />
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);