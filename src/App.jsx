import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import Home from './components/Home';
import Pokelist from './components/Pokelist';
import PokeSingle from './components/PokeSingle';
import About from './components/About';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/' element= {<Layout/>}>
          <Route index element= {<Home/>}/>
          <Route path='pokelist' element= {<Pokelist/>}/>
          <Route path='pokelist/:pokeSingle' element= {<PokeSingle/>}/> 
          <Route path='about' element= {<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
