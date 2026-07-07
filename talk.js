You are a senior Electron + React desktop application developer.

Project:
PrintEzy Partner Desktop Application

Current Status:
- Electron + React setup is complete.
- Folder structure is finalized.
- Global dark theme is complete.
- Routing is complete.
- Login UI is complete.
- Authentication using partnersData.js is complete.
- AuthProvider, authService, session handling, Zustand store and ProtectedRoute already exist.
- DO NOT redesign the UI.
- DO NOT modify the folder structure.
- Improve only the authentication flow and application startup.

Goal:
Complete Phase 2.3 + Phase 2.4 by making the authentication experience production-ready while still using partnersData.js.

==================================================
PART 1 — Application Startup
==================================================

When Electron launches:

1. Initialize the application.
2. Restore previous session.
3. Show a full-screen splash/loading screen while checking authentication.
4. Prevent Login page flashing before session restoration.
5. After restoration:
   - Authenticated → Dashboard
   - Not authenticated → Login

==================================================
PART 2 — Protected Routes
==================================================

Protect every partner page.

Protected pages:

Dashboard
Pending Queue
Verify Customer
Orders
Analytics
Settings

Rules:

• Logged in
→ Allow access.

• Not logged in
→ Redirect to Login.

Prevent manually opening protected routes.

==================================================
PART 3 — Public Routes
==================================================

If already authenticated:

Opening

/login

should automatically redirect to

/dashboard

==================================================
PART 4 — Logout
==================================================

Implement a complete logout flow.

Logout should:

• Clear Zustand auth state
• Remove stored session
• Clear Remember Me storage
• Redirect to Login
• Prevent browser back navigation from reopening Dashboard

==================================================
PART 5 — Remember Me
==================================================

Improve Remember Me behavior.

Checked:

Store session in localStorage.

Unchecked:

Store session in sessionStorage.

Application should correctly restore from whichever storage was used.

==================================================
PART 6 — Session Validation
==================================================

When restoring session:

Validate that:

partnerId exists

shopStatus == "active"

isVerified == true

If validation fails:

Clear session.

Return to Login.

==================================================
PART 7 — UX Improvements
==================================================

Improve overall experience.

Loading

• Full-screen loading while restoring session.

• Login button spinner.

• Disable controls during authentication.

Buttons

Prevent multiple clicks.

Inputs

Disable while loading.

Focus

Autofocus email/phone field.

Keyboard

Enter submits form.

Tab order should be correct.

Esc should close any future modal gracefully (prepare infrastructure only).

==================================================
PART 8 — Error Handling
==================================================

Display friendly inline errors.

Examples:

Email or phone required

Password required

Invalid credentials

Partner not verified

Shop inactive

Session expired

Unexpected authentication error

Never use alert().

==================================================
PART 9 — Notifications
==================================================

If a reusable notification/toast component already exists, use it.

Otherwise create a lightweight reusable notification system for:

Successful login

Successful logout

Session expired

Authentication error

The notification system should be reusable across the application.

==================================================
PART 10 — Code Cleanup
==================================================

Review the authentication module.

Improve:

Function names

Comments

Folder organization

Imports

Duplicate code

Unused state

Unused hooks

Magic strings

Extract constants where appropriate.

==================================================
PART 11 — Future Backend Compatibility
==================================================

Keep architecture backend-ready.

The future Flask API should replace only authService.js.

Login UI, Zustand store, routes, ProtectedRoute, session management and components should remain unchanged.

==================================================
PART 12 — Code Quality
==================================================

Use:

React best practices

Hooks

Async/await

Clean architecture

Small reusable functions

Consistent naming

Production-quality comments only where useful

Avoid unnecessary re-renders.

==================================================
Output Requirements
==================================================

1. Review the existing authentication architecture first.
2. Explain which files need modification and why.
3. Modify only the necessary files.
4. Generate one file at a time.
5. Wait before generating the next file.
6. Do not rewrite unrelated files.
7. Ensure the project compiles without errors.
8. At the end, provide a checklist confirming:

✓ Login works
✓ Remember Me works
✓ Session restoration works
✓ Protected routes work
✓ Public route redirection works
✓ Logout works
✓ Startup loading works
✓ Error handling works
✓ Keyboard shortcuts work
✓ Ready to replace partnersData.js with Flask API later

Do not implement any backend API, JWT, Axios, printer integration, or business logic. Everything should continue working locally using partnersData.js.
