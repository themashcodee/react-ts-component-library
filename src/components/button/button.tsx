import React, { ComponentPropsWithRef, forwardRef, ForwardRefExoticComponent } from "react"
import { twMerge } from 'tailwind-merge'

type P = ComponentPropsWithRef<'button'>

export const Button: ForwardRefExoticComponent<P> = forwardRef(({ children, ...props }) => {
    return (
        <button className={twMerge('bg-blue-500 text-white font-semibold px-4 py-2 rounded-md')} {...props}>
            {children}
        </button>
    )
})

Button.displayName = 'Button Default Component'
