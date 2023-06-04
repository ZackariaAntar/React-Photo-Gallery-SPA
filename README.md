# React Photo Gallery App with MUI

## Description
- _Base mode duration: 1 hour_
- _Stretch goals duration: More than 6 hours._

A full stack [CRUD app](https://www.freecodecamp.org/news/crud-operations-explained/) that allows a user to manage and interact with a photo gallery, by adding new photos via a simple form, liking photos in the gallery, reading a photo's description, and/or deleting photos from the gallery as desired.

### Prerequisites
* [NODE.js](https://nodejs.org/en)
* [Postgres](https://www.postgresql.org/)
    * a [Postgres Client](https://wiki.postgresql.org/wiki/PostgreSQL_Clients) like [Postico](https://eggerapps.at/postico/v1.php) _(optional but helpful for continuity)_.
* [Nodemon](https://www.npmjs.com/package/nodemon)

## Installation
1. Create a database named `react-gallery`
    * Use the `CREATE TABLE` query _(lines 3-8)_ of database.sql and `INSERT INTO` query _(lines 10-13)_ of database.sql to start with photos on the DOM for this app. The project is built on [Postgres](https://www.postgresql.org/download/), so make sure to have that installed. I used [Postico](https://eggerapps.at/postico/v1.php) to create the inital query.
2. From your terminal run `npm install` in this project's root directory.
    - **2a.** Ensure you have at least **two** terminal tabs open.
        - In one tab, run `npm run server` to start your server.
        - In the other, run `npm run client` to start the client for this project.
        - If a browser window is not automatically opened after `npm run client`, you can access this project from your browser at **http://localhost:3000**
### Usage
1. Open a web browser and enter **http://localhost:3000** in the address bar.
2. Each card has interactive elements, users can like a photo by clicking on the 🩷 icon, delete a card from the DOM by clicking on the 🗑️ icon, or toggle between the photo and its description by clicking on what is being displayed.
3. Additionally, users can add a new photo to the gallery by clicking on the `add to gallery` button and filling in the necessary details on the form before submitting.

    (_This form's functionality requires that the user input a url to an image. Future interactivity will allow a user to upload their own images from their device using [multer](https://github.com/expressjs/multer)._)

## Acknowledgement
* Huge thanks to [Liz Kerber](https://github.com/emkerber), [Emma Stout](https://github.com/emmastout01), and [Dane Smith](https://github.com/DoctorHowser) for sharing their knowledge and preparing me to make this application a reality, and to the community of staff, partners, alumni, and mentors from [Prime Digital Academy](www.primeacademy.io) who have made my learning experience possible.

* To my fellow [Diamond Cohort](https://github.com/orgs/PrimeAcademy/teams/diamond) members for their support and daily commitment to growth.


### Screenshots
<img src="wireframes/Screenshot 2023-06-04 at 3.30.51 PM.png" width="800"/>
<img src="wireframes/Screenshot 2023-06-04 at 3.44.46 PM.png" width="800"/>
<img src="wireframes/Screenshot 2023-06-04 at 3.31.00 PM.png" width="800"/>




