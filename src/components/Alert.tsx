import React, {ReactNode} from "react"

type AlertProps = {
    variant?: 'success' | 'danger' | 'warning';
    children: ReactNode;
};

export default function Alert({variant = "success", children}: AlertProps) {

    const classVariants = {
        success: "p-4 shadow inline-block max-w-lg bg-green-300 text-green-800 rounded-md m-2",
        warning: "p-4 shadow inline-block max-w-lg bg-yellow-300 text-yellow-800 rounded-md m-2",
        danger: "p-4 shadow inline-block max-w-lg bg-red-300 text-red-800 rounded-md m-2"

    }

    return(
        <div className={classVariants[variant]}>
            {children}
        </div>
    )
}
