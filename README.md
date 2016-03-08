# Fluent 2016 Workshop App

This repo is for the hub of everything we'll need in the [Building a lightweight mobile-web app with React and Redux](http://conferences.oreilly.com/fluent/javascript-html-us/public/schedule/detail/47769) workshop.

Please note, this is *not an intro level class*. If you're not familiar with node, npm and JS, and if you haven't used React a bit or if you're not comfortable running commands in a terminal you'll probably struggle to keep up.

**Please [do all of this before class](beforeclass.md) is possible.**

If everyone has done this before class *it will save us gobs of time* and we'll get to cover more of the interesting material.

Having things downloaded ahead of time will also save us from everyone clogging up the conference wifi to get the npm modules we need.

The TLDR version is this:

* Have node 4.x.x branch
* npm 3.x.x

Run these commands:

```
git clone https://github.com/HenrikJoreteg/fluent-2016
cd fluent-2016
npm install
npm start
```

If this completes without errors and you open a browser to http://localhost:3000 and see a message that says: `hello fluent` you're good.

If that didn't work **[read this](beforeclass.md)**. If you're still having trouble, feel free to email me: [henrik@joreteg.com](mailto:henrik@joreteg.com) and if we still can't get it sorted out please come a bit early to the workshop and I'll try to help you get set up.

## Useful Chrome Extensions

You'll probably want to install these browser extensions as well, but this is optional:

- [React Dev Tools Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
- [Redux Dev Tools Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

## Related resources

- [Copy/paste snippets](copypaste.md)
- [Before Class Doc](beforeclass.md)

## Goals of the workshop

The JS landscape is ever-changing, so if you're hoping for a "this is how you should build apps forever and ever" class, this isn't it.

The goal is to not just show you tools, but help you understand concepts that let you build fast/performant/lightweight apps.  We're going to focus on React and Redux. *But*, we're going to do it in a way that requires that you understand what's going on because *that understanding* is what will still have value as the landscape inevitably changes... in the future.

To keep things as "real world" as possible we are going to build something that isn't just a perfect, contained, synchronous, example app like a Todo list.

Instead, we'll get into some of the weirder, more real-world stuff that's tricky to do well in Redux and React, such as:

1. Dealing with asynchronous actions and events in Redux.
2. Implementing an OAuth login flow in a Redux app.
3. Persisting a token that's required for all other requests we make to a 3rd party API.
4. Not using a routing library at all, instead storing routing state in Redux too. (This forces us to understand clientside routing.)
5. Writing custom Redux middleware.
6. Creating "Higher Order Components" instead of using mixins to add re-usable functionality to React components in a composable way.
7. Optimizing React with `shouldComponentUpdate`, Redux's `connect()`, and understanding "pure" renders.
8. Building an app into something that's deployable.
9. then... um actually deploying it

Oh, and the final code bundle will weigh < 50kb min + gzip. Which is pretty friggin' tiny. For more on the importance of performance and filesizes on mediocre mobile devices, watch my talk from Dot.js in Paris: [Pocket-Sized JavaScript](https://www.youtube.com/watch?v=okk0BGV9oY0&feature=youtu.be).

## Workshop style

This isn't a 2 day lecture, it's designed to be *highly interactive*.

You're going to be *coding*... a lot. Some of it we're coding together, some of it you'll be challenged to complete portions of the app on your own.

I'll be building the app *in this repo* so I'll be pushing here frequently so you can easily catch up if you miss something or if for some reason we can't hunt down a bug in your copy of the app.

I'm excited! Hope you are too, let's build some cool stuff together.

## If you want to run your own production version of this

1. package.json "deploy" scripts needs your domain
2. run your own heroku instance of secret keeper: https://github.com/HenrikJoreteg/github-secret-keeper
3. register your app with the godfather (GitHub.com)
4. Update config to use your client ID

## Note to Windows users

Change the `"build"` line in `package.json` to:

```
"build": "set NODE_ENV=production&& webpack",
```

**note:** do *not* add a space after "production" or it won't work, because the trailing space will be included.
