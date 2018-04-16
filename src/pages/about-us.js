import React from 'react'
import Grid from 'material-ui/Grid'
import Avatar from 'material-ui/Avatar'
import userAvatar from '../aditya.jpeg'

const About = () => (
  <div className="container">
    <Grid container spacing={8}>
      <Grid item xs={3}>
        <Avatar alt="Aditya Risbud" src={userAvatar} className="avatar-img" />
      </Grid>
      <Grid item xs={9}>
        <p>
          My name is Aditya Risbud and I am a Cloud practitioner (AWS/Azure)
          with 11+ years of experience on Microsoft .net stack. I enjoy playing
          in/around cloud.
        </p>
        <p>
          When not writing code or working on Cloud you can find me writing my
          blogs, travelling to new places and capturing moments.
        </p>
        <p>
          I am currently based in Pune Maharashtra. But basically I am a foodie
          from Indore Madhya Pradesh.
        </p>
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={12}>
        <p>
          I would love to provide you a solution for your any Cloud related
          queries, please reach out to me on below address
        </p>
        <p>
          Email ID :&nbsp;
          <a href="mailto:18.aditya@gmail.com" target="_top">
            18.aditya@gmail.com
          </a>
          &nbsp; and &nbsp;
          <a href="mailto:Adi18ris@gmail.com" target="_top">
            Adi18ris@gmail.com
          </a>
          &nbsp; Other Online presence
        </p>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/aditya-risbud-ab0aa642/">
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://github.com/adi18ris">Github</a>
          </li>
          <li>
            <a href="https://www.viewbug.com/member/adityaRisbud">ViewBug</a>
          </li>
        </ul>
      </Grid>
    </Grid>
  </div>
)

export default About
