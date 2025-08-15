import {
  QueryClient,
  defaultShouldDehydrateQuery,
  isServer,
} from "@tanstack/react-query";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1분
      },
      dehydrate: {
        // include pending queries in dehydration
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

export function getQueryClient() {
  if (isServer) {
    // 서버일때 새로운 쿼리 클라이언트 인스턴스 반환
    return makeQueryClient();
  } else {
    // 클라이언트일때
    // browserQueryClient가 undefined라면 새로운 쿼리 클라이언트 인스턴스 반환
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    // 값이 있다면 변수에 할당되어 있는 쿼리 클라이언트 인스턴스 반환
    return browserQueryClient;
  }
}
