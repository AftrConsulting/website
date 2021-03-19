import React, { ReactElement } from 'react';
import { useAmp } from 'next/amp';
  
interface ICustomImageProps {
	src: string;
	height?: string;
	width?: string;
	alt?: string;
}

/**
 * The custom image component.
 * @param {ICustomImageProps} props - The props.
 */
const CustomImage = (props: ICustomImageProps): ReactElement => {
    const isAmp = useAmp();
	
    return isAmp ? 
        <amp-img src={props.src} height={props.height} width={props.width} alt={props.alt} /> :
        <img src={props.src} height={props.height} width={props.width} alt={props.alt} />;
};

export {
    CustomImage
};