import React, { ReactElement } from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { Row } from 'src/components/row';
import { setTheme } from 'src/context/actions/theme';
import { IState } from 'src/context/interfaces/IState';

/**
 * The Home component. 
 */
const Home = (): ReactElement => {
    const themeName = useSelector((state: IState) => state.theme.name);
    const dispatch = useDispatch();
	
    const toggleTheme = (): void => {
        const action = setTheme(themeName === 'light' ? 'dark' : 'light');
        dispatch(action);
    };
	
    return (
        <Row>
            <NextSeo
                title="Simple Usage Example"
                description="A short description goes here."
            />
            <button onClick={toggleTheme}>send</button>
            <h1>My First Next.js Page</h1>
            <Link href="/about">link</Link>
        </Row>
    );
};

export default Home;