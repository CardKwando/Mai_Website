import { useState } from 'react';
import { MouseEvent } from 'react';

function ListGroup() {
    let items = [
        'Here',
        'There',
        'Nowhere',
    ];
    const [selectedIndex, setSelectedIndex] = useState(-1);

    //event handler
    const handleClick = (event: MouseEvent) => console.log(event);

    return (
        <>
            <h1>List</h1>
            {items.length === 0 && <p>There are no items</p>}
            <ul className="list group">
                {items.map((item, index) => (
                    <li 
                        className={
                            selectedIndex === index 
                            ? 'list-group-item active' 
                            : 'list-group-item'} 
                        key={item} 
                        onClick={handleClick}
                    > 
                        {item} 
                    </li>))}
            </ul>
        </>
    );
}

export default ListGroup;