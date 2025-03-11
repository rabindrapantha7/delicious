import { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Popular = () => {
    const [popular, setPopular] = useState([])

    const getPopular = async () => {
        const popular = localStorage.getItem('popular')
        
        if (popular !== 'undefined' && popular !== null) {
            setPopular(JSON.parse(popular))
            return
        }

        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?number=9&apiKey=${process.env.REACT_APP_FOOD_API_KEY}`
        )
        const data = await api.json()
        
        localStorage.setItem('popular', JSON.stringify(data.recipes))
        setPopular(data.recipes)
    }

    useEffect(() => {
        getPopular()
    }, [])

    return (
        <div>
            <Wrapper>
                <h3>Popular Picks</h3>
                <Splide
                    options={{
                        perPage: 4,
                        arrows: false,
                        pagination: false,
                        drag: 'free',
                        gap: '5rem',
                    }}
                >
                    {popular.map((recipe, index) => (
                        <SplideSlide key={recipe.id + index}>
                            <Card>
                                <Link to={'/recipe/' + recipe.id}>
                                    <p>{recipe.title}</p>
                                </Link>
                                <img src={recipe.image} alt={recipe.title} />
                                <Gradient />
                            </Card>
                        </SplideSlide>
                    ))}
                </Splide>
            </Wrapper>
        </div>
    )
}

const Wrapper = styled.div`
    margin: 4rem 0;
`

const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        border-radius: 2rem;
        object-fit: cover;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
    }

    p {
        z-index: 10;
        color: white;
        width: 90%;
        text-align: center;
        font-weight: 400;
        font-size: 1.575rem;
    }

    a {
        z-index: 10;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }
`

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`

export default Popular
