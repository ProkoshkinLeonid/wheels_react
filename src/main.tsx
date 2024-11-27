import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter,
    createRoutesFromElements, Navigate,
    Route,
    RouterProvider,
} from "react-router-dom"
import App from './App.tsx'
import { PAGES } from "./pages/utils/routes.constants.ts";
import { Main } from "./pages/Main.tsx";
import '@mantine/core/styles.css';
import {createTheme, MantineProvider} from "@mantine/core";

const theme = createTheme({
    /** Put your mantine theme override here */
});

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path={PAGES.ROOT} element={<App />}>
                <Route path={PAGES.MAIN.INDEX} element={<Main/>}/>
            </Route>
            <Route path={"*"} element={<Navigate to={PAGES.ROOT} />} />
        </>,
    ),
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <MantineProvider theme={theme}>
        <RouterProvider fallbackElement={<div>Ошибка</div>} router={router} />
      </MantineProvider>
  </StrictMode>,
)
