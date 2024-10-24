import { onCall } from 'firebase-functions/v2/https';
import * as puppeteer from 'puppeteer';

export const generateResume = onCall(
  {
    memory: '1GiB',
  },
  async (request) => {
    const data = request.data;

    const browser = await puppeteer.launch({
      headless: true,
      timeout: 120000,
      args: ['--no-sandbox'],
    });

    // Create a new page in the browser
    const page = await browser.newPage();

    await page.goto('https://dynamic-array-resume-crafter.web.app/', {
      waitUntil: 'networkidle2',
    });

    // Generate a PDF file
    const resume = await page.pdf({
      format: 'A4',
      printBackground: true,
    });

    // Close the browser
    await browser.close();

    return {
      filename: `${data.name}-resume.pdf`,
      contentType: 'application/pdf',
      content:
        'data:application/pdf;base64,' + Buffer.from(resume).toString('base64'),
    };
  }
);
