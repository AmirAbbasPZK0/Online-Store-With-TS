import ReactDOM from 'react-dom/client'
import App from './App'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import { Provider } from 'react-redux'
import { store } from './reducers/store'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Cart from './components/Cart/Cart'


const router = createBrowserRouter([
    {
        element : <App/>,
        path : "/",
        errorElement : <div>Error 404</div>,
        children : [
            {
                element : <Home/>,
                path : "/",
                errorElement : <div>Sorry Mate!</div>
            },
            {
                element : <Register/>,
                path : "/register",
                errorElement : <div>Register Failed</div>
            },
            {
                element : <ProductDetails/>,
                path : "/products/:id",
                errorElement : <div>Failed to find Product</div>
            },
            {
                element : <Cart/>,
                path : "/cart"
            }
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)


root.render(<>
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
</>)