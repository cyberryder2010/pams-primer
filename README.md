# PROJECT NAME

Pam's Tech Primer

## Description

The application solves the problem of storing, sorting, and recalling reference materials involved in learning a new subject. The materials span a spectrum of references and medias and can be recalled and upadted as necessary. In addition personal notes, tips, hints and tricks can be added, edited or deleted from the reference application. A glossary for storing terms associated with the subject is available. Materials are searchable and provide links to other materials per the learners specification.

_Duration: 2 Week Sprint_

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com)

## Installation

1. Create a database named `prime_app`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

1. A new user will register, an existing user will Log-in after registration.
2. The Home Page will be displayed after log-in, all of the available references will be displayed as cards on the Home Page. A user will select a card to see the details of the reference.
3. A Navbar appears on the right side of the Home Page, that contains tabs to specific reference pages. Each of these features contain the complete list of references by type that have been stored. Selecting a reference in a specific type will bring up the complete details of the reference.
4. The Nav Bar also contains an Add Page for the addition of reference items. A user can select ADD to enter first the reference item and then add specific types of references as necessary.
5. A reference item can be edited once the reference details are displayed an EDIT feature is available for the reference and any specific associated reference feature.
6. A reference can also be deleted, when the reference is selected the DELETE feature is visible.
7. Upon completion of a reference addition, deletion or update, a User logs out.

## Built With

POSTGRESQL
Node-express
Axios
REACT-Redux
Material-UI

## Acknowledgement

Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.

## Support

If you have suggestions or issues, please email me at [cyberryder2010@gmail.com](www.google.com)
