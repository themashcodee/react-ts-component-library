import React, { ComponentPropsWithoutRef } from "react"
import { twMerge } from 'tailwind-merge'
import { Component } from "../../../types/component"

type P = ComponentPropsWithoutRef<"svg">

export const ArrowRight: Component<P> = ({ className, ...props }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={twMerge('h-6', className)} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
    )
}
