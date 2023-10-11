import { FC, Fragment, ReactNode } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { DropdownMenuProps } from '@radix-ui/react-dropdown-menu'
import { Link } from 'react-router-dom'

interface Menu {
    id: string | number
    name: string
    link: string
    icon: ReactNode
}

export interface MenuGroup {
    label: string | null
    menu: Array<Menu>
}

interface MenuDropdownProps extends DropdownMenuProps {
    menu: Array<MenuGroup>
}

export const MenuDropdown: FC<MenuDropdownProps> = ({ children, menu, ...props }) => {
    return (
        <DropdownMenu {...props}>
            <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
            <DropdownMenuContent>
                {menu.map((mg, key) => {
                    return (
                        <div key={key} className="border-b-[1px] border-gray-200 py-2 last:border-b-0">
                            {mg.label && (
                                <Fragment>
                                    <DropdownMenuLabel>{mg.label}</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                </Fragment>
                            )}
                            {mg.menu.map((m, key) => (
                                <Link to={m.link ?? '#'} key={key}>
                                    <DropdownMenuItem key={key} className="px-4 py-2.5">
                                        <ul className="flex items-center gap-3">
                                            <li>{m.icon}</li>
                                            <li>{m.name}</li>
                                        </ul>
                                    </DropdownMenuItem>
                                </Link>
                            ))}
                        </div>
                    )
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
