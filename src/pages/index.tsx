import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Index = (): ReactElement => (
    <div>
        <Title>My First Next.js Page</Title>
    </div>
);

const Title = styled.h1`
	color: red;
`;

export default Index;