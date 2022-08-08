

const baseUrl = 'http://localhost:3030/api/users';

const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    return result.users;
};

const create = async (userData) => {
    const response = await fetch(baseUrl + '/register', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(userData)
    });

    const result = await response.json()
    if (response.ok) {

        console.log(result);
        return result.user;
    } else {
        throw { message: result.message };
    }
};

module.exports = {
    getAll,
    create
}