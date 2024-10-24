import { onCall } from 'firebase-functions/v2/https';
import * as puppeteer from 'puppeteer';

export const generateResume = onCall(
  {
    memory: '1GiB',
  },
  async (request) => {
    const resumeData = request.data?.resumeData ?? {};

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

    /// set the resume data into the local storage
    await page.evaluateOnNewDocument((data) => {
      window.localStorage.setItem('resumeData', JSON.stringify(data));
    }, resumeData);

    // Generate a PDF file
    const resume = await page.pdf({
      format: 'A4',
      printBackground: true,
    });

    // Close the browser
    await browser.close();

    return {
      filename: `${resumeData.personalDetails.fullName}-resume.pdf`,
      contentType: 'application/pdf',
      content:
        'data:application/pdf;base64,' + Buffer.from(resume).toString('base64'),
    };
  }
);
