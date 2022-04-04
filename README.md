# JOURNAL APP FE

### FIGMA LINK :

https://www.figma.com/file/3fremWcPmW6lRRTjyJNSJm/capstone-journal-app?node-id=43%3A292

### Backend Repo :

https://github.com/ephieo/journal_capstone_BE

#### Famous quotes API :

- https://type.fit/api/quotes

### File Structure :

- journal_app_fe
  - journal_fe
    - src
      - components
      - images
      - pages
      - styled-components
      - utils

![Apprenticeship -68](https://user-images.githubusercontent.com/60614102/161536309-cdb674f2-0b9f-471a-ad85-5f65057eaa44.jpg)


### How to run App :

Clone locally :

- `git clone https://github.com/ephieo/journal_capstone_FE.git`
- `cd journal_capstone_FE/journal_fe/`
- `npm i` or `npm install`
- `npm run start` or `npm start`

### Note :

The quotes work by being saved into local storage to test teh removal of quotes after a certain time change the setTimer time in Footer.js to a shorter time period to see the removal of those cookies.

- How to access the saved data in localstorage ?
  - inspect -> application -> storage -> Local Storage

### How to run Tests :

#### Make sure dependencies are installed

- `npm run test` or `npm test`

### Versions :

- node : v17.5.0
- graphql : 14.7.0
- react : 17.0.2
- styled-components: 5.3.3

### Chosen Stack :

- Python backend
- GraphQL
- React frontend
- Styled Components
- Read-more-react
- Prettier
- EsLinter

### Project Description :

- This repo contains the code related to the frontend of the project.
  The frontend utilises:
  - Figma
  - React
  - Styled Components
  - Jest Testing
  - prettier

#### Requirements

Build a full-stack journaling application with a twist.

- A user can add and delete multiple entries a day; [x]
- A user can view the saved entries (the entries should be saved to a database);[x]
- A user can view the quote of the day from an API of your choice above the entries;[x]
- A user can save the quote of the day [x]
- A user can view the saved quotes of the day. [x]

In a technology of your choice, please prepare and present the UI design ideas (wireframes) to
the client on Slack, apply it according to their feedback. [x]

The app should work locally, don’t deploy it. [x]

The client has strict budgeting rules and the crafters can’t bill for additional features that weren’t
listed in the requirements above. Please fill the timesheet with the tasks that you’ve completed
as you progress through.[ ]

If in doubt about the scope of the project, reach out to the client on Slack. [x]

#### Stack

- Python backend [x]
- GraphQL [x]
- React frontend [x]

The remaining stack is at your discretion. Pick the web framework, GraphQL support (if needed)
and database technology. Feel free to use any additional libraries eg. components libraries.

### Outstanding Errors :

- The Frontend tests were all running until I introduced the savedQuotes page and functionality. I used localStorage and JSON.parse/JSON.stringify for this functionality and somehow this broke a lot of my tests. I'm aware of this issue and would love to look into it if I had more time.

The Error :

This same error persists for all tests that I attempt to render.

---

`✕ a request is made with the right parameter (115 ms)

● Home › a request is made with the right parameter

    TypeError: Cannot read properties of undefined (reading 'sections')

      37 |
      38 |   it("a request is made with the right parameter", async () => {
    > 39 |     render(<Home url={url} />);
         |     ^
      40 |
      41 |     expect(requests.getAllPostData).toHaveBeenCalledWith(url);
      42 |   });`

---

### Stretch Goals :

- Loading icon instead of " No quote today" text in page footer.
- Displaying posts and quotes in order of date and time.
- Making the webapp responsive on different devices and sizes.
- Being able to click onto individual quotes and delete them.

### Developer - Ephrathah Oyedoh
