import React from 'react';
import './product.css';
import { Link } from 'react-router-dom';
import Chart from "../../components/chart/Chart"
import { productData } from '../../dummyData';
import { Publish } from '@material-ui/icons';
import Topbar from '../../components/topbar/Topbar';

const Product = () => {
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
                    <Chart data={productData} dataKey="Sales" title='Sales Performance' />
                </div>
                <div className='product-top-right'>
                    <div className='product-info-top'>
                        <img className='product-info-img' src='https://images.pexels.com/photos/10638654/pexels-photo-10638654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            alt='' />
                        <span className='product-name'>Boost Gauge</span>
                    </div>
                    <div className='product-info-bottom'>
                        <div className='product-info-item'>
                            <span className='product-info-key'>ID:</span>
                            <span className='product-info-value'>123</span>
                        </div>
                        <div className='product-info-item'>
                            <span className='product-info-key'>Sales:</span>
                            <span className='product-info-value'>123456</span>
                        </div>
                        <div className='product-info-item'>
                            <span className='product-info-key'>Active:</span>
                            <span className='product-info-value'>yes</span>
                        </div>
                        <div className='product-info-item'>
                            <span className='product-info-key'>In Stock:</span>
                            <span className='product-info-value'>yes</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='product-bottom'>
                <form className='product-form'>
                    <div className='product-form-left'>
                        <label className='product-name'>Product Name</label>
                        <input type='text' placeholder='Tubro Gauge' />
                        <label>In Stock</label>
                        <select name='in-stock' id='in-stock'>
                            <option value='yes'>Yes</option>
                            <option value='no'>no</option>
                        </select>
                        <label>Active</label>
                        <select name='in-stock' id='in-stock'>
                            <option value='yes'>Yes</option>
                            <option value='no'>no</option>
                        </select>
                    </div>
                    <div className='product-form-right'>
                        <div className='product-upload'>
                            <img src = 'https://images.pexels.com/photos/10638654/pexels-photo-10638654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            alt ='' />
                            <label for ='file'>
                                <Publish className='product-icon' />
                            </label>
                            <input type = 'file' id='file' style={{display: 'none'}} />
                        </div>
                        <button className='product-btn'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product;