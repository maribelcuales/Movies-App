import { Switch, Route } from "react-router-dom";

import Landing from './components/Landing.js';
import AddMovie from "./components/AddMovie.js";
import Movies from "./components/Movies.js";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/movies" component={Movies}/>
        <Route exact path="/movies-reviews" component={Movies}/>
        <Route exact path="/add-movie" component={AddMovie}/>
      </Switch>
    </div>
  );
}

export default App; 
