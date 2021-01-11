import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub , faInstagram , faTwitter} from '@fortawesome/free-brands-svg-icons'
function Footer({isDark}) {
    return (
        <footer >
           <FontAwesomeIcon href = 'https://github.com/kunwar-11' className = 'icon' size = '2x' icon = {faGithub}/>
           <FontAwesomeIcon href = 'https://www.instagram.com/11rish09/' className = 'icon' size = '2x' icon = {faInstagram}/>
           <FontAwesomeIcon href = 'https://twitter.com/RishabhKunwar11' className = 'icon' size = '2x' icon = {faTwitter}/>
        </footer>
    )
}

export default Footer
