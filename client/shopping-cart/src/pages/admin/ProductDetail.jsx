import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { formatCurrency } from "../../helpers";
const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [productId, setProductId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [sale, setSale] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const { id } = useParams();

  //
  let BASE_API = "http://localhost:3000/api/v1";

  const fetchProduct = async () => {
    try {
      let res = await fetch(BASE_API + `/products/${id}`);
      let data = await res.json();
      console.log(data);
      //
      setProduct({ ...data });
      setProductId(data.product_id);
      setName(data.name);
      setPrice(data.price);
      setSale(data.sale);
      setStock(data.number);
      setCategory(data.category_id);
      //
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div className="col py-3">
      <h3>Product Detail</h3>
      <hr />
      <div className="container mb-3">
        <div className="row">
          <h5>Product Overview</h5>
        </div>
        <div className="row"></div>
      </div>
      <div style={{ overflowX: "auto" }}>
        <form className="container">
          <div className="row">
            <div className="col-4">
              <div className="mb-3">
                <label htmlFor="productId" className="form-label">
                  Product Id
                </label>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  id="productId"
                  value={productId}
                  onChange={(e) => setProductId(e.target.value)}
                />
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3">
                <label htmlFor="productName" className="form-label">
                  Product Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control"
                  id="productName"
                />
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="text"
                  className="form-control"
                  id="price"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="mb-3">
                <label htmlFor="stock" className="form-label">
                  Stock
                </label>
                <input
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  type="text"
                  className="form-control"
                  id="stock"
                />
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3">
                <label htmlFor="sale" className="form-label">
                  Sale
                </label>
                <input
                  value={sale}
                  onChange={(e) => setSale(e.target.value)}
                  type="text"
                  className="form-control"
                  id="sale"
                />
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Categogy
                </label>
                <input
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  type="text"
                  className="form-control"
                  id="category"
                />
              </div>
            </div>
          </div>

          <button disabled type="submit" className="btn btn-primary me-3">
            Save
          </button>
          <Link className="btn btn-danger" to="/admin/products">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ProductDetail;
