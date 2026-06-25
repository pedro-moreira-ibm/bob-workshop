import React, { useMemo, useState } from 'react';
import { mockIncidents } from './mockIncidents.js';

const statusFilters = ['All', 'Open', 'In Progress', 'Resolved'];

const priorityRank = {
  Low: 1,
  Medium: 2,
  High: 3,
  Critical: 4,
};

function calculateMetrics(incidents) {
  const activeIncidents = incidents.filter((incident) => incident.status !== 'Resolved');

  return {
    active: activeIncidents.length,
    critical: activeIncidents.filter((incident) => incident.priority === 'Critical').length,
    slaRisk: activeIncidents.filter((incident) =>
      ['Critical', 'High'].includes(incident.priority)
    ).length,
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
  const statusCounts = useMemo(
    () =>
      statusFilters.reduce((counts, status) => {
        counts[status] =
          status === 'All'
            ? incidents.length
            : incidents.filter((incident) => incident.status === status).length;
        return counts;
      }, {}),
    [incidents]
  );
  const latestIncident = useMemo(
    () =>
      [...incidents].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )[0],
    [incidents]
  );

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

        if (incident.priority === 'Critical' && incident.status !== 'Resolved') {
          return incident;
        }

        return {
          ...incident,
          priority: 'Critical',
          status: incident.status === 'Resolved' ? 'Open' : incident.status,
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
      <header className="app-topbar">
        <div>
          <p className="eyebrow">Customer operations</p>
          <strong>Service incident command center</strong>
        </div>
        <nav aria-label="Workspace sections">
          <a href="#incident-queue">Queue</a>
          <a href="#metrics">Metrics</a>
          <a href="#coverage">Coverage</a>
        </nav>
        <div className="api-status">
          <span className="pulse" />
          Operations view
        </div>
      </header>

      <section className="workspace-header" id="metrics">
        <div>
          <h1>Incident queue</h1>
          <p className="header-copy">
            Prioritize customer-impacting service issues, track ownership, and move response work
            through triage without losing operational context.
          </p>
          <div className="header-meta" aria-label="Dashboard context">
            <span>Global support queue</span>
            <span>Latest intake {latestIncident ? formatTime(latestIncident.createdAt) : 'n/a'}</span>
            <span>{new Set(incidents.map((incident) => incident.service)).size} services monitored</span>
          </div>
        </div>
      </section>

      <section className="metrics-grid" aria-label="Incident metrics">
        <article className="metric-card">
          <span>Active incidents</span>
          <strong>{metrics.active}</strong>
          <p>Owned by support and engineering</p>
        </article>
        <article className="metric-card warning">
          <span>Critical priority</span>
          <strong>{metrics.critical}</strong>
          <p>Executive-visible customer impact</p>
        </article>
        <article className="metric-card attention">
          <span>SLA risk</span>
          <strong>{metrics.slaRisk}</strong>
          <p>High-priority work under watch</p>
        </article>
        <article className="metric-card success">
          <span>Resolved today</span>
          <strong>{metrics.resolvedToday}</strong>
          <p>Validated and ready for follow-up</p>
        </article>
      </section>

      <section className="workbench" id="incident-queue">
        <aside className="queue-summary" id="coverage" aria-label="Queue coverage">
          <div>
            <p className="eyebrow">Coverage</p>
            <h2>Response overview</h2>
          </div>
          <dl>
            <div>
              <dt>Primary region</dt>
              <dd>EMEA</dd>
            </div>
            <div>
              <dt>Intake source</dt>
              <dd>Support, monitoring, account teams</dd>
            </div>
            <div>
              <dt>Review cadence</dt>
              <dd>Every 15 minutes</dd>
            </div>
          </dl>
          <div className="status-stack" aria-label="Status breakdown">
            {statusFilters.slice(1).map((status) => (
              <button
                key={status}
                className={activeStatus === status ? 'summary-button active' : 'summary-button'}
                type="button"
                onClick={() => setActiveStatus(status)}
              >
                <span>{status}</span>
                <strong>{statusCounts[status]}</strong>
              </button>
            ))}
          </div>
        </aside>

        <section className="incident-panel" aria-label="Incident list">
          <div className="panel-header">
            <div>
              <p className="eyebrow">Live queue</p>
              <h2>Customer-impacting incidents</h2>
            </div>
            <p>
              {visibleIncidents.length} of {incidents.length} shown
            </p>
          </div>

          <div className="toolbar" aria-label="Incident filters">
            <div className="filter-group">
              {statusFilters.map((status) => (
                <button
                  key={status}
                  className={activeStatus === status ? 'filter-button active' : 'filter-button'}
                  type="button"
                  onClick={() => setActiveStatus(status)}
                >
                  {status}
                  <span>{statusCounts[status]}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="incident-list">
            {visibleIncidents.map((incident) => {
              const isEscalated = incident.priority === 'Critical' && incident.status !== 'Resolved';

              return (
                <article
                  className={`incident-row ${incident.priority.toLowerCase()}`}
                  key={incident.id}
                >
                  <div className="incident-main">
                    <div className="card-topline">
                      <span className={`priority-badge ${incident.priority.toLowerCase()}`}>
                        {incident.priority}
                      </span>
                      <span
                        className={`status-badge ${incident.status
                          .toLowerCase()
                          .replace(' ', '-')}`}
                      >
                        {incident.status}
                      </span>
                    </div>
                    <h3>{incident.title}</h3>
                    <p>{incident.description}</p>
                    <div className="incident-meta">
                      <span>{incident.customer}</span>
                      <span>{incident.service}</span>
                      <span>Opened {formatTime(incident.createdAt)}</span>
                    </div>
                  </div>

                  <dl className="incident-details">
                    <div>
                      <dt>Owner</dt>
                      <dd>{incident.assignee}</dd>
                    </div>
                    <div>
                      <dt>SLA target</dt>
                      <dd>{incident.slaTarget}</dd>
                    </div>
                  </dl>

                  <div className="card-actions">
                    <button type="button" onClick={() => moveToNextStatus(incident.id)}>
                      Update status
                    </button>
                    <button
                      className="secondary-action"
                      type="button"
                      disabled={isEscalated}
                      onClick={() => escalateIncident(incident.id)}
                    >
                      {isEscalated ? 'Escalated' : 'Escalate'}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </section>
    </main>
  );
}
