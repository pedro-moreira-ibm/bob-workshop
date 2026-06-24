import { useMemo, useState } from 'react';
import { mockIncidents } from './mockIncidents.js';

const statusFilters = ['All', 'Open', 'In Progress', 'Resolved'];

const priorityRank = {
  Low: 1,
  Medium: 2,
  High: 3,
  Critical: 4,
};

function calculateMetrics(incidents) {
  return {
    open: incidents.filter((incident) => incident.status !== 'Resolved').length,
    critical: incidents.filter((incident) => incident.priority === 'Critical').length,
    resolvedToday: incidents.filter((incident) => incident.status === 'Resolved').length,
  };
}

function formatTime(value) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(value));
}

export default function App() {
  const [incidents, setIncidents] = useState(mockIncidents);
  const [activeStatus, setActiveStatus] = useState('All');

  const metrics = useMemo(() => calculateMetrics(incidents), [incidents]);

  const visibleIncidents = useMemo(() => {
    const filtered =
      activeStatus === 'All'
        ? incidents
        : incidents.filter((incident) => incident.status === activeStatus);

    return [...filtered].sort((a, b) => priorityRank[b.priority] - priorityRank[a.priority]);
  }, [activeStatus, incidents]);

  function escalateIncident(id) {
    setIncidents((currentIncidents) =>
      currentIncidents.map((incident) => {
        if (incident.id !== id) {
          return incident;
        }

        return {
          ...incident,
          priority: 'Critical',
          status: incident.status === 'Resolved' ? 'Open' : incident.status,
          description: `${incident.description} Escalation requested by the support lead.`,
        };
      })
    );
  }

  function moveToNextStatus(id) {
    const nextStatus = {
      Open: 'In Progress',
      'In Progress': 'Resolved',
      Resolved: 'Open',
    };

    setIncidents((currentIncidents) =>
      currentIncidents.map((incident) =>
        incident.id === id
          ? {
              ...incident,
              status: nextStatus[incident.status],
            }
          : incident
      )
    );
  }

  return (
    <main className="app-shell">
      <section className="workspace-header">
        <div>
          <p className="eyebrow">Customer operations</p>
          <h1>Incident response dashboard</h1>
          <p className="header-copy">
            This React prototype is intentionally visual first. It starts with mock data so Bob can
            make the experience real with a C# ASP.NET Core backend.
          </p>
        </div>
        <div className="api-status">
          <span className="pulse" />
          Mock data mode
        </div>
      </section>

      <section className="metrics-grid" aria-label="Incident metrics">
        <article className="metric-card">
          <span>Open work</span>
          <strong>{metrics.open}</strong>
          <p>Incidents requiring action</p>
        </article>
        <article className="metric-card warning">
          <span>Critical</span>
          <strong>{metrics.critical}</strong>
          <p>Escalated customer issues</p>
        </article>
        <article className="metric-card success">
          <span>Resolved</span>
          <strong>{metrics.resolvedToday}</strong>
          <p>Closed in this demo data</p>
        </article>
      </section>

      <section className="toolbar" aria-label="Incident filters">
        <div className="filter-group">
          {statusFilters.map((status) => (
            <button
              key={status}
              className={activeStatus === status ? 'filter-button active' : 'filter-button'}
              type="button"
              onClick={() => setActiveStatus(status)}
            >
              {status}
            </button>
          ))}
        </div>
        <p>{visibleIncidents.length} incidents shown</p>
      </section>

      <section className="incident-grid" aria-label="Incident list">
        {visibleIncidents.map((incident) => (
          <article className="incident-card" key={incident.id}>
            <div className="card-topline">
              <span className={`priority-badge ${incident.priority.toLowerCase()}`}>
                {incident.priority}
              </span>
              <span className={`status-badge ${incident.status.toLowerCase().replace(' ', '-')}`}>
                {incident.status}
              </span>
            </div>

            <h2>{incident.title}</h2>
            <p className="description">{incident.description}</p>

            <dl className="incident-details">
              <div>
                <dt>Customer</dt>
                <dd>{incident.customer}</dd>
              </div>
              <div>
                <dt>Assignee</dt>
                <dd>{incident.assignee}</dd>
              </div>
              <div>
                <dt>Created</dt>
                <dd>{formatTime(incident.createdAt)}</dd>
              </div>
            </dl>

            <div className="card-actions">
              <button type="button" onClick={() => moveToNextStatus(incident.id)}>
                Move status
              </button>
              <button
                className="secondary-action"
                type="button"
                onClick={() => escalateIncident(incident.id)}
              >
                Escalate
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
