import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Products.css";
import Modal from '../Modal/Modal';



const ProductDetails = ({ products }) => {
  const { id } = useParams(); // Get the product ID from the URL

  // Find the product with the matching ID
  const product = products.find((item) => item.pid === id);
  // const [shown, setShown] = React.useState(false)
  // const [showAR, setShowAR] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // const handleShowAR = () => {
  //   setShowAR(true);
  // };
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

              <div className="row pb-3">
                <div className="col-4">
                {/* {shown ? <VideoModal src="http://localhost:8000/"/> : null}
      <button onClick={() => setShown(!shown)}>Test</button> */}

                  <button className="btn btn-primary btn-block" onClick={handleShowModal}>
                    AR Visual
                  </button>

      
      <Modal
        isOpen={showModal}
        handleClose={handleCloseModal}
        iframeSrc="http://localhost:8000/"
      />
      
      {/* {showAR && (
        <div>
          <h2>AR View</h2>
          <iframe
            title="AR View"
            src="http://localhost:8000/"
            width="800"
            height="600"
            style={{ border: 'none' }}
          ></iframe>
        </div>
      )} */}
                  
                </div>
              {/* </div>
              <div className="row"> */}
                <div className="col-4">
                  <button className="btn btn-primary btn-block">
                    Add to Cart
                  </button>
                </div>
                <div className="col-4">
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

// const VideoModal = (props) => {
//   return <div >
//     {/* <iframe
//         title={props.src}
//         src={props.src}
//     /> */}
//     <a href={props.src} target={props.src}>Google</a>



//   </div>
// }

export default ProductDetails;