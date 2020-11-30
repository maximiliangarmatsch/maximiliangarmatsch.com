import React, { useContext } from 'react';
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';
import { Link } from 'react-router-dom';
import { Flex, Text } from '../Base/Base';
import Icon from '../PortfolioIcons/Icon';
import { SizeContext } from '../../../context/SizeContext';

export default function HeaderMenu() {
    const isDesktop = useContext(SizeContext);

    return (
        <Flex alignItems="center">
            {isDesktop ? (
                <Text
                    fontSize={{ lg: '18px', xl: '18px', xxl: '20px' }}
                    lineHeight="18px"
                    mr={{ lg: '50px', xl: '50px', xxl: '50px' }}
                >
                    <Link to="/contact">
                        <AlternateEmailOutlinedIcon
                            style={{
                                color: '#0DE99A',
                                fontSize: '40px',
                                border: '1px solid #0DE99A ',
                                padding: '5px',
                                borderRadius: '5px',
                            }}
                        />
                    </Link>
                </Text>
            ) : (
                <Text
                    fontSize={{ lg: '18px', xl: '18px', xxl: '20px' }}
                    lineHeight="18px"
                    mr={{ lg: '50px', xl: '50px', xxl: '50px', s: '20px' }}
                    mt={{ s: '3px' }}
                >
                    <Link to="/contact">
                        <AlternateEmailOutlinedIcon
                            style={{
                                color: '#0DE99A',
                                fontSize: '19px',
                                border: '1px solid #0DE99A ',
                                padding: '5px',
                                borderRadius: '5px',
                            }}
                        />
                    </Link>
                </Text>
            )}

            <Icon
                iconSrc={
                    isDesktop
                        ? '/assets/IconLinkedInHeaderDesktop.svg'
                        : '/assets/IconLinkedInHeaderMobile.svg'
                }
                alt="Icon LinkedIn"
                href="https://www.linkedin.com/in/maximilian-garmatsch/"
                target="_blank"
                margin={{
                    _: '0 20px 0 0',
                    sm: '0 20px 0 0',
                    md: '0 40px 0 0',
                    lg: '0 50px 0 0',
                    xl: '0 50px 0 0',
                    xxl: '0 70px 0 0',
                }}
            />
            <Icon
                iconSrc={
                    isDesktop
                        ? '/assets/IconImpressumDesktop.svg'
                        : '/assets/IconImpressumMobile.svg'
                }
                alt="Icon impressum"
                to="/impressum"
                margin="0"
            />
        </Flex>
    );
}
