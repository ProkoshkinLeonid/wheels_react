import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

import { AppShell } from "@mantine/core"
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
      styles={{
        header: { borderBottom: 0 },
      }}
      header={{ height: 80 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
    >
      <AppShell.Header bg="grey">
        <Header variant="header" opened={opened} toggle={toggle} />
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <Header variant="navbar" />
      </AppShell.Navbar>

      <AppShell.Main pb={0} pr={0} w="100%" h="100vh">
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}

export default App
