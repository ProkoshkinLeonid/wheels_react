import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {PAGES} from "./pages/utils/routes.constants.ts";
import {AppShell, Flex, Group} from "@mantine/core";

function App() {

    const navigate = useNavigate()


    useEffect(() => {
        navigate(PAGES.MAIN.INDEX)
    }, [])

  return (
      <AppShell
          h="100%"
          display="flex"
          withBorder={false}
          layout="alt"
          header={{ height: 72 }}
          padding="md"
      >
          <AppShell.Header>
              <Group h="100%" w="100%">
                  <div>
                      12312
                  </div>
              </Group>
          </AppShell.Header>
          <AppShell.Main pb={0} pr={0} w="100%">
              <Flex direction="column" h="100%" w="100%">
                  <Outlet />
              </Flex>
          </AppShell.Main>
      </AppShell>
  )
}

export default App
