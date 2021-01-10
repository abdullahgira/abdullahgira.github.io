---
title: CSS animation tip that's worth 20 years of experience
date: "2021-01-02T09:57:34.439Z"
description: Getting to smooth animation in a neat way
socialImage: "/blog/css-animation-tip-that's-worth-20-years-of-experience/blur-train.jpg" # you have to include the full path
---

This post is a note-taking from <a href="https://www.youtube.com/watch?v=9-6CKCz58A8" target="_blank" rel='noopener'>Google Chrome Developers video</a> where Jake and Surma talks about Jake's journey with web animations.

## Table of content

- [CSS animations background](#css-animations-background)
- [CSS transition](#css-transition)
- [Transition problem](#transition-problem)
- [CSS animation](#css-animation)
- [Animation problem](#animation-problem)
- [**🌟 The tip 🌟**](#the-tip)

## CSS animations background <a name="css-animations-background"></a>

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s

```jsx{6-9}
import React, {useState, useEffect, useRef} from "react"

function Counter() {
  let [count, setCount] = useState(0)

  useInterval(() => {
    // Your custom logic here
    setCount(count + 1)
  }, 1000)

  return (
    <h1>
      {count}
      lorem lkdfie jlksdjfie lkdjfoiwjeflksdj iwejflksdj fowiejflksdj fiowejfksjdlkfj
      eijsldkjf oiejflskjdf j
    </h1>
  )
}
```

## CSS transition <a name="css-transition"></a>

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s

## Transition problem <a name="transition-problem"></a>

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s

## CSS animation <a name="css-animation"></a>

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s

## Animation problem <a name="animation-problem"></a>

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s

## The tip <a name="the-tip"></a>

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s