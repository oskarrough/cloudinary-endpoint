# Torsten Mosumgaard API

A microservice that fetches images from a Cloudinary instance.

See https://keramik.now.sh

- `npm start` to develop
- `npm test` to lint (still have to add tests)

To deploy you need to set the environment variables along with the deploy:
The first time you deploy on a machine, you need to

1. `npm run deploy` (this deploys with now)
2. `now ls` and copy/paste the newest deployment id
3. `now alias PASTE_THE_ID_HERE keramik` ("keramik" is our domain)

Once you've done that. You can deploy with `now-realias` instead.

