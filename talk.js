You are a senior Product Designer and Electron Desktop UI Engineer.

Redesign the PrintEzy Printer Configuration page.

Use the attached image ONLY as visual inspiration.

Do NOT copy the layout.

Design for a professional Windows desktop application.

The application should feel closer to:

- Docker Desktop
- VS Code
- Notion Desktop
- Slack Desktop
- Windows 11 Settings

rather than a responsive website.

================================================

Keep ALL existing functionality exactly the same.

Do NOT modify:

- printerStore
- printerService
- connectedPrinters.js
- Zustand
- selection logic
- local storage
- validation

Modify UI only.

================================================

Design Principles

• Compact
• Information dense
• Professional
• Minimal
• Fast to scan

Avoid:

- giant empty spaces
- oversized cards
- huge buttons everywhere
- mobile layouts
- centered wizard pages

================================================

Layout

Use a desktop split layout.

------------------------------------------------

Top

Printer Configuration

Subtitle

------------------------------------------------

Body

70%

Available Printers

30%

Configuration Summary

------------------------------------------------

Available Printers should be scrollable.

Summary remains sticky.

================================================

Printer Row

Each printer should look like a compact desktop list item.

Include

Printer icon

Printer name

Connection badge

Status badge

Default badge

Capabilities

B&W

Colour

Buttons

Assign B&W

Assign Colour

Hover state

Selected state

Avoid large image cards.

================================================

Summary Panel

Contains

Selected B&W Printer

Selected Colour Printer

Windows Default Printer

Connected Printers

Offline Printers

Configuration Status

Large Start Shop button

The Start Shop button remains disabled until configuration is valid.

================================================

Visual Style

Dark theme

12px radius

Soft shadow

Thin borders

Subtle gradients

Excellent spacing

Professional typography

Use theme variables only.

================================================

Interaction

Hover highlight

Smooth selection animation

Selected printer row gets colored border

Assigned buttons become

Assigned

with check icon.

================================================

Badges

READY

Green

OFFLINE

Red

CONNECTED

Blue

DEFAULT

Purple

B&W

Grey

COLOUR

Orange

================================================

Animations

Only subtle Framer Motion.

Hover

Selection

Fade

No flashy animations.

================================================

Responsiveness

Desktop only.

Support

1366

1440

1600

1920

No horizontal scrolling.

================================================

Output

Review the current implementation.

Explain UI improvements.

Generate updated files one by one.

Keep business logic untouched.

The final result should feel like premium Windows desktop software instead of a responsive website.
