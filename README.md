# Google Auth Reproduction

This is a minimal Expo Managed Workflow project (SDK 51) that reproduces the issue with Google Sign-In using `expo-auth-session`.

❗ The issue: Google OAuth returns a 400 error (invalid_request) when using native redirectUri in a dev/testing build, even with correct client IDs and URI schemes.

## Setup

- SDK: Expo 51
- Workflow: Managed
- Build type: Dev build (testing profile)
- Google Client IDs: Provided inside `App.tsx`
