import camelize from "camelize";
import { locations } from "./location.mock.js";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];

    if (!locationMock) {
      reject("No location Found!!");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (res) => {
  const formattedResult = camelize(res.results);
  const { geometry } = formattedResult[0];
  const { lat, lng } = geometry.location;
  return { lat, lng, viewport: geometry.viewport };
};
