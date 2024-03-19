

const AddProducts = () => {
    return (
        <div className="my-10 w-full">
            <h1 className="text-4xl text-center font-bold mb-10 text-cyan-600 ">Add Product</h1>
           
            <div className="w-3/4 mx-auto">
                <form>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl text-cyan-600">Product Name</span>
                        </label>
                        <input type="text" placeholder="Product Name" className="input input-bordered " />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl text-cyan-600">Product Price</span>
                        </label>
                        <input type="text" placeholder="Price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl text-cyan-600">Product Seller</span>
                        </label>
                        <input type="text" placeholder="Seller" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl text-cyan-600">Product Stock</span>
                        </label>
                        <input type="text" placeholder="Stock" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl text-cyan-600">Product Quantity</span>
                        </label>
                        <input type="text" placeholder="Quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn px-10 py-2 bg-cyan-600 text-white text-xl">Submit</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddProducts;