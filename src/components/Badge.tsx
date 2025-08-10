import clsx from 'clsx';

// 테스트
interface BadgeProps {
  mode?: 'todo' | 'done';
  children?: React.ReactNode;
  className?: string;
}

const Badge = ({ mode = 'todo', children, className }: BadgeProps) => {
  const baseClass = 'font-accent rounded-[1.68rem] px-6 pt-1.5 pb-0.5 text-lg';

  const getModeClass = (): string => {
    const modeClass: Record<string, string> = {
      todo: 'bg-lime-300 text-green-700',
      done: 'bg-green-700 text-amber-300',
    };
    return modeClass[mode];
  };

  return <div className={clsx(baseClass, getModeClass(), className)}>{children}</div>;
};

export default Badge;
