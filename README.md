# The Odin Project - Rock Paper Scissors GUI Solution

This is a responsive, accessible, and interactive solution to the [Rock Paper Scissors project from The Odin Project](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors). The game is built using vanilla HTML5, CSS3 (using BEM naming convention), and dynamic JavaScript.

---

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

---

## Overview

### The challenge

Users should be able to:

- Play Rock Paper Scissors against a randomized computer opponent
- See their selection and the computer's selection visually updated as hand gestures (avatars) upon clicking
- Keep track of the score dynamically (first to 5 points wins)
- See a game over overlay (modal) with a blurred glass background and a "Play Again" button when the game ends
- View the optimal layout for the interface depending on their device's screen size (responsive mobile to desktop)
- Experience click scale pop-outs and transitions on interactive elements

---

## My process

### Built with

- Semantic HTML5 markup (utilizing `<header>`, `<main>`, `<section>`, `<footer>`, and `<small>`)
- CSS custom properties (variables for design system tokens)
- BEM (Block, Element, Modifier) naming architecture
- CSS Grid layout on the `body` tag (`grid-template-areas`, `grid-template-rows: auto 1fr auto`, `min-block-size: 100dvh`)
- Flexbox layout for inner element alignment and alignment distribution (`space-evenly`)
- Fluid typography and image/button scaling using CSS `clamp()` and `min()` functions
- Modern WebKit-safe resets (`-webkit-tap-highlight-color: transparent`, `outline: none`)
- Vanilla JavaScript (Asynchronous event-driven state tracking, DOM class/attribute manipulation, dynamic image and alt text rendering)

---

### What I learned

During this project, I learned to coordinate asynchronous event handling, advanced DOM manipulation, and responsive layout styling to build a high-performance browser game:

1. **Asynchronous Event-Driven Architecture:**
   I transitioned from synchronous console prompt loops to asynchronous event-driven execution. Instead of blocking the thread to wait for input, the application registers listeners on load and reacts dynamically when events are triggered.

2. **Mobile Viewport Height Fix (`100dvh`):**
   I learned how mobile browsers calculate `100vh` including the dynamic address bar, causing footers to scroll off-screen. I resolved this by applying `min-block-size: 100dvh` to the body grid container, pinning the footer perfectly to the bottom.
   ```css
   body {
       min-block-size: 100dvh;
       display: grid;
       grid-template-areas:
           "header"
           "main"
           "footer";
       grid-template-rows: auto 1fr auto;
   }
   ```

3. **Modal Overlays & Backdrop Filters:**
   I implemented a glassmorphic modal overlay using `backdrop-filter: blur()`. I learned how to use accessibility attributes like `role="dialog"` and `aria-hidden` to control screen reader announcements.
   ```css
   .modal {
       position: fixed;
       inset: 0;
       z-index: 1000;
       background-color: rgba(9, 0, 64, 0.85);
       backdrop-filter: blur(8px);
   }
   ```

4. **DOM Caching (DRY Principle):**
   Instead of hardcoding strings in JS for resetting elements, I learned to query and cache the default HTML values on page load. If the HTML text is modified, the JavaScript automatically adapts without needing code updates.
   ```javascript
   const defaultTitle = instructionTitle.textContent;
   const defaultSubTitle = subInstructionTitle.textContent;
   const defaultAvatar = humanSelection.src;
   ```

5. **Accessibility Focus & `blur()`:**
   I learned that hiding an element while a child retains browser focus violates W3C accessibility rules. I resolved this by calling `.blur()` on the reset button to release active focus before adding the `.hidden` class.
   ```javascript
   modalResetBtn.addEventListener("click", (event) => {
       event.currentTarget.blur();
       // ... reset logic ...
       gameOverModal.classList.add("hidden");
       gameOverModal.ariaHidden = true;
   });
   ```

---

### AI Collaboration

For this project, I collaborated with **Antigravity**, an AI coding assistant powered by **Google DeepMind's Gemini** model, acting as my technical mentor.

*   **How I used the tool:** We followed a strict "logic-first" mentorship model. Instead of code dumps, the AI guided me step-by-step, helping me write semantic markup, plan CSS architecture, and resolve DOM rendering lifecycle issues.

*   **Key Debugging & Brainstorming Achievements:**

    *   **The Event Bubbling Trap:** Solved the click target trap where clicking the image inside a button returned an empty ID, changing `event.target.id` to `event.currentTarget.id` to capture the button's ID.
    *   **Button Selector Scope:** Solved a 404 image load error for `left_modalResetBtn.png` by changing `querySelectorAll("button")` to `.game-controls__btn`, preventing the modal reset button from executing play round logic.
    *   **Fluid Responsive Layout:** Designed a layout using `inline-size: min(100%, 600px)` and `margin-inline: auto` to make the game board responsive across all device sizes without writing excessive media queries.
    *   **Mobile Tap Highlight Removal:** Fixed the annoying blue flash highlight when tapping buttons on mobile devices using `-webkit-tap-highlight-color: transparent`.

---

## Author

- Vinayak Kamble
