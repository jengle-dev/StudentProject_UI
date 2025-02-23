# StudentProject_UI
Front-End UI for StudentAPI project for CRUD. API repo called Student

### Reference:
* Following Tutorial: https://www.csharp.com/article/developing-a-web-app-using-angular-12-asp-net-core-web-api-and-sql-server/
* Block Design System: https://a3pcbdsstr02t.z19.web.core.windows.net/?path=/docs/welcome--docs
* BDS Installation: https://a3pcbdsstr02t.z19.web.core.windows.net/?path=/docs/installing-the-bds--docs 
<br>

## Making a list of TODO's for 2/23/2025
1. Create Components with these commands:
    * `ng g c student`
    * `ng g c student/show-stu`
    * `ng g c student/add-edit-stu`

2. Need to open `app.module.ts` and modify the imports, NgModule components' 
    * declarations
    * imports
    * providers
    * bootstrap //How is this different than using BDS for the design?
<br>

## List of other tasks
1. Need to create the `Shared Service`
2. Import the HttpCient and observables modules. Observables are used to handle asynchronous requests and responses.
3. Make changes in `app.routing.ts` file
4. Add the bootstrap file for design
-- instead see if can use BDS with `index.html`


### Steps that had to be done first
1. Install Angular CLI: `npm install -g @angular/cli`
2. Go to project folder and create new angular project `ng new angular12`

**2/23/2025 Update @ 2:17 PM CST** - Cannot get Angular to install. Cannot change the environment variables to allow "ng". Was only able to add "npm" to the local variable and not global. Angular is required for the BDS.