## Internations Exercise synopsis

It is far from perfect and I found 4 hours very limited, I took about the double amount of time to finish the project. I reckon using angular or other framework would have been easier/faster.
However I am somewhat satisfied with the result. I haven't built anything as "big" with ES6 before, so it was a quite fun and learning experience.
I started using xhr to fetch partials, but then opted for a much more seamless experience using embed templates. 
I had a bit of a struggle finding an elegant way of hiding and showing the layout partials and lost a bit of time refactoring that.
Because I wanted to deliver in plain vanilla JS, it took more time. This and scaffolding the project with webpack (I am on windows).
Also, for that same reason, tests will not run properly as it expects Common JS modules instead of ES6

Given enough time I would find a way to resolve this issue.

Offline capabilities: Because it's an SPA, I have opted for a simple cache manifest file to give improve performance and offline capabilities 

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

* This is just a workaround because I couln't figure out why livereload stopped working (I have a network issue I didn't have time to fix)

## Test Workflow
```sh
npm run test 
```

or open test/index.html

** Tests will not function until the sources are compiled to ES5.


##This was tested successfuly on Firefox and Chrome + Chrome Canary 


