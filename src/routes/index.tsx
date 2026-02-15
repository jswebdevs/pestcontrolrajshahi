import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";

const index = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <h2>404 Not Found</h2>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <h2>About</h2>
            },
            {
                path: "/contact",
                element: <h2>Contact</h2>
            }
        ]
    }
])

export default index;