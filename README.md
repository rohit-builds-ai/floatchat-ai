# 🌊 FloatChatAI

> Chat with the Ocean.

FloatChatAI is an AI-powered conversational platform for discovering, querying, and visualizing ARGO oceanographic datasets using natural language.

The platform combines Agentic RAG, NL2SQL, Geospatial Analytics, PostgreSQL/PostGIS, and Interactive Scientific Visualizations to make complex ocean data accessible to researchers, students, policymakers, and ocean scientists.

---

## 🚀 Features

### 🤖 Conversational Ocean Intelligence

Ask oceanographic questions in natural language:

* Show salinity profiles near the equator in March 2023
* Compare BGC parameters in the Arabian Sea
* What are the nearest ARGO floats to this location?

---

### 🧠 Agentic RAG Pipeline

* Retrieval-Augmented Generation (RAG)
* Metadata-aware retrieval
* Contextual ocean data understanding
* Multi-step reasoning workflows

---

### 🔍 Natural Language to SQL (NL2SQL)

Convert user questions into optimized PostgreSQL queries automatically.

Example:

**User Query**

```text
Show temperature profiles near Goa during January 2024
```

**Generated SQL**

```sql
SELECT *
FROM profiles
WHERE latitude BETWEEN ...
```

---

### 🌍 Geospatial Analytics

Powered by PostGIS:

* Radius Search
* Nearest Float Discovery
* Float Trajectory Analysis
* Spatial Filtering
* Geographic Aggregations

---

### 📊 Interactive Visualizations

* Ocean Maps
* Float Trajectories
* Temperature Profiles
* Salinity Profiles
* Depth-Time Plots
* Comparative Analytics

---

### ⚡ Scalable Data Pipeline

Processes large-scale ARGO datasets:

```text
NetCDF
    ↓
Data Processing
    ↓
PostgreSQL + PostGIS
    ↓
Vector Database
    ↓
AI Agent
```

---

## 🏗️ Architecture

```text
                   ARGO NetCDF Files
                            │
                            ▼
                 Data Ingestion Service
                            │
      ┌─────────────────────┼─────────────────────┐
      ▼                     ▼                     ▼

 PostgreSQL            ChromaDB             Parquet
 + PostGIS            Vector Store         Data Lake

      │                     │
      └─────────────┬───────┘
                    ▼

              Agentic RAG Layer
                    │
      ┌─────────────┼─────────────┐
      ▼             ▼             ▼

   NL2SQL      Visualization    Insights

                    │
                    ▼

              Next.js Frontend
```

---

## 🛠️ Tech Stack

### Frontend

* Next.js 16
* TypeScript
* Tailwind CSS v4
* ShadCN UI
* Zustand

### Backend

* FastAPI
* Python

### Databases

* PostgreSQL
* PostGIS
* ChromaDB

### AI Stack

* Gemini
* Agentic RAG
* NL2SQL
* Embeddings

### Data Engineering

* XArray
* Pandas
* NetCDF4
* NumPy

### Visualization

* Plotly
* Leaflet
* Mapbox

---

## 📂 Project Structure

```text
floatchatai
│
├── apps
│   ├── web
│   └── api
│
├── services
│   ├── ingestion-service
│   ├── rag-service
│   ├── sql-agent
│   └── visualization-service
│
├── packages
│   ├── database
│   ├── shared-types
│   └── ui
│
├── docs
│
├── datasets
│
└── scripts
```

---

## 📈 Project Goals

* Democratize access to oceanographic data
* Simplify ARGO dataset exploration
* Enable natural language querying of scientific datasets
* Support researchers and decision-makers with AI-powered insights
* Create a scalable foundation for future ocean intelligence systems

---

## 🎯 Future Roadmap

### Phase 1

* ARGO NetCDF Ingestion
* PostgreSQL Storage
* Geospatial Search
* Interactive Maps

### Phase 2

* Agentic RAG
* NL2SQL
* Conversational Interface

### Phase 3

* Advanced Analytics
* Multi-Dataset Support
* Voice Queries
* Research Report Generation

---

## 👨‍💻 Author

**Rohit Vishwakarma**

Full Stack AI Engineer

Building AI-powered systems at the intersection of Data Engineering, Geospatial Analytics, and Agentic AI.

---

## 📜 License

MIT License
