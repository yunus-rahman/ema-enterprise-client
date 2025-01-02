'use client'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React from 'react';
import { useGetAllProduct } from './api/route';
import ProductsTable from '@/components/Admin-Dashboard/Products/ProductsTable';

const AllProduct = () => {
    const { data: products = [], isLoading, isError, error } = useGetAllProduct();
    if (isLoading) {
        return <p>Loading.....</p>
    }
    console.log(products)
    return (
        <section className="border-gray-400 border-2 bg-gray-200 text-gray-800 rounded-lg p-6 shadow-lg">
            {/* Heading */}
            <div className="text-center">
                <h2 className="text-3xl font-bold text-black">All Product</h2>
                <p className="text-base font-medium text-gray-600">Here is Your All Product List</p>
            </div>
            {/* Table */}
            <div className='mt-5'>
                <Table >
                    <TableHeader>
                        <TableRow className="text-center">
                            <TableHead className="w-[50px]">#</TableHead>
                            <TableHead>Image</TableHead>
                            <TableHead>A/C Number</TableHead>
                            <TableHead>Product Name</TableHead>
                            <TableHead>Unit</TableHead>
                            <TableHead>Quantity</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Create Info</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    {/* Table Body */}
                    <TableBody>
                        {products?.map((product, index) => (
                            <ProductsTable
                                key={product._id}
                                product={product}
                                idx={index}
                            />


                        ))}
                    </TableBody>
                </Table>
            </div>
        </section>
    );
};

export default AllProduct;