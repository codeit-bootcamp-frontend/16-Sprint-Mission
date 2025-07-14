import Image from "next/image";
import Badge from "@/components/Badge";
import ListItem from "@/components/ListItem";

interface Todo {
  id: string;
  name: string;
  isCompleted: boolean;
}
interface DoneListProps {
  dones: Todo[];
}

const DoneList = ({ dones }: DoneListProps) => {
  return (
    <div className="w-full">
      <Badge text="DONE" variant="done" />

      {!dones && <ListEmpty />}
      {dones && (
        <ul>
          {dones.map((done) => (
            <ListItem key={done.id} item={done} variant="done" />
          ))}
        </ul>
      )}
    </div>
  );
};

export default DoneList;

const ListEmpty = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src="/images/done-empty.png"
        alt="머리 긁는 두잇 캐릭터"
        width="240"
        height="240"
      />
      <p className="text-gray-400 text-base text-center">
        아직 다 한 일이 없어요.
        <br />
        해야 할 일을 체크해보세요!
      </p>
    </div>
  );
};
