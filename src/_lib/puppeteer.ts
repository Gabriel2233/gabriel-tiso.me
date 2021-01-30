import { getOptions } from './chromiumSettings';
import puppeteer from 'puppeteer-core';

async function getPage(isDev: boolean) {
  const options = await getOptions(isDev);
  const browser = await puppeteer.launch(options);

  return {
    browser,
    page: await browser.newPage(),
  };
}

export async function getScreenshot({
  html,
  width,
  height,
  isDev,
}: {
  html: string;
  width: number;
  height: number;
  isDev: boolean;
}) {
  const { page, browser } = await getPage(isDev);
  await page.setViewport({ width, height });
  await page.setContent(html, { waitUntil: 'networkidle2' });

  const screenshot = await page.screenshot({ type: 'png' });

  await browser.close();

  return screenshot;
}
