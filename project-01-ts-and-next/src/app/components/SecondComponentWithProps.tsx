import React from "react";

interface Props {//2882,90
    name: string
}

export default function SecondComponentWithProps({name}: Props): JSX.Element {
    return (
        <div>
            <p>Meu segundo componente com props usando {name}</p>
        </div>
    )
}