import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Features from './components/pages/Features';
import Products from './components/pages/Products';
import Shiping from './components/pages/Shiping';
import Contact from './components/pages/Contact';
import FAQ from './components/pages/FAQ';




function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <Features />
            <Products />
            <Shiping />
            <Contact />
            <FAQ />
        </div>
    );
}

export default App;
