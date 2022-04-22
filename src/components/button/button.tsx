import React, { ComponentPropsWithRef, forwardRef, ForwardRefExoticComponent } from "react"

type P = ComponentPropsWithRef<'button'>

export const Button: ForwardRefExoticComponent<P> = forwardRef(({ children, ...props }) => {
    return (
        <button {...props}>
            {children}
        </button>
    )
})

Button.displayName = 'Button Default Component'
