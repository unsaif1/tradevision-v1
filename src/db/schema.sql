-- ClaimsHub database schema (Cloudflare D1 / SQLite)
-- Run: npx wrangler d1 execute claims-hub --local --file=src/db/schema.sql
-- Production: npx wrangler d1 execute claims-hub --file=src/db/schema.sql

CREATE TABLE IF NOT EXISTS carriers (
  id         TEXT PRIMARY KEY,
  name       TEXT NOT NULL,
  phone      TEXT,
  email      TEXT,
  address    TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS claims (
  id                TEXT PRIMARY KEY,
  claim_number      TEXT UNIQUE NOT NULL,
  status            TEXT NOT NULL DEFAULT 'new',
  claimant_name     TEXT NOT NULL,
  claimant_phone    TEXT,
  claimant_email    TEXT,
  loss_date         TEXT,
  loss_type         TEXT,
  loss_description  TEXT,
  property_address  TEXT,
  carrier_id        TEXT REFERENCES carriers(id),
  policy_number     TEXT,
  adjuster_name     TEXT,
  adjuster_phone    TEXT,
  adjuster_email    TEXT,
  created_at        TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at        TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS policies (
  id              TEXT PRIMARY KEY,
  claim_id        TEXT NOT NULL REFERENCES claims(id) ON DELETE CASCADE,
  policy_number   TEXT NOT NULL,
  coverage_type   TEXT,
  dwelling_limit  REAL,
  contents_limit  REAL,
  aop_deductible  REAL,
  wind_deductible REAL,
  effective_date  TEXT,
  expiration_date TEXT,
  created_at      TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS estimates (
  id         TEXT PRIMARY KEY,
  claim_id   TEXT NOT NULL REFERENCES claims(id) ON DELETE CASCADE,
  vendor     TEXT,
  type       TEXT,
  amount     REAL,
  status     TEXT NOT NULL DEFAULT 'pending',
  notes      TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS settlements (
  id          TEXT PRIMARY KEY,
  claim_id    TEXT NOT NULL REFERENCES claims(id) ON DELETE CASCADE,
  amount      REAL NOT NULL,
  type        TEXT,
  status      TEXT NOT NULL DEFAULT 'pending',
  notes       TEXT,
  offered_at  TEXT,
  accepted_at TEXT,
  created_at  TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS agent_activity (
  id         TEXT PRIMARY KEY,
  claim_id   TEXT NOT NULL REFERENCES claims(id) ON DELETE CASCADE,
  agent_type TEXT NOT NULL,
  status     TEXT NOT NULL,
  result     TEXT,
  error      TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS notes (
  id         TEXT PRIMARY KEY,
  claim_id   TEXT NOT NULL REFERENCES claims(id) ON DELETE CASCADE,
  author     TEXT NOT NULL DEFAULT 'System',
  content    TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Seed carriers
INSERT OR IGNORE INTO carriers (id, name, phone, email) VALUES
  ('carrier-1', 'State Farm',       '1-800-782-8332', 'claims@statefarm.com'),
  ('carrier-2', 'Allstate',         '1-800-255-7828', 'claims@allstate.com'),
  ('carrier-3', 'USAA',             '1-800-531-8722', 'claims@usaa.com'),
  ('carrier-4', 'Farmers Insurance','1-800-435-7764', 'claims@farmers.com'),
  ('carrier-5', 'Liberty Mutual',   '1-800-290-7933', 'claims@libertymutual.com');
