import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import Home from './components/Home';
import Pokelist from './components/Pokelist';
import PokeSingle from './components/PokeSingle';
import About from './components/About';

/* This is used for using react router with class component, since react router ignores class component.
it is just used so that in function component it is passed as props and react works fine */
const RouteWrapper = (props) => {
  const params = useParams();
  return <PokeSingle params={params} {...props}/>
};


function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/' element= {<Layout/>}>
          <Route index element= {<Home/>}/>
          <Route path='pokelist' element= {<Pokelist/>}/>
          <Route path='pokelist/:pokeSingle' element= {<RouteWrapper/>}/> 
          <Route path='about' element= {<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
