import clsx from 'clsx';

interface BadgeProps {
  mode?: 'todo' | 'done';
  children?: React.ReactNode;
  className?: string;
}

const BASE_CLASS = 'font-accent rounded-[1.68rem] px-6 pt-1.5 pb-0.5 text-lg' as const;

const MODE_CLASS = {
  todo: 'bg-lime-300 text-green-700',
  done: 'bg-green-700 text-amber-300',
} as const;

const Badge = ({ mode = 'todo', children, className }: BadgeProps) => {
  return <div className={clsx(BASE_CLASS, MODE_CLASS[mode], className)}>{children}</div>;
};

export default Badge;
