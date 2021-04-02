# Day 25 Challenge: 25 - Event Capture, Propagation, Bubbling and Once

<br>

## 2021. Mar. 20th

<br>

### 💙 goals of this course

Understand Event Capture, Propagation, Bubbling and Once

<br>

### 👩🏻‍💻 What I learnt

- [EventTarget.addEventListener()](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener)

- **Event Capture**(top from bottom) ↔ **Bubbling**(bottom from top)

- **Once**

  - A Boolean indicating that the listener should be invoked at most once after being added. If true, the listener would be automatically removed when invoked
  - 이벤트가 한 번 실행되면 없어지는 것과 같다.

- **Propagation**
  - [Event.stopPropagation()](https://developer.mozilla.org/ko/docs/Web/API/Event/stopPropagation)
    - prevents further propagation of the current event in the capturing and bubbling phases. It does not, however, prevent any default behaviors from occurring; for instance, clicks on links are still processed.

<br>

### ⭐️ Reference

- [이벤트 버블링, 이벤트 캡처 그리고 이벤트 위임까지](https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/)
