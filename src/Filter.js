import React, { useState } from 'react';

function Filter() {
    const [searchTerm, setSearchTerm] = useState("");
    const namesList = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown", "Charlie Davis"];

    const filteredNames = namesList.filter(name => 
        name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>Enter a name to search for: </h1>
            <input 
            value={searchTerm}
            onChange = {(e)=>{setSearchTerm(e.target.value)}}
            />
            <ul>
                {filteredNames.map((name, index) => <li key={index}>{name}</li>)}
            </ul>
        </div>
    )
}
export default Filter;