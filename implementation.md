# High Level Concept
1) High level Routing
  * Main Page, with option to "enter" the store.
  * Store Page, showing inventory with a cart.
2) Lower Level Routing
  * Inside the Store Page:
    * Display a persistent side bar with contents of cart
      * This component should basically show the state of the "cart" object, with each item in the cart getting an `CartCard` type component.
      * `CartCard` should show the item name, no image, the quantity and total cost of the line item.
    * In the main window area, display a list of items via `PresentationCard` components.
      * The `PresentationCard` component should show the item name, the cost per, a photo, and the buttons to manipulate quantity and an "Add to Cart" button.
      * Items should be arranged in a grid, with enough that scrolling is required.
      * Clicking on an item should route to a page where the cart is still showing, but the main page is replaced with a `DetailCard` object representing the item that was clicked. This component should display all the previous information, plus a description. This component should be a modal, but it should also update the URL.
        * It should function similarly to the "modal gallery" example provided on the react router page. We have a `shop` page, and each item opens up a specific item modal, which reflects in the URL. The sample project can be found here: https://github.com/remix-run/react-router/tree/dev/examples/modal

# Component Implementation Details
Main page will be a simple splash page with persistent nav bar.

Store Page
  addItem callback
  removeItem callback
  updateItem callback - used to update the quantity of item in a cart.
  Cart should probably be a state object on the Store's top level component.
  Inventory should also be a state object, and should load from a local JSON data file. This way, we can add stuff to the store via adding to the json.
  Cart Component should have props to represent contents, with the callbacks to adjust items.
  Display component
    Either display a detail card or an inventory via presentation cards
  Cart should persist on the side of the store page, even as you navigate around and add stuff to your cart

Should there be a "checkout" flow? Yes, but this should be implemented last.
I think so, which means we might have to add routing for it too. When implemented it should "take over" the cart display. ie, you see your cart contents, then click "place order" and the cart sidebar is replaced with a staged form.
  * Stage 1: get contact info
  * Stage 2: get shipping info
  * Stage 3: get billing
  * Stage 4: Show order details, confirm order with "Submit!"
  * Stage 5: Confirmation of submission.

Based on some tutorials I've scoped out, it seems like doing this is quite easy with a `Form` container component and child components for each step based on the state of the parent.

I wonder if we could next that into a `Sidebar` component to combine both the cart display/edit and checkout flow.

Something like:
```
Store
  Display
    InventoryDisplay
      ItemCard
    DetailCard
  Sidebar
    CartDisplay
    CheckoutFlow
      ContactInfo
      ShippingInfo
      BillingInfo
      ConfirmOrder
```

# Routing Implementation Details
Home will be one page.
Store will be one page.
Items will be a subroute of the store page


# Next step
I'd like to add a footer to the site.

# Form validation
I think an overall "Checkout" component validation strategy will be difficult to implement well. I had a thought about doing a `validateField` helper, and then a `nextAvailable` callback that took a step parameter.

The problem is that we use state to fill in the value of a field as the user changes it, so we must save invalid information into state in order to facilitate input. ie, if a user types "Jim" as their name, the state value updates over the three keystrokes as `"J" -> "Ji" -> "Jim"` and if we don't save them as we go, then the user can only input one character at a time and no input would ever be valid.

I wonder if we can do a validation method on the "Next" button? Just don't change the step and validate that the current step's inputs match patterns.

so then, we could use a similar strategy, except we just call the `validateField` when the user clicks "Next" rather than as they type. I don't think it's as dynamic as I'd like, but it makes implementation a bit easier. Plus, I think this would let me roll my own client side validation without utilizing something like `react-hook-form` to validate stuff. React hook form does "realtime" validation, but it looks pretty complicated, and I want to roll my own solution.

Something like: ```js
const validateStep = (step) => {
  let valid = [];
  
  
  validateField()

  allValid ? true : false
}

<button>
```