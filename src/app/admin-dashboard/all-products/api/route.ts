import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// Use Get Product
export const useGetAllProduct = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryFn: async () => {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-product`)
            return data;
        },
        queryKey: ['all-product']

    })
    return { data, isLoading, isError, error }
}