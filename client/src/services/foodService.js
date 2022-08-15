
const baseUrl = 'http://localhost:3030/api/food/';

const getAllBurgers = async () => {
    const response = await fetch(baseUrl + 'burgers');
    const result = await response.json();

    return result.burgers;
};

const getOneBurger = async (burgerId) => {
    const response = await fetch(baseUrl + `burgers/${burgerId}`);
    const result = await response.json();

    return result.burger;
};

    // pizza service

const getAllPizzas = async () => {
    const response = await fetch(baseUrl + 'pizzas');
    const result = await response.json();

    return result.pizzas;
};

const getOnePizza = async (pizzaId) => {
    const response = await fetch(baseUrl + `pizzas/${pizzaId}`);
    const result = await response.json();

    return result.piza;
};

module.exports = {
    getAllBurgers,
    getOneBurger,
    getAllPizzas,
    getOnePizza
}