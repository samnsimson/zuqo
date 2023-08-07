import { FC, SVGProps } from 'react'

interface ISVG extends SVGProps<SVGElement> {}

export const EmailIcon: FC<ISVG> = ({ fill = 'none' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill}>
        <g clip-path="url(#clip0_429_17043)">
            <path
                d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
                fill="#015EB0"
            />
        </g>
        <defs>
            <clipPath id="clip0_429_17043">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>
)

export const InfoIcon: FC<ISVG> = ({ fill = 'none' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill={fill}>
        <path
            d="M9.1665 14.1667H10.8332V9.16675H9.1665V14.1667ZM9.99984 1.66675C5.39984 1.66675 1.6665 5.40008 1.6665 10.0001C1.6665 14.6001 5.39984 18.3334 9.99984 18.3334C14.5998 18.3334 18.3332 14.6001 18.3332 10.0001C18.3332 5.40008 14.5998 1.66675 9.99984 1.66675ZM9.99984 16.6667C6.32484 16.6667 3.33317 13.6751 3.33317 10.0001C3.33317 6.32508 6.32484 3.33341 9.99984 3.33341C13.6748 3.33341 16.6665 6.32508 16.6665 10.0001C16.6665 13.6751 13.6748 16.6667 9.99984 16.6667ZM9.1665 7.50008H10.8332V5.83342H9.1665V7.50008Z"
            fill="#8D8686"
        />
        <path d="M9.1665 5.83325H10.8332V7.49992H9.1665V5.83325ZM9.1665 9.16659H10.8332V14.1666H9.1665V9.16659Z" fill="#8D8686" />
        <path
            d="M9.99984 1.66675C5.39984 1.66675 1.6665 5.40008 1.6665 10.0001C1.6665 14.6001 5.39984 18.3334 9.99984 18.3334C14.5998 18.3334 18.3332 14.6001 18.3332 10.0001C18.3332 5.40008 14.5998 1.66675 9.99984 1.66675ZM9.99984 16.6667C6.32484 16.6667 3.33317 13.6751 3.33317 10.0001C3.33317 6.32508 6.32484 3.33341 9.99984 3.33341C13.6748 3.33341 16.6665 6.32508 16.6665 10.0001C16.6665 13.6751 13.6748 16.6667 9.99984 16.6667Z"
            fill="#8D8686"
        />
    </svg>
)

export const ChevronRight: FC<ISVG> = ({ fill = 'none' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill={fill}>
        <g clip-path="url(#clip0_429_17105)">
            <path d="M4.32666 13.4199L5.50666 14.5999L12.1067 7.9999L5.50666 1.3999L4.32666 2.5799L9.74666 7.9999L4.32666 13.4199Z" fill="#5E5F62" />
        </g>
        <defs>
            <clipPath id="clip0_429_17105">
                <rect width="16" height="16" fill="white" />
            </clipPath>
        </defs>
    </svg>
)

export const IconGreenCheck: FC<ISVG> = ({ fill = 'none' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill={fill}>
        <g clip-path="url(#clip0_429_17100)">
            <path
                d="M4.5 0.75C2.43 0.75 0.75 2.43 0.75 4.5C0.75 6.57 2.43 8.25 4.5 8.25C6.57 8.25 8.25 6.57 8.25 4.5C8.25 2.43 6.57 0.75 4.5 0.75ZM3.75 6.375L1.875 4.5L2.40375 3.97125L3.75 5.31375L6.59625 2.4675L7.125 3L3.75 6.375Z"
                fill="#2D956F"
            />
        </g>
        <defs>
            <clipPath id="clip0_429_17100">
                <rect width="9" height="9" fill="white" />
            </clipPath>
        </defs>
    </svg>
)

export const IconYeallowCheck: FC<ISVG> = ({ fill = 'none' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill={fill}>
        <g clip-path="url(#clip0_429_17102)">
            <path
                d="M5.89875 1.125H3.10125L1.125 3.10125V5.89875L3.10125 7.875H5.89875L7.875 5.89875V3.10125L5.89875 1.125ZM6.375 5.9025L5.9025 6.375L4.5 4.9725L3.0975 6.375L2.625 5.9025L4.0275 4.5L2.625 3.0975L3.0975 2.625L4.5 4.0275L5.9025 2.625L6.375 3.0975L4.9725 4.5L6.375 5.9025Z"
                fill="#F5AD58"
            />
        </g>
        <defs>
            <clipPath id="clip0_429_17102">
                <rect width="9" height="9" fill="white" />
            </clipPath>
        </defs>
    </svg>
)
