# Day 19 Challenge: 19 - Webcam Fun

## 2021. Mar. 8th

### 💙 goals of this course

- Make personal webcam
- Make camera filter effect

### 👩🏻‍💻 What I learnt

- How to make webcam in the website
- MediaDevices.getUserMedia()
  - Nomad coders and this course uses code like below

```javascript
navigator.mediaDevices
  .getUserMedia(constraints)
  .then(function (stream) {
    /* use the stream */
  })
  .catch(function (err) {
    /* handle the error */
  });
```

- HTMLMediaElement.srcObject
  - The srcObject property of the HTMLMediaElement interface sets or returns the object which serves as the source of the media associated with the HTMLMediaElement. The object can be a MediaStream, a MediaSource, a Blob, or a File (which inherits from Blob).

### ⭐️ Reference

- [MediaDevices.getUserMedia()](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)

- [HTMLMediaElement.srcObject](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject)
