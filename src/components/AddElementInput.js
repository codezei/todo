import React from 'react';

import MyContext from '../context/context';

function AddElementInput () {
    const elementContext = React.useContext(MyContext);

    let [inputValue, setInputValue] = React.useState('');

    return(
        <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          aria-label="Text input with checkbox"
          placeholder="Add a task"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <div className="input-group-prepend">
          <button
            className="btn btn-success"
            type="button"
            onClick={() => {
                elementContext.addElement(
                inputValue,
                elementContext.activeCategory
              );
              setInputValue("");
            }}
          >
            Add
          </button>
        </div>
      </div>
    )
}

export default AddElementInput;