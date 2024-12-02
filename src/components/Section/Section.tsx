import { FC, ReactNode } from "react"

import { Flex, Text, Title } from "@mantine/core"

import classes from "./Section.module.css"

interface SectionProps {
  children: ReactNode
  title: string
}

export const Section: FC<SectionProps> = ({ children, title }) => {
  return (
    <Flex align="center" className={classes.root} h="100%">
      <Flex
        style={{ backdropFilter: "blur(10px)" }}
        pt="xl"
        h="100%"
        direction="column"
        align="center"
        gap="md"
      >
        <Title order={1} style={{ color: "white" }}>
          {title}
        </Title>
        <Text size="xl" maw="50%" variant="text" style={{ color: "white" }}>
          {children}
        </Text>
      </Flex>
    </Flex>
  )
}
