
Snake Game by Prachi Goyal - Documentation
==================================================

# 1. Introduction:
The Snake Game by Prachi Goyal is an interactive rendition of the classic Snake game. Players control a snake that grows longer each time it consumes food. The game ends if the snake collides with its own body.

![game_review](https://github.com/iprachigoyal/snake_game/assets/106303603/63c880e7-e726-4efb-a521-12bcd6e5b83b)


# 2. File Structure:
- index.html: Contains the game's HTML structure.
- style.css: Provides the styling for the game elements.
- script.js: Houses the game logic and interactions.
- favicon.ico: Represents the game's icon.

# 3. HTML Structure (index.html):
### 3.1 Main Game Wrapper 
- Class: .prachigoyal__wrapper
- Holds all the game elements.

### 3.2 Game Details 
Displays real-time game statistics:
- Current score: .prachigoyal__score
- High score: .prachigoyal__high-score

### 3.3 Play Board 
- Class: .prachigoyal__play-board
- The area where the snake moves and food appears.
- Uses a grid layout for positioning.

### 3.4 Level Selector
- Allows players to choose the game's difficulty.
- Options range from "Very Easy" to "Very Hard".

# 4. Styling (style.css):
### 4.1 Global Styles
- Resets default margins and paddings.
- Sets a universal font family (Open Sans).

### 4.2 Game Wrapper
- Dimensions set in vmin units for adaptability.
- Centered using flexbox.
- Given a specific background color and box shadow.

### 4.3 Game Details
- Font styling and flex layout to space out the score and high score.

### 4.4 Play Board
- Grid layout with specific background colors for the snake and food.

### 4.5 Responsive Design
- Adjustments for smaller screens, including font size, paddings, and display properties.

# 5. Game Logic (script.js):
### 5.1 Initialization
- Sets initial positions, velocities, and game status.
- Retrieves the high score from local storage.

### 5.2 Movement & Controls
- Snake's direction is controlled using arrow keys on desktops and control icons on mobiles.
- The snake's velocity and position are updated based on user input.

### 5.3 Food Consumption
- When the snake's head position matches the food's position:
  - The snake grows.
  - The score increases.
  - The food's position is randomized.

### 5.4 Game Over Conditions
- Occurs when the snake's head collides with its body or the game borders.
- An alert message is displayed, and the page is reloaded.

### 5.5 High Score Management
- The high score is updated in real-time and stored in local storage.

# 6. Responsiveness:
The game layout and controls adapt based on the screen size, ensuring a smooth gaming experience on both desktop and mobile devices.

# 7. Conclusion:
The Snake Game by Prachi Goyal is a fun and interactive game built with HTML, CSS, and JavaScript. Its well-structured code, clear design, and responsiveness make it a great example of a classic game brought to the web.

# 8. Creator:
The game has been developed by Prachi Goyal.

---

This documentation provides an overview of the Snake Game by Prachi Goyal, touching on its structure, functionality, and design. If you need more in-depth explanations or any specific details, please let me know!



