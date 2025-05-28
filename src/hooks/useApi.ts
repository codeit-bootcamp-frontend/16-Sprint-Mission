import { useCallback, useEffect, useRef, useState } from 'react';
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

  const memoAPI = useCallback(apiFunction, deps);
  // apiFunction을 호출하여 데이터를 가져옴
  useEffect(() => {
    let cancled = false;
    setLoading(true);
    setError(null);
    console.log('API 호출 시작:', apiFunction);
    apiFunction()
      .then((result) => {
        if (!cancled) {
          setData(result);
        }
      })
      .catch((err) => {
        if (!cancled) {
          setError(err.message);
        }
      })
      .finally(() => {
        if (!cancled) {
          setLoading(false);
          console.log('API 호출 완료:', data);
        }
      });

    return () => {
      cancled = true;
    };
  }, [memoAPI]);
  return { data, loading, error };
}
