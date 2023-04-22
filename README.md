### Aprendizados iniciais

- Usamos templates para instalar typescript na criação do react app `npx create-next-app --typescript project-name`
- a extensão, ao contrário de .jsx passa a ser .tsx
- é legal usar uma extensão no vscode/webstorm com code snippets chamada: `TypeScript React code snippets`
    - `tsrafce` é um atalho muito útil que cria componentes

### funções em componentes 
- podemos criar funções com seus parâmetros tipadas

### Importando componentes 
- ao importar componentes tipados pelo ts, ficaremos atentas aos valores e tipos das props de cada componente.

### Destructuring nas props com ts
- o destructuring é um recurso do ES6, que permite separar um array ou objeto em variáveis
- assim, podemos criar usando TS com a sua interface
- exemplo:

*antes do destructing:*

    `const Destructuring = ({}) => {
        return (
            <div>
                <h2>{props.title}</h2>
                <h2>{props.description}</h2>
            </div>
        )
    }`

**depois do destructuring** 

    ` 
    interface Props { // criado uma interface com ts
        title: string;
        description: string | undefined;
    };

    const Destructuring = ({title, description}: Props) => { // que faz ser possível um destructuring mais bonito
        return (
            <div>
                <h2>{title}</h2>
                <h2>{description}</h2>
            </div>
        )
    }
    `

### hooks com ts
- useState: consultar e alterar o estado de algum dado.
- para usar nós atrelamos uma função **set** a um evento, como mudança de dado em input e alteramos o valor da variável base
- podemos adptar esse recurso para TS, dessa forma:

`   const [text, setText] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value); // always use set to change the value of the state
    }

    return {
        <div>
            <p>O paragrafo é: {text}</p>
            <input type="text" onChange={handleChange}>
        </div>
    }

`
- o ts tem methods de tipagem para serem usados pelo react
- o useState também pode ser tipado

### enum

### types
### ContextApi
