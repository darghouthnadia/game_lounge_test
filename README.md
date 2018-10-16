# GLCode

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

# Project structure
The project has the following structure:
- Navigation bars module: This module contains all the component that contribute to create the navigation system. it's composed by: 
  * bars-animation: Logic , design and implementation of the 'hamburger' icon animation
  * nav-bar: Logic , design and implementation of the nav bar. This component is the parent of bars-animation component and transfer it's notifciation to it's parent bars-system.
  * side-bar: Logic , design and implementation of the side bar animation and events handling.
  * bars-system:  Logic , design and implementation of the whole navigation system. Parent for both nav-bar and side-bar.
- get-menu-json.service: A simple 'get' call to send the json file for the component who needs it.
- modele: Interfaces for both 'menu' and 'subMenu' used to facilitate the handling of objects
- app.component: simply call the app-bars-system to display

# Improvement
If more time would have been given,  here are the improvement i would have done:
- Add the E2E test,
- Fix the requirement of closing all side menu if user open another one. I managed to do it when clicking the navbar , but it's lacking when using only the sidebar close arrow,
- When the sidebar menu appear , it shouldn't hide the page under. The best would be to create some sor of animation that 'push then pull' the text,
- Add more color.

I also took some liberty regarding the design idea. I hope you like what i did.

Feel free to contact me if any question on : darghouthnadia@gmail.com. 
Hope to hear from you soon.

