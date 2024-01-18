"use client"
import React, { useState } from 'react'

export const SecondTooltip = ({text,children}) => {
    const [isVisible,setIsVisible] = useState(false)
     return (
        <div className='tooltip-container relative inline-block ' onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
            {children}
            {isVisible && <div className='secondTooltip absolute '>{text}</div>}
            
        </div>
    )
}