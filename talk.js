# Phase 6 — Customer Verification Queue

We are implementing the **Customer Verification Queue** for the PrintEzy Partner Desktop App.

This queue is responsible for handing over printed documents to customers after verifying their OTP.

Use the existing design system, typography, spacing, colors, animations, and components from previous phases.

Do NOT redesign the application.

Use the existing `orders.js` as the temporary database.

No backend.

No APIs.

No Printer Service integration.

Everything must be modular and production-ready.

---

# Data Source

Load data from

orders.js

Treat this as the temporary database.

For this phase, display ONLY orders where

```js
status === "Printed"
```

Ignore

Pending

Processing

Completed

Cancelled

Ready

---

# Queue Header

Professional desktop layout.

Left

Ready for Customer Verification

Below

XX Orders Waiting

Automatically update the count.

Right

Search box

No filters.

No sorting.

No refresh button.

---

# Search

Search instantly while typing.

Search ONLY by

- Order ID
- Customer Name

Case insensitive.

---

# Queue Layout

Display professional horizontal queue cards.

Desktop optimized.

Compact rows.

Height approximately 90px–110px.

Support many cards on screen.

Avoid mobile-style cards.

---

# Queue Card

Each card should display ONLY

• File Name

• Customer Name

• Total Pages

• Copies

• B&W / Colour

• Price

• Collection Type

Display

Collect Now

or

Collect Later

• Printed Status Badge

On the right side of every card place

OTP Input Box

Placeholder

Enter OTP

Verify Button

Entire verification should happen directly on the card.

Do NOT open any drawer.

Do NOT navigate anywhere.

Do NOT use modal dialogs.

Everything happens inline.

---

# Card Example

------------------------------------------------------------

📄 Thesis_Final.pdf

Himanshu Jat

48 Pages

2 Copies

B&W

₹96

Collect Later

[ OTP __________ ]

[ Verify ]

Printed

------------------------------------------------------------

---

# OTP Input

One input field per card.

Accept only numeric values.

Maximum

5 digits

(or use the same OTP length as stored in orders.js)

Disable alphabetic characters.

Pressing Enter should also trigger Verify.

---

# Verification Logic

When Verify is pressed

Compare entered OTP with

order.otp

from orders.js.

Temporary local verification only.

No backend.

---

# Successful Verification

If OTP matches

Show success animation.

Show green success message

Verification Successful

Update order status

Printed

↓

Completed

Remove the card from the Verification Queue.

Queue counter updates automatically.

Next card shifts upward with smooth animation.

---

# Incorrect OTP

If OTP is incorrect

Do NOT remove the card.

Display inline error

Invalid OTP

Please try again.

Clear the input field.

Allow unlimited retries.

---

# Loading State

After clicking Verify

Disable button.

Show loading spinner for approximately one second.

Then display either

Success

or

Error.

---

# Status Badge

Printed

Blue

Completed

Green

---

# Collection Type Badge

Collect Now

Green outline

Collect Later

Orange outline

---

# Empty Queue

If there are no Printed orders

Display professional empty state.

Heading

No Customers Waiting

Description

Printed documents waiting for customer collection will appear here.

---

# Queue Counter

Display

Ready for Customer Verification

XX Orders Waiting

Count only

Printed

orders.

Update automatically.

---

# View Details

Add a small View Details icon button at the end of every card.

Clicking it opens a read-only side drawer.

Drawer shows

Order ID

Terminal ID

User ID

Customer Name

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

This drawer is optional and should not interrupt the normal verification workflow.

---

# Animations

Use smooth professional animations.

Animate

Card removal

Queue movement

Status change

Success state

Drawer open/close

Avoid flashy effects.

---

# Components

Organize into reusable components.

components/

verification/

VerificationHeader

VerificationSearch

VerificationQueue

VerificationCard

OTPInput

VerifyButton

VerificationDrawer

VerificationEmptyState

hooks/

useVerificationQueue

utils/

verificationUtils

Business logic must remain outside UI components.

---

# Performance

Use

React.memo

useMemo

useCallback

Avoid unnecessary re-renders.

Prepare for hundreds of verification cards.

---

# Code Quality

Production-ready architecture.

Reusable components.

Clean folder structure.

Consistent naming.

Easy backend integration.

No duplicated logic.

No mock API calls.

Maintain the same UI quality and design language as previous phases.

---

# Future Backend Integration

Structure the code so the Verify button can later call

POST /verify-order

with

Order ID

OTP

The backend will

Validate OTP

Mark order as Completed

Record collection time

Update payout status

Sync customer history

For now, simulate all verification locally using orders.js.

---

# Professional UI Requirements

The verification screen should feel like enterprise counter software used in print shops, courier pickup centers, pharmacies, or POS systems.

Design goals

- Fast one-click verification
- Inline OTP entry
- No unnecessary popups
- No multiple screens
- Minimal clicks
- Clean horizontal cards
- Excellent readability
- Compact desktop layout
- Professional spacing
- Smooth animations
- High operator efficiency

The partner should be able to verify customers quickly without leaving the queue or opening additional windows.
