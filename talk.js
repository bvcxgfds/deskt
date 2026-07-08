Refine the existing PrintEzy Partner Desktop App without changing the current architecture, routing, or business logic. This task is only for UI improvements, layout fixes, data consistency, and authentication flow refinement.

=========================
1. SETTINGS PAGE
=========================

The Settings page should display complete information instead of showing "Not Available", "-", or empty values.

Use data only from partnerData.js.

Display complete Shop Information:
- Shop Name
- Partner ID
- Terminal ID
- Owner Name
- Phone Number
- Email
- Address
- Rating
- Shop Status
- Opening Time
- Closing Time

Pricing should display:
- Black & White Single
- Black & White Double
- Colour Single
- Colour Double

Payment section:
- UPI ID

Notifications:
- Order Received
- Print Completed
- Printer Offline

Printer Configuration:
- Show only selected printers.

This page must remain read-only.
There should be no edit controls.
If editing is required, redirect users to the Partner Web Dashboard.

=========================
2. ANALYTICS PAGE
=========================

Improve the Analytics page by adding a professional date filter.

Include:
- Today
- Yesterday
- Last 7 Days
- Last 30 Days
- This Month
- Last Month
- This Year
- Custom Date Range

For Custom Date Range provide:
- Start Date
- End Date

Charts and statistics should update based on the selected date range using sample data.

=========================
3. VERIFY CUSTOMER PAGE
=========================

The page should not require horizontal scrolling.

OTP input and customer details should fit properly inside the page.

Maintain equal spacing between all fields and sections.

Keep the layout clean, responsive, and easy to read.

=========================
4. PENDING QUEUE
=========================

Keep the existing queue card design.

Do NOT redesign the queue cards.

Keep Customer Name and File Name exactly as they are.

Only improve the layout of the remaining details.

Also add a "View Details" button similar to the one used in the Verify Customer page.

Arrange these fields in one clean horizontal row with equal spacing:

- Pages
- Copies
- Print Type
- Single/Double Side
- Price
- Order Time
- Status

Requirements:
- Equal spacing between all fields.
- Proper horizontal alignment.
- Consistent layout across every queue card.
- No overlapping text.
- No horizontal scrolling.
- Long values should truncate gracefully if needed.

=========================
5. DASHBOARD DATA
=========================

Remove all hardcoded dashboard values.

Use ONLY:
- partnerData.js
- orders.js

Dashboard cards, charts, and statistics should all use these files as the single source of truth.

Do not create any new mock data or duplicate sample objects.

=========================
6. HEADER
=========================

Improve the top application header.

The Auto Print control should look more prominent and should be positioned immediately to the left of the Logout button.

Improve the Logout button styling.

Use:
- Better spacing
- Better alignment
- Better padding
- Consistent button height
- Better icon alignment
- Modern desktop toolbar appearance

=========================
7. AUTHENTICATION FLOW
=========================

Improve the authentication and app startup experience.

Current behavior needs to be refined.

Requirements:

- If the partner is already logged in and closes the desktop application, they should remain authenticated.
- On reopening the application, do NOT show the Login page again.
- Instead, always start from the Printer Selection page.
- The partner should reselect the printer(s) for that session before entering the dashboard.
- After printer selection, navigate to the Dashboard as usual.
- Do not preserve the previous printer selection across app restarts.
- Login session should remain active until the user explicitly clicks Logout.
- Logout should completely clear the authentication session and return the user to the Login screen.
- Preserve the existing authentication architecture while improving the startup flow.

Expected flow:

First Launch:
Login → Printer Selection → Dashboard

After Closing & Reopening:
Printer Selection → Dashboard

After Logout:
Login → Printer Selection → Dashboard

=========================
8. OVERALL UI POLISH
=========================

Improve:
- Consistent spacing
- Better padding
- Typography hierarchy
- Card radius
- Shadows
- Icon sizing
- Section spacing
- Alignment
- Color consistency
- Desktop responsiveness

Remove unnecessary whitespace.

Ensure there is no horizontal scrolling anywhere unless absolutely necessary.

=========================
IMPORTANT
=========================

- Do NOT change routing unnecessarily.
- Do NOT change the overall architecture.
- Do NOT change business logic.
- Do NOT redesign components unless requested.
- Do NOT create new sample data.
- Use only partnerData.js and orders.js wherever sample data is required.
- Preserve all existing functionality while improving layout, consistency, authentication flow, and overall user experience.
