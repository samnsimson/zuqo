import { FC } from 'react'
import { Button } from '../../ui/button'
import { assets } from '@/config/assets'

interface HomeBannerProps {
    show: boolean
    onClose: () => void
}

export const HomeBanner: FC<HomeBannerProps> = ({ show, onClose }) => {
    return (
        show && (
            <div className="relative h-[167px] w-full overflow-hidden rounded-lg bg-banner bg-contain bg-no-repeat">
                <div className="absolute right-0 top-0 cursor-pointer p-3" onClick={() => onClose()}>
                    <img src={assets.closeIcon} alt="close-icon" />
                </div>
                <div className="flex h-full items-center justify-between gap-[52px]">
                    <div className="h-[128px] w-[205px]">
                        <img src={assets.bannerPreviewImage} alt="banner preview image" className="object-cover" />
                    </div>
                    <div className="flex flex-grow flex-col gap-[17px]">
                        <div className="grid w-full gap-[9px]">
                            <p className="font-jakarta font-bold text-white">See what you can do with Zuqo’s ACPaaS Platform ?</p>
                            <p className="font-jakarta text-sm font-light text-white">
                                Get started with watching this video on how to become an expert <br />
                                using the platform based on your need
                            </p>
                        </div>
                        <div className="flex items-center gap-6">
                            <Button variant="secondary" className="gap-2 text-color-secondary-foreground">
                                <img src={assets.playSquare} alt="play square" /> <span>Watch how it works?</span>
                            </Button>
                            <div className="flex gap-2 font-[500] text-white">
                                <img src={assets.questionIcon} alt="question icon" /> Help
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}
