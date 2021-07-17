###### Contact-list-app

Implemented contact information, and manage the contacts.

###### How to run project

1. Install all dependencies enter 'npm install'
2. Run project 'yarn start' OR 'npm start'

###### Added Libraries, Modules

1. React Material UI : Most popular reactJS Framework

# Installed with npm

npm install @material-ui/core

# Installed With yarn

yarn add @material-ui/core

2. React Bootstrap

# npm install react-bootstrap bootstrap@5.0.2

###### File Structure of project

# src/index.js

- index.js is main root component of app.

# src/App.js

- App.js it is main component from where project execution start.

# src/Component

- It is a directory where whole Contact list app components available

# src/Component/main.css

- This is the css file used for contact list components

# src/Component/Constants.js

- THis is the constants contents regarding contact list pp.

# src/Component/ContactsMainComponent

- This is main component where the actual contact list app included.
- Header.js component has used for header of app.
- TableComponent.js component has used for grid of app.
- AddContactModal.js component has used for add or edit contact details.

###### Application handle instruction

- Whenever start app on loading grid view (with First name, Last name, Email Id, Phone Number, Status Columns) there where display all available contacts.
- 'Add Contact' button, Whenever user click on Add Contact button new contact form open with the all fields where user can add new contact.
- 'Status' Column where user can active or inactive perticular contact.
- Last column of table : Where edit contact icon and delete contact icon available, where user can edit contact as well delete contact from list.
