import React, { ReactElement } from 'react';

/**
 * The Chat component.
 */
const Chat = (): ReactElement => (
    <>
        <script async dangerouslySetInnerHTML={{ __html: 'var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();' }} />
        <script async src={'https://embed.tawk.to/601b625fa9a34e36b973a092/1etlfghc8'} crossOrigin={'*'} />
    </>
);

export {
    Chat
};