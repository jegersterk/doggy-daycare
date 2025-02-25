import Image from "next/image";

export default function Page() {
	return (
	  <div className="bg-customYellow min-h-screen flex flex-col justify-between items-center">
		<header className="flex flex-col justify-center items-center h-96 bg-white">
			<h1 className="text-shadow-sm flex justify-center text-5xl w-96 text-center">Our Dogs</h1>
			<a className="block bg" href="">a</a>
		</header>
		<Image src={'/images/doggy-cropped.png'} width={500} height={500} alt="a golden retriever with sunglasses"/>
	  </div>
	);
  }