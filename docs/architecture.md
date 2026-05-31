# Architecture Summary

## System Overview

Cyber Incident Disclosure Tracker is a production-style intelligence dashboard designed to monitor and analyze publicly disclosed cyber incidents across multiple sectors.

The platform transforms raw incident records into actionable intelligence using analytics, trend detection, risk scoring, and intelligence summaries.

---

# Frontend Architecture

Framework:

* Next.js
* TypeScript
* Tailwind CSS

Visualization:

* Recharts

Core Components:

* KPI Cards
* Intelligence Summary
* Severity Distribution Chart
* Sector Exposure Chart
* Incident Timeline
* Intelligence Sidebar
* Threat Outlook
* Incident Log Table
* Filter System

Frontend Responsibilities:

* Dashboard rendering
* Responsive layout
* Data visualization
* User interaction handling
* Filtering
* Intelligence presentation

---

# Backend Architecture

Framework:

* FastAPI

Libraries:

* Pandas

Backend Responsibilities:

* API generation
* Dataset management
* Analytics computation
* Risk calculations
* Intelligence aggregation

---

# API Endpoints

| Endpoint         | Responsibility              |
| ---------------- | --------------------------- |
| `/api/incidents` | Returns incident dataset    |
| `/api/metrics`   | Returns KPI metrics         |
| `/api/analytics` | Returns analytics summaries |
| `/api/download`  | Downloads dataset           |

---

# Intelligence Layer

The intelligence layer converts analytical data into operational insights.

Generated Intelligence:

* Most targeted sector
* Dominant severity
* Cyber Risk Index
* Threat outlook
* Timeline trend analysis
* Executive intelligence summaries

---

# Data Flow

Frontend Dashboard
↓
FastAPI REST APIs
↓
Analytics Engine
↓
Incident Dataset
↓
Intelligence Generation
↓
User Insights

---

# Data Strategy

Current Implementation:

* Synthetic demo dataset

Future Integration:

* SEC EDGAR
* GDELT
* Live cyber disclosure feeds

---

# Validation

The system successfully passed:

* Visual Architecture Review (VAR)
* User Acceptance Testing (UAT)

Validated Areas:

* responsiveness
* filtering
* edge cases
* loading states
* intelligence rendering
* chart consistency
* dataset export
