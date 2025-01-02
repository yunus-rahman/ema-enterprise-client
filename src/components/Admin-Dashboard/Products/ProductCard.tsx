import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";


const ProductCard = ({ product }) => {
    const { product_name, product_image,quantity,unit_name } = product
    return (
        <Card className="w-full max-w-sm mx-auto overflow-hidden transition-all duration-300 hover:shadow-lg bg-gray-400 p-3">
            <Image
                src={product_image}
                alt="Card image"
                width={400}
                height={200}
                className="w-full object-cover rounded-md h-48"
            />
            <CardHeader className="p-4">
                <CardTitle className="text-xl font-semibold text-gray-900">{product_name}</CardTitle>
                <CardDescription className="mt-2 text-sm text-gray-600">{quantity} {unit_name}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
                <p className="text-gray-700">
                    Here's some additional content for the card. You can add more details or information here.
                </p>
            </CardContent>
            <CardFooter className="p-4">
                <Button className="w-full">Learn More</Button>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;