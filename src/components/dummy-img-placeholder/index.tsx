import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

interface DummyImageProps extends ImageProps {
    fallbackSrc: string;
}

const DummyImage: React.FC<DummyImageProps> = ({ src, alt, fallbackSrc, ...props }) => {
    const [imgSrc, setImgSrc] = useState(src);

    // Update imgSrc whenever the src prop changes
    useEffect(() => {
        setImgSrc(src);
    }, [src]);

    const handleError = () => {
        setImgSrc(fallbackSrc);
    };

    return (
        <Image
            src={imgSrc}
            alt={alt}
            onError={handleError}
            {...props}
        />
    );
};

export default DummyImage;
