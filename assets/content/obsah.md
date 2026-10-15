# Obsah stažený z vodesil.cz (Wix) — podklad pro migraci

Zdroj: https://www.vodesil.cz/ (stav k 2026-10-15)

## Firma

- Název: Vodešil & Tom Tax and Finance Solutions
- Obor: daňové poradenství + dotační/finanční poradenství v oblasti sportu
- Kontakt: info@vodesil.cz, +420 776 19 43 42
- Adresa: Drahobejlova 2215/6, 190 00 Praha 9
- Majitel: Ing. Tomáš Navrátil, IČ 70554901
- Daňový poradce zapsaný v Komoře daňových poradců od 2009

## Domů

**Vítejte u Vodešil & Tom**
Tax and finance solutions

Jsme zde, abychom pomáhali klientům optimalizovat daňové povinnosti, efektivně
získávat státní dotace v oblasti sportu a nastavovat dlouhodobě udržitelné
financování pohybových aktivit.

CTA: Kontaktujte nás

Obrázky na stránce: `danove-formulare.jpg`, `poradce-s-dokumenty.jpeg`, `trofej.jpeg`, `hory.jpeg`

## O nás

### Tomáš Navrátil — centrální mozek

Daňový poradce zapsaný v Komoře daňových poradců od roku 2009. Téměř 5 let ve
Velké čtyřce, dalších celkem 7 let manažer daňového oddělení ve dvou
daňově-poradenských kancelářích. Prezident Českého minigolfového svazu a
provozovatel sportoviště od roku 2010. Spoluzakladatel Nadačního fondu Aktivní
Česko. Odborník na daně (zejména právnických osob) a financování sportu v ČR.

Kontakt: +420 776 19 43 42, info@vodesil.cz

Foto: `tomas-navratil.jpg`

### pan Vodešil — muž v pozadí

Muž s hlubokým porozuměním pro svět financí a sportu, vždy připravený poradit
ostatním, jak efektivně investovat do svých snů a projektů. Jeho znalosti o
daňových otázkách a sportovním financování jsou neocenitelné, a proto je
vyhledáván jako mentor a kouč.

Foto: `silueta-muze.jpg` *(pozn.: siluetový portrét — možná záměr, ověřit s klientem)*

## Služby

### Daňové poradenství a financování sportu

Společnost Vodešil & Tom Tax and Finance Solutions se specializuje na
poskytování daňového poradenství a oblast financování sportovního odvětví.
S patnáctiletou zkušeností v oboru se zaměřujeme na poskytování těchto služeb
společnostem a jednotlivcům v České republice.

**1. Daňové poradenství — Odborné poradenství v oblasti daní**
Naše odborné poradenství v oblasti daní je zaměřeno na efektivní a legální
způsoby optimalizace daní pro naše klienty, zastupování daňového subjektu před
úřady nejen v případě sporů, vyhodnocování daňových rizik.
Cena: 2 500 Kč/hod

**2. Dotace a sport — Dotační poradenství v oblasti financování sportu a pohybových aktivit**
Pomáháme sportovním organizacím a individuálním sportovcům při žádostech o
státní dotace a sponzorské příspěvky. Díky unikátním zkušenostem pomáháme
těmto subjektům či advokátním kancelářím také s případnými soudními spory s
poskytovateli dotací. Větším sportovním organizacím pak pomáháme s daňově
optimálním nastavením svých aktivit.
Cena: vypracování stanovisek/studií/poradenství 2 500 Kč/hod, komplexnější
zadání oceňováno individuálně dle dohody.

**3. Financování sportu a pohybových aktivit — Speciální odborné poradenství v oblasti financování sportu**
Naše specializované poradenské služby se zaměřují na analýzu pro efektivní
využití veřejných prostředků. Analyzujeme zdravotní benefity pohybových
aktivit, multiplikátorový efekt investic a spravedlivé rozdělení dotací ve
sportovním prostředí. Na základě datových analýz navrhujeme strategické kroky
v daňové či legislativní oblasti, které podporují rozvoj pohybových aktivit a
přispívají k prosazení klíčových zájmů v této oblasti.

**Naše odvětví**
- Daňová řešení pro společnosti, neziskové organizace i jednotlivce
- Dotační poradenství v oblasti sportu
- Specializované poradenství v oblasti využití veřejných zdrojů ve sportu a pohybových aktivitách

