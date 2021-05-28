import React, { FC } from 'react'

interface IButton {
  onClick?: () => void
  className?: string
  children?: React.ReactNode
}

const Button: FC<IButton> = ({ onClick, className, children }) => {
  return (
    <button
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  )  
};

export default Button;