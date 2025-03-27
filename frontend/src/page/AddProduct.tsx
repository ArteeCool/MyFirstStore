import { FormEvent, useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const body = {
      name,
      price,
      image,
    };

    try {
      const response = await fetch(
        "https://corsproxy.io/?url=https://myfirststore.onrender.com/api/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add product.");
      }

      console.log("Product added:", body);
      setName("");
      setPrice("");
      setImage("");
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="w-full min-h-[93vh] flex justify-center items-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="outline-none bg-neutral-100 rounded-full px-6 py-4 text-2xl max-w-[500px] w-1000"
          value={name}
          onChange={(element) => setName(element.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          className="outline-none bg-neutral-100 rounded-full px-6 py-4 text-2xl max-w-[500px] w-1000"
          value={price}
          onChange={(element) => setPrice(element.target.value)}
        />
        <input
          type="url"
          placeholder="Image url"
          className="outline-none bg-neutral-100 rounded-full px-6 py-4 text-2xl max-w-[500px] w-1000"
          value={image}
          onChange={(element) => setImage(element.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-full px-6 py-4 text-2xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default AddProduct;
