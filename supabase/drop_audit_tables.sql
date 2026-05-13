-- ============================================================
-- OptiPro — Suppression du module Audit (2026-05-13)
-- ============================================================
-- À exécuter dans le SQL Editor de Supabase pour supprimer
-- les tables et données du module Audit, désormais retiré du back-office.
--
-- ATTENTION : suppression définitive des données d'audit.
-- ============================================================

DROP TABLE IF EXISTS audit_actions   CASCADE;
DROP TABLE IF EXISTS audit_frictions CASCADE;
DROP TABLE IF EXISTS audit_reponses  CASCADE;
DROP TABLE IF EXISTS audits          CASCADE;
