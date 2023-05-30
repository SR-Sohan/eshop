import React, { useState } from "react";
import useAsync from "../../hooks/useAsync";
import CategoryServices from "../../services/CategoryServices";
import BrandServices from "../../services/BrandServices";
import ProductServices from "../../services/ProductServices";
import { toast } from "react-toastify";

const AddProducts = () => {
  const { data: cat, isSuccess: catSucc } = useAsync(
    CategoryServices.getCategory
  );
  const { data: brand, isSuccess: brandSucc } = useAsync(
    BrandServices.getBrands
  );
  const [products, setProducts] = useState({
    title: "",
    price: "",
    category_id: "",
    brand_id: "",
    quantity: "",
    description: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };
  const inputValue = (e) => {
    setProducts((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", products.title);
    formData.append("price", products.price);
    formData.append("category_id", products.category_id);
    formData.append("brand_id", products.brand_id);
    formData.append("quantity", products.quantity);
    formData.append("description", products.description);
    formData.append("image", selectedImage);

    ProductServices.postProduct(formData)
      .then((res) => {
      
          setProducts({
            title: "",
            price: "",
            category_id: "",
            brand_id: "",
            quantity: "",
            description: "",
          });
          setSelectedImage(null);
          toast.success("Products Added Successfully");
        
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="product_add_component">
      <div className="container">
        <form onSubmit={handleSubmit} className="shadow-lg ">
          <h1>Add Product</h1>
          <div className="input_wrap">
            <input
              onChange={inputValue}
              type="text"
              name="title"
              id=""
              placeholder="Title"
              value={products.title}
            />
          </div>
          <div className="input_wrap">
            <input
              onChange={inputValue}
              type="number"
              name="price"
              id=""
              placeholder="Price"
              value={products.price}
            />
          </div>
          <div className="input_wrap">
            <select  value={products.category_id} onChange={inputValue} name="category_id" id="">
              <option>Category</option>
              {catSucc &&
                cat.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.title}
                  </option>
                ))}
            </select>
          </div>
          <div className="input_wrap">
            <select  value={products.brand_id} onChange={inputValue} name="brand_id" id="">
              <option onChange={inputValue}>Brand</option>
              {brandSucc &&
                brand.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.title}
                  </option>
                ))}
            </select>
          </div>
          <div className="input_wrap">
            <input
              onChange={inputValue}
              type="number"
              name="quantity"
              id=""
              placeholder="Qunatity"
              value={products.quantity}
            />
          </div>
          <div className="input_wrap">
            <textarea
              onChange={inputValue}
              rows="5"
              type="text"
              name="description"
              id=""
              placeholder="Description"
              value={products.description}
            ></textarea>
          </div>
          <div className="input_wrap">
            <input onChange={handleImageChange} type="file" name="" id="" />
          </div>
          <input className="submit_btn" type="submit" value="Add Product" />
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
