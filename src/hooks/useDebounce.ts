// src/hooks/useDebounce.ts
import { useState, useEffect } from 'react';

/**
 * value가 바뀐 뒤 delay(ms) 만큼 지난 후에야 debouncedValue를 업데이트해 줍니다.
 * @param value 원본 값
 * @param delay 디바운스 지연 시간 (밀리초)
 */
export default function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // value 또는 delay가 바뀌면, 이전 타이머를 취소하고 새로 시작
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
