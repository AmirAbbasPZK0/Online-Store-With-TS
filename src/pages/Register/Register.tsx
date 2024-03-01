import { useState } from "react";
import "./Register.css"
import { useForm } from "react-hook-form";
import useAsync from "../../hooks/useAsync";
import { UserData } from "../../interfaces/types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginHandler, userHandler} from "../../reducers/UserReducer";

const Register = () => {

    const {run} = useAsync("auth/login" , "POST")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    type formState = {
        username : string
        password : string
    }

    const [tab , setTab] = useState(true)

    const {register , handleSubmit , formState} = useForm<formState>({
        defaultValues : async () => {
            return {
                username : "kminchelle",
                password : "0lelplR"
            }
        }
    })

    const {errors} = formState

    const onSubmit = (e : formState) => {
        run(e)
        ?.then((resData : UserData | any) => {
            toast(`Welcome ${resData.username}`, {
                position: "top-right",
                autoClose: 5000,
                type:"success",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            localStorage.setItem("auth_key" , resData.token)
            dispatch(loginHandler(resData.token))
            console.log(resData)
            dispatch(userHandler(resData))
            navigate("/")
        })
    }

    return (<>
        <div className="register">
            <div>
                <button onClick={()=>{
                    setTab(!tab)
                }}>{tab ? "Sign Up" : "Login"}</button>
            </div>
            {tab ? (
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="form" action="">
                        <label htmlFor="">
                            <p>User Name:</p>
                            <input {...register("username" , {
                                required : {
                                    value : true,
                                    message : "Username required"
                                }
                            })} type="text" />
                            <h5>{errors.username?.message}</h5>
                        </label>
                        <label htmlFor="">
                            <p>Password:</p>
                            <input {...register("password" , {
                                required : {
                                    value : true,
                                    message : "Password is required"
                                }
                            })} type="password" />
                            <h5>{errors.password?.message}</h5>
                        </label>
                        <button type="submit" className="form__btn">Submit</button>
                    </form>
                </div>
            ) : (
                <div>
                    <form className="form" action="">
                        <label htmlFor="">
                            <p>Email:</p>
                            <input type="email" value={""} />
                        </label>
                        <label htmlFor="">
                            <p>User Name:</p>
                            <input type="text" value={""}/>
                        </label>
                        <label htmlFor="">
                            <p>Password:</p>
                            <input type="password" />
                        </label>
                        <button className="form__btn">Create an Account</button>
                    </form>
                </div>
            )}
        </div>
    </>);
}
 
export default Register;