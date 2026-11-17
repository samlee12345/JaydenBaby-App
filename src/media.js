// Explicit asset matches only. A supplied layout illustration is not ISOFIX evidence.
const assets = import.meta.glob('./assets/{products,layouts}/*', {
  eager: true, query: '?url', import: 'default'
});

const productPhotos = {
  'Britax Römer|Advansafix Pro': 'advansafix-pro.png',
  'Britax Römer|Dualfix Pro': 'dualfix-pro.png',
  'Britax Römer|Kidfix Pro': 'kidfix-pro.png',
  'Britax Römer|Swivel Grow Max Air': 'swivel-grow-max-air.png'
};

export function productPhoto(product) {
  const name = productPhotos[`${product.brand}|${product.name}`];
  return name ? assets[`./assets/products/${name}`] : null;
}

export const homeSeatPhoto = assets['./assets/products/swivel-grow-max-air.png'];

// Exact catalogue entries with a recognisable supplied model-family illustration.
// These remain references, including where multiple configurations are possible.
// Do not match by seat count, brand alone, or similar model names.
const layoutReferences = {
  'BMW|5-Series (E60) (2003 - 2010)': '5-seat-bmw-5.jpg',
  'BMW|5-Series (F10) (2011 >)': '5-seat-bmw-5.jpg',
  'BMW|5-Series 2018 (2018 >)': '5-seat-bmw-5.jpg',
  'BMW|6-Series Cabrio (2011 >)': '4-seat-bmw-6.jpg',
  'BMW|6-Series Coupe (2Dr) (2011 >)': '4-seat-bmw-6.jpg',
  'BMW|Z4 (2018 >)': '2-seat-bmw-z4.jpg',
  'Mercedes-Benz|V-Class (2015 >)': '8-seat-benz-v-class.jpg',
  'Porsche|Panamera (2009 >)': '4-seat-porsche-panamera.jpg',
  'Porsche|Panamera (2011 >)': '4-seat-porsche-panamera.jpg',
  'Porsche|Panamera E-Hybrid (2015 >)': '4-seat-porsche-panamera.jpg',
  'Tesla|Model X Monopost (2019 >)': '6-seat-tesla-x.jpg'
};

// Add actual exterior photos here once supplied, keyed by exact brand and model/year.
// Keep separate from layout illustrations to prevent a cutaway becoming a car photo.
const vehiclePhotos = {};

export function vehicleMedia(brand, model) {
  const key = `${brand}|${model}`;
  const reference = layoutReferences[key];
  return {
    photo: vehiclePhotos[key] || null,
    layout: reference ? assets[`./assets/layouts/${reference}`] : null,
    layoutStatus: reference ? 'reference' : 'missing',
    isofixStatus: 'unconfirmed'
  };
}
