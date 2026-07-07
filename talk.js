# Phase 5A — Pending Queue (Professional Print Shop Queue)

We are implementing the **Pending Queue** for the PrintEzy Partner Desktop App.

Do NOT redesign the application.

Continue using the existing design system, colors, typography, spacing, components, animations, and layout from previous phases.

Use the existing `orders.js` sample data.

This phase is UI + queue management only.

No backend.

No APIs.

No Printer Service integration yet.

Everything should be modular and production-ready.

---

# Application Authentication

Before rendering the page, verify the application state.

If any of the following fail, redirect appropriately.

Required checks:

- Partner is authenticated.
- Terminal is assigned.
- Shop is open.
- Printer configuration exists.

Do not implement backend authentication yet.
Use the existing application state.

---

# Orders to Display

Load data from `orders.js`.

Display ONLY orders where

```js
status === "Pending" || status === "Processing"
```

Ignore

- Printed
- Ready
- Completed
- Cancelled

There should always be only ONE Processing order.

That Processing order is always the Queue Head.

All remaining jobs are Pending.

---

# Queue Order

Always sort automatically by

Oldest Upload Time

(uploadedAt ASC)

Never allow

- Manual sorting
- Drag & Drop
- Queue reordering

The queue must always maintain itself automatically.

---

# Queue Header

Create a professional desktop queue header.

Left side

Pending Queue

Below it

XX Orders

where XX is the total number of Pending + Processing jobs.

Right side

Search box

No filter button.

No sort button.

No refresh button.

The Auto Print toggle already exists in the GLOBAL APPLICATION HEADER.

Do NOT add another Auto Print toggle inside this page.

---

# Search

Provide instant search.

Search ONLY by

- Order ID
- User Name

Search should be case insensitive.

---

# Manual Printing

When

Auto Print = OFF

Display a single button inside the queue header.

Button text

Print Next

Do NOT place Print buttons inside queue cards.

When clicked

Print ONLY the Processing order.

Simulation only.

Processing

↓

Printed

↓

Remove from Pending Queue

↓

Next Pending order automatically becomes Processing.

The queue should always maintain one active Processing job.

---

# Auto Print

When

Auto Print = ON

Hide the Print Next button.

Instead display a subtle label

"Automatic Printing Enabled"

No printing logic yet.

Later this will be handled by the Windows Printer Service.

---

# Queue Layout

Use professional horizontal cards.

Compact desktop design.

Each row should be approximately 75–90px high.

The user should be able to view many jobs at once without excessive scrolling.

Avoid large mobile-style cards.

Spacing should feel similar to enterprise desktop software.

---

# Queue Card

Each queue card should be fully clickable.

Clicking opens the Order Details drawer.

Do NOT place any buttons inside the card.

Display ONLY the following information.

Left

Document icon

File Name

User Name

Center

Total Pages

Copies

Right

B&W / Colour badge

Price

Collection Type

Display

Collect Now

or

Collect Later

Upload Time

Status Badge

Do NOT display

Order ID

OTP

Payment

Terminal

Cloudinary

User ID

File Type

Print Side

Payout

Any unnecessary information.

Keep the cards extremely clean.

---

# Status Badge

Processing

Blue

Pending

Orange

Professional rounded pill design.

---

# Queue Counter

Display

Pending Queue

XX Orders

Count only

Pending

Processing

Automatically update when queue changes.

---

# Empty State

Professional illustration.

Heading

No Pending Print Jobs

Description

New customer uploads will automatically appear here.

---

# Order Details Drawer

Clicking any queue card opens a professional right-side drawer.

Display complete information.

Include

Order ID

User Name

User ID

Terminal

OTP

Filename

Pages

Copies

Print Side

Colour Mode

Price

Collection Type

Payment Details

Cloudinary URL

Uploaded Time

Updated Time

Payout Details

Read only.

No editing.

---

# Animations

Use smooth professional animations.

Animate

Queue movement

Card removal

Status updates

Drawer open/close

Avoid flashy effects.

---

# Performance

Use

React.memo

useMemo

useCallback

Avoid unnecessary re-renders.

Prepare for future support of thousands of print jobs.

---

# Components

Organize into reusable components.

components/

queue/

QueueHeader

QueueSearch

QueueCounter

QueueList

QueueCard

QueueDrawer

QueueEmptyState

hooks/

useQueue

utils/

queueUtils

No business logic inside UI components.

---

# Code Quality

Production-ready architecture.

Reusable components.

Clean folder structure.

Consistent naming.

Easy backend integration.

No duplicated code.

No mock API calls.

Maintain the same UI quality and design language as previous phases.

---

# Professional UI Requirements

Design this like a modern enterprise print management application.

The interface should feel similar to commercial print shop software or POS systems.

Use

- Compact horizontal queue rows
- Excellent alignment
- Consistent spacing
- Professional typography
- Clean status badges
- Minimal visual clutter
- Soft hover effects
- Smooth transitions
- Desktop-first responsive layout

Avoid

- Oversized cards
- Mobile-style layouts
- Bright colorful designs
- Unnecessary information
- Extra buttons inside queue cards

The operator should be able to scan dozens of print jobs quickly and understand the queue at a glance.
