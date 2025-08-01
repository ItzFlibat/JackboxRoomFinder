# Jackbox Room Finder
This project is a JavaScript application that attempts to find active Jackbox game rooms by generating random room codes. It fetches data from the Jackbox API and provides details about the found rooms, including the game name and room features.

> [!WARNING]
> This project sends automated requests to Jackbox's API and excessive requests will lead to your IP being rate limited from jackboxgames.com.
> Use responsibly, and consider using a VPN or proxy rotation to mitigate IP rate limiting.

---

## Features
- Generates random 4-letter room codes.
- Checks if the generated room code is active.
- Retrieves and displays details about the active room:
  - Game being played
  - Audience participation status
  - Password requirements status
  - Twitch locking status
  - Moderation features status
- Provides a direct link to the game room.

## Usage
1. Ensure you have a JavaScript runtime environment set up (Node.js recommended).
2. Copy the code into a JavaScript file (e.g., `jackboxFinder.js`).
3. Run the script using Node.js:
   ```bash
   node jackboxFinder.js
Alternatively, you can use [Jackbox Jacker](https://jackbox-jacker.coolpixels.net/) created by [@coolpx](https://github.com/coolpx).
