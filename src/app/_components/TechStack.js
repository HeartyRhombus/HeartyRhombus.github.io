import Image from 'next/image'
import gh from '../_images/tech_stack/github_logo.png'
import js from '../_images/tech_stack/js_logo.png'
import ts from '../_images/tech_stack/ts_logo.png'

export default function TechStack() {
  return (
    <>
      <h4 className="hr-title" id="tech-stack-title">
        Current Technical Skills
      </h4>
      <div className="centered-icons" id="tech_logos">
        <Image
          className="tech_icons"
          src={js}
          alt="JavaScript"
          title="JavaScript"
        />
        <Image
          className="tech_icons"
          src={ts}
          alt="TypeScript"
          title="TypeScript"
        />
        <Image className="tech_icons" src={gh} alt="GitHub" title="GitHub" />
      </div>
    </>
  )
}
