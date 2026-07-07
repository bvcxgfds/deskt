You are a senior Electron + React desktop application developer.

Project:
PrintEzy Partner Desktop Application

Current Status:
- Electron + React setup is complete.
- Global theme is complete.
- Routing is complete.
- Login UI is already complete.
- Folder structure already exists.
- partnersData.js already exists.
- Auth folder already exists.
- Zustand is installed.
- Do NOT change the existing folder structure.
- Do NOT redesign the UI.
- Modify only the files required for authentication logic.

Goal:
Implement local authentication using partnersData.js only.

This is a temporary authentication layer that will later be replaced by the Flask backend without changing the Login UI.

──────────────────────────────

Authentication Rules

A partner can log in using either:

• Email + Password

OR

• Phone + Password

The authentication should:

1. Search partnersData.js
2. Match email OR phone
3. Compare password
4. Verify:
   - isVerified === true
   - shopStatus === "active"
5. Return the complete partner object if successful.
6. Never expose the password after successful login.

──────────────────────────────

Session Rules

Implement Remember Me.

If Remember Me is checked:
- Save session in localStorage.

Otherwise:
- Save session in sessionStorage.

Session should contain:

- partnerId
- terminalId
- name
- email
- phone
- ownerName
- shopStatus
- online
- bw
- color

Do NOT save password.

──────────────────────────────

Startup Behavior

When the application starts:

1. Check localStorage.
2. If not found, check sessionStorage.
3. If session exists:
   - restore authentication
   - go directly to Dashboard
4. Otherwise:
   - show Login page

──────────────────────────────

Logout

Implement logout.

Logout should:

- Clear Zustand auth state
- Remove stored session
- Redirect to Login

──────────────────────────────

Validation

Email/Phone field

- Required

Password

- Required

If authentication fails:

Show proper inline error messages.

Examples:

"Email or phone is required."

"Password is required."

"Invalid email/phone or password."

"Partner account is not verified."

"Shop is inactive."

Never use alert().

──────────────────────────────

Loading

Simulate a real server request.

Authentication should wait approximately 700ms before returning.

During loading:

- Disable inputs
- Disable Sign In button
- Show loading spinner
- Button text:
  "Signing In..."

──────────────────────────────

Architecture

Keep responsibilities separated.

Login.jsx
→ UI only
→ Calls login()

authService.js
→ Authentication logic
→ Reads partnersData.js

session.js
→ Save session
→ Restore session
→ Clear session

AuthProvider.jsx
→ Provides authentication context

useAuth.js
→ Custom hook

ProtectedRoute.jsx
→ Redirect unauthenticated users

authStore.js
→ Zustand authentication state

validators.js
→ Email/phone/password validation

storage.js
→ localStorage/sessionStorage helper functions

Never place authentication logic directly inside Login.jsx.

──────────────────────────────

Code Quality

- Use async/await
- Use clean functions
- Keep files modular
- Add comments where useful
- Avoid duplicated code
- Follow production-quality coding standards

──────────────────────────────

Important

Do NOT implement:

- Flask API
- JWT
- Axios
- Refresh tokens
- Printer service
- Dashboard business logic

Everything must work completely offline using partnersData.js.

──────────────────────────────

Output Format

1. First explain which files need modification and why.
2. Then generate code one file at a time.
3. Wait after each file before generating the next.
4. Do not modify unrelated files.
5. Do not skip any required file.
