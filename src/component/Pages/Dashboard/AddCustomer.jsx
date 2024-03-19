

const AddCustomer = () => {
    return (
        <div className="my-10 w-full">
            <h1 className="text-4xl text-center font-bold mb-10 text-cyan-600 ">Add Customer</h1>
           
            <div className="w-3/4 mx-auto">
                <form>
                    <div className="form-control">
                        <label className="label ">
                            <span className="label-text text-cyan-600 text-xl">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-cyan-600 text-xl">Email</span>
                        </label>
                        <input type="text" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-cyan-600 text-xl">Address</span>
                        </label>
                        <input type="text" placeholder="Address" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-cyan-600 text-xl">Phone</span>
                        </label>
                        <input type="text" placeholder="Phone" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn px-10 py-2 bg-cyan-600 text-white text-xl">Submit</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddCustomer;