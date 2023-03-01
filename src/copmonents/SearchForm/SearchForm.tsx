import React, {FC, useRef} from 'react';
import {ISearchProps} from "../../interface/interface";

import '../../style/Searchform.css'

type ReactCE<H> = React.ChangeEvent<H>


const SearchForm: FC<ISearchProps> = ({filterParam, setFilterParam}) => {
    const label: React.MutableRefObject<HTMLLabelElement | null> = useRef(null);

    function searchInput(event: ReactCE<HTMLInputElement>) {
        setFilterParam({...filterParam, searchParam: event.target.value});
    }

    return (
        <div className='search'>
            <input className='search_input'
                type='search'
                id='search'
                placeholder='Search...'
                onChange={searchInput}
            />
        </div>

    );
};

export default SearchForm;