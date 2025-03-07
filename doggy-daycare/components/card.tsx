import React from 'react';
import { Dog } from '../interfaces';
// import { albert } from '../dog-list';

export default function Card({name, breed, age, owner}:Dog){
    return(
        <div className="bg-white border-2 border-gray-200 font-black w-10 h-10">
            <h1 className='font-serif text-zinc-900'>name: {name}</h1>
            <h2>breed: {breed}</h2>
            <h2>age: {age}</h2>
            <h2>owner: {owner}</h2>
        </div>
    )
}