You are a senior Electron + React desktop application developer.

Project:
PrintEzy Partner Desktop Application

Current Status

- Electron + React project is complete.
- Global dark theme is complete.
- Routing is complete.
- Authentication is complete.
- Login, Logout and Session Persistence are working.
- Sidebar, Header and Dashboard shell already exist.
- connectedPrinters.js already exists and is the temporary source of printer data.
- Do NOT change the project structure.
- Do NOT redesign existing UI.
- Build only the Printer Selection module.

===========================================================
Goal
===========================================================

Implement Phase 3.1 + Phase 3.2

Build the complete Printer Selection screen and its selection logic using connectedPrinters.js.

No backend.
No Python integration.
No Electron IPC.

Everything should work with dummy printer data.

Later only printerService.js will be replaced.

===========================================================
Printer Data
===========================================================

The printers come from:

src/data/connectedPrinters.js

Each printer has the following structure:

{
    id,
    name,
    status,
    isConnected,
    isDefault,
    supportsBW,
    supportsColor
}

Do NOT modify this structure.

===========================================================
Navigation Flow
===========================================================

Current flow:

Login
↓

Printer Selection
↓

Dashboard

Do NOT implement Start Shop navigation yet.
That belongs to Phase 3.3.

===========================================================
UI Requirements
===========================================================

Create a premium desktop page.

Top:

Title

Printer Configuration

Subtitle

"Select the printers that will be used while your shop is online."

Below that:

Two sections

---------------------------------

Available Printers

---------------------------------

Display every printer as a modern card.

Each card should contain

Printer Icon

Printer Name

Connection Badge

Status Badge

Default Printer Badge (if applicable)

Supports

Black & White

Colour

Selection buttons

Set as B&W

Set as Colour

Disable buttons if printer cannot perform that role.

Example

HP LaserJet

READY

Default

Supports

✓ Black & White

✗ Colour

[Set as B&W]

[Disabled: Colour]

---------------------------------------------------

Connection Badge

Connected

Disconnected

Status Badge

READY

OFFLINE

ERROR

Use existing Badge component.

===========================================================
Selection Logic
===========================================================

Allow selecting

One default B&W printer

One default Colour printer

Only one printer can be selected for each role.

Selecting another printer automatically replaces the previous one.

Show the current selections in a summary panel.

Example

Selected Printers

Black & White

HP LaserJet

Colour

Canon ImageRunner

===========================================================
Validation
===========================================================

Prevent selecting

Colour printer

if

supportsColor == false

Prevent selecting

Disconnected printers.

Prevent selecting

OFFLINE printers.

Show inline messages.

Do NOT use alert().

===========================================================
Selection State
===========================================================

Store selections using Zustand.

Suggested state

selectedBWPrinter

selectedColorPrinter

printerConfigurationCompleted

Create a printerStore if it does not already exist.

===========================================================
Persistence
===========================================================

Save selections locally.

Use localStorage.

Suggested structure

{
  bwPrinterId: "...",
  colorPrinterId: "..."
}

Restore selections automatically whenever the page loads.

===========================================================
Summary Card
===========================================================

Right side of the screen

Printer Summary

Display

Selected B&W Printer

Selected Colour Printer

Number of Connected Printers

Default Windows Printer

Configuration Status

Ready

or

Incomplete

===========================================================
Empty State
===========================================================

If no printers exist

Show

Printer icon

"No printers detected"

Retry button (UI only)

===========================================================
Loading
===========================================================

Simulate loading printers for 500 ms.

Show skeleton cards while loading.

===========================================================
Animations
===========================================================

Use Framer Motion only for

Card hover

Selection

Fade in

Keep animations subtle.

===========================================================
Code Architecture
===========================================================

Do NOT place business logic inside the page.

Recommended architecture

pages/
    PrinterSelection/

components/
    printer/

store/
    printerStore.js

services/
    printerService.js

utils/

printerService.js should temporarily return data from connectedPrinters.js.

Later this file will use Electron IPC.

The UI should never import connectedPrinters.js directly.

===========================================================
Code Quality
===========================================================

Use

React Hooks

Zustand

Reusable components

Clean architecture

Small reusable functions

Avoid duplicated code.

===========================================================
Output
===========================================================

1. Review the existing architecture first.

2. Explain which files need to be created or modified.

3. Explain why each file is needed.

4. Generate code one file at a time.

5. Wait after each file before generating the next.

6. Do not rewrite unrelated files.

7. Ensure everything compiles successfully.

At the end verify

✓ Printer cards display correctly

✓ Printer status badges work

✓ Connected/Disconnected badges work

✓ Only compatible printers can be selected

✓ Offline printers cannot be selected

✓ Only one B&W printer can be selected

✓ Only one Colour printer can be selected

✓ Zustand state works

✓ Local storage persistence works

✓ Printer selections restore correctly

✓ Ready for Phase 3.3 Start Shop Flow

Do not implement Start Shop navigation or Python Printer Service integration in this phase.
