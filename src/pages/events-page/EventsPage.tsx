import "./styles.css";
import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from "../../global-components/Navbar.tsx";
import Timeline from "./components/Timeline.tsx";
import Header from "../../pages/about-page/components/Header";

const EventsPage: React.FC = () => {
    useEffect(() => {
        if (window.innerWidth > 800) {
            changeBackgroundColor();
            window.onscroll = changeBackgroundColor;
        }
    }, []);

    return (
        <Container>
            <Row>
                <Col>
                    <div className="event-page" style={{ width: '100%', height: '100%', position: 'absolute', marginTop: '100px', marginBottom: "200px" }}>
                        <Header className="header" title="Events" titleLineOne="" titleLineTwo="" />
                        <Navbar />
                        <Timeline />
                        {/* <Footer /> */}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

const changeBackgroundColor = (): void => {
    const scrollPosition: number = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollPosition < 0.4 * window.innerHeight) {
        document.body.style.backgroundColor = 'white'; // Section 1 color
    } else if (scrollPosition < 1.6 * window.innerHeight) {
        document.body.style.backgroundColor = '#f3deff'; // Section 2 color
    } else if (scrollPosition < 2.4 * window.innerHeight) {
        document.body.style.backgroundColor = '#d5c7ff'; // Section 3 color
    } else if (scrollPosition < 3.2 * window.innerHeight) {
        document.body.style.backgroundColor = '#bea2f2'; // Section 4 color
    }
}

export default EventsPage;