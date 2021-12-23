## Task Overview
You need to design one simple single page and use Google Place Autocomplete to find places and show at map. the following requirements are compulsory.

1. The textbox must be an autocomplete action and get result from this API
(https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete)
2. You must use redux to store result and display all searches that user tries
3. You need to use one of following method in combination with Redux
    - Redux Thunk
    - Redux Promise
    - Redux Saga
    - Redux-Observable Epics
4. For UI you need to use Material Design Kit ([https://github.com/mui-](https://github.com/mui-)
org/material-ui), make it simple and user friendly, use your creativity as Front-end developer
5. Code structure is compulsory, use the best approach to manage folders,
codes, naming and make sure it would be scalable.
The result of this assignment demonstrate that you are capable to design scalable structure for React project. Make sure use your skills and talent to implement this assignment.
Using ES6, High Order Components, Redux-Observable Epic and great functional programming can increase your chance to get better score.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Development Log

### Tuesday, 14th December 2021
1. Started a plain react + redux project 
2. Installed relevant dependencies
    1. Redux
    2. Material UI
    3. Google Maps React
3. Created API key for Maps JavaScript API
4. Created Web Page which loads the Maps API
5. Having trouble implementing the Autocomplete feature

### Wednesday, 15th December 2021
1. Added functioning autocomplete integration
2. Incorporated Material UI search bar using an imported library
3. Currently working on the marker to pinpoint selected location on the map.
4. Figuring out how to extract data from the selected location in order to pass the info to the Marker component.

### Thursday 16th December 2021

1. A lot of time were spent today understanding the Map API itself to extract the relevant data from the selected location, so the information can be used to reflect the location on the map. Some time spent doing tutorials on the React framework (and JavaScript) since a lot of them were covered during the technical training at very **threatening** pace.  
2. There is a couple of bugs I realise such as the code breaking when the page is refreshed, works fine again after a few seconds. Might be because the lifecycle methods are not implemented correctly. I could use a lot more reading on that to be honest.
3. Selecting the place in the suggestion would reflect on the map. The map would pan to the location with the marker as its centre. Hence I think the first objective of the page has been fulfilled although I do think touch ups are needed on the design and code structuring.
4. Apart from that, storing searched location using Redux is still something I need a lot more work on since my understanding of React is fairly limited. Hence, applying Redux on top this project is quite the challenge.

### Friday 17th December 2021
Teaching myself Redux to implement the search history. Didn't really work as the concept doesn't stick. Could use more examples of the use within other project instead of code snippets I find on the internet.

### Thursday 23rd December 2021
Implemented redux to store searched values.
Refactored the from a single JS file into several components.
Working on UI to display the recent searches. Having problems fetching values back from store. 

## Challenges

- Base knowledge on react and very limited understanding on Redux becomes a bottleneck.
  - Therefore not a lot of code writing today, and more on practicing on the React framework
- Unsure how to create interactions between components in React. Need more guide and practice on it.
