'use client';

import {Button} from "@/components/ui/Button";

export default function Jose(){

  return (
    <div>
      <h1>Hola soy José!!!!</h1>
      <Button text={"Whatsapeame!!!"} onClick={() => {
        alert('Mi whatsapp es 1122343445, escribeme');
      }}/>
    </div>
  )
}