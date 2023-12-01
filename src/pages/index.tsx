import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

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

const ProductCard: React.FC<Product> = (props) => {
  const { id, title, price, description, image } = props;
  return (
    <div className="max-w-md mx-auto my-8 bg-white rounded-md overflow-hidden shadow-md">
      <Image width={300} height={300} src={image} alt={title} className="w-full h-[300px] object-cover" />

      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 line-clamp-1">{title}</h2>
        <p className="text-gray-600 mt-2 line-clamp-2">{description}</p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-800 font-semibold">${price}</span>
          <Link href={`/products/${id}`} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>NOt Onlineshop</title>
        <meta name="description" content="Бүх төрлийн хувцас байхгүй " />
      </Head>
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
          <div className="grid grid-cols-4 gap-4">
            {data.map((product: Product) => (
              <div key={product.id}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return {
    props: { data },
  };
}
