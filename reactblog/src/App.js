//import logo from './logo.svg';
//import './App.css';
import Navbar from './navbar';
import Home from './home';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Create from './create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Routes>
          <Route exact path='/'  element={<Home/>}></Route>
          <Route exact path='/create'  element={<Create/>}></Route>
          <Route exact path='/blogs/:id'  element={<BlogDetails/>}></Route>
          <Route exact path='*' element={<NotFound/>}></Route>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
