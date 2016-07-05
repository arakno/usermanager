## Internations Exercise synopsis

It is far from perfect and I found 4 hours very limited. I took about the double amount of time to finish the project. 
I reckon using angular or other framework would have been easier/faster but not as much fun :)
However, I am somewhat satisfied with the result. I haven't built anything as "big" with ES6 before, so it was a quite fun and learning experience.

I started using xhr to fetch partials, but then opted for a much more seamless experience using embed templates. 
I had a bit of a struggle finding an elegant way of hiding and showing the layout partials and lost a bit of time refactoring that.
Because I wanted to deliver in plain vanilla JS, it took more time. This and scaffolding the project with webpack (I am on windows).
Having the tests setup to digest ES6 was also a challenge.

Offline capabilities: Because it's an SPA, I have opted for a simple cache manifest file to give improve performance and offline capabilities 

API Endpoints:
/user
/group

Then using HTTP verbs we could:
GET /user - Retrieve all users
GET /user/xx - Retrieves a specific user
POST /user/xx - Creates/Updates a new user
DELETE /user/xx

# Improvements
There are several ways this app could improve, starting with 
- data validation , filtering duplicates...
- I would definitely use a template language for html, jade (now pug) or haml
- In order to have multiple groups, the user class can be extended with a method which stores subscribed groups
- Similarly, we could have group class to keep a register of all users subscribed to a specific group.


## Installation

**1. Clone the repo and start your own:**

```sh
git clone 
rm -rf .git
git init
```

**2. Install dependencies:**

```sh
npm install
```


## Deployment Workflow
```sh
npm run build 
```

On another terminal window run

```sh
npm run serve 
```

Open up http://localhost:8000 to see your app (Python has to be installed).

* This is just a workaround because livereload stopped working (I have a network issue I don't have much time to fix)

## Test Workflow
```sh
npm run test 
```

Observe the terminal window

**This was tested successfuly on Firefox and Chrome + Chrome Canary** 


