import Image from 'next/image';

export const Img = ({ src, alt, height, width }) => {
    return (
        <figure>
            <Image src={src} alt={alt} height={height} width={width} />
        </figure>
    );
};
