import { FC, ReactNode } from "react"

import { Flex, Text, Title } from "@mantine/core"

interface SectionProps {
  children: ReactNode
  title: string
}

export const Section: FC<SectionProps> = ({ children, title }) => {
  return (
    <Flex h="100%" justify="center" direction="column" align="center" gap="md">
      <Title order={1}>{title}</Title>
      <Text maw="50%" variant="gradient">
        {children}
      </Text>
    </Flex>
  )
}
