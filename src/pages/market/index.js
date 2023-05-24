import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const Market = () => {
    const location = useLocation();

    useEffect(() => {
      document.title = 'Case Studies - Sriya AI LLC'; // Set the desired title for the home page
    }, []);
  return (
    <div>
      
    </div>
  )
}

export default Market
