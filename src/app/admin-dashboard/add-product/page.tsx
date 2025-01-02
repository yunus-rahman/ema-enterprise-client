'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea";
import { useGetUnitName } from "../unit-name/api/route";
import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useAddProduct } from "./api/route";

type Inputs = {
    product_name: string;
    product_image: File[]
    ac_number: string;
    quantity: string;
    description: string;
    price: number | string;
    unit_name: string;
}
const AddProduct = () => {
    const { data: units = [], isLoading, isError, error } = useGetUnitName();
    const addProduct = useAddProduct()
    const [unit, setUnit] = useState('');

    // React Hook Form
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (product) => {
        product.unit_name = unit;
        product.CreateAt = new Date();
        product.price = parseFloat(product.price as string)
        if (!unit) {
            return toast.error('Please provide unit name')
        }
        //    get img
        const img = { image: product.product_image[0] }
        if (!product.product_image || product.product_image.length === 0) {
            return toast.error('No image found please try again');
        }
        // post req to Image bb
        const { data: res } = await axios.post(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMG_API}`, img, {
            headers: { "content-type": "multipart/form-data" },
        });
        // get url form image bb
        const img_url = res.data.display_url;
        if (!img_url) {
            return toast.error('error form image server please try again or contact developer')
        }
        product.product_image = img_url;
        console.log(product)
        console.log(img_url)
        console.log(product)
        const res = await addProduct.mutateAsync(product);
        if (res.insertedId) {
            reset()
        }
    }


    if (isLoading) {
        return <p>..</p>
    }
    return (
        <section className="border-gray-400 border-2 bg-gray-200 text-gray-800 rounded-lg p-6 shadow-lg">
            {/* Heading */}
            <div className="text-center">
                <h2 className="text-3xl font-bold text-black">Add Product</h2>
                <p className="text-base font-medium text-gray-600">Add product to Ema-Enterprise</p>
            </div>
            {/* form */}
            <div className="mt-5">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                    {/* row 1 */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="product_name">Product Name</Label>
                            <Input
                                className="bg-white"
                                type="text" id="product_name" placeholder="Product name"
                                required
                                {...register('product_name')}
                            />
                        </div>
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="picture">Product Picture</Label>
                            <Input className="bg-white" id="picture" type="file"
                                required
                                {...register('product_image')}
                            />
                        </div>
                    </div>
                    {/* Row 2*/}
                    <div className="grid md:grid-cols-4 gap-4">

                        <div className="grid w-full  items-center gap-1.5">
                            <Label htmlFor="product_name">Unit Name</Label>
                            <Select
                                required
                                onValueChange={(value) => {
                                    setUnit(value)
                                }}
                                value={unit}
                            >
                                <SelectTrigger
                                    className="w-full mx-auto bg-white">
                                    <SelectValue
                                        placeholder="Unit"
                                    />
                                </SelectTrigger>
                                <SelectContent>
                                    {
                                        units?.map((unit) => <SelectItem
                                            value={unit.unit_name}
                                            key={unit._id}
                                        >
                                            {unit.unit_name}


                                        </SelectItem>)
                                    }
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid w-full  items-center gap-1.5">
                            <Label htmlFor="ac_number">A/C Number</Label>
                            <Input
                                className="bg-white"
                                type="ac_number" id="ac_number" placeholder="Input your A/C number"
                                required
                                {...register('ac_number')}
                            />
                        </div>
                        <div className="grid w-full  items-center gap-1.5">
                            <Label htmlFor="quantity">Quantity</Label>
                            <Input
                                className="bg-white"
                                type="quantity" id="quantity" placeholder="Input quantity"
                                required
                                {...register('quantity')}
                            />
                        </div>
                        <div className="grid w-full  items-center gap-1.5">
                            <Label htmlFor="price">Price</Label>
                            <Input
                                className="bg-white"
                                type="price" id="price" placeholder="Input Price"
                                required
                                {...register('price')}
                            />
                        </div>
                    </div>
                    <div>
                        <Textarea className="bg-white" placeholder="Type your message here."
                            required
                            {...register('description')}
                        />
                    </div>
                    <div className="mt-5">
                        <Button className="w-full hover:rounded-full duration-300 transition-all hover:bg-teal-500 text-white">
                            Add Product
                        </Button>
                    </div>
                </form>
            </div >
        </section >
    );
};

export default AddProduct;