-- Add alert_day to subscription_alerts to track which reminder day (in days before expiry)
ALTER TABLE IF EXISTS subscription_alerts
  ADD COLUMN IF NOT EXISTS alert_day integer;

-- Index to look up alerts quickly by subscription and alert type
CREATE INDEX IF NOT EXISTS idx_subscription_alerts_subscription_id_alert_type
  ON subscription_alerts (subscription_id, alert_type);

-- Index to look up alerts by subscription and day
CREATE INDEX IF NOT EXISTS idx_subscription_alerts_subscription_id_alert_day
  ON subscription_alerts (subscription_id, alert_day);
