import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "motion/react"

type Props = {
  title: string
  items: any
}

const ListItems = items => {
  items = items.items
  return items.map((item, index) => {
    return (
      <li
        className="flex w-full min-h-1.5 items-stretch content-stretch justify-between py-3"
        key={index}
      >
        <FontAwesomeIcon size={"2xl"} icon={item.icon} />
        <p>{item.text}</p>
      </li>
    )
  })
}

export const StackLeft = ({ ...props }: Props) => {
  return (
    <motion.div
      className="sm:flex w-svw"
      initial={{ y: 300, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div
        className="stack-element stack-left"
        style={{
          maskImage: `url('/images/${props.title}.svg')`,
        }}
      ></div>
      <div className="px-10">
        <h3 className="text-6xl font-thin text-center py-14 sm:px-0 sm:mx-0 sm:text-start">
          {props.title}
        </h3>
        <ul>
          <ListItems items={props.items} />
        </ul>
      </div>
    </motion.div>
  )
}

export const StackRight = ({ ...props }: Props) => {
  return (
    <motion.div
      className="sm:flex sm:flex-row-reverse w-svw"
      initial={{ y: 300, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div
        className="stack-element stack-right"
        style={{
          maskImage: `url('/images/${props.title}.svg')`,
        }}
      ></div>
      <div className="px-10">
        <h3 className="text-6xl font-thin text-center py-14 sm:px-0 sm:mx-0 sm:text-start">
          {props.title}
        </h3>
        <ul>
          <ListItems items={props.items} />
        </ul>
      </div>
    </motion.div>
  )
}
