import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [keywords, setKeywords] = useState('');

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        if (keywords) navigate('/search/' + keywords);
    };

    return (
        <div>
            <Form onSubmit={submitHandler}>
                <div>
                    <FaSearch />
                    <input
                        onChange={(e) => setKeywords(e.target.value)}
                        type="text"
                        value={keywords}
                    />
                </div>
            </Form>
        </div>
    );
};

const Form = styled.form`
    margin: 0 20rem;
    div {
        position: relative;
        width: 100%;
    }

    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`;

export default Search;
