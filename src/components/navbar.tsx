import { FC } from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Link } from 'react-router-dom'

export interface ILinks {
    name: string
    path: string
    children?: ILinks[]
}

interface NavbarProps {
    links: ILinks[]
}

export const Navbar: FC<NavbarProps> = ({ links }) => {
    return (
        <NavigationMenu>
            <NavigationMenuList className="flex gap-12">
                {links &&
                    links.map((link, key) => (
                        <NavigationMenuItem key={key}>
                            {link.children?.length ? (
                                <>
                                    <NavigationMenuTrigger>{link.name}</NavigationMenuTrigger>
                                    {link.children?.map((child, key) => (
                                        <NavigationMenuContent key={key}>
                                            <NavigationMenuLink>{child.name}</NavigationMenuLink>
                                        </NavigationMenuContent>
                                    ))}
                                </>
                            ) : (
                                <Link to={link.path} className="font-inter font-normal text-white">
                                    {link.name}
                                </Link>
                            )}
                        </NavigationMenuItem>
                    ))}
            </NavigationMenuList>
        </NavigationMenu>
    )
}
