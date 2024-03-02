'use client';

import {Button} from "@/components/ui/Button";

export default function Welding(){

  return (
    <div>
      <h1>Se necesita maestro soldador</h1>
      <Button text={"Solicitar info"} onClick={() => {
        alert('El trabajo es de de 9 a 9...');
      }}/>
    </div>
  )
}