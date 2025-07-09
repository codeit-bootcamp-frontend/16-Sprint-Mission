const BASE_URL = import.meta.env.VITE_TEST_DATA;

/**
 * @param {string} endpoint - 요청할 API 경로
 * @param {object} params - 쿼리 파라미터 (기본값: 빈 객체)
 * @returns {Promise<array>} - API로부터 받아온 list 데이터 반환
 */
export async function fetchData(endpoint, params = {}) {
  //URL파라미터 문자열로 변환
  const query = new URLSearchParams(params).toString();
  const url = `${BASE_URL}/${endpoint}?${query}`;

  try {
    //GET 요청 수행
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`[GET] ${endpoint} 실패`);
      return [];
    }

    // JSON 데이터를 파싱해 list 반환
    const { list } = await response.json();
    return list;
  } catch (error) {
    console.error(`[GET] ${endpoint} 오류:`, error);
    return [];
  }
}
