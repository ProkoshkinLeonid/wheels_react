import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

import { AppShell, Button, Flex } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"

import { Header } from "./components/Header.tsx"
import { PAGES } from "./pages/utils/routes.constants.ts"

function App() {
  const navigate = useNavigate()
  const [opened, { toggle }] = useDisclosure(false)

  useEffect(() => {
    navigate(PAGES.MAIN.INDEX)
  }, [])

  return (
    <AppShell
      header={{ height: 72 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header bg="grey">
        <Header opened={opened} toggle={toggle} />
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <Button variant="default">Главная</Button>
        <Button variant="default">Услуги</Button>
        <Button variant="default">CКаталог б/у Резины</Button>
        <Button variant="default">Акции и скидки</Button>
        <Button variant="default">Контакты</Button>
      </AppShell.Navbar>

      <AppShell.Main pb={0} pr={0} w="100%">
        <Flex direction="column" h="100%" w="100%">
          <Outlet />
        </Flex>
      </AppShell.Main>
    </AppShell>
  )
}

export default App
