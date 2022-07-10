import React from 'react';
import './product.css';
import { Link, useLocation } from 'react-router-dom';
import Chart from "../../components/chart/Chart"
import { productData } from '../../dummyData';
import { Publish } from '@material-ui/icons';
import Topbar from '../../components/topbar/Topbar';
import { useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from "react";
import { userRequest } from '../../redux/requestMethods';

const Product = () => {
    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const [productStats, setproductStats] = useState([]);
  
    const product = useSelector((state) =>
      state.product.products.find((product) => product._id === productId)
    );
  
    const MONTHS = useMemo(
      () => [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Agu",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      []
    );
  
    useEffect(() => {
      const getStats = async () => {
        try {
          const res = await userRequest.get("orders/income?pid=" + productId);
          //sorting the data and compare both items and sort 
          const list = res.data.sort((a,b)=>{
              return a._id - b._id
          })
          list.map((item) =>
            setproductStats((prev) => [
              ...prev,
              { name: MONTHS[item._id - 1], Sales: item.total },
            ])
          );
        } catch (err) {
          console.log(err);
        }
      };
      getStats();
    }, [productId, MONTHS]);



return (
    <div className='product'>
        <Topbar />
        <div className='product-title-container'>
            <h1>Product</h1>
            <Link to='/newProduct'>
                <button className='add-product-btn'>Add Product</button>
            </Link>
        </div>
        <div className='product-top'>
            <div className='product-top-left'>
                <Chart data={productStats} dataKey="Sales" title='Sales Performance' />
            </div>
            <div className='product-top-right'>
                <div className='product-info-top'>
                    <img className='product-info-img' src={product.img}
                        alt='' />
                    <span className='product-name'>{product.name}</span>
                </div>
                <div className='product-info-bottom'>
                    <div className='product-info-item'>
                        <span className='product-info-key'>ID: </span>
                        <span className='product-info-value'>{product._id}</span>
                    </div>
                    <div className='product-info-item'>
                        <span className='product-info-key'>Sales: </span>
                        <span className='product-info-value'>123456</span>
                    </div>
                    <div className='product-info-item'>
                        <span className='product-info-key'>In Stock:</span>
                        <span className='product-info-value'>{product.inStock}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='product-bottom'>
            <form className='product-form'>
                <div className='product-form-left'>
                    <label className='product-name'>Product Name</label>
                    <input type='text' placeholder={product.name} />
                    <label className='product-description'>Product Description </label>
                    <input type='text' placeholder={product.description} />
                    <label className='product-description'>Price </label>
                    <input type='number' placeholder={product.price} />
                    <label>In Stock</label>
                    <select name='inStock' id='inStock'>
                        <option value='true'>Yes</option>
                        <option value='false'>no</option>
                    </select>
                </div>
                <div className='product-form-right'>
                    <div className='product-upload'>
                        <img src={product.img}
                            alt='' />
                        <label for='file'>
                            <Publish className='product-icon' />
                        </label>
                        <input type='file' id='file' style={{ display: 'none' }} />
                    </div>
                    <button className='product-btn'>Update</button>
                </div>
            </form>
        </div>
    </div>
)
}

export default Product;