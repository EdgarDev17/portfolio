import React from 'react'

type Props = {
    children: React.ReactNode
    color: string
}

const Title = ({ children, color }: Props) => {
    return (
        <div>
            <h1
                className={`text-3xl font-semibold text-${color}-500 lg:text-7xl`}
            >
                {children}
            </h1>
        </div>
    )
}

export default Title
