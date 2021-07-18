###### Contact-list-app

Implemented contact information, and manage the contacts.

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

### Yarn installation

After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

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
