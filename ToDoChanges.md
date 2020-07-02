# List of changes to the ToDo Application by step

## Step 1

### Lesson

- See the basic construction of an Angular application

### Changes

- Changed index.html to use Bootstrap
- Added title
- Changed to app.component.html to be basic template

## Step 2

### Lesson

- Build a backend server with json-server

### Changes

- Install json-server in Heroku
- Follow instructions at: <https://github.com/jesperorb/json-server-heroku>
- It's all free.

## Step 3

### Lesson

- Add new component via `ng generate component NavBar`
- Use Angular tag to make component appear

### Changes

- Added NavBar component
- Used Bootstrap component to build it
- Links are empty at this point
- Update app.module.ts to use NavBarComponent
- Put component name in `[declarations]` section

## Step 4

### Lesson

- Adding components and routing for basic page functionality

### Changes

- Added `routes` file
- Added `<router-outlet>` tag
- Added components for each route
- Updated imports in `app.module.ts`
- Updated `styles.css` to set container styles
- Add PageNotFoundComponent, redirecting there for unknown paths
- Add attributes to manage active item on navbar

## Step 5

### Lesson

- Add `todo` class
- Add Todo Service to access API
- Dependency Injection of services

### Changes

- Added `todos.ts`
- Added `todo-data.service.ts`
- Updated `app.module.ts` for HTTP modules
- Inject `ToDoDataService`

## Step 6

### Lessons

- Accessing API and displaying data
- Databinding in HTML file
- Observables
- async

### Changes

- Update to the all-tasks component
- Added `ngIf` and `ngFor` directives

## Step 7

### Lessons

- Display Todos by complete/incomplete

### Changes

- Added completed/incompleted methods to Todo page and to DataService
- Use of \*ngIf
- Updated HTML to display Todos
- Subscription to track Observables

## Step 8

### Lessons

### Changes

- Added `todos.ts`
- Added `todo-data.service.ts`
- Updated `app.module.ts` for HTTP modules
- Inject `ToDoDataService`

## Step 9

### Lesson

- Add ability to mark a Todo as done

### Changes

- Added checkbox to mark item complete
- Added makeComplete method to update Todo

## Step 10

### Lesson

- Add abilty to mark complete Todo as uncomplete.

### Changes

- Add `onclick`

## Step 11

### Lesson

- Delete a Todo

### Changes

- Added big red 'X' to delete a Todo item
- Add `removeTodo` to delete a todo entirely

## Step 12

### Lesson

- Add ability to edit an incomplete todo in place

### Changes

- update HTML to add an input box when you click on an item
- Code to update the text of an incomplete todo
- Added HttpParams to query for complete/incomplete

## Step 13

### Lesson

- Add Contact form with basic validation

### Changes

- Add HTML contact form
- Add controls in Typescript
- Perform basic validation in code
- Submit form to the console
- Only enable submit button if form is valid

## Step 14

### Lesson

- How to create a directive

### Changes

- Added directive to prevent bad input for telephone numbers
- Added set of useful constants for the telephone number directive

## Step 15

### Lesson

- Introduce the notion of ng-content

### Changes

- Added component that uses the ng-content tag
- Added tags to make it all work
  Added "select" attribute to illustrate how you can customize content

## Step 16

### Lesson

- See component lifecycle events

### Changes

- Add container component to contain child component
- Add child component, which will ensure that the View events are fired
- Add handlers and interface references for all the lifecycle events.

## Step 17

### Lesson

- Create a directive to highlight when mouse hovers over item.

### Changes

- Added highlightOnHover directive
- Added tags in HTML to make items highlight
- This article really helped: [https://reactgo.com/angular-custom-directive-example/](https://reactgo.com/angular-custom-directive-example/)

## Step 18

### Lesson

- Create a structural directive (Like `*ngFor` or `*ngIf`)

### Changes

- Create a new directive called `ngIfNot`
- Add directive to HTML

## Step 19

### Lesson

- Add ability to display note.
- Illustrate child routes
- Create new component to handle displaying note

### Changes

- Add `note` field to Todo class
- Add `getTodoById` to the data service
- Add child paths to routes
