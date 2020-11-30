import React from 'react';
import MyContext from '../context/context';

function EditElementInput () {
    const elementsContext = React.useContext(MyContext);
    // let [inputValue, setInputValue] = React.useState(elementsContext.activeEditElement.value);

    return(
        <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          aria-label="Text input with checkbox"
          placeholder="Add a task"
          value={elementsContext.editInputValue}
          onChange={(e) => {
            elementsContext.setEditInputValue(e.target.value);
          }}/>

        <select
          className="custom-select col-xl-4 col-md-4"
          id="inputGroupSelect03"
          defaultValue={elementsContext.activeEditElement.category} onChange={(e)=>{
            let prev = elementsContext.activeEditElement;
            prev.category = e.target.value;
            elementsContext.setActiveEditElement(prev)
          }}>
          <option value={''} selected={elementsContext.activeEditElement.category === '' ? true : false}>Without category</option>
          <option value={'important'} selected={elementsContext.activeEditElement.category === 'important' ? true : false}>Important</option>
          <option value={'other'} selected={elementsContext.activeEditElement.category === 'other' ? true : false}>Other</option>
        </select>
        <div className="input-group-prepend">
          <button
            className="btn btn-success"
            type="button"
            onClick={() => {
            elementsContext.setEditInputValue("");
            let prev = elementsContext.activeEditElement;
            prev.value = elementsContext.editInputValue;
            // elementsContext.setActiveEditElement(...elementsContext.activeEditElement,);
            elementsContext.setActiveEditElement(prev)
            elementsContext.editElementValue(elementsContext.activeEditElement.id)
            }}>
            Save
          </button>
        </div>
      </div>
    )
}

export default EditElementInput;