import './App.css';
import { Route, Switch } from 'react-router-dom';
import SignUp from './components/SignUp'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/sign-up" component={SignUp} />
      <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
