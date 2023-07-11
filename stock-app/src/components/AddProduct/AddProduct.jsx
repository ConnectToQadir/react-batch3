"use client"
import { useState } from 'react'
import './AddProduct.css'


const AddProduct = () => {

  const [tempImg, setTemImg] = useState(null)

  return (
    <div className='AddProduct' >
      <form>
        <h2>Add <span>Product</span></h2>
        <div className="inputSection">
          <label htmlFor="title">Title</label>
          <input type="text" placeholder='Product Title' />
        </div>

        <div className="inputSection">
          <label htmlFor="desc">Description</label>
          <textarea placeholder='Product Description' />
        </div>


        <div className="inputSection">
          <label htmlFor="price">Price</label>
          <input type='number' placeholder='Product Price' />
        </div>


        <div className="inputSection">
          <label htmlFor="stock">Stock</label>
          <input type='number' placeholder='Product Stock' />
        </div>


        <div className="inputSection">
          <label htmlFor="category">Category</label>
          <select name="category" id="category">
            <option value="">Select Category</option>
            <option>Electronics</option>
            <option>Shoes</option>
            <option>Clothes</option>
          </select>
        </div>


        {
          tempImg ?
            <div className='imgBox' >
              <img src={URL.createObjectURL(tempImg)} />
              <i onClick={()=>setTemImg(null)} className='bx bx-x'></i>
            </div>
            :
            <div className="inputSection">
              <label className='imageInput' htmlFor="image">
                <div><i className='bx bx-cloud-upload'></i></div>
                <div>Upload Image</div>
              </label>
              <input onChange={(e) => setTemImg(e.target.files[0])} hidden id="image" type="file" />
            </div>
        }


        <div className="btns">
          <input type="submit" />
          <input type="reset" />
        </div>





      </form>
    </div>
  )
}

export default AddProduct