import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import React from 'react'
import About from "./pages/About";
import NotFound from "./pages/NotFound";
function App() {

  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route >
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
export default App;

