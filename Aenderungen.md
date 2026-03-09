# Projekt Änderungen

- **[09.03.2026] Fix für Smooth-Scroll & Navigation:** 
  - `height: 100%;` in `src/styles.scss` von `html` und `body` entfernt, weil dies das native window-Scrolling blockierte (wodurch Scroll-Behavior zerstört wurde und Angulars Scroll-Position-Wiederherstellung fehlschlug).
  - `min-height: 100vh;` für `body` in `src/styles.scss` hinzugefügt, um sicherzustellen, dass das Fenster als Scroll-Container dient.
  - Falsch platziertes `scroll-behavior: smooth;` von `.arrow-down` in `src/app/components/hero/hero.component.scss` entfernt, da dies ausschließlich auf `html` bzw. dem scrollbaren Container deklariert werden muss (was in `styles.scss` nun sichergestellt ist).
