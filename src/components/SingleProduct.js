import { Button, Card } from "react-bootstrap"
import { CartState } from "../context/Context"
import Rating from "./Rating"

const SingleProduct = ({ prod }) => {

  // console.log(cart);

  const { 
    state: { cart }, 
    dispatch,
  } = CartState();

  // console.log(cart);

  return <div className="products">
    <Card.Img variant='top' src={prod.image} alt={prod.name} />
    <Card.Body>
      <Card.Title>{prod.name}</Card.Title>
      <Card.Subtitle style={{ paddingBottom: 10 }}>
        <span>₹ {prod.price.split(".")[0]}</span>
        {prod.fastDelivery ? (
          <div>Fast Delivery</div>
        ) : (
          <div>4 days delivery</div>
        )}
        <Rating rating={prod.ratings} />
      </Card.Subtitle>

      {
        cart.some(p => p.id === prod.id) ? (
          <Button 
            onClick={ ()=>{
              // DISPATCH TAKES TWO THINGS 1.TYPE   2.PAYLOAD
              dispatch({
                type: 'REMOVE_FROM_CART',
                payload: prod
              })
            } } variant="danger"
          >Remove from cart</Button>
        ) : (
          <Button 
            onClick={ ()=>{
              // DISPATCH TAKES TWO THINGS 1.TYPE   2.PAYLOAD
              dispatch({
                type: 'ADD_TO_CART',
                payload: prod
              })
            } } 
            disabled={ !prod.inStock }
          >{ !prod.inStock ? "Out of Stock" : "Add to Cart" }</Button>
        )
      }

      
      
    </Card.Body>
  </div>
}

export default SingleProduct