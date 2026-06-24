# Lab 6: Making a React Dashboard Real with C# .NET and Bob

## Overview

In this lab, you'll use Bob to turn a visual React incident dashboard prototype into a working full-stack application powered by a C# ASP.NET Core backend.

Unlike a backend-only exercise, this lab starts with something participants can immediately see and interact with. The dashboard already looks real, but it uses mock data. Bob will help you analyze the frontend, plan the backend API, generate the .NET project, connect the UI to real data, and add a visible full-stack feature.

## Before Starting

Make sure you have:
- IBM Bob access
- .NET SDK 8 or newer
- Node.js 18 or newer
- A terminal
- A local workspace where Bob can create files and run commands

Helpful but not required:
- Basic familiarity with React
- Basic familiarity with C# or ASP.NET Core

## What You'll Build

A customer operations incident dashboard with:
- **Frontend**: React dashboard with filters, KPI tiles, incident cards, and actions
- **Backend**: C# ASP.NET Core Web API
- **Database**: EF Core with SQLite
- **Feature**: Escalate incidents and see the UI update
- **Validation**: Swagger/OpenAPI and xUnit tests

The starter app begins with mock incident data. During the lab, Bob will help you replace that fake data with a real .NET API.

## What You'll Learn

By the end of this lab, you will:
- Use Bob to understand an existing React prototype
- Plan a backend API contract from frontend requirements
- Generate an ASP.NET Core Web API with EF Core and SQLite
- Configure CORS and Swagger for a full-stack workflow
- Connect React to C# backend endpoints
- Add a visible full-stack feature across frontend and backend
- Generate tests and validate the application

## Lab Structure

