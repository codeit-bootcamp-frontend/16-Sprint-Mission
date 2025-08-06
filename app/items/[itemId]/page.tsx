interface ItemDetailPageProps {
  params: { itemId: string };
}

const ItemDetailPage = ({ params }: ItemDetailPageProps) => {
  return (
    <section className="mt-10">
      <p className="text-red-500">{params.itemId}</p>
    </section>
  );
};

export default ItemDetailPage;
