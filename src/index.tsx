import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/auth-context';
import { QuizDataProvider } from './contexts/data-context';
import { ThemeProvider } from './contexts/theme-context';
import { LoaderProvider } from './contexts/loader-context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <LoaderProvider>
          <AuthProvider>
            <QuizDataProvider>
              <App />
            </QuizDataProvider>
          </AuthProvider>
        </LoaderProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analtics endpoint. Learn more: https://bit.ly/CRA-vitals
