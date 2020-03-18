# User Management System
We would like to see some code that you have written, that you are proud of, and that you feel
demonstrates your curiosity, existing skills, and even areas you’d like to improve on.
We have designed a coding task that is intentionally vague and open-ended in its specification so that you
have the opportunity to take it in almost any direction you wish. If you would like to use a framework you
know well, no problem, or if you want to use some library you think is cool but haven’t put to use before,
that’s no issue either and we’d love to learn about it!

## Stories/Features
Here are some basic features that exist in most user management systems:
- I can see a list of existing users
- I can see a list of existing groups
- I can create users
- I can create groups
- I can assign users to a group they aren’t already part of
- I can remove users from a group
- I can delete groups when they no longer have members
- I can delete users

Remember, we want to determine how experienced and passionate you are about frontend
development. Here are some further ideas one could include, but please feel free to come up with your
own!
- A "user detail page" where it is possible to see a list of all groups that a given user is in
- A "group detail page" where it is possible to see a list of all users in a given group
- Search functionality
- When a user is deleted, he is removed from all groups he belonged to
- A user cannot exist without having at least one group (think validation when creating a user)
- Input validation on the client-side
- Make it responsive!
- JS tests
- ES6 syntax!
- ESLint (with some custom rules)
- Offline capabilities
- Anything else you think it’s cool!

## Artifacts
1. Your completed project source files.
2. A list of expected API endpoints (and optionally JSON structures) your app may consume.
3. Instructions for running your project (a README.md is nice)


## Exercise synopsis

It is far from perfect and I found 4 hours very limited to deliver the best possible solution, so I took about the double amount of time to finish the project. , b
I reckon using angular or other framework would have been easier/faster but not as much fun :)
However, I am somewhat satisfied with the result. I haven't built anything as "big" just with ES6 before, so it was a quite fun and learning experience.

I started using xhr to fetch partials, but then opted for a much more seamless experience using embed templates. 
I had a bit of a struggle finding an elegant way of hiding and showing the layout partials and spent some time refactoring that, because I wanted to deliver in plain vanilla JS. Scaffolding the project with webpack (I am on windows), and having the tests setup to digest ES6 was also a challenge.

Offline capabilities: Because it's an SPA, I have opted for a simple cache manifest file to improve performance and offline capabilities 

**API Endpoints:**
/user
/group

Then using HTTP verbs we could:
GET /user - Retrieve all users
GET /user/xx - Retrieves a specific user
POST /user/xx - Creates/Updates a new user
DELETE /user/xx

## Improvements
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

Open up http://localhost:8000 to see your app (Python has to be installed*
* This is just a workaround because livereload stopped working.

## Test Workflow
```sh
npm run test 
```

Observe the terminal window

**This was tested successfuly on Firefox and Chrome + Chrome Canary** 


