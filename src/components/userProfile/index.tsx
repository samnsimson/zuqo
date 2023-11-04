import { FC, HTMLAttributes } from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { assets } from '@/config/assets'
import {
    ApiIcon,
    ChangelogIcon,
    ChevronDown,
    CogWheelIcon,
    HomeIcon,
    InviteIcon,
    LogoutIcon,
    SupportIcon,
    ThunderBoltIcon,
    UserGroupIcon,
    ViewProfileIcon,
} from '@/assets/svg/icons'
import { MenuDropdown, MenuGroup } from '../menuDropdown'
import { v4 as uuid } from 'uuid'

interface UserProfileProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

const menu: MenuGroup[] = [
    {
        label: null,
        menu: [
            {
                id: uuid(),
                name: 'View profile',
                type: 'link',
                link: '',
                icon: <ViewProfileIcon />,
            },
            {
                id: uuid(),
                name: 'Settings',
                type: 'link',
                link: '',
                icon: <CogWheelIcon />,
            },
            {
                id: uuid(),
                name: 'Keyboard shortcuts',
                type: 'link',
                link: '',
                icon: <ThunderBoltIcon />,
            },
        ],
    },
    {
        label: null,
        menu: [
            {
                id: uuid(),
                name: 'Zuqo Profile',
                type: 'link',
                link: '',
                icon: <HomeIcon />,
            },
            {
                id: uuid(),
                name: 'Team',
                type: 'link',
                link: '',
                icon: <UserGroupIcon />,
            },
            {
                id: uuid(),
                name: 'Invite Colleagues',
                type: 'link',
                link: '',
                icon: <InviteIcon />,
            },
        ],
    },
    {
        label: null,
        menu: [
            {
                id: uuid(),
                name: 'Changelog',
                type: 'link',
                link: '',
                icon: <ChangelogIcon />,
            },
            {
                id: uuid(),
                name: 'Support',
                type: 'link',
                link: '',
                icon: <SupportIcon />,
            },
            {
                id: uuid(),
                name: 'API',
                type: 'link',
                link: '',
                icon: <ApiIcon />,
            },
        ],
    },
    {
        label: null,
        menu: [
            {
                id: uuid(),
                name: 'Log out',
                type: 'link',
                link: '',
                icon: <LogoutIcon />,
            },
        ],
    },
]

export const UserProfile: FC<UserProfileProps> = ({ ...props }) => {
    return (
        <div {...props} className="flex items-center gap-2">
            <div>
                <div className="text-right font-jakarta text-base font-medium leading-normal text-white">John Doe</div>
                <div className="text-right font-jakarta text-sm font-medium leading-normal text-white">Administrator</div>
            </div>
            <Avatar>
                <AvatarImage src={assets.userProfileIcon} />
            </Avatar>
            <MenuDropdown menu={menu}>
                <ChevronDown />
            </MenuDropdown>
        </div>
    )
}
