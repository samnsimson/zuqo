import { FC, HTMLAttributes, ReactNode, useEffect, useState } from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/ui/navigation-menu'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

export interface NavbarLinkProps {
    label: string
    name: ReactNode | string
    path?: string
    icon?: (props: IconProps) => ReactNode
    description?: string
    children?: NavbarLinkProps[]
}

export interface NavbarProps extends HTMLAttributes<HTMLDivElement> {
    links: NavbarLinkProps[]
}

interface IconProps {
    strokeColor: string
}

export const Navbar: FC<NavbarProps> = ({ links, className }) => {
    const location = useLocation()
    const [activeMenu, setActiveMenu] = useState(() => (links.length ? links[0] : null))

    useEffect(() => {
        const targetNav = links.flatMap((child) => child.children).find((child) => child?.path === location.pathname)
        targetNav && setActiveMenu(targetNav)
    }, [links, location])

    return (
        <NavigationMenu className={cn('', className)}>
            <NavigationMenuList className="flex gap-12">
                {links &&
                    links.map((link, key) => (
                        <div className="flex items-center gap-[7px]" key={key}>
                            {activeMenu && activeMenu.icon && activeMenu.icon({ strokeColor: '#fff' })}
                            <NavigationMenuItem key={key}>
                                {link.children?.length ? (
                                    <div key={key}>
                                        <NavigationMenuTrigger className="bg-transparent px-0 font-jakarta hover:bg-transparent hover:text-white focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                                            {activeMenu && activeMenu.label}
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-full min-w-[310px] items-center">
                                                {link.children?.map((child, key) => (
                                                    <li
                                                        key={key}
                                                        className="border-b-[1px] border-gray-200 px-2.5 py-4 font-jakarta font-semibold last:border-0"
                                                    >
                                                        <Link
                                                            to={child.path ? child.path : ''}
                                                            className="grid w-full gap-[6px]"
                                                            onClick={() => setActiveMenu(child)}
                                                        >
                                                            <div className="flex items-center gap-[18px]">
                                                                {child.icon && child.icon({ strokeColor: '#00539F' })}
                                                                <p>{child.name}</p>
                                                            </div>
                                                            <p className="text-sm font-thin text-gray-500">{child.description}</p>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </div>
                                ) : (
                                    <Link to={link['path'] ? link.path : ''} className="font-inter font-normal text-white">
                                        {link.name}
                                    </Link>
                                )}
                            </NavigationMenuItem>
                        </div>
                    ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}
