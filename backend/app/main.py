from fastapi import FastAPI
import json
from pathlib import Path

app = FastAPI(title="Cyber Incident Disclosure Tracker")

DATA_FILE = Path(__file__).parent.parent / "mock_data" / "incidents.json"


def load_data():
    with open(DATA_FILE, "r") as f:
        return json.load(f)


@app.get("/")
def root():
    return {"message": "Cyber Incident Disclosure Tracker API"}


@app.get("/api/incidents")
def get_incidents():
    return load_data()


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

    for incident in incidents:

        severity = incident["severity"]
        sector = incident["sector"]

        severity_breakdown[severity] = (
            severity_breakdown.get(severity, 0) + 1
        )

        sector_breakdown[sector] = (
            sector_breakdown.get(sector, 0) + 1
        )

    return {
        "severity_breakdown": severity_breakdown,
        "sector_breakdown": sector_breakdown
    }