import React from "react";
import {useAppDispatch} from "../../app/hooks";
import {search} from './contactsSlice';
import './Search.css'

const Search = () => {
    const dispatch = useAppDispatch()

    return (
        <div className='search-form'>
            <h2>Поиск</h2>
            <input onChange={e => dispatch(search(e.target.value))}/>
        </div>
    );
};

export default Search;