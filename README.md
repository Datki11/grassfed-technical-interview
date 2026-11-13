# Team Directory: React Exercise

Welcome, and thanks for taking the time to interview with us.

You'll build a small **Team Directory** app in React + TypeScript that loads people from an API.

## How this works

- You have **40 minutes**. Work through the tasks **in order**.
- **We don't expect everyone to finish.** We care more about how you approach problems than how many tasks you complete.
- **Please think out loud.** Tell us what you're trying and why.
- You can use documentation, MDN and search engines, as you would at work. Your interviewer will explain the policy on AI assistants.
- You can ask questions at any time.
- Styling isn't being assessed. `src/index.css` has optional class names you can use.

## Getting started

1. Click **Fork** (top of the page) so you have your own copy.
2. The app is already running in the preview panel.
3. Start coding in `src/UserDirectory.tsx`. Add new files or components wherever you like.

Useful files:

| File | What's in it |
| --- | --- |
| `src/types.ts` | TypeScript types for the API data (`User`, `UsersResponse`) |
| `src/api.ts` | The API URL (`USERS_URL`) and a backup URL |
| `src/index.css` | Optional ready-made styles |

API: `GET https://dummyjson.com/users` returns `{ users: User[], total, skip, limit }`.
Docs: https://dummyjson.com/docs/users

---

## Task 1: Load and display users

Fetch the users from the API when the page loads and show them in a list.

Each user should show:
- Full name (first and last)
- Email
- Company name

## Task 2: Loading and error states

- While the request is in progress, show a loading message.
- If the request fails, show a friendly error message instead of the list.

*Tip: you can test the error state by temporarily breaking the URL.*

## Task 3: Search

Add a text input above the list. As the user types, show only people whose **name** contains the search text. It shouldn't matter whether the user types in upper or lower case.

If nobody matches, show a "No users found" message.

## Task 4: User card and details

1. Move the markup for a single user into its own `UserCard` component that receives the user through typed props.
2. Clicking a card **selects** that user:
   - The selected card is visually highlighted.
   - A details panel shows the selected user's **phone**, **job title** and **city/state**.

## Bonus (only if you have time)

Pick any:
- **Load more:** add a "Load more" button that fetches the next page using `?limit=10&skip=...`.
- **Debounced search:** use the API's search endpoint, `https://dummyjson.com/users/search?q=...`, without sending a request on every keystroke.
- **Custom hook:** move your data-loading logic into a `useUsers()` hook.

Good luck!
