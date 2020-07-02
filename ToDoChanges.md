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
- Use of *ngIf
- Updated HTML to display Todos
- Subscription to track Observables

## Step 8

### Lessons

- Add a component to add Todos
- Display component in Todo checklist page
- Add EventEmitter to notify lists that things have changed

### Changes

- Added AddToDoComponent, with code to input and add
- Add EventEmitter
- Add FormsModule to NgModule imports

## Step 9

### Lesson

- Add ability to mark a Todo as done

### Changes

- Added checkbox to mark item complete
- Added makeComplete method to update Todo
