# Star Wars People

## Activity Directions

**GOAL**: In this exercise, you will build an app that lists data for Star Wars characters, using a super cool API called SWAPI.

**Fetch and Display the Characters**

1. Upon page load, make a `GET` request to `https://swapi.dev/api/people/` to get the list of people.
2. When the data comes back, render the people to the screen. Have fun with it, but at minimum, for each, render `name` to the UI!
3. Run your code.
4. View your application
5. Run the tests. The first test should be passed

**Single Character View**

1. Create a button for each of the people above. The text in the button should show `{name} Details`, so for the first one, the button would have the text, `Luke Skywalker Details`.
2. When this button is clicked, `fetch` the url at the `url` property of the object, and display data for only that character. No other characters should show on the screen.
3. Run your code.
4. View your application
5. Test your code
