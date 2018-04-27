# **Doctor Finder**

#### By Matt Dowdney

## This app helps users find a doctor in their area, who can treat a given ailment.

## Specifications

| Specification | Input | Output |
| --- | --- | --- |
| A given city should return results for that city | Portland | Dr. Bob Ross, 124 Main St. Portland, OR, 97214 www.drross.com, Accepting new patients: No...and many more doctors in Portland in this format |
|A given ailment should return doctors who can treat said ailment  | Portland, Migraine | Dr. Michael Smith, 123 Main St. Portland, OR, 97214 www.drsmith.com, Accepting new patients: No....and many more migraine specialists in this format|
| Program should notif if a search returns zero results | Portland, Broken fingernails | Your search returned 0 doctors |
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
