import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Homepage from './pages/Homepage';

function App() {
    return (
        <div className='App'>
            <Header />
            <main>
                <Hero />
                <Homepage />
            </main>
            <Footer />
        </div>
    );
}

export default App;
