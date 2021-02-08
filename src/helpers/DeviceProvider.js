import React, { useContext } from 'react';
import LayoutDesktop from '../ui/components/Layouts/LayoutDesktop';
import LayoutMobile from '../ui/components/Layouts/LayoutMobile';
import { SizeContext } from '../context/SizeContext';

export default function DeviceProvider({
    children,
    showFormBtn,
    showFormBtnSet,
}) {
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
}
