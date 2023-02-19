# REAL HOMES

- React application with json db as the db server.
- Deployed app could be found here - https://csb-xc738x.vercel.app/

## Getting started

- Install the packages
  - npm install
- To start the application
  - Start db
    - npm run db:start
  - Start react application
    - npm start
- To test the application
  - npm run cypress:open

## Technical stack

- react-router is used for routing
- Chakra ui is used for ui components
- json server - is used as db server
- axios - is used for rest api calls
- leaflet - is used for the map functionality on the website
- chakra-ui-autocomplete - for the autocomplete dropdown

## State management

- React.useContext is used for the statemanagement

  - React.useEffect is used for fetching the initial homes from the json server via rest api calls
  - There are functions which wraps
    - CRUD of local state
    - CRUD of the db

- React.useState is used for the local component state management
