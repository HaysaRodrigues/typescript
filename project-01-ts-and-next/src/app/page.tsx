import Image from 'next/image'
import styles from './page.module.css'
import FirstComponent from './components/FirstComponent'
import SecondComponentWithProps from './components/SecondComponentWithProps'
import DestructuringProps from './components/DestructuringProps'

export default function Home() {
  return (
    // pq usamos main aqui?
    // E <section ... quando criamos um container?
    
    <main className={styles.main}> 
      <div className={styles.description}>
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
