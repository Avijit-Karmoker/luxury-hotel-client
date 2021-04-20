import React from 'react';
import facebook from '../../../../images/facebook.png';
import twitter from '../../../../images/twitter.png';
import google from '../../../../images/google.png';
import instagram from '../../../../images/instagram.png';

const CopyRight = () => {
    return (
        <div className="d-flex align-items-center copy-right">
            <p className="text-secondary">Copyright &copy;{(new Date()).getFullYear()} Untree.co. All Rights Reserved. Designed By Ovijit</p>
            <p className="ms-auto">
                <a href="//facebook.com/" target="_blank" ><img style={{height: '50px', marginRight: '10px'}} src={facebook} alt=""/></a>
                <a href="//twitter.com/" target="_blank" ><img style={{height: '50px', marginRight: '10px'}} src={twitter} alt=""/></a>
                <a href="//google.com/" target="_blank" ><img style={{height: '50px', marginRight: '10px'}} src={google} alt=""/></a>
                <a href="//instagram.com/" target="_blank" ><img style={{height: '50px'}} src={instagram} alt=""/></a>
            </p>
        </div>
    );
};

export default CopyRight;