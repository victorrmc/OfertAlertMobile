import { BASE_URL } from "../constants/constants";
import axios from "axios";

interface ScrapingOfertProps {
  url: string;
  email: string;
}

async function scrapingOfert({ url, email }: ScrapingOfertProps) {
  try {
    const response = await axios.post(`${BASE_URL}/api/add-product`, {
      url,
      email,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default scrapingOfert;
