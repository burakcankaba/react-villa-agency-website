import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App';
import i18next from 'i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

import { SearchContextProvider } from './context/SearchContext';
import {  initReactI18next } from "react-i18next";


i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en','tr','ar'],
    fallbackLng: 'en',
    debug: false,
    // Options for language detector
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    // react: { useSuspense: false },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
  })
const loadingMarkup = (
  <div className="py-4 text-center">
    <h3>Loading..</h3>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <SearchContextProvider>
        <App />
      </SearchContextProvider>
    </React.StrictMode>
  </Suspense>
);