import { onRequest } from 'firebase-functions/v2/https';
import * as puppeteer from 'puppeteer';

export const generateResume = onRequest(async (request, response) => {
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

  // Set response headers for the PDF
  response.setHeader('Content-Type', 'application/pdf');
  response.setHeader('Content-disposition', 'inline; filename=Resume.pdf');

  response.send(Buffer.from(resume));
});
