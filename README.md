# Camer Apps

The Web application to browse applications built by Cameroonians developers for Cameroonians users

# Prerequisites
These tools must be installed to run the project
* Node.js 14+
* Yarn or NPM
* Docker and Docker-compose

# Run the backend with Docker
```shell
docker-compose up --build
```
Once done, navigate to the URL [http://localhost:8100](http://localhost:8100)

# Run the backend without Docker
```shell
cp .env.template .env
nano .env
```
Update the `DATABASE_URL` inside the .env file with the URL of your local MySQL database.

Install the dependencies and run the migrations
```shell
yarn install
yarn prisma migrate dev
yarn start
```
Once done, navigate to the URL [http://localhost:8100](http://localhost:8100)

The API documentation is accessible to [http://localhost:8100/documentation](http://localhost:8100/documentation)
