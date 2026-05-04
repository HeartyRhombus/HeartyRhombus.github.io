import Image from 'next/image'
import githubLogo from '../_images/contact_icons/GitHub-Mark-120px-plus.png'
import liLogo from '../_images/contact_icons/linkedin-black-icon.png'

export default function ContactComponent() {
  return (
    <div className="ContactComponent">
      <p style={{ fontSize: '1.5rem' }}>
        Please feel free to reach out to me here!
      </p>
      <p className="flex flex-row justify-center">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/KaylaBudzeak"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className="contact-icon"
            src={liLogo}
            title="LinkedIn"
            alt="LinkedIn"
          />
        </a>
        {/* GitHub */}
        <a
          href="https://www.github.com/HeartyRhombus"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className="contact-icon"
            src={githubLogo}
            title="GitHub"
            alt="GitHub"
          />
        </a>
      </p>
    </div>
  )
}
