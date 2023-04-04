import React, { useState } from 'react'

const TodoList = () => {
    const [activity, setActivity] = useState('')
    const [listData, setListData] = useState([])
    const handleData = (e) => {
        setActivity(e.target.value)
    }
    const addActivity = () => {
        if(activity === ""){
            alert("Please add your activity")
                    }
                    else{
                        setListData((listData) => {
                            const updatedList = [...listData, activity]
                            console.log(updatedList)
                            setActivity('')
                            return updatedList
                        }) 
                    }
      
                   
    }
    const removeActivity = (i) => {
        const updatedListData = listData.filter((elem, id) => {
            return i != id;
        })
        setListData(updatedListData)
    }
    const removeAll = () => {
        setListData([])
    }
    return (
        <>
            <div className='container'>
                <div className='header'>TO DO LIST</div>
                <input placeholder='Add Activity' type='text' value={activity} onChange={handleData} />
                <button onClick={addActivity}>ADD</button>
                <p className='List-heading'>Here is your List:{")"}</p>
                {listData != [] && listData.map((item, i) => {
                    return (
                        <>
                            <p key={i}></p>
                            <div className='listData'>{item}</div>
                            <div className='btn-position'>
                                <button onClick={() => removeActivity(i)}>remove(-)</button>
                            </div>
                        </>
                    )
                })}
                {listData.length >= 1 && <button onClick={removeAll}>Remove All</button>}

            </div>
        </>
    )
}

export default TodoList