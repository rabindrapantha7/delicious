import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const Recipe = () => {
    const params = useParams();
    const [recipe, setRecipe] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');

    const getRecipe = async (name) => {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/${name}/information/?apiKey=${process.env.REACT_APP_FOOD_API_KEY}`
        );
        const data = await api.json();
        setRecipe(data);
        console.log(data);
    };

    useEffect(() => {
        if (params.name) getRecipe(params.name);
    }, [params.name]);

    return (
        <Wrapper>
            <Intro>
                <h2>{recipe.title}</h2>
                <img src={recipe.image} alt={recipe.title} />
            </Intro>
            <Info>
                <Button
                    className={'instructions' === activeTab ? 'active' : ''}
                    onClick={() => setActiveTab('instructions')}
                >
                    Instructions
                </Button>
                <Button
                    className={'ingredients' === activeTab ? 'active' : ''}
                    onClick={() => setActiveTab('ingredients')}
                >
                    Ingredients
                </Button>

                {recipe.instructions && 'instructions' === activeTab && (
                    <>
                        {recipe.summary && (
                            <>
                                <h3>Summary</h3>
                                <Summary
                                    dangerouslySetInnerHTML={{
                                        __html: recipe.summary,
                                    }}
                                ></Summary>
                            </>
                        )}

                        <h3>Instructions</h3>
                        <Instructions
                            dangerouslySetInnerHTML={{
                                __html: recipe.instructions,
                            }}
                        ></Instructions>
                    </>
                )}

                {recipe.extendedIngredients && 'ingredients' === activeTab && (
                    <>
                        {recipe.summary && (
                            <>
                                <h3>Summary</h3>
                                <Summary
                                    dangerouslySetInnerHTML={{
                                        __html: recipe.summary,
                                    }}
                                ></Summary>
                            </>
                        )}

                        <h3>Ingredients</h3>
                        <Ingredients>
                            {recipe.extendedIngredients.map((item) => (
                                <li key={item.id + item.unit}>
                                    {item.original}
                                </li>
                            ))}
                        </Ingredients>
                    </>
                )}
            </Info>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;

    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }

    h2 {
        margin-bottom: 2rem;
    }

    ul {
        margin-top: 2rem;
    }

    li {
        font-size: 1.2rem;
        line-height: 1.5rem;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
    cursor: pointer;
`;

const Intro = styled.div`
    max-width: 550px;
`;

const Info = styled.div`
    margin-left: 10rem;
`;

const Summary = styled.div`
    margin: 2rem 0;
    line-height: 1.785rem;
`;

const Instructions = styled.div`
    margin: 2rem 0;
    line-height: 2rem;
    padding: 0 0 0 1rem;

    li {
        font-size: 1rem;
        line-height: 2rem;
    }
`;

const Ingredients = styled.ul`
    margin: 2rem 0;
    line-height: 2rem;
    padding: 0 0 0 1.25rem;

    li {
        font-size: 1rem;
        line-height: 2rem;
    }
`;

export default Recipe;
