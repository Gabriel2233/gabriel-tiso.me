import { NextApiRequest, NextApiResponse } from 'next';
import { getScreenshot } from '../../_lib/puppeteer';
import { getHtml } from '../../_lib/screenshotTemplate';

const DefaultImageSize = {
  height: 630,
  width: 1200,
};

const isDev = process.env.NODE_ENV !== 'production';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const query = req.query;
    const { title, thumbnail_bg } = query;

    console.log(query);

    const html = getHtml(title as string, thumbnail_bg as string);

    const file = await getScreenshot({
      html,
      width: DefaultImageSize.width,
      height: DefaultImageSize.height,
      isDev,
    });

    res.statusCode = 200;
    res.setHeader('Content-Type', `image/png`);
    res.setHeader(
      'Cache-Control',
      `max-age=${60 * 60 * 24 * 365}, public, stale-while-revalidate`
    );
    res.end(file);
  } catch (e) {
    console.error(e);

    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Error, image can not be generated!</h1>');
  }
};
