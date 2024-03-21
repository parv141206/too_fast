// Import your function
import { scrapeDivyaBhaskar } from "@/app/(root)/(functions)/DivyaBhaskar.mjs";

// Export a handler for Netlify
exports.handler = async function (event, context) {
  try {
    const res = await scrapeDivyaBhaskar();
    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
