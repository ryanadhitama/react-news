import './styles/index.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Categories from './pages/Categories'
import PostDetail from './pages/PostDetail'
import Header from './components/Header';

function App() {
  return (
    <>
      <div className="container">
        
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/posts" component={Posts}/>
            <Route exact path="/categories" component={Categories}/>
            <Route exact path="/post/:slug" component={PostDetail}/>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
