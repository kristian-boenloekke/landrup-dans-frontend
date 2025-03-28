import { getCurrentUser } from "@/actions/getCurrentUser"
import DrawerNav from "./DrawerNav"
// import { usePathname } from "next/navigation"
// import Link from "next/link"
// import { Calendar, Home, LogIn, Search } from "lucide-react"
// import { useCookies } from "react-cookie"

export default async function Drawer() {
    // const [cookies, setCookie, removeCookie] = useCookies(['dans_token', 'dans_uid'])
    // const pathname = usePathname()
    const user = await getCurrentUser()


    return (
        <aside>
            <DrawerNav user={user} />  
            {/* <nav className="top-shadow rounded-t bg-white text-black fixed bottom-0 w-full" >
                <ul className="flex justify-between p-4 px-6">
                    <li className={`rounded-full border-black border-2  p-2 ${pathname === '/' ? ' text-purple shadow shadow-purple border-purple' : ''}`}>
                        <Link href='/' prefetch >
                            <Home />
                        </Link>
                    </li>
                    <li className={`rounded-full border-black border-2  p-2 ${pathname === '/search' ? ' text-purple shadow shadow-purple border-purple' : ''}`}>
                        <Link href='/search' prefetch >
                            <Search />
                        </Link>
                    </li>
                    <li className={`rounded-full border-black border-2  p-2 ${pathname === '/calendar' ? ' text-purple shadow shadow-purple border-purple' : ''}`}>
                        {cookies ?
                            <Link href='/calendar' prefetch>
                                <Calendar />
                            </Link>
                            :
                            <Link href='/login' prefetch>
                                <LogIn />
                            </Link>
                        }
                    </li>
                </ul>
            </nav> */}
        </aside>
    )
}