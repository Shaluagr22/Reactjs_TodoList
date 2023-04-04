import React, { useState } from 'react';
import image from '../assets/cross.png'

const ToDoList = () => {

    const [inputList, setInputList] = useState('');
    const [itemList, setItemList] = useState([])
    function handleInput(e) {
        setInputList(e.target.value)
        // console.log(list)
    }

    function handleSubmit() {
        setItemList((oldItems) => {
            return [...oldItems, inputList]
        })
        setInputList('')

    }
    function removeItem(id) {
        setItemList((oldItems) => {
            return oldItems.filter((elem, index) => {
                return index !== id;
            });
        });
    };
    return (
        <div className="main_div">
            <div className="inner_div">
                <h1>To Do List</h1>
                <input type='text' placeholder="Add a Items" value={inputList} onChange={handleInput} />
                <button onClick={handleSubmit}>ADD</button>
                {/* <p>{inputList}</p>   */}
                <ol>
                    {

                        itemList.map((item, id) => {
                            return (
                                <>
                                    <div className='item-list' key={id}  >
                                        <img src={image} onClick={() => removeItem(id)} />
                                        <li >{item}</li>
                                    </div>
                                </>
                            )
                        })
                    }

                </ol>



            </div>
        </div>

    )
}

export default ToDoList;
