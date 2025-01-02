'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React, { useState } from 'react';
import { useAddUnitName, useGetUnitName } from './api/route';
import UnitTable from '@/components/Admin-Dashboard/Units/UnitTable';

const UnitName = () => {
    const { data: units = [], isLoading, isError, error } = useGetUnitName();
    const addUnit = useAddUnitName()
    const [newUnitName, setNewUnitName] = useState('');

    // add unit
    const handleAddUnit = async (e) => {
        e.preventDefault();
        const unit_name = newUnitName;
        console.log(unit_name)
        await addUnit.mutateAsync(unit_name as string)
    }
    if (isLoading) {
        return <p>LOading</p>
    }
    // console.log(data)
    return (
        <section className="border-gray-400 border-2 bg-gray-200 text-gray-800 rounded-lg p-6 shadow-lg">
            {/* Heading */}
            <div className="text-center">
                <h2 className="text-3xl font-bold text-black">Manage Unit</h2>
                <p className="text-base font-medium text-gray-600">Create,Edit,Remove units</p>
            </div>
            {/* Add a unit */}
            <div className='flex justify-center my-8'>
                <form
                    onSubmit={handleAddUnit}
                    className="bg-white p-5 rounded-md inline-flex space-x-4">
                    {/* Input Field */}
                    <Input
                        id='unit_name'
                        onChange={(e) => setNewUnitName(e.target.value)}
                        content='' className="p-3 border rounded-md max-w-xs" />

                    {/* Button */}
                    <Button
                        disabled={!newUnitName}
                        className="p-3  bg-teal-500 text-white rounded-md hover:bg-teal-600">
                        Add
                    </Button>
                </form>
            </div>
            {/* Show Units */}
            <div >
                <Table >
                    <TableHeader>
                        <TableRow className="text-center">
                            <TableHead className="w-[50px]">#</TableHead>
                            <TableHead>Unit Name</TableHead>
                            <TableHead>Date&Created By</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    {/* Table Body */}
                    <TableBody>
                        {units?.map((unit, index) => (
                            <UnitTable
                                key={unit._id}
                                unit={unit}
                                idx={index}
                            />


                        ))}
                    </TableBody>
                </Table>
            </div>
        </section>
    );
};

export default UnitName;