export const API_KEY = 'AIzaSyBWKnE4unFqk0NsXCHYo5Gvzn_VlR1n3Xo';
export const value_convter = (value) => {
     if (value >= 1000000) {
          return Math.floor(value / 1000000) + "M";
     } else if (value >= 1000) {
          return Math.floor(value / 1000) + " K"
     } else {
          return value;
     }
}