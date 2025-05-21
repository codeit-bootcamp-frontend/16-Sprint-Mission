import { Link } from 'react-router-dom';
import './button.css';

function Button({ children, disabled, link }) {
  return (
    <Link to={link} className='button-link'>
      <button className='button' disabled={disabled}>
        {children}
      </button>
    </Link>
  )
}

export default Button;
