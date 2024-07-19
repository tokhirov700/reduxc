import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './App.css';
import Loader from './utils/Loader';
import Navbar from './components/navbar/Navbar';

const Home = lazy(() => import('./routes/home/Home'));
const Product = lazy(() => import('./routes/product/Product'));

function App() {
  return (
    <div className="container">
      <Navbar />
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/product"
          element={
            <Suspense fallback={<Loader />}>
              <Product />
            </Suspense>
          }
        />
      </Routes>
    </div>

    </div>
  );
}

export default App;
