"use client"; // next.js entende que o uso de useState
// não deveria misturar com html, se vc precisar fazer isso
// então precisa usar o use cliente no componente ou no pai do componente
import styles from './page.module.css';
import FirstComponent from './components/FirstComponent';
import SecondComponentWithProps from './components/SecondComponentWithProps';
import DestructuringProps from './components/DestructuringProps';
import StateComponent from './components/StateComponent';

export default function Home() {
  return (
    // pq usamos main aqui?
    // E <section ... quando criamos um container?
    
    <main className={styles.main}> 
      <div className={styles.description}>
        <StateComponent />
        <FirstComponent />
        <SecondComponentWithProps name={"Typescript"} /> 
        <DestructuringProps 
                            title='Magic'
                            description={'Magic is a new form of...'}
                            commentsQty={4}
                            category='MAGIC'/>
      </div>
    </main>
  )
}
