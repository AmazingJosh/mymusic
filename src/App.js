import {Routes,Route} from 'react-router-dom'
import Section from './components/Section';
import Download from './components/Download'
import Search from './components/Search';
import NavBar from './components/navbar';
import Page from './components/Page';
import { Data } from './DATA';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="">
<NavBar/>
<Link to="/page"><Search  placeholder="Search music" data={Data}/></Link> 



      <Routes>
       <Route path="/" element={<Section/>}/>
        <Route path="/download" element={<Download/>}/>
        <Route path='search' element={<Search/>}/>
        <Route path='page' element={<Page/>}/>
      </Routes>







    </div>
  );
}

export default App;