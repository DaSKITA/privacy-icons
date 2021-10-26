# Privacy Icons

## Dateien
- index.html enthält Aubau der Seite und der Komponenten.
- style.css enthält style-Anpassungen.
- main.js 
    - lädt die relevanten Infos aus den tilt-Dokumenten und zeigt die entsprechenden Komponenten an.
    - je nach Zwecken und Datentypen werden verschiedene Komponenten angepasst und angezeigt.
    - wenn kein Zweck gegeben ist, gehen wir davon aus, dass nur Session Cookies genutzt werden und es wird Entrypoint 1 angezeigt.
- Order Img/ enthält die Hintergründe.
- Ordner Icons/ enthält die svg-Icons.
- Ordner tilts/ enthält die tilt-Dokumente

## Nutzung
- force-graph funktioniert nicht lokal-> webserver starten z.B. mit http-server
- Bei Klick auf die Buttons (BVG, BMJV und ein Beispiel für keinen Zweck (nur Session Cookies)) wird der passende Entrypoint angezeigt. 
  - Die purpose-Felder in den tilt-Dokumenten habe ich so angepasst, dass ich den Zweck leicht rauslesen kann.
- Für das Anzeigen des Privacy Dashboards auf die zwei Striche (bei Entrypoint 2) oder auf den Entrypoint selbst (bei Entrypoint 1) klicken.
- Beim Privacy Dashboard werden auf der linken Seite nur die Zwecke angezeigt, die beim jeweiligen Dienst gegeben sind.
- Informationen für weiteres tilt anzeigen ist möglich, wenn man auch 'Enter custom tilt' clickt und tilt eingibt

## Todo
- Lupen-Ikon neben der Search-Bar wird nicht angezeigt (verstehe nicht warum).
- Slide 24-29 low prio (maximal zum Prokrastinieren)
- Einbinden möglich machen

check: 
- 1 weiterer Reiter mit Kurzzusammenfassung aus TILT. z.B. so ähnlich wie hier laden: https://github.com/Transparency-Information-Language/chrome-tilt/blob/master/popup.js
- Menüleiste statt Buttons
- Dummy Hintergrund Website
- "add textbox, where you can insert new tilt" and the respective privacy icons banner gets rendered
- Entrypoint 2 verschwindet, wenn user auf website klickt oder scrollt -> entrypoint 1 wird stattdessen angezeigt
- add "nudges" from slide 18 (mouse over, hover effekt)
- Hover effect linke checkboxen -> toggle farbe ändern
- when hovering menu entries -> do not get smaller
- ausgegraute Checkbox hat keinen weißen Kreis
- gelbes x wird blau, lieber gelben border
- gelbes x nur anzeigen, wenn über box gehovert wird
- Close-Window müsste unten sein, auch wenn keine Checkboxen auf der linken Seite angezigt werden
- bzw. zu weit oben, wenn Checkboxen auf der liknen sSeite da sind

```
1. Demonstrator:

Menüleiste: BVG | BMJV |  XYZonline.com Website (z.B. DaSKITA) (session cookie) | Custom

==========
Dummy-Website (Einbinden klappt nicht)
+
Privacy-Icons-Overlay



============


2. "PrivIcons library"
also mit 2-3 Zeilen in eigene Website einbindbar, nur TILT-Link anzupassen 

<script src="https://"></script>
<link ...
```

