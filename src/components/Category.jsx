import React from 'react';

import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const Category = () => {
    return (
        <List>
            <CategoryLink to={'/cuisine/italian/'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </CategoryLink>
            <CategoryLink to={'/cuisine/american/'}>
                <FaHamburger />
                <h4>American</h4>
            </CategoryLink>
            <CategoryLink to={'/cuisine/thai/'}>
                <GiNoodles />
                <h4>Thai</h4>
            </CategoryLink>
            <CategoryLink to={'/cuisine/japanese/'}>
                <GiChopsticks />
                <h4>Japanese</h4>
            </CategoryLink>
        </List>
    );
};

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
`;

const CategoryLink = styled(NavLink)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 50%;
    margin: 0 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4 {
        color: white;
        font-size: 0.8rem;
    }

    svg {
        color: white;
        font-size: 1.5rem;
        margin-bottom: 0.35rem;
    }

    &:hover {
        background: linear-gradient(35deg, #494949, #818181);
    }

    &.active {
        background: linear-gradient(to right, #f27121, #e94057);

        svg {
            color: white;
        }

        h4 {
            color: white;
        }
    }
`;

export default Category;
