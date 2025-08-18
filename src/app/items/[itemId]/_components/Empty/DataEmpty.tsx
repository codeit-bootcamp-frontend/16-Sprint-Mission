import Link from "next/link";

const DataEmpty = () => {
  return (
    <div className="text-center">
      <p className="text-[18px] font-bold">데이터가 없습니다.</p>
      <Link
        href="/"
        className="inline-block mt-3 px-3 py-2 text-[17px] text-white bg-violet600 rounded-sm"
      >
        목록으로 돌아가기
      </Link>
    </div>
  );
};

export default DataEmpty;
