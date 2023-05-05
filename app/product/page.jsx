// "use server"

import Image from 'next/image';
import Link from 'next/link';

async function getData(limit) {
	const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	// Recommendation: handle errors
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

export default async function Product() {
	const data = await getData(10);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 ">
			{/* <div className="product__card">
				<h3>{'Product'}</h3>
				<img
					src={
						'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
					}
					height={100}
					width={100}
					loading="lazy"
				/>

				<p>
					{
						'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday'
					}
				</p>

				<div>
					Category: <p className="">{"men's clothing"}</p>
				</div>

				<p>Price: ${100}</p>
			</div> */}
			<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{data.map((product) => (
					// <ProductComp
					// 	title={product.title}
					// 	price={product.price}
					// 	description={product.description}
					// 	category={product.category}
					// 	image={product.image}
					// />
					<ProductCard
						key={product.id}
						id={product.id}
						title={product.title}
						price={product.price}
						description={product.description}
						category={product.category}
						image={product.image}
					/>
				))}
			</div>
		</main>
	);
}

const ProductComp = ({ title, price, description, category, image }) => {
	return (
		<>
			<div className="product__card bg-white p-2 rounded-lg">
				<h3>{title}</h3>
				<img src={image} height={100} width={100} loading="lazy" />

				<p>{description}</p>

				<div>
					Category: <p className="">{category}</p>
				</div>

				<p>Price: ${price}</p>
			</div>
		</>
	);
};

const ProductCard = ({ id, title, price, description, category, image }) => {
	return (
		<div className="p-8 max-w-md mx-auto dark:bg-gray-900 w-full">
			<Link
				href={`/product/${id}`}
				className="group relative block overflow-hidden border dark:bg-gray-500 border-gray-100 dark:border-gray-400"
			>
				<img
					src={image}
					alt={title}
					height={100}
					width={100}
					className="py-4 h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72"
				/>

				<div className="relative border-t dark:bg-gray-700 border-gray-100 dark:border-gray-400 bg-white p-6">
					<h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
						{title}
					</h3>

					<p className="mt-1.5 text-sm text-gray-700 dark:text-gray-200">
						{price}
					</p>
				</div>
			</Link>
		</div>
	);
};
