## Sprint Misson 5

### 요구사항

- [x] 중고마켓 페이지 주소는 “/items” 입니다.
- [x] 페이지 주소가 “/items” 일때 상단네비게이션바의 “중고마켓" 버튼의 색상은 “3692FF”입니다.
- [x] 상단 네비게이션 바는 이전 미션에서 구현한 랜딩 페이지와 동일한 스타일로 만들어 주세요.
- [x] 전체 상품에서 드롭 다운으로 “최신 순” 또는 “좋아요 순”을 선택해서 정렬을 할 수 있습니다.
- [x] 베스트 상품의 정렬 기준은 `favorit`, **favorit이 가장 높은 상품 4가지**를 표시합니다.
- [x] ‘상품 등록하기’ 버튼을 누르면 “/additem” 로 이동합니다. ( 빈 페이지 )
- [x] 카드 데이터는 제공된 백엔드 API 페이지의 GET 메소드인 “/products”를 사용해주세요.
- [x] 미디어 쿼리를 사용하여 반응형 view 마다 물품 개수를 다르게 보여줍니다 (서버로 요청하는 값은 동일)
- [x] 페이지 네이션 기능을 구현합니다.
- [x] 반응형으로 보여지는 물품들의 개수를 다르게 설정할때 서버에 보내는 pageSize값을 적절하게 설정합니다.

  > > #### 베스트 상품
  >
  > - Desktop : 4개 보이기
  > - Tablet : 2개 보이기
  > - Mobile : 1개 보이기
  >
  > > #### 전체 상품
  >
  > - Desktop : 10개 보이기
  > - Tablet : 6개 보이기
  > - Mobile : 4개 보이기

### 추가 구현사항

- [x] ESLint, Stylelint, Prettier, Husky 사용
- [x] Vite 번들러 기반으로 변경
- [x] ts 기반으로 제작
- [ ] 테스트 코드 제작
- [ ] 재사용 가능한 부분들을 커스텀 훅 사용
- [ ] 스켈레톤 디자인 로딩 화면 제작

## 구현

### 1. 프로젝트 환경 세팅

- Vite + TypeScript로 초기화

- ESLint, Stylelint, Prettier, Husky 연동

### 2. 라우팅 구조 잡기

- / (랜딩 페이지)

- /board (자유게시판)

- /items (중고마켓)

- /additem (상품등록 빈 페이지)

### 3. 글로벌 인증 컨텍스트

- AuthProvider 생성: user, isLoggedIn 상태 관리

- useAuth 훅으로 상태 접근 및 setUser 제공

- useAuthService 훅으로 로그인·로그아웃 비즈니스 로직 분리

### 4. 헤더 컴포넌트 구현

- 로고 / 내비게이션 버튼

- 로그인 상태에 따라 UserProfile ↔️ 로그인 | 회원가입 버튼 표시

- useAuthService.login으로 모의 로그인 처리

- useAuthService.logout 수행

- [todo]: 기존 회원가입 로그인 페이지 마이그레이션 및 인증 수행

### 5. 미디어 쿼리용 훅 제작

- useMediaQuery 로 현재 브레이크포인트(mobile/tablet/desktop) 반환

- getMediaCount 로 각 뷰포트별 bestProductsCount·allProductsCount 제공

### 6. API 연동

- fetchProducts(page, pageSize, sort, keyword) 함수 작성

- axios 기반 에러 핸들링 로직 구현

### 7. API 호출 / 로딩 / 에러 훅

- useApi(apiFn, deps) 훅: loading·data·error 상태 자동 관리

- useCallback 으로 apiFn 메모이제이션

### 8. 베스트 상품 컴포넌트

- bestProductsCount 따라 1/2/4개 요청

- useApi(() => fetchProducts(1, count, 'favorite', ''), [count])

- ProductCard + 로딩 스켈레톤 SkeletonCard 렌더링

### 9. 전체 상품 컴포넌트

- page, sort, keyword 상태 선언

- 헤더(AllProductsHeader) 분리: 검색·정렬·등록

- useDebounce 커스텀 훅으로 검색어 300ms 디바운스

- useApi(() => fetchProducts(page, pageSize, sort, debouncedKeyword), [...])

- ProductCard + 로딩 스켈레톤 그리드 표시

### 10. 페이지네이션 컴포넌트

- totalPages = ceil(totalCount / pageSize) 계산

- 최대 5개 버튼: 현재 페이지 중심으로 앞뒤 2개씩

- “‹”, “›” 이전·다음 버튼

- 클릭 시 setPage 호출 → useApi 자동 재호출

### 11. 반응형 스타일링

- Mobile / Tablet / Desktop 에 따라

- 베스트 상품: 1/2/4 컬럼

- 전체 상품: 4/6/10 개 요청, 그리드 컬럼 수 조절

- 검색·정렬 UI 배치 변경

- select 아이콘을 모바일에서는 원형 버튼, 태블릿 이상에서 텍스트+화살표로

### todo

- 상태 관리 최적화 필요
- 가독성 향상 및 관심사 분리 재확인
- 페이지네이션에서 현재 페이지를 볼 수 있도록 유저 경험 향상
- 컴포넌트 메모이제이션
- 기존 페이지들 마이그레이션
- 테스트 코드 작성(API 유틸, 훅, 주요 컴포넌트 단위 테스트)
- notFound페이지 제작
- 오류 상황시 UI로 보여줄 수 있도록 함

### issue

- 아직 `srcset` 적용이 잘 안된다.
- `AllProductHeader`에서 반응형 css가 미흡한거같다.
- 타입 선언에서 혼동이 온다.
