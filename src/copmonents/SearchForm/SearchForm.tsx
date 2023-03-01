import React, {FC, useRef} from 'react';
import {ISearchProps} from "../../interface/interface";

import '../../style/Searchform.css'

type ReactCE<H> = React.ChangeEvent<H>


const SearchForm: FC<ISearchProps> = ({setSearchParam}) => {
    const label: React.MutableRefObject<HTMLLabelElement | null> = useRef(null);

    function searchInput(event: ReactCE<HTMLInputElement>) {
        setSearchParam(event.target.value);
    }

    function labelOut(event: React.SyntheticEvent) {
        if (label.current !== null) label.current.style.top = '-5rem'
        if (label.current !== null) label.current.style.color = 'black'
    }

    function labelIn(event: React.SyntheticEvent) {
        if (label.current !== null) label.current.style.top = '0'
        if (label.current !== null) label.current.style.color = ''
    }


    return (
        <div className='search'>
            <input className='search_input'
                type='search'
                id='search'
                onChange={searchInput}
                onFocus={labelOut}
                onBlur={labelIn}
            />
            <label ref={label} htmlFor='search' className='search_label'>Search</label>
        </div>

    );
};

export default SearchForm;