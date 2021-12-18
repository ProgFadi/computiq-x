import React from 'react';

const Pagination = ({ PerPage, total, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(total / PerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ui>
                {pageNumbers.map(number => (
                    <ui key={number} >
                        <button onClick={() => paginate(number)} style={{padding:'5px',background:'write', borderRadius:'40px',margin:'15px'}} >
                            {number}
                        </button>
                    </ui>
                ))}
            </ui>
        </nav>
    );
};

export default Pagination;