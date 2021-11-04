import React from 'react';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
    return (
        <>
        <main className="content-wrapper">
            <Header />
            <Container />
        </main>
        <Footer />
        </>
    )
}

export default App
