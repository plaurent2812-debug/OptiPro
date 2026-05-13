-- ============================================================
-- OptiPro — Ajout des colonnes de relance impayés (2026-05-14)
-- ============================================================
-- À exécuter dans le SQL Editor de Supabase.
--
-- Ces colonnes alimentent le cron /api/cron/relances-impayes :
-- - derniere_relance_at : timestamp de la dernière relance envoyée
-- - niveau_relance       : 0 (aucune), 1 (J+7 doux), 2 (J+15 ferme),
--                          3 (J+30 mise en demeure)
-- ============================================================

ALTER TABLE factures
  ADD COLUMN IF NOT EXISTS derniere_relance_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS niveau_relance INT DEFAULT 0
    CHECK (niveau_relance >= 0 AND niveau_relance <= 3);

-- Index pour accélérer le scan du cron sur les factures en retard
CREATE INDEX IF NOT EXISTS idx_factures_statut_echeance
  ON factures (statut, date_echeance)
  WHERE statut IN ('envoyee', 'en_retard');
