import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

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
        }
        return(
            <>
                <div className="main-div">
                    <div className="center-div">
                        <h1>Todo List</h1>
                        <br />
                        <input type="text" placeholder='Add Items' onChange={itemEvent} />
                        <Button className='newbtn' onClick={listofItem}>
                            <AddIcon />
                        </Button>
                        <br />

                        <ol