import React from 'react'

const ShimmerButton = ({
    title, icon, position, handleClick, otherClasses
}: {
    title: string;
    icon: React.ReactNode,
    position: string;
    handleClick?: () => void;
    otherClasses?: string;
}) => {
  return (
        // Button code
        <button className="inline-flex h-12 w-full animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-7 font-medium text-slate-400 transition-colors focus:outline-none md:w-60 md: mt-1 gap-1">
          {position === 'left' && icon}
          {title} 
          {position === 'right' && icon}
        </button> 
  )
}

export default ShimmerButton
