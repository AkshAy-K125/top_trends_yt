import './headerContainer.css'

const HeaderContainer = () => {
    return (
        <div className='headerContainer' >
            <h2>Top 10 in Trending</h2>
            <select>
                <option value="n">Now</option>
                <option value="mu">Music</option>
                <option value="mo">Movies</option>
                <option value="g">Gaming</option>
            </select>
        </div>
    )
}

export default HeaderContainer