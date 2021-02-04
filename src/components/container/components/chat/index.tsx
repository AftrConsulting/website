import React, { ReactElement } from 'react';

/**
 * The Chat component.
 */
const Chat = (): ReactElement => (
    <script
        async
        dangerouslySetInnerHTML={{
            __html: `
			var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
			(function(){
			var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
			s1.async=true;
			s1.src='https://embed.tawk.to/601b625fa9a34e36b973a092/1etlfghc8';
			s1.charset='UTF-8';
			s1.setAttribute('crossorigin','*');
			s0.parentNode.insertBefore(s1,s0);
			})();`
        }}
    />
);

export {
    Chat
};