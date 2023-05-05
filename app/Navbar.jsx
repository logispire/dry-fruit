import Link from 'next/link';

export default function Navbar() {
	return (
		<header>
			<span className="flex justify-between bg-white p-10">
				<h1 className="text-xl">Navigation Bar LOGO</h1>
				<ul className="flex gap-8 font-medium text-[20px]">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/product">Product</Link>
					</li>
					<li>
						<Link href="/user/login">Login</Link>
					</li>
					<li>
						<Link href="/user/signup">Sign Up</Link>
					</li>
				</ul>
			</span>
		</header>
	);
}
