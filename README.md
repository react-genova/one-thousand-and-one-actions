# One thousand and one actions

Title freely inspired by _One Thousand and One Nights_.

## Introduction

Last week a coworker created a tool to analyse tenths of thousand of information and decided to dispatch an action for each information. He used React connected to redux. He made an interesting choice, which led to this shirt article/project. He is dispatching an action for each info, which means dispatching tenths of thousand of actions in a couple of minutes (let's say 10 actions per second). Both React and redux plays have no performance issues with that, but the whole application was freezing during the computation.  
So the question is: **how can I avoid the feeze?**

## Avoiding the freeze avoiding dispatching thousand of actions

Dispatching one single action at the end of the computation is obviously the easiest solution. Maybe it always could be the only solution to follow. But maybe there could be a use case when we need to dispatch lots of actions, or just we'd rather dispatch them. So, let's see how we can do that.

## The example project

I made a simple react/redux project, using CRA. The redux store contains just one counter reducer, with a single counter value. I created an action to reset the counter valute to zero and and action to increment the counter value by one. I eventually added a selector to retrieve the counter value.  
The UI presents the counter value and a button to reset it, an input text where I can choose the number of itereations to perform and several sections with a button to start the specific test of the section.  
You can clone this project and run `yarn` and `yarn start` to execute it in your browser.

## How to reproduce the freeze

I wrote this code in the click callback of the second logic:

```js
const onClick = () => {
    for(let i=0; i<iterations; ++i) {
        incrementCounter();
    }
};
```

The *incrementCounter* function is the bound action creator to increment counter value by one, so it performs a redux dispatch. This code generates a **freeze** of the UI.

## The trick to avoid the freeze

At the beginning, I simply created a _sleep_ function:

```js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
```

And added a sleep call at each iteration:

```js
const onClick = () => {
    for(let i=0; i<iterations; ++i) {
        incrementCounter();
        await sleep(1); // <-- THIS IS THE HUGLY TRICK
    }
};
```

Surely it's not the best approch, but it works!  
Unfortunaly, the sleep function delays all the computation process too much. So I refined the method by calling it only when at least a 10% of iterations occurred. Obviously you can choose the step value you prefer, keeping in mind that the less sleep you call, the better.  
So, finally the code is something like this:

```js
const onClick = async() => {
    const sleepStep = Math.floor(iterations / 10); // <-- THE 10% STEP
    for(let i=0; i<iterations; ++i) {
        incrementCounter();
        if (i % sleepStep === 0) { // <-- REDUCE SLEEP CALLS
            await sleep(1); // <-- AGAIN THE HUGLY TRICK
        }
    }
};
```
