import React, { useContext } from 'react';
import LayoutDesktop from '../ui/components/Layouts/LayoutDesktop';
import LayoutMobile from '../ui/components/Layouts/LayoutMobile';
import { SizeContext } from '../context/SizeContext';

interface DeviceProdiverProps {
    showFormBtn?: boolean;
    children: any;
}

const DeviceProvider: React.FC<DeviceProdiverProps> = ({
    showFormBtn,
    children,
}) => {
    const isDesktop = useContext(SizeContext);
    return (
        <>
            {isDesktop ? (
                <LayoutDesktop showFormBtn={showFormBtn}>
                    {children}
                </LayoutDesktop>
            ) : (
                <LayoutMobile>{children}</LayoutMobile>
            )}
        </>
    );
};
export default DeviceProvider;
