import { useLoaderData, useParams } from "react-router-dom";


const ProductDetails = () => {
    const products = useLoaderData();
    const { id } = useParams();
    const product = products.find(product => product.id === id);
    const {name, category, img, price, ratings, ratingsCount, stock, quantity, seller } = product || {};
    return (
        <div>
           <h1>{name}</h1>
           <img src={img} alt="" />
        </div>
    );
};

export default ProductDetails;