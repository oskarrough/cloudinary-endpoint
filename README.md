# Torsten Mosumgaard API

A microservice that fetches images from a Cloudinary instance.

See https://tmapi.now.sh

- `npm start` to develop
- `npm test` to lint (still have to add tests)

To deploy you need to set the environment variables along with the deploy:

1. `now -e API_KEY=123 -e API_SECRET=abc -e API_NAME=test`
2. `now ls` and copy/paste the newest deployment id
3. `now alias IDHERE tmapi`

