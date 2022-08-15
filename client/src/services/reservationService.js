import * as requester from "./requester";

const baseUrl = 'http://localhost:3030/api/reservation/';


export const getAllReservation = async () => {
    const response = await requester.get(baseUrl);
    return response;
};

export const getOneReservation = async (reservationId) => {
    const response = await requester.get(baseUrl + reservationId);
    return response;
};

export const createReservation = async (reservationData) => {
    const response = await requester.post(baseUrl,  reservationData );
    return response;
   
}