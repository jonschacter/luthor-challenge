# Luthor Challenge - Jon Schacter

## Deployment

Visit [heroku](https://www.todo.com) to demo the App

## Local Installation

To install fork the [git repo](https://www.todo.com) and navigate to the  `luthor-challenge` directory.

Run

```npm install```

and

```npm run dev```

then navigate to your local host as directed by the console.

## Developer Notes

* It was important for the UX I envisioned to have some information (suggestions and forms) moved into dialog modals so that the violations were very apparent and easily scannable. I also re-used the highlighting component to provide a visual connection from the paragraph to the violation list.

* For styling I used [MaterialUI](https://mui.com/material-ui) as a quick solution. Typically for this kind of application I would consider this to be too big a library and worry about performance impact, however, a bespoke design system is too large a time investment for this situation, and more ground-level solutions (like TailwindCSS) did not provide out-of-the-box support for Modals, which as mentioned was important for my desired UX.

* I made some minor tweaks to the provided mock API data, because I found that the provided start/end indices and minor formatting (capitalization and punctuation) did not align as I would expect with the provided paragraph.

* Since this was created with a mocked response I had to add some other state management logic to achieve the types of interaction I desired. I would expect in real implementation the API would provide an updated response in these situations. This includes:
  * Updating the start/end indicies of some violations when a suggestion (or user input) of a different length was provided.
  * Optimistically dismissing updated violations.

## Future Considerations

If I were to expand upon this project my priorities would include (in no particular order)

* Testing - Time and scope limited for this demo, and with fixed data the interactions and edge-cases were easily manually testable.
* Improved Styling & Iconography - Plenty of styling improvements to be made here, but my goal was to be clearly readable and usable with a quick solution. I would love to implement a more specific design system to the product, especially as pieces become re-used.
* Responsiveness & Accessibility
