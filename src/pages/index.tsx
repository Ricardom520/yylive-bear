import React, { useEffect } from 'react'
import LogoIcon from '~/images/logo.png'
import { initYYLiveBear } from '~/components'
import styles from './index.module.less'

const Home: React.FC = () => {
  useEffect(() => {
    initYYLiveBear('bear')
  }, [])

  return (
    <div className={styles['home']}>
      <div className={styles.box}>
        <img className={styles.logo} src={LogoIcon} />
        <h1>WelCome To The Vite 😋</h1>
      </div>
      <div id='bear'></div>
    </div>
  )
}

export default Home
