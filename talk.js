You are a Senior Product Designer, UX Architect and Electron + React Desktop Application Engineer.

Project:
PrintEzy Partner Desktop Application

Current Progress

✓ Phase 1 — Foundation completed
✓ Phase 2 — Authentication completed
✓ Phase 3 — Printer Configuration & Shop Startup completed

The application currently opens directly into Dashboard after successful login and shop startup.

===========================================================
Goal
===========================================================

Build ONLY the Dashboard UI and the reusable Dashboard Component System.

This phase is UI only.

NO backend.

NO Flask.

NO printer events.

NO queue logic.

NO customer verification logic.

NO analytics calculations.

NO printing logic.

Everything must use temporary dummy data.

The objective is to create reusable UI components that will later be reused across:

Dashboard

Pending Queue

Verify Customer

Analytics

Settings

Do NOT create duplicate UI components for different pages.

===========================================================
Design Philosophy
===========================================================

Design for a professional Windows desktop application.

Inspiration

• Docker Desktop

• VS Code

• Notion Desktop

• Linear

• Slack Desktop

• Windows 11 Settings

Avoid

❌ Mobile layouts

❌ Oversized cards

❌ Large empty spaces

❌ Website-style dashboards

The dashboard should feel like software operators use for 8–12 hours every day.

Compact.

Professional.

Information-dense.

Fast to scan.

===========================================================
Dashboard Layout
===========================================================

Keep existing Sidebar.

Keep existing Header.

Main layout

--------------------------------------------------

Welcome Header

↓

Summary Cards

↓

Responsive Widget Grid

--------------------------------------------------

Widgets should align naturally.

No unnecessary scrolling.

Desktop-first.

===========================================================
Welcome Header
===========================================================

Display

Greeting

Partner Name

Shop Name

Today's Date

Current Time

Shop Status

Small Online badge

Example

Good Morning, Himanshu

QuickPrint Hub

Tuesday, 7 July 2026

09:45 AM

● Shop Online

===========================================================
Summary Cards
===========================================================

Create reusable SummaryCard component.

Dashboard should contain

Today's Revenue

Pending Orders

Completed Orders

Connected Printers

Each card should display

Icon

Large value

Subtitle

Small trend indicator

Hover effect

Reusable design.

Analytics page will reuse these cards later.

===========================================================
Widget System
===========================================================

Create reusable dashboard widgets.

Pending Queue Widget

Verify Customer Widget

Connected Printers Widget

Recent Activity Widget

Empty Widget

Loading Skeleton

Section Header

Statistic Badge

Do NOT create Dashboard-specific widgets.

Each widget must be reusable on future pages.

===========================================================
Pending Queue Widget
===========================================================

Preview only.

Display

Latest 5 jobs.

Columns

Customer

Pages

Copies

Status

Time

Footer

View All

No actions.

No printing.

Dummy data only.

===========================================================
Verify Customer Widget
===========================================================

Preview only.

Display

Latest printed but uncollected jobs.

Columns

Customer

OTP Status

Pickup Status

Printed Time

Footer

View All

Dummy data only.

===========================================================
Connected Printers Widget
===========================================================

Use connectedPrinters.js

Display

Printer Name

Ready

Printing

Offline

Selected B&W

Selected Colour

Default Printer

Connection Badge

Compact desktop cards.

No printer actions.

No monitoring.

No refresh.

===========================================================
Recent Activity Widget
===========================================================

Timeline style.

Examples

Order Uploaded

Printer Ready

Customer Verified

Printer Offline

Shop Started

Dummy data only.

===========================================================
Reusable Components
===========================================================

Create reusable components inside

components/dashboard/

Suggested components

SummaryCard

DashboardWidget

SectionHeader

StatBadge

QueueTable

VerificationTable

PrinterStatusCard

PrinterGrid

ActivityTimeline

ActivityItem

WidgetEmptyState

WidgetLoading

These components must be reusable by future pages.

===========================================================
Dummy Data
===========================================================

Create

dashboardData.js

queueData.js

verificationData.js

activityData.js

Only temporary data.

Do not connect backend.

===========================================================
Animations
===========================================================

Use Framer Motion.

Subtle only.

Hover

Fade

Card lift

Loading

Avoid excessive animations.

===========================================================
Visual Design
===========================================================

Dark Theme

12px radius

Thin borders

Soft shadows

Modern typography

Excellent spacing

Consistent icons

Professional desktop appearance.

===========================================================
Architecture
===========================================================

Do not place UI inside Dashboard.jsx.

Dashboard should simply compose reusable widgets.

Example

<WelcomeHeader />

<SummaryCards />

<PendingQueueWidget />

<VerifyCustomerWidget />

<ConnectedPrintersWidget />

<ActivityWidget />

===========================================================
Future Compatibility
===========================================================

The same widgets will later be reused in

Pending Queue page

Verify Customer page

Analytics page

Settings page

Build them with props instead of hardcoded values.

Example

<QueueTable
    compact={true}
    limit={5}
/>

Later

<QueueTable
    compact={false}
    limit={50}
    searchable
    filterable
/>

Same component.

===========================================================
Code Quality
===========================================================

Use

React Hooks

Reusable components

Props

Clean architecture

Small components

Avoid duplicated code.

Do not redesign Sidebar or Header.

===========================================================
Output
===========================================================

1. Review the existing project architecture.

2. Explain every new component before creating it.

3. Explain how each component will be reused later.

4. Generate one file at a time.

5. Wait before generating the next file.

6. Do not rewrite unrelated files.

7. Ensure everything compiles successfully.

===========================================================
Final Checklist
===========================================================

✓ Dashboard UI completed

✓ Welcome Header completed

✓ Summary Cards completed

✓ Pending Queue Widget completed

✓ Verify Customer Widget completed

✓ Connected Printers Widget completed

✓ Recent Activity Widget completed

✓ Reusable widget system completed

✓ Dummy data integrated

✓ Ready for Phase 5 (Pending Queue)

✓ Ready for Phase 6 (Verify Customer)

✓ Ready for Phase 7 (Analytics)

✓ Ready for Phase 8 (Settings)

Do NOT implement business logic.

Do NOT implement backend.

Do NOT implement printer service.

Do NOT implement live updates.

Everything must remain UI-only using dummy data.
