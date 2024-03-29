import React from 'react';
import { useTranslation } from 'react-i18next';
import { H2, P } from '../../../components/Base/Text';

export default function DisclainerOfWarranties() {
    const { t } = useTranslation();
    return (
        <div>
            <H2>{t('8. Disclaimer Of Warranties')}</H2>
            <P>
                {t(
                    'EXCEPT AS EXPRESSLY SET FORTH IN THIS AGREEMENT, THE SERVICE IS PROVIDED ON AN “AS IS” BASIS, AND MAXIMILIAN FRANZ PETER GARMATSCH DOES NOT MAKE ANY REPRESENTATION OR WARRANTY AS TO THE RESULTS OF ANY SERVICE PROVIDED HEREUNDER AND HEREBY DISCLAIMS (ON ITS OWN BEHALF AND ON BEHALF OF ITS AFFILIATES AND THEIR RESPECTIVE REPRESENTATIVES) ALL REPRESENTATIONS AND WARRANTIES, WHETHER EXPRESS, IMPLIED OR STATUTORY, WITH RESPECT TO ITS PERFORMANCE UNDER THIS AGREEMENT, INCLUDING ANY WARRANTY OF ADEQUACY, MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. EXCEPT AS OTHERWISE PROVIDED IN SECTION 9, MAXIMILIAN FRANZ PETER GARMATSCH HAS SOLE AND EXCLUSIVE RESPONSIBILITY TO THE RECIPIENT AND ITS AFFILIATES, AND THEIR RESPECTIVE SUCCESSORS AND ASSIGNS, FOR ERRORS OR OMISSIONS IN THE TRANSITION SERVICES SHALL BE TO FURNISH CORRECT INFORMATION OR RE-PERFORM THE RELEVANT SERVICE; PROVIDED, HOWEVER, THAT, IN NO EVENT SHALL THE FEES WITH RESPECT TO THE SERVICE BEING RE-PERFORMED BE REDUCED OR OTHERWISE MODIFIED.'
                )}
            </P>
        </div>
    );
}
