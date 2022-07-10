import React from 'react';
import { useState } from 'react';
import Topbar from '../../adminComponents/topbar/Topbar';
import './newProduct.css';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../firebase';
import { addProduct }  from '../../adminRedux/apiCalls.js';
import { useDispatch } from "react-redux";
import Sidebar from '../../adminComponents/sidebar/Sidebar';


const NewProduct = () => {
    //Inputs
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
    <div className='new-product'>
      <Topbar />
      <br/><br/><br/>
        <h1 className='new-product-title'>New product</h1>
        <form className='add-product-form'>
            <div className='add-product-item'>
                <label>Image</label>
                <input type='file' id='file'   onChange={(e) => setFile(e.target.files[0])} />
            </div>
            <div className='add-product-item'>
                <label>Name</label>
                <input name='title' type='text' placeholder='Turbo Gauge' onChange={handleChange} />
            </div>
            <div className='add-product-item'>
                <label>Descripition</label>
                <input name='description' type='text' placeholder='Description' onChange={handleChange} />
            </div>
            <div className='add-product-item'>
                <label>Price</label>
                <input name='price' type='number' placeholder='$100' onChange={handleChange} />
            </div>
            <div className='add-product-item'>
                <label>Categories</label>
                <input type='text' placeholder='merch, accessories' onChange={handleCategory} />
            </div>
            <div className='add-product-item'>
                <label>Features</label>
                <input type='text' placeholder='soft cotton' onChange={handleChange} />
            </div>
            <div className='add-product-item'>
                <label>Weight</label>
                <input type='number' placeholder='25' onChange={handleChange} />
            </div>
            <div className='add-product-item'>
                <label>Quantity</label>
                <input type='number' placeholder='25' onChange={handleChange} />
            </div>
            <div className='add-product-item'>
                <label>Stock</label>
                <select name='inStock' onChange={handleChange}>
                    <option value='true'>Yes</option>
                    <option value='false'>No</option>
                </select>
            </div>
            <button onClick={handleClick} className='add-product-btn'>Create</button>
        </form>
    </div>

)
}


export default NewProduct;