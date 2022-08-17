import * as requester from "./requester";

const baseUrl = 'http://localhost:3030/api/reservation/';


export const getAllReservation =  () => requester.get(baseUrl);

export const getOneReservation = async (reservationId) => {
    const response = await requester.get(baseUrl + reservationId);
    return response.reservation;
};

export const createReservation = (reservationData) => requester.post(baseUrl,  reservationData );

export const deleteReservation = async (reservationId) => requester.del(baseUrl + reservationId);
