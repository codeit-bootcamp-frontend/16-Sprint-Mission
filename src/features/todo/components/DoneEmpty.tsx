import Empty from "@/components/Empty";

const DoneEmpty = () => {
  return (
    <Empty
      src="/images/DoneEmptyIcon.svg"
      width={240}
      height={240}
      alt="아직 다 한 일이 없어요."
    >
      아직 다 한 일이 없어요. <br />
      해야 할 일을 체크해보세요!
    </Empty>
  );
};

export default DoneEmpty;
