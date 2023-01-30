import Home from "./pages/Home";
import Book from "./pages/Book";
import MyBooks from "./pages/Mybooks";
import {Routes, Route } from "react-router-dom";
import Header from "./components/header";
import "./components/componentsStyles/headerStyle/header.css"
import BookChapter from "./pages/BookChapter";


function App() {
  return (
    <div>
      <div className="header">
        <Header/>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/book/:id" element={<Book/>}/>
        <Route exact path="/book/:id/chapter/:number" element={<BookChapter/>}/>
        <Route exact path="/MyBooks" element={<MyBooks/>}/>
      </Routes>
    </div>
  );
}

export default App;
