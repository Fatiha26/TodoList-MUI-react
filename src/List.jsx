import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const List = (props) =>{
    const [line,setLine] = useState(false);

    const cut = () => {
        setLine(true);
    }
    
    return(<>
    <div className="todo-style">
        <span onClick={cut}>
            <DeleteIcon className="deleteicon"></DeleteIcon>
        </span>
        <li style={{textDecoration: line ? "line-through" : "none"}}>{props.text}</li>
    </div>

    </>)
}

export default List;