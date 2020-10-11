# Cloudinary Endpoint

> A single HTTP endpoint to fetch all images from a Cloudinary account

Why? Cloudinary requires authentication before you can fetch images. Since you don't want to do this in the front-end, this Node.js microservice authenticates for you and returns all images unfiltered as JSON.

It is a handy way to create large galleries with all the (mostly free!) advantages Cloudinary offers for responsive images, performance and image hosting. As an example, the website https://torstenmosumgaard.dk is fetching its images from https://keramik.now.sh.

## How to use

If you're using [`now`](https://zeit.co/now) it is as easy as running this command:

https://vercel.com/import/settings?s=https%3A%2F%2Fgithub.com%2Foskarrough%2Fcloudinary-endpoint&id=303093522&b=master&env=API_KEY,API_SECRET,CLOUD_NAME

Find your keys in the [Cloudinary console](https://cloudinary.com/console).

Alternatively (still using `now`), you can also store your keys in an `.env` file. Clone this repository, `cp .example-env .env`, add your Cloudinary keys to it and run `yarn deploy`.

> As long as you set the three environment variables, you should be able to deploy it to any node host.

## Development

- `yarn start` to start production server
- `yarn dev` to develop
- `yarn deploy` to deploy

