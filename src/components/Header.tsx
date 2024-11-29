import { FC } from "react"
import { useNavigate } from "react-router-dom"

import { Burger, Button, Group } from "@mantine/core"

import { PAGES } from "../pages/utils/routes.constants.ts"

interface HeaderProps {
  opened?: boolean
  toggle?(): void
  variant: "navbar" | "header"
}
export const Header: FC<HeaderProps> = ({ opened, toggle, variant }) => {
  const navigate = useNavigate()

  const Buttons = () => {
    return (
      <>
        <Button variant="default" onClick={() => navigate(PAGES.MAIN.INDEX)}>
          Главная
        </Button>
        <Button variant="default" onClick={() => navigate(PAGES.MAIN.SERVICES)}>
          Услуги
        </Button>
        <Button variant="default">CКаталог б/у Резины</Button>
        <Button variant="default">Акции и скидки</Button>
        <Button variant="default">Контакты</Button>
      </>
    )
  }

  if (variant === "header") {
    return (
      <Group h="100%" px="md">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Group justify="space-between" style={{ flex: 1 }}>
          <div>LOGO</div>
          <Group ml="xl" gap="md" visibleFrom="sm">
            <Buttons />
          </Group>
        </Group>
      </Group>
    )
  }

  return <Buttons />
}