Obrázky na stránce: `zena-v-kancelari.jpeg`, `financni-report.jpeg`, `kalkulacka-stul.jpeg`

## Kontakt

**Jak nás kontaktovat**
Napište nám email nebo zavolejte ohledně více informací o našich daňových
službách a finančních řešeních.

Formulář: Vaše jméno / Váš email / Telefon / Předmět / Text zprávy / Odeslat

## Patička (na všech stránkách)

Vodešil & Tom Tax and finance solutions
+420 776 19 43 42
info@vodesil.cz
Drahobejlova 2215/6, 190 00 Praha 9
Ing. Tomáš Navrátil, IČ 70554901

Přihlaste se k odběru novinek — Zadejte váš email — Odebírat

## Vizuální analýza současného webu (2026-10-15)

Screenshoty pořízené headless Chromem (desktop 1440px, mobil 390px).

**Potvrzené reálné problémy:**

1. **Mobil je rozbitý — horizontální přetečení.** Nadpisy ("Vítejte u Vodešil
   & Tom", "Tax and finance solutions"), patička i fotka hory přetékají mimo
   viewport na 390px šířce, text se nezalamuje a je uťatý. Týká se zřejmě
   celého webu (stejná šablona/CSS napříč stránkami), ne jen homepage.
2. **Desktopové menu je schované za hamburgerem i na 1440px.** V headeru je
   vidět jen "Kontaktujte nás", položky Domů/Služby/O nás/Kontakt jsou skryté
   za ikonou ≡ — pro web se 4 stránkami zbytečná překážka v navigaci.
3. **Obsah je vázaný na scroll-reveal animace bez statického fallbacku.**
   Texty existují v HTML (viz výše), ale vizuálně jsou do scrollu
   neviditelné/téměř neviditelné (velmi nízký kontrast) — na stránce Služby a
   Kontakt se v headless renderu nezobrazily vůbec, na Homepage jen bledě
   prošedlé. Reálné riziko: `prefers-reduced-motion` uživatelé, pomalejší JS,
   first impression "prázdné stránky" při načtení.
4. **Patička** má stejný problém — text na tmavě modrém pozadí byl ve více
   renderech neviditelný/vybledlý.

**Další postřehy:**

- Fotky jsou čistě stock/AI (viz výš) a stylově nesourodé — reálná fotka ruky
  s kalkulačkou vedle zjevně AI generované trofeje na gradientu.
- "pan Vodešil" má jen siluetu bez obličeje vedle Tomášova ostrého
  profesionálního portrétu — působí jako neopravený placeholder, ne záměr.
- Homepage hero je volná koláž 4 necentrovaných fotek bez mřížky — působí
  jako nedotažený výchozí Wix layout.
- Na každé stránce běží widget živého chatu ("Let's Chat!") — třetí strana,
  další JS navíc.
- Stránka O nás byla jediná, co se vykreslila kompletně čistě a s dobrým
  kontrastem — dobrý vzor layoutu (foto + text ve dvou sloupcích) pro nový web.

**Doporučení pro nový web (priorita shora):**

1. Responzivita mobilu od nuly — to je teď nejhorší reálná chyba.
2. Plná navigace v headeru na desktopu, burger jen na mobilu.
3. Žádný obsah navázaný jen na JS scroll-reveal — pokud animace, tak jemná a
   s fallbackem na plně viditelný stav (a respektovat reduced-motion).
4. Promyslet fotky — buď reálné z provozu firmy (zeptat se klienta), nebo užší
   a stylově sjednocená sada stocků místo náhodné koláže.
5. Rozhodnout s klientem, co s "panem Vodešilem" (foto, nebo ho nechat čistě
   textově bez portrétu).
6. Zvážit zrušení chat widgetu — sedí na "zero-deps" i na rozpočet klienta.

## Poznámky k obsahu — na doladění s klientem

- "pan Vodešil" má jen siluetový portrét bez tváře — zjistit, jestli je to
  záměr nebo chybí foto.
- Fotky jsou generické stockové/AI vizuály (ruce s kalkulačkou, trofej, hory,
  žena v kanceláři) — žádná nevypadá jako skutečná fotka z provozu firmy.
  Při redesignu zvážit nahrazení za autentické fotky, pokud je klient má.
- Název firmy míchá češtinu a angličtinu ("Tax and finance solutions") —
  ověřit, jestli zůstává takhle i v novém webu.
