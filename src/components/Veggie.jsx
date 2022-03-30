import { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Veggie = () => {
    const [veggie, setVeggie] = useState([])

    const getVeggie = async () => {
        const veggie = localStorage.getItem('veggie')
        if (veggie) {
            setVeggie(JSON.parse(veggie))
            return
        }

        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?number=9&tags=vegetarian&apiKey=${process.env.REACT_APP_FOOD_API_KEY}`
        )
        const data = await api.json()
        localStorage.setItem('veggie', JSON.stringify(data.recipes))
        setVeggie(data.recipes)
    }

    useEffect(() => {
        getVeggie()
    }, [])

    return (
        <div>
            <Wrapper>
                <h3>Our Veggie Picks</h3>
                <Splide
                    options={{
                        perPage: 3,
                        arrows: false,
                        pagination: false,
                        drag: 'free',
                        gap: '5rem',
                    }}
                >
                    {veggie.map((recipe, index) => (
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

export default Veggie
