import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import GoToTopBtn from './components/GoToTopBtn/GoToTopBtn';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage';
import Rainkings from './pages/RainkingsPage/Rainkings';
import ConnectWallet from './pages/ConnectWallet';
import Marketplace from './pages/MarketplacePage/Marketplace';
import ArtistPage from './pages/ArtistPage/ArtistPage';
import NFTPage from './pages/NFTPage/NFTPage';

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
                <Routes>
                    <Route path={'/NFTMarketplace/'} element={<Homepage />} />
                    <Route path={'/rankings'} element={<Rainkings />} />
                    <Route path={'/connect'} element={<ConnectWallet />} />
                    <Route path={'/marketplace'} element={<Marketplace />} />
                    <Route path={'/artistPage/:id'} element={<ArtistPage />} />
                    <Route path={'/nftProductPage/:id'} element={<NFTPage />} />
                </Routes>
                <GoToTopBtn top={visible} />
            </main>
            <Footer />
        </div>
    );
}
// TODO: Добавить лоадинг на все страницы для плавного появления контента

export default App;
