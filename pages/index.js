import Head from 'next/head'
import {useEffect, useState} from "react";

export default function Home() {
    // Account info
    const [account, setAccount] = useState('')
    // Simple Login handler
    const loginHandler = async () => {
        // CALL klaytn API
        const accounts = await window.klaytn.enable()
        // set accountInfo
        setAccount(accounts[0])
    }
    useEffect(() => {
        // Register AccountsChanged Event
        window.klaytn.on('accountsChanged', (accounts) => {
            setAccount(accounts[0])
        })
    })
    return (
    <div className="container">
      <Head>
        <title>Kaikas Login</title>
      </Head>
      <main>
          {account !== '' ? (
              <h1 className="title">Hello! {account}</h1>
          ) : (
              <>
                  <h1 className="title">Login Please</h1>
                  <button onClick={loginHandler}>
                      Login
                  </button>
              </>
          )}
      </main>
    </div>
  )
}
