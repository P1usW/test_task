import React, {useState} from 'react';
import SearchForm from "./copmonents/SearchForm/SearchForm";
import PostsTable from "./copmonents/PostsTable/PostsTable";

import './style/App.css';


function App() {
    const [searchParam, setSearchParam] = useState<string>('');
    const [headerSort, setHeaderSort] = useState<string>('')

    return (
        <div className='container'>
            <SearchForm setSearchParam={setSearchParam}/>
            <PostsTable/>
        </div>
    );
}

export default App;
