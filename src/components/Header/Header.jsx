import React from 'react';

export default function Header({filters,filter,onFilterChange}) {
    const handleChange = (value) => {
        onFilterChange(value);
    }
    return (
        <header>
            <ul>
                {filters.map((value, index)=> 
                    <li key={index}>
                        <button onClick={()=>handleChange(value)}>{value}</button>
                    </li>
                )}
            </ul>
        </header>
    );
}

