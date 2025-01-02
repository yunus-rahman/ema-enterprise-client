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

const AddProduct = () => {
    const { data: units = [], isLoading, isError, error } = useGetUnitName();
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
                <form className="space-y-3">
                    {/* row 1 */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="product_name">Product Name</Label>
                            <Input
                                className="bg-white"
                                type="text" id="product_name" placeholder="Product name" />
                        </div>
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="picture">Product Picture</Label>
                            <Input className="bg-white" id="picture" type="file" />
                        </div>
                    </div>
                    {/* Row 2*/}
                    <div className="grid md:grid-cols-3 gap-4">

                        <div className="grid w-full  items-center gap-1.5">
                            <Label htmlFor="product_name">Unit Name</Label>
                            <Select
                            // onValueChange={(value) => {
                            //     setLesson(value); setValue("lesson_no", value, { shouldValidate: true });
                            // }}
                            // value={lesson}
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
                                type="ac_number" id="ac_number" placeholder="Input your A/C number" />
                        </div>
                        <div className="grid w-full  items-center gap-1.5">
                            <Label htmlFor="price">Price</Label>
                            <Input
                                className="bg-white"
                                type="price" id="price" placeholder="Input Price" />
                        </div>
                    </div>
                    <div>
                        <Textarea className="bg-white" placeholder="Type your message here." />
                    </div>
                    <div className="mt-5">
                        <Button className="w-full hover:rounded-full duration-300 transition-border-radius hover:bg-teal-500 text-white">
                            Add Product
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddProduct;