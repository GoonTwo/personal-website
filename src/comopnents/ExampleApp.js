import React from 'react'
import styles from './styles.css'
import fb from './fb.png'
import { hot } from 'react-hot-loader'

class ExampleApp extends React.Component {
  render() {
    return (
      <>
        <img src={fb} />
        <div className={styles.title}>This is an ExampleApp</div>
        <button
          onClick={() => {
            throw new Error()
          }}
        >
          cick me???
        </button>
      </>
    )
  }
}

export default hot(module)(ExampleApp)
