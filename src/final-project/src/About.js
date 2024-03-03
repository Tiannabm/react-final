import styles from './About.module.css'


function About() {
    return (
        <div className={styles.fullPage}>
        <div className={styles.container}>
            <div className="row">
                <div className="col">
                <br/>
                    <img src="https://plus.unsplash.com/premium_photo-1664284045656-851de4629055?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGhhbmtzZ2l2aW5nfGVufDB8fDB8fHww"  width="275" height="350" className="d-inline-block align-top" alt=""/>
                </div>
                <div className="col">
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default About;