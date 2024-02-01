import axios from 'axios';


export const cars = axios.create({
    baseURL: 'https://65ba50f7b4d53c0665529651.mockapi.io/api/rent-a-car',
  });

  export async function fetchCars(){
    const res = await cars.get('/Advert');
    console.log(res);
    return res.data;
}