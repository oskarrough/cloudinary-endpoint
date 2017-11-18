# Torsten Mosumgaard API

A node.js microservice that fetches images from a Cloudinary instance. See https://keramik.now.sh

## Development

Create a `.env` file and add your Cloudinary keys to it.

- `yarn start ` to start production server
- `yarn dev ` to develop
- `yarn test` to lint (still have to add tests)

To deploy you need to set the environment variables along with the deploy:
The first time you deploy on a machine, you need to

1. `yarn deploy` (this deploys with now)
2. `now alias` (will alias the deployment to keramik.now.sh)
