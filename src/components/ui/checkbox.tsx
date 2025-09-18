'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot='checkbox'
      className={cn(
        // 기본 상태: 2픽셀 테두리를 적용
        'peer border-2 border-black bg-yellow-50 ',
        // 체크된 상태: 테두리를 없애고(border-0), 배경색과 텍스트 색을 변경
        'data-[state=checked]:border-0 data-[state=checked]:bg-violet-600 data-[state=checked]:text-white',
        // 그 외 나머지 공통 스타일
        'focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
        'size-8 shrink-0 rounded-full shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot='checkbox-indicator'
        className='flex items-center justify-center text-current transition-none'
      >
        <CheckIcon className='size-4 stroke-4' />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
