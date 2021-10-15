import React, { useEffect, useState } from 'react';



const Hero = ({ id, value}) => {

    const [about, setAbout] = useState(false);
   
    const descrip = () => {
        setAbout(!about)
    }

    useEffect(() => {
        setAbout(about);
    }, [about]);

    return (
        <>
        <div>
            <div className='cursor-pointer' onClick={descrip}>
            <span></span>
                <img src={value.thumbnail.path + "/portrait_xlarge.jpg"} alt='' className='w-44 h-auto '/>
                <span className='text-center text-xl md:text-2xl lg:text-2xl'>{value.name}</span> 
                <span></span>
            </div>
            {about ? <span className='font-bold'>{value.description}</span> : ''}
            </div>
        </>
    )
}

export default Hero;
