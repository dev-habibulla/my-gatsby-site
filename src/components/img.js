
import React from 'react'


const Images = ({ src, alt, className }) => {
    return (
        <div>
            <img src={src} alt={alt} className={className} />

        </div>
    )
}

export default Images