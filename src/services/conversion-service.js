export default class DollarConversion {
  static async getConversion(fromCurrency) {
    try {
      const convertResponse = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${fromCurrency}`);
      if (!convertResponse.ok) {
        throw Error(convertResponse.statusText);
      } else {
        return convertResponse.json();
      }
    } catch(error) {
      return error.message;
    }
  }
}