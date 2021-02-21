import React, { useContext } from 'react';
import { SizeContext } from '../../../context/SizeContext';
import DeviceProvider from '../../../helpers/DeviceProvider';
import PlaygroundMobile from './PlaygroundMobile';
import PlaygroundDesktop from './PlaygroundDesktop';

const Playground: React.FC = () => {
    const isDesktop = useContext(SizeContext);

    return (
        <DeviceProvider>
            {!isDesktop ? <PlaygroundMobile /> : <PlaygroundDesktop />}
        </DeviceProvider>
    );
};

export default Playground;
