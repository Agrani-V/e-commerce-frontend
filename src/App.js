import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//Pages
//import MainPage from "./pages/HomePage" - not sure;
import AddProductPage from "./components/pages/AddProductPage";
import DeleteProductPage from "./components/pages/DeleteProductPage";
import EditProductPage from "./components/pages/EditProductPage";
import FavouritesPage from "./components/pages/FavouritesPage";
import SearchResultsPage from "./components/pages/SearchResultsPage";
import MainPage from './components/pages/MainPage';

//components
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      {/*Navbar*/}
      {/*ProductScreen - MainPage*/}
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product/:productName" element={<EditProductPage />} />
          <Route path="/add-new-product" element={<AddProductPage />} />
          <Route path="/edit-product/:id" element={<EditProductPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/search-results" element={<SearchResultsPage />} />
          <Route path="/delete-product" element={<DeleteProductPage />} />

        </Routes>
      </main>
      {/*AddProductPage*/}
      {/*DeleteProductPage*/}
      {/*EditProductPage*/}
      {/*SearchResultsPage*/}
      {/*FavouritesPage*/}
    </Router>
  );
}

export default App;
