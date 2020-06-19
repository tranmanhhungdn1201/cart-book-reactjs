import React from 'react';
import { Route } from "react-router-dom";
import Login from './components/pages/Login/Login';
import Register from './components/pages/Register/Register';
import Store from './components/pages/Store/Store';
import BookStore from './components/pages/Store/BookStore';
import CreateBook from './components/pages/Books/CreateBook';
import Home from './components/pages/Home/Home';

const routes = (
      <Route>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/stores/create" component={Store}/>
        <Route exact path="/books/my-store" component={BookStore}/>
        <Route exact path="/books/:id/store" component={BookStore}/>
        <Route exact path="/books/create" component={CreateBook}/>
      </Route>
)
export default routes;