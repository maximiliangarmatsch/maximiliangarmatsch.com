import React, { useContext } from 'react';
import LayoutDesktop from '../ui/components/Layouts/LayoutDesktop';
import LayoutMobile from '../ui/components/Layouts/LayoutMobile';
import { SizeContext } from '../context/SizeContext';

export default function DeviceProvider({ children }) {
    const isDesktop = useContext(SizeContext);
    return (
        <>
            {isDesktop ? (
                <LayoutDesktop>{children}</LayoutDesktop>
            ) : (
                <LayoutMobile>{children}</LayoutMobile>
            )}
        </>
    );
}
