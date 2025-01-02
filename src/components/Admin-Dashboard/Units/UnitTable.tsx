'use client'
import { useDeleteUnit } from "@/app/admin-dashboard/unit-name/api/route";
import { TableCell, TableRow } from "@/components/ui/table";
import { IoMdTrash } from "react-icons/io";
import Swal from "sweetalert2"
const UnitTable = ({ unit, idx }) => {
    const deleteUnit = useDeleteUnit()
    const { _id, unit_name } = unit;
    const handleDeleteUnit = (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await deleteUnit.mutateAsync(id as string)
            }
        });
    }
    return (
        <TableRow className="border-b-2 border-teal-500">
            <TableCell>{idx + 1}</TableCell>
            <TableCell className="font-medium">{unit_name}</TableCell>
            <TableCell>

            </TableCell>

            <TableCell>
                <IoMdTrash
                    onClick={() => handleDeleteUnit(_id)}
                    className="bg-red-700 p-2 rounded-full text-3xl text-white cursor-pointer" />
            </TableCell>
        </TableRow>
    );
};

export default UnitTable;