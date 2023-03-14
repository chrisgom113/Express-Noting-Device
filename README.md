# Express-Noting-Device

Link to Github Repo: 
```
https://github.com/chrisgom113/Express-Noting-Device
```
Deployed Live Heroku URL:
``` 
https://nameless-sands-38547.herokuapp.com/
```

# Description

This app uses express within nodeJS to set up a locally-hosted server with multiple endpoints that deploys to a live web app using Heroku.
The user-interface ultimately presents as a note-taking web application whereby users can view recently saved notes and enter new ones.

For the first time, student is tasked with coordinating a smooth function between front-end and back-end developing. Using starter code that essentially makes up the front-end implementation of the note-taking app, student's goal is to create a server, routing points, and json reading and writing functionality to bring to life the data-saving, data-reading, and data-sending activities that make up the back-end code. Once created, and implemented, the app's back-end code is able to receive communication from front-end UI activity and react as is needed.

See below for user story for context:

## User Story:

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```


# Installation


Use 'npm i' to download the dependencies listed below:

```
Node.js

NPM

Express.js

uuid
```




# Usage

- Upon reaching landing page, user is presented with base html page and a button "Get Started.
- Once "Get Started" button is clicked, user is taken to 'Notes' page where previously entered notes are immediately visible as well as a blanks screen for intuitive note-input
- User can click the 'save' icon that appears once title and message have text. Upon saving, user will see note rendered in notes list
- Upon clicking an existing note, user will find that note's data rendered in the main view
- Upon clicking the write icon "+", user will find that the main view consists of empty fields for new notes to be entered

## Landing Page

![Landing Page]()
  
## Notes Page with Existing Notes 

![Note Page]()


## Enter Notes and Click Save. 

![Saved Note Appears]()

## Clicking Existing Note Renders to Main View

![Existing Note]()

## Clicking "+" Allows User to Write New Note

![New Note]()

 
# License

None