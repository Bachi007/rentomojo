# Rentomojo

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.6.

## project documentation : 

1. create a angular project called rentomojo and create all the components and services

2. creating routing for login, user dashboard, admin dashboard in app-routing.module.ts

3. add bootstrap, font-awesome cdns in index.html, add formsmodule and reactiveforms in app.module.ts

4. remove all the code from app.comp.html and add router-outlet

5. implement login functionality to go to different dashboards based on the username 

6. install sweetalert2 and call sweetalert2 when login is success

7. use localstorage to store loggedin user data for authentication in login.comp.ts

8. create sidenavbar in userdashboard.comp.html 

9. create vehicle.ts file in services folder to make sure only vehicle type of objects only will store in the array in services

10. create service methods like getAll, getBikes, getCars, getVehicleById methods in service layer

11. call getAll service method in ngOnInit of viewvehicles.comp.ts

12. display all the vehicles in cards and before card add one hyperlink to assign a particular URL for vehicleDetails component with specific vehicle id

13. in vehicleDetails.comp.ts read the value from the url to get the vehicle byusing its id to display in vehicleDetails.comp.html using activatedRoute

14. create an array and methods like addtocart and getcartlen in cart service 

15. when add to cart button is clicked vehicleDetails comp add object to cart service using addtocart method

16. in userdashboard compt ts call getCartLen method to get length of array whenever any minm change is detected using ngDoCheck

17. display all the vehicles that added in the cart by calling getcartitems service method in cart.comp.ts

18. add book now button for every cart element and if book now button is clicked 
perform two things one is store selected vehicle in temp and load temp data in booking modal in cart.comp.html

19. create orders array and methods like placeorder, getallorders, getOrdersbyUsername methods in wishlist.service.ts

20.  now display selected vehicle details and username (get it from localstorage) and address in the booking modal

21. now create booking() method cart.compt.ts to create and store object in placeorder service method 

22. after successful order placing navigate to my orders component and display all the orders by username (get it from localstorage) along with delivery address 

