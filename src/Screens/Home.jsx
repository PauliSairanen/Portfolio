import React from 'react'
import { Button } from 'react-bootstrap'

import { StyleSheet, css } from 'aphrodite'

const Home = () => {
  return (
    <div>
      <div>
        <p className={css(styles.hello)}>-- HELLO</p>
      </div>
      <div>
        <p>I´m Pauli Sairanen</p>
      </div>
      <div>
        <p>This is Pauli Sairanen, mobile and web developer, visual designer and a tech enthusiast in Finland.
        Feel free to take a look around at the work I`ve done just below.
        </p>
        <Button>Hello</Button>
      </div>
    </div>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  hello: {
    fontSize: '30px',
    color: '#f5e464'
  }
})


export default Home