# Cyber Incident Disclosure Tracker

A Real Rails Intelligence Library Proof of Concept focused on monitoring publicly disclosed cyber incidents, sector exposure, and cyber-risk intelligence patterns across critical infrastructure ecosystems.

---

# Overview

CyberRail Intelligence is a production-style cyber intelligence dashboard designed to simulate how modern threat monitoring systems visualize disclosure patterns, sector targeting trends, and operational cyber risk.

The platform transforms raw incident disclosures into actionable intelligence using dynamic analytics, risk scoring, timeline tracking, and contextual intelligence summaries.

---

# Core Features

* Real-time Intelligence Dashboard
* Dynamic Risk Assessment Engine
* Cyber Risk Index
* Sector Exposure Analytics
* Severity Distribution Visualization
* Incident Timeline Tracking
* Intelligence Summary Generation
* Threat Outlook Monitoring
* Dynamic Filtering System
* Exportable Dataset
* Responsive Analyst Interface
* Intelligence Sidebar
* Empty-State Handling
* Loading-State Handling

---

# Technology Stack

## Frontend

* Next.js
* TypeScript
* Tailwind CSS
* Recharts

## Backend

* FastAPI
* Pandas
* Python

---

# Intelligence Layer

The intelligence layer derives analytical insights from incident data and transforms them into operational summaries.

### Capabilities

* Sector dominance detection
* Severity trend analysis
* Cyber risk scoring
* Threat outlook generation
* Timeline pattern recognition
* Dynamic intelligence summaries

---

# Data Sources

The project architecture is inspired by public cyber disclosure ecosystems including:

* SEC EDGAR Filings
* GDELT Event Streams
* Global Disclosure Reports

> Current implementation uses synthetic demo datasets for simulation purposes.

---

# Architecture

Frontend → FastAPI API → Analytics Layer → Incident Dataset

## Frontend Responsibilities

* Data visualization
* Filtering
* Dashboard rendering
* Responsive UI
* Chart rendering
* User interactions

## Backend Responsibilities

* API endpoints
* Dataset generation
* Analytics computation
* Risk scoring
* Intelligence aggregation

---

# API Endpoints

| Endpoint         | Description                  |
| ---------------- | ---------------------------- |
| `/api/incidents` | Returns incident dataset     |
| `/api/metrics`   | Returns KPI metrics          |
| `/api/analytics` | Returns analytical summaries |
| `/api/download`  | Downloads incident dataset   |

---

# Setup Instructions

## Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Backend runs on:

```bash
http://127.0.0.1:8000
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:3000
```

---

# Screenshots

See `/screenshots`

Included captures:

* Dashboard Overview
* Intelligence Sidebar
* Filters Working
* Incident Table
* Download Feature

---

# Validation & Quality

The project successfully passed:

* VAR (Visual Architecture Review)
* UAT (User Acceptance Testing)

Validated areas include:

* responsiveness
* filtering
* edge cases
* loading states
* data validation
* intelligence rendering
* dashboard consistency

---

# Future Improvements

* Live Threat Feed Integration
* Real SEC EDGAR Parsing
* Authentication Layer
* Analyst Notes System
* Threat Actor Correlation
* AI-generated Threat Summaries
* SIEM Integration
* Mobile Intelligence Cards

---

# Author

Shahab Ahamed

Real Rails Batch 4 — Intelligence Library PoC
