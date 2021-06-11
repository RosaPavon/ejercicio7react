import './App.css';
import Cabecera from './Cabecera';
import Main from './Main';
import Footer from './Footer';
import muelle from './muelle'

function App() {
;
  return (
    <>
    <Cabecera />
    <Main muelle={muelle}/>
    <Footer />

    </>

  );
}

export default App;
