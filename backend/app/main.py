from fastapi import FastAPI
import json
from fastapi import Query
from pathlib import Path
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
app = FastAPI(title="Cyber Incident Disclosure Tracker")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATA_FILE = Path(__file__).parent.parent / "mock_data" / "incidents.json"


def load_data():
    with open(DATA_FILE, "r") as f:
        return json.load(f)


@app.get("/")
def root():
    return {"message": "Cyber Incident Disclosure Tracker API"}


@app.get("/api/incidents")
def get_incidents(
    sector: str | None = Query(None),
    severity: str | None = Query(None)
):
    incidents = load_data()

    if sector:
        incidents = [
            i for i in incidents
            if i["sector"] == sector
        ]

    if severity:
        incidents = [
            i for i in incidents
            if i["severity"] == severity
        ]

    return incidents

@app.get("/api/metrics")
def get_metrics():
    incidents = load_data()

    return {
        "total_incidents": len(incidents),
        "high_severity": len([i for i in incidents if i["severity"] == "High"]),
        "sectors": len(set(i["sector"] for i in incidents)),
        "companies": len(set(i["company"] for i in incidents))
    }
@app.get("/api/analytics")
def get_analytics():
    incidents = load_data()

    severity_breakdown = {}
    sector_breakdown = {}
    monthly_trend = {}

    for incident in incidents:

        severity = incident["severity"]
        sector = incident["sector"]

        severity_breakdown[severity] = (
            severity_breakdown.get(severity, 0) + 1
        )

        sector_breakdown[sector] = (
            sector_breakdown.get(sector, 0) + 1
        )

        month = incident["date"][:7]

        monthly_trend[month] = (
            monthly_trend.get(month, 0) + 1
        )

    return {
        "severity_breakdown": severity_breakdown,
        "sector_breakdown": sector_breakdown,
        "monthly_trend": monthly_trend
    }
@app.get("/api/download")
def download_data():
    return FileResponse(
        "backend/mock_data/incidents.json",
        media_type="application/json",
        filename="incidents.json"
    )