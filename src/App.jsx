import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './App.css';
import Loader from './utils/Loader';

const Home = lazy(() => import('./routes/home/Home'));
const Product = lazy(() => import('./routes/product/Product'));

function App() {
  return (
    <>
      <div>App</div>
      <Routes>
        <Route
          path="/home"
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
    </>
  );
}

export default App;
