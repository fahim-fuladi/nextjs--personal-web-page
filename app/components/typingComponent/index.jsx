"use client"

import { TypeAnimation } from 'react-type-animation';

const TypingComponent = () => {
    return (
        <TypeAnimation
            sequence={[
                'Flutter developer',
                3000,
                'Next.js developer',
                3000,
                'UI/UX designer',
                3000,
            ]}
            wrapper="span"
            speed={50}
            className='size-2xl font-[jet-light] display-block'
            repeat={Infinity}
        />
    );
};

export default TypingComponent;