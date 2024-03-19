import { useEffect, useState } from 'react';
import axios from 'axios';
import { IoPeopleSharp } from "react-icons/io5";
import { BsBoxSeamFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('/products.json')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    })
    const length = products.length;
    return (
        <div>
            <h1 className='text-4xl my-4 text-center md:mr-20 text-cyan-600 font-bold '>Admin Dashboard</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div className='bg-violet-100 p-6 rounded mt-5'>
                    <p className='text-3xl font-bold text-violet-600'>  <IoPeopleSharp className='inline' /> Total Customers :</p>
                </div>
                <div className='bg-rose-100 p-6 rounded mt-5'>
                    <p className='text-3xl font-bold text-rose-600'> <BsBoxSeamFill className='inline' /> Total Products : {length}</p>
                </div>
                <div className='bg-yellow-100 p-6 rounded mt-5'>
                    <p className='text-3xl font-bold text-yellow-600'> <FaCartShopping className='inline' /> Total Orders : </p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;