import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import GoToTopBtn from './components/GoToTopBtn/GoToTopBtn';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Homepage from './pages/Homepage';

function App() {
    const [visible, setVisible] = useState(false);
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);

        return () => {
            window.removeEventListener('scroll', toggleVisible);
        };
    }, []);
    return (
        <div className='App'>
            <Header />
            <main>
                <Hero />
                <Homepage />
                <GoToTopBtn top={visible} />
            </main>
            <Footer />
        </div>
    );
}

export default App;
