import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import axios from "axios";
// import "./App.css";
// import { FaStar } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment } from "../../Counter/Counter";

// import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { addtoCart } from "../Slice/CartSlice";

const Dashboard = () => {
  let [categoryData, setCategoryData] = useState(null);
  let [productData, setProductData] = useState(null);
  let [filterData, setFilterData] = useState(null);

  const count = useSelector((state) => state.Counter?.value);
  const dispatch = useDispatch();

  // React toastify
  var nav = useNavigate();
  const demo = () => {
    // setTimeout(() => {
    //   toast.success("Product Add successfully...");
    // }, 500);
  };

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then(function (response) {
        // handle success
        // console.log(response);
        setCategoryData(response?.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then(function (response) {
        // handle success
        setProductData(response?.data?.products);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  const addCategoryData = (category) => {
    setFilterData(category);
  };

  let filterProduct = filterData
    ? productData.filter((product) => product.category === filterData)
    : productData;

  return (
    <Container className="my-3">
      <div className="row w-100">
        <div className="col-3 col-md-3">
          <div className="category">
            <div className="title py-1 px-2">
              <p className="h3">Category</p>
            </div>
            <div className="category-items">
              {categoryData &&
                categoryData.map((item, index) => (
                  <div
                    key={index}
                    className="category-item  px-1 py-2 mt-3 fw-semibold fs-5 border-bottom w-100"
                    onClick={() => addCategoryData(item)}
                  >
                    {item}
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="col-9 col-md-9">
          <div className="row gy-3 w-100">
            {filterProduct !== null &&
              filterProduct.map((item, index) => (
                <div key={index} className="col-md-4">
                  <div className="card proCard h-100">
                    <div className="product-img overflow-hidden">
                      <img
                        src={item.thumbnail}
                        className="img-fluid h-100 object-fit-cover"
                        alt="..."
                      />
                    </div>
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <h5 className="card-title">{item.title}</h5>
                      </div>
                      <div className="card-text d-flex justify-content-between align-items-center">
                        <p>Price : &#8377; {item.price}</p>
                        <p className="fs-6 fw-bold">{item.brand}</p>
                      </div>
                      <div className="card-text d-flex gap-2 align-items-center">
                        <p className="mb-0">{item.rating}</p>
                        {/* <div className="rating">
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                        </div> */}
                      </div>
                      {/* <div className="qty d-flex gap-3 align-items-center my-3">
                        <button
                          className="btn btn-primary"
                          onClick={() => dispatch(increment())}
                        >
                          +
                        </button>
                        <div className="value">{count}</div>
                        <button
                          className="btn btn-primary"
                          onClick={() => dispatch(decrement())}
                        >
                          -
                        </button>
                      </div> */}
                      <div className="product-buy-btn mt-4 d-flex justify-content-between align-items-center">
                        <div
                          className="btn py-2 px-3 text-light border-light fw-semibold"
                          onClick={() => dispatch(addtoCart(item))}
                        >
                          Add Cart
                          {/* <ToastContainer /> */}
                        </div>
                        <div
                          className="btn btn-light gap-3 py-2 px-3 text-dark fw-semibold"
                          onClick={() => nav("/Cart")}
                        >
                          GO to Cart
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
