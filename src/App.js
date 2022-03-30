import Pages from './pages/Pages'
import Category from './components/Category'
import Search from './components/Search'
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom'
import { GiKnifeFork } from 'react-icons/gi'
import styled from 'styled-components'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Nav>
                    <Logo to={'/'}>
                        <GiKnifeFork />
                        <span>deliciousss</span>
                    </Logo>
                </Nav>
                <Search />
                <Category />
                <Pages />
            </div>
        </BrowserRouter>
    )
}

const Logo = styled(Link)`
    text-decoration: none;
    font-weight: 1.5rem;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Lobster', cursive;
`

const Nav = styled.div`
    padding: 4rem 0;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        color: #e94057;
        font-size: 2rem;
    }
`

export default App
