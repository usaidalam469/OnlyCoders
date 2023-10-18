import React , { useState} from 'react';
import '../assets/css/updatebar.css';

const UpdateBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
    setIsOpen(!isOpen);
    };
  return (
    <div className="update-bar row">
      <div className= "col-3" style={{display : "block"}}>
        <h3 style={{fontSize: "18px"}}>All Updates</h3>
        <div className="update-bar-line">
        </div>
      </div>
      <div className='col-5'></div>
      <div className="dropdown col-4">
        <select className='form-control' style={{width : "100%"}}>
            <option>Everything</option>
        </select>
      </div>
    </div>

  );
};

export default UpdateBar;
