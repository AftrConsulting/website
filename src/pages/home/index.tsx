import { NextSeo } from 'next-seo';
import React, { ReactElement } from 'react';
import { Container } from 'src/components/container';
import { useTranslation } from 'src/i18n';
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
                <div>
					Lorem ipsum odor amet, consectetuer adipiscing elit. 
                </div>
            </Row>
        </Container>
    );
};

Home.getInitialProps = (): {} => ({
    namespacesRequired: [ 'common' ]
});

export default Home;