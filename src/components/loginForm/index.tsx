import { Button } from '@/ui/button'
import { Checkbox } from '@/ui/checkbox'
import { Input } from '@/ui/input'
import { Label } from '@/ui/label'
import { useAppStore } from '@/store'
import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const { credentials, authenticated, authenticate } = useAppStore((state) => state)
    const { username, password } = credentials
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData((state) => ({ ...state, [e.target.name]: e.target.value }))
    }

    const handleSubmit = () => {
        if (formData.email === username && formData.password === password) {
            authenticate(true)
            console.log('AUTHENTICATED')
        } else {
            console.log('WRONG CREDENTIALS')
        }
    }

    useEffect(() => {
        if (authenticated) navigate('/')
    }, [authenticated, navigate])

    return (
        <div className="flex flex-col gap-5">
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email" className="text-gray-700">
                    Email
                </Label>
                <Input
                    id="email"
                    name="email"
                    value={formData.email ?? ''}
                    type="email"
                    placeholder="Enter your email"
                    className="text-gray-500"
                    onChange={handleChange}
                />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="password" className="text-gray-700">
                    Password
                </Label>
                <Input id="password" name="password" value={formData.password ?? ''} type="password" className="text-gray-500" onChange={handleChange} />
            </div>
            <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-sm font-normal leading-5 text-gray-700">
                        Remember for 30 days
                    </Label>
                </div>
                <Button variant="link" className="text-sm font-normal text-color-primary-foreground">
                    Forgot password
                </Button>
            </div>
            <Button className="bg-color-primary" type="button" onClick={handleSubmit}>
                Sign in
            </Button>
            <div className="text-center">
                <p className="mb-0 text-xs">
                    <span className="text-gray-500">Don’t have an account?</span> <a href="/signup">Sign up</a>
                </p>
            </div>
        </div>
    )
}
export default LoginForm
