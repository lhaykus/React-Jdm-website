import React from 'react';
import './productList.css';
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from 'react';
import Topbar from '../../adminComponents/topbar/Topbar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../adminRedux/apiCalls";

const ProductList = () => {
    const dispatch = useDispatch();
    //const [data, setData] = useState(productRows);
    const adminProduct = useSelector(state => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };


    const columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        {
            field: 'product',
            headerName: 'Product',
            width: 300,
            //rendering an avatar from the data in rows 
            renderCell: (params) => {
                return (
                    <div className="product-list-item">
                        <img className="product-list-img" src={params.row.img} alt="" />
                        {params.row.name}
                    </div>
                );
            },
        },
        {
            field: 'inStock',
            headerName: 'Stock',
            width: 140,
            editable: true,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 200,
        },
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row._id}>
                            <button className="product-list-edit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="product-list-delete"
                            onClick={() => handleDelete(params.row._id)}
                        />
                    </>
                );
            },
        },
    ];




    return (
        <div className='product-list'>
            <Topbar />
            <DataGrid
                rows={adminProduct}
                disableSelectionOnClick
                columns={columns}
                getRowId={(row) => row._id}
                pageSize={10}
                checkboxSelection
            />
            <Link to='/newProduct'>
                <button className="create-product-btn">Create New Product</button>
            </Link>

        </div>
    )
}

export default ProductList;