import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { StyleSheet, css } from 'aphrodite'

const NavBar = () => {
  const [homeClicked, setHomeClicked] = useState(true)
  const [aboutClicked, setAboutClicked] = useState(false)
  const [portfolioClicked, setPortfolioClicked] = useState(false)
  const [contactClicked, setContactClicked] = useState(false)

  const handleClick = () => {

  }

  return (
    <div className={css(styles.container)}>
      <Link
        className={css(styles.link)}
        to='/'
        onClick={handleClick}
      >Home</Link>
      <Link className={css(styles.link)} to='/about' onClick={handleClick}>About</Link>
      <Link className={css(styles.link)} to='/portfolio' onClick={handleClick}>Portfolio</Link>
      <Link className={css(styles.link)} to='/contact' onClick={handleClick}>Contact</Link>
    </div>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '40px',
  },
  link: {
    fontFamily: 'Meiryo',
    marginRight: '80px',
    textDecoration: 'none',
    color: 'white'
  },
  linkClicked: {
    fontFamily: 'Meiryo',
    marginRight: '80px',
    textDecoration: 'none',
    color: 'yellow'
  }

})

export default NavBar