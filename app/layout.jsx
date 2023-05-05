import Navbar from './Navbar';
import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Dry Fruit',
	description: 'Dry Fruit',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-neutral-200`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
