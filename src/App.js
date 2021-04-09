import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Categories from './pages/Categories'
import PostDetail from './pages/PostDetail'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/posts" component={Posts}/>
        <Route exact path="/categories" component={Categories}/>
        <Route exact path="/post/:slug" component={PostDetail}/>
      </Switch>
    </Router>
  );
}

export default App;
