import React, { useState } from 'react';
import Topbar from '../../components/topbar/Topbar';
import './newUser.css';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../firebase';
import { addProduct, addUser }  from '../../redux/apiCalls.js';
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
              const user = { ...inputs, img: downloadURL, categories: category };
              addUser(user, dispatch);
            });
          }
        );
      };

    return (
        <div className='new-user'>
            <Topbar />
            <h1 className='new-user-title'>New User</h1>
            <form className='new-user-form'>
                <div className='new-user-item'>
                    <label>Full Name</label>
                    <input name="fullName" type='text' placeholder='Lara Croft' onChange={handleChange} />
                </div>
                <div className='new-user-item'>
                    <label>Username</label>
                    <input name='username' type='text' placeholder='tombraider28' onChange={handleChange} />
                </div>
                <div className='new-user-item'>
                    <label>Email</label>
                    <input name='email' type='text' placeholder='email@email.com' onChange={handleChange}/>
                </div>
                <div className='new-user-item'>
                    <label>Password</label>
                    <input name='password' type='text' placeholder='password' onChange={handleChange} />
                </div>
                <div className='new-user-item'>
                    <label>Phone Number</label>
                    <input name='phoneNumber' type='number' placeholder='123456789' onChange={handleChange} />
                </div>
                <div className='new-user-item'>
                    <label>Location</label>
                    <input name='country' type='text' placeholder='USA' onChange={handleChange} />
                </div>
                <div className='add-product-item'>
                <label>Image</label>
                <input type='file' id='file'   onChange={(e) => setFile(e.target.files[0])} />
            </div>
                    <button onClick={handleClick} className='new-user-btn'>Create</button>
            </form >
        </div>


    )
}

export default NewUser;