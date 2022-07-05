import React from 'react';
import './productList.css';
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from 'react';

const ProductList = () => {

    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'product',
            headerName: 'Product',
            width: 200,
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
            field: 'stock',
            headerName: 'Stock',
            width: 200,
            editable: true,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 200,
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
                        <Link to={"/product/" + params.row.id}>
                            <button className="product-list-edit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="product-list-delete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];




    return (
        <div className='product-list'>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={10}
                checkboxSelection
                disableSelectionOnClick
            />
            <Link to='/newProduct'>
                <button className="create-product-btn">Create New Product</button>
            </Link>

        </div>
    )
}

export default ProductList;