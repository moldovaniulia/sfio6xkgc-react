import React from 'react'
import Helmet from 'react-helmet'

import AppComponent from '../components/component'
import styles from './page.module.css'

const Page = (props) => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>0SFio6xKGc</title>
        <meta property="og:title" content="0SFio6xKGc" />
      </Helmet>
      <AppComponent src="/playground_assets/1200h-p1.jpg"></AppComponent>
    </div>
  )
}

export default Page
