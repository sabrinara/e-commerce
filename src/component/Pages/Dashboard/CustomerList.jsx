

const CustomerList = () => {
    return (
        <div>
            <h1 className='text-4xl my-4 text-center md:mr-20 text-cyan-600 font-bold '>Customer List</h1>
            <table className="table w-full">
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
            </table>
        </div>
    );
};

export default CustomerList;