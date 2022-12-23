import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import PageNotFound from "./components/PageNotFound";
import PrivateRouter from "./components/PrivateRouter";
import { ScrollToTop } from "./components/ScrollTop";
import { useDarkMode } from "./components/useDarkMode";
import Layout from "./layout/Layout";
import Login from "./pages/login/Login";
import { routes } from "./routes/routes";
import { darkMode, GlobalStyle, lightMode } from "./style/global.style";
import './App.css'
import Loading from "./components/Loading";

function App() {
     const [theme, toggleTheme] = useDarkMode(); // ToggleTheme function which change theme depended on telegram theme

     const themeMode = theme === "light" ? lightMode : darkMode;
     return (
          <div className="App">
               <ThemeProvider theme={themeMode}>
                    <GlobalStyle />
                    <ScrollToTop />
                    <Suspense fallback={<Loading />}>
                         <Routes>
                              <Route path="*" element={<PageNotFound />} />
                              <Route path="/login" element={<Login />} />
                              <Route path="/" element={<Layout />}>
                                   <Route path="/" element={<PrivateRouter />}>
                                        {routes.map((item) => {
                                             return (
                                                  <Route
                                                       {...item}
                                                       key={item.id}
                                                  />
                                             );
                                        })}
                                   </Route>
                              </Route>
                         </Routes>
                    </Suspense>
               </ThemeProvider>
          </div>
     );
}

export default App;
