# CLAUDE.md – Baalbaki Web Studio Portfolio

## Projektübersicht
Dies ist die offizielle Portfolio- und Marketing-Website von **Baalbaki Web Studio**.
Ziel: Schweizer KMU (Handwerker, Praxen, Restaurants, Dienstleister) überzeugen, eine Website in Auftrag zu geben.
Der Besucher soll innerhalb von 30 Sekunden verstehen: Was wird angeboten, was kostet es, wie sieht das Ergebnis aus – und dann eine Anfrage senden.

## Inhaber
- **Studio-Name:** Baalbaki Web Studio
- **Standort:** Schweiz
- **Spezialisierung:** Moderne Websites für Schweizer KMU
- **E-Mail:** info@baalbaki-web-studio.ch
- **Logo:** Wird später eingefügt – vorerst Text-Wordmark "Baalbaki Web Studio" verwenden

## Zielgruppe der Website
Schweizer KMU-Inhaber: Handwerker, Praxisinhaber, Gastronomen, Dienstleister.
Diese Personen sind oft nicht technikaffin. Die Website muss sofort Vertrauen aufbauen und klar kommunizieren.

## Design-Vorgaben
- **Hintergrund:** Near-black `#0D0D0D`
- **Surface/Cards:** Dark grey `#161616`
- **Primärfarbe:** Electric Blue `#2563EB`
- **Akzentfarbe:** Gold `#C9A84C` (sparsam einsetzen – nur für Preise und Highlights)
- **Text:** Weiss `#FFFFFF` und Muted Grey `#A0A0A0`
- **Borders:** Subtle `#2A2A2A`
- **Stil:** Dunkel, selbstbewusst, premium – wie eine top Schweizer Agentur
- **Sprache:** Deutsch (Schweizer Kontext, formelles "Sie" für KMU-Ansprache)

## Typografie
- **Font:** Inter (Google Fonts) – einzige Schrift für die gesamte Website
- **Headlines:** Bold, gross, eng – selbstbewusst
- **Body:** Regular, gut lesbar, ausreichend Zeilenabstand

## Technische Vorgaben
- **Eine einzige HTML-Datei** mit eingebettetem CSS und JavaScript
- Keine externen Frameworks (kein React, kein Vue, kein Bootstrap)
- Google Fonts: nur Inter
- Vollständig **responsive** (Mobile First)
- Smooth Scroll, subtile Fade-in Animationen beim Scrollen
- Kontaktformular zeigt Erfolgsmeldung beim Absenden – kein Backend nötig
- Kein Lorem Ipsum – immer echter deutscher Inhalt
- `.gitignore` mit `.vscode/` und `.DS_Store` erstellen

## Seitenstruktur

### 1. Navbar
- Sticky, dunkel, blur backdrop beim Scrollen
- Links: Wordmark "Baalbaki Web Studio"
- Mitte: Navigation (Projekte, Angebot, Ablauf, FAQ, Kontakt)
- Rechts: "Projekt anfragen" Button in Electric Blue

### 2. Hero Section
- Volle Viewport-Höhe
- Links: Label "Webdesign für Schweizer KMU", grosse Headline, Subtext, zwei Buttons
- Rechts: Drei gestapelte Browser-Mockup-Fenster in den Farben der drei Demo-Projekte
- Unter Hero: Stats-Bar mit 4 Zahlen: "3 Demo-Projekte", "ab CHF 2'900", "2–4 Wochen Lieferzeit", "100% Schweizer KMU"

### 3. Referenz-Projekte
Drei Projekte, jeweils volle Breite, abwechselnd links/rechts Layout:

**Projekt 1 – Handwerk**
- Farbe: Navy `#1B2A4A`
- Name: Meister Bau GmbH
- Tag: Handwerk & Gewerbe
- URL: https://beta-handwerker.vercel.app/

**Projekt 2 – Praxis**
- Farbe: Sage Green `#7C9A7E`
- Name: Praxis Gleichgewicht
- Tag: Gesundheit & Praxis
- URL: https://beta-praxis.vercel.app/

**Projekt 3 – Restaurant**
- Farbe: Wine Red `#8B1A1A`
- Name: Ristorante Bellavista
- Tag: Gastronomie
- URL: https://beta-restaurant.vercel.app/

### 4. Leistungen
- 6 Feature-Tiles in 3x2 Grid
- Individuelles Design, Mobil optimiert, Schnelle Ladezeiten, SEO-Grundlagen, Einfache Übergabe, Support nach Launch

### 5. Angebot
- Dunkle Section
- Links: Headline, Preis "ab CHF 2'900" in Gold, 5 Bullet Points, CTA Button
- Rechts: Card mit "Was enthalten ist" (6 Punkte), "EMPFOHLEN" Badge in Gold

### 6. Ablauf
- 3 Schritte mit grossen Nummern (01, 02, 03)
- Verbunden durch horizontale Linie
- Anfrage & Gespräch → Umsetzung & Feedback → Launch & Übergabe

### 7. FAQ
- Accordion mit 5 Fragen
- Smooth open/close, Plus-Icon dreht sich zu X

### 8. Kontakt
- Links: Headline "Projekt anfragen", Subtext, E-Mail, Standort
- Rechts: Formular (Name, E-Mail, Unternehmen, Nachricht, Senden-Button)

### 9. Footer
- Einzeilig, schlank
- Links: Logo, Mitte: Navigation, Rechts: Copyright 2026

## Qualitätsanspruch
- Sieht aus wie eine CHF 10'000 Agentur-Website
- Jeder Abschnitt hat klaren visuellen Kontrast zum vorherigen
- Hover-Effekte auf allen interaktiven Elementen
- Mobile-Ansicht muss perfekt sein
- Ladezeit muss schnell sein

## Was Claude Code NICHT tun soll
- Kein heller/weisser Hintergrund – die Website ist durchgehend dunkel
- Keine generischen Templates oder Standard-Layouts
- Kein Lorem Ipsum
- Keine langsam ladenden externen Libraries
- Keine Bilder von Unsplash nötig – diese Website arbeitet mit CSS, Farben und Typografie
