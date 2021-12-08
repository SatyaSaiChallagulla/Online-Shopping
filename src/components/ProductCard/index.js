import './index.css'
import CartContext from '../../context/CartContext'

const ProductCard = props => (
  <CartContext.Consumer>
    {value => {
      const {addCartItem} = value
      const {productData} = props
      const {title, brand, imageUrl, rating, price} = productData
      const quantity = 1

      const onClickAddCartBtn = () => {
        addCartItem({...productData, quantity})
      }

      return (
        <li className="product-item">
          <img src={imageUrl} alt="product" className="thumbnail" />
          <div className="rating-container">
            <p className="rating">{rating}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="star"
            />
          </div>
          <h1 className="title">{title}</h1>

          <p className="brand">by {brand}</p>
          <div className="price-add-container">
            <p className="price">Rs {price}/-</p>
            <button
              type="button"
              className="add-to-cart-btn"
              onClick={onClickAddCartBtn}
            >
              Add To Cart
            </button>
          </div>
        </li>
      )
    }}
  </CartContext.Consumer>
)
export default ProductCard
