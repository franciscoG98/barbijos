import './App.css';
import Navbar from './components/Navbar';
// import Home from './components/screens/Home';
import Features from './components/screens/features/Features';
import Products from './components/screens/products/Products';
import Shiping from './components/screens/shipping/Shipping';
import Contact from './components/screens/contact/Contact';
import FAQ from './components/screens/FAQ/FAQ';




function App() {
    return (
        <div className="App">
            <Navbar />
            {/* <Home /> */}
            <Products />
            <FAQ />
            <Features />
            <Shiping />
            <Contact />
        </div>
    );
}

export default App;
