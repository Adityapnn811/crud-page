import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Image from "next/dist/client/image";

const sideBarItems = [
    {
        href: "/",
        text: "Home"
    },
    {
        href: "/add",
        text: "Add User"
    },
    {
        href: "/update",
        text: "Update User"
    },
    {
        href: "/delete",
        text: "Delete User"
    },
]

export default function Layout({ children }){
    const router = useRouter();
    return(
        <div className="flex flex-1 flex-row bg-primary font-sans text-white h-screen">
            <div className="flex w-60">
                <aside className="bg-secondary w-60 fixed h-full">
                    <nav className="flex flex-1 h-full w-full items-center">
                        <ul className="grid grid-rows-4 content-between align-center w-full h-1/2">
                        {sideBarItems.map(({ href, text }) => (
                            <li key={text} className={`hover:bg-primary ${router.asPath === href && 'bg-primary'}`}>
                            <Link href={href}>
                                <a
                                className={"flex flex-1 h-full content-between justify-center p-2 rounded cursor-pointer hover:bg-primary"}
                                >
                                    <p className="text-center self-center align-center h-fit">{text}</p>
                                </a>
                            </Link>
                            </li>
                        ))}
                        </ul>
                    </nav>
                </aside>
            </div>
            <div className="flex flex-1">
                <main className="h-full flex-1 flex">
                    {children}
                </main>
            </div>
            
        </div>
    )
}

