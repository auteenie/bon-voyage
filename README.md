# ***Bon Voyage!*** ✈️

Created by [Autumn Lydon](https://github.com/autumnlydon) and [Athena Chang](https://github.com/AthenaC).

## 🚀 Mission statement

Our application, ***Bon Voyage!*** is for explorers who are eager to see the world. It allows users to collect digital passport stamps, discover new countries, and plan future adventures. With *Bon Voyage!*, travelers can track where they've been and dream up their next destination.

## 👾 API & React Router

This application will use the **REST Countries** API. Below are the documentation and specific endpoints we intend to use and the front-end pages that will use them.

- Link to API documentation: [REST Countries API](https://restcountries.com/) & [Passport Visa API](https://github.com/nickypangers/passport-visa-api)
- API endpoint #1: https://restcountries.com/v3.1/independent?status=true
  - This endpoint retrieves data on all the independent countries.
  - For each countries, we use their name and flag to display on a `card` in our list of countries. After clicking on a `card`, we also retrieved country's name, country's code, capital, region, subregion, languages, currency, population, area, timezone, and Google Maps for their modal.
- API endpoint #2: https://rough-sun-2523.fly.dev/country/{passport-country-code}
  - This endpoint retrieves visa stats on a country.
  - The data would show the country's name, code, and a list of visa requirements for different countries.
- API endpoint #3: https://rough-sun-2523.fly.dev/visa/{passport-country-code}/{destination-country-code}
  - This endpoint retrieves visa requirements between two countries.
  - The data would show the passport country's name and code, destination country's name and code, and visa requirement.
- API endpoint #4: https://restcountries.com/v3.1/name/{country-name}?fields={prop-or-list-of-props}
  - The data would show the country's code. This makes it easier to filter out the data we needed.

## 👩‍💻 MVP User Stories & Frontend Routes

The application will feature the following frontend routes and core features:

* On the `/` (home) page, users can sign up or log in to their account.
* On the `/passport` page, users can keep track of the places they've traveled by collecting stamps in their digital passport.
* On the `/countries` page, users can view a list of all the countries and their flags by clicking on the card.
  * When the modal pops up, users can view more information about the country.
  * Users can view the visa stats of the country.
* On the `/passport/[country]` page, users can view their adventures in the countries they visited by clicking on the colorized stamps.
  * When the modal pops up, on the same page, by clicking on the country's name, users can view more information about the country.
  * Users can view the visa requirements between two countries based on their origin country and destination country.

## 🤔 Stretch User Stories

If time permits, the following stretch features will be implemented in order of priority:

* Users will be able to view the flat global map with hover effect displaying the name of the country.
* Users will be able to view other users’ recommendations on the map.
* Users will be able to collect more countries’ stamps.

## 📆 Timeline for reaching MVP in 1 week

To ensure that we can complete all core features of the application in 1 week, we will aim to complete tasks according to the following timeline:

**Day 1**
- [ ] Creating project template and foundation for the repository due March 14, 2025
- [ ] Creating the React structure of the page due March 15, 2025
- [ ] Create wireframe due date March 15, 2025

**Day 2**
- [ ] Create three API fetch functions due March 15, 2025
- [ ] Create three components due March 16, 2025
- [ ] Create React Router due March 16, 2025

**Day 3** (MVP due by the end of the day)
- [ ] Add styling due March 17, 2025
- [ ] Make the rendering works due March 17, 2025
- [ ] Implementing dark mode due March 17, 2025

**Day 4**
- [ ] Add any stretch features due March 19, 2025
- [ ] Debugging due March 19, 2025
- [ ] Finalizing styling and dark mode due March 19, 2025

**Day 5**
- [ ] Deploy GitHub page of the project due March 20, 2025
- [ ] Creating presentation slides due March 20, 2025
- [ ] Agile Reflection due April 1, 2025

## 🖼️ Wireframes of each page in your application

Below, you can find wireframes for our project. Each wireframe shows a different page of our application as well as the key components of the application. Details such as specific text values or images are intentionally not included:

### [Excalidraw Wireframe](https://app.excalidraw.com/l/Q3Z0MQduNI/9cEVx7a1Ast)
![Excalidraw Wireframe](https://github.com/user-attachments/assets/00c004f2-7e41-4498-9433-e79f18a29b12)


### [Figma Wireframe](https://www.figma.com/design/BTh6vTzpz1k72PizFYyjRI/passport-app?node-id=0-1&t=yOxzkEW7VZZsdMz7-1)
![Figma Wireframe](https://github.com/user-attachments/assets/75f2119e-07f1-429c-8734-692434ca67c2)
