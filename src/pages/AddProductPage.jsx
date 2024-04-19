import React, { useState } from "react";
import styled from "styled-components";
import { category, brand } from "../data/data";

const AddProductPage = () => {
  const [images, setImages] = useState([]);
  const [fields, setFields] = useState({
    title: "",
    price: 0,
    discountPercentage: 0,
    stock: 1,
    brand: "",
    category: "",
    description: "",
  });

  // Function to handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };
  const handleAddImage = () => {
    setImages([...images, ""]);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const handleImageChange = (index, event) => {
    const updatedImages = [...images];
    updatedImages[index] = event.target.value;
    setImages(updatedImages);
  };

  const handleSubmit =async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", fields.title);
    formData.append("description", fields.description);
    formData.append("stock", fields.stock);
    formData.append("price", fields.price);
    formData.append("discountPercentage", fields.discountPercentage);
    formData.append("brand", fields.brand);
    formData.append("category", fields.category);
    images.forEach((image, index) => {
      formData.append(`images`, image);
    });
    // const formDataObject = {};
    // for (const [key, value] of formData.entries()) {
    //   formDataObject[key] = value;
    // }

    // console.log(formDataObject);
    try {
      const response = await fetch('/api/product/addproduct', {
        method: 'POST',
        body: formData,
        headers:{
          "Content-Type":"multipart/form-data"
        }
      });
      const result = await response.text();
      console.log(result); // Server response
    } catch (error) {
      console.error('Error uploading images:', error);
    }

    // setImages([]);
    // setFields({
    //   title: "",
    //   price: 0,
    //   discountPercentage: 0,
    //   stock: 1,
    //   brand: "",
    //   category: "",
    //   description: "",
    // });
  };
  return (
    <Wrapper>
      <form  onSubmit={handleSubmit} encType="multipart/form-data" >
        <div>
          <label htmlFor="">Product title</label>
          <input
            type="text"
            placeholder="title"
            name="title"
            value={fields.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="">Price</label>
          <input
            type="number"
            placeholder="price"
            name="price"
            value={fields.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="">Discount Percentage</label>
          <input
            type="number"
            placeholder="discountPercentage"
            name="discountPercentage"
            value={fields.discountPercentage}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="">Stock</label>
          <input
            type="number"
            placeholder="stock"
            name="stock"
            value={fields.stock}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="">Brand</label>
          <select
            name="brand"
            id=""
            value={fields.brand}
            onChange={handleInputChange}
          >
            <option value="">Select...</option>
            {brand.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="">Category</label>
          <select
            name="category"
            id=""
            value={fields.category}
            onChange={handleInputChange}
          >
            <option value="">Select...</option>
            {category.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div>
          {images.map((image, index) => (
            <div key={index} className="image_input">
              <input
                type="file"
                accept="image/*"
                onChange={(event) => handleImageChange(index, event)}
              />
              <button
                className="remove"
                type="button"
                onClick={() => handleRemoveImage(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddImage}>
            Add Image
          </button>
        </div>
        <div>
          <label htmlFor="">Description</label>
          <textarea
            name="description"
            cols="30"
            rows="10"
            placeholder="product description"
            value={fields.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <button type="submit">Create Product</button>
        </div>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: calc(100% - 200px);
    div {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    input,
    textarea,
    select {
      padding: 5px;
    }
    button {
      width: max-content;
      padding: 5px 20px;
      cursor: pointer;
    }
    .image_input {
      display: flex;
      flex-direction: row;
    }
    .remove {
      width: max-content;
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 728px) {
    form {
      grid-template-columns: 100%;
    }
  }
  @media only screen and (max-width: 426px) {
    form {
      width: 100%;
      padding: 0 5px;
    }
  }
`;
export default AddProductPage;
