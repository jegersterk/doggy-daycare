import { apiKey } from "../api-key";
import Image from "next/image";

export default async function Results(){
    const res = await fetch(`https://api.thedogapi.com/v1/images/search?limit=20&api_key=${apiKey}`);
    const data = await res.json();
    return(
        <div>
            <h1>hello</h1>
            <Image src={data[0].url} alt="image" width={200} height={200}/>
        </div>
    );
}