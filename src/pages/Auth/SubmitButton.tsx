import { useFormState } from 'react-hook-form';
import styles from './styles/SubmitButton.module.css';
import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
}

export default function SubmitButton({ children }: Props) {
  const { isValid } = useFormState();

  return (
    <button
      type="submit"
      className={clsx(styles.authBtn, {
        [styles.inActivateBtn]: !isValid,
        [styles.activateBtn]: isValid,
      })}
    >
      {children}
    </button>
  );
}
