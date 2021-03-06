# **Doctor Finder**

#### By Matt Dowdney

## This app helps users find a doctor in Portland, who can treat a given ailment. Users can search by name or ailment.

## Specifications

| Specification | Input | Output |
| --- | --- | --- |
| A given name should return exact or inclusive results for that name in Portland,OR. | Bob | Dr. Bob Ross, 124 Main St. Portland, OR 5033459999 www.drross.com, Accepting new patients: No...and many more doctors in Portland whose name contains Bob in this format |
|A given ailment should return doctors who can treat said ailment  |  Migraine | Dr. Michael Smith, 123 Main St. Portland, OR, 5038763333 www.drsmith.com, Accepting new patients: No....and many more migraine specialists in this format|
| Program should notify user if a search returns zero results |  Broken fingernails | Your search returned 0 doctors |
| Program should notify user of API failure | --- | Error Message 403 |

## Setup/Installation Requirements

* To view project code, _clone repository from_
* User must acquire an API key from Better Doctor and create a .env file with their user key. The user key must be named exports.apiKey

## Known Bugs

## Technologies Used

* HTML
* CSS _(Bootstrap 4.1)_
* JavaScript _(jQuery 3.2.1)_
* Node.js
* Webpack
* ESLint
* Jasmine
* Karma
* Babel

## License

* GPL

Matt Dowdney © 2018
