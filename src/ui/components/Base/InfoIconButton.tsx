import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Popover from '@material-ui/core/Popover';
import { Box } from './Base';

const InfoIconButton = ({ html }: any) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const onClick = (event: any) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };

    const onClose = (event: any) => {
        event.stopPropagation();
        setAnchorEl(null);
    };

    const isOpen = Boolean(anchorEl);
    const id = isOpen ? 'popover' : undefined;

    return (
        <>
            <IconButton size="small" onClick={onClick}>
                <InfoIcon />
            </IconButton>
            <Popover
                id={id}
                open={isOpen}
                anchorEl={anchorEl}
                onClose={onClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Box
                    maxWidth="100vw"
                    p="10px"
                    dangerouslySetInnerHTML={{
                        __html: html,
                    }}
                ></Box>
            </Popover>
        </>
    );
};

export default InfoIconButton;
