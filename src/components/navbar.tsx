import { FC, ReactNode } from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import { Link } from 'react-router-dom'

export interface NavbarLinkProps {
    name: ReactNode | string
    path?: string
    icon?: string
    description?: string
    children?: NavbarLinkProps[]
}

export interface NavbarProps {
    links: NavbarLinkProps[]
}

export const Navbar: FC<NavbarProps> = ({ links }) => {
    return (
        <NavigationMenu>
            <NavigationMenuList className="flex gap-12">
                {links &&
                    links.map((link, key) => (
                        <div className="flex gap-[7px]" key={key}>
                            {link.icon && <img src={link.icon} />}
                            <NavigationMenuItem key={key}>
                                {link.children?.length ? (
                                    <div key={key}>
                                        <NavigationMenuTrigger className="bg-transparent font-jakarta hover:bg-transparent hover:text-white focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                                            {link.name}
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-full min-w-[310px] items-center">
                                                {link.children?.map((child, key) => (
                                                    <li
                                                        key={key}
                                                        className="border-b-[1px] border-gray-200 px-2.5 py-4 font-jakarta font-semibold last:border-0"
                                                    >
                                                        <Link to={child.path ? child.path : ''} className="grid w-full gap-[6px]">
                                                            <div className="flex gap-[18px]">
                                                                {child.icon && <img src={child.icon} />}
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
