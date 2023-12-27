import { useState, useEffect } from 'react';

const useResize = () => {
    // const [width, setWidth] = useState(window.innerWidth);
    const [width, setWidth] = useState(window.screen.width);

    useEffect(() => {
        const handleResize = (event) => {
            // setWidth(event.target.innerWidth);
            setWidth(event.target.screen.width);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return width;
};

export default useResize;
