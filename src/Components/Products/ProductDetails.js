import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Products.css";
import Modal from '../Modal/Modal';

const ProductDetails = ({ products }) => {
  const { id } = useParams();

  
  const product = products.find((item) => item.pid === Number(id));
  const [showModal, setShowModal] = React.useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const PLAYCANVAS_URL = "https://main.d24pjkyo5l59dg.amplifyapp.com/";
  // const PLAYCANVAS_URL = "https://playcanv.as/e/p/eZRjmujt/";

  const options = { 
    modelName : product.name, 
    position: product.position,
    rotation: product.rotation,
    scale: product.scale, 
    colors: product.colors
  }
  const encodedstring = encodeURIComponent(JSON.stringify(options));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <br />
      <div className="card w-75 ml-5">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid cardimage"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.subtitle}</p>
              <p className="card-text">$ {product.price}</p>

              <div className="row pb-3">
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                <Link
                    className="btn btn-primary btn-block"
                    to={`${PLAYCANVAS_URL}?data=${encodedstring}`}
                  >
                    AR Visual
                  </Link>
                  {/* <button className="btn btn-primary btn-block" onClick={handleShowModal}>
                    AR Visual
                  </button> */}

                  <Modal
                    isOpen={showModal}
                    handleClose={handleCloseModal}
                    iframeSrc={`${PLAYCANVAS_URL}?data=${encodedstring}`}
                  />
                </div>
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <button className="btn btn-primary btn-block">
                    Add to Cart
                  </button>
                </div>
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                  <Link to="/products" className="btn btn-secondary btn-block">
                    Back to Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;