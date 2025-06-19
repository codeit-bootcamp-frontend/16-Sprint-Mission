import { useState } from 'react';
import './select.css';
import { ReactComponent as DownArrow } from '../public/components/down-arrow.svg';

function Select({ select, callback }) {
  const [open, setOpen] = useState(false);
  const [selectedName, setSelectedName] = useState(select[0].name);

  const handleChange = (el) => {
    setSelectedName(el.name);
    callback(el.value);
  }

  return (
    <button className='select' onClick={() => setOpen(!open)}>
      {selectedName}
      {open && (
        <ul className='option'>
          {select.map((el, i) => (
            <li key={i} onClick={() => handleChange(el)}>{el.name}</li>
          ))}
        </ul>
      )}
      <DownArrow width='20' height='20' />
    </button>
  )
}

export default Select;
