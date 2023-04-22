import React from "react";

interface Props {
    name: string
}

export default function SecondComponentWithProps({name}: Props): JSX.Element {
    return (
        <div>
            <p>Meu segundo componente com props usando {name}</p>
        </div>
    )
}