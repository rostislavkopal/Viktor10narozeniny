## Co postavím

Jednostránkovou pozvánku **Vikoušovo 10. narozeniny** ve stylu vybraného návrhu (Cinematic action poster) — full-bleed hero s comic-book GIFem v pozadí, přes který je položený titulek, countdown a tahák "Přespávačka u mamky ve Studiu".

## Sekce

1. **Hero (full-screen)**
   - Comic-book style obrázek/GIF skákajících kluků, kteří se mění ve spáče, jako fullscreen pozadí
   - Tmavý gradient scrim pro čitelnost textu
   - Eyebrow „Už se to blíží", titulek **VIKOUŠOVO 10. NAROZENINY** (číslo 10 v brand barvě)
   - Podtitulek **Přespávačka u mamky ve Studiu**
   - Živý countdown do **úterý 23. 6. 2026 00:00** (dny / hodiny / minuty / sekundy)

2. **Info + Mapa**
   - Datum: úterý 23. 6. 2026, přesný čas oznámím
   - Místo: Jump Park Jarov, Koněvova, Praha 3
   - Vpravo embed mapy se zvýrazněnou polohou Jump Park Jarov
   - Tlačítko „Otevřít v mapách"

3. **Účastníci**
   - Jména (Vikouš, Max Stehno, Hugo, Téďa, Tomáš, Dan, Max, Míša, Vláda, Séba, Mikuláš, Ondra) v různých velikostech, rotacích a hmotnostech písma
   - Jemná drift/float animace, takže se sekce „prolíná a zaplňuje"

4. **Patička** — drobný podpis

## Technické detaily

- **Stack:** TanStack Start, jediná route `src/routes/index.tsx`, žádný backend
- **Tokeny v `src/styles.css`:** canvas `#09090b`, surface `#18181b`, brand `#38bdf8`, Inter font; tmavé téma jako default
- **Hero obrázek:** vygeneruju comic-book obrázek skákající/spící party přes `imagegen` (statický, dostatečně se chová jako GIF v dané estetice), uložím do `src/assets/` přes lovable-assets
- **Mapa:** lehký embed přes Mapy.cz / OSM `<iframe>` zacílený na Jump Park Jarov — žádné API klíče, žádný connector
- **Countdown:** React `useEffect` + `setInterval`, cíl `2026-06-23T00:00:00+02:00`
- **Animace účastníků:** CSS keyframes (jemné float, různá zpoždění) — přesně podle prototypu
- **SEO:** unikátní title/description/og v `head()` route

## Co NEbudu dělat

- Žádný backend / databázi / RSVP formulář (lze přidat později)
- Žádná Google Maps integrace (zbytečné pro statický pin)
- Skutečný animovaný GIF generovat nebudu — použiju silný comic-book still obrázek; pokud budete chtít reálný GIF, doporučím ho dodat jako upload