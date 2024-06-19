import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import List from './List';

const Todolist = () =>  
    {
        const [item,setItem] = useState();
        const [newItem, setNewItem] = useState([]);

        const itemEvent = (event) =>{
            setItem(event.target.value);
        }

        const listofItem = () =>{
            setNewItem((prevValue)=>{
                return [...prevValue, item]
            });
            setItem(" ");
        };
        return(
            <>
                <div className="main-div">
                    <div className="center-div">
                        <h1>Todo List</h1>
                        <br />
                        <input type="text" value={item} placeholder='Add Items' onChange={itemEvent} />
                        <Button className='newbtn' onClick={listofItem}>
                            <AddIcon />
                        </Button>
                        <br />

                        <ol>
                            {newItem.map((val)=>{
                                return(<List text={val}/>)
                                })}
                        </ol>
                    </div>
                </div>
            </>
        )
    }



export default Todolist;