import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Orders from "./pages/Orders";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout></MainLayout>}>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route
                    path="/shop"
                    element={<Shop></Shop>}
                    loader={async () => fetch("tshirts.json")}></Route>
                <Route path="/orders" element={<Orders></Orders>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
                <Route path="*" element={<div>404 Not Found</div>}></Route>
            </Route>
        )
    );
    return (
        <div className="App flex flex-col justify-between">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
