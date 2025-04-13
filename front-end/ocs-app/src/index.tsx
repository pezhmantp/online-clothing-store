import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router';
import Navbar from './components/navbar/Navbar';
import { AuthProvider } from 'react-oidc-context';
import { userManager, onSigninCallback } from './config';
import ManagerPanel from './components/managerPanel/ManagerPanel';
import { Provider } from 'react-redux';
import store from './redux/Store';
import { ApolloProvider } from '@apollo/client';
import client from './components/apolloClient';
import ClothesDetails from './components/clothesDetails/ClothesDetails';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AuthProvider userManager={userManager} onSigninCallback={onSigninCallback}>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index element={<App />} />
            <Route path="/managerPanel" element={<ManagerPanel />} />
            <Route path="/clothesDetails" element={<ClothesDetails />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  </AuthProvider>
);


reportWebVitals();
