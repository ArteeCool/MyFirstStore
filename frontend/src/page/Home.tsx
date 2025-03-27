import { useEffect, useState } from "react";
import ProductCard from "../components/home/ProductCard";

interface Product {
  createdAt: string;
  image: string;
  name: string;
  price: string;
  updatedAt: string;
  _id: string;
}

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://corsproxy.io/?url=https://myfirststore.onrender.com/api/products`
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    })();
  }, []);

  return (
    <div className="w-full h-[93vh] py-10 px-20 grid grid-cols-auto-fit gap-10">
      {products.map((value: Product, index) => {
        return (
          <ProductCard
            key={index}
            id={value._id}
            title={value.name}
            price={value.price}
            imageUrl={value.image}
          />
        );
      })}
    </div>
  );
};
export default Home;
