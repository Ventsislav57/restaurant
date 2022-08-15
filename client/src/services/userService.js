

const baseUrl = 'http://localhost:3030/api/users/';

const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    return result.users;
};

const register = async (userData) => {

    const response = await fetch(baseUrl + 'register', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(userData)
    });

    const result = await response.json();
    if (response.ok) {

        return result.user;
    } else {
        return { message: result.message };
    }
};

const login = async (userData) => {

    const response = await fetch(baseUrl + 'login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(userData)
    });

    const result = await response.json();

    if (response.ok) {
        return result.user

    } else {
        return { message: result.message };
    }
};

const logout = async (accessToken) => {

    const response = await fetch(baseUrl + 'logout', {
        headers: {
            'X-Authorization': accessToken
        }
    });

    return response;
}

module.exports = {
    getAll,
    register,
    login,
    logout
}