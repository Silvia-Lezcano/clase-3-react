import React from 'react';
function ProductDetailPage(props) {const {name, description, price, SKU, quantity = props}
    return (
        <div className='product-detail'>
            <h1>{name}</h1>
            <p> {description}
            </p>
            <span> className=<product-price> $ (price) </product-price> </span>
            <span className ='Product-SKU'>SKU: {SKU}
            </span>
            <span> className='Productquantity'cantidad disponible:{quantity }
            </span>
        </div>
    );
}
import React from 'react';

import ProductDetail from './ProductDetail';

function App() {}  
  const product = {
    name: 'Vermicompost bolsa de 1,5 dm3',
    description: 'Lombricompuesto, fertilizante organico, biorregulador y corrector del suelo de elevada solubilización, debido a la composición enzimática y bacteriana, rápida asimilación por las raíces de las plantas.
    Price: 2500,
    sku: 'Vermicompost bolsa de 1,5 dm3',
    quantity: 1000
  };
  return (
     
    <div className="app">
      
      <ProductDetail {...product} />
    </div>
  )
    {}
  export default App;
