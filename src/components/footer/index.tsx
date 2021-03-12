import React, { ReactElement } from 'react';
import { MyLink } from '../link';
import { StyledSection, StyledCopyright, StyledName, StyledMailLink, StyledMenu } from './style';
import { IMenuLinkItem } from 'src/interfaces/IMenuLinkItem';
import { configuration } from 'src/configuration';
import { useLocale } from 'src/localizations';
import { Row } from 'src/components/row';

/**
 * The Footer component.
 */
const Footer = (): ReactElement => {
    const locale = useLocale();
    const year = String(new Date().getFullYear());
	
    return (
        <>
            <StyledSection>
                <Row>
                    <StyledName>
                        <img src={configuration.general.logo} />
                    </StyledName>
                    <StyledMenu>
                        {getMenu(locale.global.footer.menu)}
                    </StyledMenu>
                    <div>
                        <StyledMailLink href={`mailto:${configuration.general.email}`}>
                            {configuration.general.email}
                        </StyledMailLink>
                    </div>
                </Row>
            </StyledSection>
            <StyledCopyright>
                {locale.global.footer.copyright.replace('{0}', year)}
            </StyledCopyright>
        </>
    );
};

/**
 * Returns the menu.
 * @param {IMenuLinkItem[]} menu - The menu. 
 */
const getMenu = (menu: IMenuLinkItem[]): ReactElement => {
    return (
        <>
            {menu.map((x, key): ReactElement => (
                <MyLink href={x.href} key={key}>
                    {x.title}
                </MyLink>
            ))}
        </>
    );
};

export {
    Footer
};