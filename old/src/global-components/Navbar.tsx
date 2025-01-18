import React, { FC } from 'react';
import styles from './navbar.module.css';
import logo from '/assets/logos/bolt.png';

const Navbar: FC = () => {

    const logo_style: React.CSSProperties = {
        width: '30px',
    };

    return (
        <div id="page">
            <div className={styles.nav_bar} id="NavBar">
                <div className={styles.nav_bar_content} id="NavBarContents">
                    <div className={styles.NavBarHome}>
                        <img src={logo} style={logo_style} alt="Logo" />
                        <a href={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <p className={styles.selected_text_style}>Home</p>
                        </a>
                    </div>
                    <div className={styles.nav_bar_rest}>
                        <div className={styles.NavBarContentParts}>
                            <a href={'/aboutus'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <p className={styles.nav_bar_text}>
                                    About
                                </p>
                            </a>
                        </div>
                    </div>
                    <div className={styles.nav_bar_rest}>
                        <div className={styles.NavBarContentParts}>
                            <a href={'/firstbyte'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <p className={styles.nav_bar_text}>
                                    FirstByte
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;