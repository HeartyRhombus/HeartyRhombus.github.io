import Image from 'next/image'
import profilePic from '../_images/headshot.jpg'

export default function HomeContainer() {
  return (
    <div>
      <div id="welcome_msg">
        <Image id="profile_pic" src={profilePic} alt="profile headshot" />
        Hi, I'm Kayla!
        <br />
        Welcome & thanks for visiting!
      </div>
      <div id="me_description">
        I am a graduate of Flatiron School's Full Time Online Software
        Engineering Program, and am enjoying my current Software Engineer role
        within the insurance industry.
        <br />
        <br />
        Prior to entering the tech space, my background included retail and
        customer service within the travel and home improvement industries.
        <br />
        <br />I love learning new things, and when I'm not coding I enjoy
        spending time with my daughter and husband, in my garden, baking, or
        woodworking!
      </div>
    </div>
  )
}
