'use client';

import { Button } from '@/components/ui/Button';
import {useState} from "react";

export default function Home() {
  const [email , setEmail] = useState("")

  const onHandleInputChange = (evt: any) => {
    const {name, value} = evt.target;

    console.log('Value', value);
    setEmail(value);
  }

  return (
    <div>
      <h1>Hola mundo!!!</h1>
      <p><strong>Mi correo es:</strong> {email}</p>
      <label htmlFor="email" className="ml-3 font-extrabold">Ingrese email:</label>
      <input type="email" id="email" className="border-solid border-2 border-red-500 rounded-[6px] ml-2 px-3 p-1" value={email} onChange={onHandleInputChange}/>

      <Button text={"Email"} onClick={() => {
        alert(`Te enviaremos un email al correo: ${email}`);
      }} />


      <button
        className="bg-green-700 py-3 px-6 rounded text-white font-extrabold underline shadow-xl"
        onClick={() => {
          alert('Hola, esto es un saludo...')
        }}
      >
        saludo
      </button>

    </div>
  );
}
