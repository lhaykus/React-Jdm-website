import React, { useState } from 'react';
import Topbar from '../../adminComponents/topbar/Topbar';
import Sidebar from '../../adminComponents/sidebar/Sidebar';
import './newUser.css';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../firebase';
import { addProduct } from '../../adminRedux/apiCalls.js';
import { useDispatch } from "react-redux";

const NewUser = () => {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();


  const handleChange = (e) => {
    setInputs(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    });
  };

  const handleCategory = (e) => {
    setCategory(e.target.value.split(","));
  };


  const handleClick = (e) => {
    e.preventDefault();
    //upload file and call api 
    //Using firebase to upload files and send to api
    //Give file unique name by adding date to name so can't be overwritten if same image uploaded again
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL, categories: category };
          addProduct(product, dispatch);
        });
      }
    );
  };

  return (
    <div className='new-user'>
      <Topbar />
      <br />   <br />  <br /> 
      <h1 className='new-user-title'>New User</h1>
      <form className='new-user-form'>
        <div className='new-user-item'>
          <label>Username</label>
          <input name='username' type='text' placeholder='loryn' onChange={handleChange} />
        </div>
        <div className='new-user-item'>
          <label>Full Name</label>
          <input name="name" type='text' placeholder='loryn' onChange={handleChange} />
        </div>
        <div className='new-user-item'>
          <label>Email</label>
          <input type='text' placeholder='jonsmith@email.com' />
        </div>
        <div className='new-user-item'>
          <label>Password</label>
          <input type='text' placeholder='password' />
        </div>
        <div className='new-user-item'>
          <label>Phone Number</label>
          <input type='text' placeholder='123456789' />
        </div>
        <div className='new-user-item'>
          <label>Address</label>
          <input type='text' placeholder='USA' />
        </div>
        <div className='new-user-item'>
          <label>Gender</label>
          <div className="user-gender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
          <div className="new-user-item">
            <label>Active</label>
            <select className="new-user-select" name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <button className='new-user-btn'>Create</button>
        </div>
      </form >
    </div>


  )
}

export default NewUser;