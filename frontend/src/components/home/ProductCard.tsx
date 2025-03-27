const ProductCard = ({
  id,
  title,
  price,
  imageUrl,
}: {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const productId = id;
  return (
    <div className="border-2 h-fit p-6 flex flex-col gap-4">
      <img className="w-full aspect-9/12" src={imageUrl} alt="Product Image" />
      <h1 className="text-center">{title}</h1>
      <p className="text-right">{`$${price}`}</p>
    </div>
  );
};
export default ProductCard;
