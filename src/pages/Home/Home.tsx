import { useEffect } from "react";
import useAsync from "../../hooks/useAsync";
import Product from "../../components/Product/Product";
import "./Home.css"

const Home = () => {

    const {run , data , loading} = useAsync("products" , "GET")

    useEffect(()=>{
        run()
    },[])

    if(loading){
        return <div>Loading..</div>
    }

    return (<>
        <div className="home">
            <h1>Products</h1>
            <div className="products_list">
                {data?.products?.map(item => (
                    <Product key={item.id} item={item}/>
                ))}
            </div>
        </div>
    </>);
}
 
export default Home;