import { useState } from 'react';
import { MouseEvent } from 'react';

function ListGroup() {
    let items = [
        'item1',
        'item2',
        'item3',
        'item4',
        'item5',
        'item6',
        'item7'
    ];
    const [selectedIndex, setSelectedIndex] = useState(-1);

    //event handler
    const handleClick = (event: MouseEvent) => console.log(event);

    return (
        <div style={{ backgroundColor: "lightgray}}"}}>
            <h1>List Card</h1>
            {items.length === 0 && <p>There are no items</p>}
            <ul className="list group">
                {items.map((item, index) => (
                    <li 
                        className={
                            selectedIndex === index
                            ? "list-group-item active"
                            : "list-group-item"
                        }
                        key={item} 
                        onClick={() => { setSelectedIndex(index); handleClick; }}
                    > 
                        {item} 
                    </li>))}
            </ul>
        </div>
    );
}

export default ListGroup;