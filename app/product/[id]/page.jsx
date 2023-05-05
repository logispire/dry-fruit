async function fetchProduct(id) {
	const res = await fetch(`https://fakestoreapi.com/products/${id}`);
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	// Recommendation: handle errors
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

export default async function Page({ params }) {
	const product = await fetchProduct(params?.id || 0);

	return (
		<>
			<ProductDetail
				title={product.title}
				price={product.price}
				description={product.description}
				category={product.category}
				image={product.image}
			/>
			<div>{JSON.stringify(product, null, 2)}</div>;
		</>
	);
}

export const ProductDetail = ({
	title,
	price,
	description,
	category,
	image,
}) => {
	return (
		<section className="text-gray-600 dark:bg-gray-900 body-font overflow-hidden">
			<div className="container px-5 py-24 mx-auto">
				<div className="lg:w-4/5 mx-auto flex flex-wrap">
					<img
						alt={title}
						className="lg:w-1/2 w-full lg:h-96 h-64 object-contain object-center rounded"
						src={image}
					/>
					<div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
						<h1 className="text-gray-900 dark:text-white text-3xl title-font font-medium mb-1">
							{title}
						</h1>
						<p className="leading-relaxed dark:text-gray-300">
							{description}
						</p>
						<div className="flex mt-6 pb-5">
							<span className="title-font font-medium text-2xl text-gray-900 dark:text-white">
								{price}
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
