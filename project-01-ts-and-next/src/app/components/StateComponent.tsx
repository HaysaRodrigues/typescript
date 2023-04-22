import React, {ChangeEvent, useState} from 'react';
// {useState} importanmos ele como
// destructuring tb pois isso é um
// algo a mais de react


export default function StateComponent () {
//sintaxe do useState, sempre com set
// a primeira é uma de consulta e a outraa
// que chama set seria a de alteração

  const [text, setText] = useState<string | null>();

  //ChangeEvent já é oferecido pelo react pra 
  // que seja possível tipar o event com typescript
  // além disso, a gente passa genericamente o real tipo
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  return (
    <div>
      <p>manipulando estado useState {text}</p>
      <input type='text' onChange={handleInputChange}></input>
    </div>
  );
}
