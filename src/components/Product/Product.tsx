import "./Product.css"
import { ProductType } from "../../interfaces/types";
import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";

type Props = { 
    item : ProductType
}

const Product = ({item} : Props) => {

    const navigate = useNavigate()

    return (<>
        <div className="card">
            <div className="imgBox">
            <img src={item.images[0]} alt="mouse corsair" className="mouse"/>
            </div>
            <div className="contentBox">
            <h3>{item.title}</h3>
            <p>{item.price}$</p>
            <Rating name="read-only" value={item.rating} readOnly />
            <button onClick={()=>{
                navigate("/products/"+item.id)
            }}>Show More</button>
            </div>
        </div>
    </>);
}
 
export default Product;