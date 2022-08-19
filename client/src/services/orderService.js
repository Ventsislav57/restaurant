import * as requester from "./requester";

const baseUrl = 'http://localhost:3030/api/order';

export const createOrder = async (orderData, userId) => requester.post(`${baseUrl}/${userId}`, orderData);
