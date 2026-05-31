# User Acceptance Testing (UAT) Checklist

## Cyber Incident Disclosure Tracker

---

# 1. Functional Tests

| Test ID | Feature          | Scenario                                                | Expected Result                                                                                                            | Status |
| :------ | :--------------- | :------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------- | :----- |
| UAT-F01 | API Integration  | Initial page load                                       | Metrics, Analytics, and Incident data are fetched and displayed successfully without errors.                               | [x]    |
| UAT-F02 | Filters          | Select a specific Sector (e.g., Technology)             | The Incident Log Table updates to show only Technology incidents.                                                          | [x]    |
| UAT-F03 | Filters          | Select a specific Risk Severity (e.g., High)            | The Incident Log Table updates to show only High severity incidents.                                                       | [x]    |
| UAT-F04 | Filters          | Combine Sector and Severity filters                     | The Incident Log Table updates to match both criteria (e.g., Finance & Critical).                                          | [x]    |
| UAT-F05 | Download Dataset | Click the "Export Dataset" button                       | A new tab opens and successfully initiates the download of the incident dataset from the backend `/api/download` endpoint. | [x]    |
| UAT-F06 | Filters          | Clear filters (Select "All Sectors" / "All Severities") | The Incident Log Table resets to show the full list of incidents.                                                          | [x]    |

---

# 2. UI Tests

| Test ID  | Feature              | Scenario                        | Expected Result                                                                                                                                              | Status |
| :------- | :------------------- | :------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------- | :----- |
| UAT-UI01 | KPI Cards            | Hover over KPI cards            | Card translates slightly upwards (`-translate-y-1`), borders glow with their respective semantic colors, and icons scale/animate smoothly.                   | [x]    |
| UAT-UI02 | Intelligence Summary | View dynamically generated text | Highlights (e.g., top sector, active month) appear properly bolded in white, standing out from the slate text.                                               | [x]    |
| UAT-UI03 | Charts               | Hover over charts               | Charts display custom glassmorphic tooltips containing exact data values; container box-shadow glows cyan.                                                   | [x]    |
| UAT-UI04 | Incident Log Table   | Hover over table rows           | Entire row highlights subtly (cyan/slate), and text colors shift to active states.                                                                           | [x]    |
| UAT-UI05 | Intelligence Sidebar | View Cyber Risk Index           | Progress bar correctly fills according to the calculated risk score. The corresponding status badge uses the correct semantic color (green, yellow, or red). | [x]    |

---

# 3. Responsiveness Tests

| Test ID | Feature            | Scenario             | Expected Result                                                                                                                 | Status |
| :------ | :----------------- | :------------------- | :------------------------------------------------------------------------------------------------------------------------------ | :----- |
| UAT-R01 | Layout             | View on Mobile (sm)  | KPI cards stack vertically (1 column), charts stack vertically, sidebar stacks below main stage. Header typography scales down. | [x]    |
| UAT-R02 | Incident Log Table | View on Mobile (sm)  | Table container allows horizontal scrolling (`overflow-x-auto`) to prevent layout breaking on small screens.                    | [x]    |
| UAT-R03 | Layout             | View on Tablet (md)  | KPI cards switch to a 2-column grid. Charts are visible and responsive.                                                         | [x]    |
| UAT-R04 | Layout             | View on Desktop (xl) | Main stage (8 columns) and Sidebar (4 columns) sit side-by-side perfectly. KPI cards are 4 columns.                             | [x]    |

---

# 4. Data Validation Tests

| Test ID | Feature              | Scenario                    | Expected Result                                                                                                                | Status |
| :------ | :------------------- | :-------------------------- | :----------------------------------------------------------------------------------------------------------------------------- | :----- |
| UAT-D01 | Intelligence Summary | Calculate Top Sector        | The sector displayed as "most targeted" exactly matches the sector with the highest count in the `SectorChart`.                | [x]    |
| UAT-D02 | Intelligence Summary | Calculate Most Active Month | The month displayed matches the peak node on the `Incident Timeline` chart.                                                    | [x]    |
| UAT-D03 | Cyber Risk Index     | Validate Risk Score Logic   | The score correctly reflects the sum of its conditions and caps at 100.                                                        | [x]    |
| UAT-D04 | Incident Log Table   | Validate Badges             | "Critical" uses a red badge, "High" uses orange, "Medium" uses yellow, "Low" uses green. Text accurately maps to backend data. | [x]    |
| UAT-D05 | KPI Cards            | Validate Total Incidents    | The "Total Incidents" number matches the exact length of the incident array fetched on load.                                   | [x]    |

---

# 5. Edge Cases

| Test ID | Feature              | Scenario                                      | Expected Result                                                                                 | Status |
| :------ | :------------------- | :-------------------------------------------- | :---------------------------------------------------------------------------------------------- | :----- |
| UAT-E01 | Initialization       | Slow network connection                       | The loading state screen is displayed until both `metrics` and `analytics` are loaded.          | [x]    |
| UAT-E02 | Filters              | Select a filter combination with zero results | Table body clears and displays the empty state message: "No incidents found matching criteria." | [x]    |
| UAT-E03 | Cyber Risk Index     | Backend returns 0 incidents                   | Score safely calculates without NaN errors, displaying a safe low-risk state.                   | [x]    |
| UAT-E04 | Intelligence Summary | Backend returns malformed analytics           | Fallbacks trigger properly (e.g., displaying "N/A" instead of breaking the app).                | [x]    |
| UAT-E05 | Incident Log Table   | Long company names                            | Table cells truncate cleanly without breaking the table layout.                                 | [x]    |

---

# Final UAT Verdict

## ✅ PASS

The Cyber Incident Disclosure Tracker successfully passed:

* Functional Validation
* Visualization Validation
* Responsiveness Validation
* Data Validation
* Edge Case Testing

The platform is production-ready and meets enterprise-grade intelligence dashboard standards.
