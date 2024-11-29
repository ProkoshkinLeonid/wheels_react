import { FC } from "react"

import { Burger, Button, Group } from "@mantine/core"

interface HeaderProps {
  opened: boolean
  toggle(): void
}
export const Header: FC<HeaderProps> = ({ opened, toggle }) => {
  return (
    <Group h="100%" px="md">
      <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      <Group justify="space-between" style={{ flex: 1 }}>
        <div>LOGO</div>
        <Group ml="xl" gap="md" visibleFrom="sm">
          <Button variant="default">Главная</Button>
          <Button variant="default">Услуги</Button>
          <Button variant="default">CКаталог б/у Резины</Button>
          <Button variant="default">Акции и скидки</Button>
          <Button variant="default">Контакты</Button>
        </Group>
      </Group>
    </Group>
  )
}
