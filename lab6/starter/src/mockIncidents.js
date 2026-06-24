export const mockIncidents = [
  {
    id: 101,
    title: 'Checkout failures for premium customers',
    customer: 'Northwind Retail',
    priority: 'Critical',
    status: 'Open',
    assignee: 'Marta Silva',
    createdAt: '2026-06-24T08:45:00Z',
    description:
      'Payment authorization succeeds, but the order confirmation step intermittently fails for high-value carts.',
  },
  {
    id: 102,
    title: 'Warehouse sync delayed after nightly batch',
    customer: 'Contoso Logistics',
    priority: 'High',
    status: 'In Progress',
    assignee: 'Diogo Ramos',
    createdAt: '2026-06-24T09:20:00Z',
    description:
      'Inventory counts are behind by more than 40 minutes, creating fulfillment risk for same-day orders.',
  },
  {
    id: 103,
    title: 'Support portal password reset email missing',
    customer: 'Fabrikam Health',
    priority: 'Medium',
    status: 'Open',
    assignee: 'Ana Costa',
    createdAt: '2026-06-23T16:10:00Z',
    description:
      'Users can request password resets, but some transactional emails are not being delivered.',
  },
  {
    id: 104,
    title: 'Resolved billing export mismatch',
    customer: 'Adventure Works',
    priority: 'Low',
    status: 'Resolved',
    assignee: 'Joao Pereira',
    createdAt: '2026-06-23T11:35:00Z',
    description:
      'Monthly billing export included duplicate tax rows. Finance confirmed the corrected export.',
  },
  {
    id: 105,
    title: 'Mobile app timeout on order history',
    customer: 'Tailspin Traders',
    priority: 'High',
    status: 'In Progress',
    assignee: 'Beatriz Lima',
    createdAt: '2026-06-24T10:05:00Z',
    description:
      'Order history requests time out for accounts with more than 2,000 orders in the last year.',
  },
  {
    id: 106,
    title: 'New onboarding customer awaiting review',
    customer: 'Blue Yonder Labs',
    priority: 'Medium',
    status: 'Open',
    assignee: 'Rui Martins',
    createdAt: '2026-06-24T10:40:00Z',
    description:
      'Implementation team requested an integration review before the first production data import.',
  },
];
