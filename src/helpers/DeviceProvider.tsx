import React, { useContext } from 'react';
import LayoutDesktop from '../ui/components/Layouts/LayoutDesktop';
import LayoutMobile from '../ui/components/Layouts/LayoutMobile';
import { SizeContext } from '../context/SizeContext';

interface DeviceProdiverProps {
    showFormBtn?: boolean;
    showFormBtnSet?: boolean;
    children: any;
}

const DeviceProvider: React.FC<DeviceProdiverProps> = ({
    showFormBtn,
    showFormBtnSet,
    children,
}) => {
    const isDesktop = useContext(SizeContext);
    return (
        <>
            {isDesktop ? (
                <LayoutDesktop
                    showFormBtn={showFormBtn}
                    showFormBtnSet={showFormBtnSet}
                >
                    {children}
                </LayoutDesktop>
            ) : (
                <LayoutMobile>{children}</LayoutMobile>
            )}
        </>
    );
};
export default DeviceProvider;
