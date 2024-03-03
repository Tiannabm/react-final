import styles from './Home.module.css'

function Home() {


  return (
    <div className={styles.container}> 
        <div className={styles.text}> 
            <h1 className={styles.title} > <strong> Welcome to the Gobble Stop!</strong> </h1>
            <h3>Some of our most popular items include: </h3>
                <div> 
                <ul className="list-group">
                    <li className="list-group-item">Turkey</li>
                    <li className="list-group-item">Green Bean Casserole</li>
                    <li className="list-group-item">Pumpkin Pie</li>
                </ul>
                    <div className={styles.pageBottom}></div>
                </div>
                
        </div>
    </div>
  )
}

export default Home