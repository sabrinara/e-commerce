import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="h-screen w-40 ">
            {/* Sidebar content */}
            <div className="p-4 ">
               
                <ul className="mt-4 ">
                    <li className="my-4">
                        <Link to="dashboard/addCustomer" className=" px-2 py-2 hover:bg-cyan-500 rounded">Add Customer</Link>
                    </li>
                    <li className="my-4">
                       <Link to="dashboard/addProducts" className=" px-2 py-2 hover:bg-cyan-500 rounded">Add Product</Link>
                    </li>
                    <li className="my-4">
                       <Link to="dashboard/customerList" className=" px-2 py-2 hover:bg-cyan-500 rounded">All Customer</Link>
                    </li>
                    <li className="my-4">
                        <Link to="dashboard/productList" className=" px-2 py-2 hover:bg-cyan-500 rounded">All Products</Link>
                    </li>
                    <li className="my-4">
                        <Link to="dashboard/orderList" className=" px-2 py-2 hover:bg-cyan-500 rounded">All Order</Link>
                        
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;
