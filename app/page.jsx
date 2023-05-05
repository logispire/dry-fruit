import Image from 'next/image';

export default async function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			Home Page
			{/* {data.map((product) => (
				<Product
					title={product.title}
					price={product.price}
					description={product.description}
					category={product.category}
					image={product.image}
				/>
			))} */}
		</main>
	);
}

// const Product = ({ title, price, description, category, image }) => {
// 	return (
// 		<>
// 			<div className="product__card">
// 				<h3>{title}</h3>
// 				<img src={image} height={100} width={100} loading="lazy" />

// 				<p>{description}</p>

// 				<div>
// 					Category: <p className="">{category}</p>
// 				</div>

// 				<p>Price: ${price}</p>
// 			</div>
// 		</>
// 	);
// };
