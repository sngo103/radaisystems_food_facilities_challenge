# Rad AI Food Facilities Challenge by Samantha Ngo [Frontend-Focused]

## Description
**Problem:** How can we parse and render a dataset for users to view and search?
**Solution:** We establish a React app to easily modularize, update, and render components for the users. First, we want to clean the dataset to ensure users see accurate data. Some rows in the dataset were malformed and/or not in the correct order. We clean the dataset by parsing reading in the CSV as a dictionary and discarding rows that are malformed. Then, we can pass each of these rows to a React table that will format them as neat rows with horizontal scroll since there are many columns. We create an search field for the user and use Fuse.js, a fuzzy search library, that will allow us to search through specific columns in the rows. Lastly, we style the app using TailwindCSS, which allows us to easily style as we build without having to keep track of all the custom css classes.

**_IMPORTANT THINGS TO NOTE:_**
- Malformed rows, such as rows with data in the incorrect order and rows with applicant names containing commas(that disrupt the csv parsing) are ignored and not included in the data displayed.
- I chose TailwindCSS to better demonstrate my frontend functionality capabilities for search. I could have easily used a component library such as Material UI that would provide me with a component with built-in search and would have probably chosen to do so if this were a real project.
- I chose a simple UI given the desired functionality and the working period of a few hours. If there were more user flows, I would have chosen to create a more complex application with nicer UI that would be more appealing to the user.

## Previews
Initial Load:
<img width="1919" height="917" alt="Screenshot 2025-08-12 140812" src="https://github.com/user-attachments/assets/67c1a17b-289e-409f-b06c-0dbe02ba6fbe" />

Fuzzy Search with Results:
<img width="1919" height="912" alt="Screenshot 2025-08-12 140745" src="https://github.com/user-attachments/assets/42c1aed0-2b97-4f36-92f0-7b1d1bbb2d57" />
<img width="1919" height="902" alt="Screenshot 2025-08-12 140715" src="https://github.com/user-attachments/assets/d9f573cd-0870-41e1-834a-82b3347c74e4" />

Fuzzy Search with No Results:
<img width="1919" height="912" alt="Screenshot 2025-08-12 142230" src="https://github.com/user-attachments/assets/387e4ca5-3625-455b-9646-14fec70e3193" />

Scrolling Down:
<img width="1919" height="968" alt="Screenshot 2025-08-12 134307" src="https://github.com/user-attachments/assets/077862c5-dd25-40c0-9531-e26951e332d6" />

Bottom of Table:
<img width="1919" height="969" alt="Screenshot 2025-08-12 142614" src="https://github.com/user-attachments/assets/df8c276e-76c6-4806-a7e8-e15495845461" />

## Critique
1. What would you have done differently if you had spent more time on this?
  - Added more styling / improved overall UI/UX beyond a single page application
  - Added a loading screen and error screen
  - Added more search functionality and column filters
  - Considered how to better handle malformed rows
  - Convert the searches into a reusable Search component to reduce redundancy
2. What are the trade-offs you might have made?
  - Since this is a hard-coded dataset as opposed to a larger dataset that is read from an API, it may not be optimized for a good user experience. Larger datasets may slow down loading and search results. 
3. What are the things you left out?
  - See answer to Question 1
4. What are the problems with your implementation and how would you solve them if we had to scale the application to a large number of users?
  - The UI/UX is not ideal because there are so many columns and rows. If I had to scale, I would add column filters to cut down on the number of unnecessary columns we show the users and thus the amount of unnecessary data we need to process. I would also add lazy loading to show fewer rows unless the user wanted more rows to improve performance. In addition, I would move the data to the backend into a SQL database and create a endpoint that would use the database's built-in search functionality. 

## How to Run 

### Install Dependencies
```bash
npm install
```

### Start Up Dev Server
```bash
npm run dev
```
Application will be locally served at: `http://localhost:5173`.

_**Credit:** Boilerplate code generated using [React Router](https://reactrouter.com/home)._
