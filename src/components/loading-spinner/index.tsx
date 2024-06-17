import React from 'react';
import Image from 'next/image';

export default function Spinner() {
    return (
        <div className='w-full h-[50vh] flex justify-center items-center'>
            <Image src="/assets/gifs/spinner.gif" alt='Loading...' width={500} height={500} />
        </div>
    )
}
