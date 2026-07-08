# Phase 8 — Settings (Professional Desktop Settings)

We are implementing the **Settings** page for the PrintEzy Partner Desktop App.

The Settings page should contain only operational and system-related configurations.

Business information is managed from the Partner Web Portal, not from the desktop application.

Continue using the existing design system, typography, spacing, colors, icons, shadows, animations, and reusable components created in previous phases.

Do NOT redesign the application.

Use temporary sample data.

No backend integration.

No API calls.

No Printer Service integration yet.

Everything should be modular and production-ready.

---

# Page Header

Title

Settings

Subtitle

Manage your shop information, printer configuration, notifications, and system settings.

---

# Layout

Create a modern desktop settings page.

Use section cards.

Each section should have

- Section icon
- Section title
- Small description
- Professional spacing
- Readable desktop layout

Maintain consistency with the rest of the application.

---

# 1. Shop Information

This section is READ ONLY.

Display the following information.

Business

• Shop Name

• Partner ID

• Terminal ID

• Owner Name

• Email Address

• Phone Number

• Shop Address

Pricing

• B&W Single Side Price

• B&W Double Side Price

• Colour Single Side Price

• Colour Double Side Price

Business Information

• UPI ID

• Shop Rating

• Opening Time

• Closing Time

Do NOT allow editing.

Display a professional information message.

"Shop information, pricing and business details can only be managed from the Partner Web Portal."

Display one button.

Manage Shop Information

Clicking the button should open a placeholder Partner Portal URL.

No editing inside the desktop application.

---

# 2. Printer Configuration

Display printer information only.

Read-only.

Do NOT allow changing printers while the application is running.

Display

Black & White Printer

• Selected Printer Name

• Status

Connected / Offline

Colour Printer

• Selected Printer Name

• Status

Connected / Offline

Paper

• Default Paper Size

A4

Display an information message.

"Printer selection can only be changed during application startup to prevent interruption of active print jobs."

No Change Printer button.

No Edit button.

---

# 3. Notifications

Allow enabling or disabling desktop notifications.

Provide three toggle switches.

• Order Received

• Print Completed

• Printer Offline

Store values locally.

No backend.

Changes should apply immediately.

---

# 4. Shop Control

This section controls whether the shop is accepting new print jobs.

Display

Current Status

Show a professional status badge.

Possible values

Open

Closed

Use appropriate colors.

Green

Open

Red

Closed

Display ONLY ONE primary button.

When shop is OPEN

Button text

Stop Shop

When shop is CLOSED

Button text

Start Shop

The button text and behavior should change automatically based on the current shop status.

---

## Stop Shop Confirmation

If the partner clicks

Stop Shop

Show a confirmation dialog.

Title

Stop Shop?

Message

Stopping the shop will:

• Stop accepting new print orders.

• Clear all Pending and Processing jobs from the current queue.

• Jobs that are already Completed will remain unchanged.

This action cannot be undone.

Buttons

Cancel

Stop Shop

If confirmed

Change shop status to Closed.

Clear all

Pending

Processing

orders from the temporary queue.

Completed, Printed and Cancelled orders must remain untouched.

Return to Dashboard after completion.

---

## Start Shop

If the shop is Closed

Display

Start Shop

When clicked

Show a confirmation dialog.

Title

Start Shop?

Message

Your shop will begin accepting new print orders.

Buttons

Cancel

Start Shop

If confirmed

Change status to Open.

Queue becomes ready to receive new orders.

No additional actions required.

---

# 5. System Information

Read-only section.

Display

Desktop Application Version

Printer Service Version

Backend Status

Database Status

Printer Connection Status

Last Synchronization Time

Use temporary values.

---

# 6. Help & Support

Display the following actions.

• User Guide

• Contact Support

• Report an Issue

• Privacy Policy

• Terms & Conditions

Each opens a placeholder page or URL.

---

# 7. Account

Display

Partner Name

Registered Email

Display one action.

Logout

Clicking Logout should show a confirmation dialog.

Title

Logout?

Message

You will be signed out of the PrintEzy Partner Desktop App.

Buttons

Cancel

Logout

---

# Components

Organize into reusable components.

settings/

SettingsPage

SettingsHeader

ShopInformationCard

PrinterConfigurationCard

NotificationSettingsCard

ShopControlCard

SystemInformationCard

HelpSupportCard

AccountCard

ConfirmationDialog

hooks/

useSettings

utils/

settingsUtils

Business logic must remain outside UI components.

---

# Performance

Use

React.memo

useMemo

useCallback

Avoid unnecessary re-renders.

---

# Code Quality

Production-ready architecture.

Reusable components.

Consistent naming.

Desktop-first responsive layout.

Clean folder structure.

No duplicated logic.

Easy future backend integration.

---

# UI Requirements

Design the page like a professional enterprise desktop application.

Use

• Compact information cards

• Professional typography

• Soft shadows

• Consistent spacing

• Rounded corners

• Modern toggle switches

• Clean status badges

• Desktop-friendly layout

Avoid

• Mobile-style layouts

• Large colorful cards

• Unnecessary settings

• Duplicate controls

The desktop application should remain focused on daily shop operations, while business management and pricing updates are handled through the Partner Web Portal.
