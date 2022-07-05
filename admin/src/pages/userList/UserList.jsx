import React, { useState } from 'react';
import './userList.css';
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";


const UserList = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'user',
            headerName: 'User',
            width: 200,
            //rendering an avatar from the data in rows 
            renderCell: (params) => {
                return (
                  <div className="userlist-user">
                    <img className="userlist-img" src={params.row.avatar} alt="" />
                    {params.row.username}
                  </div>
                );
              },
            },
        {
            field: 'email',
            headerName: 'Email',
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
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 200,
        },
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
              return (
                <>
                  <Link to={"/user/" + params.row.id}>
                    <button className="userListEdit">Edit</button>
                  </Link>
                  <DeleteOutline
                    className="userlist-delete"
                    onClick={() => handleDelete(params.row.id)}
                  />
                </>
              );
            },
          },
    ];

    

    return (
        <div className='user-list'>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default UserList;