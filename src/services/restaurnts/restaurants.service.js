import { mocks, mockImages } from "./mock";
import camelize from "camelize";
export const restaurantRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("Not Found!!");
    }
    resolve(mock);
  });
};
export const restaurantTransform = ({ results = [] }) => {
  const mappedResult = results.map((res) => {
    res.photos = res.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

    return {
      ...res,
      isOpenNow: res.opening_hours && res.opening_hours.open_now,
      isClosedTemporarily: res.business_status === "CLOSED_TEMPORARILY",
      address: res.vicinity,
    };
  });
  return camelize(mappedResult);
};
