import Pages from './pages/Pages'
import Category from './components/Category'
import Search from './components/Search'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                {/* <p>https://youtu.be/xc4uOzlndAk?t=7345</p> */}
                <Search />
                <Category />
                <Pages />
            </div>
        </BrowserRouter>
    )
}

export default App
