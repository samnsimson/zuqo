/* eslint-disable @typescript-eslint/no-explicit-any */
import { Header } from '@/components/header'
import LoginForm from '@/components/loginForm'
import { NavbarLinkProps, Navbar } from '@/components/navbar'
import { assets } from '@/config/assets'
import { FC } from 'react'

interface LoginPageProps {
    [x: string]: any
}

export const LoginPage: FC<LoginPageProps> = () => {
    const navbarLinks: NavbarLinkProps[] = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'Support',
            path: '/support',
        },
        {
            name: 'Docs',
            path: '/docs',
        },
    ]
    return (
        <div className="h-screen bg-[#00539F]">
            <div className="h-full w-full overflow-hidden bg-loginGradient bg-cover bg-no-repeat">
                <div className="absolute bottom-0 h-[50%] w-full bg-loginMask" />
                <Header variant="transparent" className="flex justify-between">
                    <img src={assets.logo} alt="logo" />
                    <Navbar links={navbarLinks} />
                </Header>
                <div className="flex h-full items-center justify-center">
                    <div className="z-10 flex w-[1037px] justify-between gap-10">
                        <div className="prose relative flex-grow text-right">
                            <div className="grid w-full gap-[9px]">
                                <div>
                                    <h4 className="m-0 font-inter text-[42px] font-light text-white">Welcome to Zuqo’s</h4>
                                    <h2 className="m-0 font-inter text-[49px] font-bold text-white">ACPaaS Platform</h2>
                                </div>
                                <div>
                                    <p className="m-0 font-inter text-xl font-normal text-white">
                                        ACPaaS is a comprehensive solution combining <br />
                                        automation, orchestration, generative AI, & CS capabilities
                                    </p>
                                </div>
                            </div>
                            <img src={assets.heroVideoImage} alt="hero-video" className="absolute -right-[140px] bottom-0" />
                        </div>
                        <div className="prose z-10 flex w-[432px] flex-col gap-9 rounded-lg bg-white p-5 shadow-lg">
                            <div className="grid w-full gap-3">
                                <h3 className="m-0 font-jakarta text-4xl font-semibold leading-[44px]">Login</h3>
                                <p className="m-0 leading-6 text-gray-500">
                                    Welcome back! Please enter your
                                    <br />
                                    details to login
                                </p>
                            </div>
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