- [Open the visual React prototype](#step-1-open-the-visual-react-prototype)
- [Analyze the frontend with Bob](#step-2-analyze-the-frontend-with-bob)
- [Plan the C# .NET backend](#step-3-plan-the-c-net-backend)
- [Generate the ASP.NET Core backend](#step-4-generate-the-aspnet-core-backend)
- [Connect React to the backend](#step-5-connect-react-to-the-backend)
- [Add a visible full-stack feature](#step-6-add-a-visible-full-stack-feature)
- [Generate tests and validate](#step-7-generate-tests-and-validate)

---

# Step 1: Open the visual React prototype

## 1.1: Open the starter project

Download the starter ZIP file [here](starter.zip). Extract it to a new local folder and open the extracted project in IBM Bob before starting the lab.

The starter contains a React incident dashboard:
- [`starter/src/App.jsx`](starter/src/App.jsx) for the dashboard UI and local interactions
- [`starter/src/mockIncidents.js`](starter/src/mockIncidents.js) for fake incident data
- [`starter/src/styles.css`](starter/src/styles.css) for the visual layout
- [`starter/backend-placeholder.md`](starter/backend-placeholder.md) to clarify that the .NET backend will be generated during the lab

<!-- TODO: Add screenshot of opening the starter folder in Bob here -->

**✅ Checkpoint**: The React starter project is open in your Bob workspace.

## 1.2: Run the React dashboard

Ask Bob to run the frontend:

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

You should see a customer operations incident dashboard with KPI tiles, status filters, incident cards, priority badges, and action buttons.

<!-- TODO: Add screenshot of initial React dashboard here -->

**✅ Checkpoint**: The dashboard is visible and interactive, but it is still using mock data.

## 1.3: Try the prototype behavior

Use the dashboard before changing anything:
- Filter incidents by status
- Click **Move status**
- Click **Escalate**
- Notice that the UI changes locally

This is the key starting point for the lab: the interface looks like a real product, but there is no backend yet.

**✅ Checkpoint**: You understand what Bob will help make real.

---

# Step 2: Analyze the frontend with Bob

## 2.1: Switch to Ask Mode

Change to **Ask Mode**.

<!-- TODO: Add screenshot of Ask Mode selected here -->

Ask Bob:

```text
Analyze this React dashboard and explain:
1. The component structure
2. Where mock data is used
3. What backend API endpoints this UI needs
4. How the UI should change once connected to a real backend
```

Bob should identify that the dashboard currently depends on `mockIncidents.js`, local React state, and local functions for status movement and escalation.

**✅ Checkpoint**: You understand the current frontend and what backend capabilities it needs.

## 2.2: Ask Bob to map frontend actions to API calls

Still in **Ask Mode**, ask:

```text
Map each frontend interaction in this dashboard to the backend API call it should use.
Include loading states, error states, and which React state should be replaced by data from the API.
```

Bob should recommend API endpoints for listing incidents, getting metrics, changing status, and escalating an incident.

**✅ Checkpoint**: You know which frontend behavior should move from mock data to real backend calls.

---

# Step 3: Plan the C# .NET backend

## 3.1: Switch to Plan Mode

Change to **Plan Mode**.

<!-- TODO: Add screenshot of Plan Mode selected here -->

Ask Bob:

```text
Create a backend implementation plan for this React incident dashboard.
Use C# ASP.NET Core Web API with EF Core and SQLite.

Include:
1. Project structure
2. Incident model fields
3. REST API endpoints
4. Database and seed data approach
5. CORS configuration for the React dev server
6. Swagger/OpenAPI setup
7. Testing approach with xUnit
```

The target public API should include:
- `GET /api/incidents`
- `GET /api/incidents/{id}`
- `POST /api/incidents`
- `PATCH /api/incidents/{id}/status`
- `PATCH /api/incidents/{id}/escalate`
- `GET /api/incidents/metrics`

**✅ Checkpoint**: You have a backend plan before generating code.

## 3.2: Review the plan

Before switching to Code Mode, review Bob's plan and confirm:
- The API matches the dashboard needs
- The database is simple enough for a workshop
- Authentication is intentionally out of scope
- The backend can run locally without external services

**✅ Checkpoint**: The implementation scope is clear and workshop-friendly.

---

# Step 4: Generate the ASP.NET Core backend

## 4.1: Switch to Code Mode

Change to **Code Mode**.

<!-- TODO: Add screenshot of Code Mode selected here -->

Ask Bob:

```text
Create an ASP.NET Core Web API backend for this dashboard in a new backend/ folder.

Use:
1. .NET 8
2. EF Core with SQLite
3. Swagger/OpenAPI
4. CORS configured for http://localhost:5173
5. Seed data that matches the existing React mock incidents

Create these files and folders:
- Program.cs
- Models/Incident.cs
- Data/AppDbContext.cs
- Controllers/IncidentsController.cs
- appsettings.json

Implement these endpoints:
- GET /api/incidents
- GET /api/incidents/{id}
- POST /api/incidents
- PATCH /api/incidents/{id}/status
- PATCH /api/incidents/{id}/escalate
- GET /api/incidents/metrics
```

Bob should create the backend structure and explain the generated files.

**✅ Checkpoint**: The C# backend files have been generated.

## 4.2: Run the backend

Ask Bob:

```bash
Run the ASP.NET Core backend and confirm the API starts successfully.
```

The backend should run on a local port such as:

```text
http://localhost:5000
```

or:

```text
https://localhost:5001
```

**✅ Checkpoint**: The backend starts without errors.

## 4.3: Open Swagger

Open the Swagger/OpenAPI page shown by the backend.

Use Swagger to test:
- `GET /api/incidents`
- `GET /api/incidents/metrics`
- `PATCH /api/incidents/{id}/escalate`

<!-- TODO: Add screenshot of Swagger showing the incident API here -->

**✅ Checkpoint**: The generated API can be tested independently from the frontend.

---

# Step 5: Connect React to the backend

## 5.1: Ask Bob to replace mock data with API calls

Still in **Code Mode**, ask:

```text
Connect the React dashboard to the ASP.NET Core backend.

Update the frontend so that:
1. Incidents load from GET /api/incidents
2. Metrics load from GET /api/incidents/metrics
3. Move status calls PATCH /api/incidents/{id}/status
4. Escalate calls PATCH /api/incidents/{id}/escalate
5. The UI shows loading and error states
6. The mock data file remains only as a reference or fallback
```

Bob should modify the React code so the dashboard uses real backend data.

**✅ Checkpoint**: The React app no longer depends on mock data for the main dashboard flow.

## 5.2: Run frontend and backend together

Ask Bob:

```text
Run the backend and frontend together.
Verify that the React dashboard loads incidents from the .NET API.
```

Open the React app again and confirm the dashboard still looks the same, but is now backed by C# .NET.

<!-- TODO: Add screenshot of dashboard connected to .NET backend here -->

**✅ Checkpoint**: The same visual dashboard now uses real backend data.

---

# Step 6: Add a visible full-stack feature

## 6.1: Implement incident escalation

The starter already has an **Escalate** button that changes local mock state. Now use Bob to make that behavior real across frontend and backend.

Ask Bob:

```text
Implement the Escalate Incident feature end to end.

Backend:
1. Add or complete PATCH /api/incidents/{id}/escalate
2. Set the incident priority to Critical
3. If the incident is Resolved, move it back to Open
4. Persist the change in SQLite

Frontend:
1. Call the backend endpoint when Escalate is clicked
2. Refresh the incident list and metrics after escalation
3. Show a visible UI change in the priority badge and metrics
4. Show a useful error message if the API call fails
```

**✅ Checkpoint**: Escalating an incident updates both the backend and the visible dashboard.

## 6.2: Test the visual behavior

In the browser:
1. Choose a non-critical incident
2. Click **Escalate**
3. Confirm the priority changes to **Critical**
4. Confirm the critical metric increases
5. Refresh the page
6. Confirm the change persists

<!-- TODO: Add screenshot of incident escalation feature here -->

**✅ Checkpoint**: Participants can clearly see Bob's full-stack change working.

---

# Step 7: Generate tests and validate

## 7.1: Ask Bob to create API tests

Ask Bob:

```text
Create xUnit tests for the ASP.NET Core incident API.

Cover:
1. GET /api/incidents returns seeded incidents
2. GET /api/incidents/metrics returns expected counts
3. PATCH /api/incidents/{id}/status updates an incident
4. PATCH /api/incidents/{id}/escalate makes an incident Critical
5. Missing incident IDs return the correct error response
```

Bob should create a test project or test folder and wire it to the backend.

**✅ Checkpoint**: The backend has automated test coverage for the main behavior.

## 7.2: Run validation

Ask Bob:

```text
Run the relevant frontend and backend validation commands.
Verify:
1. The backend starts
2. API tests pass
3. The frontend builds
4. The dashboard still loads real API data
5. Escalation still works after refresh
```

If anything fails, ask Bob to inspect the error, identify the root cause, and apply a correction.

**✅ Checkpoint**: The lab ends with a working, tested, visual full-stack application.

---

# Congratulations 🎉 You’ve completed Lab 6!

You successfully used Bob to:
- Analyze a visual React prototype
- Infer backend requirements from frontend behavior
- Plan and generate a C# ASP.NET Core API
- Configure EF Core, SQLite, Swagger, and CORS
- Connect React to real backend data
- Add a visible full-stack feature
- Generate tests and validate the application

This lab demonstrates Bob's value in a way participants can see immediately: a static prototype becomes a working product.
