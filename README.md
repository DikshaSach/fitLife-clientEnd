### Status
[![Build Status](https://travis-ci.org/DikshaSach/fitLife-clientEnd.svg?branch=master)](https://travis-ci.org/DikshaSach/fitLife-clientEnd)
# FitLife
Track and log your workouts , water-intake and weight to make sure you make the best of today. For a better tomorrow!
* Allows Users to add their workouts for the day.
* Allows users to edit workouts,
* Allows users to delete workouts.
* Allows users to see their progress visually with graphs to chart their weight and water intake.
# Links
Live App: https://fitlife.netlify.com/     
Demo Account Credentials:      
**Username:** testing  
**Password:** 1234567890     
Server Github Repo: https://github.com/DikshaSach/fitLife-backend     
Client Github Repo: https://github.com/DikshaSach/fitLife-clientEnd   
## To Run Locally
 Git Clone this repo  
 cd into folder  
`npm install`  
`npm start`    
Add .env file with API URL and variable name `REACT_APP_API_BASE_URL`
## API 
I built my own RESTful API which will allow users to add, delete, get and update all exercise events, water intake and the users weight an bmi.
RESTful API endpoints    
### GET   
All Exercies ````...exercise/:id````    
Single Exercise  ````...exercise/singleExercise/:id````    
Weight-Bmi ````...weightandbmi/:id````    
All users water intake ````...water/waterintake/all/:id````    
Single water intake ````...water/waterintake/:id````    
### PUT    
Update water intake ````...water/waterintake/edit/:id````    
Update exercise event ````...exercise/edit/:id````    
### DELETE    
Delete exercise event ````...exercise/delete/:id'````    
Delete weight and bmi ````...weightandbmi/delete/:id````    
### POST    
Add exercise event ````...exercise/add/exercise````    
Add weight and bmi ````...weightandbmi/add/weightbmi````    
Add water intake ````...water/add````    
 
## Technology Stack
### Front End
* React
* Redux
* HTML
* CSS
* Enzyme
* Jest
### Server Side
* Node
* Express
* Mongoose
* MongoDB
* Mocha
* Chai
## Screenshots

![My image](https://github.com/DikshaSach/fitLife-clientEnd/blob/master/src/images/Screenshot1.png) 

![My image](https://github.com/DikshaSach/fitLife-clientEnd/blob/master/src/images/Screenshot2.png) 

![My image](https://github.com/DikshaSach/fitLife-clientEnd/blob/master/src/images/Screenshot3.png) 

![My image](https://github.com/DikshaSach/fitLife-clientEnd/blob/master/src/images/Screenshot4.png)

![My image](https://github.com/DikshaSach/fitLife-clientEnd/blob/master/src/images/Screenshot5.png) 

### Images 
Vectors graphics and icons designed by Freepik


