
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter as Route, Routes, Route } from 'react-router-dom';
import Layout from './Paginas/Layout';
import Home from './Paginas/Home';
import Historia from './Paginas/Historia';
import Pagina1 from './Paginas/Pagina1';
import Pagina2 from './Paginas/Pagina2';
import Pagina3 from './Paginas/Pagina3';
import Pagina4 from './Paginas/Pagina4';
import Pagina5 from './Paginas/Pagina5';
import Pagina6 from './Paginas/Pagina6';
import Pagina7 from './Paginas/Pagina7';
import Pagina8 from './Paginas/Pagina8';
import Creditos from './Paginas/Creditos';

function App() {
  return (
      <div>
     
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="historia" element={<Historia />} />
            <Route path="pagina1" element={<Pagina1 />} />
            <Route path="segunda" element={<Pagina2 />} />
            <Route path="tercera" element={<Pagina3 />} />
            <Route path="cuarta" element={<Pagina4 />} />
            <Route path="quinta" element={<Pagina5 />} />
            <Route path="sexta" element={<Pagina6 />} />
            <Route path="septima" element={<Pagina7 />} />
            <Route path="octava" element={<Pagina8 />} />
            <Route path="creditos" element={<Creditos />} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;
