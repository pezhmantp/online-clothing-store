import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router';
import Navbar from './components/navbar/Navbar';
import { banner } from './components/exports';
import { AuthProvider } from 'react-oidc-context';
import { userManager, onSigninCallback } from './config';
import ManagerPanel from './components/managerPanel/ManagerPanel';
import { Provider } from 'react-redux';
import store from './redux/Store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
    <AuthProvider userManager={userManager} onSigninCallback={onSigninCallback}>
      <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <img src={banner} className="banner" />
        <Routes>
          <Route index element={<App />} />
          <Route path="/managerPanel" element={<ManagerPanel />} />
        </Routes>
      </BrowserRouter>
      </Provider>
      
    </AuthProvider>
  
);


reportWebVitals();
