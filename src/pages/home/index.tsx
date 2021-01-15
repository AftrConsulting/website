import { NextSeo } from 'next-seo';
import React, { ReactElement } from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import { Container } from 'src/components/container';
import { useTranslation, Link } from 'src/i18n';
import { Row } from 'src/components/row';
/**
 * The Home component.
 */
const Home = (): ReactElement => {
    const { t } = useTranslation([ 'common' ]);
	
    return (
        <Container>
            <Row>
                <NextSeo
                    title={t('title')}
                    description={t('description')}
                />
                <h1>{t('h1')}</h1>
                <LoremIpsum p={20} />
                <Link href="/about">link</Link>
            </Row>
        </Container>
    );
};

Home.getInitialProps = (): {} => ({
    namespacesRequired: [ 'common' ]
});

export default Home;