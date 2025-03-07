import Image from "next/image";
import {apiKey} from "../../../api-key";
import Results from "../../../components/results";
import Card from "../../../components/card";
import { dogs } from "../../../dog-list";

export default async function Page() {
	const res = await fetch(`https://api.thedogapi.com/v1/images/search?limit=20&api_key=${apiKey}`); 
	const data = await res.json();
	console.log("here is data and api key: ",data, apiKey);
	return (
	  <div className="min-h-screen flex flex-col justify-between items-center">
		<header className="flex flex-col justify-center items-center h-96">
			<h1 className="text-shadow-sm flex justify-center text-5xl w-96 text-center">Our Dogs</h1>
			<div className="flex flex-row justify-between items-center gap-10">
				<button className="block bg-customBlue py-1 px-2 text-2xl rounded-md">Search</button>
				<button className="block bg-customBlue py-1 px-2 text-2xl rounded-md">Filter</button>
			</div>
			
		</header>
		<main className="flex flex-col">
		{dogs.map((dog, index) => (
          <Card key={index} name={dog.name} breed={dog.breed} age={dog.age} owner={dog.owner} />
        ))}
		<Card name="{dog.name}" breed="{dog.breed}" age={23} owner="{dog.owner}" />
			<Results/>
			
			{/* <img src={data[0].url} alt="a random picture of dog" />  */}
		</main>
	  </div>
	);
  }