import { FC, ReactNode } from 'react'

export const BoxTitle: FC<{ title: string | ReactNode }> = ({ title }) => <p className="font-inter text-xs font-[500] uppercase text-[#6E6893]">{title}</p>
