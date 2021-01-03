import React, { ReactElement } from 'react';
import { NextSeo } from 'next-seo';
import { Row } from 'src/components/row';

const Index = (): ReactElement => (
    <Row>
        <NextSeo
            title="Simple Usage Example"
            description="A short description goes here."
        />
        <h1>My First Next.js Page</h1>
    </Row>
);

export default Index;