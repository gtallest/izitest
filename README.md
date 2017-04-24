# Everdays Coding Project

This is my attempt at the Everdays coding project. Using React and Redux, the app queries the Everdays API and displays the returned set of Memorials in order by creation date. Two buttons are included to change the sorting of the Memorials: by date, and by last name.

View live at: [http://marcdwong.com/izitest/](http://marcdwong.com/izitest/)

## Installing
To run locally, run:
1. `npm install`
2. `npm run start`

## Technologies Used
- React
- Redux
- SCSS

## Issues Encountered / Solved
- Some Memorials do not have name data included, so these cases needed to be handled when sorting by last name. See: `sortMemorialsByLastName` in `/src/actions/actionCreators.js`


## Features
- Placeholders are displayed while data is being fetched from API
- Two sorting buttons: one to sort by last name, one to sort by date
- UI sort of emulates the mobile app design

## Future Plans / Features
- Add React Router to create a separate page for each Memorial
- Add Unit Testing
- Improve the design of the UI
- Figure out bug where a border appears over two memorial images after sorting by last name
- Add text that shows how the Memorials are currently sorted (i.e. *'Currently sorted by: ___'*)
- Test app across all browsers and devices
- Use ESLint
- Uglify / Minify code
- Use Preact
- Use PropTypes
- Use Flow
- Implement animations with CSSTransitionGroups

## Feedback
If you encounter any issues or bugs, or have any suggestions for improvement, please let me know. 

## Special Thanks
- Keith
- Everdays
