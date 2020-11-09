import React from 'react'
import { Button } from 'react-bootstrap'
import { StyleSheet, css } from 'aphrodite'

const Home = () => {
  return (
    <div className={css(styles.contentContainer)}>
      <div class='row'>
        <div class='col-lg-6 container'>
          <div>
            <p className={css(styles.hello)}>— HELLO</p>
          </div>
          <div>
            <span className={css(styles.name)}>I`m </span>
            <span className={css(styles.mainName)}>Pauli </span>
            <span className={css(styles.name)}>Sairanen</span>
          </div>
          <div>
            <span className={css(styles.text)}>This is </span>
            <span className={css(styles.nameInText)}>Pauli Sairanen</span>
            <span className={css(styles.text)}>, mobile and web developer, visual designer and a tech enthusiast in Finland.
          Feel free to take a look around at the work I`ve done just below.</span>
          </div>
          <Button class='btn btn-lg' className={css(styles.button)}>View my work!</Button>
        </div>
        <div class='col-lg-6 container' >
          <div className={css(styles.imageContainer)}>
            <div className={css(styles.image)}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10%'
  },
  hello: {
    fontSize: '55px',
    color: '#ffca58',
    fontFamily: 'Meiryo',
    fontWeight: 'bold'
  },
  mainName: {
    fontSize: '45px',
    fontFamily: 'Roboto',
    fontWeight: '500',
    color: '#ffca58',
  },
  name: {
    fontSize: '45px',
    fontFamily: 'Roboto',
    fontWeight: '500',
    color: 'white',
  },
  text: {
    fontSize: '25px',
    fontFamily: 'Roboto',
    fontWeight: '400',
    color: 'white',
  },
  nameInText: {
    fontSize: '25px',
    fontFamily: 'Roboto',
    fontWeight: '400',
    color: '#ffca58',
  },
  imageContainer: {
    width: '60vh',
    height: '60vh',
  },
  image: {
    width: '100%',
    height: '100%',
    background: 'url(/images/promotion_image.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: '50%',
    border: 'solid white 3px',
  },
  button: {
    width: '30w%',
    height: '10%',
    flex: 1,
    justifyContent: 'center',
    margin: '10%',
    backgroundColor: '#ffca58',
    color: 'black',
    fontFamily: 'Meiryo',
    fontWeight: 'bold',
    fontSize: '20px'
  }
})


export default Home