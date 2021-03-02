# Day 11 Challenge: Custom HTML5 Video Player

## 2021. Feb. 22th

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
