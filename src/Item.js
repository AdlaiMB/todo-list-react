function Item({id, task, removeTask}) {

    const removeItem = () => removeTask(id);

    return (
        <div className="Item">
            <div>{task}</div>
            <button onClick={removeItem}>X</button>
        </div>
    )

};

export default Item;
