import { FC, ReactNode } from "react"

import bgUrl from "@assets/images/background.jpg"
import { Flex, Text, Title } from "@mantine/core"

import classes from "./Section.module.css"

interface SectionProps {
  children: ReactNode
  title: string
}

export const Section: FC<SectionProps> = ({ children, title }) => {
  return (
    <Flex
      style={{ backgroundImage: `url(${bgUrl})` }}
      className={classes.root}
      // pt="xl"
      h="100%"
      direction="column"
      align="center"
      gap="md"
    >
      <Flex
        direction="column"
        h="100%"
        w="100%"
        align="center"
        pt="xl"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <Title order={1}>{title}</Title>
        <Text size="xl" maw="50%" variant="text">
          {children}
        </Text>
      </Flex>
    </Flex>
  )
}
