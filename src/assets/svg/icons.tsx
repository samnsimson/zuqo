import { FC, SVGProps } from 'react'

interface ISVG extends SVGProps<SVGElement> {
    color?: string
}

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

export const AddCircle: FC<ISVG> = ({ fill = 'none' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill={fill}>
        <path
            d="M12.5001 15V12M12.5001 12V9M12.5001 12H9.50012M12.5001 12H15.5001M21.6501 12.0001C21.6501 17.0535 17.5535 21.1501 12.5001 21.1501C7.44669 21.1501 3.3501 17.0535 3.3501 12.0001C3.3501 6.94669 7.44669 2.8501 12.5001 2.8501C17.5535 2.8501 21.6501 6.94669 21.6501 12.0001Z"
            stroke="#00539F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export const PhoneCall: FC<ISVG> = ({ fill = 'none' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill}>
        <path
            d="M5.40756 12.974C4.17013 10.8771 3.35649 8.43264 3.03518 5.70916C2.89408 4.51323 3.63544 3.25377 4.89757 3.04738C5.29419 2.98252 5.78456 2.99232 6.18792 3.0287C7.87105 3.18051 8.56683 4.6661 8.93619 6.10803C9.43075 8.03869 8.82827 10.0852 7.36657 11.4397C6.76171 12.0002 6.0608 12.4721 5.40756 12.974ZM5.40756 12.974C6.72431 15.2053 8.52093 17.043 10.7149 18.4047M10.7149 18.4047C12.8789 19.7478 15.4296 20.6276 18.2876 20.965C19.4837 21.1062 20.7426 20.3643 20.9489 19.1022C21.0197 18.6693 21.0113 18.1714 20.9597 17.7362C20.7502 15.9658 19.0457 15.2967 17.5247 14.9479C15.7915 14.5505 13.9736 15.0271 12.6581 16.2238C11.9441 16.8733 11.3468 17.6768 10.7149 18.4047Z"
            stroke="#303A47"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export const EditIcon: FC<ISVG> = ({ fill = 'none' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill}>
        <path
            d="M20 14C20 16.8003 20 18.2004 19.455 19.27C18.9757 20.2108 18.2108 20.9757 17.27 21.455C16.2004 22 14.8003 22 12 22H10C7.19974 22 5.79961 22 4.73005 21.455C3.78924 20.9757 3.02433 20.2108 2.54497 19.27C2 18.2004 2 16.8003 2 14V12C2 9.19974 2 7.79961 2.54497 6.73005C3.02433 5.78924 3.78924 5.02433 4.73005 4.54497C5.79961 4 7.19974 4 10 4M8.06156 13.5015C8.07022 13.1508 8.07455 12.9754 8.11695 12.8106C8.15455 12.6645 8.21409 12.5251 8.29353 12.397C8.38312 12.2526 8.50663 12.1285 8.75366 11.8804L18.1499 2.43082C18.6371 1.94145 19.3981 1.85945 19.9776 2.23386C20.6646 2.67773 21.2516 3.261 21.7008 3.94623C21.726 3.98471 21.7519 4.02286 21.7761 4.06196C22.1519 4.66727 22.0293 5.43321 21.536 5.92861L12.2137 15.304C11.9574 15.5614 11.8293 15.6901 11.6798 15.782C11.5472 15.8635 11.4026 15.9235 11.2514 15.9598C11.0809 16.0007 10.8997 16.0005 10.5373 15.9999L8 15.9958L8.06156 13.5015Z"
            stroke="#101828"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export const PlaySquare: FC<ISVG> = ({ fill = 'none' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill}>
        <path
            d="M3 12C3 9.20435 3 7.80653 3.45672 6.7039C4.06569 5.23373 5.23373 4.06569 6.7039 3.45672C7.80653 3 9.20435 3 12 3C14.7956 3 16.1935 3 17.2961 3.45672C18.7663 4.06569 19.9343 5.23373 20.5433 6.7039C21 7.80653 21 9.20435 21 12C21 14.7956 21 16.1935 20.5433 17.2961C19.9343 18.7663 18.7663 19.9343 17.2961 20.5433C16.1935 21 14.7956 21 12 21C9.20435 21 7.80653 21 6.7039 20.5433C5.23373 19.9343 4.06569 18.7663 3.45672 17.2961C3 16.1935 3 14.7956 3 12Z"
            stroke="#101828"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M9.5 11.896C9.5 10.4641 9.5 9.74822 9.79923 9.34853C10.06 9.00023 10.4591 8.78231 10.8931 8.75131C11.3912 8.71574 11.9934 9.10288 13.1978 9.87717L13.3596 9.98117C14.4048 10.6531 14.9273 10.989 15.1078 11.4162C15.2655 11.7894 15.2655 12.2106 15.1078 12.5838C14.9273 13.011 14.4048 13.3469 13.3596 14.0188L13.1978 14.1228C11.9934 14.8971 11.3912 15.2843 10.8931 15.2487C10.4591 15.2177 10.06 14.9998 9.79923 14.6515C9.5 14.2518 9.5 13.5359 9.5 12.104V11.896Z"
            stroke="#101828"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export const ThreeDots: FC<ISVG> = ({ fill = 'none' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill}>
        <path
            d="M12 6C11.4477 6 11 5.55228 11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5C13 5.55228 12.5523 6 12 6Z"
            stroke="#101828"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13Z"
            stroke="#101828"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12 20C11.4477 20 11 19.5523 11 19C11 18.4477 11.4477 18 12 18C12.5523 18 13 18.4477 13 19C13 19.5523 12.5523 20 12 20Z"
            stroke="#101828"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)
export const ChatBubbleIcon: FC<ISVG> = ({ fill = 'none' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill}>
        <path
            d="M16.1931 18.8658C16.336 18.8669 16.499 18.8785 16.8246 18.9018L18.7626 19.0402C19.5343 19.0953 19.9202 19.1229 20.2087 18.9861C20.462 18.866 20.666 18.662 20.7861 18.4087C20.9229 18.1202 20.8953 17.7343 20.8402 16.9626L20.7018 15.0246C20.6785 14.6989 20.6669 14.5361 20.6658 14.3931C20.6639 14.1607 20.6611 14.2438 20.6789 14.0121C20.6899 13.8695 20.7665 13.3279 20.9198 12.2445C20.9726 11.8706 21 11.4885 21 11.1C21 6.62649 17.3735 3 12.9 3C9.71965 3 6.9674 4.83291 5.64197 7.5M13.8 15.6C13.8 12.6177 11.3823 10.2 8.4 10.2C7.02324 10.2 5.76682 10.7152 4.81303 11.5634C3.70072 12.5525 3 13.9944 3 15.6C3 15.8913 3.02307 16.1772 3.06748 16.456C3.16295 17.0555 3.21068 17.3552 3.21896 17.4477C3.23137 17.5865 3.23003 17.5556 3.22967 17.695C3.22944 17.7878 3.22147 17.8994 3.20553 18.1226L3.10654 19.5084C3.06979 20.0229 3.05142 20.2801 3.14262 20.4725C3.22268 20.6413 3.35867 20.7773 3.52753 20.8574C3.71989 20.9486 3.97712 20.9302 4.49158 20.8935L5.8774 20.7945C6.10057 20.7785 6.21216 20.7706 6.30504 20.7703C6.44444 20.77 6.41347 20.7686 6.55232 20.781C6.64482 20.7893 6.94471 20.8371 7.54395 20.9325C7.82276 20.9769 8.10869 21 8.4 21C10.0056 21 11.4475 20.2993 12.4366 19.187C13.2848 18.2332 13.8 16.9768 13.8 15.6Z"
            stroke="#303A47"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export const FileQuestion: FC<ISVG> = ({ fill = 'none' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill}>
        <path
            d="M20 11C20 9.34315 18.6569 8 17 8L16.4 8C16.0284 8 15.8426 8 15.6871 7.97538C14.8313 7.83983 14.1602 7.16865 14.0246 6.31287C14 6.1574 14 5.9716 14 5.6V5C14 3.34315 12.6569 2 11 2M9.84998 12.0022C10.0262 11.5014 10.3739 11.079 10.8317 10.81C11.2895 10.5409 11.8277 10.4426 12.351 10.5324C12.8743 10.6221 13.349 10.8942 13.6909 11.3004C14.0329 11.7066 14.22 12.2207 14.2192 12.7517C14.2192 14.2506 11.9709 15 11.9709 15M12 18H12.01M20 10V18C20 20.2091 18.2091 22 16 22H8C5.79086 22 4 20.2091 4 18V6C4 3.79086 5.79086 2 8 2H12C16.4183 2 20 5.58172 20 10Z"
            stroke="#303A47"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export const FilterIcon: FC<ISVG> = ({ fill = 'none' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill={fill}>
        <path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke="#344054" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

export const RefreshIcon: FC<ISVG> = ({ fill = 'none' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill}>
        <path
            d="M4 20V13H11L7.783 16.22C8.89296 17.355 10.4125 17.9964 12 18C14.5394 17.9962 16.8015 16.3942 17.648 14H17.666C17.7805 13.6746 17.8672 13.3401 17.925 13H19.937C19.4331 16.9999 16.0315 19.9999 12 20H11.99C9.86876 20.0063 7.83316 19.1637 6.337 17.66L4 20ZM6.074 11H4.062C4.56575 7.0016 7.965 4.00213 11.995 3.99995H12C14.1216 3.99316 16.1577 4.83583 17.654 6.33999L20 3.99995V11H13L16.222 7.77999C15.1109 6.64364 13.5893 6.00213 12 5.99999C9.46055 6.00374 7.19848 7.60577 6.352 9.99999H6.334C6.21856 10.3251 6.13189 10.6597 6.075 11H6.074Z"
            fill="#C61764"
        />
    </svg>
)

export const EditActionIcon: FC<ISVG> = ({ fill = 'none' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill}>
        <path
            d="M20 14C20 16.8003 20 18.2004 19.455 19.27C18.9757 20.2108 18.2108 20.9757 17.27 21.455C16.2004 22 14.8003 22 12 22H10C7.19974 22 5.79961 22 4.73005 21.455C3.78924 20.9757 3.02433 20.2108 2.54497 19.27C2 18.2004 2 16.8003 2 14V12C2 9.19974 2 7.79961 2.54497 6.73005C3.02433 5.78924 3.78924 5.02433 4.73005 4.54497C5.79961 4 7.19974 4 10 4M8.06156 13.5015C8.07022 13.1508 8.07455 12.9754 8.11695 12.8106C8.15455 12.6645 8.21409 12.5251 8.29353 12.397C8.38312 12.2526 8.50663 12.1285 8.75366 11.8804L18.1499 2.43082C18.6371 1.94145 19.3981 1.85945 19.9776 2.23386C20.6646 2.67773 21.2516 3.261 21.7008 3.94623C21.726 3.98471 21.7519 4.02286 21.7761 4.06196C22.1519 4.66727 22.0293 5.43321 21.536 5.92861L12.2137 15.304C11.9574 15.5614 11.8293 15.6901 11.6798 15.782C11.5472 15.8635 11.4026 15.9235 11.2514 15.9598C11.0809 16.0007 10.8997 16.0005 10.5373 15.9999L8 15.9958L8.06156 13.5015Z"
            stroke="#101828"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export const TestActionIcon: FC<ISVG> = ({ fill = 'none' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill}>
        <path
            d="M3 12C3 9.20435 3 7.80653 3.45672 6.7039C4.06569 5.23373 5.23373 4.06569 6.7039 3.45672C7.80653 3 9.20435 3 12 3C14.7956 3 16.1935 3 17.2961 3.45672C18.7663 4.06569 19.9343 5.23373 20.5433 6.7039C21 7.80653 21 9.20435 21 12C21 14.7956 21 16.1935 20.5433 17.2961C19.9343 18.7663 18.7663 19.9343 17.2961 20.5433C16.1935 21 14.7956 21 12 21C9.20435 21 7.80653 21 6.7039 20.5433C5.23373 19.9343 4.06569 18.7663 3.45672 17.2961C3 16.1935 3 14.7956 3 12Z"
            stroke="#101828"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M9.5 11.896C9.5 10.4641 9.5 9.74822 9.79923 9.34853C10.06 9.00023 10.4591 8.78231 10.8931 8.75131C11.3912 8.71574 11.9934 9.10288 13.1978 9.87717L13.3596 9.98117C14.4048 10.6531 14.9273 10.989 15.1078 11.4162C15.2655 11.7894 15.2655 12.2106 15.1078 12.5838C14.9273 13.011 14.4048 13.3469 13.3596 14.0188L13.1978 14.1228C11.9934 14.8971 11.3912 15.2843 10.8931 15.2487C10.4591 15.2177 10.06 14.9998 9.79923 14.6515C9.5 14.2518 9.5 13.5359 9.5 12.104V11.896Z"
            stroke="#101828"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export const MoreActionIcon: FC<ISVG> = ({ fill = 'none' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill}>
        <path
            d="M12 6C11.4477 6 11 5.55228 11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5C13 5.55228 12.5523 6 12 6Z"
            stroke="#101828"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13Z"
            stroke="#101828"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12 20C11.4477 20 11 19.5523 11 19C11 18.4477 11.4477 18 12 18C12.5523 18 13 18.4477 13 19C13 19.5523 12.5523 20 12 20Z"
            stroke="#101828"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export const IvrPhoneIcon: FC<ISVG> = ({ fill = 'none' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill}>
        <path
            d="M10 19H14M13 2C12.8708 1.9999 12.7375 2 12.6 2H11.4C11.2625 2 11.1292 1.9999 11 2M13 2C14.9767 2.00154 16.0128 2.02676 16.816 2.43597C17.5686 2.81947 18.1805 3.43139 18.564 4.18404C19 5.03968 19 6.15979 19 8.4V15.6C19 17.8402 19 18.9603 18.564 19.816C18.1805 20.5686 17.5686 21.1805 16.816 21.564C15.9603 22 14.8402 22 12.6 22H11.4C9.15979 22 8.03968 22 7.18404 21.564C6.43139 21.1805 5.81947 20.5686 5.43597 19.816C5 18.9603 5 17.8402 5 15.6V8.4C5 6.15979 5 5.03968 5.43597 4.18404C5.81947 3.43139 6.43139 2.81947 7.18404 2.43597C7.98717 2.02676 9.0233 2.00154 11 2M13 2V3H11V2"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export const ArrowRightIcon: FC<ISVG> = ({ fill = 'none' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill={fill}>
        <path
            d="M12.6413 5C14.3942 6.2963 15.9685 7.81065 17.3254 9.50473C17.4418 9.65006 17.5 9.82503 17.5 10M12.6413 15C14.3942 13.7037 15.9685 12.1893 17.3254 10.4953C17.4418 10.3499 17.5 10.175 17.5 10M17.5 10H2.5"
            stroke="#058DDA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export const BotIcon: FC<ISVG> = ({ fill = 'none' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill}>
        <path
            d="M12 2V7M12 7H10C8.13872 7 7.20808 7 6.45492 7.24472C4.93273 7.73931 3.73931 8.93273 3.24472 10.4549C3 11.2081 3 12.1387 3 14C3 15.8613 3 16.7919 3.24472 17.5451C3.73931 19.0673 4.93273 20.2607 6.45492 20.7553C7.20808 21 8.13872 21 10 21H14C15.8613 21 16.7919 21 17.5451 20.7553C19.0673 20.2607 20.2607 19.0673 20.7553 17.5451C21 16.7919 21 15.8613 21 14C21 12.1387 21 11.2081 20.7553 10.4549C20.2607 8.93273 19.0673 7.73931 17.5451 7.24472C16.7919 7 15.8613 7 14 7H12ZM9 14C8.44772 14 8 13.5523 8 13C8 12.4477 8.44772 12 9 12C9.55228 12 10 12.4477 10 13C10 13.5523 9.55228 14 9 14ZM15 14C14.4477 14 14 13.5523 14 13C14 12.4477 14.4477 12 15 12C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export const CameraIcon: FC<ISVG> = ({ fill = 'none' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill}>
        <path
            d="M2 11C2 8.19974 2 6.79961 2.54497 5.73005C3.02433 4.78924 3.78924 4.02433 4.73005 3.54497C5.79961 3 7.19974 3 10 3H14C16.8003 3 18.2004 3 19.27 3.54497C20.2108 4.02433 20.9757 4.78924 21.455 5.73005C22 6.79961 22 8.19974 22 11V13C22 15.8003 22 17.2004 21.455 18.27C20.9757 19.2108 20.2108 19.9757 19.27 20.455C18.2004 21 16.8003 21 14 21H10C7.19974 21 5.79961 21 4.73005 20.455C3.78924 19.9757 3.02433 19.2108 2.54497 18.27C2 17.2004 2 15.8003 2 13V11Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export const InboundIcon: FC<ISVG> = ({ fill = 'none' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill}>
        <path
            d="M21.9282 11H16.9231C16.4133 11 16 11.4133 16 11.9231C16 13.6224 14.6224 15 12.9231 15H11.0769C9.37759 15 8 13.6224 8 11.9231C8 11.4133 7.58672 11 7.07692 11H2.07181M21.9282 11C21.9114 10.9392 21.8918 10.8792 21.8694 10.8202C21.8139 10.6744 21.7354 10.5369 21.5784 10.2622L19.8427 7.22471C19.1716 6.05024 18.836 5.463 18.3645 5.03578C17.9473 4.65778 17.455 4.37211 16.9199 4.19743M21.9282 11C21.9482 11.0726 21.9641 11.1464 21.9758 11.2209C22 11.3751 22 11.5333 22 11.8498V12C22 14.8003 22 16.2004 21.455 17.27C20.9757 18.2108 20.2108 18.9757 19.27 19.455C18.2004 20 16.8003 20 14 20H10C7.19974 20 5.79961 20 4.73005 19.455C3.78924 18.9757 3.02433 18.2108 2.54497 17.27C2 16.2004 2 14.8003 2 12V11.8498C2 11.5333 2 11.3751 2.02421 11.2209C2.03591 11.1464 2.05181 11.0726 2.07181 11M2.07181 11C2.08856 10.9392 2.10817 10.8792 2.13061 10.8202C2.18609 10.6743 2.2646 10.5369 2.42162 10.2622L4.15731 7.22471C4.82844 6.05024 5.164 5.463 5.63552 5.03578C6.0527 4.65778 6.54497 4.37211 7.08014 4.19743M10 7.12564C10.4935 7.78364 11.066 8.37785 11.7043 8.89507C11.7906 8.96502 11.8953 9 12 9M14 7.12564C13.5065 7.78364 12.934 8.37785 12.2957 8.89507C12.2094 8.96502 12.1047 9 12 9M12 9V4"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export const OutboundIcon: FC<ISVG> = ({ fill = 'none' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill}>
        <path
            d="M21.9282 11H16.9231C16.4133 11 16 11.4133 16 11.9231C16 13.6224 14.6224 15 12.9231 15H11.0769C9.37759 15 8 13.6224 8 11.9231C8 11.4133 7.58672 11 7.07692 11H2.07181M21.9282 11C21.9114 10.9392 21.8918 10.8792 21.8694 10.8202C21.8139 10.6744 21.7354 10.5369 21.5784 10.2622L19.8427 7.22471C19.1716 6.05024 18.836 5.463 18.3645 5.03578C17.9473 4.65778 17.455 4.37211 16.9199 4.19743M21.9282 11C21.9482 11.0726 21.9641 11.1464 21.9758 11.2209C22 11.3751 22 11.5333 22 11.8498V12C22 14.8003 22 16.2004 21.455 17.27C20.9757 18.2108 20.2108 18.9757 19.27 19.455C18.2004 20 16.8003 20 14 20H10C7.19974 20 5.79961 20 4.73005 19.455C3.78924 18.9757 3.02433 18.2108 2.54497 17.27C2 16.2004 2 14.8003 2 12V11.8498C2 11.5333 2 11.3751 2.02421 11.2209C2.03591 11.1464 2.05181 11.0726 2.07181 11M2.07181 11C2.08856 10.9392 2.10817 10.8792 2.13061 10.8202C2.18609 10.6743 2.2646 10.5369 2.42162 10.2622L4.15731 7.22471C4.82844 6.05024 5.164 5.463 5.63552 5.03578C6.0527 4.65778 6.54497 4.37211 7.08014 4.19743M14 5.87436C13.5065 5.21636 12.934 4.62215 12.2957 4.10493C12.2094 4.03498 12.1047 4 12 4M10 5.87436C10.4935 5.21636 11.066 4.62215 11.7043 4.10493C11.7906 4.03498 11.8953 4 12 4M12 4V9"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export const SubtaskIcon: FC<ISVG> = ({ fill = 'none' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill}>
        <path
            d="M6 10H18C18.9319 10 19.3978 10 19.7654 9.84776C20.2554 9.64477 20.6448 9.25542 20.8478 8.76537C21 8.39782 21 7.93188 21 7C21 6.06812 21 5.60218 20.8478 5.23463C20.6448 4.74458 20.2554 4.35523 19.7654 4.15224C19.3978 4 18.9319 4 18 4H6C5.06812 4 4.60218 4 4.23463 4.15224C3.74458 4.35523 3.35523 4.74458 3.15224 5.23463C3 5.60218 3 6.06812 3 7C3 7.93188 3 8.39782 3.15224 8.76537C3.35523 9.25542 3.74458 9.64477 4.23463 9.84776C4.60218 10 5.06812 10 6 10ZM6 10L6 12C6 14.7614 8.23858 17 11 17H13M13 17C13 17.9319 13 18.3978 13.1522 18.7654C13.3552 19.2554 13.7446 19.6448 14.2346 19.8478C14.6022 20 15.0681 20 16 20H18C18.9319 20 19.3978 20 19.7654 19.8478C20.2554 19.6448 20.6448 19.2554 20.8478 18.7654C21 18.3978 21 17.9319 21 17C21 16.0681 21 15.6022 20.8478 15.2346C20.6448 14.7446 20.2554 14.3552 19.7654 14.1522C19.3978 14 18.9319 14 18 14H16C15.0681 14 14.6022 14 14.2346 14.1522C13.7446 14.3552 13.3552 14.7446 13.1522 15.2346C13 15.6022 13 16.0681 13 17Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export const StackIcon: FC<ISVG> = ({ fill = 'none' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill}>
        <path d="M21 8L12 2L3 8L12 14L21 8Z" stroke="#015EB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12L12 18L3 12" stroke="#015EB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 16L12 22L3 16" stroke="#015EB0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

export const OverviewIconAlt: FC<ISVG> = ({ fill = 'none', color = '#00539F' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill={fill}>
        <path
            d="M11.3333 2.35677C12.1303 2.81785 12.6666 3.67964 12.6666 4.66669C12.6666 5.65374 12.1303 6.51554 11.3333 6.97662M13.9999 13.8216C14.3984 13.5911 14.6666 13.1602 14.6666 12.6667C14.6666 11.6796 14.1303 10.8179 13.3333 10.3568M9.33325 4.66667C9.33325 6.13943 8.13934 7.33333 6.66659 7.33333C5.19383 7.33333 3.99992 6.13943 3.99992 4.66667C3.99992 3.19391 5.19383 2 6.66659 2C8.13934 2 9.33325 3.19391 9.33325 4.66667ZM3.99992 10H9.33325C10.806 10 11.9999 11.1939 11.9999 12.6667C11.9999 13.403 11.403 14 10.6666 14H2.66659C1.93021 14 1.33325 13.403 1.33325 12.6667C1.33325 11.1939 2.52716 10 3.99992 10Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export const InboxIcon: FC<ISVG> = ({ fill = 'none', color = '#00539F' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill={fill}>
        <path
            d="M14.6187 7.33332H11.282C10.9421 7.33332 10.6666 7.60884 10.6666 7.94871C10.6666 9.0816 9.7482 9.99999 8.6153 9.99999H7.38454C6.25164 9.99999 5.33325 9.0816 5.33325 7.94871C5.33325 7.60884 5.05773 7.33332 4.71787 7.33332H1.38113M14.6187 7.33332C14.6075 7.2928 14.5945 7.2528 14.5795 7.21347C14.5425 7.11623 14.4902 7.02461 14.3855 6.84143L13.2284 4.81646C12.781 4.03348 12.5573 3.64199 12.2429 3.35717C11.9648 3.10518 11.6366 2.91473 11.2798 2.79828C10.8766 2.66666 10.4257 2.66666 9.52388 2.66666H6.47596C5.57416 2.66666 5.12326 2.66666 4.72001 2.79828C4.36323 2.91473 4.03505 3.10518 3.75693 3.35717C3.44258 3.64199 3.21888 4.03348 2.77146 4.81646L1.61433 6.84143C1.50965 7.02462 1.45731 7.11622 1.42033 7.21347C1.40537 7.2528 1.39229 7.2928 1.38113 7.33332M14.6187 7.33332C14.632 7.38174 14.6426 7.43091 14.6504 7.48059C14.6666 7.58337 14.6666 7.68887 14.6666 7.89986V7.99999C14.6666 9.86683 14.6666 10.8003 14.3033 11.5133C13.9837 12.1405 13.4738 12.6504 12.8466 12.97C12.1335 13.3333 11.2001 13.3333 9.33325 13.3333H6.66659C4.79974 13.3333 3.86632 13.3333 3.15328 12.97C2.52608 12.6504 2.01614 12.1405 1.69656 11.5133C1.33325 10.8003 1.33325 9.86683 1.33325 7.99999V7.89986C1.33325 7.68887 1.33325 7.58337 1.34939 7.48059C1.35719 7.43091 1.36779 7.38174 1.38113 7.33332"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export const StudioIcon: FC<ISVG> = ({ fill = 'none', color = '#00539F' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill={fill}>
        <path
            d="M6.62853 2.85722C5.45415 2.66057 4.26736 2.61597 3.09779 2.72417C2.99747 2.73345 2.90872 2.77667 2.84273 2.84266M2.8573 6.62846C2.66065 5.45407 2.61605 4.26728 2.72424 3.09772C2.73352 2.99739 2.77675 2.90864 2.84273 2.84266M2.84273 2.84266L8.00008 8L8.00008 13.3333M9.37163 2.85722C10.546 2.66057 11.7328 2.61597 12.9024 2.72417C13.0027 2.73345 13.0914 2.77667 13.1574 2.84266M13.1429 6.62846C13.3395 5.45407 13.3841 4.26728 13.2759 3.09772C13.2666 2.99739 13.2234 2.90864 13.1574 2.84266M13.1574 2.84266L10.0001 6"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export const InteractionCenterIcon: FC<ISVG> = ({ fill = 'none', color = '#00539F' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill={fill}>
        <path
            d="M10.7954 12.5772C10.8907 12.5779 10.9994 12.5857 11.2164 12.6012L12.5084 12.6935C13.0229 12.7302 13.2801 12.7486 13.4725 12.6574C13.6413 12.5773 13.7773 12.4413 13.8574 12.2725C13.9486 12.0801 13.9302 11.8229 13.8935 11.3084L13.8012 10.0164C13.7857 9.79928 13.7779 9.69071 13.7772 9.59537C13.776 9.44048 13.774 9.49586 13.786 9.34143C13.7933 9.24636 13.8444 8.88525 13.9465 8.16303C13.9818 7.91376 14 7.65901 14 7.4C14 4.41766 11.5823 2 8.6 2C6.47977 2 4.64493 3.22194 3.76131 5M9.2 10.4C9.2 8.41178 7.58823 6.8 5.6 6.8C4.68216 6.8 3.84455 7.14348 3.20869 7.70892C2.46715 8.36834 2 9.32961 2 10.4C2 10.5942 2.01538 10.7848 2.04498 10.9707C2.10863 11.3703 2.14046 11.5701 2.14597 11.6318C2.15425 11.7244 2.15335 11.7037 2.15312 11.7966C2.15296 11.8586 2.14765 11.933 2.13702 12.0817L2.07103 13.0056C2.04653 13.3486 2.03428 13.5201 2.09508 13.6483C2.14845 13.7609 2.23911 13.8515 2.35169 13.9049C2.47993 13.9657 2.65142 13.9535 2.99439 13.929L3.91827 13.863C4.06705 13.8524 4.14144 13.847 4.20336 13.8469C4.2963 13.8466 4.27565 13.8458 4.36821 13.854C4.42988 13.8595 4.62981 13.8914 5.0293 13.955C5.21517 13.9846 5.40579 14 5.6 14C6.67039 14 7.63166 13.5329 8.29108 12.7913C8.85652 12.1555 9.2 11.3178 9.2 10.4Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export const AnalyticsIcon: FC<ISVG> = ({ fill = 'none', color = '#00539F' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill={fill}>
        <path d="M4 13.3333L4 9.33333M8 13.3333L8 2.66667M12 13.3333V6.66667" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

export const PlatformConfigurationIcon: FC<ISVG> = ({ fill = 'none', color = '#00539F' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill={fill}>
        <path
            d="M6.80051 2.74653C7.22121 2.33448 7.43156 2.12845 7.67316 2.05106C7.88573 1.98296 8.11427 1.98296 8.32684 2.05106C8.56844 2.12845 8.77879 2.33448 9.19949 2.74653L9.40176 2.94465C9.58366 3.12281 9.67461 3.21189 9.78011 3.27594C9.87366 3.33274 9.97536 3.37486 10.0817 3.40085C10.2016 3.43017 10.3289 3.43149 10.5835 3.43413L10.8666 3.43707C11.4554 3.44318 11.7499 3.44623 11.9754 3.56234C12.1739 3.66451 12.3355 3.82611 12.4376 4.02457C12.5538 4.25013 12.5568 4.54455 12.5629 5.1334L12.5659 5.41652C12.5685 5.67112 12.5698 5.79841 12.5991 5.91831C12.6251 6.02462 12.6672 6.12632 12.724 6.21988C12.7881 6.32538 12.8772 6.41633 13.0553 6.59822L13.2535 6.8005C13.6655 7.2212 13.8715 7.43154 13.9489 7.67314C14.017 7.88572 14.017 8.11425 13.9489 8.32683C13.8715 8.56843 13.6655 8.77877 13.2535 9.19947L13.0553 9.40175C12.8772 9.58364 12.7881 9.67459 12.724 9.78009C12.6672 9.87365 12.6251 9.97535 12.5991 10.0817C12.5698 10.2016 12.5685 10.3289 12.5659 10.5834L12.5629 10.8666C12.5568 11.4554 12.5538 11.7498 12.4376 11.9754C12.3355 12.1739 12.1739 12.3355 11.9754 12.4376C11.7499 12.5537 11.4554 12.5568 10.8666 12.5629L10.5835 12.5658C10.3289 12.5685 10.2016 12.5698 10.0817 12.5991C9.97536 12.6251 9.87366 12.6672 9.78011 12.724C9.67461 12.7881 9.58366 12.8772 9.40176 13.0553L9.19949 13.2534C8.77879 13.6655 8.56844 13.8715 8.32684 13.9489C8.11427 14.017 7.88573 14.017 7.67316 13.9489C7.43156 13.8715 7.22121 13.6655 6.80051 13.2534L6.59824 13.0553C6.41634 12.8772 6.3254 12.7881 6.21989 12.724C6.12634 12.6672 6.02464 12.6251 5.91832 12.5991C5.79843 12.5698 5.67113 12.5685 5.41654 12.5658L5.13341 12.5629C4.54457 12.5568 4.25015 12.5537 4.02459 12.4376C3.82612 12.3355 3.66452 12.1739 3.56236 11.9754C3.44625 11.7498 3.44319 11.4554 3.43708 10.8666L3.43414 10.5834C3.4315 10.3289 3.43018 10.2016 3.40087 10.0817C3.37488 9.97535 3.33275 9.87365 3.27596 9.78009C3.2119 9.67459 3.12283 9.58364 2.94467 9.40175L2.74655 9.19947C2.33449 8.77877 2.12846 8.56843 2.05107 8.32683C1.98298 8.11425 1.98298 7.88572 2.05107 7.67314C2.12846 7.43154 2.33449 7.2212 2.74655 6.8005L2.94467 6.59822C3.12283 6.41633 3.2119 6.32538 3.27596 6.21988C3.33275 6.12632 3.37488 6.02462 3.40087 5.91831C3.43018 5.79841 3.4315 5.67112 3.43414 5.41652L3.43708 5.1334C3.44319 4.54455 3.44625 4.25013 3.56236 4.02457C3.66452 3.82611 3.82612 3.66451 4.02459 3.56234C4.25015 3.44623 4.54457 3.44318 5.13341 3.43707L5.41654 3.43413C5.67113 3.43149 5.79843 3.43017 5.91832 3.40085C6.02464 3.37486 6.12634 3.33274 6.21989 3.27594C6.3254 3.21189 6.41634 3.12281 6.59824 2.94465L6.80051 2.74653Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M7.32735 8C7.32735 7.63181 7.63195 7.33333 8.00013 7.33333C8.36832 7.33333 8.67292 7.63181 8.67292 8C8.67292 8.36819 8.36832 8.66667 8.00013 8.66667C7.63195 8.66667 7.32735 8.36819 7.32735 8Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export const MenuVertical: FC<ISVG> = ({ fill = 'none', color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill}>
        <path
            d="M12 5V5.01M12 12V12.01M12 19V19.01M12 6C11.7348 6 11.4804 5.89464 11.2929 5.70711C11.1054 5.51957 11 5.26522 11 5C11 4.73478 11.1054 4.48043 11.2929 4.29289C11.4804 4.10536 11.7348 4 12 4C12.2652 4 12.5196 4.10536 12.7071 4.29289C12.8946 4.48043 13 4.73478 13 5C13 5.26522 12.8946 5.51957 12.7071 5.70711C12.5196 5.89464 12.2652 6 12 6ZM12 13C11.7348 13 11.4804 12.8946 11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12C11 11.7348 11.1054 11.4804 11.2929 11.2929C11.4804 11.1054 11.7348 11 12 11C12.2652 11 12.5196 11.1054 12.7071 11.2929C12.8946 11.4804 13 11.7348 13 12C13 12.2652 12.8946 12.5196 12.7071 12.7071C12.5196 12.8946 12.2652 13 12 13ZM12 20C11.7348 20 11.4804 19.8946 11.2929 19.7071C11.1054 19.5196 11 19.2652 11 19C11 18.7348 11.1054 18.4804 11.2929 18.2929C11.4804 18.1054 11.7348 18 12 18C12.2652 18 12.5196 18.1054 12.7071 18.2929C12.8946 18.4804 13 18.7348 13 19C13 19.2652 12.8946 19.5196 12.7071 19.7071C12.5196 19.8946 12.2652 20 12 20Z"
            stroke={color || '#9CA3AF'}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
)
