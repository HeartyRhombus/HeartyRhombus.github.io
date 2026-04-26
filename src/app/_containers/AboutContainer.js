import Image from 'next/image'
import profilePic from '../_images/headshot.jpg'

export default function AboutContainer() {
  return (
    <div>
      <div id="welcome_msg">
        <Image id="profile_pic" src={profilePic} alt="profile headshot" />
        <br />
        Hi, I'm Kayla!
        <br />
        Welcome & thanks for visiting!
      </div>
    </div>
  )
}
