import React from 'react';
import MyContext from '../context/context';
import {remove, edit} from '../images/icons';

function Element (props) {
    const elContext = React.useContext(MyContext);
    return (

        <div>
        
        {elContext.todoElements.map((item, index)=>{
            return item.category === props.category ? (
              <div
                className="input-group mb-3"
                key={props.category + "element" + index}
              >
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <input
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                      id={item.id} onChange={(e)=>{elContext.editElement(e.target.id)}}
                      checked={item.done}
                    />
                  </div>
                </div>
                <label htmlFor={item.id} className={`form-control text-left ${item.done ? 'done' : ''}`}>
                  {item.value}
                </label>
                <button type="button" className="btn btn-outline-success" onClick={()=>{
                    elContext.deleteElement(item.id)
                }}>
                  {remove}
                </button>
                <button type="button" className="btn btn-outline-success" onClick={()=>{elContext.setModeEdit(true); elContext.setActiveEditElement({
                  id: item.id,
                  value: item.value,
                  category: item.category,
                  done: item.done
                }); elContext.setEditInputValue(item.value)}}>
                  {edit}
                </button>
              </div>
            ) : (
              ""
            );
        })}

        </div>



        

    )
}

export default Element;