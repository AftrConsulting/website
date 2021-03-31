import React, { ReactElement } from 'react';
import { StyledSection, StyledCopyright, StyledName, StyledMailLink, StyledMenu, StyledIcons, StyledQuote } from './style';
import { IFooterIcon } from 'src/components/footer/interfaces/IFooterIcon';
import { iconLinkedIn } from 'src/componentsImg/footerLinkedIn';
import { iconFacebook } from 'src/componentsImg/footerFacebook';
import { IMenuLinkItem } from 'src/interfaces/IMenuLinkItem';
import { iconGithub } from 'src/componentsImg/footerGithub';
import { CustomImage } from 'src/components/customImage';
import { configuration } from 'src/configuration';
import { useLocale } from 'src/localizations';
import { MyLink } from 'src/components/link';
import { Icon } from 'src/components/icon';
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
                        <CustomImage src={configuration.general.logo} height={'40px'} width={'100px'} alt={'logo'} />
                    </StyledName>
                    <StyledQuote>{locale.global.footer.quote}</StyledQuote>
                    <>
                        {getMenu(locale.global.footer.menu)}
                        <div>
                            <StyledMailLink href={`mailto:${configuration.general.email}`} title={locale.global.hrefs.email}>
                                {configuration.general.email}
                            </StyledMailLink>
                        </div>
                        {getIcons([
                            { href: configuration.general.github, icon: iconGithub, title: locale.global.hrefs.github },
                            { href: configuration.general.linkedIn, icon: iconLinkedIn, title: locale.global.hrefs.linkedIn },
                            { href: configuration.general.facebook, icon: iconFacebook, title: locale.global.hrefs.facebook }
                        ])}
                    </>
                </Row>
            </StyledSection>
            <StyledCopyright>
                {locale.global.footer.copyright.replace('{0}', year)}
            </StyledCopyright>
        </>
    );
};

/**
 * Returns the icons.
 * @param {IFooterIcon[]} icons - The icons. 
 */
const getIcons = (icons: IFooterIcon[]): ReactElement => (
    <StyledIcons>
        {icons.map((x, key): ReactElement => (
            <a href={x.href} target={'_blank'} rel={'noreferrer'} key={key} title={x.title}>
                <div>
                    <Icon icon={x.icon} />
                </div>
            </a>
        ))}
    </StyledIcons>
);

/**
 * Returns the menu.
 * @param {IMenuLinkItem[]} menu - The menu. 
 */
const getMenu = (menu: IMenuLinkItem[]): ReactElement => (
    <StyledMenu>
        {menu.map((x, key): ReactElement => (
            <MyLink href={x.href} key={key} title={x.title}>
                {x.title}
            </MyLink>
        ))}
    </StyledMenu>
);

export {
    Footer
};