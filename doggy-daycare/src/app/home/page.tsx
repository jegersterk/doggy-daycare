import Image from "next/image";
async function getDogs() {
	// const res = await fetch('https://dog.ceo/api/breeds/list/all');
	const res = await fetch('https://dog.ceo/api/breeds/image/random');
	const data = await res.json();
	return data;
}

export default function Page() {
	const dogs = getDogs();
	return (
	  <div className="min-h-screen flex flex-col justify-between items-center">
		<header className="flex flex-col justify-center items-center h-96">
			<h1 className="text-shadow-sm flex justify-center text-5xl w-96 text-center">Our Dogs</h1>
			<div className="flex flex-row justify-between items-center gap-10">
				<button className="block bg-customBlue py-1 px-2 text-2xl rounded-md">Search</button>
				<button className="block bg-customBlue py-1 px-2 text-2xl rounded-md">Filter</button>
			</div>
		</header>
		<main>
			<img src="" alt="" />
		</main>
	  </div>
	);
  }