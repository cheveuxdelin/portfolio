import React from 'react';
import Footer from './components/Footer';
import Header from "./components/Header";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Gifs from './pages/Gifs';

function App() {
  const [tab, setTab] = React.useState<string>("HOME");

  const tabs: { [key: string]: JSX.Element } = {
    "HOME": <Home />,
    "PROJECTS": <Projects />,
    "GIFs": <Gifs />,
  };

  return (
    <div style={{
      "display": "flex",
      "flexDirection": "column"
    }}>
      <Header setTab={setTab} />
      <main>
        {tabs[tab]}
      </main>
      <Footer />
    </div >
  )
}

export default App
