import TodoClient from "@/components/Todos/TodoClient";
import getTodos from "@/components/Todos/getTodos";

const Home = async () => {
  const initialItems = await getTodos();

  return <TodoClient initialItems={initialItems} />;
};

export default Home;
