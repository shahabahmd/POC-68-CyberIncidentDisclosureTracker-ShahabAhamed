import json
import random
from datetime import datetime, timedelta

companies = [
    "Microsoft", "Google", "Amazon", "Infosys", "IBM",
    "HSBC", "JP Morgan", "Toyota", "Tesla", "Cisco",
    "Oracle", "Meta", "Intel", "Nvidia", "TCS"
]

sectors = [
    "Technology",
    "Finance",
    "Healthcare",
    "Energy",
    "Retail",
    "Government",
    "Telecommunications"
]

incident_types = [
    "Data Breach",
    "Ransomware",
    "Phishing",
    "Credential Leak",
    "DDoS",
    "Supply Chain Attack",
    "Insider Threat"
]

severities = [
    "Low",
    "Medium",
    "High",
    "Critical"
]

countries = [
    "USA",
    "India",
    "UK",
    "Germany",
    "Japan",
    "Canada",
    "Australia"
]

data = []

for i in range(1, 101):
    data.append({
        "id": i,
        "company": random.choice(companies),
        "sector": random.choice(sectors),
        "incident_type": random.choice(incident_types),
        "severity": random.choice(severities),
        "country": random.choice(countries),
        "date": (
            datetime.now() -
            timedelta(days=random.randint(1, 365))
        ).strftime("%Y-%m-%d")
    })

with open("../mock_data/incidents.json", "w") as f:
    json.dump(data, f, indent=2)

print("Generated 100 incidents")