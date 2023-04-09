import React, { useState, useEffect } from 'react'
import useFirestore from '../hooks/useFirestore'

const ImageGrid = ({ setSelectedImg, sortvalue }) => {

    const { docs } = useFirestore('images')
    var array = docs
    useEffect(() => {
        if (sortvalue) {
            array.sort((a, b) => { return a.filename - b.filename })
        } else {
            array.sort((a, b) => { return b.filename - a.filename })
        }

    }, [sortvalue])







    return (
        <div className='img-grid'>
            {docs && array.map(doc => (
                <div className='img-wrap' key={doc.id} onClick={() => setSelectedImg(doc.url)}>
                    <img src={doc.url} alt='uploaded pic' />
                </div>
            ))}
        </div>
    )
}

export default ImageGrid