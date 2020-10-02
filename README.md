# Temprature Node App

This is my first and simple [NodeJs](https://nodejs.org/en/) app working with the [OpenWeather](https://openweathermap.org/api) API. User simply has to add the city name and site will make an api call and return with the temprature of that city. Temprature is in kelvin.

### Things used!

* [NodeJs](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Embedded JavaScript](https://ejs.co/)
* [Request npm](https://www.npmjs.com/package/request)
* [Open Weather](https://openweathermap.org/api)

### Prerequisites

To run this application with on your node server, you'll need to:

* [Install NodeJS and npm](https://www.habitat.sh/docs/install-habitat/)
* Create an empty diarectory.
* Then open your console and nevigate to the directory that you have created and run the following command.
```sh
$ npm init
```
fill the required details to initialize application. [Then clone this repo](git@github.com:Kelta-King/weather_site.git). Put all the files in the directory. Then run the following commands in console.
```sh
$ npm install --save express
$ npm install ejs --save
$ npm install request --save
```

This will install all the required modules and fremeworks in your pc.
Then in console, write...
```sh
$ node main.js
```
to run the project.
### To clone this repository:

      $ git clone https://github.com/Kelta-King/weather_site.git
      $ cd weather_site
### Preview:
Site is not good looking because I haven't pay attention to the site looks :sweat_smile: . You can apply css to make it more attractive. Below is how the first look of site is.

![](https://github.com/Kelta-King/weather_site/blob/master/tmp/home.PNG)

Now, write any city name and press enter or get weather button.

![](https://github.com/Kelta-King/weather_site/blob/master/tmp/temp.PNG)

So, now you can see the temprature of that city in kelvin.
