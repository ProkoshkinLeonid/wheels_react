import { FC } from "react"
import { useNavigate } from "react-router-dom"

import { Button } from "@components/Button"
import { Burger, Group } from "@mantine/core"

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
        <Button
          variant="transparent"
          onClick={() => navigate(PAGES.MAIN.INDEX)}
        >
          Главная
        </Button>
        <Button
          variant="transparent"
          onClick={() => navigate(PAGES.MAIN.SERVICES)}
        >
          Услуги
        </Button>
        <Button variant="transparent">Каталог б/у Резины</Button>
        <Button variant="transparent">Акции и скидки</Button>
        <Button variant="transparent">Контакты</Button>
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
