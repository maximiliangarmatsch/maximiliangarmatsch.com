import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ErrorBoundary from '../helpers/ErrorBoundary';
import LocaleProvider from '../helpers/LocaleProvider';
import theme from '../config/theme';
import { SizeContext } from '../context/SizeContext';
import Landingpage from './pages/Landingpage/Landingpage';
import Impressum from './pages/Impressum/Impressum';
import MyTeam from './components/OLD_UNUSED/MyTeam/MyTeam';
import AboutMe from './pages/AboutMe/AboutMe';
import ForYouIWill from './pages/ForYouIWill/ForYouIWill';
import Contact from './pages/Contact/Contact';
import SuccessScreen from './pages/Contact/SuccessScreen';
import DownloadCV from './pages/Download/DownloadCV';
import DownloadPortfolio from './pages/Download/DownloadPortfolio';
import Playground from './pages/Playground/Playground';

const App: React.FC = () => {
    let isDesktop = useMediaQuery(`(min-width: 1025px)`);

    return (
        <ErrorBoundary>
            <ThemeProvider theme={theme}>
                <LocaleProvider>
                    <SizeContext.Provider value={isDesktop}>
                        <Switch>
                            <Route exact path="/">
                                <Landingpage />
                            </Route>
                            <Route path="/myteam">
                                <MyTeam />
                            </Route>
                            <Route path="/aboutme">
                                <AboutMe />
                            </Route>
                            <Route path="/foryouiwill">
                                <ForYouIWill />
                            </Route>
                            <Route path="/contact">
                                <Contact />
                            </Route>
                            <Route path="/cv">
                                <DownloadCV />
                            </Route>
                            <Route path="/lebenslauf">
                                <DownloadCV />
                            </Route>
                            <Route path="/portfolio">
                                <DownloadPortfolio />
                            </Route>

                            <Route path="/playground">
                                <Playground />
                            </Route>

                            <Route path="/impressum">
                                <Impressum />
                            </Route>
                            <Route path="/sucessScreen">
                                <SuccessScreen />
                            </Route>
                        </Switch>
                    </SizeContext.Provider>
                    <AppStyle />
                </LocaleProvider>
            </ThemeProvider>
        </ErrorBoundary>
    );
};

const AppStyle = createGlobalStyle`
    html,
    body {
        font-family: 'Roboto Mono', monospace;
        font-style: normal;
        font-weight: 500;
        font-size: 1rem;
        line-height: 2rem;
        color: #ffffff;
        background: #222222;
        margin: 0;
        padding: 0;
    }
`;

export default App;
