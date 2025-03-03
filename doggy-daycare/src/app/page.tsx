import Image from "next/image";
import Link from 'next/link';

export default function Page() {
	return (
	  <div className="min-h-screen flex flex-col justify-between items-center">
		<header className="gap-16 flex flex-col justify-center items-center h-[30rem]">
			<h1 className="text-shadow flex justify-center text-5xl w-72 text-center">Welcome To Doggy Daycare</h1>
			<Link className="block bg-customBlue py-1 px-2 text-2xl rounded-md" href="/home" >Our Dogs</Link>
		</header>
		<Image src={'/images/doggy-cropped.png'} width={500} height={500} alt="a golden retriever with sunglasses"/>
	  </div>
	);
  }