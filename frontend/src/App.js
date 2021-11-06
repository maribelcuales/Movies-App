import { Switch, Route } from "react-router-dom";

import Landing from './components/Landing.js';
import AddMovie from "./components/AddMovie.js";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/add-movie" component={AddMovie}/>
      </Switch>
    </div>
  );
}

export default App; 
