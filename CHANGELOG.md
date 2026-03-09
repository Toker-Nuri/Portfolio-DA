# Changelog

## 2026-03-09

- **Bugfix:** Ungültiges JSON in `en.json` repariert — die QUOTE-Felder (Zeilen 48, 53) enthielten nicht-escapte ASCII-Anführungszeichen, die den JSON-Parser zum Absturz brachten. Durch typografische Unicode-Anführungszeichen ersetzt.
- **Bugfix:** Relativen Pfad `./assets/i18n/` im `TranslateHttpLoader` (`app.config.ts`) zu absolutem Pfad `/assets/i18n/` geändert (präventive Absicherung für Sub-Routen).
- **Bugfix:** Header-Navigation komplett überarbeitet — `routerLink` mit `fragment` durch eigene `scrollToSection()`-Methode mit `scrollIntoView({ behavior: 'smooth' })` ersetzt. Funktioniert jetzt zuverlässig auf Desktop und Mobil, auch von Sub-Routen aus. Mobile-Menü schließt automatisch nach Linkklick.
- **Style:** `cursor: pointer` für Desktop- und Mobile-Nav-Links hinzugefügt.
