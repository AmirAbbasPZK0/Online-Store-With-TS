import { useState } from "react";
import { FaTimes , FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css"
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/store";
import { useNavigate } from "react-router-dom";
import { FaBasketShopping } from "react-icons/fa6";


const Header = () => {

    const [click , setClick] = useState<boolean>(true)

    const isLogin = useSelector((state : RootState) => state.user.isLogin)
    const userDetails = useSelector((state : RootState)=> state.user.userDetails)
    const cartCount = useSelector((state : RootState)=> state.cart.cart)

    const navigate = useNavigate()

    const clickHandler = () : void => {
        setClick(!click)
    }

    return (<>
        <nav className="navbar">
            <div className="navbar__container">
                <Link className="navbar__logo" to={"/"}>Home</Link>
                <span onClick={clickHandler} className="navbar__btn">{click ? <FaBars/> : <FaTimes/>}</span>
                <ul className={click ? "navbar__menu active" : "navbar__menu"}>
                    <li className="navbar__item">
                        <Link className="navbar__link" to={"/about"}>
                            About
                        </Link>
                    </li>
                    <li className="navbar__item">
                        {isLogin ? (
                            <button className="navbar__styled__btn" onClick={()=>{
                                localStorage.removeItem("auth_key")
                                window.location.reload()
                            }}>Log out</button>
                        ) : (
                            <Link to={"/register"} className="navbar__link">
                                Login
                            </Link>
                        )}
                    </li>
                    <li className="navbar__item">
                        <button onClick={()=>{
                            navigate("/cart")
                        }} className="navbar__styled__btn">
                            <FaBasketShopping style={{fontSize : "1.2rem"}}/>
                            <span>({Object.entries(cartCount).length})</span>
                        </button>
                    </li>
                </ul>
                <span>
                        {!isLogin ? (
                            <div></div>
                        ) : (
                            <div className="user_detail">
                                <p>{userDetails?.username}</p>
                                <button className="profile_btn">
                                    
                                    <img src={userDetails?.image} alt="" className="profile_img" />
                                </button>
                            </div>
                        )}
                </span>
            </div>
        </nav>
    </>);
}
 
export default Header;