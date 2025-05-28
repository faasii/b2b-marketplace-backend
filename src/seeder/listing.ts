// Create running shoe listings
import { faker } from '@faker-js/faker';
import businessModel from '../models/business.model';

const getRandomElement = (arr: any) => arr[Math.floor(Math.random() * arr.length)];
const getRandomPrice = (min: any, max: any) => parseFloat((Math.random() * (max - min) + min).toFixed(2));



export const createRunningShoeListings = async (categoryId: string) => {
    const brands = ["Nike", "Adidas", "New Balance", "Asics", "Brooks", "Saucony"];
    const models = ["Air Max", "Ultraboost", "Fresh Foam", "Gel-Kayano", "Ghost", "Ride"];
    const conditions = ["New", "Like New", "Used - Good", "Used - Fair"];

    const listings = [];
    const listingCount = 15; // Half of total listings

    for (let i = 0; i < listingCount; i++) {
        const size = getRandomElement(["7", "8", "9", "10", "11"]);
        const color = getRandomElement(["red", "blue", "black", "white", "green"]);
        const gender = getRandomElement(["men", "women", "unisex"]);
        const width = getRandomElement(["narrow", "regular", "wide"]);
        const archSupport = getRandomElement(["low", "medium", "high"]);

        listings.push({
            title: `${getRandomElement(brands)} ${getRandomElement(models)} ${gender === 'women' ? "Women's" : gender === 'men' ? "Men's" : ""} Running Shoes`,
            description: `High-performance ${color} running shoes in size ${size}. ${faker.commerce.productDescription()}`,
            price: getRandomPrice(60, 250),
            location: faker.location.city(),
            categoryId,
            attributes: {
                size,
                color,
                gender,
                width,
                archSupport
            }
        });
    }

    const createdListings = await businessModel.insertMany(listings);
    console.log(`Created ${createdListings.length} running shoe listings`);
    return createdListings;
};


// Create television listings
export const createTelevisionListings = async (categoryId:string) => {
  const brands = ["Samsung", "LG", "Sony", "TCL", "Hisense"];
  const technologies = ["LED", "QLED", "OLED", "Mini-LED"];
  const smartFeatures = ["with Alexa built-in", "with Google Assistant", "with Apple TV+", "with Roku"];
  
  const listings = [];
  const listingCount = 15; // Half of total listings

  for (let i = 0; i < listingCount; i++) {
    const screenSize = getRandomElement(["32\"", "40\"", "50\"", "55\"", "65\"", "75\""]);
    const resolution = getRandomElement(["1080p", "4K", "8K"]);
    const smartTv = Math.random() > 0.2; // 80% chance of being smart TV
    const brand = getRandomElement(brands);
    const refreshRate = getRandomElement(["60Hz", "120Hz", "240Hz"]);

    listings.push({
      title: `${brand} ${screenSize} ${getRandomElement(technologies)} ${resolution} TV${smartTv ? ` ${getRandomElement(smartFeatures)}` : ''}`,
      description: `Premium ${brand} ${screenSize} television ${faker.commerce.productDescription()}`,
      price: getRandomPrice(200, 5000),
      location: faker.location.city(),
      categoryId,
      attributes: {
        screenSize,
        resolution,
        smartTv,
        brand,
        refreshRate
      }
    });
  }

  const createdListings = await businessModel.insertMany(listings);
  console.log(`Created ${createdListings.length} television listings`);
  return createdListings;
};
