import { Outlet, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import MainPage from './components/Pages/MainPage';
import DetailPage from './components/Pages/DetailPage';
import SearchPage from './components/Pages/SearchPage';

const Layout = () => {
  return(
    <div>
      <Nav />

      <Outlet />

      <Footer />
    </div>
  )
};

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path=":movieId" element={<DetailPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
