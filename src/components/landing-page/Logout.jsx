import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem('accessToken');
        localStorage.removeItem('userDetails');

        navigate('/login');
    };

    return (
        <button onClick={handleLogout} className="px-4 py-2 text-white bg-red-500 rounded">
            Logout
        </button>
    );
};

export default Logout;