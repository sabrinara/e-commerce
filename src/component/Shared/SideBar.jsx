import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="  ">
            {/* Sidebar content */}
            <div className="p-4 hidden md:flex h-screen w-40 shadow-slate-400 shadow-xl">
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
            {/* Sidebar content */}
            < div className="dropdown md:hidden ">
                    <label tabIndex={0} className="btn md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-cyan-50 rounded w-52">
                    <li className="my-2">
                        <Link to="dashboard/addCustomer" className=" px-2 py-2 hover:bg-cyan-500 rounded">Add Customer</Link>
                    </li>
                    <li className="my-2">
                       <Link to="dashboard/addProducts" className=" px-2 py-2 hover:bg-cyan-500 rounded">Add Product</Link>
                    </li>
                    <li className="my-2">
                       <Link to="dashboard/customerList" className=" px-2 py-2 hover:bg-cyan-500 rounded">All Customer</Link>
                    </li>
                    <li className="my-2">
                        <Link to="dashboard/productList" className=" px-2 py-2 hover:bg-cyan-500 rounded">All Products</Link>
                    </li>
                    <li className="my-2">
                        <Link to="dashboard/orderList" className=" px-2 py-2 hover:bg-cyan-500 rounded">All Order</Link>
                        
                    </li>
                    </ul>
                </div>

        </div>
    );
};

export default SideBar;
