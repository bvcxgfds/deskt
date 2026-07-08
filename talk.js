# Phase 7 — Analytics Dashboard

We are implementing the Analytics page for the PrintEzy Partner Desktop App.

This page provides partners with insights into their print shop's performance.

Use the existing design system, typography, spacing, colors, icons, animations, and components from previous phases.

Do NOT redesign the application.

Use the existing `orders.js` as the temporary database.

No backend.

No APIs.

All analytics should be calculated from the sample data.

Everything must be modular and production-ready.

---

# Data Source

Use

orders.js

Generate all analytics from this data.

No mock values.

---

# Header

Page Title

Analytics

Subtitle

Monitor your print shop performance.

Top Right

Date Range Selector

Options

Today

Last 7 Days

Last 30 Days

All Time

(Default: Today)

Filtering should work locally.

---

# KPI Cards

Display four professional summary cards.

Card 1

Total Orders

Count all orders.

Card 2

Completed Orders

Count

status === "Completed"

Card 3

Revenue

Sum of

price

for Completed orders.

Display in ₹.

Card 4

Pages Printed

Sum

pageCount × copies

for Completed orders.

---

# Second Row

Display four additional cards.

Pending Orders

Count Pending + Processing

Ready for Verification

Count Printed

Average Order Value

Revenue ÷ Completed Orders

Collection Later Orders

Count

collectionType == "later"

---

# Revenue Chart

Display a professional line chart.

X-axis

Date

Y-axis

Revenue

Calculate from Completed orders.

Allow switching between

Daily

Weekly

Monthly

---

# Orders Chart

Display a bar chart.

Show

Completed

Pending

Printed

Cancelled

order counts.

---

# Print Mode Distribution

Display a doughnut chart.

B&W

Colour

Percentage based.

---

# Collection Type

Display a doughnut chart.

Collect Now

Collect Later

---

# Payment Methods

Display a bar chart.

UPI

Card

Wallet

Cash

---

# Top Customers

Display a compact table.

Columns

Customer Name

Orders

Pages

Revenue

Top 10 only.

---

# Recent Activity

Display latest 10 activities.

Example

Himanshu Jat

Completed Thesis.pdf

2 min ago

Use uploadedAt / updatedAt timestamps.

---

# Quick Statistics

Display

Highest Order Value

Largest Document

Average Pages Per Order

Average Copies Per Order

Total Colour Orders

Total B&W Orders

Cancelled Orders

Completion Rate

---

# Empty State

If no data exists

Display

No Analytics Available

Start receiving orders to view analytics.

---

# Components

analytics/

AnalyticsHeader

KPICards

RevenueChart

OrdersChart

PrintModeChart

CollectionChart

PaymentChart

TopCustomers

RecentActivity

QuickStats

AnalyticsEmptyState

hooks/

useAnalytics

utils/

analyticsUtils

---

# Charts

Use a professional chart library already used in the project.

Animations should be smooth.

Desktop responsive.

Avoid flashy colors.

Use the application's existing design system.

---

# Performance

Calculate analytics using

useMemo

Avoid recalculating on every render.

---

# Code Quality

Reusable components.

Clean architecture.

Consistent naming.

Production-ready.

No duplicated code.

Easy backend integration.

---

# Future Backend Integration

The page should later consume

GET /analytics

instead of calculating locally.

Design the architecture so replacing local calculations with API responses requires minimal changes.

---

# Professional UI

The Analytics page should resemble modern business dashboards.

Keep it clean, minimal, and information-rich.

Avoid unnecessary graphs.

Prioritize readability and actionable insights.

Desktop-first layout with consistent spacing and responsive cards.
