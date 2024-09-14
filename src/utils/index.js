export const getToken = () => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('freebyz-token');
        return token
    }
}

export const saveToken = (token) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('freebyz-token', token)
    }
}

export const removeToken = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('freebyz-token')
    }
}

export const saveUser = (user) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('freebyz-user', JSON.stringify(user))
    }
}

export const removeUser = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('freebyz-user')
    }
}

export const getUser = () => {
    let userString = null
    if (typeof window !== 'undefined') {
        userString = localStorage.getItem('freebyz-user');
    }

    if (userString) {
        try {
            const user = JSON.parse(userString);
            return user
        } catch (error) {
            console.error('Error parsing user from local storage:', error);
            return null;
        }
    } else {
        return null;
    }
}
