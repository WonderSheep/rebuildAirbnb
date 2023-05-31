import React, { memo } from 'react';
import LeftWrapper from './style';
import IconLogo from '@/assets/svg/icon_logo';
import { useNavigate } from 'react-router-dom';

const HeaderLeft = memo(() => {
    let navigateTo = useNavigate();
    function toHome() {
        navigateTo('/home');
    }
    return (
        <LeftWrapper onClick={toHome}>
            <div className='logo'>
                <IconLogo />
            </div>
        </LeftWrapper>
    )
})

export default HeaderLeft