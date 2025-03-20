import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                display: isVisible ? 'block' : 'none',
                padding: '10px 15px',
                fontSize: '16px',
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                border: '1px solid white',
                color: '#fff',
                borderRadius: '10px',
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                zIndex:100
            }}
        >
            ↑ Back to Top
        </button>
    );
};

export default BackToTopButton;