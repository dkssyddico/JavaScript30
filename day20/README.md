# Day 19 Challenge: 20 - Speech Detection

## 2021. Mar. 9th

### 💙 goals of this course

- Make the speech recognition without any libraries or external API
- Text has to be written on the page by my voice.
- Make new paragraph when re-talking

### 👩🏻‍💻 What I learnt

- SpeechRecognition: interface of the Web Speech API is the controller interface for the recognition service; this also handles the SpeechRecognitionEvent sent from the recognition service.

- SpeechRecognition.**interimResults**

  - Controls whether interim results should be returned (true) or not (false.) Interim results are results that are not yet final (e.g. the SpeechRecognitionResult.isFinal property is false.)

- SpeechRecognition.**start()**
  - Starts the speech recognition service listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition.

### ⭐️ Reference

- [SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)
