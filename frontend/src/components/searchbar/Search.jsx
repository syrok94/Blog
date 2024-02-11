import React from 'react'
import './Search.css';


function Search() {
    return (
        <div className='Search'>
            <div class="InputContainer">
                <input placeholder="Search Username.." id="input" class="input" name="text" type="text" />
            </div>
        </div>
    )
}

export default Search