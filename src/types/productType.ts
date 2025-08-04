export interface ProductItemType {
  createdAt: string;
  favoriteCount: number;
  ownerNickname: string;
  ownerId: number;
  images: string[];
  tags: string[];
  price: number;
  description: string;
  name: string;
  id: number;
}
export interface ProductListType {
  totalCount: number;
  list: ProductItemType[];
}

export interface ProductItemDetailType {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  images: string[];
  ownerId: number;
  favoriteCount: number;
  createdAt: string;
  updatedAt: string;
  ownerNickname: string;
  isFavorite: boolean;
}

export interface InquiryListType {
  nextCursor: number;
  list: InquiryItemType[];
}

export interface InquiryItemType {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
    image: string[] | null;
  };
}
