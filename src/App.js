import { React } from "react";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Footer from "./components/Footer";
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
