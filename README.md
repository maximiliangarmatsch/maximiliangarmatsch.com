[![cypress](https://github.com/maximiliangarmatsch/maximiliangarmatsch.com/workflows/End-to-end%20tests/badge.svg)](https://dashboard.cypress.io/projects/cdbje3/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&timeRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D) [![codecov](https://codecov.io/gh/zt4ff/maximiliangarmatsch.com/branch/master/graph/badge.svg)](https://codecov.io/gh/zt4ff/maximiliangarmatsch.com)

# maximiliangarmatsch.com
www.maximiliangarmatsch.com is my main portfolio item that also uses my personal frontend-boilerplate. 

### 1. Setup
```
npm install
npm start
```

#### Working Tools / Code Quality Tools
- Commitlint: makes sure that commit messages are formatted nicely.
- ESLint: Formats code nicely and shows typos.
- Prettier
- Babel
- other things....

### Code coverage
I used istanbul.js for code instrumentation and nyc to generate report. 
To see code coverage report in cli:
```
npm start
npm run cypress                  //(wait till all test suites run)
npm run cover:report
npm run cover:report:summary    //(to see summary of coverage)
```

Code coverage is also hosted with CI via Codecov and can be assessed in this [link](https://codecov.io/gh/zt4ff/maximiliangarmatsch.com)

### env variables

```
-> create an env file in root of project
-> add the file to .gitignore
-> add following information for env variables:

-> REACT_APP_DATASOURCE_URI="YOUR_GRAPHQL_API_DATASOURCE"
-> REACT_APP_AUTH_DOMAIN="YOUR AUTH DOMAIN"
-> REACT_APP_AUTH_CLIENT_ID="YOUR AUTH CLIENT_ID"
-> REACT_APP_AUTH_AUDIENCE="YOUR AUTH APPLICATION AUDIENCE"
-> REACT_APP_AUTH_URL="https://YOUR AUTH DOMAIN/oauth/token"
-> REACT_APP_AUTH_CLIENT_SECRET="YOUR AUTH CLIENT_SECRET"
-> REACT_APP_AUTH_USERNAME="YOUR APPLICATION TEST USER NAME"
-> REACT_APP_AUTH_PASSWORD="YOUR TEST USER NAME's PASSWORD"

```

### Build production
npm run build
npm install serve -g
npm serve
