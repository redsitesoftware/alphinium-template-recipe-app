# YumAI Going Live Checklist

## Local demo
- Install dependencies with `npm install --legacy-peer-deps`
- Ensure web support packages are present with `npx expo install react-dom react-native-web @expo/metro-runtime`
- Start the Expo web app on the agreed port with `CI=1 npx expo start --web --port 8098 --clear`

## Demo flow
- Land on the YumAI recipe home screen
- Open a recipe from Chef's Picks or the recipe grid
- Start Cooking to show guided steps and the step timer
- Open the Chef Mia FAB to show the alphinium-ai + ChatInstance demo prompts
- Switch to Saved to highlight persisted favourites

## Production notes
- Replace the local Chef Mia demo responder with real alphinium-ai chat and voice endpoints
- Add analytics around searches, saves, and cooking completions
- Swap placeholder Expo assets and metadata before store submission
