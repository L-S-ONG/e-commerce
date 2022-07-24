import { useParams } from "react-router";
import { BackspaceIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductPage = () => {
  const params = useParams();

  const product = useSelector((state) => state.products.products[params.id - 1]);

  const { title, price, category, description, image } = product;
  return (
    <>
    
      <section className="w-full min-h-screen py-10 bg-gray-200">
      <Link to="/">
        <button
          type="button"
          className="ml-40 m-5 inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700"
        >
          <BackspaceIcon
            className="-ml-0.5 mr-2 h-4 w-4"
            aria-hidden="true"
          />
          Back to home
        </button>
      </Link>
        <section className="sm:flex mx-auto bg-white p-4 w-10/12 shadow-lg">
          <div className="lg:w-2/6 w-full">
            <img src={image} alt={title} />
          </div>
          <div className="mt-6 sm:mt-0 ml-8 flex flex-col items-start">
            <h1 className="text-xl font-bold sm:mt-20">{title}</h1>
            <h1 className="text-2xl font-bold text-gray-800">$ {price}</h1>
            <p className="bg-black w-full h-1 my-2"></p>
            <p className="text-justify">{description}</p>
            <div>

              <Link to="/cart">
                <button
                  type="button"
                  className="my-2 inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700"
                >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
                 &nbsp; Add to cart
                </button>
              </Link>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default ProductPage;