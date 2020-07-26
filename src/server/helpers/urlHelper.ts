import { alphaNum } from '../utils/alphaNum.json';
import models from '../db';

const generateString = (length: number, alphaNum: string[]) => {
  let result = '';

  for (let i = 0; i < length; i += 1) {
    result += alphaNum[Math.floor(Math.random() * alphaNum.length)];
  }
  return result;
};

const generateUrl = async (): Promise<string> => {
  const url = `https://pbid.io/${generateString(8, alphaNum)}`;
  const existingUrl = await models.Url.findOne({ shortenedUrl: url });

  if (existingUrl) {
    return await generateUrl();
  }
  return url;
};

export { generateString, generateUrl };
