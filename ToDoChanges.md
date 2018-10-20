# Step 1

### Lesson
- See the basic construction of an Angular application

### Changes
- Changed index.html to use Bootstrap
- Added title
- Changed to app.component.html to be basic template

# Step 2

### Lesson
- Build a backend server with json-server
- `npm -g install json-server`
- Check functionality at `http://localhost:3000`

### Changes
- Added db.json file

# Step 3

### Lesson
- Add new component via `ng generate component NavBar`
- Use Angular tag to make component appear

### Changes
* Added NavBar component
  * Used Bootstrap component to build it
  * Links are empty at this point
* update app.module.ts to use NavBarComponent
  * Put component name in `[declarations]` section
  
# Step 4

### Lesson
* Adding components and routing for basic page functionality

### Changes
* Added `routes` file
* Added `<router-outlet>` tag
* Added components for each route
* Updated imports in `app.module.ts`
* Updated `styles.css` to set container styles

# Step 5

### Lesson
* Add `todo` class  
* Add Todo Service to access API
* Dependency Injection of services

### Changes
* Added `todos.ts`
* Added `todo-data.service.ts`
* Updated `app.module.ts` for HTTP modules
* Inject `ToDoDataService`

# Step 6

### Lessons
* Accessing API and displaying data
* Databinding in HTML file

### Changes
* Update to the all-tasks component
* Added `ngIf` and `ngFor` directives
* 