import React from 'react';
import { Text } from '../../components/Base/Base';

function TextWelcome() {
    return (
        <Text color="green" lineHeight="1.5rem" textAlign="justify">
            I am a Senior Web Engineer based in Berlin, Germany. My team and I
            and I develop, design, test and deploy web and mobile applications
            for small and medium businesses.
            <br />
            <br />
            For future collaboration contact me at:
            <br />
            <br />
            <Text color="white">mail@maximiliangarmatsch.com</Text>
        </Text>
    );
}

export default TextWelcome;