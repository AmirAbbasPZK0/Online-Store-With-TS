import { RootState } from "../../reducers/store";
import "./Cart.css"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increaseQuantity , decreaseQuantity } from "../../reducers/CartReducer";


const Cart = () => {

    const cart = useSelector((state : RootState) => state.cart.cart)
    const dispatch = useDispatch()

    const totalHandler = () => {
        let result = 0
        Object.values(cart).map(item => {
            result += item.price * item.quantity
            return result
        })
        return result
    }

    return (<>
        <div>{Object.values(cart).length !== 0 ? (
            <div className="cart">
            <div className="cart_bar">
                {Object.values(cart).map(item=>(
                    <div className="cart_item">
                        <img src={item.images[0]} alt="" />
                        <div className="item_details">
                            <h3>{item.title}</h3>
                            <br />
                            <p>${item.price * item.quantity}</p>
                            <br />
                            <p>{item.quantity}</p>
                            <div>
                                <button className="cart__btn" onClick={()=>{
                                    dispatch(increaseQuantity(item))
                                }}>+</button>
                                <button className="cart__btn" onClick={()=>
                                    dispatch(decreaseQuantity(item))
                                }>-</button>
                            </div>
                        </div>
                        <hr />
                    </div>
                ))}
                <p>total : ${totalHandler()}</p>
            </div>
        </div>
        ) : (
            <div>
                <h1 style={{fontWeight : "300"}}>Empty Basket</h1>
            </div>
        )}</div>    
    </>);
}
 
export default Cart;