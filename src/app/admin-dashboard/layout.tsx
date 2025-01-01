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


                <div>
                    <Link href="/admin-dashboard/all-products">All Products</Link>
                </div>

            </aside>

            {/* Main Content */}
            <div className="bg-gray-100 w-full col-span-10">
                {/* Sidebar trigger for mobile */}
                <SidebarTrigger className="z-50 bg-gray-900 text-white rounded-lg md:hidden">

                </SidebarTrigger>
                {children}
            </div>

        </SidebarProvider>



    );
};

export default Layout;
