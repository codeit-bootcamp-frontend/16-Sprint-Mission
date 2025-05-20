import './input.css';

function Input({ slot, slotAlt, onChange }) {
  return (
    <div className='input-container'>
      <input className="input" onChange={onChange} />
      {slot && (
        <button className='input-button'>
          <img src={slot} alt={slotAlt} />
        </button>
      )}
    </div>
  )
}

export default Input;
