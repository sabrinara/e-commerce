

const OrderList = () => {
    return (
        <div className="overflow-x-auto">
            <h1 className='text-4xl my-4 text-center md:mr-20 text-cyan-600 font-bold '>Order List</h1>
          <table className="table w-full">
            
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Order Date</th>
              <th>Order Status</th>
            </tr>

          </table>
        </div>
    );
};

export default OrderList;