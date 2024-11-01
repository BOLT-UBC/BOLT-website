import React, { FC } from 'react';
import styles from './navbar.module.css';
import logo from '../../app/bolt.png';
import Image from 'next/Image';

const Navbar: FC = () => {
    const gap: React.CSSProperties = {
        width: '20px',
    }

    const borderLine: React.CSSProperties = {
        width: '20px',
        borderRight: '2px solid #515151',
        opacity: 0.5,
    }

    const logo_style: React.CSSProperties = {
        width: '30px',
    };

    return (
        <div id="page">
            <div className={styles.nav_bar} id="NavBar">
                <div className={styles.nav_bar_content} id="NavBarContents">
                    <div className={styles.NavBarHome}>
                        <Image src={logo} alt="Logo" width={25} height={40} />
                        <a href={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <p className={styles.selected_text_style}>Home</p>
                        </a>
                    </div>
                    <div className={styles.nav_bar_rest}>
                        <div style={borderLine} className={styles.hideForMobile}></div>
                        <div className={styles.NavBarContentParts}>
                            <a href={'/aboutus'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <p className={styles.nav_bar_text}>
                                    About
                                </p>
                            </a>
                        </div>
                        <div className={styles.NavBarContentParts}>
                            <div style={gap} className={styles.hideForMobile}></div>
                            <a href={'/events'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <p className={styles.nav_bar_text}>Events</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;