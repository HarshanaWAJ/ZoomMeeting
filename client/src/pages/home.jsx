import React, { useState }from 'react';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const[roomeCode, setRoomeCode] = useState('');
    const navigate = useNavigate();
    const handleFormSubmit = (ev) => {
        ev.preventDefault();
        navigate(`/room/${roomeCode}`)
    }
    return (
        <div className="home-page">
            <form onSubmit={handleFormSubmit}>
                <div className='form'>
                    <label>Enter Room ID:</label>
                    <input type='text' value={roomeCode} 
                        onChange={(e) => setRoomeCode(e.target.value)}
                        required placeholder='Room ID' />
                </div>
                <button type='submit'>Enter to Meeting </button>
            </form>
        </div>
    );
}

export default HomePage;