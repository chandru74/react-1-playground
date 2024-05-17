import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderLayout from './components/HeaderLayout';
import Body from './components/Body';

const AppLayout = () => {
    return (
        <div className='app'>
            <HeaderLayout />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);