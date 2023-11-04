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
import { DragAndDrop } from '../dragAndDrop'

interface MenuLinkType {
    type: 'link'
    link: string
}

interface MenuActionType {
    type: 'action'
    action: () => void
}

interface MenuDragAndDropType {
    type: 'dragable'
}

type Menu = {
    id: string | number
    name: string
    icon: ReactNode
} & (MenuLinkType | MenuActionType | MenuDragAndDropType)

export interface MenuGroup {
    label: string | null
    menu: Array<Menu>
}

interface MenuDropdownProps extends DropdownMenuProps {
    menu: Array<MenuGroup>
    side?: 'top' | 'left' | 'right' | 'bottom'
}

const MenuItem: FC<{ m: { id: string | number; name: string; icon: ReactNode } }> = ({ m }) => {
    return (
        <DropdownMenuItem className="px-4 py-2.5">
            <ul className="flex items-center gap-3">
                <li>{m.icon}</li>
                <li>{m.name}</li>
            </ul>
        </DropdownMenuItem>
    )
}

export const MenuDropdown: FC<MenuDropdownProps> = ({ children, menu, side = 'bottom', ...props }) => {
    return (
        <DropdownMenu {...props}>
            <DropdownMenuTrigger onClick={() => console.log(menu)}>{children}</DropdownMenuTrigger>
            <DropdownMenuContent side={side}>
                {menu.map((mg, key) => {
                    return (
                        <div key={key} className="dropdown-menu border-b-[1px] border-gray-200 py-2 last:border-b-0">
                            {mg.label && (
                                <Fragment>
                                    <DropdownMenuLabel>{mg.label}</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                </Fragment>
                            )}
                            {mg.menu.map((m, key) => {
                                if ('link' in m) {
                                    return (
                                        <Link to={m.link ?? '#'} key={key}>
                                            <MenuItem m={m} />
                                        </Link>
                                    )
                                } else if ('action' in m) {
                                    return (
                                        <div className="cursor-pointer" onClick={m.action}>
                                            <MenuItem m={m} />
                                        </div>
                                    )
                                } else if ('dragable' in m) {
                                    return (
                                        <DragAndDrop>
                                            <MenuItem m={m} />
                                        </DragAndDrop>
                                    )
                                } else {
                                    return null
                                }
                            })}
                        </div>
                    )
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
