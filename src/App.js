import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Cards from './Cards';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Footer></Footer>
      <br></br>
      <div class="karty">
      <Cards class="karta"></Cards>
      <Cards class="karta"></Cards>
      <Cards class="karta"></Cards>
      <Cards class="karta"></Cards>
      </div>
      
    </div>
  );
}
export default App;
