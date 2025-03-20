import React from "react"
import { motion } from "motion/react"
import { StackLeft, StackRight } from "./home/StackElement"
import {
  faAngular,
  faAtlassian,
  faAws,
  faCss,
  faDocker,
  faGitAlt,
  faJs,
  faLaravel,
  faLinux,
  faMicrosoft,
  faNodeJs,
  faPhp,
  faReact,
} from "@fortawesome/free-brands-svg-icons"
import { faGem, faHashtag, faServer } from "@fortawesome/free-solid-svg-icons"

const Stack = () => {
  return (
    <div className="relative w-svw min-h-svh stack-container">
      <motion.h2
        initial={{ y: 300, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="text-center sm:text-left sm:ml-16 text-6xl mb-16 pb-16 font-thin"
      >
        things i use
      </motion.h2>
      <StackRight
        title="frontend"
        items={[
          { icon: faReact, text: "react" },
          { icon: faAngular, text: "angular" },
          { icon: faLaravel, text: "blade" },
          { icon: faMicrosoft, text: "blazor" },
        ]}
      />
      <StackLeft
        title="backend"
        items={[
          { icon: faMicrosoft, text: ".NET" },
          { icon: faNodeJs, text: "node.js" },
          { icon: faLaravel, text: "laravel" },
          { icon: faServer, text: "SQL" },
        ]}
      />
      <StackRight
        title="languages"
        items={[
          { icon: faJs, text: "javascript" },
          { icon: faPhp, text: "php" },
          { icon: faHashtag, text: "C#" },
          { icon: faGem, text: "ruby" },
          { icon: faCss, text: "html/css" },
        ]}
      />
      <StackLeft
        title="tools"
        items={[
          { icon: faGitAlt, text: "git" },
          { icon: faLinux, text: "linux" },
          { icon: faAtlassian, text: "JIRA" },
          { icon: faDocker, text: "docker" },
          { icon: faAws, text: "AWS" },
        ]}
      />
    </div>
  )
}

export default Stack
