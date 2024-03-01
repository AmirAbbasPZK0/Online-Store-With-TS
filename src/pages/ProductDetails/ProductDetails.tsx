import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md"

import { useEffect, useState } from "react";
import useAsync from "../../hooks/useAsync";
import { useParams } from "react-router-dom";
import "./ProductDetails.css"
import { useDispatch } from "react-redux";
import { increaseQuantity } from "../../reducers/CartReducer";
import { Rating } from "@mui/material";

const ProductDetails = () => {

    const {id} = useParams()
    const [imageCount , setImageCount] = useState(0)
    const dispatch = useDispatch()
    const {detailData , run , loading} = useAsync(`products/${id}` , "GET")

    useEffect(()=>{
        run()
    },[])

    if(loading){
        return <div>Loading</div>
    }

    const increaseImageHandle = () => {
        if(imageCount >= detailData.images.length - 1){
            setImageCount(0)
        }else{
            setImageCount(item => item + 1)
        }
    }

    const decreaseImageHandle = () => {
        if(imageCount === 0){
            setImageCount(detailData.images.length - 1)
        }else{
            setImageCount(item => item - 1 )
        }
    }

    return (<>
        <div className="details">
            <div className="details__image">
                <img src={detailData?.images[imageCount]} alt="" />
                <div>
                    <button onClick={decreaseImageHandle}><MdOutlineArrowBackIos/></button>
                    <h1>{imageCount + 1}</h1>
                    <button onClick={increaseImageHandle}><MdOutlineArrowForwardIos/></button>
                </div>
            </div>
            <div className="details__text">
                <h2>{detailData?.title}</h2>
                <br /> 
                <h4>{detailData?.description}</h4>
                <br />
                <p>${detailData?.price}</p>
                <br />
                <Rating name="read-only" value={detailData.rating} readOnly />
                <br />
                <button onClick={()=>{
                    dispatch(increaseQuantity(detailData))
                }} className="addButton">Add To Cart</button>
            </div>
        </div>
    </>);
}
 
export default ProductDetails;