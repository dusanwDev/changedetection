# Changdetetection

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Angular okida re-render od app komponente pa do svih mogucih child komponenti na svaku promenu template variabli,event... Kada stavimo onPushStrategiju na neku child komopnentu mi kazemo prekini da proveras da li se nesto promenilo u ovoj komponenti i da je rerenderujes i njenim childovima, osim ukoliko se referenca input poljanije promenila... markForCheck() sluzi da ta komponenta ima onPush strategiju da se ipak markira za promenu
