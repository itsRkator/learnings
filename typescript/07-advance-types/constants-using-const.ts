let roles = ['admin', 'guest', 'editor'] as const;

// Error: Property 'push' does not exist on type 'readonly ["admin", "guest", "editor"]'.
// roles.push('superadmin');
// Error: Index signature in type 'readonly ["admin", "guest", "editor"]' only permits reading.
// roles[0] = 'superadmin';
const firstRole = roles[0]; // 'admin'
