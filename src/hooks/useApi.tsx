import { useEffect, useRef, useState } from 'react';
// 컴포넌트에서 api를 호출할때 로딩, 실패, 결과를 반환함
// data : api 호출 결과
// loading : api 호출 중인지 여부
// error : api 호출 실패 여부 및 에러 메시지

// @param {Function} apiFunction - API 호출 함수
// @param [] deps - 의존성 배열 (옵션)
export default function useApi(apiFunction: () => Promise<any>, deps: any[]) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);
  // useRef를 사용하여 컴포넌트가 마운트된 상태인지 확인
  const isMouted = useRef(true);
  useEffect(() => {
    return () => {
      // 컴포넌트가 언마운트될 때 isMouted를 false로 설정
      isMouted.current = false;
    };
  }, []);

  // apiFunction을 호출하여 데이터를 가져옴
  useEffect(() => {
    setLoading(true);
    setError(null);
    apiFunction()
      .then((result) => {
        if (isMouted.current) {
          setData(result);
        }
      })
      .catch((err) => {
        if (isMouted.current) {
          setError(err.message);
        }
      })
      .finally(() => {
        if (isMouted.current) {
          setLoading(false);
        }
      });
  }, deps);

  return { data, loading, error };
}
