import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage';

function App() {
    return (
        <div className='App'>
            <Header />
            <main>
                <Homepage />
            </main>
            <Footer />
        </div>
    );
}

export default App;
