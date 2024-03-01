import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { loginHandler } from "./reducers/UserReducer";


const App = () => {


    const dispatch = useDispatch()

    const auth = localStorage.getItem("auth_key")

    if(auth){
        toast(`Welcome Back`, {
            position: "top-right",
            autoClose: 5000,
            type:"info",
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        dispatch(loginHandler(auth))
    }

    return (<>
        <ToastContainer/>
        <Header/>
        <Outlet/>
    </>);
}
 
export default App;