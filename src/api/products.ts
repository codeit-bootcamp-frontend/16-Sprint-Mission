import axios from 'axios';

const API_URL = 'https://panda-market-api.vercel.app';

// 각 상품의 상세 정보
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  tags: string[];
  ownerId: number;
  ownerNickname: string;
  favoriteCount: number;
  createAt: string;
}

// 상품 목록 조회
/*
 * @param {number} page - 페이지 번호 (기본값: 1)
 * @param {number} pageSize - 페이지당 상품 개수 (기본값: 10)
 * @param {string} orderBy - 정렬 기준['favorite, recent'](기본값: 'recent')
 * @param {string} keyword - 검색어 (기본값: '')
 */
export async function fetchProducts(
  page: number = 1,
  pageSize: number = 10,
  orderBy: 'favorite' | 'recent' = 'recent',
  keyword: string = ''
): Promise<{ totalCount: number; list: Product[] }> {
  try {
    const response = await axios.get<{ totalCount: number; list: Product[] }>(
      `${API_URL}/products`,
      {
        params: {
          page,
          pageSize,
          orderBy,
          keyword,
        },
      }
    );
    const { totalCount, list } = response.data;
    return {
      totalCount,
      list,
    };
  } catch (error: unknown) {
    let errMsg = '상품 목록을 불러오는 중 오류가 발생했습니다.';
    // 에러 상황 세분화하여 로그 출력
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // 서버가 상태 코드로 응답했을 때
        errMsg += ` 상태 코드: ${error.response.status}`;
        console.error(errMsg, error.response.status, error.response.data);
        throw new Error(errMsg);
      } else if (error.request) {
        // 요청이 이루어졌으나 응답이 없을 때
        errMsg += ` 응답이 없습니다.`;
        console.error(errMsg, error.request);
        throw new Error(errMsg);
      } else {
        // 요청 설정 중 오류가 발생했을 때
        errMsg += ` 설정 오류`;
        console.error(errMsg, error.message);
        throw new Error(errMsg);
      }
    } else {
      // 예상치 못한 오류
      errMsg += ` 예상치 못한 오류가 발생했습니다.`;
      console.error(errMsg, error);
      throw new Error(errMsg);
    }
  }
}
