'use client'
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lJwnQlHSEBA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import Image from "next/image";
import logo from "../../../public/logo.webp";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { AuthContext } from "@/provider/AuthProvider"
import { useContext } from "react";
// NavItems
const navItems = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'Our Products',
        path: '/our-products',
    },
    {
        title: 'Contact',
        path: '/contact',
    },
    {
        title: 'Admin-dashboard',
        path: '/admin-dashboard',
    },
]
export default function Navbar() {
    const pathname = usePathname();
    const { user, logOut } = useContext(AuthContext)
    console.log(user)
    return (
        <header className="flex h-20 w-full items-center px-4 md:px-6 shadow-2xl border-b-2 bg-teal-500">
            {/* Mobile Menu Icon */}
            <div className="lg:hidden mr-4">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon">
                            <MenuIcon />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <div className="grid gap-2 py-6">
                            {navItems.map((item, index) => {

                                return (
                                    <Link
                                        key={index}
                                        href={item.path}
                                        className={`flex w-full items-center py-2 text-lg font-semibold text-white ${pathname === item.path ? 'underline shadow-2xl' : ''}`}
                                        prefetch={false}
                                    >
                                        {item.title}
                                    </Link>
                                );
                            })}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Logo */}
            <Link href="/" className="flex items-center" prefetch={false}>
                <MountainIcon />
                <span className="ml-2 text-lg text-white hidden lg:block">Ema-EnterPrise</span>
            </Link>

            {/* Desktop Navigation Menu */}
            <div className="hidden lg:flex flex-grow justify-end mr-4">
                <NavigationMenu>
                    <NavigationMenuList className="flex space-x-3">
                        {navItems.map((item, index) => {

                            return (
                                <NavigationMenuLink asChild key={index}>
                                    <Link
                                        href={item.path}
                                        className={`group text-white font-bold text-base ${pathname === item.path ? 'underline shadow-2xl' : ''}`}
                                        prefetch={false}
                                    >
                                        {item.title}
                                    </Link>
                                </NavigationMenuLink>
                            );
                        })}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            {/* Login/Register Buttons */}
            {user ? (
                <div className="ml-auto flex items-center">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Avatar>
                                <AvatarImage src={user?.photoURL || undefined} alt="avatar" />
                                <AvatarFallback />
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {/* <DropdownMenuLabel>{user?.user_name}</DropdownMenuLabel> */}
                            <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
                            <DropdownMenuLabel onClick={logOut}>LogOut</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            ) : (
                <div className="ml-auto flex items-center">
                    <Link className="mx-2 text-white" href="/register">Register</Link>
                    <Link href="/login">
                        <Button variant="default" className="rounded-full">Login</Button>
                    </Link>
                </div>
            )}
        </header>
    )
}

function MenuIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
    );
}
function MountainIcon() {
    return <Image className="rounded-full" src={logo} alt="Logo" height={40} width={40} />;
}


