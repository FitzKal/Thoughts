import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ThoughtPage from "./components/ThoughtPage.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
const queryClient = new QueryClient();
const router = createBrowserRouter([
    {path: "/",
    element: <ThoughtPage/>,
    errorElement: <p>Page Not Found</p>}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
         <RouterProvider router={router}/>
         <App />
      </QueryClientProvider>
  </StrictMode>,
)
