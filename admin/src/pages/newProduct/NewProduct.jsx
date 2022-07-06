import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import './newProduct.css';

const NewProduct = () => {
    return (
        <div className='new-product'>
            <Topbar />
            <h1 className='new-product-title'>New product</h1>
            <form className='add-product-form'>
                <div className='add-product-item'>
                    <label>Image</label>
                    <input type='file' id='file' />
                </div>
                <div className='add-product-item'>
                    <label>Name</label>
                    <input type='text' placeholder='Turbo Gauge' />
                </div>
                <div className='add-product-item'>
                    <label>Stock</label>
                    <input type='text' placeholder='123' />
                </div>
                <div className='add-product-item'>
                    <label>Active</label>
                    <select name='active' id='active'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                <button className='add-product-btn'>Create</button>
            </form>
        </div>

    )
}

export default NewProduct;