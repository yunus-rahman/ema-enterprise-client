'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';

const UnitName = () => {
    const [unitName, setUnitName] = useState('');

    // add unit
    const handleAddUnit = (e) => {
        e.preventDefault();
        const newUnit = unitName;
        console.log(newUnit)
    }
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
                        onChange={(e) => setUnitName(e.target.value)}
                        content='' className="p-3 border rounded-md max-w-xs" />

                    {/* Button */}
                    <Button
                        disabled={!unitName}
                        className="p-3  bg-teal-500 text-white rounded-md hover:bg-teal-600">
                        Add
                    </Button>
                </form>
            </div>
            {/* Show Units */}
            <div >

            </div>
        </section>
    );
};

export default UnitName;