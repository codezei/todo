import React from 'react';
import {
    Link
  } from "react-router-dom";

import MyContext from '../context/context';
import {listImg, importantImg, allImg} from '../images/icons';

function Categories () {

    const categoryContext = React.useContext(MyContext)

    return(
        <div className="list-group">
            <Link to="/" className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center btn-success ${categoryContext.activeCategory === "" ? 'active': ''}`} id="" onClick={(e)=>{categoryContext.setActiveCategory(e.target.id)}}>{allImg}Tasks</Link>
            <Link to="/important" className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center btn-success ${categoryContext.activeCategory  === "important"? 'active': ''}`} id="important" onClick={(e)=>{categoryContext.setActiveCategory(e.target.id)}}>{importantImg}Important</Link>
            <Link to="/other" className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center btn-success ${categoryContext.activeCategory  === "other"? 'active': ''}`} id="other" onClick={(e)=>{categoryContext.setActiveCategory(e.target.id)}}>{listImg}Other</Link>
        </div>
    )
}

export default Categories;
