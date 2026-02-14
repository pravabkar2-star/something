# Valentine's Web App Implementation Details

## Overview
This is a static web application designed for a romantic proposal. It features a login system, a dynamic proposal page with an elusive "No" button, and a celebratory success page. The design focuses on cuteness, mobile responsiveness, and smooth animations.

## Tech Stack
- **HTML5**: Semantic structure.
- **CSS3**: Styling, Flexbox/Grid layouts, Keyframe animations (`@keyframes`), and Media Queries for responsiveness.
- **JavaScript (ES6+)**: Logic for DOM manipulation, Event Handling, and Cookie management.
- **Libraries**: `canvas-confetti` (via CDN) for the celebration effect.

## File Structure
- `index.html`: The entry point (Login).
- `valentine.html`: The main interaction page (Proposal).
- `success.html`: The final page (Celebration).
- `style.css`: Shared styles, variables, and animations.
- `script.js`: Shared logic for authentication, navigation, and interaction.

## Features & Logic

### 1. Authentication (Login)
- **File**: `index.html`
- **Logic**:
  - Prompts user for a name.
  - Checks input against a hardcoded list: `["admin"]`.
  - **Success**: Sets a cookie `valentine_auth_user` for 7 days and redirects to `valentine.html`.
  - **Failure**: Displays a shake animation/error message ("This is not for you... get out!").

### 2. Proposal (The "No" Button)
- **File**: `valentine.html`
- **Logic**:
  - Displays "Will you be my Valentine?".
  - **"Yes" Button**: Redirects to `success.html`.
  - **"No" Button**:
    - **Desktop**: Moves to a random screen position on `mouseover`.
    - **Mobile**: Moves to a random screen position on `touchstart` or `click`.
    - Uses `position: fixed` to ensure it can move anywhere in the viewport.

### 3. Celebration
- **File**: `success.html`
- **Logic**:
  - Displays a congratulatory message.
  - Shows a cute GIF (Cat).
  - Triggers a confetti explosion effect using `canvas-confetti`.

### 4. Security & Persistence
- **LocalStorage**: Used to persist the login state across pages (`checkAuth()` function).
  - Note: Switched from Cookies to LocalStorage to support local `file://` execution.
- **Redirection**:
  - If a user tries to access `valentine.html` or `success.html` without the auth token, they are redirected to `index.html`.
  - If a logged-in user visits `index.html`, they are auto-redirected to `valentine.html`.

### 5. Design & Aesthetics
- **Theme**: Pastel Pink & White.
- **Fonts**: 'Pacifico' (Headers) and 'Quicksand' (Body).
- **Background**: Floating hearts animation (`@keyframes floatUp`).
- **Responsiveness**: Adapted for mobile screens using CSS media queries (e.g., stacking buttons vertically on small screens).

## How to Run
1. Open `index.html` in any modern web browser.
2. Enter the name **"admin"** to log in.
3. Interact with the pages!
