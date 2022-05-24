# Weather Logger

This is a small Node based weather data logging application, the purpose of which is to test deployment flows for Kinsta Application Hosting. Once running, the application will log the temperature and wind speed in a given location once every minute and allow you to view the last 100 entries on a web server. 

## Supported Databases
To be able to test multiple databases on Kinsta you can use environment variables to change the database used by the application (more on specific setup below). The following databases are supported: 
* MongoDB
* MySQL
* MariaDB
* PostreSQL
* Redis

## Getting an OpenWeatherMap Key
The app will require an API key from [OpenWeatherMap](https://home.openweathermap.org). If you sign up you can grab an API key for free that should allow you to make 1,000 API calls a day. Once logged in you should be able to [create a key](https://home.openweathermap.org/api_keys) which you'll need to use in an environment variable (see below).  

## Environment Variables
The following environment variables need to be set for the application to function, see local and Kinsta setup for information on how to feed these variables to your application in a local or remote environment. 

* `OPENWEATHER_KEY`: The API key you generated for OpenWeatherMap services
* `WEATHER_LOCATION`: A location to get weather for, for example: `paris`, `tokyo`. If not given the default is `paris`
* `DB_TYPE`: The type of database you'd like to use. Should be one of the following: `mongodb`, `mysql`, `mariadb`, `postgresql`, `redis`.  If not given the default is `mysql`
* `UNIT`: The unit of measurement you'd like to use. `metric` for Celsius and km/h or `imperial` for Fahrenheit and mi/h.  If not given the default is `metric`
* `FREQUENCY` The frequency with which to grab new weather data, 1-60 to represent every 1 minute to every 60 minutes.  If not given the default is `3`
* `DB_HOST`: The hostname of your database
* `DB_PORT`: The port through which the database can be accessed
* `DB_NAME`: The name of the database
* `DB_USER`: The username used to access the database
* `DB_PASSWORD`: The password used to access the database

Note that if using Redis `DB_NAME` and `DB_USER` should **not** be set. In addition, Redis will only store the most recent weather data. 

## Local Setup
1. Clone the repository using `git clone git@github.com:danielpataki/weatherlogger.git`
2. Run `npm i` in the resulting folder to install dependencies
3. Create a file named `.env` and add the envionment variables to it. Take a look at [.env.example](,env.example) for an example. 
4. Make sure your database is up and running, ready to accept connections
5. Run `npm run setup` to create the required database table

## Available Commands
Once everything is set up correctly you should be able to issue the following commands:

* `npm run getWeather`: Retrieves the latest weather data from OpenWeatherMap
* `npm run logWeather`: Retrieves the latest weather data and adds it to the database
* `npm run listWeather`: Lists the latest 100 entries in the database
* `npm run weatherLogger`: Starts a cronjob that - while running - will retreive and log the weather data every 3 minutes 
* `npm start`: Launches a web server you can visit to view the last 100 weather data points

## Kinsta Setup
Note that at the moment application and database hosting services are operating in closed beta status. We're reaching out to a small number of Kinsta customers but as time goes by we will expand the beta. If you'd like to participate please drop us a line at research@kinsta.com with a short description of why.

Head on over to the [Kinsta beta documentation](https://cuddly-succotash-5bf2b653.pages.github.io/) to learn how to deploy this service live. 