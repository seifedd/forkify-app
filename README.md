# forkify-app
## App deployed to production 
https://agitated-murdock-72.netlify.app
## Description
A project I built for fun and learning, using classes, module, await, async, and modules likes parcel. 
To get started with this massive production application, I needed to use parcel which is a zero configuration build tool for the web. It combines a great out-of-the-box development experience with a scalable architecture that can take your project from just getting started to massive production application.
I also used MVC pattern/ framework  commonly used for developing user interfaces that divide the related program logic into three interconnected elements. This is done to separate internal representations of information (business logic) from the user interface presented to the user.
The project is basically, a small web application that give the user ability to request/ fetch more than 1000000 recipes from an endpoint built and deployed using heroku. Then, it renders all those recipes in a user-friendly manner. We use a search and filter functionnality to load the recipe from the api. 
* After we get the recipe from the api in the model, we render the found recipe results  in the search recipe view 
* If a user selects a recipe, we render that recipe in the recipe view
* If a user, wants to change the number of servings which will update the ingredients for the recipe, we allow that change in the recipe view, recipe servings view. 
* If a user wants to bookmark a recipe, and view it later, we allow to bookmark recipes store the state in bookmark and display a list of bookmarked recipes in the bookmarks view.
## Flow chat: 
![forkify-flowchart-part-1](https://user-images.githubusercontent.com/21162602/150645202-e36fce1e-664a-43ac-9291-0193b9d5ee87.png)
![forkify-flowchart-part-2](https://user-images.githubusercontent.com/21162602/150645203-8e626d29-71f1-40a0-801f-7eda7432f3e5.png)
![forkify-flowchart-part-3](https://user-images.githubusercontent.com/21162602/150645204-62c15675-98ed-459b-81bb-6d49a640cf14.png)
![forkify-architecture-recipe-loading](https://user-images.githubusercontent.com/21162602/150645206-7a6e5a4f-5274-4e23-ac8a-8f1d5305a36b.png)
