import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL;

export const getProducts = async ({ page = 1, pageSize = 10, orderBy = 'recent', keyword = '' }) => {
  try {
    const res = await axios.get(`${baseURL}/products`, {
      params: { page, pageSize, orderBy, keyword },
    });
    return res.data;
  } catch (error) {
    console.log('상품 목록 api 호출 실패 :', error.message);
    throw error;
  }
};

export const getProductDetail = async (productId) => {
  try {
    const res = await axios.get(`${baseURL}/products/${productId}`);
    return res.data;
  } catch (error) {
    console.log('상품 상세 정보 api 호출 실패 :', error.message);
    throw error;
  }
};

export const postProduct = async (product) => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.post(`${baseURL}/products`, product, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return res.data;
  } catch (error) {
    console.log('상품 등록 api 호출 실패 :', error.message);
    throw error;
  }
};

export const postComment = async (productId, content) => {
  try {
    const token = localStorage.getItem('token');
    const res = await axios.post(
      `${baseURL}/products/${productId}/comments`,
      { content: content },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log('상품 댓글 등록 api 호출 실패 :', error.message);
    throw error;
  }
};

export const getComments = async (productId, limit = 10, cursor = null) => {
  try {
    const res = await axios.get(`${baseURL}/products/${productId}/comments`, {
      params: {
        limit,
        cursor,
      },
    });
    return res.data;
  } catch (error) {
    console.log('상품 댓글 목록 api 호출 실패 :', error.message);
    throw error;
  }
};

export const patchComment = async (commentId, content) => {
  try {
    const res = await axios.patch(`${baseURL}/comments/${commentId}`, { content: content });
    return res.data;
  } catch (error) {
    console.log('상품 댓글 수정 api 호출 실패 :', error.message);
    throw error;
  }
};

export const deleteComment = async (commentId) => {
  try {
    const res = await axios.delete(`${baseURL}/comments/${commentId}`);
    return res.data;
  } catch (error) {
    console.log('상품 댓글 삭제 api 호출 실패 :', error.message);
    throw error;
  }
};

export const postSignup = async (email, password, nickname, passwordConfirmation) => {
  try {
    const res = await axios.post(`${baseURL}/auth/signup`, {
      email,
      password,
      nickname,
      passwordConfirmation,
    });
    return res.data;
  } catch (error) {
    console.log('회원가입 api 호출 실패 :', error.message);
    throw error;
  }
};

export const postLogin = async (email, password) => {
  try {
    const res = await axios.post(`${baseURL}/auth/signin`, {
      email,
      password,
    });
    return res.data;
  } catch (error) {
    console.log('로그인 api 호출 실패 :', error.message);
    throw error;
  }
};
