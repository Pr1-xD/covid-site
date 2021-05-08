import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Resources from './pages/Resources'
import Chatbot from './pages/Chatbot'
import './App.css';
import "tailwindcss/tailwind.css"

function App() {
  return (
    <div className="App ">
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/resources" component={Resources} />
          <Route path="/chatbot" component={Chatbot} />
      </Switch>

    </div>
  );
}

export default App;
