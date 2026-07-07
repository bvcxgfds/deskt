You are a senior Electron + React desktop application developer.

Project:
PrintEzy Partner Desktop Application

Current Status

✓ Electron + React setup completed
✓ Authentication completed
✓ Session persistence completed
✓ Printer Selection UI completed
✓ Printer selection logic completed
✓ Zustand store completed
✓ connectedPrinters.js is the temporary printer source
✓ Printer selections are saved locally

Do NOT change the existing folder structure.

Do NOT redesign the UI.

Do NOT implement the real Python PrinterService.

Do NOT use Electron IPC.

Goal

Implement Phase 3.3 — Shop Startup Flow.

===========================================================
Application Flow
===========================================================

The application flow should now become

Login

↓

Printer Configuration

↓

Start Shop

↓

Dashboard

The Dashboard should never open unless printer configuration is complete.

===========================================================
Startup Logic
===========================================================

When the application launches

1. Restore authentication session.

2. Restore saved printer configuration.

3. Decide where to navigate.

Cases

Case 1

Not logged in

↓

Login

----------------------------

Case 2

Logged in

Printer configuration missing

↓

Printer Configuration

----------------------------

Case 3

Logged in

Printer configuration complete

↓

Dashboard

===========================================================
Start Shop
===========================================================

The Start Shop button should become functional.

Before starting

Validate

✓ B&W printer selected

✓ If at least one printer supports colour,
  a Colour printer must also be selected.

✓ Selected printers must still exist.

✓ Selected printers must be connected.

✓ Selected printers must have status READY.

If validation passes

Save

shopStarted = true

Navigate

Dashboard

===========================================================
Dashboard Protection
===========================================================

Users should never access Dashboard unless

Authenticated

AND

Printer configuration completed

AND

Shop started

If any condition fails

Redirect

Printer Configuration

===========================================================
Back Navigation
===========================================================

Once Start Shop succeeds

User should not be able to navigate back to Printer Configuration using browser history.

Use replace navigation.

===========================================================
Shop Status
===========================================================

Create temporary Shop State.

Suggested Zustand state

shopStarted

shopLoading

shopReady

This is temporary until backend integration.

===========================================================
Persistence
===========================================================

Persist

shopStarted

using localStorage.

Restore automatically when the application starts.

===========================================================
Restart Behaviour
===========================================================

Application Restart

↓

Restore Session

↓

Restore Printer Selection

↓

Restore Shop State

↓

Navigate

Dashboard

===========================================================
If Printers Change
===========================================================

During startup

If one of the selected printers no longer exists

or

is disconnected

or

is OFFLINE

Clear shopStarted

Redirect

Printer Configuration

Show message

"Your printer configuration requires attention."

===========================================================
Loading
===========================================================

When Start Shop is pressed

Show loading state

Disable controls

Button text

Starting Shop...

Simulate

800ms

After loading

Navigate Dashboard.

===========================================================
Error Handling
===========================================================

Show inline messages.

Examples

Select a Black & White printer.

Select a Colour printer.

Selected printer is disconnected.

Selected printer is offline.

Printer configuration is incomplete.

Never use alert().

===========================================================
Architecture
===========================================================

Business logic should NOT live inside the page.

Recommended files

store/

shopStore.js

services/

shopService.js

utils/

shopValidation.js

The UI should simply call

startShop()

Future backend integration should require changing only shopService.js.

===========================================================
Code Quality
===========================================================

Use

React Hooks

Zustand

Reusable helpers

Async/await

Clean architecture

Small reusable functions

Avoid duplicated code.

===========================================================
Output
===========================================================

1. Review the current architecture.

2. Explain which files need modification.

3. Explain why.

4. Generate code one file at a time.

5. Wait before generating the next file.

6. Do not modify unrelated files.

7. Ensure the application compiles successfully.

At the end verify

✓ Login flow works

✓ Printer configuration flow works

✓ Start Shop works

✓ Dashboard is protected

✓ Startup restoration works

✓ Shop state persists

✓ Navigation works correctly

✓ Ready for Phase 4 Dashboard UI

Do not implement the real PrinterService, Electron IPC, Flask backend, or printing logic in this phase.
