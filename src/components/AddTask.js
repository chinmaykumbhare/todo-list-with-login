import React, {useRef, useState} from 'react'

function AddTask() {

    let task = useRef(null);
    let flag2 = useRef(false);
    let prio = useRef(1);
    let [tasks, setTask] = useState([]);
    let [priority, setPriority] = useState(1);

    const addTask = (event) => {
        event.preventDefault();
        setPriority(prio.current.value);
        setTask([...tasks, {task : task.current.value, priority : prio.current.value}]);
    }

    const deleteTask = (id) => {
        const updatedList = tasks.filter((item, index) => index !== id);
        setTask(updatedList);
    }

    const [flag, setFlag] = useState(0);

    const setFlagFn = (event) => {
        setFlag((task.current.value.length === 0) ? 0 : 1);
    }

    const setPrio = (event) => {
        tasks.map((item, index) => {
            switch(item.priority) {
                case "5":
                    document.getElementById("highlight" +index).style.backgroundColor="red";
                    break;
                case "4":
                    document.getElementById("highlight" +index).style.backgroundColor="#bf9000";
                    break;
                case "3":
                    document.getElementById("highlight" +index).style.backgroundColor="#f1c232";
                    break;
                case "2":
                    document.getElementById("highlight" +index).style.backgroundColor="#8e7cc3";
                    break;
                case "1":
                    document.getElementById("highlight" +index).style.backgroundColor="#9fc5e8";
                    break;
                default:
                    break;
            }
            return 0;
        })
    }

    return (
        <div>
            <form onSubmit={addTask}>
                <input placeholder="Enter your task" ref={task} onChange={setFlagFn}></input>
                <br/>
                <select required ref={prio} style={{height: "2rem", margin: "10px"}} onChange={setPrio}>
                    <option disabled>---set priority---</option>
                    <option defaultValue>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                </select>
                {flag ? <button>+</button> : null}
            </form>
            <div onMouseOver={setPrio}>
                <h5>Tasks</h5>
                <hr/>
                {tasks.map((item, index) => {
                    return (
                        <div key={index} style={{border: "1px solid", margin: "15px"}}>
                            <p id={"highlight" +index} style={{height: "50px"}}></p>
                            <hr/>
                            <h5 id={"taskLine" +index}>{item.task}</h5>
                            <hr/>
                            <button onClick={() => {
                                if(!flag2) {
                                    document.getElementById("taskLine" +index).style.textDecoration="line-through";
                                    flag2 = true;
                                } else {
                                    document.getElementById("taskLine" +index).style.textDecoration="none";
                                    flag2 = false;
                                }
                                }} style={{padding: "10px", margin: "10px"}}>&#10003;</button>
                            <button onClick={() => {deleteTask(index)}}>&#10008;</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AddTask;