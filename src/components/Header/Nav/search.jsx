import React from 'react'
import './_search.scss'


function Search(props) {
    return (
        <form  className='search-form'>
            <div>

            <input type="search" />
            <i className="fa fa-search"></i>
            </div>
        </form>
    )
}



export default Search

