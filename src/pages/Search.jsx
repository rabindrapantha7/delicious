import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import styled from 'styled-components';

const Search = () => {
    const [results, setResults] = useState([]);
    const params = useParams();

    const getResults = async (keywords) => {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?number=36&query=${keywords}&apiKey=${process.env.REACT_APP_FOOD_API_KEY}`
        );
        const data = await api.json();
        setResults(data.results);
    };

    useEffect(() => {
        if (params.keywords) getResults(params.keywords);
    }, [params.keywords]);

    return (
        <Grid>
            {results.map((item) => (
                <Card key={item.id}>
                    <Link to={'/recipe/' + item.id}>
                        <img src={item.image} alt={item.title} />
                        <h4>{item.title}</h4>
                    </Link>
                </Card>
            ))}
        </Grid>
    );
};

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
    }

    a {
        text-decoration: none;
    }

    h4 {
        text-align: center;
        padding: 1rem;
    }
`;

export default Search;
