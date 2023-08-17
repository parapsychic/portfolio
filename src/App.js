import { useMediaQuery } from 'react-responsive';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BottomNav from './components/bottomnav';
import Header from './components/header';
import NavBar from './components/nav';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import Linux from './pages/linux';
import NotFound from './pages/not-found';
import Projects from './pages/projects';
import Skills from './pages/skills';

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  return (
    <div className="App">
      <main className="h-full lg:flex lg:flex-row bg-main-blue text-white font-jetbrains-mono font-extrabold">
        <div className='tab:border-r-2 border-stroke-blue max-w-xl w-1/6 lg:sticky bg-main-blue z-10'>
          <Header />
          {isDesktopOrLaptop && <NavBar />}
          {!isDesktopOrLaptop && <BottomNav />}
        </div>
        <div className='lg:mx-auto'>
          <Routes>
    {/*            <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/linux' element={<Linux />} />
                <Route path='/contact' element={<Contact />} /> */}
            <Route path='/' element={<div className='snap-mandatory snap-y'>
              <Home/>
              <About />
              <Projects />
              <Skills />
              <Linux />
              <Contact />
              </div>} />
            <Route path='*' element={<NotFound/>}/>
          </Routes>

        </div>
      </main>
    </div>
  );

}

export default App;
