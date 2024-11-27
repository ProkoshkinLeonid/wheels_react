import { StrictMode } from "react"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom"

import { createTheme, MantineProvider } from "@mantine/core"
import { createRoot } from "react-dom/client"

import App from "./App.tsx"
import { Main } from "./pages/Main.tsx"
import { PAGES } from "./pages/utils/routes.constants.ts"

import "@mantine/core/styles.css"

const theme = createTheme({
  /** Put your mantine theme override here */
})

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={PAGES.ROOT} element={<App />}>
        <Route path={PAGES.MAIN.INDEX} element={<Main />} />
      </Route>
      <Route path="*" element={<Navigate to={PAGES.ROOT} />} />
    </>,
  ),
)

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <RouterProvider fallbackElement={<div>Ошибка</div>} router={router} />
    </MantineProvider>
  </StrictMode>,
)
