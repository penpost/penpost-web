# 🖋 PenPost 🖋

__updated: 03/13/2020__

---
#### Table of Contents
- [Introduction](#Introduction)
- [Features](#Features)
- [Technologies](#Techologies)
- [Artist Credits](#Artist-Credits)
- [Contributions](#Contributions)
- [Authors](#Authors)
---
## Introduction

This project comes out of desire to connect people together and bring a sense of nostalgia through penpals. However, we wanted to reinvent the process so a user can add their own flare and experiences to the postcard.

Originally, this project was built as a capstone project through Turing School of Software & Design. [See rubric here](https://mod4.turing.io/projects/capstone).

## Features

Please visit our website at:
[https://penpost-web.vercel.app/](https://penpost-web.vercel.app/)

> Please note: this project is actively in development and changes can and may occur daily.

### Categories:
- [Home Page](#Home-Page)

- [Logging in](#Log-in)

- [Updating Personal Info](#Updating)

- [Creating a Postcard](#Create-Postcard)

- [Previewing & Sending a Postcard](#Preview-&-Send)

- [Cypress User Flow Testing](#Cypress-User-Flow-Testing)

#### Home Page
Upon navigating to our landing page, users see our tagline and sign in or up options.

<details>
  <summary>Example of Home Page</summary>
  <br>
 <img width="283" alt="static home page interaction" src="">

 <img width="283" alt="home page gif" src="">
</details>

#### Log In
A user can log in to view their personal dashboard.

<details>
  <summary>Example of User flow</summary>
  <br>
  <img width="283" alt="logging in to an account" src="" />
</details>

#### Updating
A user can update their personal information on their dashboard

<details>
  <summary>Example of Updating</summary>
  <br>
  <img width="283" alt="updating user information" src="" />
</details>


#### Create Postcard
A user can create their own postcard by add an image url and their personal message

<details>
  <summary>Example of User Flow</summary>
  <br>
  <img width="283" alt="creating a postcard" src="" />
</details>

#### Preview & Send
A user can preview their created postcard & send it. Additionally, they can go back an edit anything without losing their work.

<details>
  <summary>Example of User Editing</summary>
  <br>
  <img width="283" alt="editing the postcard" src="" />
</details>

#### Cypress User Flow Testing
Testing the UX & UI of our app.

<details>
  <summary>Example of Cypress Experience</summary>
  <br>
  <img width="600" alt="testing user flow in cypress" src="">
</details>

## Technologies
- React
- React-Hooks
- Router
- Cypress for Testing
- GraphQL/Apollo
- SASS/SCSS
- HTML
- Eslint
- [Hamburger](https://jonsuh.com/hamburgers/)
- [React Count Region Selector](https://www.npmjs.com/package/react-country-region-selector)
- WAVE for accessibility auditing
- Lighthouse for accessibility auditing
- Miro for project planning and wireframing

## Artist Credits
Thanks to the following artists from [Unsplash](https://unsplash.com/):
- @beckyphan

## Future Iterations

More specifics about future work or refactoring can be found in this projects [GH issues](https://github.com/penpost/penpost-web/issues) and in the project

## Contributions

Thank you <a href="https://github.com/robbiejaeger">Robbie Jaeger</a> for your guidance and patience.

#### To Contribute
If you'd like to contribute to the code, please complete the following steps:
- clone this repo locally: `git clone git@github.com:penpost/penpost-web.git <renameHere>`
- GraphQL documentation & endpoints are [here](https://github.com/penpost/penpost-api)
  - This backend was created by our team members through Ruby & Ruby on Rails. Please see their documentation for further details.
- from there please create a new branch following this pattern: `git checkout -b initials/<feature/fix/refactor>/focus-of-branch`
- cd into your local copy and run `npm install`
- Use Cypress for testing
 - check that the following key-value pair in `scripts` is in your `package.json`
 - `"cypress": "cypress open"`
 - if not please download Cypress with `npm i -D cypress` and add the above to `scripts`.
- contribute as you'd like and push up your work for review
Thank you.

## Author
<table>
    <tr>
        <td> Yesi Meza <a href="https://github.com/Yesi-MC">GH</a></td>
        <td> Kelsie Besinger Yeh <a href="https://github.com/kelsiebesingeryeh">GH</td>
        <td> Jeff Kersting <a href="https://github.com/JeffKersting">GH</a></td>
        <td> Gabrielle Joyce <a href="https://github.com/gaj23">GH</a></td>
        <td> Adam Etzion <a href="https://github.com/aetzion1">GH</a></td>
    </tr>
   <td><img src="https://avatars.githubusercontent.com/u/69552154?v=4" alt="Yesi Meza" width="150" height="auto" /></td>
   <td><img src="https://avatars.githubusercontent.com/u/66699027?s=400&u=d42fb1a3e7238d769ea9a7b1cea57c17a6d53ed2&v=4" alt="Kelsie Besinger Yeh" width="150" height="auto" /></td>
   <td><img src="https://avatars.githubusercontent.com/u/69732297?v=4" alt="Jeff Kersting" width="150" height="auto" /></td>
  <td><img src="https://avatars1.githubusercontent.com/u/68332132?s=460&u=a54dd9d3eede7c5ae0704846c510001c89dc88f7&v=4" alt="Gabrielle Joyce" width="150" height="auto" /></td>
  <td><img src="https://avatars.githubusercontent.com/u/60630167?v=4" alt="Adam Etzion" width="150" height="auto" /></td>
</table>
