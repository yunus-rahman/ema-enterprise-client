/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lJwnQlHSEBA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import logo from "../../../public/logo.png"
// NavItems
const NavItems = [
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
]
export default function Component() {
    return (
        <header className="flex h-20 w-full justify-between items-center px-4 md:px-6 border-b-2 shadow-lg bg-background text-[#DDB184]">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="lg:hidden">
                        <MenuIcon className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
                        {/* <MountainIcon className="h-6 w-6" /> */}
                        <Image src={logo} alt='logo' height={50} width={50} />
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                    <div className="grid gap-2 py-6">
                        <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                            Home
                        </Link>
                        <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                            About
                        </Link>
                        <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                            Services
                        </Link>
                        <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                            Contact
                        </Link>
                    </div>
                </SheetContent>
            </Sheet>
            {/* For lg device */}
            <Link href="/" className="mr-6 hidden lg:flex items-center gap-2" prefetch={false}>
                <Image src={logo} alt='logo' height={50} width={50} className="rounded-full" />
                <span className="sr-only">Acme Inc</span>
                <h2 className="text-lg font-semibold">Ema-Enterprise</h2>
            </Link>

            <nav className="hidden lg:flex justify-start gap-6">

                {
                    NavItems.map(item => <Link
                        key={item.path}
                        href={item.path}
                        className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                        prefetch={false}
                    >
                        {item.title}
                    </Link>)
                }
            </nav>
            <nav >
                <Link href='/login'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </Link>

            </nav>

        </header>
    )
}

function MenuIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}


