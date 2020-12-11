import React, { useContext } from 'react';
import { SizeContext } from '../../../context/SizeContext';
import DeviceProvider from '../../../helpers/DeviceProvider';
import LandingPageMobile from './LandingPageMobile';
import LandingPageDesktop from './LandingPageDesktop';

export default function Landingpage() {
    const isDesktop = useContext(SizeContext);

    return (
        <DeviceProvider>
            {!isDesktop ? <LandingPageMobile /> : <LandingPageDesktop />}
        </DeviceProvider>
    );
}
