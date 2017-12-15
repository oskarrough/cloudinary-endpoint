# Cloudinary Endpoint

> A single HTTP endpoint to fetch all images from a Cloudinary account

Why? Cloudinary requires authentication before you can fetch images. Since you don't want to do this in the front-end, this Node.js microservice authenticates for you and returns all images unfiltered as JSON.

As an example, the website https://torstenmosumgaard.dk is fetching its images from https://keramik.now.sh.

## How to use

If you're using [`now`](https://zeit.co/now) it is as easy as running this command:

```
now oskarrough/cloudinary-endpoint -e CLOUD_NAME=xxx -e API_KEY=xxx -e API_SECRET=xxx
```

Find your keys in the [Cloudinary console](https://cloudinary.com/console).

> As long as you set the three environment variables, you should be able to deploy it to any node host.

## Development

Insetad of declaring the keys with the command, you can clone this repository, create a `.env` file and add your Cloudinary keys to it.

- `yarn start` to start production server
- `yarn dev` to develop
- `yarn deploy` to deploy
