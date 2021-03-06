import React from 'react';
import { Box } from '../Base/Base';
import StepButton from './components/StepButton';
import Title from './components/Title';

interface LayoutStepsMobileProps {
    children?: any;
    title?: string;
    to?: string;
    ButtonText?: string;
    lastStep?: boolean;
    type?: any;
}

const LayoutStepsMobile: React.FC<LayoutStepsMobileProps> = ({
    children,
    title,
    to,
    ButtonText,
    lastStep = false,
    type,
}) => {
    return (
        <Box
            position="absolute"
            maxWidth="400px"
            width="calc(100% - 40px)"
            height="calc(100vh - 40px)"
            left="50%"
            top="55%"
            p="0 20px"
            css={`
                transform: translate(-50%, -50%);
            `}
        >
            <Title text={title} />
            {children}
            <StepButton
                lastStep={lastStep}
                type={type}
                to={to}
                text={ButtonText}
            />
        </Box>
    );
};

export default LayoutStepsMobile;
