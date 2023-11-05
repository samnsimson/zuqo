import { FC, HTMLAttributes } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/ui/tabs'

interface ModuleTabsProps extends HTMLAttributes<HTMLDivElement> {
    [x: string]: any
}

export const ModuleTabs: FC<ModuleTabsProps> = ({ ...props }) => {
    return (
        <div {...props}>
            <Tabs defaultValue="account" className="w-full">
                <TabsList className="max-h-[38px] w-full items-center space-x-2 bg-transparent p-0">
                    <TabsTrigger
                        value="account"
                        className="h-[38px] rounded-lg rounded-b-none border-[2px] border-gray-200 border-b-sky-50 bg-white px-6 py-2 font-semibold text-gray-600 data-[state=active]:bg-sky-50 data-[state=active]:text-[#00539F] data-[state=active]:shadow-none"
                    >
                        Account
                    </TabsTrigger>
                    <TabsTrigger
                        value="password"
                        className="h-[38px] rounded-lg rounded-b-none border-[2px] border-gray-200 border-b-sky-50 bg-white px-6 py-2 font-semibold text-gray-600 data-[state=active]:bg-sky-50 data-[state=active]:text-[#00539F] data-[state=active]:shadow-none"
                    >
                        Password
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="my-0 p-4">
                    Make changes to your account here.
                </TabsContent>
                <TabsContent value="password" className="my-0 p-4">
                    Change your password here.
                </TabsContent>
            </Tabs>
        </div>
    )
}
