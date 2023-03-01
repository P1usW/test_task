import React from 'react';

import '../../style/Pagination.css'

interface IPaginationProps {
    page: number,
    pageArray: number[],
    setPage: React.Dispatch<number>,
}


const Pagination: React.FC<IPaginationProps> = ({page, pageArray, setPage}) => {
    function holdBtn(action: string) {
        if (action === 'Back' && page > 1) setPage(page - 1);
        if (action === 'Forward' && page < pageArray.length) setPage(page + 1);
    }

    return (
        <div className='pagination'>
            <div className='btn btn_bf' onClick={() => holdBtn('Back')}>Back</div>
            <div>
                <ul className='page_buttons'>
                    {pageArray.map((value) =>
                        <li className={page === value ? 'btn page_button__current' : 'btn page_button__not-current'}
                            key={value}
                            onClick={() => setPage(value)}
                        >
                            {value}
                        </li>
                    )}
                </ul>
            </div>
            <div className='btn btn_bf' onClick={() => holdBtn('Forward')}>Forward</div>
        </div>
    );
};

export default Pagination;