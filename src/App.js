import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import AboutMe from './Pages/AboutMe';
import Header from './Pages/Header';
import List from '@mui/material/List';
import APITest from './Pages/APITest';

function App() {
  return (
    <Router>
      <QueryParams />
    </Router>
  );
}

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function QueryParams() {
  let query = useQuery();
  let language = GetSupportedLocale(query.get("lang"));
  
  return <div>
    <nav>
      <List>
        <Header lang={language} location={window.location.href} />
      </List>
    </nav>

    {/* A <Routes> looks through its children <Route>s and
        renders the first one that matches the current URL. */}

    
    <Routes>
      <Route path="/about" element={<AboutMe lang={language} />} />
      <Route path="/api/test" element={<APITest lang={language} />} />
      <Route path="/*" element={<AboutMe lang={language} />} />
    </Routes>
  </div>
}

function GetSupportedLocale(language) {
  if (language === null || language === undefined)
    language = window.navigator.userLanguage || window.navigator.language;
  switch(language) {
    case "en":
    case "eng":
        return "eng";
    case "ru":
    case "rus":
        return "ru";
    default:
      return "eng";
  }
}

export default App;
