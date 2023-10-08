import React, { useEffect, useState } from 'react';
import axios from 'axios';   // axios import cheyyuka

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products') // axios api url
      .then((res) => {
        setProducts(res.data.products);
        console.log("res", res);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  
  return (
    <div>
      {products.map((value, index) => (  // arrayil ullathine loop cheyyan map function koduthu
        <div key={index}>
          <h3 style={{padding:15}}>{value.title}</h3>
          <img style={{width:'300px',height:'300px'}} src={value.images[0]} alt='img' />
            {/* arrayil image ennathil kure image ullath kond nammal athil ethramathethan ennu kodukkunnu athan [0] */}            
        </div>
      ))}
    </div>
  );
}

export default Product;
