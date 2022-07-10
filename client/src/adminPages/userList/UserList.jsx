import React, { useState } from 'react';
import './userList.css';
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Topbar from '../../adminComponents/topbar/Topbar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUsers, deleteUser } from '../../adminRedux/apiCalls';
import Sidebar from '../../adminComponents/sidebar/Sidebar';


const UserList = () => {
  const dispatch = useDispatch();
  //const [data, setData] = useState(userRows);
  const users = useSelector(state => state.user.users);

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);


  const handleDelete = (id) => {
    deleteUser(id, dispatch);
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
      field: 'fullName',
      headerName: 'Full Name',
      width: 200,
      editable: true,
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
      width: 150,
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
          
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userlist-delete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];


  return (

    <div className='user-list'>
      <Topbar />
      <br />   <br />  <br />  <br />  <br />  <br />  <br />
      <DataGrid className='user-list-data-grid'
        rows={users}
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
      <Link to='/newUser'>
      <button className="create-user-btn">Create New User</button>
      </Link>
    </div>

  )
}

export default UserList;