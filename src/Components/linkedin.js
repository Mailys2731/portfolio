import React, { useEffect } from 'react';
import './styles/contact.scss';

export default function Linkedin() {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = 'https://platform.linkedin.com/badges/js/profile.js';
        script.async = true;
        script.defer = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>

        </div>
    );
}

