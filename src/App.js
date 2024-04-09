import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProductData } from './redux/actions';
import Header from './components/Header';
import ProductInfo from './components/ProductInfo';
import SalesGraph from './components/SalesGraph';
import SalesTable from './components/SalesTable';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="container">
        <aside className="sidebar">
          <ProductInfo />
        </aside>
        <main className="content">
          <SalesGraph />
          <SalesTable />
        </main>
      </div>
    </>
  );
}





export default App;

