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