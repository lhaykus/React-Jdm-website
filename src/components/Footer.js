import React from 'react';
import './Footer.css';
import { Container, Link } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import resume from '../assets/images/resume.pdf';

const Footer = () => {
  return (
    <section className='footer-container'>
    <Container align='center' fontSize='large' margin='5px'>
        <Link href='https://github.com/lhaykus' className='links' target="_blank" fontSize='large'>
            <GitHubIcon style={{ color: '#1CC1E7', fontSize: '500%', padding: '20px' }} />
        </Link>
        <Link href='https://www.linkedin.com/in/loryn-haykus/' className='links'  target="_blank">
            <LinkedInIcon style={{ color: '#801BEB', fontSize: '500%', padding: '20px' }} />
        </Link>
        <Link href={resume} className='links'  target="_blank">
            <FileCopyIcon style={{ color: "#D714EA", fontSize: '500%', padding: '20px' }} />
        </Link>
    </Container>
    <div>@
        <Link className='footer' href='https://github.com/lhaykus' target='_blank'>DragonWhisperer</Link>
    </div>
</section>
  )
}

export default Footer;