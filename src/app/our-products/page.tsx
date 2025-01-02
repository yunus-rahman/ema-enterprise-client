'use client'

import ProductCard from "@/components/Admin-Dashboard/Products/ProductCard";
import { useGetAllProduct } from "../admin-dashboard/all-products/api/route";

const OurProducts = () => {
    const { data: products = [], isLoading, isError, error } = useGetAllProduct();
    if (isLoading) {
        return <p>Loading.....</p>
    }
    console.log(products);
    return (
        <section>
            {/* Heading */}
            <div className="text-center">
                <h2 className="text-3xl font-bold text-black">Our Products / আমাদের পন্য </h2>
                <p className="text-base font-medium text-gray-600">Here Is Our All Product</p>
            </div>
            {/* Product */}
            <div className="grid md:grid-cols-3 gap-3 mt-10">
                {
                    products?.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    />)
                }
            </div>
        </section>
    );
};

export default OurProducts;