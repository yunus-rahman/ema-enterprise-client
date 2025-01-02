import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import toast from "react-hot-toast";

// Add a New Product
export const useAddProduct = () => {
    return useMutation({
        mutationFn: async (newProduct: object) => {
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-product`, newProduct);
            return data;
        },
        onSuccess: (data) => {
            if (data.insertedId) {
                toast.success('Product Added Successfully')
            }
        },
        onError: () => {
            toast.error('Product Added Failed')
        },
        mutationKey: ['add-product']
    })
}