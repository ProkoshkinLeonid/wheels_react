import { FC, Fragment } from "react"

import { NavLink } from "@components/NavLink"
import { Burger, Divider, Flex, Group } from "@mantine/core"

import { PAGES } from "../pages/utils/routes.constants.ts"

interface HeaderProps {
  opened?: boolean
  toggle?(): void
  variant: "navbar" | "header"
}

const PAGES_LINKS = [
  { page: PAGES.MAIN.INDEX, label: "Главная", end: true },
  { page: PAGES.MAIN.SERVICES, label: "Услуги" },
  { page: PAGES.MAIN.CATALOG, label: "Каталог б/у Резины" },
  { page: PAGES.MAIN.DISCOUNT, label: "Акции и скидки" },
  { page: PAGES.MAIN.CONTACTS, label: "Контакты" },
]

export const Header: FC<HeaderProps> = ({ opened, toggle, variant }) => {
  if (variant === "header") {
    return (
      <Group h="100%" px="xl">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Group justify="space-between" style={{ flex: 1 }}>
          <div>LOGO</div>
          <Group ml="xl" gap="md" visibleFrom="sm">
            {PAGES_LINKS.map(({ page, label, end }) => (
              <NavLink key={page} to={page} end={end}>
                {label}
              </NavLink>
            ))}
          </Group>
        </Group>
      </Group>
    )
  }

  return (
    <Flex p="md" h="100%" direction="column" bg="grey">
      {PAGES_LINKS.map(({ page, label, end }) => (
        <Fragment key={page}>
          <NavLink onClick={toggle} to={page} end={end}>
            {label}
          </NavLink>
          <Divider />
        </Fragment>
      ))}
    </Flex>
  )
}
