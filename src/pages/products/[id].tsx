import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  const { data: product, isLoading, error } = useSWR(`https://fakestoreapi.com/products/${id}`, fetcher);

  if (isLoading) return <>Loading...</>;
  if (error) return <>Error...</>;

  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-white text-lg font-semibold">
            Logo
          </a>
          <div className="space-x-4">
            <a href="#" className="text-white">
              Home
            </a>
            <a href="#" className="text-white">
              About
            </a>
            <a href="#" className="text-white">
              Services
            </a>
            <a href="#" className="text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto my-8 bg-white rounded-md overflow-hidden shadow-md">
          <img src={product.image} alt="Product Image" className="w-full h-64 object-cover" />

          <div className="p-6">
            <h1 className="text-3xl font-semibold text-gray-800">{product.title}</h1>
            <p className="text-gray-600 mt-2">{product.description}</p>

            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-800 font-semibold text-xl">${product.price}</span>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add to Cart</button>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-800">Product Details</h2>
              <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
