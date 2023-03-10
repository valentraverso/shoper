import { memo } from 'react';
import './Footer.css';

function Footer(){
    return (
        <footer>
            <div>
                <div>
                    <p>Instagram</p>
                </div>
            </div>
            <div>
                <p>All Rights reserved Valentino Traverso.</p>
            </div>
        </footer>
    );
}

export default memo(Footer);