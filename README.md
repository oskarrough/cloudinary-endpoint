# Cloudinary Endpoint

> A single HTTP endpoint to fetch images from a Cloudinary account

Cloudinary requires authentication before you can fetch images. Since you don't want to do this in the front-end, this service authenticates for you and returns all images unfiltered as JSON. It is a handy way to create large, performant galleries with Cloudinary as the backend.

As an example, see https://keramik.now.sh which is being used to create this gallery https://torstenmosumgaard.dk.

## How to use

Deploy it to any Node.js host.

Make sure you are setting the three required environment variables `CLOUD_NAME`, `API_KEY` and `API_SECRET` from your [Cloudinary console](https://cloudinary.com/console).

If you're using [`now`](https://zeit.co/now), it's as easy as running this command:

```
now oskarrough/cloudinary-endpoint -e CLOUD_NAME=abc -e API_KEY=123 -e API_SECRET=abc
```

## Development

Create a `.env` file and add your Cloudinary keys to it.

- `yarn start` to start production server
- `yarn dev` to develop
