import React, { useContext } from 'react';
import { SizeContext } from '../../../context/SizeContext';
import DeviceProvider from '../../../helpers/DeviceProvider';
import LandingPageMobile from './LandingPageMobile';
import LandingPageDesktop from './LandingPageDesktop';

const Landingpage: React.FC = () => {
    const isDesktop = useContext(SizeContext);

    return (
        <DeviceProvider>
            {!isDesktop ? <LandingPageMobile /> : <LandingPageDesktop />}
        </DeviceProvider>
    );
};
export default Landingpage;
