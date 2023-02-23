import Home from "./pages/Home";
import Book from "./pages/Book";
import MyBooks from "./pages/Mybooks";
import {Routes, Route } from "react-router-dom";
import Header from "./components/header";
import "./components/componentsStyles/headerStyle/header.css"
import BookChapter from "./pages/BookChapter";
import Auth from "./pages/Authentication";
import { useSelector, useDispatch } from "react-redux";
import Logout from "./pages/Logout";
import { useEffect } from "react";
import { authCheck } from "./store/actions/handleAuth";


function App() {
  const token = useSelector(state => state.authReducer.token);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(authCheck());
  }, [])


  return (
    <div>
      <div className="header">
        <Header isAuthenticated={!token}/>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/book/:id" element={<Book/>}/>
        <Route exact path="/book/:id/chapter/:number" element={<BookChapter/>}/>
        <Route exact path="/MyBooks" element={<MyBooks/>}/>
        <Route exact path="/auth" element={<Auth/>}/>
        <Route exact path="/logout" element={<Logout/>}/>
      </Routes>
    </div>
  );
}

export default App;
