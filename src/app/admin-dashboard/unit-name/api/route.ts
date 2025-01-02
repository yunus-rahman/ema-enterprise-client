import { useMutation, useQuery } from "@tanstack/react-query"
import axios from 'axios'
import toast from 'react-hot-toast';
import Swal from "sweetalert2";
// Get All Uni Name
export const useGetUnitName = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryFn: async () => {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-unit`)
            return data;
        },
        queryKey: ['all-unit']

    })
    return { data, isLoading, isError, error }
}
// Add a Unit Name
export const useAddUnitName = () => {
    return useMutation({
        mutationFn: async (unit_name: string) => {
            console.log(unit_name, 'inside tanstack')
            const { data } = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-unit`, { unit_name })
            return data;
        },
        onSuccess: (data) => {
            if (data.insertedId) {
                console.log(data)
                toast.success('unit Added')
            }

        },
        onError: () => {
            toast.error('Unit Add operation failed')
        },
        mutationKey: ['add-unit']
    })
}
// Delete
export const useDeleteUnit = () => {
    return useMutation({
        mutationFn: async (id: string) => {
            const { data } = await axios.delete(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-unit/${id}`)
            return data;
        },
        onSuccess: (data) => {
            console.log(data)
            if (data.deletedCount > 0) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }

        },
        onError: () => {
            toast.error('Delete operation failed')
        },
        mutationKey: ['add-unit']
    })
}