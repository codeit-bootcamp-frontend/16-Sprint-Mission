import './input.css';

function Input({ slot, slotDirection, slotAlt, onChange, onBlur, type, name, placeholder }) {
  return (
    <div className='input-container'>
      {slot && slotDirection === 'left' && (
        <img src={slot} alt={slotAlt} className='slot-left-image' />
      )}
      <input className={slotDirection === 'left' ? 'input-slanted' : 'input'} onChange={onChange} type={type} name={name} onBlur={onBlur} placeholder={placeholder} />
      {slot && slotDirection === 'right' && (
        <button className='input-button'>
          <img src={slot} alt={slotAlt} />
        </button>
      )}
    </div>
  )
}

export default Input;
