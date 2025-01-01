'use client'

import { Sidebar, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { useSidebar } from "@/components/ui/sidebar"
import Link from "next/link";
// import  Link  from "next/navigation";
const Layout = ({ children }) => {

    return (
        <SidebarProvider className="grid grid-cols-12 min-h-screen gap-4">

            {/* Sidebar */}
            <aside
                className="p-5 hidden md:block md:col-span-2 bg-teal-500 text-white shadow-lg
      "
            >


                <div className="space-y-3">
                    <div>
                        <h5>Product Management</h5>
                    </div>
                    <Link
                        className="border-2 border-white w-full text-center py-2 rounded-md block"
                        href="/admin-dashboard/add-product">Add Products</Link>
                    <Link
                        className="border-2 border-white w-full text-center py-2 rounded-md block"
                        href="/admin-dashboard/all-products">All Products</Link>

                </div>
                {/* Order Management */}
                <div className="mt-5">
                    <div>
                        <h5>Order Management</h5>
                    </div>
                </div>
                {/* Other tools management */}
                <div className="mt-5 space-y-3">
                    <div>
                        <h5>Orders Tools</h5>
                    </div>
                    <Link
                        className="border-2 border-white w-full text-center py-2 rounded-md block"
                        href="/admin-dashboard/unit-name">Unit Name</Link>
                </div>

            </aside>

            {/* Main Content */}
            <div className="bg-gray-100 w-full col-span-10 p-5">
                {/* Sidebar trigger for mobile */}
                <SidebarTrigger className="z-50 bg-gray-900 text-white rounded-lg md:hidden">

                </SidebarTrigger>
                {children}
            </div>

        </SidebarProvider>



    );
};

export default Layout;
