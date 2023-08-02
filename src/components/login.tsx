import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const LoginForm = () => {
    return (
        <div className="flex flex-col gap-5">
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email" className="text-gray-700">
                    Email
                </Label>
                <Input id="email" type="email" placeholder="Enter your email" className="text-gray-500" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="password" className="text-gray-700">
                    Password
                </Label>
                <Input id="password" type="password" className="text-gray-500" />
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
            <Button className="bg-color-primary">Sign in</Button>
            <div className="text-center">
                <p className="mb-0 text-xs">
                    <span className="text-gray-500">Don’t have an account?</span> <a href="/signup">Sign up</a>
                </p>
            </div>
        </div>
    )
}
export default LoginForm
