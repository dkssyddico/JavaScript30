# JavaScript30

30 Day Daily Challenge from https://javascript30.com/

## 2021. Feb. 22th

### Day 11 Challenge: Custom HTML5 Video Player

💙 goals of this course

- video play/pause button control
- volume/video speed control
- skip video button
- play/pause video with clicking video itself

✅ What I succeeded

- when click play/pause button, play/pause the video.
- when change volume range, volume is changed at the same time.
- when click skip button(-10s, 25s), the video current time is changed accordingly.

❌ What I failed

- play/pause video with clicking video itself
- when control sliders on video, video is stopped because of video click eventlistener.
  I think it gives priority to video click event. (1. video event 2. slider event)
- video speed (I totally missed it 😂)

👩🏻‍💻 What I learned

- HTML Media Element property: HTMLMediaElement.currentTime, HTMLMediaElement.duration, HTMLMediaElement.paused

- HTML Media Element method: HTMLMediaElement.play(), HTMLMediaElement.pause()

- CSS: Flex-basis

- conditional (ternary) operator : ex) video.paused ? 'play' : 'pause'

## 2021. Feb. 23th

### Day 12 Challenge: Key Sequence Detection (KONAMI CODE)

💙 goals of this course

- match up with words that user enter on keyboard
- understand keyboard event: **keyup**
- understand **Array** methods : push, splice, join, includes

👩🏻‍💻 What I learned

- keyup event
- how to use Array methods 🔽

```javascript
const newArray = ['a', 'b', 'c', 'd'];

console.log(newArray.join('')); // return abcd

console.log(newArray.splice(1, 2)); // return ['b', 'c']

console.log(newArray.includes('e')); // return false
```

## 2021. Feb. 26th

### Day 13 Challenge: slide in on scroll

💙 goals of this course
