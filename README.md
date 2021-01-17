This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
-yarn in tidal and frontend directories
-npm star in frontend

## To use Wave algorithm
- go in /generate/*yourWaveName* directory
- this path takes query params as follows:
  - "num": number of nodes in the tree
  - "root": name of person who started the wave
  - "date": date of first action

## Inspiration
During the pandemic, we realized the need for community interactions more than ever. As we worked on the project, we realized its potential for environmental applications. 

## What it does
Tidal is an application that encourages users to create movements based on a single task, like “planting a seed/tree”. To keep one of these movements—also called “waves”—going, you must take a photo of the required task and post it. Each time a user completes a task, either by starting a movement or contributing to an existing one, up to two friends or random users can then continue its outreach by sharing their own contribution to that branch. This tree structure gives the possibility of exponential growth for any single movement started on our app.

## How We built it
Our team of three built this application with React Native. A Next.js backend hosted on vercel was used for API calls and wave visualisation,  and data was stored using a MongoDB database.

## Challenges we ran into
At first we had trouble making backend connections to the display of waves, but were able to sort it with choosing the implementation of binary trees as data structure for these waves.

## Accomplishments that we’re proud of
We are proud of making a functioning application with first use of react native, and created a working algorithm that generates waves for demo purposes.

## What we learned
During this project, we learned how to host using Vercel and created a React Native Project for the first time.

## What's next for Tidal
To improve Tidal, we have to make a more solid visual interface (including the wave animation), diversify the application of our project, and make more API calls. We would also like to build a working system that is connected with a database in order to store real user generated data instead of having generated content
