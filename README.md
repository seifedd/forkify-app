# forkify-app
## App deployed to production 
https://agitated-murdock-72.netlify.app
A project I built for fun and learning, using classes, module, await, async, and modules likes parcel. 
To get started with this massive production application, I needed to used parcel which is a zero configuration build tool for the web. It combines a great out-of-the-box development experience with a scalable architecture that can take your project from just getting started to massive production application.
I also used MVC pattern/ framework  commonly used for developing user interfaces that divide the related program logic into three interconnected elements. This is done to separate internal representations of information (business logic) from the user interface presented to the user.
The project is basically, a small web application that give the user ability to request/ fetch more than 1000000 recipes from an endpoint built and deployed using heroku. Then, it renders all those recipes in a user-friendly manner. We use a search and filter functionnality to load the recipe from the api. 
* After we get the recipe from the api in the model, we render the found recipe results  in the search recipe view 
* If a user selects a recipe, we render that recipe in the recipe view
* If a user, wants to change the number of servings which will update the ingredients for the recipe, we allow that change in the recipe view, recipe servings view. 
* If a user wants to bookmark a recipe, and view it later, we allow to bookmark recipes store the state in bookmark and display a list of bookmarked recipes in the bookmarks view.
## Flow chat: 
