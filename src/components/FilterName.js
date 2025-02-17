import React from 'react'
import { Form } from 'react-bootstrap'
import "./FilterName.css"
const FilterName = ({inputSearch, setInputSearch}) => {
    return (
        <div className='filterName'>
            <Form.Control type="text" placeholder="Enter Movie Title" 
            value={inputSearch} onChange={(e)=>setInputSearch(e.target.value)}/>
        </div>
    )
}

export default FilterName
