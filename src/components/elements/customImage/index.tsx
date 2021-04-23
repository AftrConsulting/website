import React, { ReactElement } from 'react';
import { useAmp } from 'next/amp';
  
interface ICustomImageProps {
	src: string;
	height?: string;
	heights?: string;
	layout?: string;
	width?: string;
	alt?: string;
	loading?: string;
}

/**
 * The custom image component.
 * @param {ICustomImageProps} props - The props.
 */
const CustomImage = (props: ICustomImageProps): ReactElement => {
    const isAmp = useAmp();
	
    return isAmp ? 
        <amp-img 
            src={props.src}
            layout={props.layout}
            height={props.height} 
            width={props.width} 
            alt={props.alt}
            heights={props.heights} /> :
        <img 
            src={props.src} 
            height={props.height} 
            width={props.width} 
            alt={props.alt} 
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            loading={props.loading as any} />;
};

export {
    CustomImage
};