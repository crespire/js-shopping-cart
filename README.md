# Cozy Creature Canteen

A simple eCommerce site written with React using the router, hooks and TailwindCSS.

You can see a live deployment on Vercel in the repository details.

# Key Learning
This project was a very nice deep dive into modern React.
* Using React router from the Remix project was interesting. It reminded me a lot of Rails routing, and I definitely see the draw for client side routing in certain use cases. The docs for react router are weaker than what I'm used to for Rails and Javascript, so it was a nice reminder about doing research.
* The scale of this app was fun to work with. While React was a little tough to manage when I first started learning it, I definitely see the value of it. I probably would not be able to write this application as quickly in vanilla JS.

Form validation is refactored. I ended up realizing that my form implementation was really poor because of a few things.
1. My form was not really a form, it was just inputs inside a div, so I was missing a lot of useful built in functionality skipping the actual `<form>` element. Silly.
2. I was handling things at different levels in the component tree, which made it a frustrating experience to work with. Once I realized this mistake, consolidating all the form logic to the `<Checkout>` component, it made everything much easier.
3. Writing a custom hook is not that scary, and while I did follow a few different tutorials, I was able to understand everything I was doing.

I am much happier with this refactored form validation approach.

# Future Opportunities
* Optimization. I made a choice to use an image on the "Home" page which is probably the biggest asset bottleneck for the application. I am not sure I would stick with it if this were a production site, and would probably make a different decision. One option would be to use a "pattern" image that is quite small, and have the browser just pattern it.