import { useFormState } from 'react-hook-form';
import styles from './styles/SubmitButton.module.css';

interface Props {
  children: React.ReactNode;
}

export default function SubmitButton({ children }: Props) {
  const { isValid } = useFormState();

  return (
    <button
      type="submit"
      className={`${styles.authBtn} ${!isValid ? styles.inActivateBtn : styles.activateBtn}`}
    >
      {children}
    </button>
  );
}
