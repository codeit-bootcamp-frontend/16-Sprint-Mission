"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>에러가 발생했습니다.</h2>
        <p>{error.message}</p>
        <button onClick={() => reset()}>다시 시도하기</button>
      </body>
    </html>
  );
}
