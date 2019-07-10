✔️ An interface to generate astronaut assignments

## Stack

space-flight is built using:

* [Angular 8](https://angular.io/), Javascript Framework for Web Apps.

## Requirements

The following software is required to be installed locally in order to get this project running:

* npm (recommended v12) or docker

## Run the project

Clone from github (this will create nitro-posts in the current directory)
```
git clone https://github.com/francescodist/space-flight
cd space-flight
```
#### Using Docker
##### Run in Development Mode
```
docker-compose -f docker-compose-dev.yml up
```
##### Run in Production Mode
```
docker-compose build
docker-compose up
```
#### Using NPM
Open two terminals in the root of the project

Terminal 1:
```
cd mock-server
npm i
npm start
```
Terminal 2:
```
cd frontend
npm i
npm start
```

## Use application

Go to http://localhost:4200 once the app is up and running

## Run Unit Tests

```
cd frontend
npm test
```

