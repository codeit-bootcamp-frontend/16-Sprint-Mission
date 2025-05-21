import './input.css';

function Input({ slot, slotAlt, onChange, onBlur, type, name }) {
  return (
    <div className='input-container'>
      <input className="input" onChange={onChange} type={type} name={name} onBlur={onBlur} />
      {slot && (
        <button className='input-button'>
          <img src={slot} alt={slotAlt} />
        </button>
      )}
    </div>
  )
}

export default Input;
