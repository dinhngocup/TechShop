import React from 'react'
import PropTypes from 'prop-types'
import './_search.scss'


function Search(props) {
    return (
        <form  className='search-form'>
            <input type="search" />
            <i className="fa fa-search"></i>
        </form>
    )
}



export default Search

