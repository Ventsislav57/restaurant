
const baseUrl = 'http://localhost:3030/api/food/';

const getAllBurgers = async () => {
    const response = await fetch(baseUrl + 'burgers');
    const result = await response.json();

    return result.burgers
}

module.exports = {
    getAllBurgers
}