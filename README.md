# PhillyCCTodo

## Introduction

This project was used at the Philly Code Camp "Angular 101" class. It was originally written for Angular 6, but has been updated to be used with Angular 7.

The class involved building a simple

It demonstrates a number of Angular features, including:

- Components
- Modules
- Routing
- Databinding
- Events
- Reactive Forms
- HTTP Services
- Use of Observables
- Directives
- Validation
- Custom Validation
- Use of Bootstrap
- Use of Angular Material

## Process

The code is divided into 20 branches, ranging from Step1 to Step20.

Each branch has a "lesson", that is, a demonstration of some new feature. Thus, the todo application is slowly built and improved with each branch.

The document ToDoChanges.md describes each step and what new code has been added. There also comments in the code where new items were added, and thus on each step, you can search this pattern -- "Step X" -- to find new code for each level.

## Getting Set Up

Here's my suggestion for getting set up and running.

1. Pull the code for this project into a directory on your local machine.
2. If you aren't already set up for Anguler, open up the slides found in the `slides` directory and follow the directions for getting setup, including installing Angular, Angular Material, json-server, etc. (Note the last one -- you'll need it for the HTTP service).
3. Open a command prompt (preferably PowerShell) and navigate to the directory that you put the code in.
4. Type the following: `ng serve --open`. This will start and open the main application. Minimize this command prompt window and just leave it. The application will automatically update in the browser as you progress through the steps.
5. Go to the branch Step2 and find the file `db.json`. Put it into a separate directory. Open a command prompt in that directory and type the following: 'json-server --watch db.json`. Minimize the command prompt window and leave it there. This will be the source of data for the Todo application.
6. At this point, you should be ready to go through each step (branch) and see the application slowly getting built.
