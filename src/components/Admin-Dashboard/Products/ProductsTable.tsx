import { TableCell, TableRow } from "@/components/ui/table";
import { IoMdTrash } from "react-icons/io";


const ProductsTable = ({ product, idx }) => {

    const { ac_number, product_name, unit_name, quantity, price, CreateAt } = product;
    const createDate = new Date(CreateAt).toLocaleString()
    return (
        <TableRow className="border-b-2 border-teal-500">
            <TableCell>{idx + 1}</TableCell>
            <TableCell className="font-medium"></TableCell>
            <TableCell>
                {ac_number}
            </TableCell>
            <TableCell>
                {product_name}
            </TableCell>
            <TableCell>
                {unit_name}
            </TableCell>
            <TableCell>
                {quantity}
            </TableCell>
            <TableCell>
                {price}
            </TableCell>
            <TableCell>
                {createDate}
            </TableCell>

            <TableCell className="flex gap-2">
                <IoMdTrash
                    // onClick={() => handleDeleteUnit(_id)}
                    className="bg-red-700 p-2 rounded-full text-3xl text-white cursor-pointer" />
                <IoMdTrash
                    // onClick={() => handleDeleteUnit(_id)}
                    className="bg-red-700 p-2 rounded-full text-3xl text-white cursor-pointer" />
                <IoMdTrash
                    // onClick={() => handleDeleteUnit(_id)}
                    className="bg-red-700 p-2 rounded-full text-3xl text-white cursor-pointer" />
            </TableCell>
        </TableRow>
    );
};

export default ProductsTable;