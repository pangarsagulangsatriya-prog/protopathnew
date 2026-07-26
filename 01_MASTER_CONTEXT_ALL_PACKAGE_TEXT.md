# PROTO PATH — MASTER CONTEXT: ALL PACKAGE TEXT

Dokumen ini menggabungkan seluruh prompt, spesifikasi, schema, audit, manifest, CSV, dan script teks dari paket sebelumnya.

File sumber besar dan aset biner dipisahkan:

- naskah lengkap: `02_CANONICAL_SCORE_COMPLETE_TEXT.md`
- data Mapillary penuh: folder `data_chunks/`
- deskripsi diagram: `04_DIAGRAM_ASSET_TEXT_DESCRIPTIONS.md`

---

# FILE: `proto_path_web_prompt_package/00_README_PROTO_PATH_WEB.md`

- Size: `4110` bytes
- SHA-256: `815ec0990ce8a4db6eacc3191373428d10fb3101645a2441cc3677eae4427dac`

```markdown
# PROTO PATH — Web Visualization Prompt Package

## Tujuan

Paket ini memandu coding agent untuk membangun web interaktif yang memperlihatkan kesinambungan:

**Mapillary raw data → Data Provocation → Situation → Body Impulse → Spatial Output → Architectural Diagram**

Web harus membantu sutradara, koreografer, penata ruang, pemain, peneliti, dan pengunjung pameran membaca bagaimana satu fitur jalan berubah menjadi tekanan ruang, aksi tubuh, dan residu performatif.

## Isi paket

1. `01_MASTER_BUILD_PROMPT_PROTO_PATH_WEB.md`  
   Prompt utama end-to-end. Tempel pertama ke coding agent.

2. `02_INFORMATION_ARCHITECTURE_UI_SPEC.md`  
   Struktur halaman, layout, komponen, interaksi, dan bahasa visual.

3. `03_DATA_CONTRACT_SCHEMA_AND_SAMPLE.md`  
   Kontrak data, tipe TypeScript, aturan lineage, serta dua contoh pasangan notasi.

4. `04_IMPLEMENTATION_PLAN_AND_TASKS.md`  
   Rencana pengerjaan, struktur repository, fase implementasi, dan urutan tugas.

5. `05_QA_ACCEPTANCE_TESTS.md`  
   Kriteria selesai, pengujian fidelity data, UI, aksesibilitas, dan fallback.

6. `06_CONTENT_INGESTION_GUIDE.md`  
   Cara memasukkan pasangan notasi baru, raw JSON baru, dan gambar diagram baru.

7. `07_PLATFORM_ADAPTERS.md`  
   Instruksi pemakaian di Google Antigravity, Google AI Studio Build Mode, atau Firebase Studio.

8. `PROTO_PATH_WEB_E2E_ALL_IN_ONE.md`  
   Versi gabungan untuk satu kali copy-paste.

## Berkas yang perlu diberikan kepada coding agent

Lampirkan:

- PDF naskah `Proto Path - WHERE ARE YOU DEPART FROM`
- dua raw JSON Mapillary:
  - `mapillary-points_*.json`
  - `mapillary-traffic_*.json`
- semua gambar diagram arsitektural yang sudah dibuat
- paket Markdown ini

Gunakan nama aset yang stabil:

```text
public/
  assets/
    diagrams/
      st-c1-3-1__rt-c1-3-1.png
      st-c1-3-2__rt-c1-3-2.png
    source/
      proto-path-score.pdf
    data/
      mapillary-points.json
      mapillary-traffic.json
      notation-pairs.json
```

## Urutan pemakaian

### Mode sekali jalan

1. Tempel `PROTO_PATH_WEB_E2E_ALL_IN_ONE.md`.
2. Lampirkan PDF, JSON, dan gambar.
3. Minta agent:
   - membangun MVP;
   - menjalankan aplikasi;
   - menguji dua pasangan contoh;
   - memperbaiki error;
   - memberi preview dan struktur file.

### Mode bertahap

1. Tempel `01_MASTER_BUILD_PROMPT_PROTO_PATH_WEB.md`.
2. Setelah blueprint disetujui, tempel `03_DATA_CONTRACT_SCHEMA_AND_SAMPLE.md`.
3. Tempel `02_INFORMATION_ARCHITECTURE_UI_SPEC.md`.
4. Minta implementasi mengikuti `04_IMPLEMENTATION_PLAN_AND_TASKS.md`.
5. Minta agent menjalankan seluruh pemeriksaan dalam `05_QA_ACCEPTANCE_TESTS.md`.

## Prinsip yang tidak boleh hilang

- Raw value harus tampil persis seperti sumber.
- Setiap transformasi punya garis lineage yang dapat ditelusuri.
- Gambar tidak berdiri sebagai galeri terpisah. Gambar harus terikat ke pasangan `Situation + Body Impulse`.
- Klik satu elemen harus menyorot seluruh rantai yang berhubungan.
- Web tetap dapat dipakai saat token Mapillary belum tersedia.
- Agent tidak boleh membuat koordinat, nilai, atau kode notasi yang tidak terdapat pada sumber.
- Konten yang belum tersedia harus tampil sebagai `MISSING`, `NOT PROVIDED`, atau `UNRESOLVED`.
- Bahasa visual mengikuti diagram arsitektural: putih, hitam, abu muda, satu aksen merah-oranye.

## Target MVP

MVP selesai saat pengguna dapat:

1. memilih Score 01;
2. memilih Checkpoint C1.3;
3. berpindah antara:
   - `ST.C1.3.1 + RT.C1.3.1`;
   - `ST.C1.3.2 + RT.C1.3.2`;
4. melihat raw Mapillary record;
5. melihat Data Provocation;
6. membaca Situation;
7. membaca Body Impulse;
8. membaca Spatial Output;
9. membuka diagram arsitektural;
10. menyorot kesinambungan seluruh rantai;
11. menjalankan sequence dari Freeze menuju Glitch;
12. mengimpor data lokal tanpa mengubah source record.

## Hasil yang diminta dari coding agent

- aplikasi berjalan;
- repository rapi;
- sample data tersedia;
- panduan menjalankan lokal tersedia;
- validasi JSON tersedia;
- test dasar tersedia;
- tidak ada secret dalam source code;
- error state dan empty state terbaca;
- tampilan desktop dan mobile berfungsi.
```

---

# FILE: `proto_path_web_prompt_package/01_MASTER_BUILD_PROMPT_PROTO_PATH_WEB.md`

- Size: `17389` bytes
- SHA-256: `a75b3233ee311f58c1fde19ea66920f9959850ffe129caa4be9971b44f9fb807`

```markdown
# MASTER BUILD PROMPT — PROTO PATH INTERACTIVE WEB

You are a senior product engineer, creative technologist, information architect, and data-visualization designer.

Build a production-quality interactive web application titled:

# PROTO PATH — DATA TO BODY / ARCHITECTURAL STAGE NOTATION

## 1. Product objective

Create a web application that makes one transformation chain visible and traceable:

```text
MAPILLARY RAW FEATURE
→ DATA PROVOCATION
→ SITUATION / SPATIAL NOTATION
→ BODY IMPULSE / BODY SCORE
→ SPATIAL OUTPUT / RESIDUAL
→ ARCHITECTURAL PERFORMANCE DIAGRAM
```

The application must allow a visitor to move continuously between raw urban data, the score notation, the body action, and the generated architectural diagram.

Do not build a generic image gallery.

Do not separate the map, text, and diagrams into unrelated pages.

Every visible item must remain attached to the same notation-pair identity and provenance chain.

## 2. Primary audiences

Design for:

- theatre directors;
- choreographers;
- scenographers;
- performers;
- researchers;
- curators;
- exhibition visitors who have not read the full score.

A new visitor should understand the active transformation within 30 seconds.

A researcher should be able to inspect raw values and lineage without losing the visual context.

## 3. Core conceptual model

Treat one `Situation + Body Impulse` pair as the smallest complete scene unit.

Each notation pair contains:

```text
source dataset
raw feature record
data provocation
situation
body impulse
spatial output
residual state
diagram asset
sequence frames
lineage edges
```

Examples included in the initial dataset:

```text
ST.C1.3.1 — Authority Interruption
RT.C1.3.1 — Freeze Response
```

```text
ST.C1.3.2 — Conflicting Vectors
RT.C1.3.2 — Glitch Response
```

These two pairs form a continuous sequence:

```text
FORWARD PULL
→ AUTHORITY INTERRUPTION
→ FREEZE
→ HELD VECTOR CONFLICT
→ WRIST AND SHOULDER TREMOR
→ GLITCH
```

## 4. Non-negotiable data rules

1. Preserve every raw Mapillary value exactly.
2. Never overwrite imported source records.
3. Store interpretation in separate derived fields.
4. Every derived statement must point back to one or more source IDs.
5. Never invent coordinates.
6. Use `null` when the source gives distance but no coordinate.
7. Display missing content visibly.
8. Every diagram asset must point to one notation-pair ID.
9. Every notation-pair page must expose its provenance.
10. A user must be able to switch between:
    - interpreted view;
    - raw view;
    - lineage view.

## 5. Technical direction

Build a client-first web application with clean separation between data, domain logic, and presentation.

Preferred stack:

- React
- TypeScript with strict mode
- Vite
- Tailwind CSS
- Zod for runtime schema validation
- Zustand or an equally small state store
- D3 only for lineage links, force relations, and custom SVG diagrams
- MapLibre GL for the spatial map
- Framer Motion for restrained transitions
- Vitest for unit tests
- Playwright for critical end-to-end tests

Use a local JSON repository for the first release.

Prepare a repository interface so local JSON can later be replaced by Firebase, Supabase, or another backend without rewriting UI components.

The application must run without a Mapillary access token.

Optional live Mapillary media may activate when this environment variable exists:

```text
VITE_MAPILLARY_ACCESS_TOKEN
```

Never hardcode a token.

When a token is absent:

- render local coordinates and map markers when coordinates exist;
- show the raw feature metadata;
- show a clear `LIVE MAPILLARY MEDIA UNAVAILABLE` state;
- keep every other feature working.

## 6. Required routes

Create these routes:

```text
/
```

Landing page and project orientation.

```text
/explore
```

Main synchronized explorer.

```text
/score/:scoreId
```

Score overview, bounds, nodes, phases, checkpoints, and pair list.

```text
/notation/:pairId
```

Deep-link view for one Situation + Body Impulse pair.

```text
/dataset
```

Dataset browser, filters, raw JSON inspection, and import.

```text
/method
```

Method framework, MFI, taxonomy, reading chain, and legend.

```text
/exhibition
```

Full-screen guided playback for installation or public presentation.

## 7. Main synchronized explorer

Build the `/explore` page as the primary experience.

### Desktop layout

Use a wide architectural board with four coordinated regions:

```text
TOP BAR
LEFT SOURCE PANEL | CENTER TRANSFORMATION SPINE | RIGHT STAGE + BODY PANEL
BOTTOM SEQUENCE TIMELINE
```

Suggested width distribution:

```text
left 26%
center 22%
right 52%
```

### Top bar

Include:

- project title;
- score selector;
- checkpoint selector;
- notation-pair selector;
- view mode:
  - Explore
  - Raw
  - Lineage
  - Exhibition
- compare toggle;
- play / pause;
- previous / next pair;
- fullscreen;
- language toggle prepared for EN / ID;
- data status indicator.

### Left source panel

Show:

1. dataset identity;
2. Mapillary map or local spatial view;
3. feature marker;
4. source type;
5. raw value;
6. coordinate or distance;
7. raw JSON drawer;
8. source-file name;
9. provenance status.

Required interaction:

- hovering a feature highlights its Data Provocation node;
- clicking opens raw JSON;
- switching to raw mode must not change the active pair;
- the current source marker stays visible while reading derived layers.

### Center transformation spine

Show the transformation as connected cards:

```text
01 RAW FEATURE
02 DATA PROVOCATION
03 SITUATION
04 BODY IMPULSE
05 SPATIAL OUTPUT
06 RESIDUAL
```

Each card includes:

- ID;
- category or impulse token;
- concise primary text;
- source references;
- status;
- expand action.

Use visible connector lines between cards.

Connector behavior:

- neutral: thin gray;
- active lineage: orange-red;
- unresolved: dashed;
- invalid: warning pattern.

Clicking any card must:

- highlight related source marker;
- highlight related stage object;
- highlight active anatomical locus;
- focus the matching section in the architectural diagram;
- update the sequence timeline.

### Right stage and body panel

Use tabs inside one continuous panel:

```text
STAGE PLAN
BODY STUDY
ARCHITECTURAL BOARD
FORCE RELATION
```

#### Stage Plan

Render a simplified SVG plan generated from structured data:

- Node A;
- Node B;
- primary axis;
- linear object;
- checkpoint;
- regulatory or obstacle object;
- forward vector;
- external pressure vector;
- conflict point;
- pressure field;
- active performer position.

The SVG must remain useful even when no generated diagram image exists.

#### Body Study

Render:

- front or three-quarter study;
- side elevation;
- active anatomical loci;
- force direction;
- output state;
- residual state.

Use simple neutral line figures.

Do not use expressive theatrical poses.

#### Architectural Board

Display the corresponding generated diagram image.

Provide:

- fit;
- actual size;
- zoom;
- pan;
- fullscreen;
- image metadata;
- notation-pair ID;
- asset status;
- alternate text.

Add transparent interactive hotspots only when hotspot metadata exists.

Do not guess hotspot coordinates.

#### Force Relation

Render an abstract force diagram:

- body as junction;
- forward drive;
- prohibition or obstacle pressure;
- fixed contact;
- active joints;
- stable axes;
- unresolved force.

### Bottom sequence timeline

Show the temporal chain across frames.

For the initial Authority Interruption sequence:

```text
01 FORWARD PULL
02 PROHIBITION ENTERS
03 FREEZE
04 VECTOR CONFLICT
05 GLITCH OUTPUT
```

Features:

- clickable frames;
- play / pause;
- step forward / backward;
- autoplay speed:
  - 0.5×
  - 1×
  - 2×
- keyboard:
  - left / right;
  - space;
  - escape;
- current-frame explanation;
- reduced-motion support.

## 8. Compare mode

Allow comparison of two notation pairs.

Initial supported comparison:

```text
ST.C1.3.1 + RT.C1.3.1
versus
ST.C1.3.2 + RT.C1.3.2
```

Compare:

- source record;
- situation category;
- active impulse;
- anatomical locus;
- spatial output;
- residual;
- diagram image;
- sequence position.

Use synchronized zoom for both architectural boards.

Make differences visible through annotation, not through a large spreadsheet.

## 9. Dataset page

Create a dataset browser with:

- file selector;
- type filter;
- raw-value filter;
- coordinate availability filter;
- linked / unlinked filter;
- notation-pair count;
- import JSON action;
- validation report;
- export normalized JSON action.

Import behavior:

1. Read file locally.
2. Validate structure.
3. Never mutate the original record.
4. Create a normalized copy.
5. Show:
   - accepted records;
   - rejected records;
   - warning records;
   - duplicate IDs;
   - missing fields.
6. Require explicit confirmation before saving normalized data in browser storage.

Do not upload files to an external server in the MVP.

## 10. Method page

Explain the framework through visual modules:

```text
DATASET
MFI — MAPILLARY FEATURE INDEX
DATA AS PERFORMANCE
LIVING TEXT
READING CHAIN
OBJECT MATRIX
STIMULUS → IMPULSE TAXONOMY
ANATOMICAL LOCUS
SPATIAL OUTPUT
REFERENCE CODES
```

Use the following reading chain:

```text
DATA PROVOCATION
→ STIMULUS
→ SITUATION
→ BODY IMPULSE
→ SPATIAL OUTPUT
```

Keep original technical tokens visible.

Add plain-language explanations beneath them.

## 11. Landing page

The landing page must open with one animated but restrained transformation:

```text
regulatory--no-right-turn--g1
```

The raw string moves through five visual states:

```text
raw record
→ authority condition
→ prohibition vector
→ frozen body axis
→ architectural diagram
```

Use scroll or click progression.

Include:

- project title;
- one-sentence explanation;
- Enter Explorer;
- View Method;
- Exhibition Mode;
- current scores;
- dataset summary;
- diagram count.

Do not use a hero photograph.

## 12. Exhibition mode

Build a fullscreen mode suitable for projection.

Features:

- dark or white presentation background toggle;
- large diagram;
- minimal labels;
- autoplay sequence;
- active raw value;
- active Situation;
- active Body Impulse;
- active output;
- progress indicator;
- keyboard control;
- optional loop;
- no editor controls.

Keep all transitions restrained and readable from a distance.

## 13. Visual system

Follow an architectural analytical drawing language.

### Palette

```text
paper: #F7F7F3
white: #FFFFFF
ink: #111111
muted ink: #505050
grid: #D9D9D3
panel: #EFEFEB
accent: #E6461A
warning: #A6321B
```

Use one primary accent only.

### Typography

Use system-safe or open web fonts.

Preferred pairing:

- condensed sans for labels and codes;
- neutral sans for body copy;
- monospace for raw data.

Do not include font files in the repository unless licensing and distribution permit it.

### Lines

```text
hairline: 1px
standard: 1.5px
active: 2px
axis: 2px
linear object: double line
unresolved: dashed
pressure: hatched or translucent
```

### Shape language

```text
node: solid square
checkpoint: outlined circle
regulatory object: outlined circle with R or semantic icon
conflict: circle with crossed vectors
active anatomical locus: accent ring
tremor: short zigzag and ghost outline
residual: dotted continuation
```

### Motion

- 120–240 ms for interface feedback;
- 500–900 ms for sequence transitions;
- no parallax;
- no floating decorative particles;
- no simulated camera shake;
- respect `prefers-reduced-motion`.

## 14. Responsive behavior

### Desktop

Show all coordinated panels.

### Tablet

Use:

```text
source + transformation
stage + body
timeline
```

### Mobile

Use a vertical chain:

```text
pair header
raw feature
data provocation
situation
body impulse
stage plan
body study
diagram
spatial output
timeline
```

Keep the active pair selector sticky.

Do not shrink the architectural diagram until text becomes unreadable. Use a pan-and-zoom container.

## 15. Accessibility

Meet WCAG 2.2 AA where practical.

Required:

- keyboard navigation;
- visible focus;
- semantic headings;
- button labels;
- alt text;
- no information carried by color alone;
- minimum contrast;
- reduced motion;
- screen-reader description of each transformation;
- skip links;
- tab order matching visual order.

Every diagram needs a structured text alternative:

```text
source
situation
body impulse
anatomical locus
spatial output
residual
```

## 16. Initial content

Seed the app with two complete notation pairs.

### Pair A

```text
pairId: pair-c1-3-1
situation: ST.C1.3.1 — Authority Interruption
bodyImpulse: RT.C1.3.1 — Freeze Response
rawValue: regulatory--no-right-turn--g1
distance: 12.15
category: AUTHORITY
impulse: FREEZE
anatomicalLocus: spine, pelvis
spatialOutput: locked axis, rigid posture
residual: grip and linear tension maintained
diagram: /assets/diagrams/st-c1-3-1__rt-c1-3-1.png
```

### Pair B

```text
pairId: pair-c1-3-2
situation: ST.C1.3.2 — Conflicting Vectors
bodyImpulse: RT.C1.3.2 — Glitch Response
rawValue: regulatory--no-right-turn--g1
distance: 12.15
category: PARADOX
impulse: GLITCH
anatomicalLocus: wrist, shoulder
spatialOutput: tremor loop
residual: grip, drive, and primary axis remain active
diagram: /assets/diagrams/st-c1-3-2__rt-c1-3-2.png
```

Both pairs reference the same raw feature while producing different stages in the response sequence.

The UI must make this shared source visible.

## 17. Required repository structure

Use this as the baseline:

```text
proto-path-web/
  public/
    assets/
      data/
        notation-pairs.json
        scores.json
        taxonomies.json
        mapillary-points.sample.json
        mapillary-traffic.sample.json
      diagrams/
        st-c1-3-1__rt-c1-3-1.png
        st-c1-3-2__rt-c1-3-2.png
  src/
    app/
      router.tsx
      providers.tsx
    components/
      architectural-board/
      body-study/
      dataset-browser/
      lineage/
      map/
      method/
      navigation/
      stage-plan/
      timeline/
    domain/
      schemas/
      selectors/
      transforms/
      types/
      validation/
    pages/
      LandingPage.tsx
      ExplorePage.tsx
      ScorePage.tsx
      NotationPage.tsx
      DatasetPage.tsx
      MethodPage.tsx
      ExhibitionPage.tsx
    repositories/
      notationRepository.ts
      localJsonRepository.ts
    state/
      explorerStore.ts
    styles/
      tokens.css
      globals.css
    tests/
  .env.example
  README.md
  package.json
  tsconfig.json
  vite.config.ts
```

## 18. Error and empty states

Implement explicit states:

```text
NO PAIR SELECTED
SOURCE RECORD MISSING
RAW FILE NOT LOADED
DIAGRAM ASSET MISSING
LIVE MAPILLARY MEDIA UNAVAILABLE
INVALID LINEAGE
UNDECLARED TOKEN
UNRESOLVED REFERENCE
```

Each state must explain the next available action.

Never replace a missing item with invented content.

## 19. Testing requirements

Write tests for:

- schema validation;
- source-to-pair lookup;
- shared-source lineage;
- raw values preserved exactly;
- missing coordinates accepted as `null`;
- notation navigation;
- compare mode;
- sequence playback;
- diagram missing state;
- token-free Mapillary fallback;
- keyboard navigation.

Run tests and fix failures before declaring completion.

## 20. Performance

Targets for the sample dataset:

- first contentful paint under 2.5 seconds on a normal laptop;
- no loading of full 110k-point datasets on initial page load;
- lazy-load raw files;
- virtualize long dataset tables;
- lazy-load diagram images;
- avoid unnecessary map rerenders;
- use Web Worker processing for large imports when needed.

## 21. Security and privacy

- never hardcode API tokens;
- never expose server secrets;
- validate imported JSON;
- render raw strings safely;
- do not execute imported content;
- keep MVP imports local;
- provide `.env.example`;
- document token scope and removal;
- do not send user files to external services without explicit configuration.

## 22. Required deliverables

Produce:

1. working source code;
2. initial two-pair dataset;
3. responsive UI;
4. local JSON repository;
5. generated SVG stage plan;
6. diagram image viewer;
7. lineage interaction;
8. compare mode;
9. exhibition mode;
10. import validation;
11. tests;
12. README;
13. `.env.example`;
14. screenshots or preview;
15. brief architecture note.

## 23. Execution protocol

Follow this order:

1. Inspect every attached source file.
2. Report the files found.
3. Extract only the data required for the initial two-pair MVP.
4. Present a concise implementation plan.
5. Scaffold the project.
6. Build the domain schemas.
7. Seed and validate sample content.
8. Build the synchronized explorer.
9. Build the diagram viewer.
10. Build the generated SVG stage plan.
11. Build timeline and compare mode.
12. Build dataset import.
13. Build method and exhibition pages.
14. Test.
15. Fix.
16. Run the app.
17. Present the final file tree and usage steps.

Do not stop after producing mockups.

Do not return only code snippets.

Create the actual runnable project.

## 24. Completion statement

Only report completion when:

- the project runs;
- the two initial pairs render;
- raw and derived data stay connected;
- the architectural images load;
- the shared source is visible;
- the Freeze-to-Glitch transition works;
- tests pass;
- missing-token mode works.
```

---

# FILE: `proto_path_web_prompt_package/02_INFORMATION_ARCHITECTURE_UI_SPEC.md`

- Size: `8063` bytes
- SHA-256: `c7f165aa626982c1dc5e6d4fc2aa1e15d7ed57faf35a581e0ae9f96383feac56`

```markdown
# INFORMATION ARCHITECTURE + UI SPEC

## 1. Experience principle

The interface should behave like a living analytical drawing.

A visitor selects one notation pair. Every panel responds to the same identity:

```text
pairId
sourceFeatureId
dataProvocationId
situationId
bodyImpulseId
spatialOutputId
diagramAssetId
```

No panel may drift to a different pair.

## 2. Global navigation

```text
PROTO PATH
Explore
Scores
Dataset
Method
Exhibition
About
```

Utility controls:

```text
EN / ID
Fullscreen
Data status
Help
```

## 3. Landing page

### 3.1 Header

Left:

```text
PROTO PATH
WHERE ARE YOU DEPART FROM?
```

Right:

```text
ENTER EXPLORER
METHOD
EXHIBITION MODE
```

### 3.2 Intro transformation

Use one horizontal chain:

```text
regulatory--no-right-turn--g1
→ [AUTHORITY]
→ PROHIBITION VECTOR
→ [FREEZE]
→ LOCKED AXIS
→ [GLITCH]
→ TREMOR LOOP
```

Interactions:

- hover reveals source or target ID;
- click enters the active pair;
- keyboard moves through nodes.

### 3.3 Project summary

Use four compact indicators:

```text
2 SCORES
2 SOURCE DATASETS
130 MFI VALUE TYPES
N NOTATION PAIRS
```

The pair count must be calculated from loaded data.

Do not hardcode a number that will become stale.

## 4. Explore page

### 4.1 Fixed top bar

Height: 64–72 px.

Sections:

```text
PROJECT
SCORE
CHECKPOINT
PAIR
MODE
PLAYBACK
STATUS
```

Pair selector display:

```text
ST.C1.3.1
+
RT.C1.3.1
```

### 4.2 Source panel

Order:

1. `SOURCE DATA`
2. Map
3. raw-value badge
4. metadata grid
5. raw JSON toggle
6. lineage status

Metadata grid:

```text
SOURCE FILE
FEATURE TYPE
RAW VALUE
COORDINATE
DISTANCE
LINKED PAIRS
VALIDATION
```

Coordinates must show:

```text
NOT PROVIDED
```

when absent.

### 4.3 Transformation spine

Each transformation card uses this pattern:

```text
STEP NUMBER
TYPE
REFERENCE CODE
CONTROLLED TOKEN
PRIMARY SENTENCE
SOURCE LINK COUNT
STATUS
```

Example:

```text
03
SITUATION
ST.C1.3.2
[PARADOX]
The prohibition conflicts with the forward pull...
1 SOURCE
VALID
```

Expanded view:

- complete text;
- source references;
- linked object;
- linked anatomical locus;
- linked spatial output;
- copy ID action.

### 4.4 Stage panel

Tabs:

```text
PLAN
BODY
BOARD
FORCES
```

#### PLAN tab

Default scale:

```text
Node A = 0 m
Checkpoint = 12.15 m
Node B = 15 m
```

Visual order:

```text
stage boundary
grid
axis
linear object
nodes
checkpoint
performer
object
vectors
pressure
callouts
```

#### BODY tab

Use front and side views.

Locus selector:

```text
ALL
SPINE
PELVIS
WRIST
SHOULDER
```

Clicking a locus highlights:

- related Body Impulse text;
- related output;
- matching board hotspot when available.

#### BOARD tab

Controls:

```text
FIT
100%
ZOOM IN
ZOOM OUT
RESET
FULLSCREEN
ALT TEXT
METADATA
```

#### FORCES tab

Show a force relation diagram plus a textual matrix:

```text
FORCE
SOURCE
DIRECTION
BODY ENTRY
STATE
OUTPUT
```

### 4.5 Sequence timeline

Desktop height: 180–240 px.

Frame card:

```text
NUMBER
TITLE
THUMBNAIL
ACTIVE CODE
ONE-LINE ACTION
```

Current frame uses a 2 px accent border.

Completed frames use solid black markers.

Future frames use outlined markers.

## 5. Compare mode

Use a split canvas:

```text
PAIR A | DIFFERENCE SPINE | PAIR B
```

The difference spine shows only changed fields:

```text
CATEGORY
IMPULSE
ANATOMICAL LOCUS
BODY ACTION
SPATIAL OUTPUT
RESIDUAL
```

Initial comparison:

```text
AUTHORITY / FREEZE
versus
PARADOX / GLITCH
```

Shared fields should appear once:

```text
raw feature
distance
regulatory object
primary axis
linear object
```

## 6. Score page

Header:

```text
SCORE 01
LENGKONG / PALASARI / KOSAMBI
DENSE SIGNAGE AND COMMERCIAL AGGRESSION
```

Sections:

1. coordinate bounds;
2. node declaration;
3. phase rail;
4. checkpoint map;
5. notation-pair list;
6. residue chain;
7. asset coverage.

Phase rail:

```text
PHASE 01 — DEPARTURE
PHASE 02 — LINEAR FLOW
PHASE 03 — ITERATION
PHASE 04 — RESIDUAL
```

## 7. Dataset page

Layout:

```text
FILTER SIDEBAR | VIRTUALIZED RECORD TABLE | INSPECTOR
```

Table columns:

```text
SOURCE ID
TYPE
RAW VALUE
COORDINATE
DISTANCE
LINKED PAIRS
STATUS
```

Inspector tabs:

```text
RAW
NORMALIZED
LINEAGE
VALIDATION
```

Import panel:

```text
DROP JSON
CHOOSE FILE
VALIDATE
NORMALIZE
EXPORT REPORT
```

## 8. Method page

Use one vertical annotated system:

```text
DATASET
↓
MFI
↓
DATA PROVOCATION
↓
SITUATION
↓
BODY IMPULSE
↓
SPATIAL OUTPUT
```

Taxonomy tables should support:

- search;
- linked examples;
- token validity;
- show usage count.

## 9. Exhibition page

Default appearance:

- no browser-like sidebars;
- no dataset table;
- large board image or generated plan;
- left-bottom raw value;
- center-bottom situation;
- right-bottom body impulse;
- minimal progress rail.

Keys:

```text
SPACE = play / pause
LEFT = previous
RIGHT = next
F = fullscreen
L = loop
I = information
ESC = exit overlay
```

## 10. Design tokens

```css
:root {
  --paper: #f7f7f3;
  --surface: #ffffff;
  --panel: #efefeb;
  --ink: #111111;
  --ink-muted: #505050;
  --grid: #d9d9d3;
  --accent: #e6461a;
  --accent-soft: rgba(230, 70, 26, 0.12);
  --warning: #a6321b;

  --line-hairline: 1px;
  --line-standard: 1.5px;
  --line-active: 2px;

  --radius-small: 2px;
  --radius-medium: 4px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
}
```

Avoid large rounded cards.

Avoid glassmorphism.

Avoid gradients except subtle pressure or vibration fields.

## 11. Label system

### Structural labels

```text
ZONE 1
ZONE 2
ZONE 3
```

### Data labels

Monospace:

```text
regulatory--no-right-turn--g1
DP.C1.3.1
```

### Score labels

Condensed uppercase:

```text
AUTHORITY INTERRUPTION
GLITCH RESPONSE
```

### Body copy

Neutral sans-serif.

Keep line length under 75 characters in reading panels.

## 12. Interaction states

### Neutral

Gray connectors and black text.

### Hover

Accent ring around the active entity.

### Selected

Accent line travels across related panels.

### Invalid

Warning icon plus explicit error text.

### Missing

Dashed empty container.

### Loading

Skeleton aligned to actual component geometry.

Do not use spinning loaders as the only feedback.

## 13. Data lineage interaction

When selecting `regulatory--no-right-turn--g1`:

1. marker enlarges;
2. DP card activates;
3. related Situation cards activate;
4. related Body Impulse cards activate;
5. stage regulatory object activates;
6. active body loci activate;
7. relevant diagram asset becomes current;
8. sequence frame jumps to the correct position.

When selecting `RT.C1.3.2`:

1. wrist and shoulder activate;
2. glitch notation activates;
3. spatial output shows tremor loop;
4. raw source remains visible;
5. previous Freeze pair stays available as sequence context.

## 14. Empty states

Use exact microcopy:

```text
DIAGRAM ASSET MISSING
This notation pair has structured score data, but no diagram image has been attached.
```

```text
LIVE MAPILLARY MEDIA UNAVAILABLE
The application is displaying the local source record. Add a valid access token to load live media.
```

```text
COORDINATE NOT PROVIDED
This source records a distance along the stage axis without a geographic coordinate.
```

```text
UNRESOLVED REFERENCE
The score points to a code that is not present in the loaded registry.
```

## 15. Responsive rules

### ≥ 1280 px

Three coordinated columns plus timeline.

### 768–1279 px

Two-column layout:

```text
source + spine
stage + diagram
timeline full width
```

### < 768 px

Vertical reading.

Keep:

- sticky pair header;
- collapsible raw JSON;
- full-width plan;
- pannable board;
- timeline as horizontal scroll.

## 16. Visual exclusions

Do not use:

- dashboard-style colored KPI cards;
- glowing nodes;
- sci-fi interfaces;
- random animated dots;
- saturated multicolor legends;
- decorative map pins without data;
- oversized shadows;
- pill buttons everywhere;
- floating glass panels;
- realistic actor photography;
- stock city photos.
```

---

# FILE: `proto_path_web_prompt_package/03_DATA_CONTRACT_SCHEMA_AND_SAMPLE.md`

- Size: `16561` bytes
- SHA-256: `f2dbcc6e1941e8b1aeaca8b51a9c9f5b5a1c371963199b1161b244b7501afe1d`

```markdown
# DATA CONTRACT, TYPES, LINEAGE, AND INITIAL SAMPLE

## 1. Design rule

Keep source data immutable.

Store interpretation as derived entities.

Use stable IDs and explicit references.

## 2. TypeScript domain types

```ts
export type ValidationStatus =
  | "valid"
  | "warning"
  | "invalid"
  | "unresolved";

export type SourceKind =
  | "mapillary-feature"
  | "score-bounds"
  | "manual-source";

export type SituationCategory =
  | "SYSTEM"
  | "SPATIAL_MATRIX"
  | "MASS"
  | "ELEVATION"
  | "AUTHORITY"
  | "SEMANTIC"
  | "PARADOX";

export type BodyImpulseToken =
  | "INJECTION"
  | "ACCELERATION"
  | "COMPRESSION"
  | "ASYMMETRIC"
  | "FREEZE"
  | "GLITCH"
  | "FIXATION"
  | "CONSTANT";

export type AnatomicalLocus =
  | "head"
  | "eyes"
  | "cervical-spine"
  | "shoulder"
  | "clavicle"
  | "sternum"
  | "scapula"
  | "chest"
  | "elbow"
  | "wrist"
  | "fingers"
  | "palm"
  | "spine"
  | "lumbar"
  | "pelvis"
  | "hip"
  | "knee"
  | "ankle"
  | "sole"
  | "foot"
  | "centre-of-gravity"
  | "motor-nerve";

export interface GeoPoint {
  lon: number;
  lat: number;
}

export interface SourceFeature {
  id: string;
  sourceKind: SourceKind;
  sourceDatasetId: string;
  sourceFile: string;
  featureType: string;
  rawValue: string;
  coordinate: GeoPoint | null;
  distanceMeters: number | null;
  rawRecord: Record<string, unknown>;
  immutableHash?: string;
  validationStatus: ValidationStatus;
}

export interface DataProvocation {
  id: string;
  code: string;
  sourceFeatureIds: string[];
  sourceLabel: string;
  featureType: string;
  rawValue: string;
  coordinate: GeoPoint | null;
  distanceMeters: number | null;
  verbatimText: string;
  validationStatus: ValidationStatus;
}

export interface Situation {
  id: string;
  code: string;
  checkpointId: string;
  category: SituationCategory;
  title: string;
  spatialCondition: string;
  dataProvocationIds: string[];
  objectTokens: string[];
  activeVectors: string[];
  validationStatus: ValidationStatus;
}

export interface BodyImpulse {
  id: string;
  code: string;
  impulse: BodyImpulseToken;
  title: string;
  bodyAction: string;
  respondsToSituationIds: string[];
  anatomicalLoci: AnatomicalLocus[];
  spatialOutputIds: string[];
  kineticQualities: string[];
  validationStatus: ValidationStatus;
}

export interface SpatialOutput {
  id: string;
  label: string;
  description: string;
  residue: string[];
}

export interface DiagramAsset {
  id: string;
  pairId: string;
  src: string;
  width?: number;
  height?: number;
  alt: string;
  hotspotManifestSrc?: string | null;
  status: "available" | "missing" | "draft";
}

export interface SequenceFrame {
  id: string;
  order: number;
  title: string;
  description: string;
  activeEntityIds: string[];
  durationMs: number;
}

export interface LineageEdge {
  id: string;
  fromId: string;
  toId: string;
  relation:
    | "provokes"
    | "translated_as"
    | "responded_by"
    | "produces"
    | "leaves_residue"
    | "visualized_by"
    | "continues_into";
}

export interface NotationPair {
  id: string;
  scoreId: string;
  phaseId: string;
  checkpointId: string;
  title: string;
  sourceFeatureIds: string[];
  dataProvocationIds: string[];
  situationIds: string[];
  bodyImpulseIds: string[];
  spatialOutputIds: string[];
  diagramAssetId: string | null;
  sequenceFrameIds: string[];
  previousPairId: string | null;
  nextPairId: string | null;
  status: "draft" | "reviewed" | "published";
}
```

## 3. Runtime validation

Create Zod schemas matching the types.

Validation rules:

- all IDs must be unique;
- every reference must resolve;
- `rawValue` cannot be normalized or title-cased;
- `coordinate` may be `null`;
- `distanceMeters` may be `null`;
- at least one of coordinate or distance should exist for a spatial source, otherwise warning;
- one diagram may belong to one pair only;
- one source feature may connect to multiple pairs;
- undeclared Situation category fails validation;
- undeclared Body Impulse token fails validation;
- undeclared anatomical locus raises warning or error according to strict mode;
- lineage cycles allowed only through explicit sequence or iteration relations;
- source-to-derived mutation forbidden.

## 4. Initial sample JSON

```json
{
  "datasets": [
    {
      "id": "dataset-mapillary-traffic-bandung",
      "name": "Mapillary Traffic Bandung",
      "sourceFile": "mapillary-traffic.json",
      "recordCount": 3778,
      "valueTypeCount": 91
    }
  ],
  "scores": [
    {
      "id": "score-01",
      "code": "C1",
      "title": "Lengkong / Palasari / Kosambi Area",
      "character": "Dense signage and commercial aggression",
      "bounds": {
        "lonMin": 107.61,
        "lonMax": 107.625,
        "latMin": -6.93,
        "latMax": -6.905
      },
      "nodes": [
        {
          "id": "node-a",
          "label": "Node A",
          "role": "origin anchor",
          "axisDistanceMeters": 0
        },
        {
          "id": "node-b",
          "label": "Node B",
          "role": "terminal contact",
          "axisDistanceMeters": 15
        }
      ]
    }
  ],
  "sourceFeatures": [
    {
      "id": "source-c1-3-no-right-turn",
      "sourceKind": "mapillary-feature",
      "sourceDatasetId": "dataset-mapillary-traffic-bandung",
      "sourceFile": "mapillary-traffic.json",
      "featureType": "regulatory",
      "rawValue": "regulatory--no-right-turn--g1",
      "coordinate": null,
      "distanceMeters": 12.15,
      "rawRecord": {
        "source": "Mapillary",
        "type": "feature",
        "distance": "±12.15m",
        "feature": "regulatory",
        "value": "regulatory--no-right-turn--g1"
      },
      "validationStatus": "valid"
    }
  ],
  "dataProvocations": [
    {
      "id": "dp-c1-3-1",
      "code": "DP.C1.3.1",
      "sourceFeatureIds": [
        "source-c1-3-no-right-turn"
      ],
      "sourceLabel": "Mapillary",
      "featureType": "regulatory",
      "rawValue": "regulatory--no-right-turn--g1",
      "coordinate": null,
      "distanceMeters": 12.15,
      "verbatimText": "source=Mapillary | type=feature | distance=±12.15m | feature=regulatory | value=\"regulatory--no-right-turn--g1\"",
      "validationStatus": "valid"
    }
  ],
  "situations": [
    {
      "id": "situation-c1-3-1",
      "code": "ST.C1.3.1",
      "checkpointId": "checkpoint-c1-3",
      "category": "AUTHORITY",
      "title": "Authority Interruption",
      "spatialCondition": "[REGULATORY_OBJECT] declares a right-turn prohibition at the edge; the cursor is pressured toward a vector it must register.",
      "dataProvocationIds": [
        "dp-c1-3-1"
      ],
      "objectTokens": [
        "REGULATORY_OBJECT",
        "LINEAR_OBJECT"
      ],
      "activeVectors": [
        "forward-drive",
        "prohibition-pressure"
      ],
      "validationStatus": "valid"
    },
    {
      "id": "situation-c1-3-2",
      "code": "ST.C1.3.2",
      "checkpointId": "checkpoint-c1-3",
      "category": "PARADOX",
      "title": "Conflicting Vectors",
      "spatialCondition": "The prohibition conflicts with the forward pull of [LINEAR_OBJECT]; two vectors demand the body at once.",
      "dataProvocationIds": [
        "dp-c1-3-1"
      ],
      "objectTokens": [
        "REGULATORY_OBJECT",
        "LINEAR_OBJECT"
      ],
      "activeVectors": [
        "forward-drive",
        "prohibition-pressure"
      ],
      "validationStatus": "valid"
    }
  ],
  "bodyImpulses": [
    {
      "id": "body-impulse-c1-3-1",
      "code": "RT.C1.3.1",
      "impulse": "FREEZE",
      "title": "Freeze Response",
      "bodyAction": "Responding to [ST.C1.3.1], the body halts forward drive at the spine and pelvis, generating a locked axis that holds the prohibition as internal torque.",
      "respondsToSituationIds": [
        "situation-c1-3-1"
      ],
      "anatomicalLoci": [
        "spine",
        "pelvis"
      ],
      "spatialOutputIds": [
        "output-locked-axis"
      ],
      "kineticQualities": [
        "arrested-forward-drive",
        "held-tension",
        "grip-maintained"
      ],
      "validationStatus": "valid"
    },
    {
      "id": "body-impulse-c1-3-2",
      "code": "RT.C1.3.2",
      "impulse": "GLITCH",
      "title": "Glitch Response",
      "bodyAction": "Responding to [ST.C1.3.2], the body produces a brief tremor at the wrist and shoulder while grip and drive remain simultaneously active.",
      "respondsToSituationIds": [
        "situation-c1-3-2"
      ],
      "anatomicalLoci": [
        "wrist",
        "shoulder"
      ],
      "spatialOutputIds": [
        "output-tremor-loop"
      ],
      "kineticQualities": [
        "mechanical-tremor",
        "micro-displacement",
        "uncorrected-drift",
        "grip-maintained"
      ],
      "validationStatus": "valid"
    }
  ],
  "spatialOutputs": [
    {
      "id": "output-locked-axis",
      "label": "Locked axis",
      "description": "Forward movement stops while alignment and internal tension remain active.",
      "residue": [
        "rigid posture",
        "mechanical grip maintained",
        "linear object remains under tension"
      ]
    },
    {
      "id": "output-tremor-loop",
      "label": "Tremor loop",
      "description": "Wrist and shoulder vibrate under simultaneous forward drive and prohibition pressure.",
      "residue": [
        "primary axis maintained",
        "mechanical grip maintained",
        "forward drive remains active",
        "no clean correction"
      ]
    }
  ],
  "diagramAssets": [
    {
      "id": "diagram-c1-3-1",
      "pairId": "pair-c1-3-1",
      "src": "/assets/diagrams/st-c1-3-1__rt-c1-3-1.png",
      "alt": "Architectural stage notation board showing Mapillary no-right-turn data translated into authority pressure, a performer freezing on the primary axis, spine and pelvis locking, and grip tension remaining active.",
      "hotspotManifestSrc": null,
      "status": "available"
    },
    {
      "id": "diagram-c1-3-2",
      "pairId": "pair-c1-3-2",
      "src": "/assets/diagrams/st-c1-3-2__rt-c1-3-2.png",
      "alt": "Architectural stage notation board showing the same no-right-turn source producing conflicting vectors and a localized glitch at the wrist and shoulder while grip, drive, and axis remain active.",
      "hotspotManifestSrc": null,
      "status": "available"
    }
  ],
  "sequenceFrames": [
    {
      "id": "frame-forward-pull",
      "order": 1,
      "title": "Forward Pull",
      "description": "The performer pulls the linear object toward Node B.",
      "activeEntityIds": [
        "source-c1-3-no-right-turn"
      ],
      "durationMs": 1000
    },
    {
      "id": "frame-prohibition-enters",
      "order": 2,
      "title": "Prohibition Enters",
      "description": "The authority vector enters the primary stage axis.",
      "activeEntityIds": [
        "dp-c1-3-1",
        "situation-c1-3-1"
      ],
      "durationMs": 1200
    },
    {
      "id": "frame-freeze",
      "order": 3,
      "title": "Freeze",
      "description": "The body arrests forward movement at the spine and pelvis.",
      "activeEntityIds": [
        "body-impulse-c1-3-1",
        "output-locked-axis"
      ],
      "durationMs": 1400
    },
    {
      "id": "frame-vector-conflict",
      "order": 4,
      "title": "Vector Conflict",
      "description": "Forward pull and prohibition pressure remain active at once.",
      "activeEntityIds": [
        "situation-c1-3-2"
      ],
      "durationMs": 1200
    },
    {
      "id": "frame-glitch-output",
      "order": 5,
      "title": "Glitch Output",
      "description": "The wrist and shoulder produce a localized mechanical tremor.",
      "activeEntityIds": [
        "body-impulse-c1-3-2",
        "output-tremor-loop"
      ],
      "durationMs": 1600
    }
  ],
  "notationPairs": [
    {
      "id": "pair-c1-3-1",
      "scoreId": "score-01",
      "phaseId": "phase-c1-2-linear-flow",
      "checkpointId": "checkpoint-c1-3",
      "title": "Authority Interruption / Freeze Response",
      "sourceFeatureIds": [
        "source-c1-3-no-right-turn"
      ],
      "dataProvocationIds": [
        "dp-c1-3-1"
      ],
      "situationIds": [
        "situation-c1-3-1"
      ],
      "bodyImpulseIds": [
        "body-impulse-c1-3-1"
      ],
      "spatialOutputIds": [
        "output-locked-axis"
      ],
      "diagramAssetId": "diagram-c1-3-1",
      "sequenceFrameIds": [
        "frame-forward-pull",
        "frame-prohibition-enters",
        "frame-freeze"
      ],
      "previousPairId": null,
      "nextPairId": "pair-c1-3-2",
      "status": "draft"
    },
    {
      "id": "pair-c1-3-2",
      "scoreId": "score-01",
      "phaseId": "phase-c1-2-linear-flow",
      "checkpointId": "checkpoint-c1-3",
      "title": "Conflicting Vectors / Glitch Response",
      "sourceFeatureIds": [
        "source-c1-3-no-right-turn"
      ],
      "dataProvocationIds": [
        "dp-c1-3-1"
      ],
      "situationIds": [
        "situation-c1-3-2"
      ],
      "bodyImpulseIds": [
        "body-impulse-c1-3-2"
      ],
      "spatialOutputIds": [
        "output-tremor-loop"
      ],
      "diagramAssetId": "diagram-c1-3-2",
      "sequenceFrameIds": [
        "frame-vector-conflict",
        "frame-glitch-output"
      ],
      "previousPairId": "pair-c1-3-1",
      "nextPairId": null,
      "status": "draft"
    }
  ],
  "lineageEdges": [
    {
      "id": "edge-source-dp",
      "fromId": "source-c1-3-no-right-turn",
      "toId": "dp-c1-3-1",
      "relation": "provokes"
    },
    {
      "id": "edge-dp-s1",
      "fromId": "dp-c1-3-1",
      "toId": "situation-c1-3-1",
      "relation": "translated_as"
    },
    {
      "id": "edge-s1-rt1",
      "fromId": "situation-c1-3-1",
      "toId": "body-impulse-c1-3-1",
      "relation": "responded_by"
    },
    {
      "id": "edge-rt1-output1",
      "fromId": "body-impulse-c1-3-1",
      "toId": "output-locked-axis",
      "relation": "produces"
    },
    {
      "id": "edge-pair1-diagram",
      "fromId": "pair-c1-3-1",
      "toId": "diagram-c1-3-1",
      "relation": "visualized_by"
    },
    {
      "id": "edge-dp-s2",
      "fromId": "dp-c1-3-1",
      "toId": "situation-c1-3-2",
      "relation": "translated_as"
    },
    {
      "id": "edge-s2-rt2",
      "fromId": "situation-c1-3-2",
      "toId": "body-impulse-c1-3-2",
      "relation": "responded_by"
    },
    {
      "id": "edge-rt2-output2",
      "fromId": "body-impulse-c1-3-2",
      "toId": "output-tremor-loop",
      "relation": "produces"
    },
    {
      "id": "edge-pair2-diagram",
      "fromId": "pair-c1-3-2",
      "toId": "diagram-c1-3-2",
      "relation": "visualized_by"
    },
    {
      "id": "edge-pair1-pair2",
      "fromId": "pair-c1-3-1",
      "toId": "pair-c1-3-2",
      "relation": "continues_into"
    }
  ]
}
```

## 5. Selector behavior

Implement pure selectors:

```ts
getPairById(pairId)
getSourceFeaturesForPair(pairId)
getDataProvocationsForPair(pairId)
getSituationsForPair(pairId)
getBodyImpulsesForPair(pairId)
getSpatialOutputsForPair(pairId)
getDiagramForPair(pairId)
getPreviousPair(pairId)
getNextPair(pairId)
getLineagePath(entityId)
getPairsSharingSourceFeature(sourceFeatureId)
```

## 6. Import mapping

### Raw input example

```json
{
  "geometry": {
    "coordinates": [107.61, -6.91]
  },
  "properties": {
    "value": "regulatory--no-right-turn--g1"
  }
}
```

### Normalized source

```json
{
  "id": "generated-stable-id",
  "sourceKind": "mapillary-feature",
  "featureType": "regulatory",
  "rawValue": "regulatory--no-right-turn--g1",
  "coordinate": {
    "lon": 107.61,
    "lat": -6.91
  },
  "distanceMeters": null,
  "rawRecord": {}
}
```

Mapping rules:

- preserve complete raw record;
- read coordinates only from valid geometry;
- use raw value exactly;
- infer feature type only from an explicit field or a controlled parsing rule;
- record the parser version;
- log warnings;
- never generate score interpretation automatically in the MVP.

## 7. Diagram hotspot manifest

Optional file:

```json
{
  "diagramAssetId": "diagram-c1-3-2",
  "coordinateSpace": {
    "width": 1448,
    "height": 1086
  },
  "hotspots": [
    {
      "id": "hotspot-source",
      "entityIds": [
        "source-c1-3-no-right-turn"
      ],
      "shape": "rect",
      "x": 20,
      "y": 120,
      "width": 240,
      "height": 320,
      "label": "Mapillary source"
    }
  ]
}
```

Do not create hotspot positions unless a human supplies or verifies them.
```

---

# FILE: `proto_path_web_prompt_package/04_IMPLEMENTATION_PLAN_AND_TASKS.md`

- Size: `7559` bytes
- SHA-256: `4fb29b495bcdb3e7f5d78bf95abec723f351d1eac40a2e2e2acfc4991ba1c776`

```markdown
# IMPLEMENTATION PLAN AND AGENT TASKS

## 1. Delivery strategy

Build the project in seven controlled phases.

Do not start visual polish before the domain model and sample data validate.

## Phase 0 — Source audit

Tasks:

- list attached PDF, JSON, and image files;
- record file names and sizes;
- identify the two initial diagram images;
- confirm raw data availability;
- report unavailable assets;
- avoid guessing.

Deliverable:

```text
SOURCE_AUDIT.md
```

## Phase 1 — Project scaffold

Tasks:

- create React + TypeScript + Vite project;
- configure strict TypeScript;
- configure Tailwind;
- add router;
- add test frameworks;
- add ESLint and formatting;
- add environment template;
- create folder structure.

Exit condition:

- development server starts;
- production build succeeds;
- empty routes render.

## Phase 2 — Domain and validation

Tasks:

- implement TypeScript types;
- implement Zod schemas;
- load sample JSON;
- validate references;
- create repository interface;
- create local JSON repository;
- create selectors;
- write unit tests.

Exit condition:

- all sample entities validate;
- shared source links to both notation pairs;
- raw value stays exact;
- missing coordinate remains `null`.

## Phase 3 — Core synchronized explorer

Tasks:

- build pair selector;
- build source panel;
- build transformation spine;
- build stage SVG;
- build body study;
- build spatial output panel;
- wire shared selection state;
- implement previous / next pair.

Exit condition:

- selecting any entity highlights related entities across all panels;
- Pair A and Pair B render correctly;
- deep links work.

## Phase 4 — Diagram and sequence

Tasks:

- integrate generated diagram images;
- add pan and zoom;
- add fullscreen;
- add alt text;
- build timeline;
- add Freeze-to-Glitch progression;
- implement reduced motion;
- implement compare mode.

Exit condition:

- both board assets load;
- sequence playback works;
- compare mode preserves shared source.

## Phase 5 — Dataset, method, exhibition

Tasks:

- build dataset browser;
- add local JSON import;
- validate large files;
- add normalization preview;
- build method page;
- build fullscreen exhibition mode.

Exit condition:

- invalid JSON produces a report;
- imports remain local;
- method tokens connect to examples;
- exhibition mode loops safely.

## Phase 6 — QA and polish

Tasks:

- run unit tests;
- run end-to-end tests;
- test keyboard flow;
- test missing-token behavior;
- test missing image behavior;
- test mobile;
- test performance;
- inspect text overflow;
- fix all critical issues.

Exit condition:

- acceptance checklist passes;
- README explains local run and build;
- no secret appears in repository.

## 2. Suggested agent allocation

When multiple agents are available:

### Agent A — Domain and ingestion

Owns:

- schemas;
- sample data;
- validation;
- repositories;
- selectors;
- import pipeline.

### Agent B — Core UI

Owns:

- layout;
- navigation;
- source panel;
- transformation spine;
- responsive behavior.

### Agent C — Visualization

Owns:

- MapLibre view;
- stage SVG;
- body study;
- force diagram;
- diagram viewer;
- lineage animation.

### Agent D — QA and accessibility

Owns:

- unit tests;
- Playwright;
- keyboard;
- reduced motion;
- contrast;
- missing states;
- performance checks.

Do not let separate agents create conflicting domain types.

Agent A owns the canonical contracts.

## 3. Repository tasks

### Required scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:e2e": "playwright test",
    "lint": "eslint .",
    "check:data": "tsx scripts/validate-data.ts"
  }
}
```

### Required configuration

```text
.env.example
```

Content:

```text
VITE_MAPILLARY_ACCESS_TOKEN=
VITE_DATA_MODE=local
```

## 4. Component breakdown

```text
AppShell
ProjectHeader
ScoreSelector
CheckpointSelector
PairSelector
ViewModeSwitch
PlaybackControls
DataStatus

SourcePanel
SourceMap
SourceMarker
SourceMetadata
RawJsonDrawer
ProvenanceBadge

TransformationSpine
TransformationCard
LineageConnector
ReferenceChip
ValidationBadge

StagePanel
StagePlanSvg
BodyStudySvg
ForceRelationSvg
ArchitecturalBoardViewer
DiagramMetadata
DiagramAltText

SequenceTimeline
SequenceFrameCard
PlaybackScrubber

CompareView
DifferenceSpine

DatasetBrowser
DatasetFilters
VirtualizedRecordTable
RecordInspector
ImportDialog
ValidationReport

MethodReadingChain
TaxonomyTable
TokenInspector

ExhibitionPlayer
```

## 5. State model

Keep URL state where shareability matters:

```text
score
checkpoint
pair
mode
comparePair
frame
```

Store local UI state for:

```text
expanded cards
diagram zoom
open drawers
playback speed
reduced-detail preference
```

Do not store raw imported files in URL.

## 6. SVG stage-plan algorithm

Inputs:

```text
axisLengthMeters
checkpointDistanceMeters
nodes
object positions
performer position
vectors
active loci
```

Map meter positions to SVG x coordinates:

```ts
const x = marginLeft + (distanceMeters / axisLengthMeters) * usableWidth;
```

Render layers in stable order.

Use SVG markers for arrows.

Keep text in HTML overlay or SVG with collision-safe placement.

Never infer stage distance from geographic coordinate.

## 7. Lineage highlight algorithm

Given an entity ID:

1. traverse incoming and outgoing lineage edges;
2. stop at the configured depth or complete pair boundary;
3. collect related IDs;
4. set `activeEntityIds`;
5. render active states across all panels;
6. keep the selected ID visually distinct from related IDs.

Use:

```text
selected = solid accent
related = soft accent
inactive = gray
invalid = warning
```

## 8. Large-data strategy

The source datasets may contain many records.

Do not import all records into React component state.

Use:

- lazy file loading;
- Web Worker parsing;
- indexed local cache when required;
- record virtualization;
- spatial bounding filtering;
- normalized summaries;
- progressive rendering.

Initial route should load only:

- score metadata;
- pair registry;
- linked source records;
- visible diagram metadata.

## 9. Content integrity report

Add a development-only route:

```text
/dev/integrity
```

Show:

- unresolved IDs;
- duplicate IDs;
- missing assets;
- undeclared tokens;
- source records with no pair;
- pairs with no source;
- pairs with no diagram;
- pair sequence breaks;
- raw-value mutation checks.

Exclude this route from public navigation.

## 10. Documentation deliverables

Generate:

```text
README.md
ARCHITECTURE.md
DATA_MODEL.md
CONTENT_INGESTION.md
SOURCE_AUDIT.md
```

README sections:

```text
Overview
Screenshots
Requirements
Install
Run
Build
Test
Environment
Data files
Adding a notation pair
Adding a diagram
Mapillary fallback
Deployment
Known limits
```

## 11. Deployment

Prepare static deployment.

Required:

- correct base paths;
- client-side routing fallback;
- compressed images;
- cache headers when platform permits;
- no server requirement for MVP;
- environment token injected at build or secure runtime layer.

Potential targets:

- Firebase Hosting;
- Vercel;
- Netlify;
- Cloudflare Pages.

Do not lock the project to one host.

## 12. Final agent report

At completion, provide:

1. repository tree;
2. commands executed;
3. tests run;
4. test result;
5. known limitations;
6. missing source assets;
7. live preview location;
8. next recommended content batch.

Do not claim a feature works unless it was run or tested.
```

---

# FILE: `proto_path_web_prompt_package/05_QA_ACCEPTANCE_TESTS.md`

- Size: `5517` bytes
- SHA-256: `027913a704f97a3545d8fe14d1f257715725e35cdf9bef80b3320c0a28bb6189`

```markdown
# QA AND ACCEPTANCE TESTS

## 1. Product acceptance

The MVP passes only when all critical checks below pass.

## 2. Data fidelity

### RAW-001

Given the initial source record, the UI displays:

```text
regulatory--no-right-turn--g1
```

with exact punctuation and casing.

### RAW-002

The source record remains unchanged after:

- selecting a pair;
- switching modes;
- importing another file;
- exporting normalized data.

### RAW-003

The no-right-turn source connects to both:

```text
pair-c1-3-1
pair-c1-3-2
```

### RAW-004

A missing coordinate renders:

```text
COORDINATE NOT PROVIDED
```

The app does not fabricate a map point.

### RAW-005

Distance displays:

```text
12.15 m
```

on the stage axis.

## 3. Lineage

### LIN-001

Clicking the source feature highlights:

- Data Provocation;
- Situation;
- Body Impulse;
- Spatial Output;
- active stage object;
- active board asset.

### LIN-002

Clicking `ST.C1.3.1` highlights:

- AUTHORITY;
- prohibition vector;
- spine and pelvis;
- locked axis;
- Freeze board.

### LIN-003

Clicking `ST.C1.3.2` highlights:

- PARADOX;
- two active vectors;
- wrist and shoulder;
- tremor loop;
- Glitch board.

### LIN-004

The lineage graph contains no unresolved references in the seed dataset.

## 4. Sequence

### SEQ-001

The timeline order reads:

```text
FORWARD PULL
PROHIBITION ENTERS
FREEZE
VECTOR CONFLICT
GLITCH OUTPUT
```

### SEQ-002

Playback updates all panels.

### SEQ-003

Pause preserves the current frame.

### SEQ-004

Reduced motion removes animated travel and keeps state changes readable.

### SEQ-005

Keyboard controls work.

## 5. Diagram viewer

### IMG-001

Both diagram images load.

### IMG-002

Each diagram shows the correct notation-pair code.

### IMG-003

Zoom and pan do not move the surrounding page unexpectedly.

### IMG-004

Fullscreen exits with Escape.

### IMG-005

Missing image path produces an explicit missing state.

### IMG-006

Alt text exposes:

- source;
- Situation;
- Body Impulse;
- anatomical locus;
- Spatial Output;
- residual.

## 6. Stage plan

### STG-001

Node A appears at 0 m.

### STG-002

Node B appears at 15 m.

### STG-003

Checkpoint appears at 12.15 m.

### STG-004

The primary axis remains straight.

### STG-005

Pair A renders a stopped forward vector and locked body axis.

### STG-006

Pair B renders simultaneous forward and prohibition vectors.

### STG-007

Pair B localizes tremor at wrist and shoulder.

### STG-008

The linear object remains taut in both pairs.

## 7. Compare mode

### CMP-001

Compare mode displays both pairs.

### CMP-002

Shared source appears once or displays a clear shared-source indicator.

### CMP-003

Differences show:

```text
AUTHORITY → PARADOX
FREEZE → GLITCH
SPINE + PELVIS → WRIST + SHOULDER
LOCKED AXIS → TREMOR LOOP
```

### CMP-004

Zoom synchronization can be enabled and disabled.

## 8. Mapillary fallback

### MAP-001

With no access token:

- application loads;
- source metadata loads;
- stage plan loads;
- diagrams load;
- lineage works;
- a live-media unavailable notice appears.

### MAP-002

The application never exposes a token in rendered HTML, logs, or committed files.

### MAP-003

Invalid token fails gracefully.

## 9. Dataset import

### IMP-001

Valid JSON produces a validation summary.

### IMP-002

Malformed JSON produces an error with line or parser context.

### IMP-003

Duplicate IDs appear in the report.

### IMP-004

Unknown tokens appear as undeclared.

### IMP-005

Imported raw records remain available in raw form.

### IMP-006

No data leaves the browser in MVP mode.

## 10. Accessibility

### A11Y-001

All interactive controls work with keyboard.

### A11Y-002

Focus remains visible.

### A11Y-003

Color does not carry the only meaning.

### A11Y-004

Screen-reader order matches visual order.

### A11Y-005

Diagram has structured text alternative.

### A11Y-006

Contrast passes WCAG AA for normal text.

### A11Y-007

Touch targets meet a practical minimum size.

## 11. Responsive

### RSP-001

At 1440 px, all coordinated panels fit.

### RSP-002

At 1024 px, the two-column layout stays readable.

### RSP-003

At 390 px:

- pair selector stays available;
- raw JSON collapses;
- plan stays pannable;
- board stays zoomable;
- no horizontal page overflow outside intended viewers.

## 12. Performance

### PERF-001

The landing page does not load both complete raw datasets.

### PERF-002

Diagram images lazy-load.

### PERF-003

Long record tables virtualize.

### PERF-004

Large import processing does not freeze the interface for prolonged periods.

### PERF-005

Production build reports no critical bundle error.

## 13. Security

### SEC-001

Imported raw strings render as text.

### SEC-002

No imported HTML executes.

### SEC-003

No secret exists in Git history or built bundle.

### SEC-004

Environment template contains empty values only.

## 14. Regression scenarios

Test after every content batch:

1. add one pair with an image;
2. add one pair with no image;
3. add one source shared by three pairs;
4. add one unresolved reference;
5. add one undeclared token;
6. add one geographic coordinate;
7. add one distance-only record;
8. add one pair continuing across checkpoints.

## 15. Definition of done

Mark the release complete when:

- all critical tests pass;
- raw value fidelity passes;
- both sample pairs render;
- diagrams load;
- lineage works;
- token-free mode works;
- mobile works;
- source audit and README exist;
- known limits appear honestly.
```

---

# FILE: `proto_path_web_prompt_package/06_CONTENT_INGESTION_GUIDE.md`

- Size: `4913` bytes
- SHA-256: `af04a56f7d9866be0e342ea1430093457c0c6403511ee84978fabc75560c1079`

```markdown
# CONTENT INGESTION GUIDE

## 1. Unit of publication

Publish one complete unit per:

```text
Situation + Body Impulse
```

Do not upload a diagram before its pair record exists.

Do not create a pair without a source reference unless the score explicitly uses a non-Mapillary source.

## 2. Required fields for one pair

```text
pair ID
score ID
phase ID
checkpoint ID
source feature ID
Data Provocation ID
Situation ID and code
Situation category
Situation text
Body Impulse ID and code
Impulse token
Body action
anatomical locus
Spatial Output
residual
diagram path
sequence position
previous pair
next pair
```

## 3. Asset naming

Use lowercase kebab-case.

Pattern:

```text
st-{situation-code}__rt-{response-code}.png
```

Example:

```text
st-c1-3-1__rt-c1-3-1.png
st-c1-3-2__rt-c1-3-2.png
```

Do not use spaces.

Do not use generic names such as:

```text
image1.png
final-final.png
new-diagram.png
```

## 4. Source ingestion

### Step 1 — Preserve raw file

Store the source file unchanged:

```text
public/assets/data/raw/
```

### Step 2 — Normalize

Create a normalized source-feature record.

Never remove the original record.

### Step 3 — Validate

Check:

- stable ID;
- source file;
- raw value;
- feature type;
- coordinates;
- distance;
- duplicate status.

### Step 4 — Link Data Provocation

One Data Provocation may point to one or more source records.

### Step 5 — Link Situation

The Situation must include:

- code;
- category;
- full spatial condition;
- DP references;
- object tokens;
- active vectors.

### Step 6 — Link Body Impulse

The Body Impulse must include:

- code;
- token;
- full body action;
- Situation reference;
- anatomical loci;
- Spatial Output reference.

### Step 7 — Add output and residue

Separate:

```text
immediate output
residual state
```

### Step 8 — Add diagram

Place image in:

```text
public/assets/diagrams/
```

Add alt text.

### Step 9 — Add sequence

Define:

- previous pair;
- next pair;
- active frames;
- duration.

### Step 10 — Run integrity checks

```bash
npm run check:data
npm test
```

## 5. Extraction worksheet

Use this worksheet before editing JSON:

```md
# Pair

PAIR ID:

## Source

SOURCE FILE:
SOURCE TYPE:
RAW VALUE:
COORDINATE:
DISTANCE:
SOURCE RECORD ID:

## Data Provocation

CODE:
VERBATIM TEXT:
SOURCE REFERENCES:

## Situation

CODE:
TITLE:
CATEGORY:
SPATIAL CONDITION:
OBJECT TOKENS:
ACTIVE VECTORS:

## Body Impulse

CODE:
TITLE:
IMPULSE:
BODY ACTION:
ANATOMICAL LOCI:
KINETIC QUALITIES:

## Spatial Output

LABEL:
DESCRIPTION:
RESIDUE:

## Diagram

FILE:
ALT TEXT:
HOTSPOTS VERIFIED: YES / NO

## Sequence

PREVIOUS PAIR:
NEXT PAIR:
FRAME TITLES:
```

## 6. Human review gates

### Gate A — Source fidelity

Confirm raw value and measurements.

### Gate B — Score fidelity

Confirm code, category, and complete sentence.

### Gate C — Body fidelity

Confirm anatomical locus, impulse, and output.

### Gate D — Diagram fidelity

Confirm the image matches the pair.

### Gate E — Continuity

Confirm previous and next pair.

A pair stays `draft` until all gates pass.

## 7. Adding a new architectural board

For each new board:

1. assign pair ID;
2. use matching file name;
3. write alt text;
4. attach width and height;
5. leave hotspot manifest `null` unless verified;
6. update pair;
7. validate;
8. inspect on desktop and mobile.

## 8. Adding another city dataset

The engine should accept a new source dataset without rewriting the score UI.

Required dataset metadata:

```json
{
  "id": "dataset-city-name",
  "name": "City dataset name",
  "city": "City",
  "sourceFile": "file.json",
  "schemaVersion": "1.0",
  "recordCount": 0,
  "valueTypeCount": 0
}
```

Keep city source and score interpretation separate.

A new city may reuse the same taxonomy while producing different pairs.

## 9. Batch ingestion

For many pairs:

1. ingest 10–20 pairs;
2. run validation;
3. resolve warnings;
4. inspect asset coverage;
5. inspect sequence continuity;
6. publish batch;
7. record version.

Do not load an entire unreviewed score into production at once.

## 10. Versioning

Add:

```text
contentVersion
schemaVersion
sourceParserVersion
updatedAt
reviewedBy
```

Do not use modification time as proof of semantic freshness.

## 11. Common failures

### Failure: diagram linked to wrong pair

Prevention:

- pair ID in file name;
- pair ID in metadata;
- visible code check in QA.

### Failure: source value cleaned

Prevention:

- immutable raw record;
- exact-value test.

### Failure: coordinate invented from distance

Prevention:

- `coordinate: null`;
- stage-axis distance stored separately.

### Failure: Situation and Body Impulse collapsed into one text block

Prevention:

- separate entities and IDs;
- explicit lineage edge.

### Failure: sequence loses residual state

Prevention:

- carry residue into the next pair;
- render residual in timeline transition.
```

---

# FILE: `proto_path_web_prompt_package/07_PLATFORM_ADAPTERS.md`

- Size: `5147` bytes
- SHA-256: `01e4b38ea81aa6e1db773f8658ac7e4070f093314c1acf8b87db72e457665ee1`

```markdown
# PLATFORM ADAPTERS

## A. Google Antigravity

Use Antigravity when you want an agent to work directly inside a repository, run commands, inspect files, test, and iterate.

### Initial instruction

```text
Create a new project workspace named proto-path-web.

Read every attached Markdown file before writing code.

Treat 01_MASTER_BUILD_PROMPT_PROTO_PATH_WEB.md as the primary product and engineering instruction.

Treat 03_DATA_CONTRACT_SCHEMA_AND_SAMPLE.md as the canonical domain contract.

Follow 04_IMPLEMENTATION_PLAN_AND_TASKS.md in order.

Run the application and tests. Fix failures before reporting completion.

Do not stop after generating a plan or mockup.
```

### Recommended execution messages

First message:

```text
Perform Phase 0 and Phase 1 only. Report the source audit, proposed repository tree, and any missing assets. Then scaffold the project and verify that the dev server and production build work.
```

Second message:

```text
Continue with Phase 2. Implement the canonical domain types, Zod validation, local JSON repository, selectors, sample data, and unit tests. Do not build final UI until data integrity passes.
```

Third message:

```text
Continue with Phase 3 and Phase 4. Build the synchronized explorer, SVG stage plan, body study, diagram viewer, sequence timeline, and compare mode. Run all relevant tests.
```

Fourth message:

```text
Complete Phase 5 and Phase 6. Build dataset import, method page, exhibition mode, accessibility, responsive layouts, error states, and final QA. Run the app and provide the final report.
```

### Agent boundaries

Tell parallel agents:

```text
The domain contract owned by the data agent cannot be changed by UI agents without review.
```

## B. Google AI Studio Build Mode

Use Build Mode for a prompt-led web prototype or full-stack app draft.

### Initial prompt

Attach:

- all Markdown files;
- PDF score;
- raw JSON sample;
- both diagram images.

Then paste:

```text
Build the web application described in 01_MASTER_BUILD_PROMPT_PROTO_PATH_WEB.md.

Use 03_DATA_CONTRACT_SCHEMA_AND_SAMPLE.md as the exact content and data contract.

Start with a working client-side MVP using bundled JSON. The app must run without a Mapillary token.

Create the complete application, not a static mockup. Include routing, interactions, lineage highlighting, image zoom, sequence playback, compare mode, responsive layout, and error states.

After generation, inspect the preview and fix runtime and layout issues.
```

### Iteration prompt

```text
Audit the current preview against 05_QA_ACCEPTANCE_TESTS.md. Produce a failure list. Fix all critical and high-severity failures. Re-run the preview after each fix.
```

## C. Firebase Studio App Prototyping

Use Firebase Studio for a browser-based prototype and later deployment.

### Initial prompt

```text
Prototype a responsive web application from the attached Proto Path specification.

Use local JSON for the MVP.

Do not add authentication, Firestore, or cloud storage during the first pass.

Build the synchronized explorer first:
Mapillary source → Data Provocation → Situation → Body Impulse → Spatial Output → Architectural Diagram.

Include the two initial notation pairs and the Freeze-to-Glitch sequence.

After the first preview works, prepare the architecture so a Firebase repository can replace the local JSON repository later.
```

### Backend expansion prompt

Use only after the local MVP works:

```text
Add an optional Firebase repository implementation behind the existing repository interface.

Keep local JSON mode available.

Do not alter the domain types.

Store derived notation records separately from immutable source records.

Add security rules and document the data model.
```

## D. Universal repair prompt

Use when the generated app looks like a generic dashboard:

```text
Refactor the visual design.

Remove colorful KPI cards, glassmorphism, large rounded panels, decorative gradients, stock photography, and generic SaaS-dashboard styling.

Return to an architectural analytical drawing language:
white paper, black linework, subtle gray grid, one muted red-orange accent, square nodes, outlined checkpoints, double-line linear objects, measured distances, restrained typography, and connected lineage lines.

Keep all functionality.
```

## E. Universal data-fidelity prompt

Use when the agent starts rewriting source content:

```text
Audit all content against the attached source.

Restore raw values exactly.

Separate source records from derived interpretation.

Replace invented values with null and a visible missing-data state.

Ensure every Situation, Body Impulse, Spatial Output, and diagram points to a valid source lineage.
```

## F. Universal completion prompt

```text
Do not report completion yet.

Run:
- production build;
- unit tests;
- end-to-end tests;
- data integrity validation;
- keyboard review;
- token-free Mapillary fallback;
- missing-image test;
- mobile preview.

Fix critical failures.

Then provide:
- repository tree;
- commands run;
- test results;
- screenshots or preview;
- known limitations;
- next recommended content batch.
```
```

---

# FILE: `proto_path_web_prompt_package/PROTO_PATH_WEB_E2E_ALL_IN_ONE.md`

- Size: `55319` bytes
- SHA-256: `7bf094fb9de868ce120be16304dc95a0590ba5501a7554679bd0a650b0049e38`

```markdown
# PROTO PATH WEB — END-TO-END ALL-IN-ONE PROMPT

## PRIMARY BUILD INSTRUCTION

# MASTER BUILD PROMPT — PROTO PATH INTERACTIVE WEB

You are a senior product engineer, creative technologist, information architect, and data-visualization designer.

Build a production-quality interactive web application titled:

# PROTO PATH — DATA TO BODY / ARCHITECTURAL STAGE NOTATION

## 1. Product objective

Create a web application that makes one transformation chain visible and traceable:

```text
MAPILLARY RAW FEATURE
→ DATA PROVOCATION
→ SITUATION / SPATIAL NOTATION
→ BODY IMPULSE / BODY SCORE
→ SPATIAL OUTPUT / RESIDUAL
→ ARCHITECTURAL PERFORMANCE DIAGRAM
```

The application must allow a visitor to move continuously between raw urban data, the score notation, the body action, and the generated architectural diagram.

Do not build a generic image gallery.

Do not separate the map, text, and diagrams into unrelated pages.

Every visible item must remain attached to the same notation-pair identity and provenance chain.

## 2. Primary audiences

Design for:

- theatre directors;
- choreographers;
- scenographers;
- performers;
- researchers;
- curators;
- exhibition visitors who have not read the full score.

A new visitor should understand the active transformation within 30 seconds.

A researcher should be able to inspect raw values and lineage without losing the visual context.

## 3. Core conceptual model

Treat one `Situation + Body Impulse` pair as the smallest complete scene unit.

Each notation pair contains:

```text
source dataset
raw feature record
data provocation
situation
body impulse
spatial output
residual state
diagram asset
sequence frames
lineage edges
```

Examples included in the initial dataset:

```text
ST.C1.3.1 — Authority Interruption
RT.C1.3.1 — Freeze Response
```

```text
ST.C1.3.2 — Conflicting Vectors
RT.C1.3.2 — Glitch Response
```

These two pairs form a continuous sequence:

```text
FORWARD PULL
→ AUTHORITY INTERRUPTION
→ FREEZE
→ HELD VECTOR CONFLICT
→ WRIST AND SHOULDER TREMOR
→ GLITCH
```

## 4. Non-negotiable data rules

1. Preserve every raw Mapillary value exactly.
2. Never overwrite imported source records.
3. Store interpretation in separate derived fields.
4. Every derived statement must point back to one or more source IDs.
5. Never invent coordinates.
6. Use `null` when the source gives distance but no coordinate.
7. Display missing content visibly.
8. Every diagram asset must point to one notation-pair ID.
9. Every notation-pair page must expose its provenance.
10. A user must be able to switch between:
    - interpreted view;
    - raw view;
    - lineage view.

## 5. Technical direction

Build a client-first web application with clean separation between data, domain logic, and presentation.

Preferred stack:

- React
- TypeScript with strict mode
- Vite
- Tailwind CSS
- Zod for runtime schema validation
- Zustand or an equally small state store
- D3 only for lineage links, force relations, and custom SVG diagrams
- MapLibre GL for the spatial map
- Framer Motion for restrained transitions
- Vitest for unit tests
- Playwright for critical end-to-end tests

Use a local JSON repository for the first release.

Prepare a repository interface so local JSON can later be replaced by Firebase, Supabase, or another backend without rewriting UI components.

The application must run without a Mapillary access token.

Optional live Mapillary media may activate when this environment variable exists:

```text
VITE_MAPILLARY_ACCESS_TOKEN
```

Never hardcode a token.

When a token is absent:

- render local coordinates and map markers when coordinates exist;
- show the raw feature metadata;
- show a clear `LIVE MAPILLARY MEDIA UNAVAILABLE` state;
- keep every other feature working.

## 6. Required routes

Create these routes:

```text
/
```

Landing page and project orientation.

```text
/explore
```

Main synchronized explorer.

```text
/score/:scoreId
```

Score overview, bounds, nodes, phases, checkpoints, and pair list.

```text
/notation/:pairId
```

Deep-link view for one Situation + Body Impulse pair.

```text
/dataset
```

Dataset browser, filters, raw JSON inspection, and import.

```text
/method
```

Method framework, MFI, taxonomy, reading chain, and legend.

```text
/exhibition
```

Full-screen guided playback for installation or public presentation.

## 7. Main synchronized explorer

Build the `/explore` page as the primary experience.

### Desktop layout

Use a wide architectural board with four coordinated regions:

```text
TOP BAR
LEFT SOURCE PANEL | CENTER TRANSFORMATION SPINE | RIGHT STAGE + BODY PANEL
BOTTOM SEQUENCE TIMELINE
```

Suggested width distribution:

```text
left 26%
center 22%
right 52%
```

### Top bar

Include:

- project title;
- score selector;
- checkpoint selector;
- notation-pair selector;
- view mode:
  - Explore
  - Raw
  - Lineage
  - Exhibition
- compare toggle;
- play / pause;
- previous / next pair;
- fullscreen;
- language toggle prepared for EN / ID;
- data status indicator.

### Left source panel

Show:

1. dataset identity;
2. Mapillary map or local spatial view;
3. feature marker;
4. source type;
5. raw value;
6. coordinate or distance;
7. raw JSON drawer;
8. source-file name;
9. provenance status.

Required interaction:

- hovering a feature highlights its Data Provocation node;
- clicking opens raw JSON;
- switching to raw mode must not change the active pair;
- the current source marker stays visible while reading derived layers.

### Center transformation spine

Show the transformation as connected cards:

```text
01 RAW FEATURE
02 DATA PROVOCATION
03 SITUATION
04 BODY IMPULSE
05 SPATIAL OUTPUT
06 RESIDUAL
```

Each card includes:

- ID;
- category or impulse token;
- concise primary text;
- source references;
- status;
- expand action.

Use visible connector lines between cards.

Connector behavior:

- neutral: thin gray;
- active lineage: orange-red;
- unresolved: dashed;
- invalid: warning pattern.

Clicking any card must:

- highlight related source marker;
- highlight related stage object;
- highlight active anatomical locus;
- focus the matching section in the architectural diagram;
- update the sequence timeline.

### Right stage and body panel

Use tabs inside one continuous panel:

```text
STAGE PLAN
BODY STUDY
ARCHITECTURAL BOARD
FORCE RELATION
```

#### Stage Plan

Render a simplified SVG plan generated from structured data:

- Node A;
- Node B;
- primary axis;
- linear object;
- checkpoint;
- regulatory or obstacle object;
- forward vector;
- external pressure vector;
- conflict point;
- pressure field;
- active performer position.

The SVG must remain useful even when no generated diagram image exists.

#### Body Study

Render:

- front or three-quarter study;
- side elevation;
- active anatomical loci;
- force direction;
- output state;
- residual state.

Use simple neutral line figures.

Do not use expressive theatrical poses.

#### Architectural Board

Display the corresponding generated diagram image.

Provide:

- fit;
- actual size;
- zoom;
- pan;
- fullscreen;
- image metadata;
- notation-pair ID;
- asset status;
- alternate text.

Add transparent interactive hotspots only when hotspot metadata exists.

Do not guess hotspot coordinates.

#### Force Relation

Render an abstract force diagram:

- body as junction;
- forward drive;
- prohibition or obstacle pressure;
- fixed contact;
- active joints;
- stable axes;
- unresolved force.

### Bottom sequence timeline

Show the temporal chain across frames.

For the initial Authority Interruption sequence:

```text
01 FORWARD PULL
02 PROHIBITION ENTERS
03 FREEZE
04 VECTOR CONFLICT
05 GLITCH OUTPUT
```

Features:

- clickable frames;
- play / pause;
- step forward / backward;
- autoplay speed:
  - 0.5×
  - 1×
  - 2×
- keyboard:
  - left / right;
  - space;
  - escape;
- current-frame explanation;
- reduced-motion support.

## 8. Compare mode

Allow comparison of two notation pairs.

Initial supported comparison:

```text
ST.C1.3.1 + RT.C1.3.1
versus
ST.C1.3.2 + RT.C1.3.2
```

Compare:

- source record;
- situation category;
- active impulse;
- anatomical locus;
- spatial output;
- residual;
- diagram image;
- sequence position.

Use synchronized zoom for both architectural boards.

Make differences visible through annotation, not through a large spreadsheet.

## 9. Dataset page

Create a dataset browser with:

- file selector;
- type filter;
- raw-value filter;
- coordinate availability filter;
- linked / unlinked filter;
- notation-pair count;
- import JSON action;
- validation report;
- export normalized JSON action.

Import behavior:

1. Read file locally.
2. Validate structure.
3. Never mutate the original record.
4. Create a normalized copy.
5. Show:
   - accepted records;
   - rejected records;
   - warning records;
   - duplicate IDs;
   - missing fields.
6. Require explicit confirmation before saving normalized data in browser storage.

Do not upload files to an external server in the MVP.

## 10. Method page

Explain the framework through visual modules:

```text
DATASET
MFI — MAPILLARY FEATURE INDEX
DATA AS PERFORMANCE
LIVING TEXT
READING CHAIN
OBJECT MATRIX
STIMULUS → IMPULSE TAXONOMY
ANATOMICAL LOCUS
SPATIAL OUTPUT
REFERENCE CODES
```

Use the following reading chain:

```text
DATA PROVOCATION
→ STIMULUS
→ SITUATION
→ BODY IMPULSE
→ SPATIAL OUTPUT
```

Keep original technical tokens visible.

Add plain-language explanations beneath them.

## 11. Landing page

The landing page must open with one animated but restrained transformation:

```text
regulatory--no-right-turn--g1
```

The raw string moves through five visual states:

```text
raw record
→ authority condition
→ prohibition vector
→ frozen body axis
→ architectural diagram
```

Use scroll or click progression.

Include:

- project title;
- one-sentence explanation;
- Enter Explorer;
- View Method;
- Exhibition Mode;
- current scores;
- dataset summary;
- diagram count.

Do not use a hero photograph.

## 12. Exhibition mode

Build a fullscreen mode suitable for projection.

Features:

- dark or white presentation background toggle;
- large diagram;
- minimal labels;
- autoplay sequence;
- active raw value;
- active Situation;
- active Body Impulse;
- active output;
- progress indicator;
- keyboard control;
- optional loop;
- no editor controls.

Keep all transitions restrained and readable from a distance.

## 13. Visual system

Follow an architectural analytical drawing language.

### Palette

```text
paper: #F7F7F3
white: #FFFFFF
ink: #111111
muted ink: #505050
grid: #D9D9D3
panel: #EFEFEB
accent: #E6461A
warning: #A6321B
```

Use one primary accent only.

### Typography

Use system-safe or open web fonts.

Preferred pairing:

- condensed sans for labels and codes;
- neutral sans for body copy;
- monospace for raw data.

Do not include font files in the repository unless licensing and distribution permit it.

### Lines

```text
hairline: 1px
standard: 1.5px
active: 2px
axis: 2px
linear object: double line
unresolved: dashed
pressure: hatched or translucent
```

### Shape language

```text
node: solid square
checkpoint: outlined circle
regulatory object: outlined circle with R or semantic icon
conflict: circle with crossed vectors
active anatomical locus: accent ring
tremor: short zigzag and ghost outline
residual: dotted continuation
```

### Motion

- 120–240 ms for interface feedback;
- 500–900 ms for sequence transitions;
- no parallax;
- no floating decorative particles;
- no simulated camera shake;
- respect `prefers-reduced-motion`.

## 14. Responsive behavior

### Desktop

Show all coordinated panels.

### Tablet

Use:

```text
source + transformation
stage + body
timeline
```

### Mobile

Use a vertical chain:

```text
pair header
raw feature
data provocation
situation
body impulse
stage plan
body study
diagram
spatial output
timeline
```

Keep the active pair selector sticky.

Do not shrink the architectural diagram until text becomes unreadable. Use a pan-and-zoom container.

## 15. Accessibility

Meet WCAG 2.2 AA where practical.

Required:

- keyboard navigation;
- visible focus;
- semantic headings;
- button labels;
- alt text;
- no information carried by color alone;
- minimum contrast;
- reduced motion;
- screen-reader description of each transformation;
- skip links;
- tab order matching visual order.

Every diagram needs a structured text alternative:

```text
source
situation
body impulse
anatomical locus
spatial output
residual
```

## 16. Initial content

Seed the app with two complete notation pairs.

### Pair A

```text
pairId: pair-c1-3-1
situation: ST.C1.3.1 — Authority Interruption
bodyImpulse: RT.C1.3.1 — Freeze Response
rawValue: regulatory--no-right-turn--g1
distance: 12.15
category: AUTHORITY
impulse: FREEZE
anatomicalLocus: spine, pelvis
spatialOutput: locked axis, rigid posture
residual: grip and linear tension maintained
diagram: /assets/diagrams/st-c1-3-1__rt-c1-3-1.png
```

### Pair B

```text
pairId: pair-c1-3-2
situation: ST.C1.3.2 — Conflicting Vectors
bodyImpulse: RT.C1.3.2 — Glitch Response
rawValue: regulatory--no-right-turn--g1
distance: 12.15
category: PARADOX
impulse: GLITCH
anatomicalLocus: wrist, shoulder
spatialOutput: tremor loop
residual: grip, drive, and primary axis remain active
diagram: /assets/diagrams/st-c1-3-2__rt-c1-3-2.png
```

Both pairs reference the same raw feature while producing different stages in the response sequence.

The UI must make this shared source visible.

## 17. Required repository structure

Use this as the baseline:

```text
proto-path-web/
  public/
    assets/
      data/
        notation-pairs.json
        scores.json
        taxonomies.json
        mapillary-points.sample.json
        mapillary-traffic.sample.json
      diagrams/
        st-c1-3-1__rt-c1-3-1.png
        st-c1-3-2__rt-c1-3-2.png
  src/
    app/
      router.tsx
      providers.tsx
    components/
      architectural-board/
      body-study/
      dataset-browser/
      lineage/
      map/
      method/
      navigation/
      stage-plan/
      timeline/
    domain/
      schemas/
      selectors/
      transforms/
      types/
      validation/
    pages/
      LandingPage.tsx
      ExplorePage.tsx
      ScorePage.tsx
      NotationPage.tsx
      DatasetPage.tsx
      MethodPage.tsx
      ExhibitionPage.tsx
    repositories/
      notationRepository.ts
      localJsonRepository.ts
    state/
      explorerStore.ts
    styles/
      tokens.css
      globals.css
    tests/
  .env.example
  README.md
  package.json
  tsconfig.json
  vite.config.ts
```

## 18. Error and empty states

Implement explicit states:

```text
NO PAIR SELECTED
SOURCE RECORD MISSING
RAW FILE NOT LOADED
DIAGRAM ASSET MISSING
LIVE MAPILLARY MEDIA UNAVAILABLE
INVALID LINEAGE
UNDECLARED TOKEN
UNRESOLVED REFERENCE
```

Each state must explain the next available action.

Never replace a missing item with invented content.

## 19. Testing requirements

Write tests for:

- schema validation;
- source-to-pair lookup;
- shared-source lineage;
- raw values preserved exactly;
- missing coordinates accepted as `null`;
- notation navigation;
- compare mode;
- sequence playback;
- diagram missing state;
- token-free Mapillary fallback;
- keyboard navigation.

Run tests and fix failures before declaring completion.

## 20. Performance

Targets for the sample dataset:

- first contentful paint under 2.5 seconds on a normal laptop;
- no loading of full 110k-point datasets on initial page load;
- lazy-load raw files;
- virtualize long dataset tables;
- lazy-load diagram images;
- avoid unnecessary map rerenders;
- use Web Worker processing for large imports when needed.

## 21. Security and privacy

- never hardcode API tokens;
- never expose server secrets;
- validate imported JSON;
- render raw strings safely;
- do not execute imported content;
- keep MVP imports local;
- provide `.env.example`;
- document token scope and removal;
- do not send user files to external services without explicit configuration.

## 22. Required deliverables

Produce:

1. working source code;
2. initial two-pair dataset;
3. responsive UI;
4. local JSON repository;
5. generated SVG stage plan;
6. diagram image viewer;
7. lineage interaction;
8. compare mode;
9. exhibition mode;
10. import validation;
11. tests;
12. README;
13. `.env.example`;
14. screenshots or preview;
15. brief architecture note.

## 23. Execution protocol

Follow this order:

1. Inspect every attached source file.
2. Report the files found.
3. Extract only the data required for the initial two-pair MVP.
4. Present a concise implementation plan.
5. Scaffold the project.
6. Build the domain schemas.
7. Seed and validate sample content.
8. Build the synchronized explorer.
9. Build the diagram viewer.
10. Build the generated SVG stage plan.
11. Build timeline and compare mode.
12. Build dataset import.
13. Build method and exhibition pages.
14. Test.
15. Fix.
16. Run the app.
17. Present the final file tree and usage steps.

Do not stop after producing mockups.

Do not return only code snippets.

Create the actual runnable project.

## 24. Completion statement

Only report completion when:

- the project runs;
- the two initial pairs render;
- raw and derived data stay connected;
- the architectural images load;
- the shared source is visible;
- the Freeze-to-Glitch transition works;
- tests pass;
- missing-token mode works.


---

## UI AND INFORMATION ARCHITECTURE

# INFORMATION ARCHITECTURE + UI SPEC

## 1. Experience principle

The interface should behave like a living analytical drawing.

A visitor selects one notation pair. Every panel responds to the same identity:

```text
pairId
sourceFeatureId
dataProvocationId
situationId
bodyImpulseId
spatialOutputId
diagramAssetId
```

No panel may drift to a different pair.

## 2. Global navigation

```text
PROTO PATH
Explore
Scores
Dataset
Method
Exhibition
About
```

Utility controls:

```text
EN / ID
Fullscreen
Data status
Help
```

## 3. Landing page

### 3.1 Header

Left:

```text
PROTO PATH
WHERE ARE YOU DEPART FROM?
```

Right:

```text
ENTER EXPLORER
METHOD
EXHIBITION MODE
```

### 3.2 Intro transformation

Use one horizontal chain:

```text
regulatory--no-right-turn--g1
→ [AUTHORITY]
→ PROHIBITION VECTOR
→ [FREEZE]
→ LOCKED AXIS
→ [GLITCH]
→ TREMOR LOOP
```

Interactions:

- hover reveals source or target ID;
- click enters the active pair;
- keyboard moves through nodes.

### 3.3 Project summary

Use four compact indicators:

```text
2 SCORES
2 SOURCE DATASETS
130 MFI VALUE TYPES
N NOTATION PAIRS
```

The pair count must be calculated from loaded data.

Do not hardcode a number that will become stale.

## 4. Explore page

### 4.1 Fixed top bar

Height: 64–72 px.

Sections:

```text
PROJECT
SCORE
CHECKPOINT
PAIR
MODE
PLAYBACK
STATUS
```

Pair selector display:

```text
ST.C1.3.1
+
RT.C1.3.1
```

### 4.2 Source panel

Order:

1. `SOURCE DATA`
2. Map
3. raw-value badge
4. metadata grid
5. raw JSON toggle
6. lineage status

Metadata grid:

```text
SOURCE FILE
FEATURE TYPE
RAW VALUE
COORDINATE
DISTANCE
LINKED PAIRS
VALIDATION
```

Coordinates must show:

```text
NOT PROVIDED
```

when absent.

### 4.3 Transformation spine

Each transformation card uses this pattern:

```text
STEP NUMBER
TYPE
REFERENCE CODE
CONTROLLED TOKEN
PRIMARY SENTENCE
SOURCE LINK COUNT
STATUS
```

Example:

```text
03
SITUATION
ST.C1.3.2
[PARADOX]
The prohibition conflicts with the forward pull...
1 SOURCE
VALID
```

Expanded view:

- complete text;
- source references;
- linked object;
- linked anatomical locus;
- linked spatial output;
- copy ID action.

### 4.4 Stage panel

Tabs:

```text
PLAN
BODY
BOARD
FORCES
```

#### PLAN tab

Default scale:

```text
Node A = 0 m
Checkpoint = 12.15 m
Node B = 15 m
```

Visual order:

```text
stage boundary
grid
axis
linear object
nodes
checkpoint
performer
object
vectors
pressure
callouts
```

#### BODY tab

Use front and side views.

Locus selector:

```text
ALL
SPINE
PELVIS
WRIST
SHOULDER
```

Clicking a locus highlights:

- related Body Impulse text;
- related output;
- matching board hotspot when available.

#### BOARD tab

Controls:

```text
FIT
100%
ZOOM IN
ZOOM OUT
RESET
FULLSCREEN
ALT TEXT
METADATA
```

#### FORCES tab

Show a force relation diagram plus a textual matrix:

```text
FORCE
SOURCE
DIRECTION
BODY ENTRY
STATE
OUTPUT
```

### 4.5 Sequence timeline

Desktop height: 180–240 px.

Frame card:

```text
NUMBER
TITLE
THUMBNAIL
ACTIVE CODE
ONE-LINE ACTION
```

Current frame uses a 2 px accent border.

Completed frames use solid black markers.

Future frames use outlined markers.

## 5. Compare mode

Use a split canvas:

```text
PAIR A | DIFFERENCE SPINE | PAIR B
```

The difference spine shows only changed fields:

```text
CATEGORY
IMPULSE
ANATOMICAL LOCUS
BODY ACTION
SPATIAL OUTPUT
RESIDUAL
```

Initial comparison:

```text
AUTHORITY / FREEZE
versus
PARADOX / GLITCH
```

Shared fields should appear once:

```text
raw feature
distance
regulatory object
primary axis
linear object
```

## 6. Score page

Header:

```text
SCORE 01
LENGKONG / PALASARI / KOSAMBI
DENSE SIGNAGE AND COMMERCIAL AGGRESSION
```

Sections:

1. coordinate bounds;
2. node declaration;
3. phase rail;
4. checkpoint map;
5. notation-pair list;
6. residue chain;
7. asset coverage.

Phase rail:

```text
PHASE 01 — DEPARTURE
PHASE 02 — LINEAR FLOW
PHASE 03 — ITERATION
PHASE 04 — RESIDUAL
```

## 7. Dataset page

Layout:

```text
FILTER SIDEBAR | VIRTUALIZED RECORD TABLE | INSPECTOR
```

Table columns:

```text
SOURCE ID
TYPE
RAW VALUE
COORDINATE
DISTANCE
LINKED PAIRS
STATUS
```

Inspector tabs:

```text
RAW
NORMALIZED
LINEAGE
VALIDATION
```

Import panel:

```text
DROP JSON
CHOOSE FILE
VALIDATE
NORMALIZE
EXPORT REPORT
```

## 8. Method page

Use one vertical annotated system:

```text
DATASET
↓
MFI
↓
DATA PROVOCATION
↓
SITUATION
↓
BODY IMPULSE
↓
SPATIAL OUTPUT
```

Taxonomy tables should support:

- search;
- linked examples;
- token validity;
- show usage count.

## 9. Exhibition page

Default appearance:

- no browser-like sidebars;
- no dataset table;
- large board image or generated plan;
- left-bottom raw value;
- center-bottom situation;
- right-bottom body impulse;
- minimal progress rail.

Keys:

```text
SPACE = play / pause
LEFT = previous
RIGHT = next
F = fullscreen
L = loop
I = information
ESC = exit overlay
```

## 10. Design tokens

```css
:root {
  --paper: #f7f7f3;
  --surface: #ffffff;
  --panel: #efefeb;
  --ink: #111111;
  --ink-muted: #505050;
  --grid: #d9d9d3;
  --accent: #e6461a;
  --accent-soft: rgba(230, 70, 26, 0.12);
  --warning: #a6321b;

  --line-hairline: 1px;
  --line-standard: 1.5px;
  --line-active: 2px;

  --radius-small: 2px;
  --radius-medium: 4px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
}
```

Avoid large rounded cards.

Avoid glassmorphism.

Avoid gradients except subtle pressure or vibration fields.

## 11. Label system

### Structural labels

```text
ZONE 1
ZONE 2
ZONE 3
```

### Data labels

Monospace:

```text
regulatory--no-right-turn--g1
DP.C1.3.1
```

### Score labels

Condensed uppercase:

```text
AUTHORITY INTERRUPTION
GLITCH RESPONSE
```

### Body copy

Neutral sans-serif.

Keep line length under 75 characters in reading panels.

## 12. Interaction states

### Neutral

Gray connectors and black text.

### Hover

Accent ring around the active entity.

### Selected

Accent line travels across related panels.

### Invalid

Warning icon plus explicit error text.

### Missing

Dashed empty container.

### Loading

Skeleton aligned to actual component geometry.

Do not use spinning loaders as the only feedback.

## 13. Data lineage interaction

When selecting `regulatory--no-right-turn--g1`:

1. marker enlarges;
2. DP card activates;
3. related Situation cards activate;
4. related Body Impulse cards activate;
5. stage regulatory object activates;
6. active body loci activate;
7. relevant diagram asset becomes current;
8. sequence frame jumps to the correct position.

When selecting `RT.C1.3.2`:

1. wrist and shoulder activate;
2. glitch notation activates;
3. spatial output shows tremor loop;
4. raw source remains visible;
5. previous Freeze pair stays available as sequence context.

## 14. Empty states

Use exact microcopy:

```text
DIAGRAM ASSET MISSING
This notation pair has structured score data, but no diagram image has been attached.
```

```text
LIVE MAPILLARY MEDIA UNAVAILABLE
The application is displaying the local source record. Add a valid access token to load live media.
```

```text
COORDINATE NOT PROVIDED
This source records a distance along the stage axis without a geographic coordinate.
```

```text
UNRESOLVED REFERENCE
The score points to a code that is not present in the loaded registry.
```

## 15. Responsive rules

### ≥ 1280 px

Three coordinated columns plus timeline.

### 768–1279 px

Two-column layout:

```text
source + spine
stage + diagram
timeline full width
```

### < 768 px

Vertical reading.

Keep:

- sticky pair header;
- collapsible raw JSON;
- full-width plan;
- pannable board;
- timeline as horizontal scroll.

## 16. Visual exclusions

Do not use:

- dashboard-style colored KPI cards;
- glowing nodes;
- sci-fi interfaces;
- random animated dots;
- saturated multicolor legends;
- decorative map pins without data;
- oversized shadows;
- pill buttons everywhere;
- floating glass panels;
- realistic actor photography;
- stock city photos.


---

## CANONICAL DATA CONTRACT AND SAMPLE

# DATA CONTRACT, TYPES, LINEAGE, AND INITIAL SAMPLE

## 1. Design rule

Keep source data immutable.

Store interpretation as derived entities.

Use stable IDs and explicit references.

## 2. TypeScript domain types

```ts
export type ValidationStatus =
  | "valid"
  | "warning"
  | "invalid"
  | "unresolved";

export type SourceKind =
  | "mapillary-feature"
  | "score-bounds"
  | "manual-source";

export type SituationCategory =
  | "SYSTEM"
  | "SPATIAL_MATRIX"
  | "MASS"
  | "ELEVATION"
  | "AUTHORITY"
  | "SEMANTIC"
  | "PARADOX";

export type BodyImpulseToken =
  | "INJECTION"
  | "ACCELERATION"
  | "COMPRESSION"
  | "ASYMMETRIC"
  | "FREEZE"
  | "GLITCH"
  | "FIXATION"
  | "CONSTANT";

export type AnatomicalLocus =
  | "head"
  | "eyes"
  | "cervical-spine"
  | "shoulder"
  | "clavicle"
  | "sternum"
  | "scapula"
  | "chest"
  | "elbow"
  | "wrist"
  | "fingers"
  | "palm"
  | "spine"
  | "lumbar"
  | "pelvis"
  | "hip"
  | "knee"
  | "ankle"
  | "sole"
  | "foot"
  | "centre-of-gravity"
  | "motor-nerve";

export interface GeoPoint {
  lon: number;
  lat: number;
}

export interface SourceFeature {
  id: string;
  sourceKind: SourceKind;
  sourceDatasetId: string;
  sourceFile: string;
  featureType: string;
  rawValue: string;
  coordinate: GeoPoint | null;
  distanceMeters: number | null;
  rawRecord: Record<string, unknown>;
  immutableHash?: string;
  validationStatus: ValidationStatus;
}

export interface DataProvocation {
  id: string;
  code: string;
  sourceFeatureIds: string[];
  sourceLabel: string;
  featureType: string;
  rawValue: string;
  coordinate: GeoPoint | null;
  distanceMeters: number | null;
  verbatimText: string;
  validationStatus: ValidationStatus;
}

export interface Situation {
  id: string;
  code: string;
  checkpointId: string;
  category: SituationCategory;
  title: string;
  spatialCondition: string;
  dataProvocationIds: string[];
  objectTokens: string[];
  activeVectors: string[];
  validationStatus: ValidationStatus;
}

export interface BodyImpulse {
  id: string;
  code: string;
  impulse: BodyImpulseToken;
  title: string;
  bodyAction: string;
  respondsToSituationIds: string[];
  anatomicalLoci: AnatomicalLocus[];
  spatialOutputIds: string[];
  kineticQualities: string[];
  validationStatus: ValidationStatus;
}

export interface SpatialOutput {
  id: string;
  label: string;
  description: string;
  residue: string[];
}

export interface DiagramAsset {
  id: string;
  pairId: string;
  src: string;
  width?: number;
  height?: number;
  alt: string;
  hotspotManifestSrc?: string | null;
  status: "available" | "missing" | "draft";
}

export interface SequenceFrame {
  id: string;
  order: number;
  title: string;
  description: string;
  activeEntityIds: string[];
  durationMs: number;
}

export interface LineageEdge {
  id: string;
  fromId: string;
  toId: string;
  relation:
    | "provokes"
    | "translated_as"
    | "responded_by"
    | "produces"
    | "leaves_residue"
    | "visualized_by"
    | "continues_into";
}

export interface NotationPair {
  id: string;
  scoreId: string;
  phaseId: string;
  checkpointId: string;
  title: string;
  sourceFeatureIds: string[];
  dataProvocationIds: string[];
  situationIds: string[];
  bodyImpulseIds: string[];
  spatialOutputIds: string[];
  diagramAssetId: string | null;
  sequenceFrameIds: string[];
  previousPairId: string | null;
  nextPairId: string | null;
  status: "draft" | "reviewed" | "published";
}
```

## 3. Runtime validation

Create Zod schemas matching the types.

Validation rules:

- all IDs must be unique;
- every reference must resolve;
- `rawValue` cannot be normalized or title-cased;
- `coordinate` may be `null`;
- `distanceMeters` may be `null`;
- at least one of coordinate or distance should exist for a spatial source, otherwise warning;
- one diagram may belong to one pair only;
- one source feature may connect to multiple pairs;
- undeclared Situation category fails validation;
- undeclared Body Impulse token fails validation;
- undeclared anatomical locus raises warning or error according to strict mode;
- lineage cycles allowed only through explicit sequence or iteration relations;
- source-to-derived mutation forbidden.

## 4. Initial sample JSON

```json
{
  "datasets": [
    {
      "id": "dataset-mapillary-traffic-bandung",
      "name": "Mapillary Traffic Bandung",
      "sourceFile": "mapillary-traffic.json",
      "recordCount": 3778,
      "valueTypeCount": 91
    }
  ],
  "scores": [
    {
      "id": "score-01",
      "code": "C1",
      "title": "Lengkong / Palasari / Kosambi Area",
      "character": "Dense signage and commercial aggression",
      "bounds": {
        "lonMin": 107.61,
        "lonMax": 107.625,
        "latMin": -6.93,
        "latMax": -6.905
      },
      "nodes": [
        {
          "id": "node-a",
          "label": "Node A",
          "role": "origin anchor",
          "axisDistanceMeters": 0
        },
        {
          "id": "node-b",
          "label": "Node B",
          "role": "terminal contact",
          "axisDistanceMeters": 15
        }
      ]
    }
  ],
  "sourceFeatures": [
    {
      "id": "source-c1-3-no-right-turn",
      "sourceKind": "mapillary-feature",
      "sourceDatasetId": "dataset-mapillary-traffic-bandung",
      "sourceFile": "mapillary-traffic.json",
      "featureType": "regulatory",
      "rawValue": "regulatory--no-right-turn--g1",
      "coordinate": null,
      "distanceMeters": 12.15,
      "rawRecord": {
        "source": "Mapillary",
        "type": "feature",
        "distance": "±12.15m",
        "feature": "regulatory",
        "value": "regulatory--no-right-turn--g1"
      },
      "validationStatus": "valid"
    }
  ],
  "dataProvocations": [
    {
      "id": "dp-c1-3-1",
      "code": "DP.C1.3.1",
      "sourceFeatureIds": [
        "source-c1-3-no-right-turn"
      ],
      "sourceLabel": "Mapillary",
      "featureType": "regulatory",
      "rawValue": "regulatory--no-right-turn--g1",
      "coordinate": null,
      "distanceMeters": 12.15,
      "verbatimText": "source=Mapillary | type=feature | distance=±12.15m | feature=regulatory | value=\"regulatory--no-right-turn--g1\"",
      "validationStatus": "valid"
    }
  ],
  "situations": [
    {
      "id": "situation-c1-3-1",
      "code": "ST.C1.3.1",
      "checkpointId": "checkpoint-c1-3",
      "category": "AUTHORITY",
      "title": "Authority Interruption",
      "spatialCondition": "[REGULATORY_OBJECT] declares a right-turn prohibition at the edge; the cursor is pressured toward a vector it must register.",
      "dataProvocationIds": [
        "dp-c1-3-1"
      ],
      "objectTokens": [
        "REGULATORY_OBJECT",
        "LINEAR_OBJECT"
      ],
      "activeVectors": [
        "forward-drive",
        "prohibition-pressure"
      ],
      "validationStatus": "valid"
    },
    {
      "id": "situation-c1-3-2",
      "code": "ST.C1.3.2",
      "checkpointId": "checkpoint-c1-3",
      "category": "PARADOX",
      "title": "Conflicting Vectors",
      "spatialCondition": "The prohibition conflicts with the forward pull of [LINEAR_OBJECT]; two vectors demand the body at once.",
      "dataProvocationIds": [
        "dp-c1-3-1"
      ],
      "objectTokens": [
        "REGULATORY_OBJECT",
        "LINEAR_OBJECT"
      ],
      "activeVectors": [
        "forward-drive",
        "prohibition-pressure"
      ],
      "validationStatus": "valid"
    }
  ],
  "bodyImpulses": [
    {
      "id": "body-impulse-c1-3-1",
      "code": "RT.C1.3.1",
      "impulse": "FREEZE",
      "title": "Freeze Response",
      "bodyAction": "Responding to [ST.C1.3.1], the body halts forward drive at the spine and pelvis, generating a locked axis that holds the prohibition as internal torque.",
      "respondsToSituationIds": [
        "situation-c1-3-1"
      ],
      "anatomicalLoci": [
        "spine",
        "pelvis"
      ],
      "spatialOutputIds": [
        "output-locked-axis"
      ],
      "kineticQualities": [
        "arrested-forward-drive",
        "held-tension",
        "grip-maintained"
      ],
      "validationStatus": "valid"
    },
    {
      "id": "body-impulse-c1-3-2",
      "code": "RT.C1.3.2",
      "impulse": "GLITCH",
      "title": "Glitch Response",
      "bodyAction": "Responding to [ST.C1.3.2], the body produces a brief tremor at the wrist and shoulder while grip and drive remain simultaneously active.",
      "respondsToSituationIds": [
        "situation-c1-3-2"
      ],
      "anatomicalLoci": [
        "wrist",
        "shoulder"
      ],
      "spatialOutputIds": [
        "output-tremor-loop"
      ],
      "kineticQualities": [
        "mechanical-tremor",
        "micro-displacement",
        "uncorrected-drift",
        "grip-maintained"
      ],
      "validationStatus": "valid"
    }
  ],
  "spatialOutputs": [
    {
      "id": "output-locked-axis",
      "label": "Locked axis",
      "description": "Forward movement stops while alignment and internal tension remain active.",
      "residue": [
        "rigid posture",
        "mechanical grip maintained",
        "linear object remains under tension"
      ]
    },
    {
      "id": "output-tremor-loop",
      "label": "Tremor loop",
      "description": "Wrist and shoulder vibrate under simultaneous forward drive and prohibition pressure.",
      "residue": [
        "primary axis maintained",
        "mechanical grip maintained",
        "forward drive remains active",
        "no clean correction"
      ]
    }
  ],
  "diagramAssets": [
    {
      "id": "diagram-c1-3-1",
      "pairId": "pair-c1-3-1",
      "src": "/assets/diagrams/st-c1-3-1__rt-c1-3-1.png",
      "alt": "Architectural stage notation board showing Mapillary no-right-turn data translated into authority pressure, a performer freezing on the primary axis, spine and pelvis locking, and grip tension remaining active.",
      "hotspotManifestSrc": null,
      "status": "available"
    },
    {
      "id": "diagram-c1-3-2",
      "pairId": "pair-c1-3-2",
      "src": "/assets/diagrams/st-c1-3-2__rt-c1-3-2.png",
      "alt": "Architectural stage notation board showing the same no-right-turn source producing conflicting vectors and a localized glitch at the wrist and shoulder while grip, drive, and axis remain active.",
      "hotspotManifestSrc": null,
      "status": "available"
    }
  ],
  "sequenceFrames": [
    {
      "id": "frame-forward-pull",
      "order": 1,
      "title": "Forward Pull",
      "description": "The performer pulls the linear object toward Node B.",
      "activeEntityIds": [
        "source-c1-3-no-right-turn"
      ],
      "durationMs": 1000
    },
    {
      "id": "frame-prohibition-enters",
      "order": 2,
      "title": "Prohibition Enters",
      "description": "The authority vector enters the primary stage axis.",
      "activeEntityIds": [
        "dp-c1-3-1",
        "situation-c1-3-1"
      ],
      "durationMs": 1200
    },
    {
      "id": "frame-freeze",
      "order": 3,
      "title": "Freeze",
      "description": "The body arrests forward movement at the spine and pelvis.",
      "activeEntityIds": [
        "body-impulse-c1-3-1",
        "output-locked-axis"
      ],
      "durationMs": 1400
    },
    {
      "id": "frame-vector-conflict",
      "order": 4,
      "title": "Vector Conflict",
      "description": "Forward pull and prohibition pressure remain active at once.",
      "activeEntityIds": [
        "situation-c1-3-2"
      ],
      "durationMs": 1200
    },
    {
      "id": "frame-glitch-output",
      "order": 5,
      "title": "Glitch Output",
      "description": "The wrist and shoulder produce a localized mechanical tremor.",
      "activeEntityIds": [
        "body-impulse-c1-3-2",
        "output-tremor-loop"
      ],
      "durationMs": 1600
    }
  ],
  "notationPairs": [
    {
      "id": "pair-c1-3-1",
      "scoreId": "score-01",
      "phaseId": "phase-c1-2-linear-flow",
      "checkpointId": "checkpoint-c1-3",
      "title": "Authority Interruption / Freeze Response",
      "sourceFeatureIds": [
        "source-c1-3-no-right-turn"
      ],
      "dataProvocationIds": [
        "dp-c1-3-1"
      ],
      "situationIds": [
        "situation-c1-3-1"
      ],
      "bodyImpulseIds": [
        "body-impulse-c1-3-1"
      ],
      "spatialOutputIds": [
        "output-locked-axis"
      ],
      "diagramAssetId": "diagram-c1-3-1",
      "sequenceFrameIds": [
        "frame-forward-pull",
        "frame-prohibition-enters",
        "frame-freeze"
      ],
      "previousPairId": null,
      "nextPairId": "pair-c1-3-2",
      "status": "draft"
    },
    {
      "id": "pair-c1-3-2",
      "scoreId": "score-01",
      "phaseId": "phase-c1-2-linear-flow",
      "checkpointId": "checkpoint-c1-3",
      "title": "Conflicting Vectors / Glitch Response",
      "sourceFeatureIds": [
        "source-c1-3-no-right-turn"
      ],
      "dataProvocationIds": [
        "dp-c1-3-1"
      ],
      "situationIds": [
        "situation-c1-3-2"
      ],
      "bodyImpulseIds": [
        "body-impulse-c1-3-2"
      ],
      "spatialOutputIds": [
        "output-tremor-loop"
      ],
      "diagramAssetId": "diagram-c1-3-2",
      "sequenceFrameIds": [
        "frame-vector-conflict",
        "frame-glitch-output"
      ],
      "previousPairId": "pair-c1-3-1",
      "nextPairId": null,
      "status": "draft"
    }
  ],
  "lineageEdges": [
    {
      "id": "edge-source-dp",
      "fromId": "source-c1-3-no-right-turn",
      "toId": "dp-c1-3-1",
      "relation": "provokes"
    },
    {
      "id": "edge-dp-s1",
      "fromId": "dp-c1-3-1",
      "toId": "situation-c1-3-1",
      "relation": "translated_as"
    },
    {
      "id": "edge-s1-rt1",
      "fromId": "situation-c1-3-1",
      "toId": "body-impulse-c1-3-1",
      "relation": "responded_by"
    },
    {
      "id": "edge-rt1-output1",
      "fromId": "body-impulse-c1-3-1",
      "toId": "output-locked-axis",
      "relation": "produces"
    },
    {
      "id": "edge-pair1-diagram",
      "fromId": "pair-c1-3-1",
      "toId": "diagram-c1-3-1",
      "relation": "visualized_by"
    },
    {
      "id": "edge-dp-s2",
      "fromId": "dp-c1-3-1",
      "toId": "situation-c1-3-2",
      "relation": "translated_as"
    },
    {
      "id": "edge-s2-rt2",
      "fromId": "situation-c1-3-2",
      "toId": "body-impulse-c1-3-2",
      "relation": "responded_by"
    },
    {
      "id": "edge-rt2-output2",
      "fromId": "body-impulse-c1-3-2",
      "toId": "output-tremor-loop",
      "relation": "produces"
    },
    {
      "id": "edge-pair2-diagram",
      "fromId": "pair-c1-3-2",
      "toId": "diagram-c1-3-2",
      "relation": "visualized_by"
    },
    {
      "id": "edge-pair1-pair2",
      "fromId": "pair-c1-3-1",
      "toId": "pair-c1-3-2",
      "relation": "continues_into"
    }
  ]
}
```

## 5. Selector behavior

Implement pure selectors:

```ts
getPairById(pairId)
getSourceFeaturesForPair(pairId)
getDataProvocationsForPair(pairId)
getSituationsForPair(pairId)
getBodyImpulsesForPair(pairId)
getSpatialOutputsForPair(pairId)
getDiagramForPair(pairId)
getPreviousPair(pairId)
getNextPair(pairId)
getLineagePath(entityId)
getPairsSharingSourceFeature(sourceFeatureId)
```

## 6. Import mapping

### Raw input example

```json
{
  "geometry": {
    "coordinates": [107.61, -6.91]
  },
  "properties": {
    "value": "regulatory--no-right-turn--g1"
  }
}
```

### Normalized source

```json
{
  "id": "generated-stable-id",
  "sourceKind": "mapillary-feature",
  "featureType": "regulatory",
  "rawValue": "regulatory--no-right-turn--g1",
  "coordinate": {
    "lon": 107.61,
    "lat": -6.91
  },
  "distanceMeters": null,
  "rawRecord": {}
}
```

Mapping rules:

- preserve complete raw record;
- read coordinates only from valid geometry;
- use raw value exactly;
- infer feature type only from an explicit field or a controlled parsing rule;
- record the parser version;
- log warnings;
- never generate score interpretation automatically in the MVP.

## 7. Diagram hotspot manifest

Optional file:

```json
{
  "diagramAssetId": "diagram-c1-3-2",
  "coordinateSpace": {
    "width": 1448,
    "height": 1086
  },
  "hotspots": [
    {
      "id": "hotspot-source",
      "entityIds": [
        "source-c1-3-no-right-turn"
      ],
      "shape": "rect",
      "x": 20,
      "y": 120,
      "width": 240,
      "height": 320,
      "label": "Mapillary source"
    }
  ]
}
```

Do not create hotspot positions unless a human supplies or verifies them.


---

## IMPLEMENTATION PLAN

# IMPLEMENTATION PLAN AND AGENT TASKS

## 1. Delivery strategy

Build the project in seven controlled phases.

Do not start visual polish before the domain model and sample data validate.

## Phase 0 — Source audit

Tasks:

- list attached PDF, JSON, and image files;
- record file names and sizes;
- identify the two initial diagram images;
- confirm raw data availability;
- report unavailable assets;
- avoid guessing.

Deliverable:

```text
SOURCE_AUDIT.md
```

## Phase 1 — Project scaffold

Tasks:

- create React + TypeScript + Vite project;
- configure strict TypeScript;
- configure Tailwind;
- add router;
- add test frameworks;
- add ESLint and formatting;
- add environment template;
- create folder structure.

Exit condition:

- development server starts;
- production build succeeds;
- empty routes render.

## Phase 2 — Domain and validation

Tasks:

- implement TypeScript types;
- implement Zod schemas;
- load sample JSON;
- validate references;
- create repository interface;
- create local JSON repository;
- create selectors;
- write unit tests.

Exit condition:

- all sample entities validate;
- shared source links to both notation pairs;
- raw value stays exact;
- missing coordinate remains `null`.

## Phase 3 — Core synchronized explorer

Tasks:

- build pair selector;
- build source panel;
- build transformation spine;
- build stage SVG;
- build body study;
- build spatial output panel;
- wire shared selection state;
- implement previous / next pair.

Exit condition:

- selecting any entity highlights related entities across all panels;
- Pair A and Pair B render correctly;
- deep links work.

## Phase 4 — Diagram and sequence

Tasks:

- integrate generated diagram images;
- add pan and zoom;
- add fullscreen;
- add alt text;
- build timeline;
- add Freeze-to-Glitch progression;
- implement reduced motion;
- implement compare mode.

Exit condition:

- both board assets load;
- sequence playback works;
- compare mode preserves shared source.

## Phase 5 — Dataset, method, exhibition

Tasks:

- build dataset browser;
- add local JSON import;
- validate large files;
- add normalization preview;
- build method page;
- build fullscreen exhibition mode.

Exit condition:

- invalid JSON produces a report;
- imports remain local;
- method tokens connect to examples;
- exhibition mode loops safely.

## Phase 6 — QA and polish

Tasks:

- run unit tests;
- run end-to-end tests;
- test keyboard flow;
- test missing-token behavior;
- test missing image behavior;
- test mobile;
- test performance;
- inspect text overflow;
- fix all critical issues.

Exit condition:

- acceptance checklist passes;
- README explains local run and build;
- no secret appears in repository.

## 2. Suggested agent allocation

When multiple agents are available:

### Agent A — Domain and ingestion

Owns:

- schemas;
- sample data;
- validation;
- repositories;
- selectors;
- import pipeline.

### Agent B — Core UI

Owns:

- layout;
- navigation;
- source panel;
- transformation spine;
- responsive behavior.

### Agent C — Visualization

Owns:

- MapLibre view;
- stage SVG;
- body study;
- force diagram;
- diagram viewer;
- lineage animation.

### Agent D — QA and accessibility

Owns:

- unit tests;
- Playwright;
- keyboard;
- reduced motion;
- contrast;
- missing states;
- performance checks.

Do not let separate agents create conflicting domain types.

Agent A owns the canonical contracts.

## 3. Repository tasks

### Required scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:e2e": "playwright test",
    "lint": "eslint .",
    "check:data": "tsx scripts/validate-data.ts"
  }
}
```

### Required configuration

```text
.env.example
```

Content:

```text
VITE_MAPILLARY_ACCESS_TOKEN=
VITE_DATA_MODE=local
```

## 4. Component breakdown

```text
AppShell
ProjectHeader
ScoreSelector
CheckpointSelector
PairSelector
ViewModeSwitch
PlaybackControls
DataStatus

SourcePanel
SourceMap
SourceMarker
SourceMetadata
RawJsonDrawer
ProvenanceBadge

TransformationSpine
TransformationCard
LineageConnector
ReferenceChip
ValidationBadge

StagePanel
StagePlanSvg
BodyStudySvg
ForceRelationSvg
ArchitecturalBoardViewer
DiagramMetadata
DiagramAltText

SequenceTimeline
SequenceFrameCard
PlaybackScrubber

CompareView
DifferenceSpine

DatasetBrowser
DatasetFilters
VirtualizedRecordTable
RecordInspector
ImportDialog
ValidationReport

MethodReadingChain
TaxonomyTable
TokenInspector

ExhibitionPlayer
```

## 5. State model

Keep URL state where shareability matters:

```text
score
checkpoint
pair
mode
comparePair
frame
```

Store local UI state for:

```text
expanded cards
diagram zoom
open drawers
playback speed
reduced-detail preference
```

Do not store raw imported files in URL.

## 6. SVG stage-plan algorithm

Inputs:

```text
axisLengthMeters
checkpointDistanceMeters
nodes
object positions
performer position
vectors
active loci
```

Map meter positions to SVG x coordinates:

```ts
const x = marginLeft + (distanceMeters / axisLengthMeters) * usableWidth;
```

Render layers in stable order.

Use SVG markers for arrows.

Keep text in HTML overlay or SVG with collision-safe placement.

Never infer stage distance from geographic coordinate.

## 7. Lineage highlight algorithm

Given an entity ID:

1. traverse incoming and outgoing lineage edges;
2. stop at the configured depth or complete pair boundary;
3. collect related IDs;
4. set `activeEntityIds`;
5. render active states across all panels;
6. keep the selected ID visually distinct from related IDs.

Use:

```text
selected = solid accent
related = soft accent
inactive = gray
invalid = warning
```

## 8. Large-data strategy

The source datasets may contain many records.

Do not import all records into React component state.

Use:

- lazy file loading;
- Web Worker parsing;
- indexed local cache when required;
- record virtualization;
- spatial bounding filtering;
- normalized summaries;
- progressive rendering.

Initial route should load only:

- score metadata;
- pair registry;
- linked source records;
- visible diagram metadata.

## 9. Content integrity report

Add a development-only route:

```text
/dev/integrity
```

Show:

- unresolved IDs;
- duplicate IDs;
- missing assets;
- undeclared tokens;
- source records with no pair;
- pairs with no source;
- pairs with no diagram;
- pair sequence breaks;
- raw-value mutation checks.

Exclude this route from public navigation.

## 10. Documentation deliverables

Generate:

```text
README.md
ARCHITECTURE.md
DATA_MODEL.md
CONTENT_INGESTION.md
SOURCE_AUDIT.md
```

README sections:

```text
Overview
Screenshots
Requirements
Install
Run
Build
Test
Environment
Data files
Adding a notation pair
Adding a diagram
Mapillary fallback
Deployment
Known limits
```

## 11. Deployment

Prepare static deployment.

Required:

- correct base paths;
- client-side routing fallback;
- compressed images;
- cache headers when platform permits;
- no server requirement for MVP;
- environment token injected at build or secure runtime layer.

Potential targets:

- Firebase Hosting;
- Vercel;
- Netlify;
- Cloudflare Pages.

Do not lock the project to one host.

## 12. Final agent report

At completion, provide:

1. repository tree;
2. commands executed;
3. tests run;
4. test result;
5. known limitations;
6. missing source assets;
7. live preview location;
8. next recommended content batch.

Do not claim a feature works unless it was run or tested.


---

## QA AND ACCEPTANCE

# QA AND ACCEPTANCE TESTS

## 1. Product acceptance

The MVP passes only when all critical checks below pass.

## 2. Data fidelity

### RAW-001

Given the initial source record, the UI displays:

```text
regulatory--no-right-turn--g1
```

with exact punctuation and casing.

### RAW-002

The source record remains unchanged after:

- selecting a pair;
- switching modes;
- importing another file;
- exporting normalized data.

### RAW-003

The no-right-turn source connects to both:

```text
pair-c1-3-1
pair-c1-3-2
```

### RAW-004

A missing coordinate renders:

```text
COORDINATE NOT PROVIDED
```

The app does not fabricate a map point.

### RAW-005

Distance displays:

```text
12.15 m
```

on the stage axis.

## 3. Lineage

### LIN-001

Clicking the source feature highlights:

- Data Provocation;
- Situation;
- Body Impulse;
- Spatial Output;
- active stage object;
- active board asset.

### LIN-002

Clicking `ST.C1.3.1` highlights:

- AUTHORITY;
- prohibition vector;
- spine and pelvis;
- locked axis;
- Freeze board.

### LIN-003

Clicking `ST.C1.3.2` highlights:

- PARADOX;
- two active vectors;
- wrist and shoulder;
- tremor loop;
- Glitch board.

### LIN-004

The lineage graph contains no unresolved references in the seed dataset.

## 4. Sequence

### SEQ-001

The timeline order reads:

```text
FORWARD PULL
PROHIBITION ENTERS
FREEZE
VECTOR CONFLICT
GLITCH OUTPUT
```

### SEQ-002

Playback updates all panels.

### SEQ-003

Pause preserves the current frame.

### SEQ-004

Reduced motion removes animated travel and keeps state changes readable.

### SEQ-005

Keyboard controls work.

## 5. Diagram viewer

### IMG-001

Both diagram images load.

### IMG-002

Each diagram shows the correct notation-pair code.

### IMG-003

Zoom and pan do not move the surrounding page unexpectedly.

### IMG-004

Fullscreen exits with Escape.

### IMG-005

Missing image path produces an explicit missing state.

### IMG-006

Alt text exposes:

- source;
- Situation;
- Body Impulse;
- anatomical locus;
- Spatial Output;
- residual.

## 6. Stage plan

### STG-001

Node A appears at 0 m.

### STG-002

Node B appears at 15 m.

### STG-003

Checkpoint appears at 12.15 m.

### STG-004

The primary axis remains straight.

### STG-005

Pair A renders a stopped forward vector and locked body axis.

### STG-006

Pair B renders simultaneous forward and prohibition vectors.

### STG-007

Pair B localizes tremor at wrist and shoulder.

### STG-008

The linear object remains taut in both pairs.

## 7. Compare mode

### CMP-001

Compare mode displays both pairs.

### CMP-002

Shared source appears once or displays a clear shared-source indicator.

### CMP-003

Differences show:

```text
AUTHORITY → PARADOX
FREEZE → GLITCH
SPINE + PELVIS → WRIST + SHOULDER
LOCKED AXIS → TREMOR LOOP
```

### CMP-004

Zoom synchronization can be enabled and disabled.

## 8. Mapillary fallback

### MAP-001

With no access token:

- application loads;
- source metadata loads;
- stage plan loads;
- diagrams load;
- lineage works;
- a live-media unavailable notice appears.

### MAP-002

The application never exposes a token in rendered HTML, logs, or committed files.

### MAP-003

Invalid token fails gracefully.

## 9. Dataset import

### IMP-001

Valid JSON produces a validation summary.

### IMP-002

Malformed JSON produces an error with line or parser context.

### IMP-003

Duplicate IDs appear in the report.

### IMP-004

Unknown tokens appear as undeclared.

### IMP-005

Imported raw records remain available in raw form.

### IMP-006

No data leaves the browser in MVP mode.

## 10. Accessibility

### A11Y-001

All interactive controls work with keyboard.

### A11Y-002

Focus remains visible.

### A11Y-003

Color does not carry the only meaning.

### A11Y-004

Screen-reader order matches visual order.

### A11Y-005

Diagram has structured text alternative.

### A11Y-006

Contrast passes WCAG AA for normal text.

### A11Y-007

Touch targets meet a practical minimum size.

## 11. Responsive

### RSP-001

At 1440 px, all coordinated panels fit.

### RSP-002

At 1024 px, the two-column layout stays readable.

### RSP-003

At 390 px:

- pair selector stays available;
- raw JSON collapses;
- plan stays pannable;
- board stays zoomable;
- no horizontal page overflow outside intended viewers.

## 12. Performance

### PERF-001

The landing page does not load both complete raw datasets.

### PERF-002

Diagram images lazy-load.

### PERF-003

Long record tables virtualize.

### PERF-004

Large import processing does not freeze the interface for prolonged periods.

### PERF-005

Production build reports no critical bundle error.

## 13. Security

### SEC-001

Imported raw strings render as text.

### SEC-002

No imported HTML executes.

### SEC-003

No secret exists in Git history or built bundle.

### SEC-004

Environment template contains empty values only.

## 14. Regression scenarios

Test after every content batch:

1. add one pair with an image;
2. add one pair with no image;
3. add one source shared by three pairs;
4. add one unresolved reference;
5. add one undeclared token;
6. add one geographic coordinate;
7. add one distance-only record;
8. add one pair continuing across checkpoints.

## 15. Definition of done

Mark the release complete when:

- all critical tests pass;
- raw value fidelity passes;
- both sample pairs render;
- diagrams load;
- lineage works;
- token-free mode works;
- mobile works;
- source audit and README exist;
- known limits appear honestly.
```

---

# FILE: `proto_path_full_corpus_integration/README.md`

- Size: `467` bytes
- SHA-256: `5137f3ba23d56deb7a31419d6dba8e4bd033de00e4b9cbf0079f42dcd9376f13`

```markdown
# Proto Path Full Corpus Integration Kit

Start with:

```text
prompts/00_README.md
prompts/01_MASTER_FULL_CORPUS_INTEGRATION_PROMPT.md
```

Canonical source files live under `source/`.

Do not edit the files under `source/`.

The files under `generated_source_audit/` are generated aids. Re-run the ingestion pipeline and compare results.

The files under `legacy_diagram_assets/` are versioned visual assets. Their review status appears in `diagram_manifest.json`.
```

---

# FILE: `proto_path_full_corpus_integration/generated_source_audit/KNOWN_SOURCE_CONFLICTS.md`

- Size: `2888` bytes
- SHA-256: `7ae5affb662b9adcf4d8ffe00d83d22406aed5ca0ca120d99f91d84e5c20b452`

```markdown
# KNOWN SOURCE CONFLICTS AND REVIEW FLAGS

These issues must remain visible in the integration. Do not silently correct them.

## 1. Stage distance does not identify a geographic point

Most Data Provocation rows contain a stage-axis distance such as `±12.15m`, while the attached GeoJSON contains longitude and latitude.

The stage distance cannot select one individual Mapillary feature unless the source also provides:

- a Mapillary property ID;
- an exact coordinate;
- a route geometry with a documented projection rule; or
- a human-verified source link.

Store these records as a candidate set, not as a confirmed point.

## 2. `regulatory--merge--g1` is absent from the attached JSON

The score uses:

```text
regulatory--merge--g1
```

The attached traffic dataset does not contain this exact raw value.

A different value exists:

```text
warning--traffic-merges-left--g1
```

Do not substitute it automatically. Record a `RAW_VALUE_NOT_FOUND` conflict and require review.

## 3. `Node_B terminal` is a score-system datum

`Node_B terminal` does not come from the Mapillary datasets.

Classify it as:

```text
sourceKind = score-system
```

Do not report it as a missing Mapillary value.

## 4. Score 02 axis length conflict

The detailed Score 02 section declares a **14 m** axis and places Node_B at `±14.00m`.

A later trajectory overview describes a shared **15 m** route axis.

Store both claims with page references. Use the detailed score value for stage rendering until a human reviewer decides otherwise.

## 5. Current C1.3.2 / RT.C1.3.2 diagram conflict

The current generated diagram describes:

```text
ST.C1.3.2 — Conflicting Vectors
RT.C1.3.2 — Glitch Response
```

The latest PDF describes:

```text
ST.C1.3.2 — one vertical SOLID_MASS_OBJECT adjacent to the regulatory line
RT.C1.3.2 — latent ROTATE at HIP under FREEZE, referring to ST.C1.3.1
```

The latest detailed PDF places explicit GLITCH actions in iteration rows such as:

```text
VI.C1.6.5
VI.C2.6.7
VI.C2.6.8
```

The trajectory summary still associates GLITCH with the authority-interruption sequence. This creates an internal document conflict.

Action:

- retain the generated image as a legacy draft asset;
- do not attach it to the canonical latest-PDF pair automatically;
- mark it `CONTENT_MISMATCH_REVIEW_REQUIRED`;
- allow a curator to reassign it to an iteration unit or preserve it as an earlier-version visualization.

## 6. One checkpoint is not always one pair

The PDF contains:

- multiple Situation rows;
- multiple Body Impulse rows;
- register rows;
- Output End State rows;
- iteration variations;
- additional obstacles;
- repetition outputs.

Create three levels:

```text
checkpoint
notation unit
explicit relation pair
```

Pair Body Impulse rows through their explicit `referring to [ST...]` references. Do not pair rows only because their numeric suffixes match.
```

---

# FILE: `proto_path_full_corpus_integration/generated_source_audit/SOURCE_PROFILE.md`

- Size: `1816` bytes
- SHA-256: `83a37a92eee3e1b488dac798b9a3ef698ba0112165dce31fc599863ba8522d4e`

```markdown
# SOURCE PROFILE — PROTO PATH FULL CORPUS

## Canonical score

- File: `Proto Path - WHERE ARE YOU DEPART FROM _gulangsatriya.pdf`
- Pages detected: **31**
- SHA-256: `5856fc0ca455e65f04d0dd36802ee791501dc7114b01b095697cbab654d254e9`
- Checkpoint IDs detected: **16**
- Unique coded entities detected: **245**
- Data Provocation codes detected: **48**

## Mapillary points dataset

- File: `mapillary-points - Large Dataset Bandung.json`
- Features: **110,299**
- Distinct raw values: **39**
- Prefixes: `{'construction': 4546, 'object': 101348, 'marking': 4405}`
- Bounds: `{'lonMin': 107.5704699754715, 'lonMax': 107.62459695339203, 'latMin': -6.93054858614336, 'latMax': -6.905050739140933}`
- Invalid coordinates: **0**

## Mapillary traffic dataset

- File: `mapillary-traffic - Large Dataset Bandung.json`
- Features: **3,778**
- Distinct raw values: **91**
- Prefixes: `{'regulatory': 2937, 'warning': 530, 'information': 308, 'complementary': 3}`
- Bounds: `{'lonMin': 107.57048606872559, 'lonMax': 107.62459695339203, 'latMin': -6.93054858614336, 'latMax': -6.905077366682946}`
- Invalid coordinates: **0**

## PDF code inventory by prefix

```json
{
  "AP": 9,
  "DP": 48,
  "KS": 8,
  "OE": 9,
  "OP": 6,
  "PU": 4,
  "RO": 8,
  "RT": 55,
  "ST": 77,
  "TR": 7,
  "VI": 14
}
```

## Integration decision

Do not convert the full GeoJSON datasets into Markdown. Markdown would inflate the corpus, remove useful geometry structure, and weaken filtering.

Use:

```text
raw GeoJSON                  = immutable source
normalized JSONL / indexes   = machine-consumption layer
Markdown profiles            = human-readable audit
PDF                          = authoritative visual document
page-marked Markdown         = searchable text companion
canonical score JSON         = application content layer
```
```

---

# FILE: `proto_path_full_corpus_integration/generated_source_audit/checkpoint_inventory.json`

- Size: `1983` bytes
- SHA-256: `ed3711e6f66349ecf7e615b730ff67ff2164094673ba6129ea0092ced9e8484d`

```json
[
  {
    "checkpointId": "C1.0",
    "scoreId": "score-01",
    "page": 8,
    "title": "Origin Anchor"
  },
  {
    "checkpointId": "C1.1",
    "scoreId": "score-01",
    "page": 9,
    "title": "Initial Traction"
  },
  {
    "checkpointId": "C1.2",
    "scoreId": "score-01",
    "page": 10,
    "title": "Compression Corridor"
  },
  {
    "checkpointId": "C1.3",
    "scoreId": "score-01",
    "page": 10,
    "title": "Authority Interruption"
  },
  {
    "checkpointId": "C1.4",
    "scoreId": "score-01",
    "page": 11,
    "title": "Semantic Aggression"
  },
  {
    "checkpointId": "C1.5",
    "scoreId": "score-01",
    "page": 11,
    "title": "Node B \u00b7 Final Contact"
  },
  {
    "checkpointId": "C1.6",
    "scoreId": "score-01",
    "page": 13,
    "title": "Iteration Register \u00b7 Impulse Variation on Active Codes"
  },
  {
    "checkpointId": "C1.7",
    "scoreId": "score-01",
    "page": 15,
    "title": "Residual State"
  },
  {
    "checkpointId": "C2.0",
    "scoreId": "score-02",
    "page": 16,
    "title": "Origin Anchor \u00b7 Utility Corridor"
  },
  {
    "checkpointId": "C2.1",
    "scoreId": "score-02",
    "page": 17,
    "title": "Initial Traction \u00b7 Utility Corridor"
  },
  {
    "checkpointId": "C2.2",
    "scoreId": "score-02",
    "page": 17,
    "title": "Sub-Surface Footing"
  },
  {
    "checkpointId": "C2.3",
    "scoreId": "score-02",
    "page": 18,
    "title": "Driveway Tilt"
  },
  {
    "checkpointId": "C2.4",
    "scoreId": "score-02",
    "page": 18,
    "title": "Merge Authority \u00b7 Arterial Convergence"
  },
  {
    "checkpointId": "C2.5",
    "scoreId": "score-02",
    "page": 19,
    "title": "Node B \u00b7 Final Contact"
  },
  {
    "checkpointId": "C2.6",
    "scoreId": "score-02",
    "page": 21,
    "title": "Iteration Register \u00b7 Impulse Variation and Object Insertion"
  },
  {
    "checkpointId": "C2.7",
    "scoreId": "score-02",
    "page": 24,
    "title": "Residual State"
  }
]
```

---

# FILE: `proto_path_full_corpus_integration/generated_source_audit/data_provocations_extracted.json`

- Size: `19626` bytes
- SHA-256: `908d5d6d96cebdbd306528b9d325e56c080a23f46fec54d100ddeec83222bc52`

```json
[
  {
    "code": "DP.C1.0.0",
    "verbatim": "source=Mapillary | type=bounds | lon=107.610\u2013107.625 | lat=-6.930 \u2194 -6.905",
    "source": "Mapillary",
    "type": "bounds",
    "feature": null,
    "rawValue": null,
    "distanceRaw": null,
    "coordinateRaw": null,
    "lonRaw": "107.610\u2013107.625",
    "latRaw": "-6.930 \u2194 -6.905",
    "occurrenceCount": 1
  },
  {
    "code": "DP.C1.0.1",
    "verbatim": "source=Mapillary | type=feature | coord=107.610944,-6.909886 | feature=object | value=\"object--street-light\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "object",
    "rawValue": "object--street-light",
    "distanceRaw": null,
    "coordinateRaw": "107.610944,-6.909886",
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 2
  },
  {
    "code": "DP.C1.0.10",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b112.66m | feature=object | value=\"object--traffic-cone\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "object",
    "rawValue": "object--traffic-cone",
    "distanceRaw": "\u00b112.66m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C1.0.11",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b113.94m | feature=object | value=\"object--support--utility-pole\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "object",
    "rawValue": "object--support--utility-pole",
    "distanceRaw": "\u00b113.94m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C1.0.12",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b114.31m | feature=object | value=\"object--manhole\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "object",
    "rawValue": "object--manhole",
    "distanceRaw": "\u00b114.31m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C1.0.13",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b114.80m | feature=object | value=\"object--sign--advertisement\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "object",
    "rawValue": "object--sign--advertisement",
    "distanceRaw": "\u00b114.80m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C1.0.2",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b11.87m | feature=object | value=\"object--traffic-cone\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "object",
    "rawValue": "object--traffic-cone",
    "distanceRaw": "\u00b11.87m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 2
  },
  {
    "code": "DP.C1.0.3",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b13.55m | feature=construction | value=\"construction--flat--driveway\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "construction",
    "rawValue": "construction--flat--driveway",
    "distanceRaw": "\u00b13.55m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C1.0.4",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b14.27m | feature=object | value=\"object--traffic-cone\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "object",
    "rawValue": "object--traffic-cone",
    "distanceRaw": "\u00b14.27m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C1.0.5",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b14.51m | feature=object | value=\"object--traffic-cone\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "object",
    "rawValue": "object--traffic-cone",
    "distanceRaw": "\u00b14.51m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C1.0.6",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b17.16m | feature=object | value=\"object--support--utility-pole\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "object",
    "rawValue": "object--support--utility-pole",
    "distanceRaw": "\u00b17.16m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C1.0.7",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b112.15m | feature=regulatory | value=\"regulatory--no-right-turn--g1\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "regulatory",
    "rawValue": "regulatory--no-right-turn--g1",
    "distanceRaw": "\u00b112.15m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 2
  },
  {
    "code": "DP.C1.0.8",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b112.45m | feature=object | value=\"object--sign--advertisement\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "object",
    "rawValue": "object--sign--advertisement",
    "distanceRaw": "\u00b112.45m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C1.0.9",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b112.49m | feature=object | value=\"object--support--utility-pole\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "object",
    "rawValue": "object--support--utility-pole",
    "distanceRaw": "\u00b112.49m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C1.1.1",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b10.0m | feature=object | value=\"object--support--utility-pole\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "object",
    "rawValue": "object--support--utility-pole",
    "distanceRaw": "\u00b10.0m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C1.1.2",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b11.87m | feature=object | value=\"object--traffic-cone\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "object",
    "rawValue": "object--traffic-cone",
    "distanceRaw": "\u00b11.87m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C1.2.1",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b13.55m | feature=construction | value=\"construction--flat--driveway\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "construction",
    "rawValue": "construction--flat--driveway",
    "distanceRaw": "\u00b13.55m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C1.2.2",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b14.27m | feature=object | value=\"object--traffic-cone\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "object",
    "rawValue": "object--traffic-cone",
    "distanceRaw": "\u00b14.27m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C1.2.3",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b14.51m | feature=object | value=\"object--traffic-cone\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "object",
    "rawValue": "object--traffic-cone",
    "distanceRaw": "\u00b14.51m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C1.2.4",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b17.16m | feature=object | value=\"object--support--utility-pole\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "object",
    "rawValue": "object--support--utility-pole",
    "distanceRaw": "\u00b17.16m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C1.3.1",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b112.15m | feature=regulatory | value=\"regulatory--no-right-turn--g1\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "regulatory",
    "rawValue": "regulatory--no-right-turn--g1",
    "distanceRaw": "\u00b112.15m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C1.3.2",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b112.49m | feature=object | value=\"object--support--utility-pole\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "object",
    "rawValue": "object--support--utility-pole",
    "distanceRaw": "\u00b112.49m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C1.4.1",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b112.45m | feature=object | value=\"object--sign--advertisement\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "object",
    "rawValue": "object--sign--advertisement",
    "distanceRaw": "\u00b112.45m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C1.4.2",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b112.66m | feature=object | value=\"object--traffic-cone\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "object",
    "rawValue": "object--traffic-cone",
    "distanceRaw": "\u00b112.66m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C1.4.3",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b113.94m | feature=object | value=\"object--support--utility-pole\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "object",
    "rawValue": "object--support--utility-pole",
    "distanceRaw": "\u00b113.94m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C1.4.4",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b114.80m | feature=object | value=\"object--sign--advertisement\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "object",
    "rawValue": "object--sign--advertisement",
    "distanceRaw": "\u00b114.80m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C1.5.1",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b114.31m | feature=object | value=\"object--manhole\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "object",
    "rawValue": "object--manhole",
    "distanceRaw": "\u00b114.31m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C1.5.2",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b115.00m | feature=bounds | value=\"Node_B terminal\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "bounds",
    "rawValue": "Node_B terminal",
    "distanceRaw": "\u00b115.00m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C2.0.0",
    "verbatim": "source=Mapillary | type=bounds | lon=107.570\u2013107.586 | lat=-6.931 \u2194 -6.905",
    "source": "Mapillary",
    "type": "bounds",
    "feature": null,
    "rawValue": null,
    "distanceRaw": null,
    "coordinateRaw": null,
    "lonRaw": "107.570\u2013107.586",
    "latRaw": "-6.931 \u2194 -6.905",
    "occurrenceCount": 1
  },
  {
    "code": "DP.C2.0.1",
    "verbatim": "source=Mapillary | type=feature | coord=107.575,-6.910 | feature=object | value=\"object--support--utility-pole\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "object",
    "rawValue": "object--support--utility-pole",
    "distanceRaw": null,
    "coordinateRaw": "107.575,-6.910",
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C2.0.2",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b12.10m | feature=object | value=\"object--trash-can\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "object",
    "rawValue": "object--trash-can",
    "distanceRaw": "\u00b12.10m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C2.0.3",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b13.20m | feature=object | value=\"object--manhole\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "object",
    "rawValue": "object--manhole",
    "distanceRaw": "\u00b13.20m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C2.0.4",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b15.50m | feature=object | value=\"object--support--utility-pole\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "object",
    "rawValue": "object--support--utility-pole",
    "distanceRaw": "\u00b15.50m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C2.0.5",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b17.80m | feature=construction | value=\"construction--flat--driveway\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "construction",
    "rawValue": "construction--flat--driveway",
    "distanceRaw": "\u00b17.80m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C2.0.6",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b19.15m | feature=regulatory | value=\"regulatory--merge--g1\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "regulatory",
    "rawValue": "regulatory--merge--g1",
    "distanceRaw": "\u00b19.15m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C2.0.7",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b110.40m | feature=object | value=\"object--traffic-cone\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "object",
    "rawValue": "object--traffic-cone",
    "distanceRaw": "\u00b110.40m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C2.0.8",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b111.90m | feature=object | value=\"object--sign--advertisement\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "object",
    "rawValue": "object--sign--advertisement",
    "distanceRaw": "\u00b111.90m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C2.0.9",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b113.55m | feature=regulatory | value=\"regulatory--weight-limit--g1\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "regulatory",
    "rawValue": "regulatory--weight-limit--g1",
    "distanceRaw": "\u00b113.55m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C2.1.1",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b10.0m | feature=object | value=\"object--support--utility-pole\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "object",
    "rawValue": "object--support--utility-pole",
    "distanceRaw": "\u00b10.0m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C2.1.2",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b12.10m | feature=object | value=\"object--trash-can\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "object",
    "rawValue": "object--trash-can",
    "distanceRaw": "\u00b12.10m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C2.2.1",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b13.20m | feature=object | value=\"object--manhole\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "object",
    "rawValue": "object--manhole",
    "distanceRaw": "\u00b13.20m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C2.2.2",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b15.50m | feature=object | value=\"object--support--utility-pole\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "object",
    "rawValue": "object--support--utility-pole",
    "distanceRaw": "\u00b15.50m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C2.3.1",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b17.80m | feature=construction | value=\"construction--flat--driveway\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "construction",
    "rawValue": "construction--flat--driveway",
    "distanceRaw": "\u00b17.80m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C2.3.2",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b19.15m | feature=regulatory | value=\"regulatory--merge--g1\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "regulatory",
    "rawValue": "regulatory--merge--g1",
    "distanceRaw": "\u00b19.15m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C2.4.1",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b110.40m | feature=object | value=\"object--traffic-cone\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "object",
    "rawValue": "object--traffic-cone",
    "distanceRaw": "\u00b110.40m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C2.4.2",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b111.90m | feature=object | value=\"object--sign--advertisement\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "object",
    "rawValue": "object--sign--advertisement",
    "distanceRaw": "\u00b111.90m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C2.5.1",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b113.55m | feature=regulatory | value=\"regulatory--weight-limit--g1\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "regulatory",
    "rawValue": "regulatory--weight-limit--g1",
    "distanceRaw": "\u00b113.55m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  },
  {
    "code": "DP.C2.5.2",
    "verbatim": "source=Mapillary | type=feature | distance=\u00b114.00m | feature=bounds | value=\"Node_B terminal\"",
    "source": "Mapillary",
    "type": "feature",
    "feature": "bounds",
    "rawValue": "Node_B terminal",
    "distanceRaw": "\u00b114.00m",
    "coordinateRaw": null,
    "lonRaw": null,
    "latRaw": null,
    "occurrenceCount": 1
  }
]
```

---

# FILE: `proto_path_full_corpus_integration/generated_source_audit/pdf_code_inventory.json`

- Size: `393847` bytes
- SHA-256: `d3fe99f785c9e4f8aa632c8d33599cc68e409faafac313bb1da01d446b780521`

```json
{
  "pageCount": 31,
  "uniqueCodes": [
    {
      "code": "AP.C1.6.1",
      "prefix": "AP",
      "pages": [
        14
      ],
      "occurrenceCount": 1,
      "contexts": [
        "y declared in [ST.C1.0]. [RO.C1.6.3] Declares no new object permitted, the register is closed. LOCKING RULE \u00b7 AP CODE RULE \u00b7 SENTENCE [AP.C1.6.1] Locks the iteration count open, the director decides. [AP.C1.6.2] Locks closure of iteration until all active codes have been re-heard at least once. [AP.C1.6.3] Locks [GRIP] on the [LINEAR_OBJECT] to remain held throughout iteration. [AP.C1.6.4] Triggers transition to Phase 04 once system saturation is reached."
      ]
    },
    {
      "code": "AP.C1.6.2",
      "prefix": "AP",
      "pages": [
        14
      ],
      "occurrenceCount": 1,
      "contexts": [
        "ted, the register is closed. LOCKING RULE \u00b7 AP CODE RULE \u00b7 SENTENCE [AP.C1.6.1] Locks the iteration count open, the director decides. [AP.C1.6.2] Locks closure of iteration until all active codes have been re-heard at least once. [AP.C1.6.3] Locks [GRIP] on the [LINEAR_OBJECT] to remain held throughout iteration. [AP.C1.6.4] Triggers transition to Phase 04 once system saturation is reached."
      ]
    },
    {
      "code": "AP.C1.6.3",
      "prefix": "AP",
      "pages": [
        14
      ],
      "occurrenceCount": 1,
      "contexts": [
        "ration count open, the director decides. [AP.C1.6.2] Locks closure of iteration until all active codes have been re-heard at least once. [AP.C1.6.3] Locks [GRIP] on the [LINEAR_OBJECT] to remain held throughout iteration. [AP.C1.6.4] Triggers transition to Phase 04 once system saturation is reached."
      ]
    },
    {
      "code": "AP.C1.6.4",
      "prefix": "AP",
      "pages": [
        14
      ],
      "occurrenceCount": 1,
      "contexts": [
        "all active codes have been re-heard at least once. [AP.C1.6.3] Locks [GRIP] on the [LINEAR_OBJECT] to remain held throughout iteration. [AP.C1.6.4] Triggers transition to Phase 04 once system saturation is reached."
      ]
    },
    {
      "code": "AP.C2.6.1",
      "prefix": "AP",
      "pages": [
        22
      ],
      "occurrenceCount": 1,
      "contexts": [
        "nal obstacles from [TR.C2.6.1] through [TR.C2.6.7] but forbids reading them as new checkpoints. LOCKING RULE \u00b7 AP CODE RULE \u00b7 SENTENCE [AP.C2.6.1] Locks iteration count open, the director decides. [AP.C2.6.2] Locks iteration from closing until merge and weight-limit have been re-heard at least once each."
      ]
    },
    {
      "code": "AP.C2.6.2",
      "prefix": "AP",
      "pages": [
        22
      ],
      "occurrenceCount": 1,
      "contexts": [
        "eading them as new checkpoints. LOCKING RULE \u00b7 AP CODE RULE \u00b7 SENTENCE [AP.C2.6.1] Locks iteration count open, the director decides. [AP.C2.6.2] Locks iteration from closing until merge and weight-limit have been re-heard at least once each."
      ]
    },
    {
      "code": "AP.C2.6.3",
      "prefix": "AP",
      "pages": [
        23
      ],
      "occurrenceCount": 1,
      "contexts": [
        "CODE RULE \u00b7 SENTENCE [AP.C2.6.3] Locks [GRIP] on the [LINEAR_OBJECT] to remain held throughout, pressure may vary. [AP.C2.6.4] Locks additional obstacles from being removed once introduced. [AP.C2.6.5] Triggers transition to Phase 04 once system saturation is reached."
      ]
    },
    {
      "code": "AP.C2.6.4",
      "prefix": "AP",
      "pages": [
        23
      ],
      "occurrenceCount": 1,
      "contexts": [
        "CODE RULE \u00b7 SENTENCE [AP.C2.6.3] Locks [GRIP] on the [LINEAR_OBJECT] to remain held throughout, pressure may vary. [AP.C2.6.4] Locks additional obstacles from being removed once introduced. [AP.C2.6.5] Triggers transition to Phase 04 once system saturation is reached."
      ]
    },
    {
      "code": "AP.C2.6.5",
      "prefix": "AP",
      "pages": [
        23
      ],
      "occurrenceCount": 1,
      "contexts": [
        "[LINEAR_OBJECT] to remain held throughout, pressure may vary. [AP.C2.6.4] Locks additional obstacles from being removed once introduced. [AP.C2.6.5] Triggers transition to Phase 04 once system saturation is reached."
      ]
    },
    {
      "code": "DP.C1.0.0",
      "prefix": "DP",
      "pages": [
        8
      ],
      "occurrenceCount": 1,
      "contexts": [
        "ode_C : iteration anchor \u00b7 opens only during Phase 03 (C1.6) [PHASE 1] DEPARTURE POINT [C1.0] Origin Anchor DATA PROVOCATION \u00b7 RAW DATA [DP.C1.0.0] source=Mapillary | type=bounds | lon=107.610\u2013107.625 | lat=-6.930 \u2194 -6.905 [DP.C1.0.1] source=Mapillary | type=feature | coord=107.610944,-6.909886 | feature=object | value=\"object--street-light\" [DP.C1.0.2] source=Mapillary | type=feature | distance=\u00b11.87m | feature=object | value=\"object--traffic-cone\" [DP.C1.0.3] source=Mapillary | type=feature | distance=\u00b13.55m | feature=construction | value=\"construction-"
      ]
    },
    {
      "code": "DP.C1.0.1",
      "prefix": "DP",
      "pages": [
        8
      ],
      "occurrenceCount": 2,
      "contexts": [
        "[C1.0] Origin Anchor DATA PROVOCATION \u00b7 RAW DATA [DP.C1.0.0] source=Mapillary | type=bounds | lon=107.610\u2013107.625 | lat=-6.930 \u2194 -6.905 [DP.C1.0.1] source=Mapillary | type=feature | coord=107.610944,-6.909886 | feature=object | value=\"object--street-light\" [DP.C1.0.2] source=Mapillary | type=feature | distance=\u00b11.87m | feature=object | value=\"object--traffic-cone\" [DP.C1.0.3] source=Mapillary | type=feature | distance=\u00b13.55m | feature=construction | value=\"construction--flat--driveway\" [DP.C1.0.4] source=Mapillary | type=feature | distance=\u00b14.27m | featur",
        "aces one [MARKER_OBJECT] at Node_A centre as origin anchor, triggered by the datum object\u2013street-light at coordinate 107.610944, -6.909886 [DP.C1.0.1]. [ST.C1.0.3] Distributes along the trajectory one [TEXTURE_OBJECT] at \u00b13.55 metres, four [SOLID_MASS_OBJECT] knee-high at \u00b11.87, \u00b14.27, \u00b14.51 and \u00b112.66 metres, three [SOLID_MASS_OBJECT] vertical at \u00b17.16, \u00b112.49 and \u00b113.94 metres, one [REGULATORY_OBJECT] at \u00b112.15 metres, two [SEMANTIC_OBJECT] at \u00b112.45 and \u00b114.80 metres, and one [GROUND_TEXTURE_OBJECT] at \u00b114.31 metres. [ST.C1.0.4] Reads one [REGULATORY_OB"
      ]
    },
    {
      "code": "DP.C1.0.10",
      "prefix": "DP",
      "pages": [
        8
      ],
      "occurrenceCount": 1,
      "contexts": [
        "--advertisement\" [DP.C1.0.9] source=Mapillary | type=feature | distance=\u00b112.49m | feature=object | value=\"object--support--utility-pole\" [DP.C1.0.10] source=Mapillary | type=feature | distance=\u00b112.66m | feature=object | value=\"object--traffic-cone\" [DP.C1.0.11] source=Mapillary | type=feature | distance=\u00b113.94m | feature=object | value=\"object--support--utility-pole\" [DP.C1.0.12] source=Mapillary | type=feature | distance=\u00b114.31m | feature=object | value=\"object--manhole\" [DP.C1.0.13] source=Mapillary | type=feature | distance=\u00b114.80m | feature=object | va"
      ]
    },
    {
      "code": "DP.C1.0.11",
      "prefix": "DP",
      "pages": [
        8
      ],
      "occurrenceCount": 1,
      "contexts": [
        "--support--utility-pole\" [DP.C1.0.10] source=Mapillary | type=feature | distance=\u00b112.66m | feature=object | value=\"object--traffic-cone\" [DP.C1.0.11] source=Mapillary | type=feature | distance=\u00b113.94m | feature=object | value=\"object--support--utility-pole\" [DP.C1.0.12] source=Mapillary | type=feature | distance=\u00b114.31m | feature=object | value=\"object--manhole\" [DP.C1.0.13] source=Mapillary | type=feature | distance=\u00b114.80m | feature=object | value=\"object--sign--advertisement\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.0] Declares a [SYSTE"
      ]
    },
    {
      "code": "DP.C1.0.12",
      "prefix": "DP",
      "pages": [
        8
      ],
      "occurrenceCount": 1,
      "contexts": [
        "--traffic-cone\" [DP.C1.0.11] source=Mapillary | type=feature | distance=\u00b113.94m | feature=object | value=\"object--support--utility-pole\" [DP.C1.0.12] source=Mapillary | type=feature | distance=\u00b114.31m | feature=object | value=\"object--manhole\" [DP.C1.0.13] source=Mapillary | type=feature | distance=\u00b114.80m | feature=object | value=\"object--sign--advertisement\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.0] Declares a [SYSTEM] axis from Node_A to Node_B spanning 15m, opened on a single working axis. [ST.C1.0.1] Places one [LINEAR_OBJECT] as w"
      ]
    },
    {
      "code": "DP.C1.0.13",
      "prefix": "DP",
      "pages": [
        8
      ],
      "occurrenceCount": 1,
      "contexts": [
        "bject--support--utility-pole\" [DP.C1.0.12] source=Mapillary | type=feature | distance=\u00b114.31m | feature=object | value=\"object--manhole\" [DP.C1.0.13] source=Mapillary | type=feature | distance=\u00b114.80m | feature=object | value=\"object--sign--advertisement\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.0] Declares a [SYSTEM] axis from Node_A to Node_B spanning 15m, opened on a single working axis. [ST.C1.0.1] Places one [LINEAR_OBJECT] as working line at floor level from Node_A to Node_B, spanning 15m, held in full contact with zero tension. [ST"
      ]
    },
    {
      "code": "DP.C1.0.2",
      "prefix": "DP",
      "pages": [
        6,
        8
      ],
      "occurrenceCount": 2,
      "contexts": [
        "ot rotation of the body. A Reading Example One row of each table, so the grammar of the score is visible in miniature. DATA PROVOCATION [DP.C1.0.2] source=Mapillary | type=feature | distance=\u00b11.87m | feature=object | value=\"object--traffic-cone\" SITUATION \u00b7 SPATIAL SCORE",
        "-6.930 \u2194 -6.905 [DP.C1.0.1] source=Mapillary | type=feature | coord=107.610944,-6.909886 | feature=object | value=\"object--street-light\" [DP.C1.0.2] source=Mapillary | type=feature | distance=\u00b11.87m | feature=object | value=\"object--traffic-cone\" [DP.C1.0.3] source=Mapillary | type=feature | distance=\u00b13.55m | feature=construction | value=\"construction--flat--driveway\" [DP.C1.0.4] source=Mapillary | type=feature | distance=\u00b14.27m | feature=object | value=\"object--traffic-cone\" [DP.C1.0.5] source=Mapillary | type=feature | distance=\u00b14.51m | feature=object |"
      ]
    },
    {
      "code": "DP.C1.0.3",
      "prefix": "DP",
      "pages": [
        8
      ],
      "occurrenceCount": 1,
      "contexts": [
        "lue=\"object--street-light\" [DP.C1.0.2] source=Mapillary | type=feature | distance=\u00b11.87m | feature=object | value=\"object--traffic-cone\" [DP.C1.0.3] source=Mapillary | type=feature | distance=\u00b13.55m | feature=construction | value=\"construction--flat--driveway\" [DP.C1.0.4] source=Mapillary | type=feature | distance=\u00b14.27m | feature=object | value=\"object--traffic-cone\" [DP.C1.0.5] source=Mapillary | type=feature | distance=\u00b14.51m | feature=object | value=\"object--traffic-cone\" [DP.C1.0.6] source=Mapillary | type=feature | distance=\u00b17.16m | feature=object |"
      ]
    },
    {
      "code": "DP.C1.0.4",
      "prefix": "DP",
      "pages": [
        8
      ],
      "occurrenceCount": 1,
      "contexts": [
        "raffic-cone\" [DP.C1.0.3] source=Mapillary | type=feature | distance=\u00b13.55m | feature=construction | value=\"construction--flat--driveway\" [DP.C1.0.4] source=Mapillary | type=feature | distance=\u00b14.27m | feature=object | value=\"object--traffic-cone\" [DP.C1.0.5] source=Mapillary | type=feature | distance=\u00b14.51m | feature=object | value=\"object--traffic-cone\" [DP.C1.0.6] source=Mapillary | type=feature | distance=\u00b17.16m | feature=object | value=\"object--support--utility-pole\" [DP.C1.0.7] source=Mapillary | type=feature | distance=\u00b112.15m | feature=regulatory |"
      ]
    },
    {
      "code": "DP.C1.0.5",
      "prefix": "DP",
      "pages": [
        8
      ],
      "occurrenceCount": 1,
      "contexts": [
        "struction--flat--driveway\" [DP.C1.0.4] source=Mapillary | type=feature | distance=\u00b14.27m | feature=object | value=\"object--traffic-cone\" [DP.C1.0.5] source=Mapillary | type=feature | distance=\u00b14.51m | feature=object | value=\"object--traffic-cone\" [DP.C1.0.6] source=Mapillary | type=feature | distance=\u00b17.16m | feature=object | value=\"object--support--utility-pole\" [DP.C1.0.7] source=Mapillary | type=feature | distance=\u00b112.15m | feature=regulatory | value=\"regulatory--no-right-turn--g1\" [DP.C1.0.8] source=Mapillary | type=feature | distance=\u00b112.45m | feature"
      ]
    },
    {
      "code": "DP.C1.0.6",
      "prefix": "DP",
      "pages": [
        8
      ],
      "occurrenceCount": 1,
      "contexts": [
        "lue=\"object--traffic-cone\" [DP.C1.0.5] source=Mapillary | type=feature | distance=\u00b14.51m | feature=object | value=\"object--traffic-cone\" [DP.C1.0.6] source=Mapillary | type=feature | distance=\u00b17.16m | feature=object | value=\"object--support--utility-pole\" [DP.C1.0.7] source=Mapillary | type=feature | distance=\u00b112.15m | feature=regulatory | value=\"regulatory--no-right-turn--g1\" [DP.C1.0.8] source=Mapillary | type=feature | distance=\u00b112.45m | feature=object | value=\"object--sign--advertisement\" [DP.C1.0.9] source=Mapillary | type=feature | distance=\u00b112.49m |"
      ]
    },
    {
      "code": "DP.C1.0.7",
      "prefix": "DP",
      "pages": [
        8
      ],
      "occurrenceCount": 2,
      "contexts": [
        "ct--traffic-cone\" [DP.C1.0.6] source=Mapillary | type=feature | distance=\u00b17.16m | feature=object | value=\"object--support--utility-pole\" [DP.C1.0.7] source=Mapillary | type=feature | distance=\u00b112.15m | feature=regulatory | value=\"regulatory--no-right-turn--g1\" [DP.C1.0.8] source=Mapillary | type=feature | distance=\u00b112.45m | feature=object | value=\"object--sign--advertisement\" [DP.C1.0.9] source=Mapillary | type=feature | distance=\u00b112.49m | feature=object | value=\"object--support--utility-pole\" [DP.C1.0.10] source=Mapillary | type=feature | distance=\u00b112.66m",
        "2.15 metres on the edge under [AUTHORITY], applying direction=right closed, held with hip in latent turn and cursor forward, referring to [DP.C1.0.7]. [ST.C1.0.5] Reads one [TEXTURE_OBJECT] mid-trajectory in slope descending and one [GROUND_TEXTURE_OBJECT] at \u00b114.31 metres as metal cover under [ELEVATION], producing slip-potential in the foot and broken ground."
      ]
    },
    {
      "code": "DP.C1.0.8",
      "prefix": "DP",
      "pages": [
        8
      ],
      "occurrenceCount": 1,
      "contexts": [
        "tility-pole\" [DP.C1.0.7] source=Mapillary | type=feature | distance=\u00b112.15m | feature=regulatory | value=\"regulatory--no-right-turn--g1\" [DP.C1.0.8] source=Mapillary | type=feature | distance=\u00b112.45m | feature=object | value=\"object--sign--advertisement\" [DP.C1.0.9] source=Mapillary | type=feature | distance=\u00b112.49m | feature=object | value=\"object--support--utility-pole\" [DP.C1.0.10] source=Mapillary | type=feature | distance=\u00b112.66m | feature=object | value=\"object--traffic-cone\" [DP.C1.0.11] source=Mapillary | type=feature | distance=\u00b113.94m | feature=o"
      ]
    },
    {
      "code": "DP.C1.0.9",
      "prefix": "DP",
      "pages": [
        8
      ],
      "occurrenceCount": 1,
      "contexts": [
        "no-right-turn--g1\" [DP.C1.0.8] source=Mapillary | type=feature | distance=\u00b112.45m | feature=object | value=\"object--sign--advertisement\" [DP.C1.0.9] source=Mapillary | type=feature | distance=\u00b112.49m | feature=object | value=\"object--support--utility-pole\" [DP.C1.0.10] source=Mapillary | type=feature | distance=\u00b112.66m | feature=object | value=\"object--traffic-cone\" [DP.C1.0.11] source=Mapillary | type=feature | distance=\u00b113.94m | feature=object | value=\"object--support--utility-pole\" [DP.C1.0.12] source=Mapillary | type=feature | distance=\u00b114.31m | featur"
      ]
    },
    {
      "code": "DP.C1.1.1",
      "prefix": "DP",
      "pages": [
        9
      ],
      "occurrenceCount": 1,
      "contexts": [
        "] to produce [LOCKED_AXIS], referring to [ST.C1.0.4]. [PHASE 2] LINEAR TRAJECTORY [C1.1] Initial Traction DATA PROVOCATION \u00b7 RAW DATA [DP.C1.1.1] source=Mapillary | type=feature | distance=\u00b10.0m | feature=object | value=\"object--support--utility-pole\" [DP.C1.1.2] source=Mapillary | type=feature | distance=\u00b11.87m | feature=object | value=\"object--traffic-cone\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.1.1] Declares a [SYSTEM] cursor initiation at Node_A, in grid transit with cursor forward, marking the start of Score 01. [ST.C1.1.2] Rea"
      ]
    },
    {
      "code": "DP.C1.1.2",
      "prefix": "DP",
      "pages": [
        9
      ],
      "occurrenceCount": 1,
      "contexts": [
        "OCATION \u00b7 RAW DATA [DP.C1.1.1] source=Mapillary | type=feature | distance=\u00b10.0m | feature=object | value=\"object--support--utility-pole\" [DP.C1.1.2] source=Mapillary | type=feature | distance=\u00b11.87m | feature=object | value=\"object--traffic-cone\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.1.1] Declares a [SYSTEM] cursor initiation at Node_A, in grid transit with cursor forward, marking the start of Score 01. [ST.C1.1.2] Reads one [LINEAR_OBJECT] under [SPATIAL_MATRIX], held in contact with tension tightening, permitting no slack, with the f"
      ]
    },
    {
      "code": "DP.C1.2.1",
      "prefix": "DP",
      "pages": [
        10
      ],
      "occurrenceCount": 1,
      "contexts": [
        "[COMPRESSION], producing initial [COMPRESSED_VOLUME], referring to [ST.C1.1.3]. [C1.2] Compression Corridor DATA PROVOCATION \u00b7 RAW DATA [DP.C1.2.1] source=Mapillary | type=feature | distance=\u00b13.55m | feature=construction | value=\"construction--flat--driveway\" [DP.C1.2.2] source=Mapillary | type=feature | distance=\u00b14.27m | feature=object | value=\"object--traffic-cone\" [DP.C1.2.3] source=Mapillary | type=feature | distance=\u00b14.51m | feature=object | value=\"object--traffic-cone\" [DP.C1.2.4] source=Mapillary | type=feature | distance=\u00b17.16m | feature=object |"
      ]
    },
    {
      "code": "DP.C1.2.2",
      "prefix": "DP",
      "pages": [
        10
      ],
      "occurrenceCount": 1,
      "contexts": [
        "N \u00b7 RAW DATA [DP.C1.2.1] source=Mapillary | type=feature | distance=\u00b13.55m | feature=construction | value=\"construction--flat--driveway\" [DP.C1.2.2] source=Mapillary | type=feature | distance=\u00b14.27m | feature=object | value=\"object--traffic-cone\" [DP.C1.2.3] source=Mapillary | type=feature | distance=\u00b14.51m | feature=object | value=\"object--traffic-cone\" [DP.C1.2.4] source=Mapillary | type=feature | distance=\u00b17.16m | feature=object | value=\"object--support--utility-pole\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.2.1] Places one [TEXTURE_OB"
      ]
    },
    {
      "code": "DP.C1.2.3",
      "prefix": "DP",
      "pages": [
        10
      ],
      "occurrenceCount": 1,
      "contexts": [
        "struction--flat--driveway\" [DP.C1.2.2] source=Mapillary | type=feature | distance=\u00b14.27m | feature=object | value=\"object--traffic-cone\" [DP.C1.2.3] source=Mapillary | type=feature | distance=\u00b14.51m | feature=object | value=\"object--traffic-cone\" [DP.C1.2.4] source=Mapillary | type=feature | distance=\u00b17.16m | feature=object | value=\"object--support--utility-pole\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.2.1] Places one [TEXTURE_OBJECT] at \u00b13.55 metres under [ELEVATION], with surface descending, the elevation drop begins here. [ST.C1.2.2]"
      ]
    },
    {
      "code": "DP.C1.2.4",
      "prefix": "DP",
      "pages": [
        10
      ],
      "occurrenceCount": 1,
      "contexts": [
        "lue=\"object--traffic-cone\" [DP.C1.2.3] source=Mapillary | type=feature | distance=\u00b14.51m | feature=object | value=\"object--traffic-cone\" [DP.C1.2.4] source=Mapillary | type=feature | distance=\u00b17.16m | feature=object | value=\"object--support--utility-pole\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.2.1] Places one [TEXTURE_OBJECT] at \u00b13.55 metres under [ELEVATION], with surface descending, the elevation drop begins here. [ST.C1.2.2] Places two [SOLID_MASS_OBJECT] knee-high at \u00b14.27 and \u00b14.51 metres and one [SOLID_MASS_OBJECT] vertical at \u00b17."
      ]
    },
    {
      "code": "DP.C1.3.1",
      "prefix": "DP",
      "pages": [
        10
      ],
      "occurrenceCount": 1,
      "contexts": [
        "L_GRIP] on the [LINEAR_OBJECT] through the passage, referring to [ST.C1.2.3]. [C1.3] Authority Interruption DATA PROVOCATION \u00b7 RAW DATA [DP.C1.3.1] source=Mapillary | type=feature | distance=\u00b112.15m | feature=regulatory | value=\"regulatory--no-right-turn--g1\" [DP.C1.3.2] source=Mapillary | type=feature | distance=\u00b112.49m | feature=object | value=\"object--support--utility-pole\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.3.1] Reads one [REGULATORY_OBJECT] at \u00b112.15 metres on the edge under [AUTHORITY], applying direction=right closed, held wi"
      ]
    },
    {
      "code": "DP.C1.3.2",
      "prefix": "DP",
      "pages": [
        10
      ],
      "occurrenceCount": 1,
      "contexts": [
        "N \u00b7 RAW DATA [DP.C1.3.1] source=Mapillary | type=feature | distance=\u00b112.15m | feature=regulatory | value=\"regulatory--no-right-turn--g1\" [DP.C1.3.2] source=Mapillary | type=feature | distance=\u00b112.49m | feature=object | value=\"object--support--utility-pole\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.3.1] Reads one [REGULATORY_OBJECT] at \u00b112.15 metres on the edge under [AUTHORITY], applying direction=right closed, held with cursor forward and hip in latent turn. [ST.C1.3.2] Places one [SOLID_MASS_OBJECT] vertical at \u00b112.49 metres as adjacent a"
      ]
    },
    {
      "code": "DP.C1.4.1",
      "prefix": "DP",
      "pages": [
        11
      ],
      "occurrenceCount": 1,
      "contexts": [
        "ng [RIGID_POSTURE] that registers authority as torque, referring to [ST.C1.3.1]. [C1.4] Semantic Aggression DATA PROVOCATION \u00b7 RAW DATA [DP.C1.4.1] source=Mapillary | type=feature | distance=\u00b112.45m | feature=object | value=\"object--sign--advertisement\" [DP.C1.4.2] source=Mapillary | type=feature | distance=\u00b112.66m | feature=object | value=\"object--traffic-cone\" [DP.C1.4.3] source=Mapillary | type=feature | distance=\u00b113.94m | feature=object | value=\"object--support--utility-pole\" [DP.C1.4.4] source=Mapillary | type=feature | distance=\u00b114.80m | feature=obj"
      ]
    },
    {
      "code": "DP.C1.4.2",
      "prefix": "DP",
      "pages": [
        11
      ],
      "occurrenceCount": 1,
      "contexts": [
        "OCATION \u00b7 RAW DATA [DP.C1.4.1] source=Mapillary | type=feature | distance=\u00b112.45m | feature=object | value=\"object--sign--advertisement\" [DP.C1.4.2] source=Mapillary | type=feature | distance=\u00b112.66m | feature=object | value=\"object--traffic-cone\" [DP.C1.4.3] source=Mapillary | type=feature | distance=\u00b113.94m | feature=object | value=\"object--support--utility-pole\" [DP.C1.4.4] source=Mapillary | type=feature | distance=\u00b114.80m | feature=object | value=\"object--sign--advertisement\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.4.1] Reads two [S"
      ]
    },
    {
      "code": "DP.C1.4.3",
      "prefix": "DP",
      "pages": [
        11
      ],
      "occurrenceCount": 1,
      "contexts": [
        "ect--sign--advertisement\" [DP.C1.4.2] source=Mapillary | type=feature | distance=\u00b112.66m | feature=object | value=\"object--traffic-cone\" [DP.C1.4.3] source=Mapillary | type=feature | distance=\u00b113.94m | feature=object | value=\"object--support--utility-pole\" [DP.C1.4.4] source=Mapillary | type=feature | distance=\u00b114.80m | feature=object | value=\"object--sign--advertisement\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.4.1] Reads two [SEMANTIC_OBJECT] at \u00b112.45 and \u00b114.80 metres under [SEMANTIC], with gaze off-axis and head in latent rotation, pu"
      ]
    },
    {
      "code": "DP.C1.4.4",
      "prefix": "DP",
      "pages": [
        11
      ],
      "occurrenceCount": 1,
      "contexts": [
        "t--traffic-cone\" [DP.C1.4.3] source=Mapillary | type=feature | distance=\u00b113.94m | feature=object | value=\"object--support--utility-pole\" [DP.C1.4.4] source=Mapillary | type=feature | distance=\u00b114.80m | feature=object | value=\"object--sign--advertisement\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.4.1] Reads two [SEMANTIC_OBJECT] at \u00b112.45 and \u00b114.80 metres under [SEMANTIC], with gaze off-axis and head in latent rotation, pulling attention repeatedly off the working line. [ST.C1.4.2] Places one [SOLID_MASS_OBJECT] knee-high at \u00b112.66 metres a"
      ]
    },
    {
      "code": "DP.C1.5.1",
      "prefix": "DP",
      "pages": [
        11
      ],
      "occurrenceCount": 1,
      "contexts": [
        "CONSTANT], sustaining [MECHANICAL_GRIP] throughout, referring to [ST.C1.4.3]. [C1.5] Node B \u00b7 Final Contact DATA PROVOCATION \u00b7 RAW DATA [DP.C1.5.1] source=Mapillary | type=feature | distance=\u00b114.31m | feature=object | value=\"object--manhole\" [DP.C1.5.2] source=Mapillary | type=feature | distance=\u00b115.00m | feature=bounds | value=\"Node_B terminal\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.5.1] Places one [GROUND_TEXTURE_OBJECT] at \u00b114.31 metres as metal cover under [ELEVATION], receiving the terminal step with foot at slip-potential and grou"
      ]
    },
    {
      "code": "DP.C1.5.2",
      "prefix": "DP",
      "pages": [
        11
      ],
      "occurrenceCount": 1,
      "contexts": [
        "t DATA PROVOCATION \u00b7 RAW DATA [DP.C1.5.1] source=Mapillary | type=feature | distance=\u00b114.31m | feature=object | value=\"object--manhole\" [DP.C1.5.2] source=Mapillary | type=feature | distance=\u00b115.00m | feature=bounds | value=\"Node_B terminal\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.5.1] Places one [GROUND_TEXTURE_OBJECT] at \u00b114.31 metres as metal cover under [ELEVATION], receiving the terminal step with foot at slip-potential and ground hollow. [ST.C1.5.2] Declares [SYSTEM] Node_B reached, with route complete and cursor arrived, closing"
      ]
    },
    {
      "code": "DP.C2.0.0",
      "prefix": "DP",
      "pages": [
        16
      ],
      "occurrenceCount": 1,
      "contexts": [
        "during Phase 03 (C2.6) [PHASE 1] DEPARTURE POINT \u00b7 Utility Corridor [C2.0] Origin Anchor \u00b7 Utility Corridor DATA PROVOCATION \u00b7 RAW DATA [DP.C2.0.0] source=Mapillary | type=bounds | lon=107.570\u2013107.586 | lat=-6.931 \u2194 -6.905 [DP.C2.0.1] source=Mapillary | type=feature | coord=107.575,-6.910 | feature=object | value=\"object--support--utility-pole\" [DP.C2.0.2] source=Mapillary | type=feature | distance=\u00b12.10m | feature=object | value=\"object--trash-can\" [DP.C2.0.3] source=Mapillary | type=feature | distance=\u00b13.20m | feature=object | value=\"object--manhole\" ["
      ]
    },
    {
      "code": "DP.C2.0.1",
      "prefix": "DP",
      "pages": [
        16
      ],
      "occurrenceCount": 1,
      "contexts": [
        "or \u00b7 Utility Corridor DATA PROVOCATION \u00b7 RAW DATA [DP.C2.0.0] source=Mapillary | type=bounds | lon=107.570\u2013107.586 | lat=-6.931 \u2194 -6.905 [DP.C2.0.1] source=Mapillary | type=feature | coord=107.575,-6.910 | feature=object | value=\"object--support--utility-pole\" [DP.C2.0.2] source=Mapillary | type=feature | distance=\u00b12.10m | feature=object | value=\"object--trash-can\" [DP.C2.0.3] source=Mapillary | type=feature | distance=\u00b13.20m | feature=object | value=\"object--manhole\" [DP.C2.0.4] source=Mapillary | type=feature | distance=\u00b15.50m | feature=object | value=\""
      ]
    },
    {
      "code": "DP.C2.0.2",
      "prefix": "DP",
      "pages": [
        16
      ],
      "occurrenceCount": 1,
      "contexts": [
        "931 \u2194 -6.905 [DP.C2.0.1] source=Mapillary | type=feature | coord=107.575,-6.910 | feature=object | value=\"object--support--utility-pole\" [DP.C2.0.2] source=Mapillary | type=feature | distance=\u00b12.10m | feature=object | value=\"object--trash-can\" [DP.C2.0.3] source=Mapillary | type=feature | distance=\u00b13.20m | feature=object | value=\"object--manhole\" [DP.C2.0.4] source=Mapillary | type=feature | distance=\u00b15.50m | feature=object | value=\"object--support--utility-pole\" [DP.C2.0.5] source=Mapillary | type=feature | distance=\u00b17.80m | feature=construction | value="
      ]
    },
    {
      "code": "DP.C2.0.3",
      "prefix": "DP",
      "pages": [
        16
      ],
      "occurrenceCount": 1,
      "contexts": [
        "bject--support--utility-pole\" [DP.C2.0.2] source=Mapillary | type=feature | distance=\u00b12.10m | feature=object | value=\"object--trash-can\" [DP.C2.0.3] source=Mapillary | type=feature | distance=\u00b13.20m | feature=object | value=\"object--manhole\" [DP.C2.0.4] source=Mapillary | type=feature | distance=\u00b15.50m | feature=object | value=\"object--support--utility-pole\" [DP.C2.0.5] source=Mapillary | type=feature | distance=\u00b17.80m | feature=construction | value=\"construction--flat--driveway\" [DP.C2.0.6] source=Mapillary | type=feature | distance=\u00b19.15m | feature=regul"
      ]
    },
    {
      "code": "DP.C2.0.4",
      "prefix": "DP",
      "pages": [
        16
      ],
      "occurrenceCount": 1,
      "contexts": [
        "ct | value=\"object--trash-can\" [DP.C2.0.3] source=Mapillary | type=feature | distance=\u00b13.20m | feature=object | value=\"object--manhole\" [DP.C2.0.4] source=Mapillary | type=feature | distance=\u00b15.50m | feature=object | value=\"object--support--utility-pole\" [DP.C2.0.5] source=Mapillary | type=feature | distance=\u00b17.80m | feature=construction | value=\"construction--flat--driveway\" [DP.C2.0.6] source=Mapillary | type=feature | distance=\u00b19.15m | feature=regulatory | value=\"regulatory--merge--g1\" [DP.C2.0.7] source=Mapillary | type=feature | distance=\u00b110.40m | fe"
      ]
    },
    {
      "code": "DP.C2.0.5",
      "prefix": "DP",
      "pages": [
        16
      ],
      "occurrenceCount": 1,
      "contexts": [
        "\"object--manhole\" [DP.C2.0.4] source=Mapillary | type=feature | distance=\u00b15.50m | feature=object | value=\"object--support--utility-pole\" [DP.C2.0.5] source=Mapillary | type=feature | distance=\u00b17.80m | feature=construction | value=\"construction--flat--driveway\" [DP.C2.0.6] source=Mapillary | type=feature | distance=\u00b19.15m | feature=regulatory | value=\"regulatory--merge--g1\" [DP.C2.0.7] source=Mapillary | type=feature | distance=\u00b110.40m | feature=object | value=\"object--traffic-cone\" [DP.C2.0.8] source=Mapillary | type=feature | distance=\u00b111.90m | feature=ob"
      ]
    },
    {
      "code": "DP.C2.0.6",
      "prefix": "DP",
      "pages": [
        16
      ],
      "occurrenceCount": 1,
      "contexts": [
        "tility-pole\" [DP.C2.0.5] source=Mapillary | type=feature | distance=\u00b17.80m | feature=construction | value=\"construction--flat--driveway\" [DP.C2.0.6] source=Mapillary | type=feature | distance=\u00b19.15m | feature=regulatory | value=\"regulatory--merge--g1\" [DP.C2.0.7] source=Mapillary | type=feature | distance=\u00b110.40m | feature=object | value=\"object--traffic-cone\" [DP.C2.0.8] source=Mapillary | type=feature | distance=\u00b111.90m | feature=object | value=\"object--sign--advertisement\" [DP.C2.0.9] source=Mapillary | type=feature | distance=\u00b113.55m | feature=regulato"
      ]
    },
    {
      "code": "DP.C2.0.7",
      "prefix": "DP",
      "pages": [
        16
      ],
      "occurrenceCount": 1,
      "contexts": [
        "tion--flat--driveway\" [DP.C2.0.6] source=Mapillary | type=feature | distance=\u00b19.15m | feature=regulatory | value=\"regulatory--merge--g1\" [DP.C2.0.7] source=Mapillary | type=feature | distance=\u00b110.40m | feature=object | value=\"object--traffic-cone\" [DP.C2.0.8] source=Mapillary | type=feature | distance=\u00b111.90m | feature=object | value=\"object--sign--advertisement\" [DP.C2.0.9] source=Mapillary | type=feature | distance=\u00b113.55m | feature=regulatory | value=\"regulatory--weight-limit--g1\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.0] Declares a"
      ]
    },
    {
      "code": "DP.C2.0.8",
      "prefix": "DP",
      "pages": [
        16
      ],
      "occurrenceCount": 1,
      "contexts": [
        "e=\"regulatory--merge--g1\" [DP.C2.0.7] source=Mapillary | type=feature | distance=\u00b110.40m | feature=object | value=\"object--traffic-cone\" [DP.C2.0.8] source=Mapillary | type=feature | distance=\u00b111.90m | feature=object | value=\"object--sign--advertisement\" [DP.C2.0.9] source=Mapillary | type=feature | distance=\u00b113.55m | feature=regulatory | value=\"regulatory--weight-limit--g1\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.0] Declares a [SYSTEM] axis from Node_A to Node_B across the utility corridor, spanning 14m, opened on utility-corridor mode."
      ]
    },
    {
      "code": "DP.C2.0.9",
      "prefix": "DP",
      "pages": [
        16
      ],
      "occurrenceCount": 1,
      "contexts": [
        "ect--traffic-cone\" [DP.C2.0.8] source=Mapillary | type=feature | distance=\u00b111.90m | feature=object | value=\"object--sign--advertisement\" [DP.C2.0.9] source=Mapillary | type=feature | distance=\u00b113.55m | feature=regulatory | value=\"regulatory--weight-limit--g1\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.0] Declares a [SYSTEM] axis from Node_A to Node_B across the utility corridor, spanning 14m, opened on utility-corridor mode. [ST.C2.0.1] Places one [LINEAR_OBJECT] as utility line at inner side from Node_A to Node_B, spanning 14m, held in con"
      ]
    },
    {
      "code": "DP.C2.1.1",
      "prefix": "DP",
      "pages": [
        17
      ],
      "occurrenceCount": 1,
      "contexts": [
        "below is a single score-text sentence built from declared tokens. [C2.1] Initial Traction \u00b7 Utility Corridor DATA PROVOCATION \u00b7 RAW DATA [DP.C2.1.1] source=Mapillary | type=feature | distance=\u00b10.0m | feature=object | value=\"object--support--utility-pole\" [DP.C2.1.2] source=Mapillary | type=feature | distance=\u00b12.10m | feature=object | value=\"object--trash-can\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.1.1] Declares [SYSTEM] Score 02 cursor initiation at Node_A, in grid transit with cursor forward. [ST.C2.1.2] Reads one [SOLID_MASS_OBJECT] v"
      ]
    },
    {
      "code": "DP.C2.1.2",
      "prefix": "DP",
      "pages": [
        17
      ],
      "occurrenceCount": 1,
      "contexts": [
        "OCATION \u00b7 RAW DATA [DP.C2.1.1] source=Mapillary | type=feature | distance=\u00b10.0m | feature=object | value=\"object--support--utility-pole\" [DP.C2.1.2] source=Mapillary | type=feature | distance=\u00b12.10m | feature=object | value=\"object--trash-can\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.1.1] Declares [SYSTEM] Score 02 cursor initiation at Node_A, in grid transit with cursor forward. [ST.C2.1.2] Reads one [SOLID_MASS_OBJECT] vertical at origin as first anchor under [MASS], with shoulder against the pole in initial traction. [ST.C2.1.3] Reads"
      ]
    },
    {
      "code": "DP.C2.2.1",
      "prefix": "DP",
      "pages": [
        17
      ],
      "occurrenceCount": 1,
      "contexts": [
        "r [ALERT], producing [STANCE_PIVOT] around the anchor, referring to [ST.C2.1.2]. [C2.2] Sub-Surface Footing DATA PROVOCATION \u00b7 RAW DATA [DP.C2.2.1] source=Mapillary | type=feature | distance=\u00b13.20m | feature=object | value=\"object--manhole\" [DP.C2.2.2] source=Mapillary | type=feature | distance=\u00b15.50m | feature=object | value=\"object--support--utility-pole\" SITUATION \u00b7 SPATIAL SCORE"
      ]
    },
    {
      "code": "DP.C2.2.2",
      "prefix": "DP",
      "pages": [
        17
      ],
      "occurrenceCount": 1,
      "contexts": [
        "ng DATA PROVOCATION \u00b7 RAW DATA [DP.C2.2.1] source=Mapillary | type=feature | distance=\u00b13.20m | feature=object | value=\"object--manhole\" [DP.C2.2.2] source=Mapillary | type=feature | distance=\u00b15.50m | feature=object | value=\"object--support--utility-pole\" SITUATION \u00b7 SPATIAL SCORE"
      ]
    },
    {
      "code": "DP.C2.3.1",
      "prefix": "DP",
      "pages": [
        18
      ],
      "occurrenceCount": 1,
      "contexts": [
        "S] and [LUMBAR] spine under [CONSTANT], with balance re-set, referring to [ST.C2.2.2]. [C2.3] Driveway Tilt DATA PROVOCATION \u00b7 RAW DATA [DP.C2.3.1] source=Mapillary | type=feature | distance=\u00b17.80m | feature=construction | value=\"construction--flat--driveway\" [DP.C2.3.2] source=Mapillary | type=feature | distance=\u00b19.15m | feature=regulatory | value=\"regulatory--merge--g1\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.3.1] Places one [TEXTURE_OBJECT] at \u00b17.80 metres under [ELEVATION], with slope descending, the pelvis rotates against the inclin"
      ]
    },
    {
      "code": "DP.C2.3.2",
      "prefix": "DP",
      "pages": [
        18
      ],
      "occurrenceCount": 1,
      "contexts": [
        "N \u00b7 RAW DATA [DP.C2.3.1] source=Mapillary | type=feature | distance=\u00b17.80m | feature=construction | value=\"construction--flat--driveway\" [DP.C2.3.2] source=Mapillary | type=feature | distance=\u00b19.15m | feature=regulatory | value=\"regulatory--merge--g1\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.3.1] Places one [TEXTURE_OBJECT] at \u00b17.80 metres under [ELEVATION], with slope descending, the pelvis rotates against the incline. [ST.C2.3.2] Reads one [REGULATORY_OBJECT] at \u00b19.15 metres under [AUTHORITY], applying direction=merge imposed, the route"
      ]
    },
    {
      "code": "DP.C2.4.1",
      "prefix": "DP",
      "pages": [
        18
      ],
      "occurrenceCount": 1,
      "contexts": [
        "aligned toward the convergence line, referring to [ST.C2.3.2]. [C2.4] Merge Authority \u00b7 Arterial Convergence DATA PROVOCATION \u00b7 RAW DATA [DP.C2.4.1] source=Mapillary | type=feature | distance=\u00b110.40m | feature=object | value=\"object--traffic-cone\" [DP.C2.4.2] source=Mapillary | type=feature | distance=\u00b111.90m | feature=object | value=\"object--sign--advertisement\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.4.1] Places one [SOLID_MASS_OBJECT] knee-high at \u00b110.40 metres under [MASS], the corridor channelled by the traffic-cone. [ST.C2.4.2] Re"
      ]
    },
    {
      "code": "DP.C2.4.2",
      "prefix": "DP",
      "pages": [
        18
      ],
      "occurrenceCount": 1,
      "contexts": [
        "TA PROVOCATION \u00b7 RAW DATA [DP.C2.4.1] source=Mapillary | type=feature | distance=\u00b110.40m | feature=object | value=\"object--traffic-cone\" [DP.C2.4.2] source=Mapillary | type=feature | distance=\u00b111.90m | feature=object | value=\"object--sign--advertisement\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.4.1] Places one [SOLID_MASS_OBJECT] knee-high at \u00b110.40 metres under [MASS], the corridor channelled by the traffic-cone. [ST.C2.4.2] Reads one [SEMANTIC_OBJECT] at \u00b111.90 metres under [SEMANTIC], with gaze competing with the trajectory at eye leve"
      ]
    },
    {
      "code": "DP.C2.5.1",
      "prefix": "DP",
      "pages": [
        19
      ],
      "occurrenceCount": 1,
      "contexts": [
        "[FIXATION_HOLD] that competes with forward motion, referring to [ST.C2.4.2]. [C2.5] Node B \u00b7 Final Contact DATA PROVOCATION \u00b7 RAW DATA [DP.C2.5.1] source=Mapillary | type=feature | distance=\u00b113.55m | feature=regulatory | value=\"regulatory--weight-limit--g1\" [DP.C2.5.2] source=Mapillary | type=feature | distance=\u00b114.00m | feature=bounds | value=\"Node_B terminal\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.5.1] Reads one [REGULATORY_OBJECT] at \u00b113.55 metres under [AUTHORITY], applying weight-limit declared, the field closes at the merge termi"
      ]
    },
    {
      "code": "DP.C2.5.2",
      "prefix": "DP",
      "pages": [
        19
      ],
      "occurrenceCount": 1,
      "contexts": [
        "ON \u00b7 RAW DATA [DP.C2.5.1] source=Mapillary | type=feature | distance=\u00b113.55m | feature=regulatory | value=\"regulatory--weight-limit--g1\" [DP.C2.5.2] source=Mapillary | type=feature | distance=\u00b114.00m | feature=bounds | value=\"Node_B terminal\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.5.1] Reads one [REGULATORY_OBJECT] at \u00b113.55 metres under [AUTHORITY], applying weight-limit declared, the field closes at the merge terminus. [ST.C2.5.2] Declares [SYSTEM] Node_B reached, with route complete and cursor arrived, the body carries residual load."
      ]
    },
    {
      "code": "KS.C1.6.1",
      "prefix": "KS",
      "pages": [
        13
      ],
      "occurrenceCount": 1,
      "contexts": [
        "ter Over Active Codes [C1.6] Iteration Register \u00b7 Impulse Variation on Active Codes SOURCE CODE \u00b7 REGISTER (KS) CODE SOURCE \u00b7 SENTENCE [KS.C1.6.1] Carries all active checkpoints from [ST.C1.1] through [ST.C1.5], forming the source register that iteration must traverse at least once. [KS.C1.6.2] Re-activates the situation set : [ST.C1.1] Initial Traction, [ST.C1.2] Compression Corridor, [ST.C1.3] Authority Interruption, [ST.C1.4] Semantic Aggression, [ST.C1.5] Node B Final Contact. [KS.C1.6.3] Re-activates the impulse set : [RT.C1.1] under [ACCELERATION"
      ]
    },
    {
      "code": "KS.C1.6.2",
      "prefix": "KS",
      "pages": [
        13
      ],
      "occurrenceCount": 1,
      "contexts": [
        "Carries all active checkpoints from [ST.C1.1] through [ST.C1.5], forming the source register that iteration must traverse at least once. [KS.C1.6.2] Re-activates the situation set : [ST.C1.1] Initial Traction, [ST.C1.2] Compression Corridor, [ST.C1.3] Authority Interruption, [ST.C1.4] Semantic Aggression, [ST.C1.5] Node B Final Contact. [KS.C1.6.3] Re-activates the impulse set : [RT.C1.1] under [ACCELERATION] and [COMPRESSION], [RT.C1.2] under [COMPRESSION] and [CONSTANT], [RT.C1.3] under [FREEZE] and [GLITCH], [RT.C1.4] under [FIXATION] and [COMPRESSION]"
      ]
    },
    {
      "code": "KS.C1.6.3",
      "prefix": "KS",
      "pages": [
        13
      ],
      "occurrenceCount": 1,
      "contexts": [
        "action, [ST.C1.2] Compression Corridor, [ST.C1.3] Authority Interruption, [ST.C1.4] Semantic Aggression, [ST.C1.5] Node B Final Contact. [KS.C1.6.3] Re-activates the impulse set : [RT.C1.1] under [ACCELERATION] and [COMPRESSION], [RT.C1.2] under [COMPRESSION] and [CONSTANT], [RT.C1.3] under [FREEZE] and [GLITCH], [RT.C1.4] under [FIXATION] and [COMPRESSION], [RT.C1.5] under [ASYMMETRIC] and [ALERT]. [KS.C1.6.4] Declares [SYSTEM] no new checkpoint permitted, the register only replays codes already active during the linear flow. ACTIVE SITUATION CODES \u00b7 SP"
      ]
    },
    {
      "code": "KS.C1.6.4",
      "prefix": "KS",
      "pages": [
        13
      ],
      "occurrenceCount": 1,
      "contexts": [
        "ONSTANT], [RT.C1.3] under [FREEZE] and [GLITCH], [RT.C1.4] under [FIXATION] and [COMPRESSION], [RT.C1.5] under [ASYMMETRIC] and [ALERT]. [KS.C1.6.4] Declares [SYSTEM] no new checkpoint permitted, the register only replays codes already active during the linear flow. ACTIVE SITUATION CODES \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.6.1] Declares [SYSTEM] the grid from Node_A to Node_B complete and Node_C closed, with cursor still in transit. [ST.C1.6.2] Reads one [LINEAR_OBJECT] across 15m, held in contact with full tension, permitting no slack at an"
      ]
    },
    {
      "code": "KS.C2.6.1",
      "prefix": "KS",
      "pages": [
        21
      ],
      "occurrenceCount": 1,
      "contexts": [
        "Object Insertion [C2.6] Iteration Register \u00b7 Impulse Variation and Object Insertion SOURCE CODE \u00b7 REGISTER (KS) CODE SOURCE \u00b7 SENTENCE [KS.C2.6.1] Carries all active checkpoints from [ST.C2.1] through [ST.C2.5], forming the source register that iteration must traverse at least once. [KS.C2.6.2] Re-activates the situation set : [ST.C2.1] Initial Traction, [ST.C2.2] Sub-Surface Footing, [ST.C2.3] Driveway Tilt, [ST.C2.4] Merge Authority, [ST.C2.5] Node B Final Contact. [KS.C2.6.3] Re-activates the impulse set under [ACCELERATION], [COMPRESSION], [GLITCH],"
      ]
    },
    {
      "code": "KS.C2.6.2",
      "prefix": "KS",
      "pages": [
        21
      ],
      "occurrenceCount": 1,
      "contexts": [
        "Carries all active checkpoints from [ST.C2.1] through [ST.C2.5], forming the source register that iteration must traverse at least once. [KS.C2.6.2] Re-activates the situation set : [ST.C2.1] Initial Traction, [ST.C2.2] Sub-Surface Footing, [ST.C2.3] Driveway Tilt, [ST.C2.4] Merge Authority, [ST.C2.5] Node B Final Contact. [KS.C2.6.3] Re-activates the impulse set under [ACCELERATION], [COMPRESSION], [GLITCH], [FIXATION], [ALERT] and [CONSTANT], already declared in Phase 02. [KS.C2.6.4] Permits additional obstacles to enter the register during iteration wi"
      ]
    },
    {
      "code": "KS.C2.6.3",
      "prefix": "KS",
      "pages": [
        21
      ],
      "occurrenceCount": 1,
      "contexts": [
        "2.1] Initial Traction, [ST.C2.2] Sub-Surface Footing, [ST.C2.3] Driveway Tilt, [ST.C2.4] Merge Authority, [ST.C2.5] Node B Final Contact. [KS.C2.6.3] Re-activates the impulse set under [ACCELERATION], [COMPRESSION], [GLITCH], [FIXATION], [ALERT] and [CONSTANT], already declared in Phase 02. [KS.C2.6.4] Permits additional obstacles to enter the register during iteration without becoming new checkpoints. ACTIVE SITUATION CODES \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.6.1] Declares [SYSTEM] the grid from Node_A to Node_B complete and Node_C closed, wit"
      ]
    },
    {
      "code": "KS.C2.6.4",
      "prefix": "KS",
      "pages": [
        21
      ],
      "occurrenceCount": 1,
      "contexts": [
        "ctivates the impulse set under [ACCELERATION], [COMPRESSION], [GLITCH], [FIXATION], [ALERT] and [CONSTANT], already declared in Phase 02. [KS.C2.6.4] Permits additional obstacles to enter the register during iteration without becoming new checkpoints. ACTIVE SITUATION CODES \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.6.1] Declares [SYSTEM] the grid from Node_A to Node_B complete and Node_C closed, with cursor in transit. [ST.C2.6.2] Reads one [LINEAR_OBJECT] across 14m, held in contact with full tension throughout iteration. [ST.C2.6.3] Reads two [R"
      ]
    },
    {
      "code": "OE.C1.END.1",
      "prefix": "OE",
      "pages": [
        12
      ],
      "occurrenceCount": 1,
      "contexts": [
        "ollowing register carries the residues that must be preserved into Phase 03 iteration. OUTPUT END STATE \u00b7 OE CODE END STATE \u00b7 SENTENCE [OE.C1.END.1] Holds contact with the [LINEAR_OBJECT] maintained, producing [MECHANICAL_GRIP] that has not yet been released. [OE.C1.END.2] Holds gaze in residual [FIXATION], with head returned to neutral but a micro-delay remaining in the [CERVICAL] spine. [OE.C1.END.3] Holds posture narrow as residual, producing [COMPRESSED_VOLUME] not fully released. [OE.C1.END.4] Declares [SYSTEM] the score awaiting its next command,"
      ]
    },
    {
      "code": "OE.C1.END.2",
      "prefix": "OE",
      "pages": [
        12
      ],
      "occurrenceCount": 1,
      "contexts": [
        "\u00b7 SENTENCE [OE.C1.END.1] Holds contact with the [LINEAR_OBJECT] maintained, producing [MECHANICAL_GRIP] that has not yet been released. [OE.C1.END.2] Holds gaze in residual [FIXATION], with head returned to neutral but a micro-delay remaining in the [CERVICAL] spine. [OE.C1.END.3] Holds posture narrow as residual, producing [COMPRESSED_VOLUME] not fully released. [OE.C1.END.4] Declares [SYSTEM] the score awaiting its next command, opening either [ITERATION_BUFFER] or [NODE_TRANSFER]. BODY IMPULSE \u00b7 END STATE CODE SCORE \u00b7 SENTENCE [RT.C1.END.1] Sustain"
      ]
    },
    {
      "code": "OE.C1.END.3",
      "prefix": "OE",
      "pages": [
        12
      ],
      "occurrenceCount": 1,
      "contexts": [
        "ed. [OE.C1.END.2] Holds gaze in residual [FIXATION], with head returned to neutral but a micro-delay remaining in the [CERVICAL] spine. [OE.C1.END.3] Holds posture narrow as residual, producing [COMPRESSED_VOLUME] not fully released. [OE.C1.END.4] Declares [SYSTEM] the score awaiting its next command, opening either [ITERATION_BUFFER] or [NODE_TRANSFER]. BODY IMPULSE \u00b7 END STATE CODE SCORE \u00b7 SENTENCE [RT.C1.END.1] Sustains [HOLD] on the [LINEAR_OBJECT] at the [FINGER] and [PALM] under [CONSTANT], held in [MECHANICAL_GRIP] with release pending. [RT.C1.E"
      ]
    },
    {
      "code": "OE.C1.END.4",
      "prefix": "OE",
      "pages": [
        12
      ],
      "occurrenceCount": 1,
      "contexts": [
        "ay remaining in the [CERVICAL] spine. [OE.C1.END.3] Holds posture narrow as residual, producing [COMPRESSED_VOLUME] not fully released. [OE.C1.END.4] Declares [SYSTEM] the score awaiting its next command, opening either [ITERATION_BUFFER] or [NODE_TRANSFER]. BODY IMPULSE \u00b7 END STATE CODE SCORE \u00b7 SENTENCE [RT.C1.END.1] Sustains [HOLD] on the [LINEAR_OBJECT] at the [FINGER] and [PALM] under [CONSTANT], held in [MECHANICAL_GRIP] with release pending. [RT.C1.END.2] Performs micro [RECOVER] at the [CERVICAL] spine under [ALERT], producing residual [FIXATION"
      ]
    },
    {
      "code": "OE.C2.END.1",
      "prefix": "OE",
      "pages": [
        19
      ],
      "occurrenceCount": 1,
      "contexts": [
        "2 axis. The following register carries residues that must be preserved into iteration. OUTPUT END STATE \u00b7 OE CODE END STATE \u00b7 SENTENCE [OE.C2.END.1] Holds contact with the [LINEAR_OBJECT] maintained, producing [MECHANICAL_GRIP] that is weight-aware. [OE.C2.END.2] Holds gaze in residual [FIXATION], with head returned to neutral but a micro-delay remaining in the [CERVICAL] spine. [OE.C2.END.3] Holds posture narrow as residual, producing [COMPRESSED_VOLUME] not fully released."
      ]
    },
    {
      "code": "OE.C2.END.2",
      "prefix": "OE",
      "pages": [
        19
      ],
      "occurrenceCount": 1,
      "contexts": [
        "END STATE \u00b7 SENTENCE [OE.C2.END.1] Holds contact with the [LINEAR_OBJECT] maintained, producing [MECHANICAL_GRIP] that is weight-aware. [OE.C2.END.2] Holds gaze in residual [FIXATION], with head returned to neutral but a micro-delay remaining in the [CERVICAL] spine. [OE.C2.END.3] Holds posture narrow as residual, producing [COMPRESSED_VOLUME] not fully released."
      ]
    },
    {
      "code": "OE.C2.END.3",
      "prefix": "OE",
      "pages": [
        19
      ],
      "occurrenceCount": 1,
      "contexts": [
        "re. [OE.C2.END.2] Holds gaze in residual [FIXATION], with head returned to neutral but a micro-delay remaining in the [CERVICAL] spine. [OE.C2.END.3] Holds posture narrow as residual, producing [COMPRESSED_VOLUME] not fully released."
      ]
    },
    {
      "code": "OE.C2.END.4",
      "prefix": "OE",
      "pages": [
        20
      ],
      "occurrenceCount": 1,
      "contexts": [
        "CODE END STATE \u00b7 SENTENCE [OE.C2.END.4] Holds direction toward merge as residual, producing residual [MERGE_PULL] in the [PELVIS]. [OE.C2.END.5] Declares [SYSTEM] the score awaiting its next command, opening either [ITERATION_BUFFER] or [NODE_TRANSFER]."
      ]
    },
    {
      "code": "OE.C2.END.5",
      "prefix": "OE",
      "pages": [
        20
      ],
      "occurrenceCount": 1,
      "contexts": [
        "CODE END STATE \u00b7 SENTENCE [OE.C2.END.4] Holds direction toward merge as residual, producing residual [MERGE_PULL] in the [PELVIS]. [OE.C2.END.5] Declares [SYSTEM] the score awaiting its next command, opening either [ITERATION_BUFFER] or [NODE_TRANSFER]."
      ]
    },
    {
      "code": "OP.C2.6.1",
      "prefix": "OP",
      "pages": [
        22
      ],
      "occurrenceCount": 1,
      "contexts": [
        ". [TR.C2.6.7] Constrains obstacles once touched from being tidied, moved, or corrected. REPETITION OUTPUT \u00b7 OP CODE OUTPUT \u00b7 SENTENCE [OP.C2.6.1] Holds posture narrow as residual, carrying [COMPRESSED_VOLUME] forward. [OP.C2.6.2] Holds weight shifting as residual, carrying [ASYMMETRIC_STANCE] forward. [OP.C2.6.3] Holds direction merge as residual, carrying residual [MERGE_PULL]. [OP.C2.6.4] Holds contact with the [LINEAR_OBJECT] maintained, carrying [MECHANICAL_GRIP]. [OP.C2.6.5] Declares no new route permitted, retaining residues of compression, asy"
      ]
    },
    {
      "code": "OP.C2.6.2",
      "prefix": "OP",
      "pages": [
        22
      ],
      "occurrenceCount": 1,
      "contexts": [
        "ed. REPETITION OUTPUT \u00b7 OP CODE OUTPUT \u00b7 SENTENCE [OP.C2.6.1] Holds posture narrow as residual, carrying [COMPRESSED_VOLUME] forward. [OP.C2.6.2] Holds weight shifting as residual, carrying [ASYMMETRIC_STANCE] forward. [OP.C2.6.3] Holds direction merge as residual, carrying residual [MERGE_PULL]. [OP.C2.6.4] Holds contact with the [LINEAR_OBJECT] maintained, carrying [MECHANICAL_GRIP]. [OP.C2.6.5] Declares no new route permitted, retaining residues of compression, asymmetry, merge, and load. [OP.C2.6.6] Declares [SYSTEM] iteration orchestration pass"
      ]
    },
    {
      "code": "OP.C2.6.3",
      "prefix": "OP",
      "pages": [
        22
      ],
      "occurrenceCount": 1,
      "contexts": [
        "as residual, carrying [COMPRESSED_VOLUME] forward. [OP.C2.6.2] Holds weight shifting as residual, carrying [ASYMMETRIC_STANCE] forward. [OP.C2.6.3] Holds direction merge as residual, carrying residual [MERGE_PULL]. [OP.C2.6.4] Holds contact with the [LINEAR_OBJECT] maintained, carrying [MECHANICAL_GRIP]. [OP.C2.6.5] Declares no new route permitted, retaining residues of compression, asymmetry, merge, and load. [OP.C2.6.6] Declares [SYSTEM] iteration orchestration passes into the residual phase. OBJECT REGISTER \u00b7 RO CODE REGISTER \u00b7 SENTENCE [RO.C2.6."
      ]
    },
    {
      "code": "OP.C2.6.4",
      "prefix": "OP",
      "pages": [
        22
      ],
      "occurrenceCount": 1,
      "contexts": [
        "ifting as residual, carrying [ASYMMETRIC_STANCE] forward. [OP.C2.6.3] Holds direction merge as residual, carrying residual [MERGE_PULL]. [OP.C2.6.4] Holds contact with the [LINEAR_OBJECT] maintained, carrying [MECHANICAL_GRIP]. [OP.C2.6.5] Declares no new route permitted, retaining residues of compression, asymmetry, merge, and load. [OP.C2.6.6] Declares [SYSTEM] iteration orchestration passes into the residual phase. OBJECT REGISTER \u00b7 RO CODE REGISTER \u00b7 SENTENCE [RO.C2.6.1] Carries the [LINEAR_OBJECT] sustained across all iterations. [RO.C2.6.2] Ca"
      ]
    },
    {
      "code": "OP.C2.6.5",
      "prefix": "OP",
      "pages": [
        22
      ],
      "occurrenceCount": 1,
      "contexts": [
        "as residual, carrying residual [MERGE_PULL]. [OP.C2.6.4] Holds contact with the [LINEAR_OBJECT] maintained, carrying [MECHANICAL_GRIP]. [OP.C2.6.5] Declares no new route permitted, retaining residues of compression, asymmetry, merge, and load. [OP.C2.6.6] Declares [SYSTEM] iteration orchestration passes into the residual phase. OBJECT REGISTER \u00b7 RO CODE REGISTER \u00b7 SENTENCE [RO.C2.6.1] Carries the [LINEAR_OBJECT] sustained across all iterations. [RO.C2.6.2] Carries the Score 02 baseline [SOLID_MASS_OBJECT] set. [RO.C2.6.3] Carries two [REGULATORY_OB"
      ]
    },
    {
      "code": "OP.C2.6.6",
      "prefix": "OP",
      "pages": [
        22
      ],
      "occurrenceCount": 1,
      "contexts": [
        "carrying [MECHANICAL_GRIP]. [OP.C2.6.5] Declares no new route permitted, retaining residues of compression, asymmetry, merge, and load. [OP.C2.6.6] Declares [SYSTEM] iteration orchestration passes into the residual phase. OBJECT REGISTER \u00b7 RO CODE REGISTER \u00b7 SENTENCE [RO.C2.6.1] Carries the [LINEAR_OBJECT] sustained across all iterations. [RO.C2.6.2] Carries the Score 02 baseline [SOLID_MASS_OBJECT] set. [RO.C2.6.3] Carries two [REGULATORY_OBJECT] and one [SEMANTIC_OBJECT]. [RO.C2.6.4] Carries one [GROUND_TEXTURE_OBJECT] and one [TEXTURE_OBJECT]. ["
      ]
    },
    {
      "code": "PU.C1.6.1",
      "prefix": "PU",
      "pages": [
        14
      ],
      "occurrenceCount": 1,
      "contexts": [
        "LE_R] under [ASYMMETRIC], weight shifting continuously, producing [ASYMMETRIC_STANCE]. REPETITION PATTERN \u00b7 PU CODE PATTERN \u00b7 SENTENCE [PU.C1.6.1] Requires all active checkpoints to be re-executed at least once before Phase 04 begins. [PU.C1.6.2] Permits the loop count to remain open, the director decides the number of passes. [PU.C1.6.3] Constrains impulse variation to remain within declared ranges. [PU.C1.6.4] Forbids any new checkpoint from entering during iteration. OBJECT REGISTER \u00b7 RO CODE REGISTER \u00b7 SENTENCE [RO.C1.6.1] Carries the [LINEAR_O"
      ]
    },
    {
      "code": "PU.C1.6.2",
      "prefix": "PU",
      "pages": [
        14
      ],
      "occurrenceCount": 1,
      "contexts": [
        "TTERN \u00b7 PU CODE PATTERN \u00b7 SENTENCE [PU.C1.6.1] Requires all active checkpoints to be re-executed at least once before Phase 04 begins. [PU.C1.6.2] Permits the loop count to remain open, the director decides the number of passes. [PU.C1.6.3] Constrains impulse variation to remain within declared ranges. [PU.C1.6.4] Forbids any new checkpoint from entering during iteration. OBJECT REGISTER \u00b7 RO CODE REGISTER \u00b7 SENTENCE [RO.C1.6.1] Carries the [LINEAR_OBJECT] across all iterations as sustained working line. [RO.C1.6.2] Carries the full [SOLID_MASS_OBJ"
      ]
    },
    {
      "code": "PU.C1.6.3",
      "prefix": "PU",
      "pages": [
        14
      ],
      "occurrenceCount": 1,
      "contexts": [
        "uted at least once before Phase 04 begins. [PU.C1.6.2] Permits the loop count to remain open, the director decides the number of passes. [PU.C1.6.3] Constrains impulse variation to remain within declared ranges. [PU.C1.6.4] Forbids any new checkpoint from entering during iteration. OBJECT REGISTER \u00b7 RO CODE REGISTER \u00b7 SENTENCE [RO.C1.6.1] Carries the [LINEAR_OBJECT] across all iterations as sustained working line. [RO.C1.6.2] Carries the full [SOLID_MASS_OBJECT], [TEXTURE_OBJECT], [GROUND_TEXTURE_OBJECT], [REGULATORY_OBJECT] and [SEMANTIC_OBJECT] sets"
      ]
    },
    {
      "code": "PU.C1.6.4",
      "prefix": "PU",
      "pages": [
        14
      ],
      "occurrenceCount": 1,
      "contexts": [
        "nt to remain open, the director decides the number of passes. [PU.C1.6.3] Constrains impulse variation to remain within declared ranges. [PU.C1.6.4] Forbids any new checkpoint from entering during iteration. OBJECT REGISTER \u00b7 RO CODE REGISTER \u00b7 SENTENCE [RO.C1.6.1] Carries the [LINEAR_OBJECT] across all iterations as sustained working line. [RO.C1.6.2] Carries the full [SOLID_MASS_OBJECT], [TEXTURE_OBJECT], [GROUND_TEXTURE_OBJECT], [REGULATORY_OBJECT] and [SEMANTIC_OBJECT] sets already declared in [ST.C1.0]. [RO.C1.6.3] Declares no new object permitte"
      ]
    },
    {
      "code": "RO.C1.6.1",
      "prefix": "RO",
      "pages": [
        14
      ],
      "occurrenceCount": 1,
      "contexts": [
        "declared ranges. [PU.C1.6.4] Forbids any new checkpoint from entering during iteration. OBJECT REGISTER \u00b7 RO CODE REGISTER \u00b7 SENTENCE [RO.C1.6.1] Carries the [LINEAR_OBJECT] across all iterations as sustained working line. [RO.C1.6.2] Carries the full [SOLID_MASS_OBJECT], [TEXTURE_OBJECT], [GROUND_TEXTURE_OBJECT], [REGULATORY_OBJECT] and [SEMANTIC_OBJECT] sets already declared in [ST.C1.0]. [RO.C1.6.3] Declares no new object permitted, the register is closed. LOCKING RULE \u00b7 AP CODE RULE \u00b7 SENTENCE [AP.C1.6.1] Locks the iteration count open, the dir"
      ]
    },
    {
      "code": "RO.C1.6.2",
      "prefix": "RO",
      "pages": [
        14
      ],
      "occurrenceCount": 1,
      "contexts": [
        "OBJECT REGISTER \u00b7 RO CODE REGISTER \u00b7 SENTENCE [RO.C1.6.1] Carries the [LINEAR_OBJECT] across all iterations as sustained working line. [RO.C1.6.2] Carries the full [SOLID_MASS_OBJECT], [TEXTURE_OBJECT], [GROUND_TEXTURE_OBJECT], [REGULATORY_OBJECT] and [SEMANTIC_OBJECT] sets already declared in [ST.C1.0]. [RO.C1.6.3] Declares no new object permitted, the register is closed. LOCKING RULE \u00b7 AP CODE RULE \u00b7 SENTENCE [AP.C1.6.1] Locks the iteration count open, the director decides. [AP.C1.6.2] Locks closure of iteration until all active codes have been re"
      ]
    },
    {
      "code": "RO.C1.6.3",
      "prefix": "RO",
      "pages": [
        14
      ],
      "occurrenceCount": 1,
      "contexts": [
        "ID_MASS_OBJECT], [TEXTURE_OBJECT], [GROUND_TEXTURE_OBJECT], [REGULATORY_OBJECT] and [SEMANTIC_OBJECT] sets already declared in [ST.C1.0]. [RO.C1.6.3] Declares no new object permitted, the register is closed. LOCKING RULE \u00b7 AP CODE RULE \u00b7 SENTENCE [AP.C1.6.1] Locks the iteration count open, the director decides. [AP.C1.6.2] Locks closure of iteration until all active codes have been re-heard at least once. [AP.C1.6.3] Locks [GRIP] on the [LINEAR_OBJECT] to remain held throughout iteration. [AP.C1.6.4] Triggers transition to Phase 04 once system saturat"
      ]
    },
    {
      "code": "RO.C2.6.1",
      "prefix": "RO",
      "pages": [
        22
      ],
      "occurrenceCount": 1,
      "contexts": [
        ". [OP.C2.6.6] Declares [SYSTEM] iteration orchestration passes into the residual phase. OBJECT REGISTER \u00b7 RO CODE REGISTER \u00b7 SENTENCE [RO.C2.6.1] Carries the [LINEAR_OBJECT] sustained across all iterations. [RO.C2.6.2] Carries the Score 02 baseline [SOLID_MASS_OBJECT] set. [RO.C2.6.3] Carries two [REGULATORY_OBJECT] and one [SEMANTIC_OBJECT]. [RO.C2.6.4] Carries one [GROUND_TEXTURE_OBJECT] and one [TEXTURE_OBJECT]. [RO.C2.6.5] Permits additional obstacles from [TR.C2.6.1] through [TR.C2.6.7] but forbids reading them as new checkpoints. LOCKING RULE"
      ]
    },
    {
      "code": "RO.C2.6.2",
      "prefix": "RO",
      "pages": [
        22
      ],
      "occurrenceCount": 1,
      "contexts": [
        "esidual phase. OBJECT REGISTER \u00b7 RO CODE REGISTER \u00b7 SENTENCE [RO.C2.6.1] Carries the [LINEAR_OBJECT] sustained across all iterations. [RO.C2.6.2] Carries the Score 02 baseline [SOLID_MASS_OBJECT] set. [RO.C2.6.3] Carries two [REGULATORY_OBJECT] and one [SEMANTIC_OBJECT]. [RO.C2.6.4] Carries one [GROUND_TEXTURE_OBJECT] and one [TEXTURE_OBJECT]. [RO.C2.6.5] Permits additional obstacles from [TR.C2.6.1] through [TR.C2.6.7] but forbids reading them as new checkpoints. LOCKING RULE \u00b7 AP CODE RULE \u00b7 SENTENCE [AP.C2.6.1] Locks iteration count open, the"
      ]
    },
    {
      "code": "RO.C2.6.3",
      "prefix": "RO",
      "pages": [
        22
      ],
      "occurrenceCount": 1,
      "contexts": [
        "C2.6.1] Carries the [LINEAR_OBJECT] sustained across all iterations. [RO.C2.6.2] Carries the Score 02 baseline [SOLID_MASS_OBJECT] set. [RO.C2.6.3] Carries two [REGULATORY_OBJECT] and one [SEMANTIC_OBJECT]. [RO.C2.6.4] Carries one [GROUND_TEXTURE_OBJECT] and one [TEXTURE_OBJECT]. [RO.C2.6.5] Permits additional obstacles from [TR.C2.6.1] through [TR.C2.6.7] but forbids reading them as new checkpoints. LOCKING RULE \u00b7 AP CODE RULE \u00b7 SENTENCE [AP.C2.6.1] Locks iteration count open, the director decides. [AP.C2.6.2] Locks iteration from closing until me"
      ]
    },
    {
      "code": "RO.C2.6.4",
      "prefix": "RO",
      "pages": [
        22
      ],
      "occurrenceCount": 1,
      "contexts": [
        "O.C2.6.2] Carries the Score 02 baseline [SOLID_MASS_OBJECT] set. [RO.C2.6.3] Carries two [REGULATORY_OBJECT] and one [SEMANTIC_OBJECT]. [RO.C2.6.4] Carries one [GROUND_TEXTURE_OBJECT] and one [TEXTURE_OBJECT]. [RO.C2.6.5] Permits additional obstacles from [TR.C2.6.1] through [TR.C2.6.7] but forbids reading them as new checkpoints. LOCKING RULE \u00b7 AP CODE RULE \u00b7 SENTENCE [AP.C2.6.1] Locks iteration count open, the director decides. [AP.C2.6.2] Locks iteration from closing until merge and weight-limit have been re-heard at least once each."
      ]
    },
    {
      "code": "RO.C2.6.5",
      "prefix": "RO",
      "pages": [
        22
      ],
      "occurrenceCount": 1,
      "contexts": [
        "3] Carries two [REGULATORY_OBJECT] and one [SEMANTIC_OBJECT]. [RO.C2.6.4] Carries one [GROUND_TEXTURE_OBJECT] and one [TEXTURE_OBJECT]. [RO.C2.6.5] Permits additional obstacles from [TR.C2.6.1] through [TR.C2.6.7] but forbids reading them as new checkpoints. LOCKING RULE \u00b7 AP CODE RULE \u00b7 SENTENCE [AP.C2.6.1] Locks iteration count open, the director decides. [AP.C2.6.2] Locks iteration from closing until merge and weight-limit have been re-heard at least once each."
      ]
    },
    {
      "code": "RT.C1.0.1",
      "prefix": "RT",
      "pages": [
        9
      ],
      "occurrenceCount": 1,
      "contexts": [
        "with head in latent rotation, in conflict with the hand carrying the [LINEAR_OBJECT]. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C1.0.1] Executes [CENTER] on the centre of gravity toward the [SOLE] of both feet at the [LOWER_EXTREMITY] under [INJECTION], producing [STATIC_EQUILIBRIUM] at [ST.C1.0.2]. [RT.C1.0.2] Performs [GRIP] with isometric contraction along the [FINGER_FLEXOR] and [PALM] under [INJECTION], forming [MECHANICAL_GRIP] on the [LINEAR_OBJECT] at [ST.C1.0.1]. [RT.C1.0.3] Executes [HALT] on the forward drive at the [MOTOR_NERVE]"
      ]
    },
    {
      "code": "RT.C1.0.2",
      "prefix": "RT",
      "pages": [
        9
      ],
      "occurrenceCount": 1,
      "contexts": [
        "tre of gravity toward the [SOLE] of both feet at the [LOWER_EXTREMITY] under [INJECTION], producing [STATIC_EQUILIBRIUM] at [ST.C1.0.2]. [RT.C1.0.2] Performs [GRIP] with isometric contraction along the [FINGER_FLEXOR] and [PALM] under [INJECTION], forming [MECHANICAL_GRIP] on the [LINEAR_OBJECT] at [ST.C1.0.1]. [RT.C1.0.3] Executes [HALT] on the forward drive at the [MOTOR_NERVE] under [ALERT], holding tonus at threshold to produce [RIGID_POSTURE] locked toward [ST.C1.0.3]. [RT.C1.0.4] Initiates [PRE_ROTATE] at the [CERVICAL] spine under [ALERT], holding"
      ]
    },
    {
      "code": "RT.C1.0.3",
      "prefix": "RT",
      "pages": [
        9
      ],
      "occurrenceCount": 1,
      "contexts": [
        "tric contraction along the [FINGER_FLEXOR] and [PALM] under [INJECTION], forming [MECHANICAL_GRIP] on the [LINEAR_OBJECT] at [ST.C1.0.1]. [RT.C1.0.3] Executes [HALT] on the forward drive at the [MOTOR_NERVE] under [ALERT], holding tonus at threshold to produce [RIGID_POSTURE] locked toward [ST.C1.0.3]. [RT.C1.0.4] Initiates [PRE_ROTATE] at the [CERVICAL] spine under [ALERT], holding [FIXATION_HOLD] on the visual referent at [ST.C1.0.7]. [RT.C1.0.5] Executes [TIGHTEN] across the [SHOULDER], [CLAVICLE], [STERNUM] and [SCAPULA] under [ALERT], producing [COMP"
      ]
    },
    {
      "code": "RT.C1.0.4",
      "prefix": "RT",
      "pages": [
        9
      ],
      "occurrenceCount": 1,
      "contexts": [
        "on the forward drive at the [MOTOR_NERVE] under [ALERT], holding tonus at threshold to produce [RIGID_POSTURE] locked toward [ST.C1.0.3]. [RT.C1.0.4] Initiates [PRE_ROTATE] at the [CERVICAL] spine under [ALERT], holding [FIXATION_HOLD] on the visual referent at [ST.C1.0.7]. [RT.C1.0.5] Executes [TIGHTEN] across the [SHOULDER], [CLAVICLE], [STERNUM] and [SCAPULA] under [ALERT], producing [COMPRESSED_VOLUME] that mirrors the corridor at [ST.C1.0.6]. [RT.C1.0.6] Executes [DISTRIBUTE] of uneven weight across the [SOLE_L] and [SOLE_R] under [ALERT], producing"
      ]
    },
    {
      "code": "RT.C1.0.5",
      "prefix": "RT",
      "pages": [
        9
      ],
      "occurrenceCount": 1,
      "contexts": [
        "[RT.C1.0.4] Initiates [PRE_ROTATE] at the [CERVICAL] spine under [ALERT], holding [FIXATION_HOLD] on the visual referent at [ST.C1.0.7]. [RT.C1.0.5] Executes [TIGHTEN] across the [SHOULDER], [CLAVICLE], [STERNUM] and [SCAPULA] under [ALERT], producing [COMPRESSED_VOLUME] that mirrors the corridor at [ST.C1.0.6]. [RT.C1.0.6] Executes [DISTRIBUTE] of uneven weight across the [SOLE_L] and [SOLE_R] under [ALERT], producing [ASYMMETRIC_STANCE] that reads the elevation break at [ST.C1.0.5]. [RT.C1.0.7] Executes [REJECT] of right turn at the [HIP] and [KNEE] und"
      ]
    },
    {
      "code": "RT.C1.0.6",
      "prefix": "RT",
      "pages": [
        9
      ],
      "occurrenceCount": 1,
      "contexts": [
        "he [SHOULDER], [CLAVICLE], [STERNUM] and [SCAPULA] under [ALERT], producing [COMPRESSED_VOLUME] that mirrors the corridor at [ST.C1.0.6]. [RT.C1.0.6] Executes [DISTRIBUTE] of uneven weight across the [SOLE_L] and [SOLE_R] under [ALERT], producing [ASYMMETRIC_STANCE] that reads the elevation break at [ST.C1.0.5]. [RT.C1.0.7] Executes [REJECT] of right turn at the [HIP] and [KNEE] under [ALERT], locking the cursor to the [LINEAR_OBJECT] to produce [LOCKED_AXIS], referring to [ST.C1.0.4]. [PHASE 2] LINEAR TRAJECTORY [C1.1] Initial Traction DATA PROVOCATION"
      ]
    },
    {
      "code": "RT.C1.0.7",
      "prefix": "RT",
      "pages": [
        9
      ],
      "occurrenceCount": 1,
      "contexts": [
        "neven weight across the [SOLE_L] and [SOLE_R] under [ALERT], producing [ASYMMETRIC_STANCE] that reads the elevation break at [ST.C1.0.5]. [RT.C1.0.7] Executes [REJECT] of right turn at the [HIP] and [KNEE] under [ALERT], locking the cursor to the [LINEAR_OBJECT] to produce [LOCKED_AXIS], referring to [ST.C1.0.4]. [PHASE 2] LINEAR TRAJECTORY [C1.1] Initial Traction DATA PROVOCATION \u00b7 RAW DATA [DP.C1.1.1] source=Mapillary | type=feature | distance=\u00b10.0m | feature=object | value=\"object--support--utility-pole\" [DP.C1.1.2] source=Mapillary | type=feature |"
      ]
    },
    {
      "code": "RT.C1.1",
      "prefix": "RT",
      "pages": [
        13
      ],
      "occurrenceCount": 1,
      "contexts": [
        ".C1.3] Authority Interruption, [ST.C1.4] Semantic Aggression, [ST.C1.5] Node B Final Contact. [KS.C1.6.3] Re-activates the impulse set : [RT.C1.1] under [ACCELERATION] and [COMPRESSION], [RT.C1.2] under [COMPRESSION] and [CONSTANT], [RT.C1.3] under [FREEZE] and [GLITCH], [RT.C1.4] under [FIXATION] and [COMPRESSION], [RT.C1.5] under [ASYMMETRIC] and [ALERT]. [KS.C1.6.4] Declares [SYSTEM] no new checkpoint permitted, the register only replays codes already active during the linear flow. ACTIVE SITUATION CODES \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C"
      ]
    },
    {
      "code": "RT.C1.1.1",
      "prefix": "RT",
      "pages": [
        9
      ],
      "occurrenceCount": 1,
      "contexts": [
        "nder [MASS], with the shoulder narrowing at initiation, producing [COMPRESSED_VOLUME]. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C1.1.1] Executes [STEP] and [ACCELERATE] at the [SOLE] and [KNEE] under [ACCELERATION], with tonus active, referring to [ST.C1.1.1]."
      ]
    },
    {
      "code": "RT.C1.1.2",
      "prefix": "RT",
      "pages": [
        10
      ],
      "occurrenceCount": 1,
      "contexts": [
        "CODE SCORE \u00b7 SENTENCE [RT.C1.1.2] Performs [GRIP] with isometric contraction at the [FINGER] and [PALM] under [COMPRESSION], forming [MECHANICAL_GRIP] on the [LINEAR_OBJECT], referring to [ST.C1.1.2]. [RT.C1.1.3] Executes [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], producing initial [COMPRESSED_VOLUME], referring to [ST.C1.1.3]. [C1.2] Compression Corridor DATA PROVOCATION \u00b7 RAW DATA [DP.C1.2.1] source=Mapillary | type=featu"
      ]
    },
    {
      "code": "RT.C1.1.3",
      "prefix": "RT",
      "pages": [
        10
      ],
      "occurrenceCount": 1,
      "contexts": [
        "contraction at the [FINGER] and [PALM] under [COMPRESSION], forming [MECHANICAL_GRIP] on the [LINEAR_OBJECT], referring to [ST.C1.1.2]. [RT.C1.1.3] Executes [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], producing initial [COMPRESSED_VOLUME], referring to [ST.C1.1.3]. [C1.2] Compression Corridor DATA PROVOCATION \u00b7 RAW DATA [DP.C1.2.1] source=Mapillary | type=feature | distance=\u00b13.55m | feature=construction | value=\"construction--flat--driveway\" [DP.C1.2.2] source=Mapillary | type=feature | distance=\u00b14.27m | feature=object | value=\"object--t"
      ]
    },
    {
      "code": "RT.C1.2",
      "prefix": "RT",
      "pages": [
        13
      ],
      "occurrenceCount": 1,
      "contexts": [
        "ggression, [ST.C1.5] Node B Final Contact. [KS.C1.6.3] Re-activates the impulse set : [RT.C1.1] under [ACCELERATION] and [COMPRESSION], [RT.C1.2] under [COMPRESSION] and [CONSTANT], [RT.C1.3] under [FREEZE] and [GLITCH], [RT.C1.4] under [FIXATION] and [COMPRESSION], [RT.C1.5] under [ASYMMETRIC] and [ALERT]. [KS.C1.6.4] Declares [SYSTEM] no new checkpoint permitted, the register only replays codes already active during the linear flow. ACTIVE SITUATION CODES \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.6.1] Declares [SYSTEM] the grid from Node_A to N"
      ]
    },
    {
      "code": "RT.C1.2.1",
      "prefix": "RT",
      "pages": [
        10
      ],
      "occurrenceCount": 1,
      "contexts": [
        "with [MASS], producing sustained [COMPRESSED_VOLUME] through the descending corridor. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C1.2.1] Executes elevation negotiation at the [SOLE] and [KNEE] under [ACCELERATION], with axis maintained through the drop, referring to [ST.C1.2.1]. [RT.C1.2.2] Sustains [NARROW] at the [SHOULDER] under [COMPRESSION], holding [COMPRESSED_VOLUME] through the corridor, referring to [ST.C1.2.2]. [RT.C1.2.3] Performs [GRIP] with isometric contraction at the [FINGER] and [PALM] under [CONSTANT], maintaining [MECHANICAL"
      ]
    },
    {
      "code": "RT.C1.2.2",
      "prefix": "RT",
      "pages": [
        10
      ],
      "occurrenceCount": 1,
      "contexts": [
        "tes elevation negotiation at the [SOLE] and [KNEE] under [ACCELERATION], with axis maintained through the drop, referring to [ST.C1.2.1]. [RT.C1.2.2] Sustains [NARROW] at the [SHOULDER] under [COMPRESSION], holding [COMPRESSED_VOLUME] through the corridor, referring to [ST.C1.2.2]. [RT.C1.2.3] Performs [GRIP] with isometric contraction at the [FINGER] and [PALM] under [CONSTANT], maintaining [MECHANICAL_GRIP] on the [LINEAR_OBJECT] through the passage, referring to [ST.C1.2.3]. [C1.3] Authority Interruption DATA PROVOCATION \u00b7 RAW DATA [DP.C1.3.1] source="
      ]
    },
    {
      "code": "RT.C1.2.3",
      "prefix": "RT",
      "pages": [
        10
      ],
      "occurrenceCount": 1,
      "contexts": [
        ".2] Sustains [NARROW] at the [SHOULDER] under [COMPRESSION], holding [COMPRESSED_VOLUME] through the corridor, referring to [ST.C1.2.2]. [RT.C1.2.3] Performs [GRIP] with isometric contraction at the [FINGER] and [PALM] under [CONSTANT], maintaining [MECHANICAL_GRIP] on the [LINEAR_OBJECT] through the passage, referring to [ST.C1.2.3]. [C1.3] Authority Interruption DATA PROVOCATION \u00b7 RAW DATA [DP.C1.3.1] source=Mapillary | type=feature | distance=\u00b112.15m | feature=regulatory | value=\"regulatory--no-right-turn--g1\" [DP.C1.3.2] source=Mapillary | type=featu"
      ]
    },
    {
      "code": "RT.C1.3",
      "prefix": "RT",
      "pages": [
        13
      ],
      "occurrenceCount": 1,
      "contexts": [
        "KS.C1.6.3] Re-activates the impulse set : [RT.C1.1] under [ACCELERATION] and [COMPRESSION], [RT.C1.2] under [COMPRESSION] and [CONSTANT], [RT.C1.3] under [FREEZE] and [GLITCH], [RT.C1.4] under [FIXATION] and [COMPRESSION], [RT.C1.5] under [ASYMMETRIC] and [ALERT]. [KS.C1.6.4] Declares [SYSTEM] no new checkpoint permitted, the register only replays codes already active during the linear flow. ACTIVE SITUATION CODES \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.6.1] Declares [SYSTEM] the grid from Node_A to Node_B complete and Node_C closed, with cursor"
      ]
    },
    {
      "code": "RT.C1.3.1",
      "prefix": "RT",
      "pages": [
        11
      ],
      "occurrenceCount": 1,
      "contexts": [
        "CODE SCORE \u00b7 SENTENCE [RT.C1.3.1] Executes [TIGHTEN] against the pull of the interrupted route at the [SPINE] and [PELVIS] under [FREEZE], producing [LOCKED_AXIS], referring to [ST.C1.3.1]. [RT.C1.3.2] Holds latent [ROTATE] at the [HIP] under [FREEZE], sustaining [RIGID_POSTURE] that registers authority as torque, referring to [ST.C1.3.1]. [C1.4] Semantic Aggression DATA PROVOCATION \u00b7 RAW DATA [DP.C1.4.1] source=Mapillary | type=feature | di"
      ]
    },
    {
      "code": "RT.C1.3.2",
      "prefix": "RT",
      "pages": [
        11
      ],
      "occurrenceCount": 1,
      "contexts": [
        "against the pull of the interrupted route at the [SPINE] and [PELVIS] under [FREEZE], producing [LOCKED_AXIS], referring to [ST.C1.3.1]. [RT.C1.3.2] Holds latent [ROTATE] at the [HIP] under [FREEZE], sustaining [RIGID_POSTURE] that registers authority as torque, referring to [ST.C1.3.1]. [C1.4] Semantic Aggression DATA PROVOCATION \u00b7 RAW DATA [DP.C1.4.1] source=Mapillary | type=feature | distance=\u00b112.45m | feature=object | value=\"object--sign--advertisement\" [DP.C1.4.2] source=Mapillary | type=feature | distance=\u00b112.66m | feature=object | value=\"object--t"
      ]
    },
    {
      "code": "RT.C1.4",
      "prefix": "RT",
      "pages": [
        13
      ],
      "occurrenceCount": 1,
      "contexts": [
        ": [RT.C1.1] under [ACCELERATION] and [COMPRESSION], [RT.C1.2] under [COMPRESSION] and [CONSTANT], [RT.C1.3] under [FREEZE] and [GLITCH], [RT.C1.4] under [FIXATION] and [COMPRESSION], [RT.C1.5] under [ASYMMETRIC] and [ALERT]. [KS.C1.6.4] Declares [SYSTEM] no new checkpoint permitted, the register only replays codes already active during the linear flow. ACTIVE SITUATION CODES \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.6.1] Declares [SYSTEM] the grid from Node_A to Node_B complete and Node_C closed, with cursor still in transit. [ST.C1.6.2] Reads o"
      ]
    },
    {
      "code": "RT.C1.4.1",
      "prefix": "RT",
      "pages": [
        11
      ],
      "occurrenceCount": 1,
      "contexts": [
        "with the head turning toward each sign, reading and moving happen as one compression. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C1.4.1] Executes [FIXATE] with micro [ROTATE] at the [CERVICAL] spine and [EYE] under [FIXATION], producing [FIXATION_HOLD] while the body still carries the line, referring to [ST.C1.4.1]. [RT.C1.4.2] Sustains [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], holding [COMPRESSED_VOLUME] through the corridor, referring to [ST.C1.4.2]. [RT.C1.4.3] Maintains [GRIP] with isometric contraction at the [FINGER] a"
      ]
    },
    {
      "code": "RT.C1.4.2",
      "prefix": "RT",
      "pages": [
        11
      ],
      "occurrenceCount": 1,
      "contexts": [
        "[CERVICAL] spine and [EYE] under [FIXATION], producing [FIXATION_HOLD] while the body still carries the line, referring to [ST.C1.4.1]. [RT.C1.4.2] Sustains [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], holding [COMPRESSED_VOLUME] through the corridor, referring to [ST.C1.4.2]. [RT.C1.4.3] Maintains [GRIP] with isometric contraction at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], sustaining [MECHANICAL_GRIP] throughout, referring to [ST.C1.4.3]. [C1.5] Node B \u00b7 Final Contact DATA PROVOCATION \u00b7 RAW DATA [DP.C1.5.1] sour"
      ]
    },
    {
      "code": "RT.C1.4.3",
      "prefix": "RT",
      "pages": [
        11
      ],
      "occurrenceCount": 1,
      "contexts": [
        "s [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], holding [COMPRESSED_VOLUME] through the corridor, referring to [ST.C1.4.2]. [RT.C1.4.3] Maintains [GRIP] with isometric contraction at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], sustaining [MECHANICAL_GRIP] throughout, referring to [ST.C1.4.3]. [C1.5] Node B \u00b7 Final Contact DATA PROVOCATION \u00b7 RAW DATA [DP.C1.5.1] source=Mapillary | type=feature | distance=\u00b114.31m | feature=object | value=\"object--manhole\" [DP.C1.5.2] source=Mapillary | type=feature | distance=\u00b115.00m | fea"
      ]
    },
    {
      "code": "RT.C1.5",
      "prefix": "RT",
      "pages": [
        13
      ],
      "occurrenceCount": 1,
      "contexts": [
        "SION], [RT.C1.2] under [COMPRESSION] and [CONSTANT], [RT.C1.3] under [FREEZE] and [GLITCH], [RT.C1.4] under [FIXATION] and [COMPRESSION], [RT.C1.5] under [ASYMMETRIC] and [ALERT]. [KS.C1.6.4] Declares [SYSTEM] no new checkpoint permitted, the register only replays codes already active during the linear flow. ACTIVE SITUATION CODES \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.6.1] Declares [SYSTEM] the grid from Node_A to Node_B complete and Node_C closed, with cursor still in transit. [ST.C1.6.2] Reads one [LINEAR_OBJECT] across 15m, held in contact"
      ]
    },
    {
      "code": "RT.C1.5.1",
      "prefix": "RT",
      "pages": [
        12
      ],
      "occurrenceCount": 1,
      "contexts": [
        "BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C1.5.1] Executes [PLANT] with micro [DROP] at the [SOLE], [KNEE] and [HIP] under [ASYMMETRIC], producing [SLIP_POTENTIAL] registered as loaded weight on the sole edge, referring to [ST.C1.5.1]. [RT.C1.5.2] Performs [DECELERATE] with [BRACE] at the [SPINE] and [CG] under [ALERT], with cursor arrived and tonus at threshold, referring to [ST.C1.5.2]. [RT.C1.5.3] Sustains [GRIP] at the [FINGER] and [PALM] on the [LINEAR"
      ]
    },
    {
      "code": "RT.C1.5.2",
      "prefix": "RT",
      "pages": [
        12
      ],
      "occurrenceCount": 1,
      "contexts": [
        "[KNEE] and [HIP] under [ASYMMETRIC], producing [SLIP_POTENTIAL] registered as loaded weight on the sole edge, referring to [ST.C1.5.1]. [RT.C1.5.2] Performs [DECELERATE] with [BRACE] at the [SPINE] and [CG] under [ALERT], with cursor arrived and tonus at threshold, referring to [ST.C1.5.2]. [RT.C1.5.3] Sustains [GRIP] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], held in [MECHANICAL_GRIP] with release pending, referring to [ST.C1.5.3]. [PHASE 02] END STATE At the end of the linear trajectory the body arrives at Node_B. The following"
      ]
    },
    {
      "code": "RT.C1.5.3",
      "prefix": "RT",
      "pages": [
        12
      ],
      "occurrenceCount": 1,
      "contexts": [
        "ms [DECELERATE] with [BRACE] at the [SPINE] and [CG] under [ALERT], with cursor arrived and tonus at threshold, referring to [ST.C1.5.2]. [RT.C1.5.3] Sustains [GRIP] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], held in [MECHANICAL_GRIP] with release pending, referring to [ST.C1.5.3]. [PHASE 02] END STATE At the end of the linear trajectory the body arrives at Node_B. The following register carries the residues that must be preserved into Phase 03 iteration. OUTPUT END STATE \u00b7 OE CODE END STATE \u00b7 SENTENCE [OE.C1.END.1] Holds contac"
      ]
    },
    {
      "code": "RT.C1.7.1",
      "prefix": "RT",
      "pages": [
        15
      ],
      "occurrenceCount": 1,
      "contexts": [
        "rallel with impulse residue still active under [PARADOX], the body is not yet neutral. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C1.7.1] Executes [RECOVER] partial at the [SHOULDER] and [CHEST] under [ALERT], producing [PARTIAL_RECOVERY], referring to [ST.C1.7.2]. [RT.C1.7.2] Performs micro [RELEASE] of [GRIP] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [ALERT], with grip releasing and contact residual, referring to [ST.C1.7.2]. [RT.C1.7.3] Holds small [HOLD] at the [GAZE] under [CONSTANT], sustaining residual [FIXATION_HOLD], re"
      ]
    },
    {
      "code": "RT.C1.7.2",
      "prefix": "RT",
      "pages": [
        15
      ],
      "occurrenceCount": 1,
      "contexts": [
        ".C1.7.1] Executes [RECOVER] partial at the [SHOULDER] and [CHEST] under [ALERT], producing [PARTIAL_RECOVERY], referring to [ST.C1.7.2]. [RT.C1.7.2] Performs micro [RELEASE] of [GRIP] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [ALERT], with grip releasing and contact residual, referring to [ST.C1.7.2]. [RT.C1.7.3] Holds small [HOLD] at the [GAZE] under [CONSTANT], sustaining residual [FIXATION_HOLD], referring to [ST.C1.7.3]."
      ]
    },
    {
      "code": "RT.C1.7.3",
      "prefix": "RT",
      "pages": [
        15
      ],
      "occurrenceCount": 1,
      "contexts": [
        "IP] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [ALERT], with grip releasing and contact residual, referring to [ST.C1.7.2]. [RT.C1.7.3] Holds small [HOLD] at the [GAZE] under [CONSTANT], sustaining residual [FIXATION_HOLD], referring to [ST.C1.7.3]."
      ]
    },
    {
      "code": "RT.C1.END.1",
      "prefix": "RT",
      "pages": [
        12
      ],
      "occurrenceCount": 1,
      "contexts": [
        "score awaiting its next command, opening either [ITERATION_BUFFER] or [NODE_TRANSFER]. BODY IMPULSE \u00b7 END STATE CODE SCORE \u00b7 SENTENCE [RT.C1.END.1] Sustains [HOLD] on the [LINEAR_OBJECT] at the [FINGER] and [PALM] under [CONSTANT], held in [MECHANICAL_GRIP] with release pending. [RT.C1.END.2] Performs micro [RECOVER] at the [CERVICAL] spine under [ALERT], producing residual [FIXATION_HOLD] in the gaze. [RT.C1.END.3] Executes [RECOVER] partial at the [SHOULDER] and [CHEST] under [ALERT], sustaining residual [COMPRESSED_VOLUME]. [RT.C1.END.4] Awaits the"
      ]
    },
    {
      "code": "RT.C1.END.2",
      "prefix": "RT",
      "pages": [
        12
      ],
      "occurrenceCount": 1,
      "contexts": [
        "D.1] Sustains [HOLD] on the [LINEAR_OBJECT] at the [FINGER] and [PALM] under [CONSTANT], held in [MECHANICAL_GRIP] with release pending. [RT.C1.END.2] Performs micro [RECOVER] at the [CERVICAL] spine under [ALERT], producing residual [FIXATION_HOLD] in the gaze. [RT.C1.END.3] Executes [RECOVER] partial at the [SHOULDER] and [CHEST] under [ALERT], sustaining residual [COMPRESSED_VOLUME]. [RT.C1.END.4] Awaits the next instruction at the system as a whole, opening [ITERATION_BUFFER] or [NODE_TRANSFER]."
      ]
    },
    {
      "code": "RT.C1.END.3",
      "prefix": "RT",
      "pages": [
        12
      ],
      "occurrenceCount": 1,
      "contexts": [
        "pending. [RT.C1.END.2] Performs micro [RECOVER] at the [CERVICAL] spine under [ALERT], producing residual [FIXATION_HOLD] in the gaze. [RT.C1.END.3] Executes [RECOVER] partial at the [SHOULDER] and [CHEST] under [ALERT], sustaining residual [COMPRESSED_VOLUME]. [RT.C1.END.4] Awaits the next instruction at the system as a whole, opening [ITERATION_BUFFER] or [NODE_TRANSFER]."
      ]
    },
    {
      "code": "RT.C1.END.4",
      "prefix": "RT",
      "pages": [
        12
      ],
      "occurrenceCount": 1,
      "contexts": [
        "he gaze. [RT.C1.END.3] Executes [RECOVER] partial at the [SHOULDER] and [CHEST] under [ALERT], sustaining residual [COMPRESSED_VOLUME]. [RT.C1.END.4] Awaits the next instruction at the system as a whole, opening [ITERATION_BUFFER] or [NODE_TRANSFER]."
      ]
    },
    {
      "code": "RT.C2.0.1",
      "prefix": "RT",
      "pages": [
        17
      ],
      "occurrenceCount": 1,
      "contexts": [
        "BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.0.1] Executes [CENTER] on the centre of gravity toward both [SOLE] at the [LOWER_EXTREMITY] under [INJECTION], producing [STATIC_EQUILIBRIUM] at the origin, referring to [ST.C2.0.1]. [RT.C2.0.2] Performs [GRIP] on the [LINEAR_OBJECT] at the [FINGER] and [PALM] under [INJECTION], forming [MECHANICAL_GRIP] that reads the utility line, referring to [ST.C2.0.1]. [RT.C2.0.3] Executes latent [NARROW] at the [SHOULDER]"
      ]
    },
    {
      "code": "RT.C2.0.2",
      "prefix": "RT",
      "pages": [
        17
      ],
      "occurrenceCount": 1,
      "contexts": [
        "y toward both [SOLE] at the [LOWER_EXTREMITY] under [INJECTION], producing [STATIC_EQUILIBRIUM] at the origin, referring to [ST.C2.0.1]. [RT.C2.0.2] Performs [GRIP] on the [LINEAR_OBJECT] at the [FINGER] and [PALM] under [INJECTION], forming [MECHANICAL_GRIP] that reads the utility line, referring to [ST.C2.0.1]. [RT.C2.0.3] Executes latent [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], producing [COMPRESSED_VOLUME] in pre-load, referring to [ST.C2.0.2]. [RT.C2.0.4] Performs sole scan at the [SOLE] under [ALERT], reading the discontinuity of"
      ]
    },
    {
      "code": "RT.C2.0.3",
      "prefix": "RT",
      "pages": [
        17
      ],
      "occurrenceCount": 1,
      "contexts": [
        "R_OBJECT] at the [FINGER] and [PALM] under [INJECTION], forming [MECHANICAL_GRIP] that reads the utility line, referring to [ST.C2.0.1]. [RT.C2.0.3] Executes latent [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], producing [COMPRESSED_VOLUME] in pre-load, referring to [ST.C2.0.2]. [RT.C2.0.4] Performs sole scan at the [SOLE] under [ALERT], reading the discontinuity of the substrate before contact, referring to [ST.C2.0.3]. [RT.C2.0.5] Executes [FIXATE] along the [EYE] toward the merge-line under [FIXATION], holding [FIXATION_HOLD] at the regu"
      ]
    },
    {
      "code": "RT.C2.0.4",
      "prefix": "RT",
      "pages": [
        17
      ],
      "occurrenceCount": 1,
      "contexts": [
        "s latent [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], producing [COMPRESSED_VOLUME] in pre-load, referring to [ST.C2.0.2]. [RT.C2.0.4] Performs sole scan at the [SOLE] under [ALERT], reading the discontinuity of the substrate before contact, referring to [ST.C2.0.3]. [RT.C2.0.5] Executes [FIXATE] along the [EYE] toward the merge-line under [FIXATION], holding [FIXATION_HOLD] at the regulatory sign, referring to [ST.C2.0.6]. [RT.C2.0.6] Anticipates [BRACE] at the [PELVIS] under [ALERT], with weight-load latent, referring to [ST.C2.0.9]. [PH"
      ]
    },
    {
      "code": "RT.C2.0.5",
      "prefix": "RT",
      "pages": [
        17
      ],
      "occurrenceCount": 1,
      "contexts": [
        ".4] Performs sole scan at the [SOLE] under [ALERT], reading the discontinuity of the substrate before contact, referring to [ST.C2.0.3]. [RT.C2.0.5] Executes [FIXATE] along the [EYE] toward the merge-line under [FIXATION], holding [FIXATION_HOLD] at the regulatory sign, referring to [ST.C2.0.6]. [RT.C2.0.6] Anticipates [BRACE] at the [PELVIS] under [ALERT], with weight-load latent, referring to [ST.C2.0.9]. [PHASE 2] LINEAR TRAJECTORY \u00b7 Score 02 The body traverses the fourteen-metre corridor across five checkpoints, from the utility line to the merge term"
      ]
    },
    {
      "code": "RT.C2.0.6",
      "prefix": "RT",
      "pages": [
        17
      ],
      "occurrenceCount": 1,
      "contexts": [
        "FIXATE] along the [EYE] toward the merge-line under [FIXATION], holding [FIXATION_HOLD] at the regulatory sign, referring to [ST.C2.0.6]. [RT.C2.0.6] Anticipates [BRACE] at the [PELVIS] under [ALERT], with weight-load latent, referring to [ST.C2.0.9]. [PHASE 2] LINEAR TRAJECTORY \u00b7 Score 02 The body traverses the fourteen-metre corridor across five checkpoints, from the utility line to the merge terminus. Every row below is a single score-text sentence built from declared tokens. [C2.1] Initial Traction \u00b7 Utility Corridor DATA PROVOCATION \u00b7 RAW DATA [DP.C2"
      ]
    },
    {
      "code": "RT.C2.1.1",
      "prefix": "RT",
      "pages": [
        17
      ],
      "occurrenceCount": 1,
      "contexts": [
        "at \u00b12.10 metres under [MASS], the shoulder pass acknowledging the volumetric receiver. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.1.1] Executes [STEP] forward with load transfer at the [SOLE] and [PELVIS] under [ACCELERATION], with tonus active and weight loading forward, referring to [ST.C2.1.1]. [RT.C2.1.2] Performs shoulder pass at the [SHOULDER] and [SCAPULA] against the utility pole under [ALERT], producing [STANCE_PIVOT] around the anchor, referring to [ST.C2.1.2]. [C2.2] Sub-Surface Footing DATA PROVOCATION \u00b7 RAW DATA [DP.C2.2.1] sou"
      ]
    },
    {
      "code": "RT.C2.1.2",
      "prefix": "RT",
      "pages": [
        17
      ],
      "occurrenceCount": 1,
      "contexts": [
        "th load transfer at the [SOLE] and [PELVIS] under [ACCELERATION], with tonus active and weight loading forward, referring to [ST.C2.1.1]. [RT.C2.1.2] Performs shoulder pass at the [SHOULDER] and [SCAPULA] against the utility pole under [ALERT], producing [STANCE_PIVOT] around the anchor, referring to [ST.C2.1.2]. [C2.2] Sub-Surface Footing DATA PROVOCATION \u00b7 RAW DATA [DP.C2.2.1] source=Mapillary | type=feature | distance=\u00b13.20m | feature=object | value=\"object--manhole\" [DP.C2.2.2] source=Mapillary | type=feature | distance=\u00b15.50m | feature=object | value"
      ]
    },
    {
      "code": "RT.C2.2.1",
      "prefix": "RT",
      "pages": [
        18
      ],
      "occurrenceCount": 1,
      "contexts": [
        "ical at \u00b15.50 metres as adjacent anchor under [MASS], the substrate is not continuous. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.2.1] Executes sole absorption at the [SOLE] and [KNEE] under [ALERT], producing contained [SLIP_POTENTIAL], referring to [ST.C2.2.1]. [RT.C2.2.2] Performs [RECOVER] at the [PELVIS] and [LUMBAR] spine under [CONSTANT], with balance re-set, referring to [ST.C2.2.2]. [C2.3] Driveway Tilt DATA PROVOCATION \u00b7 RAW DATA [DP.C2.3.1] source=Mapillary | type=feature | distance=\u00b17.80m | feature=construction | value=\"constru"
      ]
    },
    {
      "code": "RT.C2.2.2",
      "prefix": "RT",
      "pages": [
        18
      ],
      "occurrenceCount": 1,
      "contexts": [
        "C2.2.1] Executes sole absorption at the [SOLE] and [KNEE] under [ALERT], producing contained [SLIP_POTENTIAL], referring to [ST.C2.2.1]. [RT.C2.2.2] Performs [RECOVER] at the [PELVIS] and [LUMBAR] spine under [CONSTANT], with balance re-set, referring to [ST.C2.2.2]. [C2.3] Driveway Tilt DATA PROVOCATION \u00b7 RAW DATA [DP.C2.3.1] source=Mapillary | type=feature | distance=\u00b17.80m | feature=construction | value=\"construction--flat--driveway\" [DP.C2.3.2] source=Mapillary | type=feature | distance=\u00b19.15m | feature=regulatory | value=\"regulatory--merge--g1\" SIT"
      ]
    },
    {
      "code": "RT.C2.3.1",
      "prefix": "RT",
      "pages": [
        18
      ],
      "occurrenceCount": 1,
      "contexts": [
        "r [AUTHORITY], applying direction=merge imposed, the route narrows toward convergence. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.3.1] Executes [ROTATE] on the incline at the [PELVIS] and [SPINE] under [ASYMMETRIC], with trunk vertical and right side loading earlier, referring to [ST.C2.3.1]. [RT.C2.3.2] Performs [MERGE] preparation at the [SPINE] and [PELVIS] under [ALERT], with cursor pre-aligned toward the convergence line, referring to [ST.C2.3.2]. [C2.4] Merge Authority \u00b7 Arterial Convergence DATA PROVOCATION \u00b7 RAW DATA [DP.C2.4.1] sou"
      ]
    },
    {
      "code": "RT.C2.3.2",
      "prefix": "RT",
      "pages": [
        18
      ],
      "occurrenceCount": 1,
      "contexts": [
        "the incline at the [PELVIS] and [SPINE] under [ASYMMETRIC], with trunk vertical and right side loading earlier, referring to [ST.C2.3.1]. [RT.C2.3.2] Performs [MERGE] preparation at the [SPINE] and [PELVIS] under [ALERT], with cursor pre-aligned toward the convergence line, referring to [ST.C2.3.2]. [C2.4] Merge Authority \u00b7 Arterial Convergence DATA PROVOCATION \u00b7 RAW DATA [DP.C2.4.1] source=Mapillary | type=feature | distance=\u00b110.40m | feature=object | value=\"object--traffic-cone\" [DP.C2.4.2] source=Mapillary | type=feature | distance=\u00b111.90m | feature=obj"
      ]
    },
    {
      "code": "RT.C2.4.1",
      "prefix": "RT",
      "pages": [
        19
      ],
      "occurrenceCount": 1,
      "contexts": [
        "CODE SCORE \u00b7 SENTENCE [RT.C2.4.1] Executes [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], producing [COMPRESSED_VOLUME] threaded through the cone corridor, referring to [ST.C2.4.1]. [RT.C2.4.2] Performs [FIXATE] with micro [ROTATE] at the [CERVICAL] spine and [EYE] under [FIXATION], producing [FIXATION_HOLD] that competes with forward motion, referring to [ST.C2.4.2]. [C2.5] Node B \u00b7 Final Contact DATA PROVOCATION \u00b7 RAW DATA [D"
      ]
    },
    {
      "code": "RT.C2.4.2",
      "prefix": "RT",
      "pages": [
        19
      ],
      "occurrenceCount": 1,
      "contexts": [
        "e [SHOULDER] and [ELBOW] under [COMPRESSION], producing [COMPRESSED_VOLUME] threaded through the cone corridor, referring to [ST.C2.4.1]. [RT.C2.4.2] Performs [FIXATE] with micro [ROTATE] at the [CERVICAL] spine and [EYE] under [FIXATION], producing [FIXATION_HOLD] that competes with forward motion, referring to [ST.C2.4.2]. [C2.5] Node B \u00b7 Final Contact DATA PROVOCATION \u00b7 RAW DATA [DP.C2.5.1] source=Mapillary | type=feature | distance=\u00b113.55m | feature=regulatory | value=\"regulatory--weight-limit--g1\" [DP.C2.5.2] source=Mapillary | type=feature | distanc"
      ]
    },
    {
      "code": "RT.C2.5.1",
      "prefix": "RT",
      "pages": [
        19
      ],
      "occurrenceCount": 1,
      "contexts": [
        "ON_HOLD] at the weight-limit sign, the terminal object is read even as the body stops. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.5.1] Executes [FIXATE] with micro [ROTATE] at the [CERVICAL] spine and [EYE] under [FIXATION], producing [FIXATION_HOLD] on the regulatory sign, referring to [ST.C2.5.1]. [RT.C2.5.2] Performs weight-aware [HOLD] on the [LINEAR_OBJECT] at the [FINGER] and [PALM] under [CONSTANT], with tonus at threshold and load calibrated, referring to [ST.C2.5.2]. [RT.C2.5.3] Executes [DECELERATE] with [BRACE] at the [SPINE] and"
      ]
    },
    {
      "code": "RT.C2.5.2",
      "prefix": "RT",
      "pages": [
        19
      ],
      "occurrenceCount": 1,
      "contexts": [
        "[ROTATE] at the [CERVICAL] spine and [EYE] under [FIXATION], producing [FIXATION_HOLD] on the regulatory sign, referring to [ST.C2.5.1]. [RT.C2.5.2] Performs weight-aware [HOLD] on the [LINEAR_OBJECT] at the [FINGER] and [PALM] under [CONSTANT], with tonus at threshold and load calibrated, referring to [ST.C2.5.2]. [RT.C2.5.3] Executes [DECELERATE] with [BRACE] at the [SPINE] and [CG] under [ALERT], with cursor arrived, referring to [ST.C2.5.3]. [RT.C2.5.4] Sustains [HOLD] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], held in [MECHA"
      ]
    },
    {
      "code": "RT.C2.5.3",
      "prefix": "RT",
      "pages": [
        19
      ],
      "occurrenceCount": 1,
      "contexts": [
        "n the [LINEAR_OBJECT] at the [FINGER] and [PALM] under [CONSTANT], with tonus at threshold and load calibrated, referring to [ST.C2.5.2]. [RT.C2.5.3] Executes [DECELERATE] with [BRACE] at the [SPINE] and [CG] under [ALERT], with cursor arrived, referring to [ST.C2.5.3]. [RT.C2.5.4] Sustains [HOLD] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], held in [MECHANICAL_GRIP] with weight-aware release still pending, referring to [ST.C2.5.4]. [PHASE 02] END STATE \u00b7 Score 02 At the end of the linear trajectory the body arrives at Node_B on the"
      ]
    },
    {
      "code": "RT.C2.5.4",
      "prefix": "RT",
      "pages": [
        19
      ],
      "occurrenceCount": 1,
      "contexts": [
        "]. [RT.C2.5.3] Executes [DECELERATE] with [BRACE] at the [SPINE] and [CG] under [ALERT], with cursor arrived, referring to [ST.C2.5.3]. [RT.C2.5.4] Sustains [HOLD] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], held in [MECHANICAL_GRIP] with weight-aware release still pending, referring to [ST.C2.5.4]. [PHASE 02] END STATE \u00b7 Score 02 At the end of the linear trajectory the body arrives at Node_B on the Score 02 axis. The following register carries residues that must be preserved into iteration. OUTPUT END STATE \u00b7 OE CODE END STATE"
      ]
    },
    {
      "code": "RT.C2.7.1",
      "prefix": "RT",
      "pages": [
        24
      ],
      "occurrenceCount": 1,
      "contexts": [
        "[GROUND_TEXTURE_OBJECT] set as residual, the stage is not tidied per the locking rule. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.7.1] Executes [RECOVER] partial at the [SHOULDER] and [CHEST] under [ALERT], producing [PARTIAL_RECOVERY], referring to [ST.C2.7.2]. [RT.C2.7.2] Performs micro [RELEASE] of [GRIP] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [ALERT], with grip releasing and contact residual, referring to [ST.C2.7.2]. [RT.C2.7.3] Holds small [HOLD] at the [GAZE] under [CONSTANT], sustaining residual [FIXATION_HOLD] wit"
      ]
    },
    {
      "code": "RT.C2.7.2",
      "prefix": "RT",
      "pages": [
        24
      ],
      "occurrenceCount": 1,
      "contexts": [
        ".C2.7.1] Executes [RECOVER] partial at the [SHOULDER] and [CHEST] under [ALERT], producing [PARTIAL_RECOVERY], referring to [ST.C2.7.2]. [RT.C2.7.2] Performs micro [RELEASE] of [GRIP] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [ALERT], with grip releasing and contact residual, referring to [ST.C2.7.2]. [RT.C2.7.3] Holds small [HOLD] at the [GAZE] under [CONSTANT], sustaining residual [FIXATION_HOLD] with residual [MERGE_PULL] in the [PELVIS], referring to [ST.C2.7.3]. Score 02 does not conclude ; it thins. The field remains legible even when"
      ]
    },
    {
      "code": "RT.C2.7.3",
      "prefix": "RT",
      "pages": [
        24
      ],
      "occurrenceCount": 1,
      "contexts": [
        "IP] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [ALERT], with grip releasing and contact residual, referring to [ST.C2.7.2]. [RT.C2.7.3] Holds small [HOLD] at the [GAZE] under [CONSTANT], sustaining residual [FIXATION_HOLD] with residual [MERGE_PULL] in the [PELVIS], referring to [ST.C2.7.3]. Score 02 does not conclude ; it thins. The field remains legible even when the body has withdrawn from it. TRAJECTORY PERFORMANCE Route notes, body sequence, and final performative reading. 1. Trajectory Overview This document contains two performative tr"
      ]
    },
    {
      "code": "RT.EX",
      "prefix": "RT",
      "pages": [
        7
      ],
      "occurrenceCount": 1,
      "contexts": [
        "nder [MASS], with the shoulder narrowing at initiation, producing [COMPRESSED_VOLUME]. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.EX] Executes [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], producing initial [COMPRESSED_VOLUME], referring to [ST.EX]. Reading order per row : the connective verb ( Places, Executes ) declares what the row does ; each bracketed uppercase token is a declared entity ; the row closes with a reference to the code it depends on. The performer receives the technical field and its lexical content in one sen"
      ]
    },
    {
      "code": "ST.C1.0",
      "prefix": "ST",
      "pages": [
        8,
        14
      ],
      "occurrenceCount": 2,
      "contexts": [
        "type=feature | distance=\u00b114.80m | feature=object | value=\"object--sign--advertisement\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.0] Declares a [SYSTEM] axis from Node_A to Node_B spanning 15m, opened on a single working axis. [ST.C1.0.1] Places one [LINEAR_OBJECT] as working line at floor level from Node_A to Node_B, spanning 15m, held in full contact with zero tension. [ST.C1.0.2] Places one [MARKER_OBJECT] at Node_A centre as origin anchor, triggered by the datum object\u2013street-light at coordinate 107.610944, -6.909886 [DP.C1.0.1]. [ST",
        "he full [SOLID_MASS_OBJECT], [TEXTURE_OBJECT], [GROUND_TEXTURE_OBJECT], [REGULATORY_OBJECT] and [SEMANTIC_OBJECT] sets already declared in [ST.C1.0]. [RO.C1.6.3] Declares no new object permitted, the register is closed. LOCKING RULE \u00b7 AP CODE RULE \u00b7 SENTENCE [AP.C1.6.1] Locks the iteration count open, the director decides. [AP.C1.6.2] Locks closure of iteration until all active codes have been re-heard at least once. [AP.C1.6.3] Locks [GRIP] on the [LINEAR_OBJECT] to remain held throughout iteration. [AP.C1.6.4] Triggers transition to Phase 04 once"
      ]
    },
    {
      "code": "ST.C1.0.1",
      "prefix": "ST",
      "pages": [
        8,
        9
      ],
      "occurrenceCount": 2,
      "contexts": [
        "L SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.0] Declares a [SYSTEM] axis from Node_A to Node_B spanning 15m, opened on a single working axis. [ST.C1.0.1] Places one [LINEAR_OBJECT] as working line at floor level from Node_A to Node_B, spanning 15m, held in full contact with zero tension. [ST.C1.0.2] Places one [MARKER_OBJECT] at Node_A centre as origin anchor, triggered by the datum object\u2013street-light at coordinate 107.610944, -6.909886 [DP.C1.0.1]. [ST.C1.0.3] Distributes along the trajectory one [TEXTURE_OBJECT] at \u00b13.55 metres, four [SOLID_MASS_OBJECT] kn",
        "IP] with isometric contraction along the [FINGER_FLEXOR] and [PALM] under [INJECTION], forming [MECHANICAL_GRIP] on the [LINEAR_OBJECT] at [ST.C1.0.1]. [RT.C1.0.3] Executes [HALT] on the forward drive at the [MOTOR_NERVE] under [ALERT], holding tonus at threshold to produce [RIGID_POSTURE] locked toward [ST.C1.0.3]. [RT.C1.0.4] Initiates [PRE_ROTATE] at the [CERVICAL] spine under [ALERT], holding [FIXATION_HOLD] on the visual referent at [ST.C1.0.7]. [RT.C1.0.5] Executes [TIGHTEN] across the [SHOULDER], [CLAVICLE], [STERNUM] and [SCAPULA] under [ALERT], p"
      ]
    },
    {
      "code": "ST.C1.0.2",
      "prefix": "ST",
      "pages": [
        8,
        9
      ],
      "occurrenceCount": 2,
      "contexts": [
        "] Places one [LINEAR_OBJECT] as working line at floor level from Node_A to Node_B, spanning 15m, held in full contact with zero tension. [ST.C1.0.2] Places one [MARKER_OBJECT] at Node_A centre as origin anchor, triggered by the datum object\u2013street-light at coordinate 107.610944, -6.909886 [DP.C1.0.1]. [ST.C1.0.3] Distributes along the trajectory one [TEXTURE_OBJECT] at \u00b13.55 metres, four [SOLID_MASS_OBJECT] knee-high at \u00b11.87, \u00b14.27, \u00b14.51 and \u00b112.66 metres, three [SOLID_MASS_OBJECT] vertical at \u00b17.16, \u00b112.49 and \u00b113.94 metres, one [REGULATORY_OBJECT] at",
        "ER] on the centre of gravity toward the [SOLE] of both feet at the [LOWER_EXTREMITY] under [INJECTION], producing [STATIC_EQUILIBRIUM] at [ST.C1.0.2]. [RT.C1.0.2] Performs [GRIP] with isometric contraction along the [FINGER_FLEXOR] and [PALM] under [INJECTION], forming [MECHANICAL_GRIP] on the [LINEAR_OBJECT] at [ST.C1.0.1]. [RT.C1.0.3] Executes [HALT] on the forward drive at the [MOTOR_NERVE] under [ALERT], holding tonus at threshold to produce [RIGID_POSTURE] locked toward [ST.C1.0.3]. [RT.C1.0.4] Initiates [PRE_ROTATE] at the [CERVICAL] spine under [AL"
      ]
    },
    {
      "code": "ST.C1.0.3",
      "prefix": "ST",
      "pages": [
        8,
        9
      ],
      "occurrenceCount": 2,
      "contexts": [
        "ER_OBJECT] at Node_A centre as origin anchor, triggered by the datum object\u2013street-light at coordinate 107.610944, -6.909886 [DP.C1.0.1]. [ST.C1.0.3] Distributes along the trajectory one [TEXTURE_OBJECT] at \u00b13.55 metres, four [SOLID_MASS_OBJECT] knee-high at \u00b11.87, \u00b14.27, \u00b14.51 and \u00b112.66 metres, three [SOLID_MASS_OBJECT] vertical at \u00b17.16, \u00b112.49 and \u00b113.94 metres, one [REGULATORY_OBJECT] at \u00b112.15 metres, two [SEMANTIC_OBJECT] at \u00b112.45 and \u00b114.80 metres, and one [GROUND_TEXTURE_OBJECT] at \u00b114.31 metres. [ST.C1.0.4] Reads one [REGULATORY_OBJECT] at \u00b112.1",
        "ecutes [HALT] on the forward drive at the [MOTOR_NERVE] under [ALERT], holding tonus at threshold to produce [RIGID_POSTURE] locked toward [ST.C1.0.3]. [RT.C1.0.4] Initiates [PRE_ROTATE] at the [CERVICAL] spine under [ALERT], holding [FIXATION_HOLD] on the visual referent at [ST.C1.0.7]. [RT.C1.0.5] Executes [TIGHTEN] across the [SHOULDER], [CLAVICLE], [STERNUM] and [SCAPULA] under [ALERT], producing [COMPRESSED_VOLUME] that mirrors the corridor at [ST.C1.0.6]. [RT.C1.0.6] Executes [DISTRIBUTE] of uneven weight across the [SOLE_L] and [SOLE_R] under [ALER"
      ]
    },
    {
      "code": "ST.C1.0.4",
      "prefix": "ST",
      "pages": [
        8,
        9
      ],
      "occurrenceCount": 2,
      "contexts": [
        "REGULATORY_OBJECT] at \u00b112.15 metres, two [SEMANTIC_OBJECT] at \u00b112.45 and \u00b114.80 metres, and one [GROUND_TEXTURE_OBJECT] at \u00b114.31 metres. [ST.C1.0.4] Reads one [REGULATORY_OBJECT] at \u00b112.15 metres on the edge under [AUTHORITY], applying direction=right closed, held with hip in latent turn and cursor forward, referring to [DP.C1.0.7]. [ST.C1.0.5] Reads one [TEXTURE_OBJECT] mid-trajectory in slope descending and one [GROUND_TEXTURE_OBJECT] at \u00b114.31 metres as metal cover under [ELEVATION], producing slip-potential in the foot and broken ground.",
        "ECT] of right turn at the [HIP] and [KNEE] under [ALERT], locking the cursor to the [LINEAR_OBJECT] to produce [LOCKED_AXIS], referring to [ST.C1.0.4]. [PHASE 2] LINEAR TRAJECTORY [C1.1] Initial Traction DATA PROVOCATION \u00b7 RAW DATA [DP.C1.1.1] source=Mapillary | type=feature | distance=\u00b10.0m | feature=object | value=\"object--support--utility-pole\" [DP.C1.1.2] source=Mapillary | type=feature | distance=\u00b11.87m | feature=object | value=\"object--traffic-cone\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.1.1] Declares a [SYSTEM] cursor initiatio"
      ]
    },
    {
      "code": "ST.C1.0.5",
      "prefix": "ST",
      "pages": [
        8,
        9
      ],
      "occurrenceCount": 2,
      "contexts": [
        "the edge under [AUTHORITY], applying direction=right closed, held with hip in latent turn and cursor forward, referring to [DP.C1.0.7]. [ST.C1.0.5] Reads one [TEXTURE_OBJECT] mid-trajectory in slope descending and one [GROUND_TEXTURE_OBJECT] at \u00b114.31 metres as metal cover under [ELEVATION], producing slip-potential in the foot and broken ground.",
        "STRIBUTE] of uneven weight across the [SOLE_L] and [SOLE_R] under [ALERT], producing [ASYMMETRIC_STANCE] that reads the elevation break at [ST.C1.0.5]. [RT.C1.0.7] Executes [REJECT] of right turn at the [HIP] and [KNEE] under [ALERT], locking the cursor to the [LINEAR_OBJECT] to produce [LOCKED_AXIS], referring to [ST.C1.0.4]. [PHASE 2] LINEAR TRAJECTORY [C1.1] Initial Traction DATA PROVOCATION \u00b7 RAW DATA [DP.C1.1.1] source=Mapillary | type=feature | distance=\u00b10.0m | feature=object | value=\"object--support--utility-pole\" [DP.C1.1.2] source=Mapillary | t"
      ]
    },
    {
      "code": "ST.C1.0.6",
      "prefix": "ST",
      "pages": [
        9
      ],
      "occurrenceCount": 2,
      "contexts": [
        "CODE SCORE \u00b7 SENTENCE [ST.C1.0.6] Distributes seven [SOLID_MASS_OBJECT] along the line of approach from Node_A to Node_B under [MASS], with posture narrowing and elbows inward, producing [COMPRESSED_VOLUME]. [ST.C1.0.7] Reads one [SEMANTIC_OBJECT] at \u00b112.45 metres on the edge under [SEMANTIC], pulling gaze off axis with head in latent rotation, in conflict with the hand carrying the [LINEAR_OBJECT]. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 S",
        "HTEN] across the [SHOULDER], [CLAVICLE], [STERNUM] and [SCAPULA] under [ALERT], producing [COMPRESSED_VOLUME] that mirrors the corridor at [ST.C1.0.6]. [RT.C1.0.6] Executes [DISTRIBUTE] of uneven weight across the [SOLE_L] and [SOLE_R] under [ALERT], producing [ASYMMETRIC_STANCE] that reads the elevation break at [ST.C1.0.5]. [RT.C1.0.7] Executes [REJECT] of right turn at the [HIP] and [KNEE] under [ALERT], locking the cursor to the [LINEAR_OBJECT] to produce [LOCKED_AXIS], referring to [ST.C1.0.4]. [PHASE 2] LINEAR TRAJECTORY [C1.1] Initial Traction DA"
      ]
    },
    {
      "code": "ST.C1.0.7",
      "prefix": "ST",
      "pages": [
        9
      ],
      "occurrenceCount": 2,
      "contexts": [
        "along the line of approach from Node_A to Node_B under [MASS], with posture narrowing and elbows inward, producing [COMPRESSED_VOLUME]. [ST.C1.0.7] Reads one [SEMANTIC_OBJECT] at \u00b112.45 metres on the edge under [SEMANTIC], pulling gaze off axis with head in latent rotation, in conflict with the hand carrying the [LINEAR_OBJECT]. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C1.0.1] Executes [CENTER] on the centre of gravity toward the [SOLE] of both feet at the [LOWER_EXTREMITY] under [INJECTION], producing [STATIC_EQUILIBRIUM] at [ST.C1.0.2].",
        "[ST.C1.0.3]. [RT.C1.0.4] Initiates [PRE_ROTATE] at the [CERVICAL] spine under [ALERT], holding [FIXATION_HOLD] on the visual referent at [ST.C1.0.7]. [RT.C1.0.5] Executes [TIGHTEN] across the [SHOULDER], [CLAVICLE], [STERNUM] and [SCAPULA] under [ALERT], producing [COMPRESSED_VOLUME] that mirrors the corridor at [ST.C1.0.6]. [RT.C1.0.6] Executes [DISTRIBUTE] of uneven weight across the [SOLE_L] and [SOLE_R] under [ALERT], producing [ASYMMETRIC_STANCE] that reads the elevation break at [ST.C1.0.5]. [RT.C1.0.7] Executes [REJECT] of right turn at the [HIP]"
      ]
    },
    {
      "code": "ST.C1.1",
      "prefix": "ST",
      "pages": [
        13
      ],
      "occurrenceCount": 2,
      "contexts": [
        "\u00b7 Impulse Variation on Active Codes SOURCE CODE \u00b7 REGISTER (KS) CODE SOURCE \u00b7 SENTENCE [KS.C1.6.1] Carries all active checkpoints from [ST.C1.1] through [ST.C1.5], forming the source register that iteration must traverse at least once. [KS.C1.6.2] Re-activates the situation set : [ST.C1.1] Initial Traction, [ST.C1.2] Compression Corridor, [ST.C1.3] Authority Interruption, [ST.C1.4] Semantic Aggression, [ST.C1.5] Node B Final Contact. [KS.C1.6.3] Re-activates the impulse set : [RT.C1.1] under [ACCELERATION] and [COMPRESSION], [RT.C1.2] under [COMPRESS",
        "through [ST.C1.5], forming the source register that iteration must traverse at least once. [KS.C1.6.2] Re-activates the situation set : [ST.C1.1] Initial Traction, [ST.C1.2] Compression Corridor, [ST.C1.3] Authority Interruption, [ST.C1.4] Semantic Aggression, [ST.C1.5] Node B Final Contact. [KS.C1.6.3] Re-activates the impulse set : [RT.C1.1] under [ACCELERATION] and [COMPRESSION], [RT.C1.2] under [COMPRESSION] and [CONSTANT], [RT.C1.3] under [FREEZE] and [GLITCH], [RT.C1.4] under [FIXATION] and [COMPRESSION], [RT.C1.5] under [ASYMMETRIC] and [ALERT]."
      ]
    },
    {
      "code": "ST.C1.1.1",
      "prefix": "ST",
      "pages": [
        9
      ],
      "occurrenceCount": 2,
      "contexts": [
        "llary | type=feature | distance=\u00b11.87m | feature=object | value=\"object--traffic-cone\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.1.1] Declares a [SYSTEM] cursor initiation at Node_A, in grid transit with cursor forward, marking the start of Score 01. [ST.C1.1.2] Reads one [LINEAR_OBJECT] under [SPATIAL_MATRIX], held in contact with tension tightening, permitting no slack, with the first grip taken. [ST.C1.1.3] Places one [SOLID_MASS_OBJECT] knee-high at \u00b11.87 metres under [MASS], with the shoulder narrowing at initiation, producing [COMPRE",
        "E \u00b7 SENTENCE [RT.C1.1.1] Executes [STEP] and [ACCELERATE] at the [SOLE] and [KNEE] under [ACCELERATION], with tonus active, referring to [ST.C1.1.1]."
      ]
    },
    {
      "code": "ST.C1.1.2",
      "prefix": "ST",
      "pages": [
        9,
        10
      ],
      "occurrenceCount": 2,
      "contexts": [
        "NTENCE [ST.C1.1.1] Declares a [SYSTEM] cursor initiation at Node_A, in grid transit with cursor forward, marking the start of Score 01. [ST.C1.1.2] Reads one [LINEAR_OBJECT] under [SPATIAL_MATRIX], held in contact with tension tightening, permitting no slack, with the first grip taken. [ST.C1.1.3] Places one [SOLID_MASS_OBJECT] knee-high at \u00b11.87 metres under [MASS], with the shoulder narrowing at initiation, producing [COMPRESSED_VOLUME]. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C1.1.1] Executes [STEP] and [ACCELERATE] at the [SOLE] and [K",
        "with isometric contraction at the [FINGER] and [PALM] under [COMPRESSION], forming [MECHANICAL_GRIP] on the [LINEAR_OBJECT], referring to [ST.C1.1.2]. [RT.C1.1.3] Executes [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], producing initial [COMPRESSED_VOLUME], referring to [ST.C1.1.3]. [C1.2] Compression Corridor DATA PROVOCATION \u00b7 RAW DATA [DP.C1.2.1] source=Mapillary | type=feature | distance=\u00b13.55m | feature=construction | value=\"construction--flat--driveway\" [DP.C1.2.2] source=Mapillary | type=feature | distance=\u00b14.27m | feature=object | va"
      ]
    },
    {
      "code": "ST.C1.1.3",
      "prefix": "ST",
      "pages": [
        9,
        10
      ],
      "occurrenceCount": 2,
      "contexts": [
        "eads one [LINEAR_OBJECT] under [SPATIAL_MATRIX], held in contact with tension tightening, permitting no slack, with the first grip taken. [ST.C1.1.3] Places one [SOLID_MASS_OBJECT] knee-high at \u00b11.87 metres under [MASS], with the shoulder narrowing at initiation, producing [COMPRESSED_VOLUME]. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C1.1.1] Executes [STEP] and [ACCELERATE] at the [SOLE] and [KNEE] under [ACCELERATION], with tonus active, referring to [ST.C1.1.1].",
        "2]. [RT.C1.1.3] Executes [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], producing initial [COMPRESSED_VOLUME], referring to [ST.C1.1.3]. [C1.2] Compression Corridor DATA PROVOCATION \u00b7 RAW DATA [DP.C1.2.1] source=Mapillary | type=feature | distance=\u00b13.55m | feature=construction | value=\"construction--flat--driveway\" [DP.C1.2.2] source=Mapillary | type=feature | distance=\u00b14.27m | feature=object | value=\"object--traffic-cone\" [DP.C1.2.3] source=Mapillary | type=feature | distance=\u00b14.51m | feature=object | value=\"object--traffic-cone\" [DP.C1.2."
      ]
    },
    {
      "code": "ST.C1.2",
      "prefix": "ST",
      "pages": [
        13
      ],
      "occurrenceCount": 1,
      "contexts": [
        "the source register that iteration must traverse at least once. [KS.C1.6.2] Re-activates the situation set : [ST.C1.1] Initial Traction, [ST.C1.2] Compression Corridor, [ST.C1.3] Authority Interruption, [ST.C1.4] Semantic Aggression, [ST.C1.5] Node B Final Contact. [KS.C1.6.3] Re-activates the impulse set : [RT.C1.1] under [ACCELERATION] and [COMPRESSION], [RT.C1.2] under [COMPRESSION] and [CONSTANT], [RT.C1.3] under [FREEZE] and [GLITCH], [RT.C1.4] under [FIXATION] and [COMPRESSION], [RT.C1.5] under [ASYMMETRIC] and [ALERT]. [KS.C1.6.4] Declares [SYS"
      ]
    },
    {
      "code": "ST.C1.2.1",
      "prefix": "ST",
      "pages": [
        10
      ],
      "occurrenceCount": 2,
      "contexts": [
        "ype=feature | distance=\u00b17.16m | feature=object | value=\"object--support--utility-pole\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.2.1] Places one [TEXTURE_OBJECT] at \u00b13.55 metres under [ELEVATION], with surface descending, the elevation drop begins here. [ST.C1.2.2] Places two [SOLID_MASS_OBJECT] knee-high at \u00b14.27 and \u00b14.51 metres and one [SOLID_MASS_OBJECT] vertical at \u00b17.16 metres under [MASS], forming a corridor of static obstacles. [ST.C1.2.3] Combines [ELEVATION] with [MASS], producing sustained [COMPRESSED_VOLUME] through the descen",
        "C1.2.1] Executes elevation negotiation at the [SOLE] and [KNEE] under [ACCELERATION], with axis maintained through the drop, referring to [ST.C1.2.1]. [RT.C1.2.2] Sustains [NARROW] at the [SHOULDER] under [COMPRESSION], holding [COMPRESSED_VOLUME] through the corridor, referring to [ST.C1.2.2]. [RT.C1.2.3] Performs [GRIP] with isometric contraction at the [FINGER] and [PALM] under [CONSTANT], maintaining [MECHANICAL_GRIP] on the [LINEAR_OBJECT] through the passage, referring to [ST.C1.2.3]. [C1.3] Authority Interruption DATA PROVOCATION \u00b7 RAW DATA [DP.C"
      ]
    },
    {
      "code": "ST.C1.2.2",
      "prefix": "ST",
      "pages": [
        10
      ],
      "occurrenceCount": 2,
      "contexts": [
        "NCE [ST.C1.2.1] Places one [TEXTURE_OBJECT] at \u00b13.55 metres under [ELEVATION], with surface descending, the elevation drop begins here. [ST.C1.2.2] Places two [SOLID_MASS_OBJECT] knee-high at \u00b14.27 and \u00b14.51 metres and one [SOLID_MASS_OBJECT] vertical at \u00b17.16 metres under [MASS], forming a corridor of static obstacles. [ST.C1.2.3] Combines [ELEVATION] with [MASS], producing sustained [COMPRESSED_VOLUME] through the descending corridor. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C1.2.1] Executes elevation negotiation at the [SOLE] and [KNEE]",
        ".1]. [RT.C1.2.2] Sustains [NARROW] at the [SHOULDER] under [COMPRESSION], holding [COMPRESSED_VOLUME] through the corridor, referring to [ST.C1.2.2]. [RT.C1.2.3] Performs [GRIP] with isometric contraction at the [FINGER] and [PALM] under [CONSTANT], maintaining [MECHANICAL_GRIP] on the [LINEAR_OBJECT] through the passage, referring to [ST.C1.2.3]. [C1.3] Authority Interruption DATA PROVOCATION \u00b7 RAW DATA [DP.C1.3.1] source=Mapillary | type=feature | distance=\u00b112.15m | feature=regulatory | value=\"regulatory--no-right-turn--g1\" [DP.C1.3.2] source=Mapillar"
      ]
    },
    {
      "code": "ST.C1.2.3",
      "prefix": "ST",
      "pages": [
        10
      ],
      "occurrenceCount": 2,
      "contexts": [
        "igh at \u00b14.27 and \u00b14.51 metres and one [SOLID_MASS_OBJECT] vertical at \u00b17.16 metres under [MASS], forming a corridor of static obstacles. [ST.C1.2.3] Combines [ELEVATION] with [MASS], producing sustained [COMPRESSED_VOLUME] through the descending corridor. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C1.2.1] Executes elevation negotiation at the [SOLE] and [KNEE] under [ACCELERATION], with axis maintained through the drop, referring to [ST.C1.2.1]. [RT.C1.2.2] Sustains [NARROW] at the [SHOULDER] under [COMPRESSION], holding [COMPRESSED_VOLUME] t",
        "ction at the [FINGER] and [PALM] under [CONSTANT], maintaining [MECHANICAL_GRIP] on the [LINEAR_OBJECT] through the passage, referring to [ST.C1.2.3]. [C1.3] Authority Interruption DATA PROVOCATION \u00b7 RAW DATA [DP.C1.3.1] source=Mapillary | type=feature | distance=\u00b112.15m | feature=regulatory | value=\"regulatory--no-right-turn--g1\" [DP.C1.3.2] source=Mapillary | type=feature | distance=\u00b112.49m | feature=object | value=\"object--support--utility-pole\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.3.1] Reads one [REGULATORY_OBJECT] at \u00b112.15 metre"
      ]
    },
    {
      "code": "ST.C1.3",
      "prefix": "ST",
      "pages": [
        13
      ],
      "occurrenceCount": 1,
      "contexts": [
        "on must traverse at least once. [KS.C1.6.2] Re-activates the situation set : [ST.C1.1] Initial Traction, [ST.C1.2] Compression Corridor, [ST.C1.3] Authority Interruption, [ST.C1.4] Semantic Aggression, [ST.C1.5] Node B Final Contact. [KS.C1.6.3] Re-activates the impulse set : [RT.C1.1] under [ACCELERATION] and [COMPRESSION], [RT.C1.2] under [COMPRESSION] and [CONSTANT], [RT.C1.3] under [FREEZE] and [GLITCH], [RT.C1.4] under [FIXATION] and [COMPRESSION], [RT.C1.5] under [ASYMMETRIC] and [ALERT]. [KS.C1.6.4] Declares [SYSTEM] no new checkpoint permitted,"
      ]
    },
    {
      "code": "ST.C1.3.1",
      "prefix": "ST",
      "pages": [
        10,
        11
      ],
      "occurrenceCount": 3,
      "contexts": [
        "pe=feature | distance=\u00b112.49m | feature=object | value=\"object--support--utility-pole\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.3.1] Reads one [REGULATORY_OBJECT] at \u00b112.15 metres on the edge under [AUTHORITY], applying direction=right closed, held with cursor forward and hip in latent turn. [ST.C1.3.2] Places one [SOLID_MASS_OBJECT] vertical at \u00b112.49 metres as adjacent anchor to the regulatory line, the authority is legible without being physical. BODY IMPULSE \u00b7 BODY SCORE",
        "utes [TIGHTEN] against the pull of the interrupted route at the [SPINE] and [PELVIS] under [FREEZE], producing [LOCKED_AXIS], referring to [ST.C1.3.1]. [RT.C1.3.2] Holds latent [ROTATE] at the [HIP] under [FREEZE], sustaining [RIGID_POSTURE] that registers authority as torque, referring to [ST.C1.3.1]. [C1.4] Semantic Aggression DATA PROVOCATION \u00b7 RAW DATA [DP.C1.4.1] source=Mapillary | type=feature | distance=\u00b112.45m | feature=object | value=\"object--sign--advertisement\" [DP.C1.4.2] source=Mapillary | type=feature | distance=\u00b112.66m | feature=object | va",
        "RT.C1.3.2] Holds latent [ROTATE] at the [HIP] under [FREEZE], sustaining [RIGID_POSTURE] that registers authority as torque, referring to [ST.C1.3.1]. [C1.4] Semantic Aggression DATA PROVOCATION \u00b7 RAW DATA [DP.C1.4.1] source=Mapillary | type=feature | distance=\u00b112.45m | feature=object | value=\"object--sign--advertisement\" [DP.C1.4.2] source=Mapillary | type=feature | distance=\u00b112.66m | feature=object | value=\"object--traffic-cone\" [DP.C1.4.3] source=Mapillary | type=feature | distance=\u00b113.94m | feature=object | value=\"object--support--utility-pole\" [DP.C"
      ]
    },
    {
      "code": "ST.C1.3.2",
      "prefix": "ST",
      "pages": [
        10
      ],
      "occurrenceCount": 1,
      "contexts": [
        "OBJECT] at \u00b112.15 metres on the edge under [AUTHORITY], applying direction=right closed, held with cursor forward and hip in latent turn. [ST.C1.3.2] Places one [SOLID_MASS_OBJECT] vertical at \u00b112.49 metres as adjacent anchor to the regulatory line, the authority is legible without being physical. BODY IMPULSE \u00b7 BODY SCORE"
      ]
    },
    {
      "code": "ST.C1.4",
      "prefix": "ST",
      "pages": [
        13
      ],
      "occurrenceCount": 1,
      "contexts": [
        "KS.C1.6.2] Re-activates the situation set : [ST.C1.1] Initial Traction, [ST.C1.2] Compression Corridor, [ST.C1.3] Authority Interruption, [ST.C1.4] Semantic Aggression, [ST.C1.5] Node B Final Contact. [KS.C1.6.3] Re-activates the impulse set : [RT.C1.1] under [ACCELERATION] and [COMPRESSION], [RT.C1.2] under [COMPRESSION] and [CONSTANT], [RT.C1.3] under [FREEZE] and [GLITCH], [RT.C1.4] under [FIXATION] and [COMPRESSION], [RT.C1.5] under [ASYMMETRIC] and [ALERT]. [KS.C1.6.4] Declares [SYSTEM] no new checkpoint permitted, the register only replays codes a"
      ]
    },
    {
      "code": "ST.C1.4.1",
      "prefix": "ST",
      "pages": [
        11
      ],
      "occurrenceCount": 2,
      "contexts": [
        "type=feature | distance=\u00b114.80m | feature=object | value=\"object--sign--advertisement\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.4.1] Reads two [SEMANTIC_OBJECT] at \u00b112.45 and \u00b114.80 metres under [SEMANTIC], with gaze off-axis and head in latent rotation, pulling attention repeatedly off the working line. [ST.C1.4.2] Places one [SOLID_MASS_OBJECT] knee-high at \u00b112.66 metres and one [SOLID_MASS_OBJECT] vertical at \u00b113.94 metres under [MASS], the corridor thinning between the two signs. [ST.C1.4.3] Sustains the hand carrying the [LINEAR_OBJE",
        "ROTATE] at the [CERVICAL] spine and [EYE] under [FIXATION], producing [FIXATION_HOLD] while the body still carries the line, referring to [ST.C1.4.1]. [RT.C1.4.2] Sustains [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], holding [COMPRESSED_VOLUME] through the corridor, referring to [ST.C1.4.2]. [RT.C1.4.3] Maintains [GRIP] with isometric contraction at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], sustaining [MECHANICAL_GRIP] throughout, referring to [ST.C1.4.3]. [C1.5] Node B \u00b7 Final Contact DATA PROVOCATION \u00b7 RAW DATA [D"
      ]
    },
    {
      "code": "ST.C1.4.2",
      "prefix": "ST",
      "pages": [
        11
      ],
      "occurrenceCount": 2,
      "contexts": [
        "45 and \u00b114.80 metres under [SEMANTIC], with gaze off-axis and head in latent rotation, pulling attention repeatedly off the working line. [ST.C1.4.2] Places one [SOLID_MASS_OBJECT] knee-high at \u00b112.66 metres and one [SOLID_MASS_OBJECT] vertical at \u00b113.94 metres under [MASS], the corridor thinning between the two signs. [ST.C1.4.3] Sustains the hand carrying the [LINEAR_OBJECT] in parallel with the head turning toward each sign, reading and moving happen as one compression. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C1.4.1] Executes [FIXATE] wi",
        ".4.2] Sustains [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], holding [COMPRESSED_VOLUME] through the corridor, referring to [ST.C1.4.2]. [RT.C1.4.3] Maintains [GRIP] with isometric contraction at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], sustaining [MECHANICAL_GRIP] throughout, referring to [ST.C1.4.3]. [C1.5] Node B \u00b7 Final Contact DATA PROVOCATION \u00b7 RAW DATA [DP.C1.5.1] source=Mapillary | type=feature | distance=\u00b114.31m | feature=object | value=\"object--manhole\" [DP.C1.5.2] source=Mapillary | type=feature | distance"
      ]
    },
    {
      "code": "ST.C1.4.3",
      "prefix": "ST",
      "pages": [
        11
      ],
      "occurrenceCount": 2,
      "contexts": [
        "e-high at \u00b112.66 metres and one [SOLID_MASS_OBJECT] vertical at \u00b113.94 metres under [MASS], the corridor thinning between the two signs. [ST.C1.4.3] Sustains the hand carrying the [LINEAR_OBJECT] in parallel with the head turning toward each sign, reading and moving happen as one compression. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C1.4.1] Executes [FIXATE] with micro [ROTATE] at the [CERVICAL] spine and [EYE] under [FIXATION], producing [FIXATION_HOLD] while the body still carries the line, referring to [ST.C1.4.1]. [RT.C1.4.2] Sustains [",
        "ric contraction at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], sustaining [MECHANICAL_GRIP] throughout, referring to [ST.C1.4.3]. [C1.5] Node B \u00b7 Final Contact DATA PROVOCATION \u00b7 RAW DATA [DP.C1.5.1] source=Mapillary | type=feature | distance=\u00b114.31m | feature=object | value=\"object--manhole\" [DP.C1.5.2] source=Mapillary | type=feature | distance=\u00b115.00m | feature=bounds | value=\"Node_B terminal\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.5.1] Places one [GROUND_TEXTURE_OBJECT] at \u00b114.31 metres as metal cover under [EL"
      ]
    },
    {
      "code": "ST.C1.5",
      "prefix": "ST",
      "pages": [
        13
      ],
      "occurrenceCount": 2,
      "contexts": [
        "n on Active Codes SOURCE CODE \u00b7 REGISTER (KS) CODE SOURCE \u00b7 SENTENCE [KS.C1.6.1] Carries all active checkpoints from [ST.C1.1] through [ST.C1.5], forming the source register that iteration must traverse at least once. [KS.C1.6.2] Re-activates the situation set : [ST.C1.1] Initial Traction, [ST.C1.2] Compression Corridor, [ST.C1.3] Authority Interruption, [ST.C1.4] Semantic Aggression, [ST.C1.5] Node B Final Contact. [KS.C1.6.3] Re-activates the impulse set : [RT.C1.1] under [ACCELERATION] and [COMPRESSION], [RT.C1.2] under [COMPRESSION] and [CONSTANT",
        "tuation set : [ST.C1.1] Initial Traction, [ST.C1.2] Compression Corridor, [ST.C1.3] Authority Interruption, [ST.C1.4] Semantic Aggression, [ST.C1.5] Node B Final Contact. [KS.C1.6.3] Re-activates the impulse set : [RT.C1.1] under [ACCELERATION] and [COMPRESSION], [RT.C1.2] under [COMPRESSION] and [CONSTANT], [RT.C1.3] under [FREEZE] and [GLITCH], [RT.C1.4] under [FIXATION] and [COMPRESSION], [RT.C1.5] under [ASYMMETRIC] and [ALERT]. [KS.C1.6.4] Declares [SYSTEM] no new checkpoint permitted, the register only replays codes already active during the linea"
      ]
    },
    {
      "code": "ST.C1.5.1",
      "prefix": "ST",
      "pages": [
        11,
        12
      ],
      "occurrenceCount": 2,
      "contexts": [
        "Mapillary | type=feature | distance=\u00b115.00m | feature=bounds | value=\"Node_B terminal\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.5.1] Places one [GROUND_TEXTURE_OBJECT] at \u00b114.31 metres as metal cover under [ELEVATION], receiving the terminal step with foot at slip-potential and ground hollow. [ST.C1.5.2] Declares [SYSTEM] Node_B reached, with route complete and cursor arrived, closing Phase 02. [ST.C1.5.3] Reads one [LINEAR_OBJECT] held in contact maintained with tension release pending, the line has not yet been let go.",
        "at the [SOLE], [KNEE] and [HIP] under [ASYMMETRIC], producing [SLIP_POTENTIAL] registered as loaded weight on the sole edge, referring to [ST.C1.5.1]. [RT.C1.5.2] Performs [DECELERATE] with [BRACE] at the [SPINE] and [CG] under [ALERT], with cursor arrived and tonus at threshold, referring to [ST.C1.5.2]. [RT.C1.5.3] Sustains [GRIP] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], held in [MECHANICAL_GRIP] with release pending, referring to [ST.C1.5.3]. [PHASE 02] END STATE At the end of the linear trajectory the body arrives at Node_B."
      ]
    },
    {
      "code": "ST.C1.5.2",
      "prefix": "ST",
      "pages": [
        11,
        12
      ],
      "occurrenceCount": 2,
      "contexts": [
        "URE_OBJECT] at \u00b114.31 metres as metal cover under [ELEVATION], receiving the terminal step with foot at slip-potential and ground hollow. [ST.C1.5.2] Declares [SYSTEM] Node_B reached, with route complete and cursor arrived, closing Phase 02. [ST.C1.5.3] Reads one [LINEAR_OBJECT] held in contact maintained with tension release pending, the line has not yet been let go.",
        "1.5.2] Performs [DECELERATE] with [BRACE] at the [SPINE] and [CG] under [ALERT], with cursor arrived and tonus at threshold, referring to [ST.C1.5.2]. [RT.C1.5.3] Sustains [GRIP] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], held in [MECHANICAL_GRIP] with release pending, referring to [ST.C1.5.3]. [PHASE 02] END STATE At the end of the linear trajectory the body arrives at Node_B. The following register carries the residues that must be preserved into Phase 03 iteration. OUTPUT END STATE \u00b7 OE CODE END STATE \u00b7 SENTENCE [OE.C1.END.1]"
      ]
    },
    {
      "code": "ST.C1.5.3",
      "prefix": "ST",
      "pages": [
        11,
        12
      ],
      "occurrenceCount": 2,
      "contexts": [
        "ip-potential and ground hollow. [ST.C1.5.2] Declares [SYSTEM] Node_B reached, with route complete and cursor arrived, closing Phase 02. [ST.C1.5.3] Reads one [LINEAR_OBJECT] held in contact maintained with tension release pending, the line has not yet been let go.",
        "ns [GRIP] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], held in [MECHANICAL_GRIP] with release pending, referring to [ST.C1.5.3]. [PHASE 02] END STATE At the end of the linear trajectory the body arrives at Node_B. The following register carries the residues that must be preserved into Phase 03 iteration. OUTPUT END STATE \u00b7 OE CODE END STATE \u00b7 SENTENCE [OE.C1.END.1] Holds contact with the [LINEAR_OBJECT] maintained, producing [MECHANICAL_GRIP] that has not yet been released. [OE.C1.END.2] Holds gaze in residual [FIXATION], with hea"
      ]
    },
    {
      "code": "ST.C1.6.1",
      "prefix": "ST",
      "pages": [
        13
      ],
      "occurrenceCount": 1,
      "contexts": [
        "d, the register only replays codes already active during the linear flow. ACTIVE SITUATION CODES \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.6.1] Declares [SYSTEM] the grid from Node_A to Node_B complete and Node_C closed, with cursor still in transit. [ST.C1.6.2] Reads one [LINEAR_OBJECT] across 15m, held in contact with full tension, permitting no slack at any iteration. [ST.C1.6.3] Reads [SEMANTIC_OBJECT] under [SEMANTIC], with gaze in fixation loop, functioning as a repeat trigger and not as a new checkpoint. [ST.C1.6.4] Reads [SOLID_MASS_OBJECT"
      ]
    },
    {
      "code": "ST.C1.6.2",
      "prefix": "ST",
      "pages": [
        13
      ],
      "occurrenceCount": 1,
      "contexts": [
        "SCORE \u00b7 SENTENCE [ST.C1.6.1] Declares [SYSTEM] the grid from Node_A to Node_B complete and Node_C closed, with cursor still in transit. [ST.C1.6.2] Reads one [LINEAR_OBJECT] across 15m, held in contact with full tension, permitting no slack at any iteration. [ST.C1.6.3] Reads [SEMANTIC_OBJECT] under [SEMANTIC], with gaze in fixation loop, functioning as a repeat trigger and not as a new checkpoint. [ST.C1.6.4] Reads [SOLID_MASS_OBJECT] under [MASS], with posture narrow and duration iterative, a narrowing pattern that repeats without change. [ST.C1.6.5]"
      ]
    },
    {
      "code": "ST.C1.6.3",
      "prefix": "ST",
      "pages": [
        13
      ],
      "occurrenceCount": 1,
      "contexts": [
        "in transit. [ST.C1.6.2] Reads one [LINEAR_OBJECT] across 15m, held in contact with full tension, permitting no slack at any iteration. [ST.C1.6.3] Reads [SEMANTIC_OBJECT] under [SEMANTIC], with gaze in fixation loop, functioning as a repeat trigger and not as a new checkpoint. [ST.C1.6.4] Reads [SOLID_MASS_OBJECT] under [MASS], with posture narrow and duration iterative, a narrowing pattern that repeats without change. [ST.C1.6.5] Reads one [TEXTURE_OBJECT] under [ELEVATION], with foot at slip-potential and weight shifting, the footing disturbance sust"
      ]
    },
    {
      "code": "ST.C1.6.4",
      "prefix": "ST",
      "pages": [
        13
      ],
      "occurrenceCount": 1,
      "contexts": [
        ".6.3] Reads [SEMANTIC_OBJECT] under [SEMANTIC], with gaze in fixation loop, functioning as a repeat trigger and not as a new checkpoint. [ST.C1.6.4] Reads [SOLID_MASS_OBJECT] under [MASS], with posture narrow and duration iterative, a narrowing pattern that repeats without change. [ST.C1.6.5] Reads one [TEXTURE_OBJECT] under [ELEVATION], with foot at slip-potential and weight shifting, the footing disturbance sustained across iterations. [ST.C1.6.6] Reads one [REGULATORY_OBJECT] under [AUTHORITY], applying direction=right closed, held throughout iteratio"
      ]
    },
    {
      "code": "ST.C1.6.5",
      "prefix": "ST",
      "pages": [
        13
      ],
      "occurrenceCount": 1,
      "contexts": [
        ".4] Reads [SOLID_MASS_OBJECT] under [MASS], with posture narrow and duration iterative, a narrowing pattern that repeats without change. [ST.C1.6.5] Reads one [TEXTURE_OBJECT] under [ELEVATION], with foot at slip-potential and weight shifting, the footing disturbance sustained across iterations. [ST.C1.6.6] Reads one [REGULATORY_OBJECT] under [AUTHORITY], applying direction=right closed, held throughout iteration. [ST.C1.6.7] Holds route complete in parallel with impulse unfinished under [PARADOX], the coordinate has arrived but the movement has not yet"
      ]
    },
    {
      "code": "ST.C1.6.6",
      "prefix": "ST",
      "pages": [
        13
      ],
      "occurrenceCount": 1,
      "contexts": [
        "[TEXTURE_OBJECT] under [ELEVATION], with foot at slip-potential and weight shifting, the footing disturbance sustained across iterations. [ST.C1.6.6] Reads one [REGULATORY_OBJECT] under [AUTHORITY], applying direction=right closed, held throughout iteration. [ST.C1.6.7] Holds route complete in parallel with impulse unfinished under [PARADOX], the coordinate has arrived but the movement has not yet closed. IMPULSE VARIATION \u00b7 BODY SCORE (VI) CODE SCORE \u00b7 SENTENCE [VI.C1.6.1] Executes [STEP] and [ACCELERATE] with a variable count from one to two steps at"
      ]
    },
    {
      "code": "ST.C1.6.7",
      "prefix": "ST",
      "pages": [
        13
      ],
      "occurrenceCount": 1,
      "contexts": [
        "ss iterations. [ST.C1.6.6] Reads one [REGULATORY_OBJECT] under [AUTHORITY], applying direction=right closed, held throughout iteration. [ST.C1.6.7] Holds route complete in parallel with impulse unfinished under [PARADOX], the coordinate has arrived but the movement has not yet closed. IMPULSE VARIATION \u00b7 BODY SCORE (VI) CODE SCORE \u00b7 SENTENCE [VI.C1.6.1] Executes [STEP] and [ACCELERATE] with a variable count from one to two steps at the [SOLE] and [KNEE] under [ACCELERATION], count varies but pattern is held. [VI.C1.6.2] Performs [GRIP] with isometric"
      ]
    },
    {
      "code": "ST.C1.7.1",
      "prefix": "ST",
      "pages": [
        15
      ],
      "occurrenceCount": 1,
      "contexts": [
        "[PHASE 04] RESIDUAL [C1.7] Residual State SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.7.1] Declares [SYSTEM] at Node_B, with Score 01 closed and iteration released. [ST.C1.7.2] Reads one [LINEAR_OBJECT] with tension slack (released) and contact-hold (residual), the line is loosening but the palm has not withdrawn. [ST.C1.7.3] Holds body stopped in parallel with impulse residue still active under [PARADOX], the body is not yet neutral. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C1.7.1]"
      ]
    },
    {
      "code": "ST.C1.7.2",
      "prefix": "ST",
      "pages": [
        15
      ],
      "occurrenceCount": 3,
      "contexts": [
        "SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.7.1] Declares [SYSTEM] at Node_B, with Score 01 closed and iteration released. [ST.C1.7.2] Reads one [LINEAR_OBJECT] with tension slack (released) and contact-hold (residual), the line is loosening but the palm has not withdrawn. [ST.C1.7.3] Holds body stopped in parallel with impulse residue still active under [PARADOX], the body is not yet neutral. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C1.7.1] Executes [RECOVER] partial at the [SHOULDER] and [CHEST] under [ALERT], producing [PAR",
        "SENTENCE [RT.C1.7.1] Executes [RECOVER] partial at the [SHOULDER] and [CHEST] under [ALERT], producing [PARTIAL_RECOVERY], referring to [ST.C1.7.2]. [RT.C1.7.2] Performs micro [RELEASE] of [GRIP] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [ALERT], with grip releasing and contact residual, referring to [ST.C1.7.2]. [RT.C1.7.3] Holds small [HOLD] at the [GAZE] under [CONSTANT], sustaining residual [FIXATION_HOLD], referring to [ST.C1.7.3].",
        "ELEASE] of [GRIP] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [ALERT], with grip releasing and contact residual, referring to [ST.C1.7.2]. [RT.C1.7.3] Holds small [HOLD] at the [GAZE] under [CONSTANT], sustaining residual [FIXATION_HOLD], referring to [ST.C1.7.3]."
      ]
    },
    {
      "code": "ST.C1.7.3",
      "prefix": "ST",
      "pages": [
        15
      ],
      "occurrenceCount": 2,
      "contexts": [
        "eads one [LINEAR_OBJECT] with tension slack (released) and contact-hold (residual), the line is loosening but the palm has not withdrawn. [ST.C1.7.3] Holds body stopped in parallel with impulse residue still active under [PARADOX], the body is not yet neutral. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C1.7.1] Executes [RECOVER] partial at the [SHOULDER] and [CHEST] under [ALERT], producing [PARTIAL_RECOVERY], referring to [ST.C1.7.2]. [RT.C1.7.2] Performs micro [RELEASE] of [GRIP] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [ALERT",
        "erring to [ST.C1.7.2]. [RT.C1.7.3] Holds small [HOLD] at the [GAZE] under [CONSTANT], sustaining residual [FIXATION_HOLD], referring to [ST.C1.7.3]."
      ]
    },
    {
      "code": "ST.C2.0",
      "prefix": "ST",
      "pages": [
        16
      ],
      "occurrenceCount": 1,
      "contexts": [
        "feature | distance=\u00b113.55m | feature=regulatory | value=\"regulatory--weight-limit--g1\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.0] Declares a [SYSTEM] axis from Node_A to Node_B across the utility corridor, spanning 14m, opened on utility-corridor mode. [ST.C2.0.1] Places one [LINEAR_OBJECT] as utility line at inner side from Node_A to Node_B, spanning 14m, held in contact with tension in pre-load. [ST.C2.0.2] Places two [SOLID_MASS_OBJECT] vertical at \u00b10.0 and \u00b15.50 metres as utility poles under [MASS], with corridor set and posture in"
      ]
    },
    {
      "code": "ST.C2.0.1",
      "prefix": "ST",
      "pages": [
        16,
        17
      ],
      "occurrenceCount": 3,
      "contexts": [
        "CE [ST.C2.0] Declares a [SYSTEM] axis from Node_A to Node_B across the utility corridor, spanning 14m, opened on utility-corridor mode. [ST.C2.0.1] Places one [LINEAR_OBJECT] as utility line at inner side from Node_A to Node_B, spanning 14m, held in contact with tension in pre-load. [ST.C2.0.2] Places two [SOLID_MASS_OBJECT] vertical at \u00b10.0 and \u00b15.50 metres as utility poles under [MASS], with corridor set and posture in latent narrow. [ST.C2.0.3] Places one [GROUND_TEXTURE_OBJECT] at \u00b13.20 metres as metal cover under [ELEVATION], with foot at hollow-po",
        "ntre of gravity toward both [SOLE] at the [LOWER_EXTREMITY] under [INJECTION], producing [STATIC_EQUILIBRIUM] at the origin, referring to [ST.C2.0.1]. [RT.C2.0.2] Performs [GRIP] on the [LINEAR_OBJECT] at the [FINGER] and [PALM] under [INJECTION], forming [MECHANICAL_GRIP] that reads the utility line, referring to [ST.C2.0.1]. [RT.C2.0.3] Executes latent [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], producing [COMPRESSED_VOLUME] in pre-load, referring to [ST.C2.0.2]. [RT.C2.0.4] Performs sole scan at the [SOLE] under [ALERT], reading the di",
        "on the [LINEAR_OBJECT] at the [FINGER] and [PALM] under [INJECTION], forming [MECHANICAL_GRIP] that reads the utility line, referring to [ST.C2.0.1]. [RT.C2.0.3] Executes latent [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], producing [COMPRESSED_VOLUME] in pre-load, referring to [ST.C2.0.2]. [RT.C2.0.4] Performs sole scan at the [SOLE] under [ALERT], reading the discontinuity of the substrate before contact, referring to [ST.C2.0.3]. [RT.C2.0.5] Executes [FIXATE] along the [EYE] toward the merge-line under [FIXATION], holding [FIXATION_HOL"
      ]
    },
    {
      "code": "ST.C2.0.2",
      "prefix": "ST",
      "pages": [
        16,
        17
      ],
      "occurrenceCount": 2,
      "contexts": [
        "Places one [LINEAR_OBJECT] as utility line at inner side from Node_A to Node_B, spanning 14m, held in contact with tension in pre-load. [ST.C2.0.2] Places two [SOLID_MASS_OBJECT] vertical at \u00b10.0 and \u00b15.50 metres as utility poles under [MASS], with corridor set and posture in latent narrow. [ST.C2.0.3] Places one [GROUND_TEXTURE_OBJECT] at \u00b13.20 metres as metal cover under [ELEVATION], with foot at hollow-potential, classified as ground-texture rather than volumetric surface. [ST.C2.0.4] Places one [SOLID_MASS_OBJECT] low at \u00b12.10 metres as trash-can, v",
        ".0.3] Executes latent [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], producing [COMPRESSED_VOLUME] in pre-load, referring to [ST.C2.0.2]. [RT.C2.0.4] Performs sole scan at the [SOLE] under [ALERT], reading the discontinuity of the substrate before contact, referring to [ST.C2.0.3]. [RT.C2.0.5] Executes [FIXATE] along the [EYE] toward the merge-line under [FIXATION], holding [FIXATION_HOLD] at the regulatory sign, referring to [ST.C2.0.6]. [RT.C2.0.6] Anticipates [BRACE] at the [PELVIS] under [ALERT], with weight-load latent, referring to [ST"
      ]
    },
    {
      "code": "ST.C2.0.3",
      "prefix": "ST",
      "pages": [
        16,
        17
      ],
      "occurrenceCount": 2,
      "contexts": [
        "two [SOLID_MASS_OBJECT] vertical at \u00b10.0 and \u00b15.50 metres as utility poles under [MASS], with corridor set and posture in latent narrow. [ST.C2.0.3] Places one [GROUND_TEXTURE_OBJECT] at \u00b13.20 metres as metal cover under [ELEVATION], with foot at hollow-potential, classified as ground-texture rather than volumetric surface. [ST.C2.0.4] Places one [SOLID_MASS_OBJECT] low at \u00b12.10 metres as trash-can, volumetric receiver of cast objects at low-height. [ST.C2.0.5] Places one [TEXTURE_OBJECT] at \u00b17.80 metres under [ELEVATION], with slope descending, the ele",
        ".2]. [RT.C2.0.4] Performs sole scan at the [SOLE] under [ALERT], reading the discontinuity of the substrate before contact, referring to [ST.C2.0.3]. [RT.C2.0.5] Executes [FIXATE] along the [EYE] toward the merge-line under [FIXATION], holding [FIXATION_HOLD] at the regulatory sign, referring to [ST.C2.0.6]. [RT.C2.0.6] Anticipates [BRACE] at the [PELVIS] under [ALERT], with weight-load latent, referring to [ST.C2.0.9]. [PHASE 2] LINEAR TRAJECTORY \u00b7 Score 02 The body traverses the fourteen-metre corridor across five checkpoints, from the utility line to"
      ]
    },
    {
      "code": "ST.C2.0.4",
      "prefix": "ST",
      "pages": [
        16
      ],
      "occurrenceCount": 1,
      "contexts": [
        ".20 metres as metal cover under [ELEVATION], with foot at hollow-potential, classified as ground-texture rather than volumetric surface. [ST.C2.0.4] Places one [SOLID_MASS_OBJECT] low at \u00b12.10 metres as trash-can, volumetric receiver of cast objects at low-height. [ST.C2.0.5] Places one [TEXTURE_OBJECT] at \u00b17.80 metres under [ELEVATION], with slope descending, the elevation drop begins here. [ST.C2.0.6] Reads one [REGULATORY_OBJECT] at \u00b19.15 metres under [AUTHORITY], applying direction=merge required, held with cursor in merge-latent. [ST.C2.0.7] Place"
      ]
    },
    {
      "code": "ST.C2.0.5",
      "prefix": "ST",
      "pages": [
        16
      ],
      "occurrenceCount": 1,
      "contexts": [
        "urface. [ST.C2.0.4] Places one [SOLID_MASS_OBJECT] low at \u00b12.10 metres as trash-can, volumetric receiver of cast objects at low-height. [ST.C2.0.5] Places one [TEXTURE_OBJECT] at \u00b17.80 metres under [ELEVATION], with slope descending, the elevation drop begins here. [ST.C2.0.6] Reads one [REGULATORY_OBJECT] at \u00b19.15 metres under [AUTHORITY], applying direction=merge required, held with cursor in merge-latent. [ST.C2.0.7] Places one [SOLID_MASS_OBJECT] knee-high at \u00b110.40 metres as traffic-cone, channelling the trajectory. [ST.C2.0.8] Reads one [SEMANTI"
      ]
    },
    {
      "code": "ST.C2.0.6",
      "prefix": "ST",
      "pages": [
        16,
        17
      ],
      "occurrenceCount": 2,
      "contexts": [
        "ight. [ST.C2.0.5] Places one [TEXTURE_OBJECT] at \u00b17.80 metres under [ELEVATION], with slope descending, the elevation drop begins here. [ST.C2.0.6] Reads one [REGULATORY_OBJECT] at \u00b19.15 metres under [AUTHORITY], applying direction=merge required, held with cursor in merge-latent. [ST.C2.0.7] Places one [SOLID_MASS_OBJECT] knee-high at \u00b110.40 metres as traffic-cone, channelling the trajectory. [ST.C2.0.8] Reads one [SEMANTIC_OBJECT] at \u00b111.90 metres under [SEMANTIC], with gaze pulled to eye-level advertisement. [ST.C2.0.9] Reads one [REGULATORY_OBJECT",
        "5] Executes [FIXATE] along the [EYE] toward the merge-line under [FIXATION], holding [FIXATION_HOLD] at the regulatory sign, referring to [ST.C2.0.6]. [RT.C2.0.6] Anticipates [BRACE] at the [PELVIS] under [ALERT], with weight-load latent, referring to [ST.C2.0.9]. [PHASE 2] LINEAR TRAJECTORY \u00b7 Score 02 The body traverses the fourteen-metre corridor across five checkpoints, from the utility line to the merge terminus. Every row below is a single score-text sentence built from declared tokens. [C2.1] Initial Traction \u00b7 Utility Corridor DATA PROVOCATION \u00b7 RA"
      ]
    },
    {
      "code": "ST.C2.0.7",
      "prefix": "ST",
      "pages": [
        16
      ],
      "occurrenceCount": 1,
      "contexts": [
        "6] Reads one [REGULATORY_OBJECT] at \u00b19.15 metres under [AUTHORITY], applying direction=merge required, held with cursor in merge-latent. [ST.C2.0.7] Places one [SOLID_MASS_OBJECT] knee-high at \u00b110.40 metres as traffic-cone, channelling the trajectory. [ST.C2.0.8] Reads one [SEMANTIC_OBJECT] at \u00b111.90 metres under [SEMANTIC], with gaze pulled to eye-level advertisement. [ST.C2.0.9] Reads one [REGULATORY_OBJECT] at \u00b113.55 metres under [AUTHORITY], applying weight-limit declared, with merge closure impending."
      ]
    },
    {
      "code": "ST.C2.0.8",
      "prefix": "ST",
      "pages": [
        16
      ],
      "occurrenceCount": 1,
      "contexts": [
        "sor in merge-latent. [ST.C2.0.7] Places one [SOLID_MASS_OBJECT] knee-high at \u00b110.40 metres as traffic-cone, channelling the trajectory. [ST.C2.0.8] Reads one [SEMANTIC_OBJECT] at \u00b111.90 metres under [SEMANTIC], with gaze pulled to eye-level advertisement. [ST.C2.0.9] Reads one [REGULATORY_OBJECT] at \u00b113.55 metres under [AUTHORITY], applying weight-limit declared, with merge closure impending."
      ]
    },
    {
      "code": "ST.C2.0.9",
      "prefix": "ST",
      "pages": [
        16,
        17
      ],
      "occurrenceCount": 2,
      "contexts": [
        "the trajectory. [ST.C2.0.8] Reads one [SEMANTIC_OBJECT] at \u00b111.90 metres under [SEMANTIC], with gaze pulled to eye-level advertisement. [ST.C2.0.9] Reads one [REGULATORY_OBJECT] at \u00b113.55 metres under [AUTHORITY], applying weight-limit declared, with merge closure impending.",
        "ory sign, referring to [ST.C2.0.6]. [RT.C2.0.6] Anticipates [BRACE] at the [PELVIS] under [ALERT], with weight-load latent, referring to [ST.C2.0.9]. [PHASE 2] LINEAR TRAJECTORY \u00b7 Score 02 The body traverses the fourteen-metre corridor across five checkpoints, from the utility line to the merge terminus. Every row below is a single score-text sentence built from declared tokens. [C2.1] Initial Traction \u00b7 Utility Corridor DATA PROVOCATION \u00b7 RAW DATA [DP.C2.1.1] source=Mapillary | type=feature | distance=\u00b10.0m | feature=object | value=\"object--support--util"
      ]
    },
    {
      "code": "ST.C2.1",
      "prefix": "ST",
      "pages": [
        21
      ],
      "occurrenceCount": 2,
      "contexts": [
        "ulse Variation and Object Insertion SOURCE CODE \u00b7 REGISTER (KS) CODE SOURCE \u00b7 SENTENCE [KS.C2.6.1] Carries all active checkpoints from [ST.C2.1] through [ST.C2.5], forming the source register that iteration must traverse at least once. [KS.C2.6.2] Re-activates the situation set : [ST.C2.1] Initial Traction, [ST.C2.2] Sub-Surface Footing, [ST.C2.3] Driveway Tilt, [ST.C2.4] Merge Authority, [ST.C2.5] Node B Final Contact. [KS.C2.6.3] Re-activates the impulse set under [ACCELERATION], [COMPRESSION], [GLITCH], [FIXATION], [ALERT] and [CONSTANT], already d",
        "through [ST.C2.5], forming the source register that iteration must traverse at least once. [KS.C2.6.2] Re-activates the situation set : [ST.C2.1] Initial Traction, [ST.C2.2] Sub-Surface Footing, [ST.C2.3] Driveway Tilt, [ST.C2.4] Merge Authority, [ST.C2.5] Node B Final Contact. [KS.C2.6.3] Re-activates the impulse set under [ACCELERATION], [COMPRESSION], [GLITCH], [FIXATION], [ALERT] and [CONSTANT], already declared in Phase 02. [KS.C2.6.4] Permits additional obstacles to enter the register during iteration without becoming new checkpoints. ACTIVE SIT"
      ]
    },
    {
      "code": "ST.C2.1.1",
      "prefix": "ST",
      "pages": [
        17
      ],
      "occurrenceCount": 2,
      "contexts": [
        "apillary | type=feature | distance=\u00b12.10m | feature=object | value=\"object--trash-can\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.1.1] Declares [SYSTEM] Score 02 cursor initiation at Node_A, in grid transit with cursor forward. [ST.C2.1.2] Reads one [SOLID_MASS_OBJECT] vertical at origin as first anchor under [MASS], with shoulder against the pole in initial traction. [ST.C2.1.3] Reads one [SOLID_MASS_OBJECT] low at \u00b12.10 metres under [MASS], the shoulder pass acknowledging the volumetric receiver. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 S",
        "EP] forward with load transfer at the [SOLE] and [PELVIS] under [ACCELERATION], with tonus active and weight loading forward, referring to [ST.C2.1.1]. [RT.C2.1.2] Performs shoulder pass at the [SHOULDER] and [SCAPULA] against the utility pole under [ALERT], producing [STANCE_PIVOT] around the anchor, referring to [ST.C2.1.2]. [C2.2] Sub-Surface Footing DATA PROVOCATION \u00b7 RAW DATA [DP.C2.2.1] source=Mapillary | type=feature | distance=\u00b13.20m | feature=object | value=\"object--manhole\" [DP.C2.2.2] source=Mapillary | type=feature | distance=\u00b15.50m | feature=o"
      ]
    },
    {
      "code": "ST.C2.1.2",
      "prefix": "ST",
      "pages": [
        17
      ],
      "occurrenceCount": 2,
      "contexts": [
        "L SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.1.1] Declares [SYSTEM] Score 02 cursor initiation at Node_A, in grid transit with cursor forward. [ST.C2.1.2] Reads one [SOLID_MASS_OBJECT] vertical at origin as first anchor under [MASS], with shoulder against the pole in initial traction. [ST.C2.1.3] Reads one [SOLID_MASS_OBJECT] low at \u00b12.10 metres under [MASS], the shoulder pass acknowledging the volumetric receiver. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.1.1] Executes [STEP] forward with load transfer at the [SOLE] and [PELVIS] under [ACCELER",
        "lder pass at the [SHOULDER] and [SCAPULA] against the utility pole under [ALERT], producing [STANCE_PIVOT] around the anchor, referring to [ST.C2.1.2]. [C2.2] Sub-Surface Footing DATA PROVOCATION \u00b7 RAW DATA [DP.C2.2.1] source=Mapillary | type=feature | distance=\u00b13.20m | feature=object | value=\"object--manhole\" [DP.C2.2.2] source=Mapillary | type=feature | distance=\u00b15.50m | feature=object | value=\"object--support--utility-pole\" SITUATION \u00b7 SPATIAL SCORE"
      ]
    },
    {
      "code": "ST.C2.1.3",
      "prefix": "ST",
      "pages": [
        17
      ],
      "occurrenceCount": 1,
      "contexts": [
        ".1.2] Reads one [SOLID_MASS_OBJECT] vertical at origin as first anchor under [MASS], with shoulder against the pole in initial traction. [ST.C2.1.3] Reads one [SOLID_MASS_OBJECT] low at \u00b12.10 metres under [MASS], the shoulder pass acknowledging the volumetric receiver. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.1.1] Executes [STEP] forward with load transfer at the [SOLE] and [PELVIS] under [ACCELERATION], with tonus active and weight loading forward, referring to [ST.C2.1.1]. [RT.C2.1.2] Performs shoulder pass at the [SHOULDER] and [SCAPUL"
      ]
    },
    {
      "code": "ST.C2.2",
      "prefix": "ST",
      "pages": [
        21
      ],
      "occurrenceCount": 1,
      "contexts": [
        "the source register that iteration must traverse at least once. [KS.C2.6.2] Re-activates the situation set : [ST.C2.1] Initial Traction, [ST.C2.2] Sub-Surface Footing, [ST.C2.3] Driveway Tilt, [ST.C2.4] Merge Authority, [ST.C2.5] Node B Final Contact. [KS.C2.6.3] Re-activates the impulse set under [ACCELERATION], [COMPRESSION], [GLITCH], [FIXATION], [ALERT] and [CONSTANT], already declared in Phase 02. [KS.C2.6.4] Permits additional obstacles to enter the register during iteration without becoming new checkpoints. ACTIVE SITUATION CODES \u00b7 SPATIAL SCORE"
      ]
    },
    {
      "code": "ST.C2.2.1",
      "prefix": "ST",
      "pages": [
        18
      ],
      "occurrenceCount": 2,
      "contexts": [
        "CODE SCORE \u00b7 SENTENCE [ST.C2.2.1] Places one [GROUND_TEXTURE_OBJECT] at \u00b13.20 metres as metal cover under [ELEVATION], with foot reading the sub-surface discontinuity. [ST.C2.2.2] Places one [SOLID_MASS_OBJECT] vertical at \u00b15.50 metres as adjacent anchor under [MASS], the substrate is not continuous. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.2.1] Executes sole absorption at the [SOLE] and [KNEE] under [ALERT], producing contai",
        "SENTENCE [RT.C2.2.1] Executes sole absorption at the [SOLE] and [KNEE] under [ALERT], producing contained [SLIP_POTENTIAL], referring to [ST.C2.2.1]. [RT.C2.2.2] Performs [RECOVER] at the [PELVIS] and [LUMBAR] spine under [CONSTANT], with balance re-set, referring to [ST.C2.2.2]. [C2.3] Driveway Tilt DATA PROVOCATION \u00b7 RAW DATA [DP.C2.3.1] source=Mapillary | type=feature | distance=\u00b17.80m | feature=construction | value=\"construction--flat--driveway\" [DP.C2.3.2] source=Mapillary | type=feature | distance=\u00b19.15m | feature=regulatory | value=\"regulatory--m"
      ]
    },
    {
      "code": "ST.C2.2.2",
      "prefix": "ST",
      "pages": [
        18
      ],
      "occurrenceCount": 2,
      "contexts": [
        "1] Places one [GROUND_TEXTURE_OBJECT] at \u00b13.20 metres as metal cover under [ELEVATION], with foot reading the sub-surface discontinuity. [ST.C2.2.2] Places one [SOLID_MASS_OBJECT] vertical at \u00b15.50 metres as adjacent anchor under [MASS], the substrate is not continuous. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.2.1] Executes sole absorption at the [SOLE] and [KNEE] under [ALERT], producing contained [SLIP_POTENTIAL], referring to [ST.C2.2.1]. [RT.C2.2.2] Performs [RECOVER] at the [PELVIS] and [LUMBAR] spine under [CONSTANT], with balance",
        "ng to [ST.C2.2.1]. [RT.C2.2.2] Performs [RECOVER] at the [PELVIS] and [LUMBAR] spine under [CONSTANT], with balance re-set, referring to [ST.C2.2.2]. [C2.3] Driveway Tilt DATA PROVOCATION \u00b7 RAW DATA [DP.C2.3.1] source=Mapillary | type=feature | distance=\u00b17.80m | feature=construction | value=\"construction--flat--driveway\" [DP.C2.3.2] source=Mapillary | type=feature | distance=\u00b19.15m | feature=regulatory | value=\"regulatory--merge--g1\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.3.1] Places one [TEXTURE_OBJECT] at \u00b17.80 metres under [ELEVATIO"
      ]
    },
    {
      "code": "ST.C2.3",
      "prefix": "ST",
      "pages": [
        21
      ],
      "occurrenceCount": 1,
      "contexts": [
        "ion must traverse at least once. [KS.C2.6.2] Re-activates the situation set : [ST.C2.1] Initial Traction, [ST.C2.2] Sub-Surface Footing, [ST.C2.3] Driveway Tilt, [ST.C2.4] Merge Authority, [ST.C2.5] Node B Final Contact. [KS.C2.6.3] Re-activates the impulse set under [ACCELERATION], [COMPRESSION], [GLITCH], [FIXATION], [ALERT] and [CONSTANT], already declared in Phase 02. [KS.C2.6.4] Permits additional obstacles to enter the register during iteration without becoming new checkpoints. ACTIVE SITUATION CODES \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2"
      ]
    },
    {
      "code": "ST.C2.3.1",
      "prefix": "ST",
      "pages": [
        18
      ],
      "occurrenceCount": 2,
      "contexts": [
        "| type=feature | distance=\u00b19.15m | feature=regulatory | value=\"regulatory--merge--g1\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.3.1] Places one [TEXTURE_OBJECT] at \u00b17.80 metres under [ELEVATION], with slope descending, the pelvis rotates against the incline. [ST.C2.3.2] Reads one [REGULATORY_OBJECT] at \u00b19.15 metres under [AUTHORITY], applying direction=merge imposed, the route narrows toward convergence. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.3.1] Executes [ROTATE] on the incline at the [PELVIS] and [SPINE] under [ASYMME",
        "s [ROTATE] on the incline at the [PELVIS] and [SPINE] under [ASYMMETRIC], with trunk vertical and right side loading earlier, referring to [ST.C2.3.1]. [RT.C2.3.2] Performs [MERGE] preparation at the [SPINE] and [PELVIS] under [ALERT], with cursor pre-aligned toward the convergence line, referring to [ST.C2.3.2]. [C2.4] Merge Authority \u00b7 Arterial Convergence DATA PROVOCATION \u00b7 RAW DATA [DP.C2.4.1] source=Mapillary | type=feature | distance=\u00b110.40m | feature=object | value=\"object--traffic-cone\" [DP.C2.4.2] source=Mapillary | type=feature | distance=\u00b111.90m"
      ]
    },
    {
      "code": "ST.C2.3.2",
      "prefix": "ST",
      "pages": [
        18
      ],
      "occurrenceCount": 2,
      "contexts": [
        "ST.C2.3.1] Places one [TEXTURE_OBJECT] at \u00b17.80 metres under [ELEVATION], with slope descending, the pelvis rotates against the incline. [ST.C2.3.2] Reads one [REGULATORY_OBJECT] at \u00b19.15 metres under [AUTHORITY], applying direction=merge imposed, the route narrows toward convergence. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.3.1] Executes [ROTATE] on the incline at the [PELVIS] and [SPINE] under [ASYMMETRIC], with trunk vertical and right side loading earlier, referring to [ST.C2.3.1]. [RT.C2.3.2] Performs [MERGE] preparation at the [SPIN",
        "Performs [MERGE] preparation at the [SPINE] and [PELVIS] under [ALERT], with cursor pre-aligned toward the convergence line, referring to [ST.C2.3.2]. [C2.4] Merge Authority \u00b7 Arterial Convergence DATA PROVOCATION \u00b7 RAW DATA [DP.C2.4.1] source=Mapillary | type=feature | distance=\u00b110.40m | feature=object | value=\"object--traffic-cone\" [DP.C2.4.2] source=Mapillary | type=feature | distance=\u00b111.90m | feature=object | value=\"object--sign--advertisement\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.4.1] Places one [SOLID_MASS_OBJECT] knee-high at"
      ]
    },
    {
      "code": "ST.C2.4",
      "prefix": "ST",
      "pages": [
        21
      ],
      "occurrenceCount": 1,
      "contexts": [
        "t once. [KS.C2.6.2] Re-activates the situation set : [ST.C2.1] Initial Traction, [ST.C2.2] Sub-Surface Footing, [ST.C2.3] Driveway Tilt, [ST.C2.4] Merge Authority, [ST.C2.5] Node B Final Contact. [KS.C2.6.3] Re-activates the impulse set under [ACCELERATION], [COMPRESSION], [GLITCH], [FIXATION], [ALERT] and [CONSTANT], already declared in Phase 02. [KS.C2.6.4] Permits additional obstacles to enter the register during iteration without becoming new checkpoints. ACTIVE SITUATION CODES \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.6.1] Declares [SYSTEM]"
      ]
    },
    {
      "code": "ST.C2.4.1",
      "prefix": "ST",
      "pages": [
        18,
        19
      ],
      "occurrenceCount": 2,
      "contexts": [
        "type=feature | distance=\u00b111.90m | feature=object | value=\"object--sign--advertisement\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.4.1] Places one [SOLID_MASS_OBJECT] knee-high at \u00b110.40 metres under [MASS], the corridor channelled by the traffic-cone. [ST.C2.4.2] Reads one [SEMANTIC_OBJECT] at \u00b111.90 metres under [SEMANTIC], with gaze competing with the trajectory at eye level, reading and moving happen at the same time. BODY IMPULSE \u00b7 BODY SCORE",
        "[NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], producing [COMPRESSED_VOLUME] threaded through the cone corridor, referring to [ST.C2.4.1]. [RT.C2.4.2] Performs [FIXATE] with micro [ROTATE] at the [CERVICAL] spine and [EYE] under [FIXATION], producing [FIXATION_HOLD] that competes with forward motion, referring to [ST.C2.4.2]. [C2.5] Node B \u00b7 Final Contact DATA PROVOCATION \u00b7 RAW DATA [DP.C2.5.1] source=Mapillary | type=feature | distance=\u00b113.55m | feature=regulatory | value=\"regulatory--weight-limit--g1\" [DP.C2.5.2] source=Mapillary | type=fea"
      ]
    },
    {
      "code": "ST.C2.4.2",
      "prefix": "ST",
      "pages": [
        18,
        19
      ],
      "occurrenceCount": 2,
      "contexts": [
        "NTENCE [ST.C2.4.1] Places one [SOLID_MASS_OBJECT] knee-high at \u00b110.40 metres under [MASS], the corridor channelled by the traffic-cone. [ST.C2.4.2] Reads one [SEMANTIC_OBJECT] at \u00b111.90 metres under [SEMANTIC], with gaze competing with the trajectory at eye level, reading and moving happen at the same time. BODY IMPULSE \u00b7 BODY SCORE",
        "ro [ROTATE] at the [CERVICAL] spine and [EYE] under [FIXATION], producing [FIXATION_HOLD] that competes with forward motion, referring to [ST.C2.4.2]. [C2.5] Node B \u00b7 Final Contact DATA PROVOCATION \u00b7 RAW DATA [DP.C2.5.1] source=Mapillary | type=feature | distance=\u00b113.55m | feature=regulatory | value=\"regulatory--weight-limit--g1\" [DP.C2.5.2] source=Mapillary | type=feature | distance=\u00b114.00m | feature=bounds | value=\"Node_B terminal\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.5.1] Reads one [REGULATORY_OBJECT] at \u00b113.55 metres under [AUTHOR"
      ]
    },
    {
      "code": "ST.C2.5",
      "prefix": "ST",
      "pages": [
        21
      ],
      "occurrenceCount": 2,
      "contexts": [
        "Object Insertion SOURCE CODE \u00b7 REGISTER (KS) CODE SOURCE \u00b7 SENTENCE [KS.C2.6.1] Carries all active checkpoints from [ST.C2.1] through [ST.C2.5], forming the source register that iteration must traverse at least once. [KS.C2.6.2] Re-activates the situation set : [ST.C2.1] Initial Traction, [ST.C2.2] Sub-Surface Footing, [ST.C2.3] Driveway Tilt, [ST.C2.4] Merge Authority, [ST.C2.5] Node B Final Contact. [KS.C2.6.3] Re-activates the impulse set under [ACCELERATION], [COMPRESSION], [GLITCH], [FIXATION], [ALERT] and [CONSTANT], already declared in Phase 0",
        "tivates the situation set : [ST.C2.1] Initial Traction, [ST.C2.2] Sub-Surface Footing, [ST.C2.3] Driveway Tilt, [ST.C2.4] Merge Authority, [ST.C2.5] Node B Final Contact. [KS.C2.6.3] Re-activates the impulse set under [ACCELERATION], [COMPRESSION], [GLITCH], [FIXATION], [ALERT] and [CONSTANT], already declared in Phase 02. [KS.C2.6.4] Permits additional obstacles to enter the register during iteration without becoming new checkpoints. ACTIVE SITUATION CODES \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.6.1] Declares [SYSTEM] the grid from Node_A to Nod"
      ]
    },
    {
      "code": "ST.C2.5.1",
      "prefix": "ST",
      "pages": [
        19
      ],
      "occurrenceCount": 2,
      "contexts": [
        "Mapillary | type=feature | distance=\u00b114.00m | feature=bounds | value=\"Node_B terminal\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.5.1] Reads one [REGULATORY_OBJECT] at \u00b113.55 metres under [AUTHORITY], applying weight-limit declared, the field closes at the merge terminus. [ST.C2.5.2] Declares [SYSTEM] Node_B reached, with route complete and cursor arrived, the body carries residual load. [ST.C2.5.3] Reads one [LINEAR_OBJECT] held in contact with tension release pending, the utility line has not been let go. [ST.C2.5.4] Holds [FIXATION_HOL",
        "TE] with micro [ROTATE] at the [CERVICAL] spine and [EYE] under [FIXATION], producing [FIXATION_HOLD] on the regulatory sign, referring to [ST.C2.5.1]. [RT.C2.5.2] Performs weight-aware [HOLD] on the [LINEAR_OBJECT] at the [FINGER] and [PALM] under [CONSTANT], with tonus at threshold and load calibrated, referring to [ST.C2.5.2]. [RT.C2.5.3] Executes [DECELERATE] with [BRACE] at the [SPINE] and [CG] under [ALERT], with cursor arrived, referring to [ST.C2.5.3]. [RT.C2.5.4] Sustains [HOLD] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT],"
      ]
    },
    {
      "code": "ST.C2.5.2",
      "prefix": "ST",
      "pages": [
        19
      ],
      "occurrenceCount": 2,
      "contexts": [
        "Reads one [REGULATORY_OBJECT] at \u00b113.55 metres under [AUTHORITY], applying weight-limit declared, the field closes at the merge terminus. [ST.C2.5.2] Declares [SYSTEM] Node_B reached, with route complete and cursor arrived, the body carries residual load. [ST.C2.5.3] Reads one [LINEAR_OBJECT] held in contact with tension release pending, the utility line has not been let go. [ST.C2.5.4] Holds [FIXATION_HOLD] at the weight-limit sign, the terminal object is read even as the body stops. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.5.1] Execut",
        "aware [HOLD] on the [LINEAR_OBJECT] at the [FINGER] and [PALM] under [CONSTANT], with tonus at threshold and load calibrated, referring to [ST.C2.5.2]. [RT.C2.5.3] Executes [DECELERATE] with [BRACE] at the [SPINE] and [CG] under [ALERT], with cursor arrived, referring to [ST.C2.5.3]. [RT.C2.5.4] Sustains [HOLD] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], held in [MECHANICAL_GRIP] with weight-aware release still pending, referring to [ST.C2.5.4]. [PHASE 02] END STATE \u00b7 Score 02 At the end of the linear trajectory the body arrives at"
      ]
    },
    {
      "code": "ST.C2.5.3",
      "prefix": "ST",
      "pages": [
        19
      ],
      "occurrenceCount": 2,
      "contexts": [
        "e merge terminus. [ST.C2.5.2] Declares [SYSTEM] Node_B reached, with route complete and cursor arrived, the body carries residual load. [ST.C2.5.3] Reads one [LINEAR_OBJECT] held in contact with tension release pending, the utility line has not been let go. [ST.C2.5.4] Holds [FIXATION_HOLD] at the weight-limit sign, the terminal object is read even as the body stops. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.5.1] Executes [FIXATE] with micro [ROTATE] at the [CERVICAL] spine and [EYE] under [FIXATION], producing [FIXATION_HOLD] on the reg",
        "to [ST.C2.5.2]. [RT.C2.5.3] Executes [DECELERATE] with [BRACE] at the [SPINE] and [CG] under [ALERT], with cursor arrived, referring to [ST.C2.5.3]. [RT.C2.5.4] Sustains [HOLD] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], held in [MECHANICAL_GRIP] with weight-aware release still pending, referring to [ST.C2.5.4]. [PHASE 02] END STATE \u00b7 Score 02 At the end of the linear trajectory the body arrives at Node_B on the Score 02 axis. The following register carries residues that must be preserved into iteration. OUTPUT END STATE \u00b7 OE CO"
      ]
    },
    {
      "code": "ST.C2.5.4",
      "prefix": "ST",
      "pages": [
        19
      ],
      "occurrenceCount": 2,
      "contexts": [
        "esidual load. [ST.C2.5.3] Reads one [LINEAR_OBJECT] held in contact with tension release pending, the utility line has not been let go. [ST.C2.5.4] Holds [FIXATION_HOLD] at the weight-limit sign, the terminal object is read even as the body stops. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.5.1] Executes [FIXATE] with micro [ROTATE] at the [CERVICAL] spine and [EYE] under [FIXATION], producing [FIXATION_HOLD] on the regulatory sign, referring to [ST.C2.5.1]. [RT.C2.5.2] Performs weight-aware [HOLD] on the [LINEAR_OBJECT] at the [FINGER] and",
        "NGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], held in [MECHANICAL_GRIP] with weight-aware release still pending, referring to [ST.C2.5.4]. [PHASE 02] END STATE \u00b7 Score 02 At the end of the linear trajectory the body arrives at Node_B on the Score 02 axis. The following register carries residues that must be preserved into iteration. OUTPUT END STATE \u00b7 OE CODE END STATE \u00b7 SENTENCE [OE.C2.END.1] Holds contact with the [LINEAR_OBJECT] maintained, producing [MECHANICAL_GRIP] that is weight-aware. [OE.C2.END.2] Holds gaze in residual [FIXATION],"
      ]
    },
    {
      "code": "ST.C2.6.1",
      "prefix": "ST",
      "pages": [
        21
      ],
      "occurrenceCount": 1,
      "contexts": [
        "to enter the register during iteration without becoming new checkpoints. ACTIVE SITUATION CODES \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.6.1] Declares [SYSTEM] the grid from Node_A to Node_B complete and Node_C closed, with cursor in transit. [ST.C2.6.2] Reads one [LINEAR_OBJECT] across 14m, held in contact with full tension throughout iteration. [ST.C2.6.3] Reads two [REGULATORY_OBJECT] (merge, weight-limit) under [AUTHORITY], both authorities remain active per iteration. [ST.C2.6.4] Reads [SOLID_MASS_OBJECT] under [MASS], with narrowing patter"
      ]
    },
    {
      "code": "ST.C2.6.2",
      "prefix": "ST",
      "pages": [
        21
      ],
      "occurrenceCount": 1,
      "contexts": [
        "CODE SCORE \u00b7 SENTENCE [ST.C2.6.1] Declares [SYSTEM] the grid from Node_A to Node_B complete and Node_C closed, with cursor in transit. [ST.C2.6.2] Reads one [LINEAR_OBJECT] across 14m, held in contact with full tension throughout iteration. [ST.C2.6.3] Reads two [REGULATORY_OBJECT] (merge, weight-limit) under [AUTHORITY], both authorities remain active per iteration. [ST.C2.6.4] Reads [SOLID_MASS_OBJECT] under [MASS], with narrowing pattern repeated on every pass. [ST.C2.6.5] Reads one [TEXTURE_OBJECT] descending under [ELEVATION], with foot slip-pot"
      ]
    },
    {
      "code": "ST.C2.6.3",
      "prefix": "ST",
      "pages": [
        21
      ],
      "occurrenceCount": 1,
      "contexts": [
        "sed, with cursor in transit. [ST.C2.6.2] Reads one [LINEAR_OBJECT] across 14m, held in contact with full tension throughout iteration. [ST.C2.6.3] Reads two [REGULATORY_OBJECT] (merge, weight-limit) under [AUTHORITY], both authorities remain active per iteration. [ST.C2.6.4] Reads [SOLID_MASS_OBJECT] under [MASS], with narrowing pattern repeated on every pass. [ST.C2.6.5] Reads one [TEXTURE_OBJECT] descending under [ELEVATION], with foot slip-potential re-encountered. [ST.C2.6.6] Reads one [SEMANTIC_OBJECT] under [SEMANTIC], with gaze in fixation loo"
      ]
    },
    {
      "code": "ST.C2.6.4",
      "prefix": "ST",
      "pages": [
        21
      ],
      "occurrenceCount": 1,
      "contexts": [
        "ation. [ST.C2.6.3] Reads two [REGULATORY_OBJECT] (merge, weight-limit) under [AUTHORITY], both authorities remain active per iteration. [ST.C2.6.4] Reads [SOLID_MASS_OBJECT] under [MASS], with narrowing pattern repeated on every pass. [ST.C2.6.5] Reads one [TEXTURE_OBJECT] descending under [ELEVATION], with foot slip-potential re-encountered. [ST.C2.6.6] Reads one [SEMANTIC_OBJECT] under [SEMANTIC], with gaze in fixation loop. [ST.C2.6.7] Holds route complete in parallel with impulse unfinished under [PARADOX]. IMPULSE VARIATION \u00b7 BODY SCORE (VI) COD"
      ]
    },
    {
      "code": "ST.C2.6.5",
      "prefix": "ST",
      "pages": [
        21
      ],
      "occurrenceCount": 1,
      "contexts": [
        "orities remain active per iteration. [ST.C2.6.4] Reads [SOLID_MASS_OBJECT] under [MASS], with narrowing pattern repeated on every pass. [ST.C2.6.5] Reads one [TEXTURE_OBJECT] descending under [ELEVATION], with foot slip-potential re-encountered. [ST.C2.6.6] Reads one [SEMANTIC_OBJECT] under [SEMANTIC], with gaze in fixation loop. [ST.C2.6.7] Holds route complete in parallel with impulse unfinished under [PARADOX]. IMPULSE VARIATION \u00b7 BODY SCORE (VI) CODE SCORE \u00b7 SENTENCE [VI.C2.6.1] Executes [COMPRESS] at the [SHOULDER] and [ELBOW] within a range of"
      ]
    },
    {
      "code": "ST.C2.6.6",
      "prefix": "ST",
      "pages": [
        21
      ],
      "occurrenceCount": 1,
      "contexts": [
        "repeated on every pass. [ST.C2.6.5] Reads one [TEXTURE_OBJECT] descending under [ELEVATION], with foot slip-potential re-encountered. [ST.C2.6.6] Reads one [SEMANTIC_OBJECT] under [SEMANTIC], with gaze in fixation loop. [ST.C2.6.7] Holds route complete in parallel with impulse unfinished under [PARADOX]. IMPULSE VARIATION \u00b7 BODY SCORE (VI) CODE SCORE \u00b7 SENTENCE [VI.C2.6.1] Executes [COMPRESS] at the [SHOULDER] and [ELBOW] within a range of five to twelve centimetres under [COMPRESSION]. [VI.C2.6.2] Performs [MERGE] shift within a variable range at"
      ]
    },
    {
      "code": "ST.C2.6.7",
      "prefix": "ST",
      "pages": [
        21
      ],
      "occurrenceCount": 1,
      "contexts": [
        "VATION], with foot slip-potential re-encountered. [ST.C2.6.6] Reads one [SEMANTIC_OBJECT] under [SEMANTIC], with gaze in fixation loop. [ST.C2.6.7] Holds route complete in parallel with impulse unfinished under [PARADOX]. IMPULSE VARIATION \u00b7 BODY SCORE (VI) CODE SCORE \u00b7 SENTENCE [VI.C2.6.1] Executes [COMPRESS] at the [SHOULDER] and [ELBOW] within a range of five to twelve centimetres under [COMPRESSION]. [VI.C2.6.2] Performs [MERGE] shift within a variable range at the [PELVIS] and [SPINE] under [ASYMMETRIC]. [VI.C2.6.3] Executes micro [MERGE] at th"
      ]
    },
    {
      "code": "ST.C2.7.1",
      "prefix": "ST",
      "pages": [
        24
      ],
      "occurrenceCount": 1,
      "contexts": [
        "[PHASE 04] RESIDUAL \u00b7 Score 02 [C2.7] Residual State SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.7.1] Declares [SYSTEM] at Node_B, with Score 02 closed and iteration released. [ST.C2.7.2] Reads one [LINEAR_OBJECT] with tension slack (released) and contact-hold (residual), the [PELVIS] still carries the axis. [ST.C2.7.3] Holds body stopped in parallel with impulse residue still active under [PARADOX]. [ST.C2.7.4] Reads the [SOLID_MASS_OBJECT] and [GROUND_TEXTURE_OBJECT] set as residual, the stage is not tidi"
      ]
    },
    {
      "code": "ST.C2.7.2",
      "prefix": "ST",
      "pages": [
        24
      ],
      "occurrenceCount": 3,
      "contexts": [
        "SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.7.1] Declares [SYSTEM] at Node_B, with Score 02 closed and iteration released. [ST.C2.7.2] Reads one [LINEAR_OBJECT] with tension slack (released) and contact-hold (residual), the [PELVIS] still carries the axis. [ST.C2.7.3] Holds body stopped in parallel with impulse residue still active under [PARADOX]. [ST.C2.7.4] Reads the [SOLID_MASS_OBJECT] and [GROUND_TEXTURE_OBJECT] set as residual, the stage is not tidied per the locking rule. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.7.1]",
        "SENTENCE [RT.C2.7.1] Executes [RECOVER] partial at the [SHOULDER] and [CHEST] under [ALERT], producing [PARTIAL_RECOVERY], referring to [ST.C2.7.2]. [RT.C2.7.2] Performs micro [RELEASE] of [GRIP] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [ALERT], with grip releasing and contact residual, referring to [ST.C2.7.2]. [RT.C2.7.3] Holds small [HOLD] at the [GAZE] under [CONSTANT], sustaining residual [FIXATION_HOLD] with residual [MERGE_PULL] in the [PELVIS], referring to [ST.C2.7.3]. Score 02 does not conclude ; it thins. The field remains legi",
        "ELEASE] of [GRIP] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [ALERT], with grip releasing and contact residual, referring to [ST.C2.7.2]. [RT.C2.7.3] Holds small [HOLD] at the [GAZE] under [CONSTANT], sustaining residual [FIXATION_HOLD] with residual [MERGE_PULL] in the [PELVIS], referring to [ST.C2.7.3]. Score 02 does not conclude ; it thins. The field remains legible even when the body has withdrawn from it. TRAJECTORY PERFORMANCE Route notes, body sequence, and final performative reading. 1. Trajectory Overview This document contains two p"
      ]
    },
    {
      "code": "ST.C2.7.3",
      "prefix": "ST",
      "pages": [
        24
      ],
      "occurrenceCount": 2,
      "contexts": [
        ". [ST.C2.7.2] Reads one [LINEAR_OBJECT] with tension slack (released) and contact-hold (residual), the [PELVIS] still carries the axis. [ST.C2.7.3] Holds body stopped in parallel with impulse residue still active under [PARADOX]. [ST.C2.7.4] Reads the [SOLID_MASS_OBJECT] and [GROUND_TEXTURE_OBJECT] set as residual, the stage is not tidied per the locking rule. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.7.1] Executes [RECOVER] partial at the [SHOULDER] and [CHEST] under [ALERT], producing [PARTIAL_RECOVERY], referring to [ST.C2.7.2]. [RT.C",
        "small [HOLD] at the [GAZE] under [CONSTANT], sustaining residual [FIXATION_HOLD] with residual [MERGE_PULL] in the [PELVIS], referring to [ST.C2.7.3]. Score 02 does not conclude ; it thins. The field remains legible even when the body has withdrawn from it. TRAJECTORY PERFORMANCE Route notes, body sequence, and final performative reading. 1. Trajectory Overview This document contains two performative trajectories running in parallel but separately : Score 01 in the Lengkong / Palasari / Kosambi area (character : commercial aggression) , and Score 02 in the"
      ]
    },
    {
      "code": "ST.C2.7.4",
      "prefix": "ST",
      "pages": [
        24
      ],
      "occurrenceCount": 1,
      "contexts": [
        "al), the [PELVIS] still carries the axis. [ST.C2.7.3] Holds body stopped in parallel with impulse residue still active under [PARADOX]. [ST.C2.7.4] Reads the [SOLID_MASS_OBJECT] and [GROUND_TEXTURE_OBJECT] set as residual, the stage is not tidied per the locking rule. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.7.1] Executes [RECOVER] partial at the [SHOULDER] and [CHEST] under [ALERT], producing [PARTIAL_RECOVERY], referring to [ST.C2.7.2]. [RT.C2.7.2] Performs micro [RELEASE] of [GRIP] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] un"
      ]
    },
    {
      "code": "ST.EX",
      "prefix": "ST",
      "pages": [
        7
      ],
      "occurrenceCount": 2,
      "contexts": [
        "CODE SCORE \u00b7 SENTENCE [ST.EX] Places one [SOLID_MASS_OBJECT] knee-high at \u00b11.87 metres under [MASS], with the shoulder narrowing at initiation, producing [COMPRESSED_VOLUME]. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.EX] Executes [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], producing initial [COMPRESSED_VOLUME], referring to [ST.EX]. Reading order per row : the connective verb ( Places, Executes ) declares what",
        "ENTENCE [RT.EX] Executes [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], producing initial [COMPRESSED_VOLUME], referring to [ST.EX]. Reading order per row : the connective verb ( Places, Executes ) declares what the row does ; each bracketed uppercase token is a declared entity ; the row closes with a reference to the code it depends on. The performer receives the technical field and its lexical content in one sentence."
      ]
    },
    {
      "code": "TR.C2.6.1",
      "prefix": "TR",
      "pages": [
        22
      ],
      "occurrenceCount": 2,
      "contexts": [
        "] triggered by sub-surface pressure in parallel with authority pressure. ADDITIONAL OBSTACLES \u00b7 REGISTER (TR) CODE OBSTACLE \u00b7 SENTENCE [TR.C2.6.1] Introduces one [SOLID_MASS_OBJECT] vertical near the axis as utility-pressure amplifier. [TR.C2.6.2] Introduces one [SOLID_MASS_OBJECT] low near the trajectory, functioning as trash-can or traffic-cone register. [TR.C2.6.3] Introduces one [GROUND_TEXTURE_OBJECT] small under one foot, functioning as catch-basin, manhole, or driveway register. [TR.C2.6.4] Introduces one [REGULATORY_OBJECT] labelled MERGE or W",
        "MANTIC_OBJECT]. [RO.C2.6.4] Carries one [GROUND_TEXTURE_OBJECT] and one [TEXTURE_OBJECT]. [RO.C2.6.5] Permits additional obstacles from [TR.C2.6.1] through [TR.C2.6.7] but forbids reading them as new checkpoints. LOCKING RULE \u00b7 AP CODE RULE \u00b7 SENTENCE [AP.C2.6.1] Locks iteration count open, the director decides. [AP.C2.6.2] Locks iteration from closing until merge and weight-limit have been re-heard at least once each."
      ]
    },
    {
      "code": "TR.C2.6.2",
      "prefix": "TR",
      "pages": [
        22
      ],
      "occurrenceCount": 1,
      "contexts": [
        "TER (TR) CODE OBSTACLE \u00b7 SENTENCE [TR.C2.6.1] Introduces one [SOLID_MASS_OBJECT] vertical near the axis as utility-pressure amplifier. [TR.C2.6.2] Introduces one [SOLID_MASS_OBJECT] low near the trajectory, functioning as trash-can or traffic-cone register. [TR.C2.6.3] Introduces one [GROUND_TEXTURE_OBJECT] small under one foot, functioning as catch-basin, manhole, or driveway register. [TR.C2.6.4] Introduces one [REGULATORY_OBJECT] labelled MERGE or WEIGHT_LIMIT as arterial-sign translator. [TR.C2.6.5] Introduces one [SEMANTIC_OBJECT] with low visua"
      ]
    },
    {
      "code": "TR.C2.6.3",
      "prefix": "TR",
      "pages": [
        22
      ],
      "occurrenceCount": 1,
      "contexts": [
        "e amplifier. [TR.C2.6.2] Introduces one [SOLID_MASS_OBJECT] low near the trajectory, functioning as trash-can or traffic-cone register. [TR.C2.6.3] Introduces one [GROUND_TEXTURE_OBJECT] small under one foot, functioning as catch-basin, manhole, or driveway register. [TR.C2.6.4] Introduces one [REGULATORY_OBJECT] labelled MERGE or WEIGHT_LIMIT as arterial-sign translator. [TR.C2.6.5] Introduces one [SEMANTIC_OBJECT] with low visual noise at the grid edge. [TR.C2.6.6] Constrains additional obstacles from counting as new data, they thicken the already-ac"
      ]
    },
    {
      "code": "TR.C2.6.4",
      "prefix": "TR",
      "pages": [
        22
      ],
      "occurrenceCount": 1,
      "contexts": [
        "er. [TR.C2.6.3] Introduces one [GROUND_TEXTURE_OBJECT] small under one foot, functioning as catch-basin, manhole, or driveway register. [TR.C2.6.4] Introduces one [REGULATORY_OBJECT] labelled MERGE or WEIGHT_LIMIT as arterial-sign translator. [TR.C2.6.5] Introduces one [SEMANTIC_OBJECT] with low visual noise at the grid edge. [TR.C2.6.6] Constrains additional obstacles from counting as new data, they thicken the already-active codes. [TR.C2.6.7] Constrains obstacles once touched from being tidied, moved, or corrected. REPETITION OUTPUT \u00b7 OP CODE OUT"
      ]
    },
    {
      "code": "TR.C2.6.5",
      "prefix": "TR",
      "pages": [
        22
      ],
      "occurrenceCount": 1,
      "contexts": [
        "nhole, or driveway register. [TR.C2.6.4] Introduces one [REGULATORY_OBJECT] labelled MERGE or WEIGHT_LIMIT as arterial-sign translator. [TR.C2.6.5] Introduces one [SEMANTIC_OBJECT] with low visual noise at the grid edge. [TR.C2.6.6] Constrains additional obstacles from counting as new data, they thicken the already-active codes. [TR.C2.6.7] Constrains obstacles once touched from being tidied, moved, or corrected. REPETITION OUTPUT \u00b7 OP CODE OUTPUT \u00b7 SENTENCE [OP.C2.6.1] Holds posture narrow as residual, carrying [COMPRESSED_VOLUME] forward. [OP.C2.6"
      ]
    },
    {
      "code": "TR.C2.6.6",
      "prefix": "TR",
      "pages": [
        22
      ],
      "occurrenceCount": 1,
      "contexts": [
        "MERGE or WEIGHT_LIMIT as arterial-sign translator. [TR.C2.6.5] Introduces one [SEMANTIC_OBJECT] with low visual noise at the grid edge. [TR.C2.6.6] Constrains additional obstacles from counting as new data, they thicken the already-active codes. [TR.C2.6.7] Constrains obstacles once touched from being tidied, moved, or corrected. REPETITION OUTPUT \u00b7 OP CODE OUTPUT \u00b7 SENTENCE [OP.C2.6.1] Holds posture narrow as residual, carrying [COMPRESSED_VOLUME] forward. [OP.C2.6.2] Holds weight shifting as residual, carrying [ASYMMETRIC_STANCE] forward. [OP.C2.6"
      ]
    },
    {
      "code": "TR.C2.6.7",
      "prefix": "TR",
      "pages": [
        22
      ],
      "occurrenceCount": 2,
      "contexts": [
        "l noise at the grid edge. [TR.C2.6.6] Constrains additional obstacles from counting as new data, they thicken the already-active codes. [TR.C2.6.7] Constrains obstacles once touched from being tidied, moved, or corrected. REPETITION OUTPUT \u00b7 OP CODE OUTPUT \u00b7 SENTENCE [OP.C2.6.1] Holds posture narrow as residual, carrying [COMPRESSED_VOLUME] forward. [OP.C2.6.2] Holds weight shifting as residual, carrying [ASYMMETRIC_STANCE] forward. [OP.C2.6.3] Holds direction merge as residual, carrying residual [MERGE_PULL]. [OP.C2.6.4] Holds contact with the [LIN",
        ".C2.6.4] Carries one [GROUND_TEXTURE_OBJECT] and one [TEXTURE_OBJECT]. [RO.C2.6.5] Permits additional obstacles from [TR.C2.6.1] through [TR.C2.6.7] but forbids reading them as new checkpoints. LOCKING RULE \u00b7 AP CODE RULE \u00b7 SENTENCE [AP.C2.6.1] Locks iteration count open, the director decides. [AP.C2.6.2] Locks iteration from closing until merge and weight-limit have been re-heard at least once each."
      ]
    },
    {
      "code": "VI.C1.6.1",
      "prefix": "VI",
      "pages": [
        13
      ],
      "occurrenceCount": 1,
      "contexts": [
        "r [PARADOX], the coordinate has arrived but the movement has not yet closed. IMPULSE VARIATION \u00b7 BODY SCORE (VI) CODE SCORE \u00b7 SENTENCE [VI.C1.6.1] Executes [STEP] and [ACCELERATE] with a variable count from one to two steps at the [SOLE] and [KNEE] under [ACCELERATION], count varies but pattern is held. [VI.C1.6.2] Performs [GRIP] with isometric hold at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], sustaining [MECHANICAL_GRIP] across each pass. [VI.C1.6.3] Executes [COMPRESS] at the [SHOULDER] and [ELBOW] within a range of five to twe"
      ]
    },
    {
      "code": "VI.C1.6.2",
      "prefix": "VI",
      "pages": [
        13
      ],
      "occurrenceCount": 1,
      "contexts": [
        "[ACCELERATE] with a variable count from one to two steps at the [SOLE] and [KNEE] under [ACCELERATION], count varies but pattern is held. [VI.C1.6.2] Performs [GRIP] with isometric hold at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], sustaining [MECHANICAL_GRIP] across each pass. [VI.C1.6.3] Executes [COMPRESS] at the [SHOULDER] and [ELBOW] within a range of five to twelve centimetres under [COMPRESSION], amplitude may vary. [VI.C1.6.4] Performs [FIXATE] held for one to four seconds at the [CERVICAL] spine and [EYE] under [FIXATION], p"
      ]
    },
    {
      "code": "VI.C1.6.3",
      "prefix": "VI",
      "pages": [
        13
      ],
      "occurrenceCount": 1,
      "contexts": [
        "P] with isometric hold at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], sustaining [MECHANICAL_GRIP] across each pass. [VI.C1.6.3] Executes [COMPRESS] at the [SHOULDER] and [ELBOW] within a range of five to twelve centimetres under [COMPRESSION], amplitude may vary. [VI.C1.6.4] Performs [FIXATE] held for one to four seconds at the [CERVICAL] spine and [EYE] under [FIXATION], producing [FIXATION_HOLD] with variable duration. [VI.C1.6.5] Executes [TREMOR] at the [WRIST] and [SHOULDER] under [GLITCH] while [GRIP] and drive remain simultane"
      ]
    },
    {
      "code": "VI.C1.6.4",
      "prefix": "VI",
      "pages": [
        13
      ],
      "occurrenceCount": 1,
      "contexts": [
        "Executes [COMPRESS] at the [SHOULDER] and [ELBOW] within a range of five to twelve centimetres under [COMPRESSION], amplitude may vary. [VI.C1.6.4] Performs [FIXATE] held for one to four seconds at the [CERVICAL] spine and [EYE] under [FIXATION], producing [FIXATION_HOLD] with variable duration. [VI.C1.6.5] Executes [TREMOR] at the [WRIST] and [SHOULDER] under [GLITCH] while [GRIP] and drive remain simultaneously active, producing [TREMOR_LOOP]."
      ]
    },
    {
      "code": "VI.C1.6.5",
      "prefix": "VI",
      "pages": [
        13
      ],
      "occurrenceCount": 1,
      "contexts": [
        "IXATE] held for one to four seconds at the [CERVICAL] spine and [EYE] under [FIXATION], producing [FIXATION_HOLD] with variable duration. [VI.C1.6.5] Executes [TREMOR] at the [WRIST] and [SHOULDER] under [GLITCH] while [GRIP] and drive remain simultaneously active, producing [TREMOR_LOOP]."
      ]
    },
    {
      "code": "VI.C1.6.6",
      "prefix": "VI",
      "pages": [
        14
      ],
      "occurrenceCount": 1,
      "contexts": [
        "CODE SCORE \u00b7 SENTENCE [VI.C1.6.6] Executes [DISTRIBUTE] of uneven load across the [SOLE_L] and [SOLE_R] under [ASYMMETRIC], weight shifting continuously, producing [ASYMMETRIC_STANCE]. REPETITION PATTERN \u00b7 PU CODE PATTERN \u00b7 SENTENCE [PU.C1.6.1] Requires all active checkpoints to be re-executed at least once before Phase 04 begins. [PU.C1.6.2] Permits the loop count to remain open, the director decides the number of passes. [PU.C1.6.3] Con"
      ]
    },
    {
      "code": "VI.C2.6.1",
      "prefix": "VI",
      "pages": [
        21
      ],
      "occurrenceCount": 1,
      "contexts": [
        "7] Holds route complete in parallel with impulse unfinished under [PARADOX]. IMPULSE VARIATION \u00b7 BODY SCORE (VI) CODE SCORE \u00b7 SENTENCE [VI.C2.6.1] Executes [COMPRESS] at the [SHOULDER] and [ELBOW] within a range of five to twelve centimetres under [COMPRESSION]. [VI.C2.6.2] Performs [MERGE] shift within a variable range at the [PELVIS] and [SPINE] under [ASYMMETRIC]. [VI.C2.6.3] Executes micro [MERGE] at the [PELVIS] and [SPINE] under [ASYMMETRIC], the axis may pull slightly left but must not open a new route. [VI.C2.6.4] Performs weight-aware [HOLD]"
      ]
    },
    {
      "code": "VI.C2.6.2",
      "prefix": "VI",
      "pages": [
        21
      ],
      "occurrenceCount": 1,
      "contexts": [
        "ENTENCE [VI.C2.6.1] Executes [COMPRESS] at the [SHOULDER] and [ELBOW] within a range of five to twelve centimetres under [COMPRESSION]. [VI.C2.6.2] Performs [MERGE] shift within a variable range at the [PELVIS] and [SPINE] under [ASYMMETRIC]. [VI.C2.6.3] Executes micro [MERGE] at the [PELVIS] and [SPINE] under [ASYMMETRIC], the axis may pull slightly left but must not open a new route. [VI.C2.6.4] Performs weight-aware [HOLD] on the [LINEAR_OBJECT] at the [FINGER] and [PALM] under [CONSTANT], with tonus at threshold when the weight register is active."
      ]
    },
    {
      "code": "VI.C2.6.3",
      "prefix": "VI",
      "pages": [
        21
      ],
      "occurrenceCount": 1,
      "contexts": [
        "imetres under [COMPRESSION]. [VI.C2.6.2] Performs [MERGE] shift within a variable range at the [PELVIS] and [SPINE] under [ASYMMETRIC]. [VI.C2.6.3] Executes micro [MERGE] at the [PELVIS] and [SPINE] under [ASYMMETRIC], the axis may pull slightly left but must not open a new route. [VI.C2.6.4] Performs weight-aware [HOLD] on the [LINEAR_OBJECT] at the [FINGER] and [PALM] under [CONSTANT], with tonus at threshold when the weight register is active. [VI.C2.6.5] Executes [GRIP] at the [FINGER] under [CONSTANT], pressure may rise, fall, or hold but never ful"
      ]
    },
    {
      "code": "VI.C2.6.4",
      "prefix": "VI",
      "pages": [
        21
      ],
      "occurrenceCount": 1,
      "contexts": [
        "3] Executes micro [MERGE] at the [PELVIS] and [SPINE] under [ASYMMETRIC], the axis may pull slightly left but must not open a new route. [VI.C2.6.4] Performs weight-aware [HOLD] on the [LINEAR_OBJECT] at the [FINGER] and [PALM] under [CONSTANT], with tonus at threshold when the weight register is active. [VI.C2.6.5] Executes [GRIP] at the [FINGER] under [CONSTANT], pressure may rise, fall, or hold but never fully release. [VI.C2.6.6] Holds [HOLD] for one to four seconds under [FREEZE], producing [RIGID_POSTURE]. [VI.C2.6.7] Executes [SHIFT] with catch a"
      ]
    },
    {
      "code": "VI.C2.6.5",
      "prefix": "VI",
      "pages": [
        21
      ],
      "occurrenceCount": 1,
      "contexts": [
        "re [HOLD] on the [LINEAR_OBJECT] at the [FINGER] and [PALM] under [CONSTANT], with tonus at threshold when the weight register is active. [VI.C2.6.5] Executes [GRIP] at the [FINGER] under [CONSTANT], pressure may rise, fall, or hold but never fully release. [VI.C2.6.6] Holds [HOLD] for one to four seconds under [FREEZE], producing [RIGID_POSTURE]. [VI.C2.6.7] Executes [SHIFT] with catch and drift at the [WRIST] and [SHOULDER] on the [LINEAR_OBJECT] under [GLITCH], the material must not be corrected back to a clean line."
      ]
    },
    {
      "code": "VI.C2.6.6",
      "prefix": "VI",
      "pages": [
        21
      ],
      "occurrenceCount": 1,
      "contexts": [
        "ster is active. [VI.C2.6.5] Executes [GRIP] at the [FINGER] under [CONSTANT], pressure may rise, fall, or hold but never fully release. [VI.C2.6.6] Holds [HOLD] for one to four seconds under [FREEZE], producing [RIGID_POSTURE]. [VI.C2.6.7] Executes [SHIFT] with catch and drift at the [WRIST] and [SHOULDER] on the [LINEAR_OBJECT] under [GLITCH], the material must not be corrected back to a clean line."
      ]
    },
    {
      "code": "VI.C2.6.7",
      "prefix": "VI",
      "pages": [
        21
      ],
      "occurrenceCount": 1,
      "contexts": [
        "ise, fall, or hold but never fully release. [VI.C2.6.6] Holds [HOLD] for one to four seconds under [FREEZE], producing [RIGID_POSTURE]. [VI.C2.6.7] Executes [SHIFT] with catch and drift at the [WRIST] and [SHOULDER] on the [LINEAR_OBJECT] under [GLITCH], the material must not be corrected back to a clean line."
      ]
    },
    {
      "code": "VI.C2.6.8",
      "prefix": "VI",
      "pages": [
        22
      ],
      "occurrenceCount": 1,
      "contexts": [
        "CODE SCORE \u00b7 SENTENCE [VI.C2.6.8] Executes [TREMOR] at the [WRIST], [SHOULDER], [KNEE] and [SOLE] under [GLITCH], producing [TREMOR_LOOP] triggered by sub-surface pressure in parallel with authority pressure. ADDITIONAL OBSTACLES \u00b7 REGISTER (TR) CODE OBSTACLE \u00b7 SENTENCE [TR.C2.6.1] Introduces one [SOLID_MASS_OBJECT] vertical near the axis as utility-pressure amplifier. [TR.C2.6.2] Introduces one [SOLID_MASS_OBJECT] low near the trajectory,"
      ]
    }
  ],
  "occurrences": [
    {
      "code": "DP.C1.0.2",
      "prefix": "DP",
      "page": 6,
      "context": "ot rotation of the body. A Reading Example One row of each table, so the grammar of the score is visible in miniature. DATA PROVOCATION [DP.C1.0.2] source=Mapillary | type=feature | distance=\u00b11.87m | feature=object | value=\"object--traffic-cone\" SITUATION \u00b7 SPATIAL SCORE"
    },
    {
      "code": "ST.EX",
      "prefix": "ST",
      "page": 7,
      "context": "CODE SCORE \u00b7 SENTENCE [ST.EX] Places one [SOLID_MASS_OBJECT] knee-high at \u00b11.87 metres under [MASS], with the shoulder narrowing at initiation, producing [COMPRESSED_VOLUME]. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.EX] Executes [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], producing initial [COMPRESSED_VOLUME], referring to [ST.EX]. Reading order per row : the connective verb ( Places, Executes ) declares what"
    },
    {
      "code": "RT.EX",
      "prefix": "RT",
      "page": 7,
      "context": "nder [MASS], with the shoulder narrowing at initiation, producing [COMPRESSED_VOLUME]. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.EX] Executes [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], producing initial [COMPRESSED_VOLUME], referring to [ST.EX]. Reading order per row : the connective verb ( Places, Executes ) declares what the row does ; each bracketed uppercase token is a declared entity ; the row closes with a reference to the code it depends on. The performer receives the technical field and its lexical content in one sen"
    },
    {
      "code": "ST.EX",
      "prefix": "ST",
      "page": 7,
      "context": "ENTENCE [RT.EX] Executes [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], producing initial [COMPRESSED_VOLUME], referring to [ST.EX]. Reading order per row : the connective verb ( Places, Executes ) declares what the row does ; each bracketed uppercase token is a declared entity ; the row closes with a reference to the code it depends on. The performer receives the technical field and its lexical content in one sentence."
    },
    {
      "code": "DP.C1.0.0",
      "prefix": "DP",
      "page": 8,
      "context": "ode_C : iteration anchor \u00b7 opens only during Phase 03 (C1.6) [PHASE 1] DEPARTURE POINT [C1.0] Origin Anchor DATA PROVOCATION \u00b7 RAW DATA [DP.C1.0.0] source=Mapillary | type=bounds | lon=107.610\u2013107.625 | lat=-6.930 \u2194 -6.905 [DP.C1.0.1] source=Mapillary | type=feature | coord=107.610944,-6.909886 | feature=object | value=\"object--street-light\" [DP.C1.0.2] source=Mapillary | type=feature | distance=\u00b11.87m | feature=object | value=\"object--traffic-cone\" [DP.C1.0.3] source=Mapillary | type=feature | distance=\u00b13.55m | feature=construction | value=\"construction-"
    },
    {
      "code": "DP.C1.0.1",
      "prefix": "DP",
      "page": 8,
      "context": "[C1.0] Origin Anchor DATA PROVOCATION \u00b7 RAW DATA [DP.C1.0.0] source=Mapillary | type=bounds | lon=107.610\u2013107.625 | lat=-6.930 \u2194 -6.905 [DP.C1.0.1] source=Mapillary | type=feature | coord=107.610944,-6.909886 | feature=object | value=\"object--street-light\" [DP.C1.0.2] source=Mapillary | type=feature | distance=\u00b11.87m | feature=object | value=\"object--traffic-cone\" [DP.C1.0.3] source=Mapillary | type=feature | distance=\u00b13.55m | feature=construction | value=\"construction--flat--driveway\" [DP.C1.0.4] source=Mapillary | type=feature | distance=\u00b14.27m | featur"
    },
    {
      "code": "DP.C1.0.2",
      "prefix": "DP",
      "page": 8,
      "context": "-6.930 \u2194 -6.905 [DP.C1.0.1] source=Mapillary | type=feature | coord=107.610944,-6.909886 | feature=object | value=\"object--street-light\" [DP.C1.0.2] source=Mapillary | type=feature | distance=\u00b11.87m | feature=object | value=\"object--traffic-cone\" [DP.C1.0.3] source=Mapillary | type=feature | distance=\u00b13.55m | feature=construction | value=\"construction--flat--driveway\" [DP.C1.0.4] source=Mapillary | type=feature | distance=\u00b14.27m | feature=object | value=\"object--traffic-cone\" [DP.C1.0.5] source=Mapillary | type=feature | distance=\u00b14.51m | feature=object |"
    },
    {
      "code": "DP.C1.0.3",
      "prefix": "DP",
      "page": 8,
      "context": "lue=\"object--street-light\" [DP.C1.0.2] source=Mapillary | type=feature | distance=\u00b11.87m | feature=object | value=\"object--traffic-cone\" [DP.C1.0.3] source=Mapillary | type=feature | distance=\u00b13.55m | feature=construction | value=\"construction--flat--driveway\" [DP.C1.0.4] source=Mapillary | type=feature | distance=\u00b14.27m | feature=object | value=\"object--traffic-cone\" [DP.C1.0.5] source=Mapillary | type=feature | distance=\u00b14.51m | feature=object | value=\"object--traffic-cone\" [DP.C1.0.6] source=Mapillary | type=feature | distance=\u00b17.16m | feature=object |"
    },
    {
      "code": "DP.C1.0.4",
      "prefix": "DP",
      "page": 8,
      "context": "raffic-cone\" [DP.C1.0.3] source=Mapillary | type=feature | distance=\u00b13.55m | feature=construction | value=\"construction--flat--driveway\" [DP.C1.0.4] source=Mapillary | type=feature | distance=\u00b14.27m | feature=object | value=\"object--traffic-cone\" [DP.C1.0.5] source=Mapillary | type=feature | distance=\u00b14.51m | feature=object | value=\"object--traffic-cone\" [DP.C1.0.6] source=Mapillary | type=feature | distance=\u00b17.16m | feature=object | value=\"object--support--utility-pole\" [DP.C1.0.7] source=Mapillary | type=feature | distance=\u00b112.15m | feature=regulatory |"
    },
    {
      "code": "DP.C1.0.5",
      "prefix": "DP",
      "page": 8,
      "context": "struction--flat--driveway\" [DP.C1.0.4] source=Mapillary | type=feature | distance=\u00b14.27m | feature=object | value=\"object--traffic-cone\" [DP.C1.0.5] source=Mapillary | type=feature | distance=\u00b14.51m | feature=object | value=\"object--traffic-cone\" [DP.C1.0.6] source=Mapillary | type=feature | distance=\u00b17.16m | feature=object | value=\"object--support--utility-pole\" [DP.C1.0.7] source=Mapillary | type=feature | distance=\u00b112.15m | feature=regulatory | value=\"regulatory--no-right-turn--g1\" [DP.C1.0.8] source=Mapillary | type=feature | distance=\u00b112.45m | feature"
    },
    {
      "code": "DP.C1.0.6",
      "prefix": "DP",
      "page": 8,
      "context": "lue=\"object--traffic-cone\" [DP.C1.0.5] source=Mapillary | type=feature | distance=\u00b14.51m | feature=object | value=\"object--traffic-cone\" [DP.C1.0.6] source=Mapillary | type=feature | distance=\u00b17.16m | feature=object | value=\"object--support--utility-pole\" [DP.C1.0.7] source=Mapillary | type=feature | distance=\u00b112.15m | feature=regulatory | value=\"regulatory--no-right-turn--g1\" [DP.C1.0.8] source=Mapillary | type=feature | distance=\u00b112.45m | feature=object | value=\"object--sign--advertisement\" [DP.C1.0.9] source=Mapillary | type=feature | distance=\u00b112.49m |"
    },
    {
      "code": "DP.C1.0.7",
      "prefix": "DP",
      "page": 8,
      "context": "ct--traffic-cone\" [DP.C1.0.6] source=Mapillary | type=feature | distance=\u00b17.16m | feature=object | value=\"object--support--utility-pole\" [DP.C1.0.7] source=Mapillary | type=feature | distance=\u00b112.15m | feature=regulatory | value=\"regulatory--no-right-turn--g1\" [DP.C1.0.8] source=Mapillary | type=feature | distance=\u00b112.45m | feature=object | value=\"object--sign--advertisement\" [DP.C1.0.9] source=Mapillary | type=feature | distance=\u00b112.49m | feature=object | value=\"object--support--utility-pole\" [DP.C1.0.10] source=Mapillary | type=feature | distance=\u00b112.66m"
    },
    {
      "code": "DP.C1.0.8",
      "prefix": "DP",
      "page": 8,
      "context": "tility-pole\" [DP.C1.0.7] source=Mapillary | type=feature | distance=\u00b112.15m | feature=regulatory | value=\"regulatory--no-right-turn--g1\" [DP.C1.0.8] source=Mapillary | type=feature | distance=\u00b112.45m | feature=object | value=\"object--sign--advertisement\" [DP.C1.0.9] source=Mapillary | type=feature | distance=\u00b112.49m | feature=object | value=\"object--support--utility-pole\" [DP.C1.0.10] source=Mapillary | type=feature | distance=\u00b112.66m | feature=object | value=\"object--traffic-cone\" [DP.C1.0.11] source=Mapillary | type=feature | distance=\u00b113.94m | feature=o"
    },
    {
      "code": "DP.C1.0.9",
      "prefix": "DP",
      "page": 8,
      "context": "no-right-turn--g1\" [DP.C1.0.8] source=Mapillary | type=feature | distance=\u00b112.45m | feature=object | value=\"object--sign--advertisement\" [DP.C1.0.9] source=Mapillary | type=feature | distance=\u00b112.49m | feature=object | value=\"object--support--utility-pole\" [DP.C1.0.10] source=Mapillary | type=feature | distance=\u00b112.66m | feature=object | value=\"object--traffic-cone\" [DP.C1.0.11] source=Mapillary | type=feature | distance=\u00b113.94m | feature=object | value=\"object--support--utility-pole\" [DP.C1.0.12] source=Mapillary | type=feature | distance=\u00b114.31m | featur"
    },
    {
      "code": "DP.C1.0.10",
      "prefix": "DP",
      "page": 8,
      "context": "--advertisement\" [DP.C1.0.9] source=Mapillary | type=feature | distance=\u00b112.49m | feature=object | value=\"object--support--utility-pole\" [DP.C1.0.10] source=Mapillary | type=feature | distance=\u00b112.66m | feature=object | value=\"object--traffic-cone\" [DP.C1.0.11] source=Mapillary | type=feature | distance=\u00b113.94m | feature=object | value=\"object--support--utility-pole\" [DP.C1.0.12] source=Mapillary | type=feature | distance=\u00b114.31m | feature=object | value=\"object--manhole\" [DP.C1.0.13] source=Mapillary | type=feature | distance=\u00b114.80m | feature=object | va"
    },
    {
      "code": "DP.C1.0.11",
      "prefix": "DP",
      "page": 8,
      "context": "--support--utility-pole\" [DP.C1.0.10] source=Mapillary | type=feature | distance=\u00b112.66m | feature=object | value=\"object--traffic-cone\" [DP.C1.0.11] source=Mapillary | type=feature | distance=\u00b113.94m | feature=object | value=\"object--support--utility-pole\" [DP.C1.0.12] source=Mapillary | type=feature | distance=\u00b114.31m | feature=object | value=\"object--manhole\" [DP.C1.0.13] source=Mapillary | type=feature | distance=\u00b114.80m | feature=object | value=\"object--sign--advertisement\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.0] Declares a [SYSTE"
    },
    {
      "code": "DP.C1.0.12",
      "prefix": "DP",
      "page": 8,
      "context": "--traffic-cone\" [DP.C1.0.11] source=Mapillary | type=feature | distance=\u00b113.94m | feature=object | value=\"object--support--utility-pole\" [DP.C1.0.12] source=Mapillary | type=feature | distance=\u00b114.31m | feature=object | value=\"object--manhole\" [DP.C1.0.13] source=Mapillary | type=feature | distance=\u00b114.80m | feature=object | value=\"object--sign--advertisement\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.0] Declares a [SYSTEM] axis from Node_A to Node_B spanning 15m, opened on a single working axis. [ST.C1.0.1] Places one [LINEAR_OBJECT] as w"
    },
    {
      "code": "DP.C1.0.13",
      "prefix": "DP",
      "page": 8,
      "context": "bject--support--utility-pole\" [DP.C1.0.12] source=Mapillary | type=feature | distance=\u00b114.31m | feature=object | value=\"object--manhole\" [DP.C1.0.13] source=Mapillary | type=feature | distance=\u00b114.80m | feature=object | value=\"object--sign--advertisement\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.0] Declares a [SYSTEM] axis from Node_A to Node_B spanning 15m, opened on a single working axis. [ST.C1.0.1] Places one [LINEAR_OBJECT] as working line at floor level from Node_A to Node_B, spanning 15m, held in full contact with zero tension. [ST"
    },
    {
      "code": "ST.C1.0",
      "prefix": "ST",
      "page": 8,
      "context": "type=feature | distance=\u00b114.80m | feature=object | value=\"object--sign--advertisement\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.0] Declares a [SYSTEM] axis from Node_A to Node_B spanning 15m, opened on a single working axis. [ST.C1.0.1] Places one [LINEAR_OBJECT] as working line at floor level from Node_A to Node_B, spanning 15m, held in full contact with zero tension. [ST.C1.0.2] Places one [MARKER_OBJECT] at Node_A centre as origin anchor, triggered by the datum object\u2013street-light at coordinate 107.610944, -6.909886 [DP.C1.0.1]. [ST"
    },
    {
      "code": "ST.C1.0.1",
      "prefix": "ST",
      "page": 8,
      "context": "L SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.0] Declares a [SYSTEM] axis from Node_A to Node_B spanning 15m, opened on a single working axis. [ST.C1.0.1] Places one [LINEAR_OBJECT] as working line at floor level from Node_A to Node_B, spanning 15m, held in full contact with zero tension. [ST.C1.0.2] Places one [MARKER_OBJECT] at Node_A centre as origin anchor, triggered by the datum object\u2013street-light at coordinate 107.610944, -6.909886 [DP.C1.0.1]. [ST.C1.0.3] Distributes along the trajectory one [TEXTURE_OBJECT] at \u00b13.55 metres, four [SOLID_MASS_OBJECT] kn"
    },
    {
      "code": "ST.C1.0.2",
      "prefix": "ST",
      "page": 8,
      "context": "] Places one [LINEAR_OBJECT] as working line at floor level from Node_A to Node_B, spanning 15m, held in full contact with zero tension. [ST.C1.0.2] Places one [MARKER_OBJECT] at Node_A centre as origin anchor, triggered by the datum object\u2013street-light at coordinate 107.610944, -6.909886 [DP.C1.0.1]. [ST.C1.0.3] Distributes along the trajectory one [TEXTURE_OBJECT] at \u00b13.55 metres, four [SOLID_MASS_OBJECT] knee-high at \u00b11.87, \u00b14.27, \u00b14.51 and \u00b112.66 metres, three [SOLID_MASS_OBJECT] vertical at \u00b17.16, \u00b112.49 and \u00b113.94 metres, one [REGULATORY_OBJECT] at"
    },
    {
      "code": "DP.C1.0.1",
      "prefix": "DP",
      "page": 8,
      "context": "aces one [MARKER_OBJECT] at Node_A centre as origin anchor, triggered by the datum object\u2013street-light at coordinate 107.610944, -6.909886 [DP.C1.0.1]. [ST.C1.0.3] Distributes along the trajectory one [TEXTURE_OBJECT] at \u00b13.55 metres, four [SOLID_MASS_OBJECT] knee-high at \u00b11.87, \u00b14.27, \u00b14.51 and \u00b112.66 metres, three [SOLID_MASS_OBJECT] vertical at \u00b17.16, \u00b112.49 and \u00b113.94 metres, one [REGULATORY_OBJECT] at \u00b112.15 metres, two [SEMANTIC_OBJECT] at \u00b112.45 and \u00b114.80 metres, and one [GROUND_TEXTURE_OBJECT] at \u00b114.31 metres. [ST.C1.0.4] Reads one [REGULATORY_OB"
    },
    {
      "code": "ST.C1.0.3",
      "prefix": "ST",
      "page": 8,
      "context": "ER_OBJECT] at Node_A centre as origin anchor, triggered by the datum object\u2013street-light at coordinate 107.610944, -6.909886 [DP.C1.0.1]. [ST.C1.0.3] Distributes along the trajectory one [TEXTURE_OBJECT] at \u00b13.55 metres, four [SOLID_MASS_OBJECT] knee-high at \u00b11.87, \u00b14.27, \u00b14.51 and \u00b112.66 metres, three [SOLID_MASS_OBJECT] vertical at \u00b17.16, \u00b112.49 and \u00b113.94 metres, one [REGULATORY_OBJECT] at \u00b112.15 metres, two [SEMANTIC_OBJECT] at \u00b112.45 and \u00b114.80 metres, and one [GROUND_TEXTURE_OBJECT] at \u00b114.31 metres. [ST.C1.0.4] Reads one [REGULATORY_OBJECT] at \u00b112.1"
    },
    {
      "code": "ST.C1.0.4",
      "prefix": "ST",
      "page": 8,
      "context": "REGULATORY_OBJECT] at \u00b112.15 metres, two [SEMANTIC_OBJECT] at \u00b112.45 and \u00b114.80 metres, and one [GROUND_TEXTURE_OBJECT] at \u00b114.31 metres. [ST.C1.0.4] Reads one [REGULATORY_OBJECT] at \u00b112.15 metres on the edge under [AUTHORITY], applying direction=right closed, held with hip in latent turn and cursor forward, referring to [DP.C1.0.7]. [ST.C1.0.5] Reads one [TEXTURE_OBJECT] mid-trajectory in slope descending and one [GROUND_TEXTURE_OBJECT] at \u00b114.31 metres as metal cover under [ELEVATION], producing slip-potential in the foot and broken ground."
    },
    {
      "code": "DP.C1.0.7",
      "prefix": "DP",
      "page": 8,
      "context": "2.15 metres on the edge under [AUTHORITY], applying direction=right closed, held with hip in latent turn and cursor forward, referring to [DP.C1.0.7]. [ST.C1.0.5] Reads one [TEXTURE_OBJECT] mid-trajectory in slope descending and one [GROUND_TEXTURE_OBJECT] at \u00b114.31 metres as metal cover under [ELEVATION], producing slip-potential in the foot and broken ground."
    },
    {
      "code": "ST.C1.0.5",
      "prefix": "ST",
      "page": 8,
      "context": "the edge under [AUTHORITY], applying direction=right closed, held with hip in latent turn and cursor forward, referring to [DP.C1.0.7]. [ST.C1.0.5] Reads one [TEXTURE_OBJECT] mid-trajectory in slope descending and one [GROUND_TEXTURE_OBJECT] at \u00b114.31 metres as metal cover under [ELEVATION], producing slip-potential in the foot and broken ground."
    },
    {
      "code": "ST.C1.0.6",
      "prefix": "ST",
      "page": 9,
      "context": "CODE SCORE \u00b7 SENTENCE [ST.C1.0.6] Distributes seven [SOLID_MASS_OBJECT] along the line of approach from Node_A to Node_B under [MASS], with posture narrowing and elbows inward, producing [COMPRESSED_VOLUME]. [ST.C1.0.7] Reads one [SEMANTIC_OBJECT] at \u00b112.45 metres on the edge under [SEMANTIC], pulling gaze off axis with head in latent rotation, in conflict with the hand carrying the [LINEAR_OBJECT]. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 S"
    },
    {
      "code": "ST.C1.0.7",
      "prefix": "ST",
      "page": 9,
      "context": "along the line of approach from Node_A to Node_B under [MASS], with posture narrowing and elbows inward, producing [COMPRESSED_VOLUME]. [ST.C1.0.7] Reads one [SEMANTIC_OBJECT] at \u00b112.45 metres on the edge under [SEMANTIC], pulling gaze off axis with head in latent rotation, in conflict with the hand carrying the [LINEAR_OBJECT]. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C1.0.1] Executes [CENTER] on the centre of gravity toward the [SOLE] of both feet at the [LOWER_EXTREMITY] under [INJECTION], producing [STATIC_EQUILIBRIUM] at [ST.C1.0.2]."
    },
    {
      "code": "RT.C1.0.1",
      "prefix": "RT",
      "page": 9,
      "context": "with head in latent rotation, in conflict with the hand carrying the [LINEAR_OBJECT]. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C1.0.1] Executes [CENTER] on the centre of gravity toward the [SOLE] of both feet at the [LOWER_EXTREMITY] under [INJECTION], producing [STATIC_EQUILIBRIUM] at [ST.C1.0.2]. [RT.C1.0.2] Performs [GRIP] with isometric contraction along the [FINGER_FLEXOR] and [PALM] under [INJECTION], forming [MECHANICAL_GRIP] on the [LINEAR_OBJECT] at [ST.C1.0.1]. [RT.C1.0.3] Executes [HALT] on the forward drive at the [MOTOR_NERVE]"
    },
    {
      "code": "ST.C1.0.2",
      "prefix": "ST",
      "page": 9,
      "context": "ER] on the centre of gravity toward the [SOLE] of both feet at the [LOWER_EXTREMITY] under [INJECTION], producing [STATIC_EQUILIBRIUM] at [ST.C1.0.2]. [RT.C1.0.2] Performs [GRIP] with isometric contraction along the [FINGER_FLEXOR] and [PALM] under [INJECTION], forming [MECHANICAL_GRIP] on the [LINEAR_OBJECT] at [ST.C1.0.1]. [RT.C1.0.3] Executes [HALT] on the forward drive at the [MOTOR_NERVE] under [ALERT], holding tonus at threshold to produce [RIGID_POSTURE] locked toward [ST.C1.0.3]. [RT.C1.0.4] Initiates [PRE_ROTATE] at the [CERVICAL] spine under [AL"
    },
    {
      "code": "RT.C1.0.2",
      "prefix": "RT",
      "page": 9,
      "context": "tre of gravity toward the [SOLE] of both feet at the [LOWER_EXTREMITY] under [INJECTION], producing [STATIC_EQUILIBRIUM] at [ST.C1.0.2]. [RT.C1.0.2] Performs [GRIP] with isometric contraction along the [FINGER_FLEXOR] and [PALM] under [INJECTION], forming [MECHANICAL_GRIP] on the [LINEAR_OBJECT] at [ST.C1.0.1]. [RT.C1.0.3] Executes [HALT] on the forward drive at the [MOTOR_NERVE] under [ALERT], holding tonus at threshold to produce [RIGID_POSTURE] locked toward [ST.C1.0.3]. [RT.C1.0.4] Initiates [PRE_ROTATE] at the [CERVICAL] spine under [ALERT], holding"
    },
    {
      "code": "ST.C1.0.1",
      "prefix": "ST",
      "page": 9,
      "context": "IP] with isometric contraction along the [FINGER_FLEXOR] and [PALM] under [INJECTION], forming [MECHANICAL_GRIP] on the [LINEAR_OBJECT] at [ST.C1.0.1]. [RT.C1.0.3] Executes [HALT] on the forward drive at the [MOTOR_NERVE] under [ALERT], holding tonus at threshold to produce [RIGID_POSTURE] locked toward [ST.C1.0.3]. [RT.C1.0.4] Initiates [PRE_ROTATE] at the [CERVICAL] spine under [ALERT], holding [FIXATION_HOLD] on the visual referent at [ST.C1.0.7]. [RT.C1.0.5] Executes [TIGHTEN] across the [SHOULDER], [CLAVICLE], [STERNUM] and [SCAPULA] under [ALERT], p"
    },
    {
      "code": "RT.C1.0.3",
      "prefix": "RT",
      "page": 9,
      "context": "tric contraction along the [FINGER_FLEXOR] and [PALM] under [INJECTION], forming [MECHANICAL_GRIP] on the [LINEAR_OBJECT] at [ST.C1.0.1]. [RT.C1.0.3] Executes [HALT] on the forward drive at the [MOTOR_NERVE] under [ALERT], holding tonus at threshold to produce [RIGID_POSTURE] locked toward [ST.C1.0.3]. [RT.C1.0.4] Initiates [PRE_ROTATE] at the [CERVICAL] spine under [ALERT], holding [FIXATION_HOLD] on the visual referent at [ST.C1.0.7]. [RT.C1.0.5] Executes [TIGHTEN] across the [SHOULDER], [CLAVICLE], [STERNUM] and [SCAPULA] under [ALERT], producing [COMP"
    },
    {
      "code": "ST.C1.0.3",
      "prefix": "ST",
      "page": 9,
      "context": "ecutes [HALT] on the forward drive at the [MOTOR_NERVE] under [ALERT], holding tonus at threshold to produce [RIGID_POSTURE] locked toward [ST.C1.0.3]. [RT.C1.0.4] Initiates [PRE_ROTATE] at the [CERVICAL] spine under [ALERT], holding [FIXATION_HOLD] on the visual referent at [ST.C1.0.7]. [RT.C1.0.5] Executes [TIGHTEN] across the [SHOULDER], [CLAVICLE], [STERNUM] and [SCAPULA] under [ALERT], producing [COMPRESSED_VOLUME] that mirrors the corridor at [ST.C1.0.6]. [RT.C1.0.6] Executes [DISTRIBUTE] of uneven weight across the [SOLE_L] and [SOLE_R] under [ALER"
    },
    {
      "code": "RT.C1.0.4",
      "prefix": "RT",
      "page": 9,
      "context": "on the forward drive at the [MOTOR_NERVE] under [ALERT], holding tonus at threshold to produce [RIGID_POSTURE] locked toward [ST.C1.0.3]. [RT.C1.0.4] Initiates [PRE_ROTATE] at the [CERVICAL] spine under [ALERT], holding [FIXATION_HOLD] on the visual referent at [ST.C1.0.7]. [RT.C1.0.5] Executes [TIGHTEN] across the [SHOULDER], [CLAVICLE], [STERNUM] and [SCAPULA] under [ALERT], producing [COMPRESSED_VOLUME] that mirrors the corridor at [ST.C1.0.6]. [RT.C1.0.6] Executes [DISTRIBUTE] of uneven weight across the [SOLE_L] and [SOLE_R] under [ALERT], producing"
    },
    {
      "code": "ST.C1.0.7",
      "prefix": "ST",
      "page": 9,
      "context": "[ST.C1.0.3]. [RT.C1.0.4] Initiates [PRE_ROTATE] at the [CERVICAL] spine under [ALERT], holding [FIXATION_HOLD] on the visual referent at [ST.C1.0.7]. [RT.C1.0.5] Executes [TIGHTEN] across the [SHOULDER], [CLAVICLE], [STERNUM] and [SCAPULA] under [ALERT], producing [COMPRESSED_VOLUME] that mirrors the corridor at [ST.C1.0.6]. [RT.C1.0.6] Executes [DISTRIBUTE] of uneven weight across the [SOLE_L] and [SOLE_R] under [ALERT], producing [ASYMMETRIC_STANCE] that reads the elevation break at [ST.C1.0.5]. [RT.C1.0.7] Executes [REJECT] of right turn at the [HIP]"
    },
    {
      "code": "RT.C1.0.5",
      "prefix": "RT",
      "page": 9,
      "context": "[RT.C1.0.4] Initiates [PRE_ROTATE] at the [CERVICAL] spine under [ALERT], holding [FIXATION_HOLD] on the visual referent at [ST.C1.0.7]. [RT.C1.0.5] Executes [TIGHTEN] across the [SHOULDER], [CLAVICLE], [STERNUM] and [SCAPULA] under [ALERT], producing [COMPRESSED_VOLUME] that mirrors the corridor at [ST.C1.0.6]. [RT.C1.0.6] Executes [DISTRIBUTE] of uneven weight across the [SOLE_L] and [SOLE_R] under [ALERT], producing [ASYMMETRIC_STANCE] that reads the elevation break at [ST.C1.0.5]. [RT.C1.0.7] Executes [REJECT] of right turn at the [HIP] and [KNEE] und"
    },
    {
      "code": "ST.C1.0.6",
      "prefix": "ST",
      "page": 9,
      "context": "HTEN] across the [SHOULDER], [CLAVICLE], [STERNUM] and [SCAPULA] under [ALERT], producing [COMPRESSED_VOLUME] that mirrors the corridor at [ST.C1.0.6]. [RT.C1.0.6] Executes [DISTRIBUTE] of uneven weight across the [SOLE_L] and [SOLE_R] under [ALERT], producing [ASYMMETRIC_STANCE] that reads the elevation break at [ST.C1.0.5]. [RT.C1.0.7] Executes [REJECT] of right turn at the [HIP] and [KNEE] under [ALERT], locking the cursor to the [LINEAR_OBJECT] to produce [LOCKED_AXIS], referring to [ST.C1.0.4]. [PHASE 2] LINEAR TRAJECTORY [C1.1] Initial Traction DA"
    },
    {
      "code": "RT.C1.0.6",
      "prefix": "RT",
      "page": 9,
      "context": "he [SHOULDER], [CLAVICLE], [STERNUM] and [SCAPULA] under [ALERT], producing [COMPRESSED_VOLUME] that mirrors the corridor at [ST.C1.0.6]. [RT.C1.0.6] Executes [DISTRIBUTE] of uneven weight across the [SOLE_L] and [SOLE_R] under [ALERT], producing [ASYMMETRIC_STANCE] that reads the elevation break at [ST.C1.0.5]. [RT.C1.0.7] Executes [REJECT] of right turn at the [HIP] and [KNEE] under [ALERT], locking the cursor to the [LINEAR_OBJECT] to produce [LOCKED_AXIS], referring to [ST.C1.0.4]. [PHASE 2] LINEAR TRAJECTORY [C1.1] Initial Traction DATA PROVOCATION"
    },
    {
      "code": "ST.C1.0.5",
      "prefix": "ST",
      "page": 9,
      "context": "STRIBUTE] of uneven weight across the [SOLE_L] and [SOLE_R] under [ALERT], producing [ASYMMETRIC_STANCE] that reads the elevation break at [ST.C1.0.5]. [RT.C1.0.7] Executes [REJECT] of right turn at the [HIP] and [KNEE] under [ALERT], locking the cursor to the [LINEAR_OBJECT] to produce [LOCKED_AXIS], referring to [ST.C1.0.4]. [PHASE 2] LINEAR TRAJECTORY [C1.1] Initial Traction DATA PROVOCATION \u00b7 RAW DATA [DP.C1.1.1] source=Mapillary | type=feature | distance=\u00b10.0m | feature=object | value=\"object--support--utility-pole\" [DP.C1.1.2] source=Mapillary | t"
    },
    {
      "code": "RT.C1.0.7",
      "prefix": "RT",
      "page": 9,
      "context": "neven weight across the [SOLE_L] and [SOLE_R] under [ALERT], producing [ASYMMETRIC_STANCE] that reads the elevation break at [ST.C1.0.5]. [RT.C1.0.7] Executes [REJECT] of right turn at the [HIP] and [KNEE] under [ALERT], locking the cursor to the [LINEAR_OBJECT] to produce [LOCKED_AXIS], referring to [ST.C1.0.4]. [PHASE 2] LINEAR TRAJECTORY [C1.1] Initial Traction DATA PROVOCATION \u00b7 RAW DATA [DP.C1.1.1] source=Mapillary | type=feature | distance=\u00b10.0m | feature=object | value=\"object--support--utility-pole\" [DP.C1.1.2] source=Mapillary | type=feature |"
    },
    {
      "code": "ST.C1.0.4",
      "prefix": "ST",
      "page": 9,
      "context": "ECT] of right turn at the [HIP] and [KNEE] under [ALERT], locking the cursor to the [LINEAR_OBJECT] to produce [LOCKED_AXIS], referring to [ST.C1.0.4]. [PHASE 2] LINEAR TRAJECTORY [C1.1] Initial Traction DATA PROVOCATION \u00b7 RAW DATA [DP.C1.1.1] source=Mapillary | type=feature | distance=\u00b10.0m | feature=object | value=\"object--support--utility-pole\" [DP.C1.1.2] source=Mapillary | type=feature | distance=\u00b11.87m | feature=object | value=\"object--traffic-cone\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.1.1] Declares a [SYSTEM] cursor initiatio"
    },
    {
      "code": "DP.C1.1.1",
      "prefix": "DP",
      "page": 9,
      "context": "] to produce [LOCKED_AXIS], referring to [ST.C1.0.4]. [PHASE 2] LINEAR TRAJECTORY [C1.1] Initial Traction DATA PROVOCATION \u00b7 RAW DATA [DP.C1.1.1] source=Mapillary | type=feature | distance=\u00b10.0m | feature=object | value=\"object--support--utility-pole\" [DP.C1.1.2] source=Mapillary | type=feature | distance=\u00b11.87m | feature=object | value=\"object--traffic-cone\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.1.1] Declares a [SYSTEM] cursor initiation at Node_A, in grid transit with cursor forward, marking the start of Score 01. [ST.C1.1.2] Rea"
    },
    {
      "code": "DP.C1.1.2",
      "prefix": "DP",
      "page": 9,
      "context": "OCATION \u00b7 RAW DATA [DP.C1.1.1] source=Mapillary | type=feature | distance=\u00b10.0m | feature=object | value=\"object--support--utility-pole\" [DP.C1.1.2] source=Mapillary | type=feature | distance=\u00b11.87m | feature=object | value=\"object--traffic-cone\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.1.1] Declares a [SYSTEM] cursor initiation at Node_A, in grid transit with cursor forward, marking the start of Score 01. [ST.C1.1.2] Reads one [LINEAR_OBJECT] under [SPATIAL_MATRIX], held in contact with tension tightening, permitting no slack, with the f"
    },
    {
      "code": "ST.C1.1.1",
      "prefix": "ST",
      "page": 9,
      "context": "llary | type=feature | distance=\u00b11.87m | feature=object | value=\"object--traffic-cone\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.1.1] Declares a [SYSTEM] cursor initiation at Node_A, in grid transit with cursor forward, marking the start of Score 01. [ST.C1.1.2] Reads one [LINEAR_OBJECT] under [SPATIAL_MATRIX], held in contact with tension tightening, permitting no slack, with the first grip taken. [ST.C1.1.3] Places one [SOLID_MASS_OBJECT] knee-high at \u00b11.87 metres under [MASS], with the shoulder narrowing at initiation, producing [COMPRE"
    },
    {
      "code": "ST.C1.1.2",
      "prefix": "ST",
      "page": 9,
      "context": "NTENCE [ST.C1.1.1] Declares a [SYSTEM] cursor initiation at Node_A, in grid transit with cursor forward, marking the start of Score 01. [ST.C1.1.2] Reads one [LINEAR_OBJECT] under [SPATIAL_MATRIX], held in contact with tension tightening, permitting no slack, with the first grip taken. [ST.C1.1.3] Places one [SOLID_MASS_OBJECT] knee-high at \u00b11.87 metres under [MASS], with the shoulder narrowing at initiation, producing [COMPRESSED_VOLUME]. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C1.1.1] Executes [STEP] and [ACCELERATE] at the [SOLE] and [K"
    },
    {
      "code": "ST.C1.1.3",
      "prefix": "ST",
      "page": 9,
      "context": "eads one [LINEAR_OBJECT] under [SPATIAL_MATRIX], held in contact with tension tightening, permitting no slack, with the first grip taken. [ST.C1.1.3] Places one [SOLID_MASS_OBJECT] knee-high at \u00b11.87 metres under [MASS], with the shoulder narrowing at initiation, producing [COMPRESSED_VOLUME]. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C1.1.1] Executes [STEP] and [ACCELERATE] at the [SOLE] and [KNEE] under [ACCELERATION], with tonus active, referring to [ST.C1.1.1]."
    },
    {
      "code": "RT.C1.1.1",
      "prefix": "RT",
      "page": 9,
      "context": "nder [MASS], with the shoulder narrowing at initiation, producing [COMPRESSED_VOLUME]. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C1.1.1] Executes [STEP] and [ACCELERATE] at the [SOLE] and [KNEE] under [ACCELERATION], with tonus active, referring to [ST.C1.1.1]."
    },
    {
      "code": "ST.C1.1.1",
      "prefix": "ST",
      "page": 9,
      "context": "E \u00b7 SENTENCE [RT.C1.1.1] Executes [STEP] and [ACCELERATE] at the [SOLE] and [KNEE] under [ACCELERATION], with tonus active, referring to [ST.C1.1.1]."
    },
    {
      "code": "RT.C1.1.2",
      "prefix": "RT",
      "page": 10,
      "context": "CODE SCORE \u00b7 SENTENCE [RT.C1.1.2] Performs [GRIP] with isometric contraction at the [FINGER] and [PALM] under [COMPRESSION], forming [MECHANICAL_GRIP] on the [LINEAR_OBJECT], referring to [ST.C1.1.2]. [RT.C1.1.3] Executes [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], producing initial [COMPRESSED_VOLUME], referring to [ST.C1.1.3]. [C1.2] Compression Corridor DATA PROVOCATION \u00b7 RAW DATA [DP.C1.2.1] source=Mapillary | type=featu"
    },
    {
      "code": "ST.C1.1.2",
      "prefix": "ST",
      "page": 10,
      "context": "with isometric contraction at the [FINGER] and [PALM] under [COMPRESSION], forming [MECHANICAL_GRIP] on the [LINEAR_OBJECT], referring to [ST.C1.1.2]. [RT.C1.1.3] Executes [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], producing initial [COMPRESSED_VOLUME], referring to [ST.C1.1.3]. [C1.2] Compression Corridor DATA PROVOCATION \u00b7 RAW DATA [DP.C1.2.1] source=Mapillary | type=feature | distance=\u00b13.55m | feature=construction | value=\"construction--flat--driveway\" [DP.C1.2.2] source=Mapillary | type=feature | distance=\u00b14.27m | feature=object | va"
    },
    {
      "code": "RT.C1.1.3",
      "prefix": "RT",
      "page": 10,
      "context": "contraction at the [FINGER] and [PALM] under [COMPRESSION], forming [MECHANICAL_GRIP] on the [LINEAR_OBJECT], referring to [ST.C1.1.2]. [RT.C1.1.3] Executes [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], producing initial [COMPRESSED_VOLUME], referring to [ST.C1.1.3]. [C1.2] Compression Corridor DATA PROVOCATION \u00b7 RAW DATA [DP.C1.2.1] source=Mapillary | type=feature | distance=\u00b13.55m | feature=construction | value=\"construction--flat--driveway\" [DP.C1.2.2] source=Mapillary | type=feature | distance=\u00b14.27m | feature=object | value=\"object--t"
    },
    {
      "code": "ST.C1.1.3",
      "prefix": "ST",
      "page": 10,
      "context": "2]. [RT.C1.1.3] Executes [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], producing initial [COMPRESSED_VOLUME], referring to [ST.C1.1.3]. [C1.2] Compression Corridor DATA PROVOCATION \u00b7 RAW DATA [DP.C1.2.1] source=Mapillary | type=feature | distance=\u00b13.55m | feature=construction | value=\"construction--flat--driveway\" [DP.C1.2.2] source=Mapillary | type=feature | distance=\u00b14.27m | feature=object | value=\"object--traffic-cone\" [DP.C1.2.3] source=Mapillary | type=feature | distance=\u00b14.51m | feature=object | value=\"object--traffic-cone\" [DP.C1.2."
    },
    {
      "code": "DP.C1.2.1",
      "prefix": "DP",
      "page": 10,
      "context": "[COMPRESSION], producing initial [COMPRESSED_VOLUME], referring to [ST.C1.1.3]. [C1.2] Compression Corridor DATA PROVOCATION \u00b7 RAW DATA [DP.C1.2.1] source=Mapillary | type=feature | distance=\u00b13.55m | feature=construction | value=\"construction--flat--driveway\" [DP.C1.2.2] source=Mapillary | type=feature | distance=\u00b14.27m | feature=object | value=\"object--traffic-cone\" [DP.C1.2.3] source=Mapillary | type=feature | distance=\u00b14.51m | feature=object | value=\"object--traffic-cone\" [DP.C1.2.4] source=Mapillary | type=feature | distance=\u00b17.16m | feature=object |"
    },
    {
      "code": "DP.C1.2.2",
      "prefix": "DP",
      "page": 10,
      "context": "N \u00b7 RAW DATA [DP.C1.2.1] source=Mapillary | type=feature | distance=\u00b13.55m | feature=construction | value=\"construction--flat--driveway\" [DP.C1.2.2] source=Mapillary | type=feature | distance=\u00b14.27m | feature=object | value=\"object--traffic-cone\" [DP.C1.2.3] source=Mapillary | type=feature | distance=\u00b14.51m | feature=object | value=\"object--traffic-cone\" [DP.C1.2.4] source=Mapillary | type=feature | distance=\u00b17.16m | feature=object | value=\"object--support--utility-pole\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.2.1] Places one [TEXTURE_OB"
    },
    {
      "code": "DP.C1.2.3",
      "prefix": "DP",
      "page": 10,
      "context": "struction--flat--driveway\" [DP.C1.2.2] source=Mapillary | type=feature | distance=\u00b14.27m | feature=object | value=\"object--traffic-cone\" [DP.C1.2.3] source=Mapillary | type=feature | distance=\u00b14.51m | feature=object | value=\"object--traffic-cone\" [DP.C1.2.4] source=Mapillary | type=feature | distance=\u00b17.16m | feature=object | value=\"object--support--utility-pole\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.2.1] Places one [TEXTURE_OBJECT] at \u00b13.55 metres under [ELEVATION], with surface descending, the elevation drop begins here. [ST.C1.2.2]"
    },
    {
      "code": "DP.C1.2.4",
      "prefix": "DP",
      "page": 10,
      "context": "lue=\"object--traffic-cone\" [DP.C1.2.3] source=Mapillary | type=feature | distance=\u00b14.51m | feature=object | value=\"object--traffic-cone\" [DP.C1.2.4] source=Mapillary | type=feature | distance=\u00b17.16m | feature=object | value=\"object--support--utility-pole\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.2.1] Places one [TEXTURE_OBJECT] at \u00b13.55 metres under [ELEVATION], with surface descending, the elevation drop begins here. [ST.C1.2.2] Places two [SOLID_MASS_OBJECT] knee-high at \u00b14.27 and \u00b14.51 metres and one [SOLID_MASS_OBJECT] vertical at \u00b17."
    },
    {
      "code": "ST.C1.2.1",
      "prefix": "ST",
      "page": 10,
      "context": "ype=feature | distance=\u00b17.16m | feature=object | value=\"object--support--utility-pole\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.2.1] Places one [TEXTURE_OBJECT] at \u00b13.55 metres under [ELEVATION], with surface descending, the elevation drop begins here. [ST.C1.2.2] Places two [SOLID_MASS_OBJECT] knee-high at \u00b14.27 and \u00b14.51 metres and one [SOLID_MASS_OBJECT] vertical at \u00b17.16 metres under [MASS], forming a corridor of static obstacles. [ST.C1.2.3] Combines [ELEVATION] with [MASS], producing sustained [COMPRESSED_VOLUME] through the descen"
    },
    {
      "code": "ST.C1.2.2",
      "prefix": "ST",
      "page": 10,
      "context": "NCE [ST.C1.2.1] Places one [TEXTURE_OBJECT] at \u00b13.55 metres under [ELEVATION], with surface descending, the elevation drop begins here. [ST.C1.2.2] Places two [SOLID_MASS_OBJECT] knee-high at \u00b14.27 and \u00b14.51 metres and one [SOLID_MASS_OBJECT] vertical at \u00b17.16 metres under [MASS], forming a corridor of static obstacles. [ST.C1.2.3] Combines [ELEVATION] with [MASS], producing sustained [COMPRESSED_VOLUME] through the descending corridor. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C1.2.1] Executes elevation negotiation at the [SOLE] and [KNEE]"
    },
    {
      "code": "ST.C1.2.3",
      "prefix": "ST",
      "page": 10,
      "context": "igh at \u00b14.27 and \u00b14.51 metres and one [SOLID_MASS_OBJECT] vertical at \u00b17.16 metres under [MASS], forming a corridor of static obstacles. [ST.C1.2.3] Combines [ELEVATION] with [MASS], producing sustained [COMPRESSED_VOLUME] through the descending corridor. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C1.2.1] Executes elevation negotiation at the [SOLE] and [KNEE] under [ACCELERATION], with axis maintained through the drop, referring to [ST.C1.2.1]. [RT.C1.2.2] Sustains [NARROW] at the [SHOULDER] under [COMPRESSION], holding [COMPRESSED_VOLUME] t"
    },
    {
      "code": "RT.C1.2.1",
      "prefix": "RT",
      "page": 10,
      "context": "with [MASS], producing sustained [COMPRESSED_VOLUME] through the descending corridor. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C1.2.1] Executes elevation negotiation at the [SOLE] and [KNEE] under [ACCELERATION], with axis maintained through the drop, referring to [ST.C1.2.1]. [RT.C1.2.2] Sustains [NARROW] at the [SHOULDER] under [COMPRESSION], holding [COMPRESSED_VOLUME] through the corridor, referring to [ST.C1.2.2]. [RT.C1.2.3] Performs [GRIP] with isometric contraction at the [FINGER] and [PALM] under [CONSTANT], maintaining [MECHANICAL"
    },
    {
      "code": "ST.C1.2.1",
      "prefix": "ST",
      "page": 10,
      "context": "C1.2.1] Executes elevation negotiation at the [SOLE] and [KNEE] under [ACCELERATION], with axis maintained through the drop, referring to [ST.C1.2.1]. [RT.C1.2.2] Sustains [NARROW] at the [SHOULDER] under [COMPRESSION], holding [COMPRESSED_VOLUME] through the corridor, referring to [ST.C1.2.2]. [RT.C1.2.3] Performs [GRIP] with isometric contraction at the [FINGER] and [PALM] under [CONSTANT], maintaining [MECHANICAL_GRIP] on the [LINEAR_OBJECT] through the passage, referring to [ST.C1.2.3]. [C1.3] Authority Interruption DATA PROVOCATION \u00b7 RAW DATA [DP.C"
    },
    {
      "code": "RT.C1.2.2",
      "prefix": "RT",
      "page": 10,
      "context": "tes elevation negotiation at the [SOLE] and [KNEE] under [ACCELERATION], with axis maintained through the drop, referring to [ST.C1.2.1]. [RT.C1.2.2] Sustains [NARROW] at the [SHOULDER] under [COMPRESSION], holding [COMPRESSED_VOLUME] through the corridor, referring to [ST.C1.2.2]. [RT.C1.2.3] Performs [GRIP] with isometric contraction at the [FINGER] and [PALM] under [CONSTANT], maintaining [MECHANICAL_GRIP] on the [LINEAR_OBJECT] through the passage, referring to [ST.C1.2.3]. [C1.3] Authority Interruption DATA PROVOCATION \u00b7 RAW DATA [DP.C1.3.1] source="
    },
    {
      "code": "ST.C1.2.2",
      "prefix": "ST",
      "page": 10,
      "context": ".1]. [RT.C1.2.2] Sustains [NARROW] at the [SHOULDER] under [COMPRESSION], holding [COMPRESSED_VOLUME] through the corridor, referring to [ST.C1.2.2]. [RT.C1.2.3] Performs [GRIP] with isometric contraction at the [FINGER] and [PALM] under [CONSTANT], maintaining [MECHANICAL_GRIP] on the [LINEAR_OBJECT] through the passage, referring to [ST.C1.2.3]. [C1.3] Authority Interruption DATA PROVOCATION \u00b7 RAW DATA [DP.C1.3.1] source=Mapillary | type=feature | distance=\u00b112.15m | feature=regulatory | value=\"regulatory--no-right-turn--g1\" [DP.C1.3.2] source=Mapillar"
    },
    {
      "code": "RT.C1.2.3",
      "prefix": "RT",
      "page": 10,
      "context": ".2] Sustains [NARROW] at the [SHOULDER] under [COMPRESSION], holding [COMPRESSED_VOLUME] through the corridor, referring to [ST.C1.2.2]. [RT.C1.2.3] Performs [GRIP] with isometric contraction at the [FINGER] and [PALM] under [CONSTANT], maintaining [MECHANICAL_GRIP] on the [LINEAR_OBJECT] through the passage, referring to [ST.C1.2.3]. [C1.3] Authority Interruption DATA PROVOCATION \u00b7 RAW DATA [DP.C1.3.1] source=Mapillary | type=feature | distance=\u00b112.15m | feature=regulatory | value=\"regulatory--no-right-turn--g1\" [DP.C1.3.2] source=Mapillary | type=featu"
    },
    {
      "code": "ST.C1.2.3",
      "prefix": "ST",
      "page": 10,
      "context": "ction at the [FINGER] and [PALM] under [CONSTANT], maintaining [MECHANICAL_GRIP] on the [LINEAR_OBJECT] through the passage, referring to [ST.C1.2.3]. [C1.3] Authority Interruption DATA PROVOCATION \u00b7 RAW DATA [DP.C1.3.1] source=Mapillary | type=feature | distance=\u00b112.15m | feature=regulatory | value=\"regulatory--no-right-turn--g1\" [DP.C1.3.2] source=Mapillary | type=feature | distance=\u00b112.49m | feature=object | value=\"object--support--utility-pole\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.3.1] Reads one [REGULATORY_OBJECT] at \u00b112.15 metre"
    },
    {
      "code": "DP.C1.3.1",
      "prefix": "DP",
      "page": 10,
      "context": "L_GRIP] on the [LINEAR_OBJECT] through the passage, referring to [ST.C1.2.3]. [C1.3] Authority Interruption DATA PROVOCATION \u00b7 RAW DATA [DP.C1.3.1] source=Mapillary | type=feature | distance=\u00b112.15m | feature=regulatory | value=\"regulatory--no-right-turn--g1\" [DP.C1.3.2] source=Mapillary | type=feature | distance=\u00b112.49m | feature=object | value=\"object--support--utility-pole\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.3.1] Reads one [REGULATORY_OBJECT] at \u00b112.15 metres on the edge under [AUTHORITY], applying direction=right closed, held wi"
    },
    {
      "code": "DP.C1.3.2",
      "prefix": "DP",
      "page": 10,
      "context": "N \u00b7 RAW DATA [DP.C1.3.1] source=Mapillary | type=feature | distance=\u00b112.15m | feature=regulatory | value=\"regulatory--no-right-turn--g1\" [DP.C1.3.2] source=Mapillary | type=feature | distance=\u00b112.49m | feature=object | value=\"object--support--utility-pole\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.3.1] Reads one [REGULATORY_OBJECT] at \u00b112.15 metres on the edge under [AUTHORITY], applying direction=right closed, held with cursor forward and hip in latent turn. [ST.C1.3.2] Places one [SOLID_MASS_OBJECT] vertical at \u00b112.49 metres as adjacent a"
    },
    {
      "code": "ST.C1.3.1",
      "prefix": "ST",
      "page": 10,
      "context": "pe=feature | distance=\u00b112.49m | feature=object | value=\"object--support--utility-pole\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.3.1] Reads one [REGULATORY_OBJECT] at \u00b112.15 metres on the edge under [AUTHORITY], applying direction=right closed, held with cursor forward and hip in latent turn. [ST.C1.3.2] Places one [SOLID_MASS_OBJECT] vertical at \u00b112.49 metres as adjacent anchor to the regulatory line, the authority is legible without being physical. BODY IMPULSE \u00b7 BODY SCORE"
    },
    {
      "code": "ST.C1.3.2",
      "prefix": "ST",
      "page": 10,
      "context": "OBJECT] at \u00b112.15 metres on the edge under [AUTHORITY], applying direction=right closed, held with cursor forward and hip in latent turn. [ST.C1.3.2] Places one [SOLID_MASS_OBJECT] vertical at \u00b112.49 metres as adjacent anchor to the regulatory line, the authority is legible without being physical. BODY IMPULSE \u00b7 BODY SCORE"
    },
    {
      "code": "RT.C1.3.1",
      "prefix": "RT",
      "page": 11,
      "context": "CODE SCORE \u00b7 SENTENCE [RT.C1.3.1] Executes [TIGHTEN] against the pull of the interrupted route at the [SPINE] and [PELVIS] under [FREEZE], producing [LOCKED_AXIS], referring to [ST.C1.3.1]. [RT.C1.3.2] Holds latent [ROTATE] at the [HIP] under [FREEZE], sustaining [RIGID_POSTURE] that registers authority as torque, referring to [ST.C1.3.1]. [C1.4] Semantic Aggression DATA PROVOCATION \u00b7 RAW DATA [DP.C1.4.1] source=Mapillary | type=feature | di"
    },
    {
      "code": "ST.C1.3.1",
      "prefix": "ST",
      "page": 11,
      "context": "utes [TIGHTEN] against the pull of the interrupted route at the [SPINE] and [PELVIS] under [FREEZE], producing [LOCKED_AXIS], referring to [ST.C1.3.1]. [RT.C1.3.2] Holds latent [ROTATE] at the [HIP] under [FREEZE], sustaining [RIGID_POSTURE] that registers authority as torque, referring to [ST.C1.3.1]. [C1.4] Semantic Aggression DATA PROVOCATION \u00b7 RAW DATA [DP.C1.4.1] source=Mapillary | type=feature | distance=\u00b112.45m | feature=object | value=\"object--sign--advertisement\" [DP.C1.4.2] source=Mapillary | type=feature | distance=\u00b112.66m | feature=object | va"
    },
    {
      "code": "RT.C1.3.2",
      "prefix": "RT",
      "page": 11,
      "context": "against the pull of the interrupted route at the [SPINE] and [PELVIS] under [FREEZE], producing [LOCKED_AXIS], referring to [ST.C1.3.1]. [RT.C1.3.2] Holds latent [ROTATE] at the [HIP] under [FREEZE], sustaining [RIGID_POSTURE] that registers authority as torque, referring to [ST.C1.3.1]. [C1.4] Semantic Aggression DATA PROVOCATION \u00b7 RAW DATA [DP.C1.4.1] source=Mapillary | type=feature | distance=\u00b112.45m | feature=object | value=\"object--sign--advertisement\" [DP.C1.4.2] source=Mapillary | type=feature | distance=\u00b112.66m | feature=object | value=\"object--t"
    },
    {
      "code": "ST.C1.3.1",
      "prefix": "ST",
      "page": 11,
      "context": "RT.C1.3.2] Holds latent [ROTATE] at the [HIP] under [FREEZE], sustaining [RIGID_POSTURE] that registers authority as torque, referring to [ST.C1.3.1]. [C1.4] Semantic Aggression DATA PROVOCATION \u00b7 RAW DATA [DP.C1.4.1] source=Mapillary | type=feature | distance=\u00b112.45m | feature=object | value=\"object--sign--advertisement\" [DP.C1.4.2] source=Mapillary | type=feature | distance=\u00b112.66m | feature=object | value=\"object--traffic-cone\" [DP.C1.4.3] source=Mapillary | type=feature | distance=\u00b113.94m | feature=object | value=\"object--support--utility-pole\" [DP.C"
    },
    {
      "code": "DP.C1.4.1",
      "prefix": "DP",
      "page": 11,
      "context": "ng [RIGID_POSTURE] that registers authority as torque, referring to [ST.C1.3.1]. [C1.4] Semantic Aggression DATA PROVOCATION \u00b7 RAW DATA [DP.C1.4.1] source=Mapillary | type=feature | distance=\u00b112.45m | feature=object | value=\"object--sign--advertisement\" [DP.C1.4.2] source=Mapillary | type=feature | distance=\u00b112.66m | feature=object | value=\"object--traffic-cone\" [DP.C1.4.3] source=Mapillary | type=feature | distance=\u00b113.94m | feature=object | value=\"object--support--utility-pole\" [DP.C1.4.4] source=Mapillary | type=feature | distance=\u00b114.80m | feature=obj"
    },
    {
      "code": "DP.C1.4.2",
      "prefix": "DP",
      "page": 11,
      "context": "OCATION \u00b7 RAW DATA [DP.C1.4.1] source=Mapillary | type=feature | distance=\u00b112.45m | feature=object | value=\"object--sign--advertisement\" [DP.C1.4.2] source=Mapillary | type=feature | distance=\u00b112.66m | feature=object | value=\"object--traffic-cone\" [DP.C1.4.3] source=Mapillary | type=feature | distance=\u00b113.94m | feature=object | value=\"object--support--utility-pole\" [DP.C1.4.4] source=Mapillary | type=feature | distance=\u00b114.80m | feature=object | value=\"object--sign--advertisement\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.4.1] Reads two [S"
    },
    {
      "code": "DP.C1.4.3",
      "prefix": "DP",
      "page": 11,
      "context": "ect--sign--advertisement\" [DP.C1.4.2] source=Mapillary | type=feature | distance=\u00b112.66m | feature=object | value=\"object--traffic-cone\" [DP.C1.4.3] source=Mapillary | type=feature | distance=\u00b113.94m | feature=object | value=\"object--support--utility-pole\" [DP.C1.4.4] source=Mapillary | type=feature | distance=\u00b114.80m | feature=object | value=\"object--sign--advertisement\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.4.1] Reads two [SEMANTIC_OBJECT] at \u00b112.45 and \u00b114.80 metres under [SEMANTIC], with gaze off-axis and head in latent rotation, pu"
    },
    {
      "code": "DP.C1.4.4",
      "prefix": "DP",
      "page": 11,
      "context": "t--traffic-cone\" [DP.C1.4.3] source=Mapillary | type=feature | distance=\u00b113.94m | feature=object | value=\"object--support--utility-pole\" [DP.C1.4.4] source=Mapillary | type=feature | distance=\u00b114.80m | feature=object | value=\"object--sign--advertisement\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.4.1] Reads two [SEMANTIC_OBJECT] at \u00b112.45 and \u00b114.80 metres under [SEMANTIC], with gaze off-axis and head in latent rotation, pulling attention repeatedly off the working line. [ST.C1.4.2] Places one [SOLID_MASS_OBJECT] knee-high at \u00b112.66 metres a"
    },
    {
      "code": "ST.C1.4.1",
      "prefix": "ST",
      "page": 11,
      "context": "type=feature | distance=\u00b114.80m | feature=object | value=\"object--sign--advertisement\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.4.1] Reads two [SEMANTIC_OBJECT] at \u00b112.45 and \u00b114.80 metres under [SEMANTIC], with gaze off-axis and head in latent rotation, pulling attention repeatedly off the working line. [ST.C1.4.2] Places one [SOLID_MASS_OBJECT] knee-high at \u00b112.66 metres and one [SOLID_MASS_OBJECT] vertical at \u00b113.94 metres under [MASS], the corridor thinning between the two signs. [ST.C1.4.3] Sustains the hand carrying the [LINEAR_OBJE"
    },
    {
      "code": "ST.C1.4.2",
      "prefix": "ST",
      "page": 11,
      "context": "45 and \u00b114.80 metres under [SEMANTIC], with gaze off-axis and head in latent rotation, pulling attention repeatedly off the working line. [ST.C1.4.2] Places one [SOLID_MASS_OBJECT] knee-high at \u00b112.66 metres and one [SOLID_MASS_OBJECT] vertical at \u00b113.94 metres under [MASS], the corridor thinning between the two signs. [ST.C1.4.3] Sustains the hand carrying the [LINEAR_OBJECT] in parallel with the head turning toward each sign, reading and moving happen as one compression. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C1.4.1] Executes [FIXATE] wi"
    },
    {
      "code": "ST.C1.4.3",
      "prefix": "ST",
      "page": 11,
      "context": "e-high at \u00b112.66 metres and one [SOLID_MASS_OBJECT] vertical at \u00b113.94 metres under [MASS], the corridor thinning between the two signs. [ST.C1.4.3] Sustains the hand carrying the [LINEAR_OBJECT] in parallel with the head turning toward each sign, reading and moving happen as one compression. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C1.4.1] Executes [FIXATE] with micro [ROTATE] at the [CERVICAL] spine and [EYE] under [FIXATION], producing [FIXATION_HOLD] while the body still carries the line, referring to [ST.C1.4.1]. [RT.C1.4.2] Sustains ["
    },
    {
      "code": "RT.C1.4.1",
      "prefix": "RT",
      "page": 11,
      "context": "with the head turning toward each sign, reading and moving happen as one compression. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C1.4.1] Executes [FIXATE] with micro [ROTATE] at the [CERVICAL] spine and [EYE] under [FIXATION], producing [FIXATION_HOLD] while the body still carries the line, referring to [ST.C1.4.1]. [RT.C1.4.2] Sustains [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], holding [COMPRESSED_VOLUME] through the corridor, referring to [ST.C1.4.2]. [RT.C1.4.3] Maintains [GRIP] with isometric contraction at the [FINGER] a"
    },
    {
      "code": "ST.C1.4.1",
      "prefix": "ST",
      "page": 11,
      "context": "ROTATE] at the [CERVICAL] spine and [EYE] under [FIXATION], producing [FIXATION_HOLD] while the body still carries the line, referring to [ST.C1.4.1]. [RT.C1.4.2] Sustains [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], holding [COMPRESSED_VOLUME] through the corridor, referring to [ST.C1.4.2]. [RT.C1.4.3] Maintains [GRIP] with isometric contraction at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], sustaining [MECHANICAL_GRIP] throughout, referring to [ST.C1.4.3]. [C1.5] Node B \u00b7 Final Contact DATA PROVOCATION \u00b7 RAW DATA [D"
    },
    {
      "code": "RT.C1.4.2",
      "prefix": "RT",
      "page": 11,
      "context": "[CERVICAL] spine and [EYE] under [FIXATION], producing [FIXATION_HOLD] while the body still carries the line, referring to [ST.C1.4.1]. [RT.C1.4.2] Sustains [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], holding [COMPRESSED_VOLUME] through the corridor, referring to [ST.C1.4.2]. [RT.C1.4.3] Maintains [GRIP] with isometric contraction at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], sustaining [MECHANICAL_GRIP] throughout, referring to [ST.C1.4.3]. [C1.5] Node B \u00b7 Final Contact DATA PROVOCATION \u00b7 RAW DATA [DP.C1.5.1] sour"
    },
    {
      "code": "ST.C1.4.2",
      "prefix": "ST",
      "page": 11,
      "context": ".4.2] Sustains [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], holding [COMPRESSED_VOLUME] through the corridor, referring to [ST.C1.4.2]. [RT.C1.4.3] Maintains [GRIP] with isometric contraction at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], sustaining [MECHANICAL_GRIP] throughout, referring to [ST.C1.4.3]. [C1.5] Node B \u00b7 Final Contact DATA PROVOCATION \u00b7 RAW DATA [DP.C1.5.1] source=Mapillary | type=feature | distance=\u00b114.31m | feature=object | value=\"object--manhole\" [DP.C1.5.2] source=Mapillary | type=feature | distance"
    },
    {
      "code": "RT.C1.4.3",
      "prefix": "RT",
      "page": 11,
      "context": "s [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], holding [COMPRESSED_VOLUME] through the corridor, referring to [ST.C1.4.2]. [RT.C1.4.3] Maintains [GRIP] with isometric contraction at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], sustaining [MECHANICAL_GRIP] throughout, referring to [ST.C1.4.3]. [C1.5] Node B \u00b7 Final Contact DATA PROVOCATION \u00b7 RAW DATA [DP.C1.5.1] source=Mapillary | type=feature | distance=\u00b114.31m | feature=object | value=\"object--manhole\" [DP.C1.5.2] source=Mapillary | type=feature | distance=\u00b115.00m | fea"
    },
    {
      "code": "ST.C1.4.3",
      "prefix": "ST",
      "page": 11,
      "context": "ric contraction at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], sustaining [MECHANICAL_GRIP] throughout, referring to [ST.C1.4.3]. [C1.5] Node B \u00b7 Final Contact DATA PROVOCATION \u00b7 RAW DATA [DP.C1.5.1] source=Mapillary | type=feature | distance=\u00b114.31m | feature=object | value=\"object--manhole\" [DP.C1.5.2] source=Mapillary | type=feature | distance=\u00b115.00m | feature=bounds | value=\"Node_B terminal\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.5.1] Places one [GROUND_TEXTURE_OBJECT] at \u00b114.31 metres as metal cover under [EL"
    },
    {
      "code": "DP.C1.5.1",
      "prefix": "DP",
      "page": 11,
      "context": "CONSTANT], sustaining [MECHANICAL_GRIP] throughout, referring to [ST.C1.4.3]. [C1.5] Node B \u00b7 Final Contact DATA PROVOCATION \u00b7 RAW DATA [DP.C1.5.1] source=Mapillary | type=feature | distance=\u00b114.31m | feature=object | value=\"object--manhole\" [DP.C1.5.2] source=Mapillary | type=feature | distance=\u00b115.00m | feature=bounds | value=\"Node_B terminal\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.5.1] Places one [GROUND_TEXTURE_OBJECT] at \u00b114.31 metres as metal cover under [ELEVATION], receiving the terminal step with foot at slip-potential and grou"
    },
    {
      "code": "DP.C1.5.2",
      "prefix": "DP",
      "page": 11,
      "context": "t DATA PROVOCATION \u00b7 RAW DATA [DP.C1.5.1] source=Mapillary | type=feature | distance=\u00b114.31m | feature=object | value=\"object--manhole\" [DP.C1.5.2] source=Mapillary | type=feature | distance=\u00b115.00m | feature=bounds | value=\"Node_B terminal\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.5.1] Places one [GROUND_TEXTURE_OBJECT] at \u00b114.31 metres as metal cover under [ELEVATION], receiving the terminal step with foot at slip-potential and ground hollow. [ST.C1.5.2] Declares [SYSTEM] Node_B reached, with route complete and cursor arrived, closing"
    },
    {
      "code": "ST.C1.5.1",
      "prefix": "ST",
      "page": 11,
      "context": "Mapillary | type=feature | distance=\u00b115.00m | feature=bounds | value=\"Node_B terminal\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.5.1] Places one [GROUND_TEXTURE_OBJECT] at \u00b114.31 metres as metal cover under [ELEVATION], receiving the terminal step with foot at slip-potential and ground hollow. [ST.C1.5.2] Declares [SYSTEM] Node_B reached, with route complete and cursor arrived, closing Phase 02. [ST.C1.5.3] Reads one [LINEAR_OBJECT] held in contact maintained with tension release pending, the line has not yet been let go."
    },
    {
      "code": "ST.C1.5.2",
      "prefix": "ST",
      "page": 11,
      "context": "URE_OBJECT] at \u00b114.31 metres as metal cover under [ELEVATION], receiving the terminal step with foot at slip-potential and ground hollow. [ST.C1.5.2] Declares [SYSTEM] Node_B reached, with route complete and cursor arrived, closing Phase 02. [ST.C1.5.3] Reads one [LINEAR_OBJECT] held in contact maintained with tension release pending, the line has not yet been let go."
    },
    {
      "code": "ST.C1.5.3",
      "prefix": "ST",
      "page": 11,
      "context": "ip-potential and ground hollow. [ST.C1.5.2] Declares [SYSTEM] Node_B reached, with route complete and cursor arrived, closing Phase 02. [ST.C1.5.3] Reads one [LINEAR_OBJECT] held in contact maintained with tension release pending, the line has not yet been let go."
    },
    {
      "code": "RT.C1.5.1",
      "prefix": "RT",
      "page": 12,
      "context": "BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C1.5.1] Executes [PLANT] with micro [DROP] at the [SOLE], [KNEE] and [HIP] under [ASYMMETRIC], producing [SLIP_POTENTIAL] registered as loaded weight on the sole edge, referring to [ST.C1.5.1]. [RT.C1.5.2] Performs [DECELERATE] with [BRACE] at the [SPINE] and [CG] under [ALERT], with cursor arrived and tonus at threshold, referring to [ST.C1.5.2]. [RT.C1.5.3] Sustains [GRIP] at the [FINGER] and [PALM] on the [LINEAR"
    },
    {
      "code": "ST.C1.5.1",
      "prefix": "ST",
      "page": 12,
      "context": "at the [SOLE], [KNEE] and [HIP] under [ASYMMETRIC], producing [SLIP_POTENTIAL] registered as loaded weight on the sole edge, referring to [ST.C1.5.1]. [RT.C1.5.2] Performs [DECELERATE] with [BRACE] at the [SPINE] and [CG] under [ALERT], with cursor arrived and tonus at threshold, referring to [ST.C1.5.2]. [RT.C1.5.3] Sustains [GRIP] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], held in [MECHANICAL_GRIP] with release pending, referring to [ST.C1.5.3]. [PHASE 02] END STATE At the end of the linear trajectory the body arrives at Node_B."
    },
    {
      "code": "RT.C1.5.2",
      "prefix": "RT",
      "page": 12,
      "context": "[KNEE] and [HIP] under [ASYMMETRIC], producing [SLIP_POTENTIAL] registered as loaded weight on the sole edge, referring to [ST.C1.5.1]. [RT.C1.5.2] Performs [DECELERATE] with [BRACE] at the [SPINE] and [CG] under [ALERT], with cursor arrived and tonus at threshold, referring to [ST.C1.5.2]. [RT.C1.5.3] Sustains [GRIP] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], held in [MECHANICAL_GRIP] with release pending, referring to [ST.C1.5.3]. [PHASE 02] END STATE At the end of the linear trajectory the body arrives at Node_B. The following"
    },
    {
      "code": "ST.C1.5.2",
      "prefix": "ST",
      "page": 12,
      "context": "1.5.2] Performs [DECELERATE] with [BRACE] at the [SPINE] and [CG] under [ALERT], with cursor arrived and tonus at threshold, referring to [ST.C1.5.2]. [RT.C1.5.3] Sustains [GRIP] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], held in [MECHANICAL_GRIP] with release pending, referring to [ST.C1.5.3]. [PHASE 02] END STATE At the end of the linear trajectory the body arrives at Node_B. The following register carries the residues that must be preserved into Phase 03 iteration. OUTPUT END STATE \u00b7 OE CODE END STATE \u00b7 SENTENCE [OE.C1.END.1]"
    },
    {
      "code": "RT.C1.5.3",
      "prefix": "RT",
      "page": 12,
      "context": "ms [DECELERATE] with [BRACE] at the [SPINE] and [CG] under [ALERT], with cursor arrived and tonus at threshold, referring to [ST.C1.5.2]. [RT.C1.5.3] Sustains [GRIP] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], held in [MECHANICAL_GRIP] with release pending, referring to [ST.C1.5.3]. [PHASE 02] END STATE At the end of the linear trajectory the body arrives at Node_B. The following register carries the residues that must be preserved into Phase 03 iteration. OUTPUT END STATE \u00b7 OE CODE END STATE \u00b7 SENTENCE [OE.C1.END.1] Holds contac"
    },
    {
      "code": "ST.C1.5.3",
      "prefix": "ST",
      "page": 12,
      "context": "ns [GRIP] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], held in [MECHANICAL_GRIP] with release pending, referring to [ST.C1.5.3]. [PHASE 02] END STATE At the end of the linear trajectory the body arrives at Node_B. The following register carries the residues that must be preserved into Phase 03 iteration. OUTPUT END STATE \u00b7 OE CODE END STATE \u00b7 SENTENCE [OE.C1.END.1] Holds contact with the [LINEAR_OBJECT] maintained, producing [MECHANICAL_GRIP] that has not yet been released. [OE.C1.END.2] Holds gaze in residual [FIXATION], with hea"
    },
    {
      "code": "OE.C1.END.1",
      "prefix": "OE",
      "page": 12,
      "context": "ollowing register carries the residues that must be preserved into Phase 03 iteration. OUTPUT END STATE \u00b7 OE CODE END STATE \u00b7 SENTENCE [OE.C1.END.1] Holds contact with the [LINEAR_OBJECT] maintained, producing [MECHANICAL_GRIP] that has not yet been released. [OE.C1.END.2] Holds gaze in residual [FIXATION], with head returned to neutral but a micro-delay remaining in the [CERVICAL] spine. [OE.C1.END.3] Holds posture narrow as residual, producing [COMPRESSED_VOLUME] not fully released. [OE.C1.END.4] Declares [SYSTEM] the score awaiting its next command,"
    },
    {
      "code": "OE.C1.END.2",
      "prefix": "OE",
      "page": 12,
      "context": "\u00b7 SENTENCE [OE.C1.END.1] Holds contact with the [LINEAR_OBJECT] maintained, producing [MECHANICAL_GRIP] that has not yet been released. [OE.C1.END.2] Holds gaze in residual [FIXATION], with head returned to neutral but a micro-delay remaining in the [CERVICAL] spine. [OE.C1.END.3] Holds posture narrow as residual, producing [COMPRESSED_VOLUME] not fully released. [OE.C1.END.4] Declares [SYSTEM] the score awaiting its next command, opening either [ITERATION_BUFFER] or [NODE_TRANSFER]. BODY IMPULSE \u00b7 END STATE CODE SCORE \u00b7 SENTENCE [RT.C1.END.1] Sustain"
    },
    {
      "code": "OE.C1.END.3",
      "prefix": "OE",
      "page": 12,
      "context": "ed. [OE.C1.END.2] Holds gaze in residual [FIXATION], with head returned to neutral but a micro-delay remaining in the [CERVICAL] spine. [OE.C1.END.3] Holds posture narrow as residual, producing [COMPRESSED_VOLUME] not fully released. [OE.C1.END.4] Declares [SYSTEM] the score awaiting its next command, opening either [ITERATION_BUFFER] or [NODE_TRANSFER]. BODY IMPULSE \u00b7 END STATE CODE SCORE \u00b7 SENTENCE [RT.C1.END.1] Sustains [HOLD] on the [LINEAR_OBJECT] at the [FINGER] and [PALM] under [CONSTANT], held in [MECHANICAL_GRIP] with release pending. [RT.C1.E"
    },
    {
      "code": "OE.C1.END.4",
      "prefix": "OE",
      "page": 12,
      "context": "ay remaining in the [CERVICAL] spine. [OE.C1.END.3] Holds posture narrow as residual, producing [COMPRESSED_VOLUME] not fully released. [OE.C1.END.4] Declares [SYSTEM] the score awaiting its next command, opening either [ITERATION_BUFFER] or [NODE_TRANSFER]. BODY IMPULSE \u00b7 END STATE CODE SCORE \u00b7 SENTENCE [RT.C1.END.1] Sustains [HOLD] on the [LINEAR_OBJECT] at the [FINGER] and [PALM] under [CONSTANT], held in [MECHANICAL_GRIP] with release pending. [RT.C1.END.2] Performs micro [RECOVER] at the [CERVICAL] spine under [ALERT], producing residual [FIXATION"
    },
    {
      "code": "RT.C1.END.1",
      "prefix": "RT",
      "page": 12,
      "context": "score awaiting its next command, opening either [ITERATION_BUFFER] or [NODE_TRANSFER]. BODY IMPULSE \u00b7 END STATE CODE SCORE \u00b7 SENTENCE [RT.C1.END.1] Sustains [HOLD] on the [LINEAR_OBJECT] at the [FINGER] and [PALM] under [CONSTANT], held in [MECHANICAL_GRIP] with release pending. [RT.C1.END.2] Performs micro [RECOVER] at the [CERVICAL] spine under [ALERT], producing residual [FIXATION_HOLD] in the gaze. [RT.C1.END.3] Executes [RECOVER] partial at the [SHOULDER] and [CHEST] under [ALERT], sustaining residual [COMPRESSED_VOLUME]. [RT.C1.END.4] Awaits the"
    },
    {
      "code": "RT.C1.END.2",
      "prefix": "RT",
      "page": 12,
      "context": "D.1] Sustains [HOLD] on the [LINEAR_OBJECT] at the [FINGER] and [PALM] under [CONSTANT], held in [MECHANICAL_GRIP] with release pending. [RT.C1.END.2] Performs micro [RECOVER] at the [CERVICAL] spine under [ALERT], producing residual [FIXATION_HOLD] in the gaze. [RT.C1.END.3] Executes [RECOVER] partial at the [SHOULDER] and [CHEST] under [ALERT], sustaining residual [COMPRESSED_VOLUME]. [RT.C1.END.4] Awaits the next instruction at the system as a whole, opening [ITERATION_BUFFER] or [NODE_TRANSFER]."
    },
    {
      "code": "RT.C1.END.3",
      "prefix": "RT",
      "page": 12,
      "context": "pending. [RT.C1.END.2] Performs micro [RECOVER] at the [CERVICAL] spine under [ALERT], producing residual [FIXATION_HOLD] in the gaze. [RT.C1.END.3] Executes [RECOVER] partial at the [SHOULDER] and [CHEST] under [ALERT], sustaining residual [COMPRESSED_VOLUME]. [RT.C1.END.4] Awaits the next instruction at the system as a whole, opening [ITERATION_BUFFER] or [NODE_TRANSFER]."
    },
    {
      "code": "RT.C1.END.4",
      "prefix": "RT",
      "page": 12,
      "context": "he gaze. [RT.C1.END.3] Executes [RECOVER] partial at the [SHOULDER] and [CHEST] under [ALERT], sustaining residual [COMPRESSED_VOLUME]. [RT.C1.END.4] Awaits the next instruction at the system as a whole, opening [ITERATION_BUFFER] or [NODE_TRANSFER]."
    },
    {
      "code": "KS.C1.6.1",
      "prefix": "KS",
      "page": 13,
      "context": "ter Over Active Codes [C1.6] Iteration Register \u00b7 Impulse Variation on Active Codes SOURCE CODE \u00b7 REGISTER (KS) CODE SOURCE \u00b7 SENTENCE [KS.C1.6.1] Carries all active checkpoints from [ST.C1.1] through [ST.C1.5], forming the source register that iteration must traverse at least once. [KS.C1.6.2] Re-activates the situation set : [ST.C1.1] Initial Traction, [ST.C1.2] Compression Corridor, [ST.C1.3] Authority Interruption, [ST.C1.4] Semantic Aggression, [ST.C1.5] Node B Final Contact. [KS.C1.6.3] Re-activates the impulse set : [RT.C1.1] under [ACCELERATION"
    },
    {
      "code": "ST.C1.1",
      "prefix": "ST",
      "page": 13,
      "context": "\u00b7 Impulse Variation on Active Codes SOURCE CODE \u00b7 REGISTER (KS) CODE SOURCE \u00b7 SENTENCE [KS.C1.6.1] Carries all active checkpoints from [ST.C1.1] through [ST.C1.5], forming the source register that iteration must traverse at least once. [KS.C1.6.2] Re-activates the situation set : [ST.C1.1] Initial Traction, [ST.C1.2] Compression Corridor, [ST.C1.3] Authority Interruption, [ST.C1.4] Semantic Aggression, [ST.C1.5] Node B Final Contact. [KS.C1.6.3] Re-activates the impulse set : [RT.C1.1] under [ACCELERATION] and [COMPRESSION], [RT.C1.2] under [COMPRESS"
    },
    {
      "code": "ST.C1.5",
      "prefix": "ST",
      "page": 13,
      "context": "n on Active Codes SOURCE CODE \u00b7 REGISTER (KS) CODE SOURCE \u00b7 SENTENCE [KS.C1.6.1] Carries all active checkpoints from [ST.C1.1] through [ST.C1.5], forming the source register that iteration must traverse at least once. [KS.C1.6.2] Re-activates the situation set : [ST.C1.1] Initial Traction, [ST.C1.2] Compression Corridor, [ST.C1.3] Authority Interruption, [ST.C1.4] Semantic Aggression, [ST.C1.5] Node B Final Contact. [KS.C1.6.3] Re-activates the impulse set : [RT.C1.1] under [ACCELERATION] and [COMPRESSION], [RT.C1.2] under [COMPRESSION] and [CONSTANT"
    },
    {
      "code": "KS.C1.6.2",
      "prefix": "KS",
      "page": 13,
      "context": "Carries all active checkpoints from [ST.C1.1] through [ST.C1.5], forming the source register that iteration must traverse at least once. [KS.C1.6.2] Re-activates the situation set : [ST.C1.1] Initial Traction, [ST.C1.2] Compression Corridor, [ST.C1.3] Authority Interruption, [ST.C1.4] Semantic Aggression, [ST.C1.5] Node B Final Contact. [KS.C1.6.3] Re-activates the impulse set : [RT.C1.1] under [ACCELERATION] and [COMPRESSION], [RT.C1.2] under [COMPRESSION] and [CONSTANT], [RT.C1.3] under [FREEZE] and [GLITCH], [RT.C1.4] under [FIXATION] and [COMPRESSION]"
    },
    {
      "code": "ST.C1.1",
      "prefix": "ST",
      "page": 13,
      "context": "through [ST.C1.5], forming the source register that iteration must traverse at least once. [KS.C1.6.2] Re-activates the situation set : [ST.C1.1] Initial Traction, [ST.C1.2] Compression Corridor, [ST.C1.3] Authority Interruption, [ST.C1.4] Semantic Aggression, [ST.C1.5] Node B Final Contact. [KS.C1.6.3] Re-activates the impulse set : [RT.C1.1] under [ACCELERATION] and [COMPRESSION], [RT.C1.2] under [COMPRESSION] and [CONSTANT], [RT.C1.3] under [FREEZE] and [GLITCH], [RT.C1.4] under [FIXATION] and [COMPRESSION], [RT.C1.5] under [ASYMMETRIC] and [ALERT]."
    },
    {
      "code": "ST.C1.2",
      "prefix": "ST",
      "page": 13,
      "context": "the source register that iteration must traverse at least once. [KS.C1.6.2] Re-activates the situation set : [ST.C1.1] Initial Traction, [ST.C1.2] Compression Corridor, [ST.C1.3] Authority Interruption, [ST.C1.4] Semantic Aggression, [ST.C1.5] Node B Final Contact. [KS.C1.6.3] Re-activates the impulse set : [RT.C1.1] under [ACCELERATION] and [COMPRESSION], [RT.C1.2] under [COMPRESSION] and [CONSTANT], [RT.C1.3] under [FREEZE] and [GLITCH], [RT.C1.4] under [FIXATION] and [COMPRESSION], [RT.C1.5] under [ASYMMETRIC] and [ALERT]. [KS.C1.6.4] Declares [SYS"
    },
    {
      "code": "ST.C1.3",
      "prefix": "ST",
      "page": 13,
      "context": "on must traverse at least once. [KS.C1.6.2] Re-activates the situation set : [ST.C1.1] Initial Traction, [ST.C1.2] Compression Corridor, [ST.C1.3] Authority Interruption, [ST.C1.4] Semantic Aggression, [ST.C1.5] Node B Final Contact. [KS.C1.6.3] Re-activates the impulse set : [RT.C1.1] under [ACCELERATION] and [COMPRESSION], [RT.C1.2] under [COMPRESSION] and [CONSTANT], [RT.C1.3] under [FREEZE] and [GLITCH], [RT.C1.4] under [FIXATION] and [COMPRESSION], [RT.C1.5] under [ASYMMETRIC] and [ALERT]. [KS.C1.6.4] Declares [SYSTEM] no new checkpoint permitted,"
    },
    {
      "code": "ST.C1.4",
      "prefix": "ST",
      "page": 13,
      "context": "KS.C1.6.2] Re-activates the situation set : [ST.C1.1] Initial Traction, [ST.C1.2] Compression Corridor, [ST.C1.3] Authority Interruption, [ST.C1.4] Semantic Aggression, [ST.C1.5] Node B Final Contact. [KS.C1.6.3] Re-activates the impulse set : [RT.C1.1] under [ACCELERATION] and [COMPRESSION], [RT.C1.2] under [COMPRESSION] and [CONSTANT], [RT.C1.3] under [FREEZE] and [GLITCH], [RT.C1.4] under [FIXATION] and [COMPRESSION], [RT.C1.5] under [ASYMMETRIC] and [ALERT]. [KS.C1.6.4] Declares [SYSTEM] no new checkpoint permitted, the register only replays codes a"
    },
    {
      "code": "ST.C1.5",
      "prefix": "ST",
      "page": 13,
      "context": "tuation set : [ST.C1.1] Initial Traction, [ST.C1.2] Compression Corridor, [ST.C1.3] Authority Interruption, [ST.C1.4] Semantic Aggression, [ST.C1.5] Node B Final Contact. [KS.C1.6.3] Re-activates the impulse set : [RT.C1.1] under [ACCELERATION] and [COMPRESSION], [RT.C1.2] under [COMPRESSION] and [CONSTANT], [RT.C1.3] under [FREEZE] and [GLITCH], [RT.C1.4] under [FIXATION] and [COMPRESSION], [RT.C1.5] under [ASYMMETRIC] and [ALERT]. [KS.C1.6.4] Declares [SYSTEM] no new checkpoint permitted, the register only replays codes already active during the linea"
    },
    {
      "code": "KS.C1.6.3",
      "prefix": "KS",
      "page": 13,
      "context": "action, [ST.C1.2] Compression Corridor, [ST.C1.3] Authority Interruption, [ST.C1.4] Semantic Aggression, [ST.C1.5] Node B Final Contact. [KS.C1.6.3] Re-activates the impulse set : [RT.C1.1] under [ACCELERATION] and [COMPRESSION], [RT.C1.2] under [COMPRESSION] and [CONSTANT], [RT.C1.3] under [FREEZE] and [GLITCH], [RT.C1.4] under [FIXATION] and [COMPRESSION], [RT.C1.5] under [ASYMMETRIC] and [ALERT]. [KS.C1.6.4] Declares [SYSTEM] no new checkpoint permitted, the register only replays codes already active during the linear flow. ACTIVE SITUATION CODES \u00b7 SP"
    },
    {
      "code": "RT.C1.1",
      "prefix": "RT",
      "page": 13,
      "context": ".C1.3] Authority Interruption, [ST.C1.4] Semantic Aggression, [ST.C1.5] Node B Final Contact. [KS.C1.6.3] Re-activates the impulse set : [RT.C1.1] under [ACCELERATION] and [COMPRESSION], [RT.C1.2] under [COMPRESSION] and [CONSTANT], [RT.C1.3] under [FREEZE] and [GLITCH], [RT.C1.4] under [FIXATION] and [COMPRESSION], [RT.C1.5] under [ASYMMETRIC] and [ALERT]. [KS.C1.6.4] Declares [SYSTEM] no new checkpoint permitted, the register only replays codes already active during the linear flow. ACTIVE SITUATION CODES \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C"
    },
    {
      "code": "RT.C1.2",
      "prefix": "RT",
      "page": 13,
      "context": "ggression, [ST.C1.5] Node B Final Contact. [KS.C1.6.3] Re-activates the impulse set : [RT.C1.1] under [ACCELERATION] and [COMPRESSION], [RT.C1.2] under [COMPRESSION] and [CONSTANT], [RT.C1.3] under [FREEZE] and [GLITCH], [RT.C1.4] under [FIXATION] and [COMPRESSION], [RT.C1.5] under [ASYMMETRIC] and [ALERT]. [KS.C1.6.4] Declares [SYSTEM] no new checkpoint permitted, the register only replays codes already active during the linear flow. ACTIVE SITUATION CODES \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.6.1] Declares [SYSTEM] the grid from Node_A to N"
    },
    {
      "code": "RT.C1.3",
      "prefix": "RT",
      "page": 13,
      "context": "KS.C1.6.3] Re-activates the impulse set : [RT.C1.1] under [ACCELERATION] and [COMPRESSION], [RT.C1.2] under [COMPRESSION] and [CONSTANT], [RT.C1.3] under [FREEZE] and [GLITCH], [RT.C1.4] under [FIXATION] and [COMPRESSION], [RT.C1.5] under [ASYMMETRIC] and [ALERT]. [KS.C1.6.4] Declares [SYSTEM] no new checkpoint permitted, the register only replays codes already active during the linear flow. ACTIVE SITUATION CODES \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.6.1] Declares [SYSTEM] the grid from Node_A to Node_B complete and Node_C closed, with cursor"
    },
    {
      "code": "RT.C1.4",
      "prefix": "RT",
      "page": 13,
      "context": ": [RT.C1.1] under [ACCELERATION] and [COMPRESSION], [RT.C1.2] under [COMPRESSION] and [CONSTANT], [RT.C1.3] under [FREEZE] and [GLITCH], [RT.C1.4] under [FIXATION] and [COMPRESSION], [RT.C1.5] under [ASYMMETRIC] and [ALERT]. [KS.C1.6.4] Declares [SYSTEM] no new checkpoint permitted, the register only replays codes already active during the linear flow. ACTIVE SITUATION CODES \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.6.1] Declares [SYSTEM] the grid from Node_A to Node_B complete and Node_C closed, with cursor still in transit. [ST.C1.6.2] Reads o"
    },
    {
      "code": "RT.C1.5",
      "prefix": "RT",
      "page": 13,
      "context": "SION], [RT.C1.2] under [COMPRESSION] and [CONSTANT], [RT.C1.3] under [FREEZE] and [GLITCH], [RT.C1.4] under [FIXATION] and [COMPRESSION], [RT.C1.5] under [ASYMMETRIC] and [ALERT]. [KS.C1.6.4] Declares [SYSTEM] no new checkpoint permitted, the register only replays codes already active during the linear flow. ACTIVE SITUATION CODES \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.6.1] Declares [SYSTEM] the grid from Node_A to Node_B complete and Node_C closed, with cursor still in transit. [ST.C1.6.2] Reads one [LINEAR_OBJECT] across 15m, held in contact"
    },
    {
      "code": "KS.C1.6.4",
      "prefix": "KS",
      "page": 13,
      "context": "ONSTANT], [RT.C1.3] under [FREEZE] and [GLITCH], [RT.C1.4] under [FIXATION] and [COMPRESSION], [RT.C1.5] under [ASYMMETRIC] and [ALERT]. [KS.C1.6.4] Declares [SYSTEM] no new checkpoint permitted, the register only replays codes already active during the linear flow. ACTIVE SITUATION CODES \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.6.1] Declares [SYSTEM] the grid from Node_A to Node_B complete and Node_C closed, with cursor still in transit. [ST.C1.6.2] Reads one [LINEAR_OBJECT] across 15m, held in contact with full tension, permitting no slack at an"
    },
    {
      "code": "ST.C1.6.1",
      "prefix": "ST",
      "page": 13,
      "context": "d, the register only replays codes already active during the linear flow. ACTIVE SITUATION CODES \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.6.1] Declares [SYSTEM] the grid from Node_A to Node_B complete and Node_C closed, with cursor still in transit. [ST.C1.6.2] Reads one [LINEAR_OBJECT] across 15m, held in contact with full tension, permitting no slack at any iteration. [ST.C1.6.3] Reads [SEMANTIC_OBJECT] under [SEMANTIC], with gaze in fixation loop, functioning as a repeat trigger and not as a new checkpoint. [ST.C1.6.4] Reads [SOLID_MASS_OBJECT"
    },
    {
      "code": "ST.C1.6.2",
      "prefix": "ST",
      "page": 13,
      "context": "SCORE \u00b7 SENTENCE [ST.C1.6.1] Declares [SYSTEM] the grid from Node_A to Node_B complete and Node_C closed, with cursor still in transit. [ST.C1.6.2] Reads one [LINEAR_OBJECT] across 15m, held in contact with full tension, permitting no slack at any iteration. [ST.C1.6.3] Reads [SEMANTIC_OBJECT] under [SEMANTIC], with gaze in fixation loop, functioning as a repeat trigger and not as a new checkpoint. [ST.C1.6.4] Reads [SOLID_MASS_OBJECT] under [MASS], with posture narrow and duration iterative, a narrowing pattern that repeats without change. [ST.C1.6.5]"
    },
    {
      "code": "ST.C1.6.3",
      "prefix": "ST",
      "page": 13,
      "context": "in transit. [ST.C1.6.2] Reads one [LINEAR_OBJECT] across 15m, held in contact with full tension, permitting no slack at any iteration. [ST.C1.6.3] Reads [SEMANTIC_OBJECT] under [SEMANTIC], with gaze in fixation loop, functioning as a repeat trigger and not as a new checkpoint. [ST.C1.6.4] Reads [SOLID_MASS_OBJECT] under [MASS], with posture narrow and duration iterative, a narrowing pattern that repeats without change. [ST.C1.6.5] Reads one [TEXTURE_OBJECT] under [ELEVATION], with foot at slip-potential and weight shifting, the footing disturbance sust"
    },
    {
      "code": "ST.C1.6.4",
      "prefix": "ST",
      "page": 13,
      "context": ".6.3] Reads [SEMANTIC_OBJECT] under [SEMANTIC], with gaze in fixation loop, functioning as a repeat trigger and not as a new checkpoint. [ST.C1.6.4] Reads [SOLID_MASS_OBJECT] under [MASS], with posture narrow and duration iterative, a narrowing pattern that repeats without change. [ST.C1.6.5] Reads one [TEXTURE_OBJECT] under [ELEVATION], with foot at slip-potential and weight shifting, the footing disturbance sustained across iterations. [ST.C1.6.6] Reads one [REGULATORY_OBJECT] under [AUTHORITY], applying direction=right closed, held throughout iteratio"
    },
    {
      "code": "ST.C1.6.5",
      "prefix": "ST",
      "page": 13,
      "context": ".4] Reads [SOLID_MASS_OBJECT] under [MASS], with posture narrow and duration iterative, a narrowing pattern that repeats without change. [ST.C1.6.5] Reads one [TEXTURE_OBJECT] under [ELEVATION], with foot at slip-potential and weight shifting, the footing disturbance sustained across iterations. [ST.C1.6.6] Reads one [REGULATORY_OBJECT] under [AUTHORITY], applying direction=right closed, held throughout iteration. [ST.C1.6.7] Holds route complete in parallel with impulse unfinished under [PARADOX], the coordinate has arrived but the movement has not yet"
    },
    {
      "code": "ST.C1.6.6",
      "prefix": "ST",
      "page": 13,
      "context": "[TEXTURE_OBJECT] under [ELEVATION], with foot at slip-potential and weight shifting, the footing disturbance sustained across iterations. [ST.C1.6.6] Reads one [REGULATORY_OBJECT] under [AUTHORITY], applying direction=right closed, held throughout iteration. [ST.C1.6.7] Holds route complete in parallel with impulse unfinished under [PARADOX], the coordinate has arrived but the movement has not yet closed. IMPULSE VARIATION \u00b7 BODY SCORE (VI) CODE SCORE \u00b7 SENTENCE [VI.C1.6.1] Executes [STEP] and [ACCELERATE] with a variable count from one to two steps at"
    },
    {
      "code": "ST.C1.6.7",
      "prefix": "ST",
      "page": 13,
      "context": "ss iterations. [ST.C1.6.6] Reads one [REGULATORY_OBJECT] under [AUTHORITY], applying direction=right closed, held throughout iteration. [ST.C1.6.7] Holds route complete in parallel with impulse unfinished under [PARADOX], the coordinate has arrived but the movement has not yet closed. IMPULSE VARIATION \u00b7 BODY SCORE (VI) CODE SCORE \u00b7 SENTENCE [VI.C1.6.1] Executes [STEP] and [ACCELERATE] with a variable count from one to two steps at the [SOLE] and [KNEE] under [ACCELERATION], count varies but pattern is held. [VI.C1.6.2] Performs [GRIP] with isometric"
    },
    {
      "code": "VI.C1.6.1",
      "prefix": "VI",
      "page": 13,
      "context": "r [PARADOX], the coordinate has arrived but the movement has not yet closed. IMPULSE VARIATION \u00b7 BODY SCORE (VI) CODE SCORE \u00b7 SENTENCE [VI.C1.6.1] Executes [STEP] and [ACCELERATE] with a variable count from one to two steps at the [SOLE] and [KNEE] under [ACCELERATION], count varies but pattern is held. [VI.C1.6.2] Performs [GRIP] with isometric hold at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], sustaining [MECHANICAL_GRIP] across each pass. [VI.C1.6.3] Executes [COMPRESS] at the [SHOULDER] and [ELBOW] within a range of five to twe"
    },
    {
      "code": "VI.C1.6.2",
      "prefix": "VI",
      "page": 13,
      "context": "[ACCELERATE] with a variable count from one to two steps at the [SOLE] and [KNEE] under [ACCELERATION], count varies but pattern is held. [VI.C1.6.2] Performs [GRIP] with isometric hold at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], sustaining [MECHANICAL_GRIP] across each pass. [VI.C1.6.3] Executes [COMPRESS] at the [SHOULDER] and [ELBOW] within a range of five to twelve centimetres under [COMPRESSION], amplitude may vary. [VI.C1.6.4] Performs [FIXATE] held for one to four seconds at the [CERVICAL] spine and [EYE] under [FIXATION], p"
    },
    {
      "code": "VI.C1.6.3",
      "prefix": "VI",
      "page": 13,
      "context": "P] with isometric hold at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], sustaining [MECHANICAL_GRIP] across each pass. [VI.C1.6.3] Executes [COMPRESS] at the [SHOULDER] and [ELBOW] within a range of five to twelve centimetres under [COMPRESSION], amplitude may vary. [VI.C1.6.4] Performs [FIXATE] held for one to four seconds at the [CERVICAL] spine and [EYE] under [FIXATION], producing [FIXATION_HOLD] with variable duration. [VI.C1.6.5] Executes [TREMOR] at the [WRIST] and [SHOULDER] under [GLITCH] while [GRIP] and drive remain simultane"
    },
    {
      "code": "VI.C1.6.4",
      "prefix": "VI",
      "page": 13,
      "context": "Executes [COMPRESS] at the [SHOULDER] and [ELBOW] within a range of five to twelve centimetres under [COMPRESSION], amplitude may vary. [VI.C1.6.4] Performs [FIXATE] held for one to four seconds at the [CERVICAL] spine and [EYE] under [FIXATION], producing [FIXATION_HOLD] with variable duration. [VI.C1.6.5] Executes [TREMOR] at the [WRIST] and [SHOULDER] under [GLITCH] while [GRIP] and drive remain simultaneously active, producing [TREMOR_LOOP]."
    },
    {
      "code": "VI.C1.6.5",
      "prefix": "VI",
      "page": 13,
      "context": "IXATE] held for one to four seconds at the [CERVICAL] spine and [EYE] under [FIXATION], producing [FIXATION_HOLD] with variable duration. [VI.C1.6.5] Executes [TREMOR] at the [WRIST] and [SHOULDER] under [GLITCH] while [GRIP] and drive remain simultaneously active, producing [TREMOR_LOOP]."
    },
    {
      "code": "VI.C1.6.6",
      "prefix": "VI",
      "page": 14,
      "context": "CODE SCORE \u00b7 SENTENCE [VI.C1.6.6] Executes [DISTRIBUTE] of uneven load across the [SOLE_L] and [SOLE_R] under [ASYMMETRIC], weight shifting continuously, producing [ASYMMETRIC_STANCE]. REPETITION PATTERN \u00b7 PU CODE PATTERN \u00b7 SENTENCE [PU.C1.6.1] Requires all active checkpoints to be re-executed at least once before Phase 04 begins. [PU.C1.6.2] Permits the loop count to remain open, the director decides the number of passes. [PU.C1.6.3] Con"
    },
    {
      "code": "PU.C1.6.1",
      "prefix": "PU",
      "page": 14,
      "context": "LE_R] under [ASYMMETRIC], weight shifting continuously, producing [ASYMMETRIC_STANCE]. REPETITION PATTERN \u00b7 PU CODE PATTERN \u00b7 SENTENCE [PU.C1.6.1] Requires all active checkpoints to be re-executed at least once before Phase 04 begins. [PU.C1.6.2] Permits the loop count to remain open, the director decides the number of passes. [PU.C1.6.3] Constrains impulse variation to remain within declared ranges. [PU.C1.6.4] Forbids any new checkpoint from entering during iteration. OBJECT REGISTER \u00b7 RO CODE REGISTER \u00b7 SENTENCE [RO.C1.6.1] Carries the [LINEAR_O"
    },
    {
      "code": "PU.C1.6.2",
      "prefix": "PU",
      "page": 14,
      "context": "TTERN \u00b7 PU CODE PATTERN \u00b7 SENTENCE [PU.C1.6.1] Requires all active checkpoints to be re-executed at least once before Phase 04 begins. [PU.C1.6.2] Permits the loop count to remain open, the director decides the number of passes. [PU.C1.6.3] Constrains impulse variation to remain within declared ranges. [PU.C1.6.4] Forbids any new checkpoint from entering during iteration. OBJECT REGISTER \u00b7 RO CODE REGISTER \u00b7 SENTENCE [RO.C1.6.1] Carries the [LINEAR_OBJECT] across all iterations as sustained working line. [RO.C1.6.2] Carries the full [SOLID_MASS_OBJ"
    },
    {
      "code": "PU.C1.6.3",
      "prefix": "PU",
      "page": 14,
      "context": "uted at least once before Phase 04 begins. [PU.C1.6.2] Permits the loop count to remain open, the director decides the number of passes. [PU.C1.6.3] Constrains impulse variation to remain within declared ranges. [PU.C1.6.4] Forbids any new checkpoint from entering during iteration. OBJECT REGISTER \u00b7 RO CODE REGISTER \u00b7 SENTENCE [RO.C1.6.1] Carries the [LINEAR_OBJECT] across all iterations as sustained working line. [RO.C1.6.2] Carries the full [SOLID_MASS_OBJECT], [TEXTURE_OBJECT], [GROUND_TEXTURE_OBJECT], [REGULATORY_OBJECT] and [SEMANTIC_OBJECT] sets"
    },
    {
      "code": "PU.C1.6.4",
      "prefix": "PU",
      "page": 14,
      "context": "nt to remain open, the director decides the number of passes. [PU.C1.6.3] Constrains impulse variation to remain within declared ranges. [PU.C1.6.4] Forbids any new checkpoint from entering during iteration. OBJECT REGISTER \u00b7 RO CODE REGISTER \u00b7 SENTENCE [RO.C1.6.1] Carries the [LINEAR_OBJECT] across all iterations as sustained working line. [RO.C1.6.2] Carries the full [SOLID_MASS_OBJECT], [TEXTURE_OBJECT], [GROUND_TEXTURE_OBJECT], [REGULATORY_OBJECT] and [SEMANTIC_OBJECT] sets already declared in [ST.C1.0]. [RO.C1.6.3] Declares no new object permitte"
    },
    {
      "code": "RO.C1.6.1",
      "prefix": "RO",
      "page": 14,
      "context": "declared ranges. [PU.C1.6.4] Forbids any new checkpoint from entering during iteration. OBJECT REGISTER \u00b7 RO CODE REGISTER \u00b7 SENTENCE [RO.C1.6.1] Carries the [LINEAR_OBJECT] across all iterations as sustained working line. [RO.C1.6.2] Carries the full [SOLID_MASS_OBJECT], [TEXTURE_OBJECT], [GROUND_TEXTURE_OBJECT], [REGULATORY_OBJECT] and [SEMANTIC_OBJECT] sets already declared in [ST.C1.0]. [RO.C1.6.3] Declares no new object permitted, the register is closed. LOCKING RULE \u00b7 AP CODE RULE \u00b7 SENTENCE [AP.C1.6.1] Locks the iteration count open, the dir"
    },
    {
      "code": "RO.C1.6.2",
      "prefix": "RO",
      "page": 14,
      "context": "OBJECT REGISTER \u00b7 RO CODE REGISTER \u00b7 SENTENCE [RO.C1.6.1] Carries the [LINEAR_OBJECT] across all iterations as sustained working line. [RO.C1.6.2] Carries the full [SOLID_MASS_OBJECT], [TEXTURE_OBJECT], [GROUND_TEXTURE_OBJECT], [REGULATORY_OBJECT] and [SEMANTIC_OBJECT] sets already declared in [ST.C1.0]. [RO.C1.6.3] Declares no new object permitted, the register is closed. LOCKING RULE \u00b7 AP CODE RULE \u00b7 SENTENCE [AP.C1.6.1] Locks the iteration count open, the director decides. [AP.C1.6.2] Locks closure of iteration until all active codes have been re"
    },
    {
      "code": "ST.C1.0",
      "prefix": "ST",
      "page": 14,
      "context": "he full [SOLID_MASS_OBJECT], [TEXTURE_OBJECT], [GROUND_TEXTURE_OBJECT], [REGULATORY_OBJECT] and [SEMANTIC_OBJECT] sets already declared in [ST.C1.0]. [RO.C1.6.3] Declares no new object permitted, the register is closed. LOCKING RULE \u00b7 AP CODE RULE \u00b7 SENTENCE [AP.C1.6.1] Locks the iteration count open, the director decides. [AP.C1.6.2] Locks closure of iteration until all active codes have been re-heard at least once. [AP.C1.6.3] Locks [GRIP] on the [LINEAR_OBJECT] to remain held throughout iteration. [AP.C1.6.4] Triggers transition to Phase 04 once"
    },
    {
      "code": "RO.C1.6.3",
      "prefix": "RO",
      "page": 14,
      "context": "ID_MASS_OBJECT], [TEXTURE_OBJECT], [GROUND_TEXTURE_OBJECT], [REGULATORY_OBJECT] and [SEMANTIC_OBJECT] sets already declared in [ST.C1.0]. [RO.C1.6.3] Declares no new object permitted, the register is closed. LOCKING RULE \u00b7 AP CODE RULE \u00b7 SENTENCE [AP.C1.6.1] Locks the iteration count open, the director decides. [AP.C1.6.2] Locks closure of iteration until all active codes have been re-heard at least once. [AP.C1.6.3] Locks [GRIP] on the [LINEAR_OBJECT] to remain held throughout iteration. [AP.C1.6.4] Triggers transition to Phase 04 once system saturat"
    },
    {
      "code": "AP.C1.6.1",
      "prefix": "AP",
      "page": 14,
      "context": "y declared in [ST.C1.0]. [RO.C1.6.3] Declares no new object permitted, the register is closed. LOCKING RULE \u00b7 AP CODE RULE \u00b7 SENTENCE [AP.C1.6.1] Locks the iteration count open, the director decides. [AP.C1.6.2] Locks closure of iteration until all active codes have been re-heard at least once. [AP.C1.6.3] Locks [GRIP] on the [LINEAR_OBJECT] to remain held throughout iteration. [AP.C1.6.4] Triggers transition to Phase 04 once system saturation is reached."
    },
    {
      "code": "AP.C1.6.2",
      "prefix": "AP",
      "page": 14,
      "context": "ted, the register is closed. LOCKING RULE \u00b7 AP CODE RULE \u00b7 SENTENCE [AP.C1.6.1] Locks the iteration count open, the director decides. [AP.C1.6.2] Locks closure of iteration until all active codes have been re-heard at least once. [AP.C1.6.3] Locks [GRIP] on the [LINEAR_OBJECT] to remain held throughout iteration. [AP.C1.6.4] Triggers transition to Phase 04 once system saturation is reached."
    },
    {
      "code": "AP.C1.6.3",
      "prefix": "AP",
      "page": 14,
      "context": "ration count open, the director decides. [AP.C1.6.2] Locks closure of iteration until all active codes have been re-heard at least once. [AP.C1.6.3] Locks [GRIP] on the [LINEAR_OBJECT] to remain held throughout iteration. [AP.C1.6.4] Triggers transition to Phase 04 once system saturation is reached."
    },
    {
      "code": "AP.C1.6.4",
      "prefix": "AP",
      "page": 14,
      "context": "all active codes have been re-heard at least once. [AP.C1.6.3] Locks [GRIP] on the [LINEAR_OBJECT] to remain held throughout iteration. [AP.C1.6.4] Triggers transition to Phase 04 once system saturation is reached."
    },
    {
      "code": "ST.C1.7.1",
      "prefix": "ST",
      "page": 15,
      "context": "[PHASE 04] RESIDUAL [C1.7] Residual State SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.7.1] Declares [SYSTEM] at Node_B, with Score 01 closed and iteration released. [ST.C1.7.2] Reads one [LINEAR_OBJECT] with tension slack (released) and contact-hold (residual), the line is loosening but the palm has not withdrawn. [ST.C1.7.3] Holds body stopped in parallel with impulse residue still active under [PARADOX], the body is not yet neutral. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C1.7.1]"
    },
    {
      "code": "ST.C1.7.2",
      "prefix": "ST",
      "page": 15,
      "context": "SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C1.7.1] Declares [SYSTEM] at Node_B, with Score 01 closed and iteration released. [ST.C1.7.2] Reads one [LINEAR_OBJECT] with tension slack (released) and contact-hold (residual), the line is loosening but the palm has not withdrawn. [ST.C1.7.3] Holds body stopped in parallel with impulse residue still active under [PARADOX], the body is not yet neutral. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C1.7.1] Executes [RECOVER] partial at the [SHOULDER] and [CHEST] under [ALERT], producing [PAR"
    },
    {
      "code": "ST.C1.7.3",
      "prefix": "ST",
      "page": 15,
      "context": "eads one [LINEAR_OBJECT] with tension slack (released) and contact-hold (residual), the line is loosening but the palm has not withdrawn. [ST.C1.7.3] Holds body stopped in parallel with impulse residue still active under [PARADOX], the body is not yet neutral. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C1.7.1] Executes [RECOVER] partial at the [SHOULDER] and [CHEST] under [ALERT], producing [PARTIAL_RECOVERY], referring to [ST.C1.7.2]. [RT.C1.7.2] Performs micro [RELEASE] of [GRIP] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [ALERT"
    },
    {
      "code": "RT.C1.7.1",
      "prefix": "RT",
      "page": 15,
      "context": "rallel with impulse residue still active under [PARADOX], the body is not yet neutral. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C1.7.1] Executes [RECOVER] partial at the [SHOULDER] and [CHEST] under [ALERT], producing [PARTIAL_RECOVERY], referring to [ST.C1.7.2]. [RT.C1.7.2] Performs micro [RELEASE] of [GRIP] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [ALERT], with grip releasing and contact residual, referring to [ST.C1.7.2]. [RT.C1.7.3] Holds small [HOLD] at the [GAZE] under [CONSTANT], sustaining residual [FIXATION_HOLD], re"
    },
    {
      "code": "ST.C1.7.2",
      "prefix": "ST",
      "page": 15,
      "context": "SENTENCE [RT.C1.7.1] Executes [RECOVER] partial at the [SHOULDER] and [CHEST] under [ALERT], producing [PARTIAL_RECOVERY], referring to [ST.C1.7.2]. [RT.C1.7.2] Performs micro [RELEASE] of [GRIP] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [ALERT], with grip releasing and contact residual, referring to [ST.C1.7.2]. [RT.C1.7.3] Holds small [HOLD] at the [GAZE] under [CONSTANT], sustaining residual [FIXATION_HOLD], referring to [ST.C1.7.3]."
    },
    {
      "code": "RT.C1.7.2",
      "prefix": "RT",
      "page": 15,
      "context": ".C1.7.1] Executes [RECOVER] partial at the [SHOULDER] and [CHEST] under [ALERT], producing [PARTIAL_RECOVERY], referring to [ST.C1.7.2]. [RT.C1.7.2] Performs micro [RELEASE] of [GRIP] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [ALERT], with grip releasing and contact residual, referring to [ST.C1.7.2]. [RT.C1.7.3] Holds small [HOLD] at the [GAZE] under [CONSTANT], sustaining residual [FIXATION_HOLD], referring to [ST.C1.7.3]."
    },
    {
      "code": "ST.C1.7.2",
      "prefix": "ST",
      "page": 15,
      "context": "ELEASE] of [GRIP] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [ALERT], with grip releasing and contact residual, referring to [ST.C1.7.2]. [RT.C1.7.3] Holds small [HOLD] at the [GAZE] under [CONSTANT], sustaining residual [FIXATION_HOLD], referring to [ST.C1.7.3]."
    },
    {
      "code": "RT.C1.7.3",
      "prefix": "RT",
      "page": 15,
      "context": "IP] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [ALERT], with grip releasing and contact residual, referring to [ST.C1.7.2]. [RT.C1.7.3] Holds small [HOLD] at the [GAZE] under [CONSTANT], sustaining residual [FIXATION_HOLD], referring to [ST.C1.7.3]."
    },
    {
      "code": "ST.C1.7.3",
      "prefix": "ST",
      "page": 15,
      "context": "erring to [ST.C1.7.2]. [RT.C1.7.3] Holds small [HOLD] at the [GAZE] under [CONSTANT], sustaining residual [FIXATION_HOLD], referring to [ST.C1.7.3]."
    },
    {
      "code": "DP.C2.0.0",
      "prefix": "DP",
      "page": 16,
      "context": "during Phase 03 (C2.6) [PHASE 1] DEPARTURE POINT \u00b7 Utility Corridor [C2.0] Origin Anchor \u00b7 Utility Corridor DATA PROVOCATION \u00b7 RAW DATA [DP.C2.0.0] source=Mapillary | type=bounds | lon=107.570\u2013107.586 | lat=-6.931 \u2194 -6.905 [DP.C2.0.1] source=Mapillary | type=feature | coord=107.575,-6.910 | feature=object | value=\"object--support--utility-pole\" [DP.C2.0.2] source=Mapillary | type=feature | distance=\u00b12.10m | feature=object | value=\"object--trash-can\" [DP.C2.0.3] source=Mapillary | type=feature | distance=\u00b13.20m | feature=object | value=\"object--manhole\" ["
    },
    {
      "code": "DP.C2.0.1",
      "prefix": "DP",
      "page": 16,
      "context": "or \u00b7 Utility Corridor DATA PROVOCATION \u00b7 RAW DATA [DP.C2.0.0] source=Mapillary | type=bounds | lon=107.570\u2013107.586 | lat=-6.931 \u2194 -6.905 [DP.C2.0.1] source=Mapillary | type=feature | coord=107.575,-6.910 | feature=object | value=\"object--support--utility-pole\" [DP.C2.0.2] source=Mapillary | type=feature | distance=\u00b12.10m | feature=object | value=\"object--trash-can\" [DP.C2.0.3] source=Mapillary | type=feature | distance=\u00b13.20m | feature=object | value=\"object--manhole\" [DP.C2.0.4] source=Mapillary | type=feature | distance=\u00b15.50m | feature=object | value=\""
    },
    {
      "code": "DP.C2.0.2",
      "prefix": "DP",
      "page": 16,
      "context": "931 \u2194 -6.905 [DP.C2.0.1] source=Mapillary | type=feature | coord=107.575,-6.910 | feature=object | value=\"object--support--utility-pole\" [DP.C2.0.2] source=Mapillary | type=feature | distance=\u00b12.10m | feature=object | value=\"object--trash-can\" [DP.C2.0.3] source=Mapillary | type=feature | distance=\u00b13.20m | feature=object | value=\"object--manhole\" [DP.C2.0.4] source=Mapillary | type=feature | distance=\u00b15.50m | feature=object | value=\"object--support--utility-pole\" [DP.C2.0.5] source=Mapillary | type=feature | distance=\u00b17.80m | feature=construction | value="
    },
    {
      "code": "DP.C2.0.3",
      "prefix": "DP",
      "page": 16,
      "context": "bject--support--utility-pole\" [DP.C2.0.2] source=Mapillary | type=feature | distance=\u00b12.10m | feature=object | value=\"object--trash-can\" [DP.C2.0.3] source=Mapillary | type=feature | distance=\u00b13.20m | feature=object | value=\"object--manhole\" [DP.C2.0.4] source=Mapillary | type=feature | distance=\u00b15.50m | feature=object | value=\"object--support--utility-pole\" [DP.C2.0.5] source=Mapillary | type=feature | distance=\u00b17.80m | feature=construction | value=\"construction--flat--driveway\" [DP.C2.0.6] source=Mapillary | type=feature | distance=\u00b19.15m | feature=regul"
    },
    {
      "code": "DP.C2.0.4",
      "prefix": "DP",
      "page": 16,
      "context": "ct | value=\"object--trash-can\" [DP.C2.0.3] source=Mapillary | type=feature | distance=\u00b13.20m | feature=object | value=\"object--manhole\" [DP.C2.0.4] source=Mapillary | type=feature | distance=\u00b15.50m | feature=object | value=\"object--support--utility-pole\" [DP.C2.0.5] source=Mapillary | type=feature | distance=\u00b17.80m | feature=construction | value=\"construction--flat--driveway\" [DP.C2.0.6] source=Mapillary | type=feature | distance=\u00b19.15m | feature=regulatory | value=\"regulatory--merge--g1\" [DP.C2.0.7] source=Mapillary | type=feature | distance=\u00b110.40m | fe"
    },
    {
      "code": "DP.C2.0.5",
      "prefix": "DP",
      "page": 16,
      "context": "\"object--manhole\" [DP.C2.0.4] source=Mapillary | type=feature | distance=\u00b15.50m | feature=object | value=\"object--support--utility-pole\" [DP.C2.0.5] source=Mapillary | type=feature | distance=\u00b17.80m | feature=construction | value=\"construction--flat--driveway\" [DP.C2.0.6] source=Mapillary | type=feature | distance=\u00b19.15m | feature=regulatory | value=\"regulatory--merge--g1\" [DP.C2.0.7] source=Mapillary | type=feature | distance=\u00b110.40m | feature=object | value=\"object--traffic-cone\" [DP.C2.0.8] source=Mapillary | type=feature | distance=\u00b111.90m | feature=ob"
    },
    {
      "code": "DP.C2.0.6",
      "prefix": "DP",
      "page": 16,
      "context": "tility-pole\" [DP.C2.0.5] source=Mapillary | type=feature | distance=\u00b17.80m | feature=construction | value=\"construction--flat--driveway\" [DP.C2.0.6] source=Mapillary | type=feature | distance=\u00b19.15m | feature=regulatory | value=\"regulatory--merge--g1\" [DP.C2.0.7] source=Mapillary | type=feature | distance=\u00b110.40m | feature=object | value=\"object--traffic-cone\" [DP.C2.0.8] source=Mapillary | type=feature | distance=\u00b111.90m | feature=object | value=\"object--sign--advertisement\" [DP.C2.0.9] source=Mapillary | type=feature | distance=\u00b113.55m | feature=regulato"
    },
    {
      "code": "DP.C2.0.7",
      "prefix": "DP",
      "page": 16,
      "context": "tion--flat--driveway\" [DP.C2.0.6] source=Mapillary | type=feature | distance=\u00b19.15m | feature=regulatory | value=\"regulatory--merge--g1\" [DP.C2.0.7] source=Mapillary | type=feature | distance=\u00b110.40m | feature=object | value=\"object--traffic-cone\" [DP.C2.0.8] source=Mapillary | type=feature | distance=\u00b111.90m | feature=object | value=\"object--sign--advertisement\" [DP.C2.0.9] source=Mapillary | type=feature | distance=\u00b113.55m | feature=regulatory | value=\"regulatory--weight-limit--g1\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.0] Declares a"
    },
    {
      "code": "DP.C2.0.8",
      "prefix": "DP",
      "page": 16,
      "context": "e=\"regulatory--merge--g1\" [DP.C2.0.7] source=Mapillary | type=feature | distance=\u00b110.40m | feature=object | value=\"object--traffic-cone\" [DP.C2.0.8] source=Mapillary | type=feature | distance=\u00b111.90m | feature=object | value=\"object--sign--advertisement\" [DP.C2.0.9] source=Mapillary | type=feature | distance=\u00b113.55m | feature=regulatory | value=\"regulatory--weight-limit--g1\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.0] Declares a [SYSTEM] axis from Node_A to Node_B across the utility corridor, spanning 14m, opened on utility-corridor mode."
    },
    {
      "code": "DP.C2.0.9",
      "prefix": "DP",
      "page": 16,
      "context": "ect--traffic-cone\" [DP.C2.0.8] source=Mapillary | type=feature | distance=\u00b111.90m | feature=object | value=\"object--sign--advertisement\" [DP.C2.0.9] source=Mapillary | type=feature | distance=\u00b113.55m | feature=regulatory | value=\"regulatory--weight-limit--g1\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.0] Declares a [SYSTEM] axis from Node_A to Node_B across the utility corridor, spanning 14m, opened on utility-corridor mode. [ST.C2.0.1] Places one [LINEAR_OBJECT] as utility line at inner side from Node_A to Node_B, spanning 14m, held in con"
    },
    {
      "code": "ST.C2.0",
      "prefix": "ST",
      "page": 16,
      "context": "feature | distance=\u00b113.55m | feature=regulatory | value=\"regulatory--weight-limit--g1\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.0] Declares a [SYSTEM] axis from Node_A to Node_B across the utility corridor, spanning 14m, opened on utility-corridor mode. [ST.C2.0.1] Places one [LINEAR_OBJECT] as utility line at inner side from Node_A to Node_B, spanning 14m, held in contact with tension in pre-load. [ST.C2.0.2] Places two [SOLID_MASS_OBJECT] vertical at \u00b10.0 and \u00b15.50 metres as utility poles under [MASS], with corridor set and posture in"
    },
    {
      "code": "ST.C2.0.1",
      "prefix": "ST",
      "page": 16,
      "context": "CE [ST.C2.0] Declares a [SYSTEM] axis from Node_A to Node_B across the utility corridor, spanning 14m, opened on utility-corridor mode. [ST.C2.0.1] Places one [LINEAR_OBJECT] as utility line at inner side from Node_A to Node_B, spanning 14m, held in contact with tension in pre-load. [ST.C2.0.2] Places two [SOLID_MASS_OBJECT] vertical at \u00b10.0 and \u00b15.50 metres as utility poles under [MASS], with corridor set and posture in latent narrow. [ST.C2.0.3] Places one [GROUND_TEXTURE_OBJECT] at \u00b13.20 metres as metal cover under [ELEVATION], with foot at hollow-po"
    },
    {
      "code": "ST.C2.0.2",
      "prefix": "ST",
      "page": 16,
      "context": "Places one [LINEAR_OBJECT] as utility line at inner side from Node_A to Node_B, spanning 14m, held in contact with tension in pre-load. [ST.C2.0.2] Places two [SOLID_MASS_OBJECT] vertical at \u00b10.0 and \u00b15.50 metres as utility poles under [MASS], with corridor set and posture in latent narrow. [ST.C2.0.3] Places one [GROUND_TEXTURE_OBJECT] at \u00b13.20 metres as metal cover under [ELEVATION], with foot at hollow-potential, classified as ground-texture rather than volumetric surface. [ST.C2.0.4] Places one [SOLID_MASS_OBJECT] low at \u00b12.10 metres as trash-can, v"
    },
    {
      "code": "ST.C2.0.3",
      "prefix": "ST",
      "page": 16,
      "context": "two [SOLID_MASS_OBJECT] vertical at \u00b10.0 and \u00b15.50 metres as utility poles under [MASS], with corridor set and posture in latent narrow. [ST.C2.0.3] Places one [GROUND_TEXTURE_OBJECT] at \u00b13.20 metres as metal cover under [ELEVATION], with foot at hollow-potential, classified as ground-texture rather than volumetric surface. [ST.C2.0.4] Places one [SOLID_MASS_OBJECT] low at \u00b12.10 metres as trash-can, volumetric receiver of cast objects at low-height. [ST.C2.0.5] Places one [TEXTURE_OBJECT] at \u00b17.80 metres under [ELEVATION], with slope descending, the ele"
    },
    {
      "code": "ST.C2.0.4",
      "prefix": "ST",
      "page": 16,
      "context": ".20 metres as metal cover under [ELEVATION], with foot at hollow-potential, classified as ground-texture rather than volumetric surface. [ST.C2.0.4] Places one [SOLID_MASS_OBJECT] low at \u00b12.10 metres as trash-can, volumetric receiver of cast objects at low-height. [ST.C2.0.5] Places one [TEXTURE_OBJECT] at \u00b17.80 metres under [ELEVATION], with slope descending, the elevation drop begins here. [ST.C2.0.6] Reads one [REGULATORY_OBJECT] at \u00b19.15 metres under [AUTHORITY], applying direction=merge required, held with cursor in merge-latent. [ST.C2.0.7] Place"
    },
    {
      "code": "ST.C2.0.5",
      "prefix": "ST",
      "page": 16,
      "context": "urface. [ST.C2.0.4] Places one [SOLID_MASS_OBJECT] low at \u00b12.10 metres as trash-can, volumetric receiver of cast objects at low-height. [ST.C2.0.5] Places one [TEXTURE_OBJECT] at \u00b17.80 metres under [ELEVATION], with slope descending, the elevation drop begins here. [ST.C2.0.6] Reads one [REGULATORY_OBJECT] at \u00b19.15 metres under [AUTHORITY], applying direction=merge required, held with cursor in merge-latent. [ST.C2.0.7] Places one [SOLID_MASS_OBJECT] knee-high at \u00b110.40 metres as traffic-cone, channelling the trajectory. [ST.C2.0.8] Reads one [SEMANTI"
    },
    {
      "code": "ST.C2.0.6",
      "prefix": "ST",
      "page": 16,
      "context": "ight. [ST.C2.0.5] Places one [TEXTURE_OBJECT] at \u00b17.80 metres under [ELEVATION], with slope descending, the elevation drop begins here. [ST.C2.0.6] Reads one [REGULATORY_OBJECT] at \u00b19.15 metres under [AUTHORITY], applying direction=merge required, held with cursor in merge-latent. [ST.C2.0.7] Places one [SOLID_MASS_OBJECT] knee-high at \u00b110.40 metres as traffic-cone, channelling the trajectory. [ST.C2.0.8] Reads one [SEMANTIC_OBJECT] at \u00b111.90 metres under [SEMANTIC], with gaze pulled to eye-level advertisement. [ST.C2.0.9] Reads one [REGULATORY_OBJECT"
    },
    {
      "code": "ST.C2.0.7",
      "prefix": "ST",
      "page": 16,
      "context": "6] Reads one [REGULATORY_OBJECT] at \u00b19.15 metres under [AUTHORITY], applying direction=merge required, held with cursor in merge-latent. [ST.C2.0.7] Places one [SOLID_MASS_OBJECT] knee-high at \u00b110.40 metres as traffic-cone, channelling the trajectory. [ST.C2.0.8] Reads one [SEMANTIC_OBJECT] at \u00b111.90 metres under [SEMANTIC], with gaze pulled to eye-level advertisement. [ST.C2.0.9] Reads one [REGULATORY_OBJECT] at \u00b113.55 metres under [AUTHORITY], applying weight-limit declared, with merge closure impending."
    },
    {
      "code": "ST.C2.0.8",
      "prefix": "ST",
      "page": 16,
      "context": "sor in merge-latent. [ST.C2.0.7] Places one [SOLID_MASS_OBJECT] knee-high at \u00b110.40 metres as traffic-cone, channelling the trajectory. [ST.C2.0.8] Reads one [SEMANTIC_OBJECT] at \u00b111.90 metres under [SEMANTIC], with gaze pulled to eye-level advertisement. [ST.C2.0.9] Reads one [REGULATORY_OBJECT] at \u00b113.55 metres under [AUTHORITY], applying weight-limit declared, with merge closure impending."
    },
    {
      "code": "ST.C2.0.9",
      "prefix": "ST",
      "page": 16,
      "context": "the trajectory. [ST.C2.0.8] Reads one [SEMANTIC_OBJECT] at \u00b111.90 metres under [SEMANTIC], with gaze pulled to eye-level advertisement. [ST.C2.0.9] Reads one [REGULATORY_OBJECT] at \u00b113.55 metres under [AUTHORITY], applying weight-limit declared, with merge closure impending."
    },
    {
      "code": "RT.C2.0.1",
      "prefix": "RT",
      "page": 17,
      "context": "BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.0.1] Executes [CENTER] on the centre of gravity toward both [SOLE] at the [LOWER_EXTREMITY] under [INJECTION], producing [STATIC_EQUILIBRIUM] at the origin, referring to [ST.C2.0.1]. [RT.C2.0.2] Performs [GRIP] on the [LINEAR_OBJECT] at the [FINGER] and [PALM] under [INJECTION], forming [MECHANICAL_GRIP] that reads the utility line, referring to [ST.C2.0.1]. [RT.C2.0.3] Executes latent [NARROW] at the [SHOULDER]"
    },
    {
      "code": "ST.C2.0.1",
      "prefix": "ST",
      "page": 17,
      "context": "ntre of gravity toward both [SOLE] at the [LOWER_EXTREMITY] under [INJECTION], producing [STATIC_EQUILIBRIUM] at the origin, referring to [ST.C2.0.1]. [RT.C2.0.2] Performs [GRIP] on the [LINEAR_OBJECT] at the [FINGER] and [PALM] under [INJECTION], forming [MECHANICAL_GRIP] that reads the utility line, referring to [ST.C2.0.1]. [RT.C2.0.3] Executes latent [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], producing [COMPRESSED_VOLUME] in pre-load, referring to [ST.C2.0.2]. [RT.C2.0.4] Performs sole scan at the [SOLE] under [ALERT], reading the di"
    },
    {
      "code": "RT.C2.0.2",
      "prefix": "RT",
      "page": 17,
      "context": "y toward both [SOLE] at the [LOWER_EXTREMITY] under [INJECTION], producing [STATIC_EQUILIBRIUM] at the origin, referring to [ST.C2.0.1]. [RT.C2.0.2] Performs [GRIP] on the [LINEAR_OBJECT] at the [FINGER] and [PALM] under [INJECTION], forming [MECHANICAL_GRIP] that reads the utility line, referring to [ST.C2.0.1]. [RT.C2.0.3] Executes latent [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], producing [COMPRESSED_VOLUME] in pre-load, referring to [ST.C2.0.2]. [RT.C2.0.4] Performs sole scan at the [SOLE] under [ALERT], reading the discontinuity of"
    },
    {
      "code": "ST.C2.0.1",
      "prefix": "ST",
      "page": 17,
      "context": "on the [LINEAR_OBJECT] at the [FINGER] and [PALM] under [INJECTION], forming [MECHANICAL_GRIP] that reads the utility line, referring to [ST.C2.0.1]. [RT.C2.0.3] Executes latent [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], producing [COMPRESSED_VOLUME] in pre-load, referring to [ST.C2.0.2]. [RT.C2.0.4] Performs sole scan at the [SOLE] under [ALERT], reading the discontinuity of the substrate before contact, referring to [ST.C2.0.3]. [RT.C2.0.5] Executes [FIXATE] along the [EYE] toward the merge-line under [FIXATION], holding [FIXATION_HOL"
    },
    {
      "code": "RT.C2.0.3",
      "prefix": "RT",
      "page": 17,
      "context": "R_OBJECT] at the [FINGER] and [PALM] under [INJECTION], forming [MECHANICAL_GRIP] that reads the utility line, referring to [ST.C2.0.1]. [RT.C2.0.3] Executes latent [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], producing [COMPRESSED_VOLUME] in pre-load, referring to [ST.C2.0.2]. [RT.C2.0.4] Performs sole scan at the [SOLE] under [ALERT], reading the discontinuity of the substrate before contact, referring to [ST.C2.0.3]. [RT.C2.0.5] Executes [FIXATE] along the [EYE] toward the merge-line under [FIXATION], holding [FIXATION_HOLD] at the regu"
    },
    {
      "code": "ST.C2.0.2",
      "prefix": "ST",
      "page": 17,
      "context": ".0.3] Executes latent [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], producing [COMPRESSED_VOLUME] in pre-load, referring to [ST.C2.0.2]. [RT.C2.0.4] Performs sole scan at the [SOLE] under [ALERT], reading the discontinuity of the substrate before contact, referring to [ST.C2.0.3]. [RT.C2.0.5] Executes [FIXATE] along the [EYE] toward the merge-line under [FIXATION], holding [FIXATION_HOLD] at the regulatory sign, referring to [ST.C2.0.6]. [RT.C2.0.6] Anticipates [BRACE] at the [PELVIS] under [ALERT], with weight-load latent, referring to [ST"
    },
    {
      "code": "RT.C2.0.4",
      "prefix": "RT",
      "page": 17,
      "context": "s latent [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], producing [COMPRESSED_VOLUME] in pre-load, referring to [ST.C2.0.2]. [RT.C2.0.4] Performs sole scan at the [SOLE] under [ALERT], reading the discontinuity of the substrate before contact, referring to [ST.C2.0.3]. [RT.C2.0.5] Executes [FIXATE] along the [EYE] toward the merge-line under [FIXATION], holding [FIXATION_HOLD] at the regulatory sign, referring to [ST.C2.0.6]. [RT.C2.0.6] Anticipates [BRACE] at the [PELVIS] under [ALERT], with weight-load latent, referring to [ST.C2.0.9]. [PH"
    },
    {
      "code": "ST.C2.0.3",
      "prefix": "ST",
      "page": 17,
      "context": ".2]. [RT.C2.0.4] Performs sole scan at the [SOLE] under [ALERT], reading the discontinuity of the substrate before contact, referring to [ST.C2.0.3]. [RT.C2.0.5] Executes [FIXATE] along the [EYE] toward the merge-line under [FIXATION], holding [FIXATION_HOLD] at the regulatory sign, referring to [ST.C2.0.6]. [RT.C2.0.6] Anticipates [BRACE] at the [PELVIS] under [ALERT], with weight-load latent, referring to [ST.C2.0.9]. [PHASE 2] LINEAR TRAJECTORY \u00b7 Score 02 The body traverses the fourteen-metre corridor across five checkpoints, from the utility line to"
    },
    {
      "code": "RT.C2.0.5",
      "prefix": "RT",
      "page": 17,
      "context": ".4] Performs sole scan at the [SOLE] under [ALERT], reading the discontinuity of the substrate before contact, referring to [ST.C2.0.3]. [RT.C2.0.5] Executes [FIXATE] along the [EYE] toward the merge-line under [FIXATION], holding [FIXATION_HOLD] at the regulatory sign, referring to [ST.C2.0.6]. [RT.C2.0.6] Anticipates [BRACE] at the [PELVIS] under [ALERT], with weight-load latent, referring to [ST.C2.0.9]. [PHASE 2] LINEAR TRAJECTORY \u00b7 Score 02 The body traverses the fourteen-metre corridor across five checkpoints, from the utility line to the merge term"
    },
    {
      "code": "ST.C2.0.6",
      "prefix": "ST",
      "page": 17,
      "context": "5] Executes [FIXATE] along the [EYE] toward the merge-line under [FIXATION], holding [FIXATION_HOLD] at the regulatory sign, referring to [ST.C2.0.6]. [RT.C2.0.6] Anticipates [BRACE] at the [PELVIS] under [ALERT], with weight-load latent, referring to [ST.C2.0.9]. [PHASE 2] LINEAR TRAJECTORY \u00b7 Score 02 The body traverses the fourteen-metre corridor across five checkpoints, from the utility line to the merge terminus. Every row below is a single score-text sentence built from declared tokens. [C2.1] Initial Traction \u00b7 Utility Corridor DATA PROVOCATION \u00b7 RA"
    },
    {
      "code": "RT.C2.0.6",
      "prefix": "RT",
      "page": 17,
      "context": "FIXATE] along the [EYE] toward the merge-line under [FIXATION], holding [FIXATION_HOLD] at the regulatory sign, referring to [ST.C2.0.6]. [RT.C2.0.6] Anticipates [BRACE] at the [PELVIS] under [ALERT], with weight-load latent, referring to [ST.C2.0.9]. [PHASE 2] LINEAR TRAJECTORY \u00b7 Score 02 The body traverses the fourteen-metre corridor across five checkpoints, from the utility line to the merge terminus. Every row below is a single score-text sentence built from declared tokens. [C2.1] Initial Traction \u00b7 Utility Corridor DATA PROVOCATION \u00b7 RAW DATA [DP.C2"
    },
    {
      "code": "ST.C2.0.9",
      "prefix": "ST",
      "page": 17,
      "context": "ory sign, referring to [ST.C2.0.6]. [RT.C2.0.6] Anticipates [BRACE] at the [PELVIS] under [ALERT], with weight-load latent, referring to [ST.C2.0.9]. [PHASE 2] LINEAR TRAJECTORY \u00b7 Score 02 The body traverses the fourteen-metre corridor across five checkpoints, from the utility line to the merge terminus. Every row below is a single score-text sentence built from declared tokens. [C2.1] Initial Traction \u00b7 Utility Corridor DATA PROVOCATION \u00b7 RAW DATA [DP.C2.1.1] source=Mapillary | type=feature | distance=\u00b10.0m | feature=object | value=\"object--support--util"
    },
    {
      "code": "DP.C2.1.1",
      "prefix": "DP",
      "page": 17,
      "context": "below is a single score-text sentence built from declared tokens. [C2.1] Initial Traction \u00b7 Utility Corridor DATA PROVOCATION \u00b7 RAW DATA [DP.C2.1.1] source=Mapillary | type=feature | distance=\u00b10.0m | feature=object | value=\"object--support--utility-pole\" [DP.C2.1.2] source=Mapillary | type=feature | distance=\u00b12.10m | feature=object | value=\"object--trash-can\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.1.1] Declares [SYSTEM] Score 02 cursor initiation at Node_A, in grid transit with cursor forward. [ST.C2.1.2] Reads one [SOLID_MASS_OBJECT] v"
    },
    {
      "code": "DP.C2.1.2",
      "prefix": "DP",
      "page": 17,
      "context": "OCATION \u00b7 RAW DATA [DP.C2.1.1] source=Mapillary | type=feature | distance=\u00b10.0m | feature=object | value=\"object--support--utility-pole\" [DP.C2.1.2] source=Mapillary | type=feature | distance=\u00b12.10m | feature=object | value=\"object--trash-can\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.1.1] Declares [SYSTEM] Score 02 cursor initiation at Node_A, in grid transit with cursor forward. [ST.C2.1.2] Reads one [SOLID_MASS_OBJECT] vertical at origin as first anchor under [MASS], with shoulder against the pole in initial traction. [ST.C2.1.3] Reads"
    },
    {
      "code": "ST.C2.1.1",
      "prefix": "ST",
      "page": 17,
      "context": "apillary | type=feature | distance=\u00b12.10m | feature=object | value=\"object--trash-can\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.1.1] Declares [SYSTEM] Score 02 cursor initiation at Node_A, in grid transit with cursor forward. [ST.C2.1.2] Reads one [SOLID_MASS_OBJECT] vertical at origin as first anchor under [MASS], with shoulder against the pole in initial traction. [ST.C2.1.3] Reads one [SOLID_MASS_OBJECT] low at \u00b12.10 metres under [MASS], the shoulder pass acknowledging the volumetric receiver. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 S"
    },
    {
      "code": "ST.C2.1.2",
      "prefix": "ST",
      "page": 17,
      "context": "L SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.1.1] Declares [SYSTEM] Score 02 cursor initiation at Node_A, in grid transit with cursor forward. [ST.C2.1.2] Reads one [SOLID_MASS_OBJECT] vertical at origin as first anchor under [MASS], with shoulder against the pole in initial traction. [ST.C2.1.3] Reads one [SOLID_MASS_OBJECT] low at \u00b12.10 metres under [MASS], the shoulder pass acknowledging the volumetric receiver. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.1.1] Executes [STEP] forward with load transfer at the [SOLE] and [PELVIS] under [ACCELER"
    },
    {
      "code": "ST.C2.1.3",
      "prefix": "ST",
      "page": 17,
      "context": ".1.2] Reads one [SOLID_MASS_OBJECT] vertical at origin as first anchor under [MASS], with shoulder against the pole in initial traction. [ST.C2.1.3] Reads one [SOLID_MASS_OBJECT] low at \u00b12.10 metres under [MASS], the shoulder pass acknowledging the volumetric receiver. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.1.1] Executes [STEP] forward with load transfer at the [SOLE] and [PELVIS] under [ACCELERATION], with tonus active and weight loading forward, referring to [ST.C2.1.1]. [RT.C2.1.2] Performs shoulder pass at the [SHOULDER] and [SCAPUL"
    },
    {
      "code": "RT.C2.1.1",
      "prefix": "RT",
      "page": 17,
      "context": "at \u00b12.10 metres under [MASS], the shoulder pass acknowledging the volumetric receiver. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.1.1] Executes [STEP] forward with load transfer at the [SOLE] and [PELVIS] under [ACCELERATION], with tonus active and weight loading forward, referring to [ST.C2.1.1]. [RT.C2.1.2] Performs shoulder pass at the [SHOULDER] and [SCAPULA] against the utility pole under [ALERT], producing [STANCE_PIVOT] around the anchor, referring to [ST.C2.1.2]. [C2.2] Sub-Surface Footing DATA PROVOCATION \u00b7 RAW DATA [DP.C2.2.1] sou"
    },
    {
      "code": "ST.C2.1.1",
      "prefix": "ST",
      "page": 17,
      "context": "EP] forward with load transfer at the [SOLE] and [PELVIS] under [ACCELERATION], with tonus active and weight loading forward, referring to [ST.C2.1.1]. [RT.C2.1.2] Performs shoulder pass at the [SHOULDER] and [SCAPULA] against the utility pole under [ALERT], producing [STANCE_PIVOT] around the anchor, referring to [ST.C2.1.2]. [C2.2] Sub-Surface Footing DATA PROVOCATION \u00b7 RAW DATA [DP.C2.2.1] source=Mapillary | type=feature | distance=\u00b13.20m | feature=object | value=\"object--manhole\" [DP.C2.2.2] source=Mapillary | type=feature | distance=\u00b15.50m | feature=o"
    },
    {
      "code": "RT.C2.1.2",
      "prefix": "RT",
      "page": 17,
      "context": "th load transfer at the [SOLE] and [PELVIS] under [ACCELERATION], with tonus active and weight loading forward, referring to [ST.C2.1.1]. [RT.C2.1.2] Performs shoulder pass at the [SHOULDER] and [SCAPULA] against the utility pole under [ALERT], producing [STANCE_PIVOT] around the anchor, referring to [ST.C2.1.2]. [C2.2] Sub-Surface Footing DATA PROVOCATION \u00b7 RAW DATA [DP.C2.2.1] source=Mapillary | type=feature | distance=\u00b13.20m | feature=object | value=\"object--manhole\" [DP.C2.2.2] source=Mapillary | type=feature | distance=\u00b15.50m | feature=object | value"
    },
    {
      "code": "ST.C2.1.2",
      "prefix": "ST",
      "page": 17,
      "context": "lder pass at the [SHOULDER] and [SCAPULA] against the utility pole under [ALERT], producing [STANCE_PIVOT] around the anchor, referring to [ST.C2.1.2]. [C2.2] Sub-Surface Footing DATA PROVOCATION \u00b7 RAW DATA [DP.C2.2.1] source=Mapillary | type=feature | distance=\u00b13.20m | feature=object | value=\"object--manhole\" [DP.C2.2.2] source=Mapillary | type=feature | distance=\u00b15.50m | feature=object | value=\"object--support--utility-pole\" SITUATION \u00b7 SPATIAL SCORE"
    },
    {
      "code": "DP.C2.2.1",
      "prefix": "DP",
      "page": 17,
      "context": "r [ALERT], producing [STANCE_PIVOT] around the anchor, referring to [ST.C2.1.2]. [C2.2] Sub-Surface Footing DATA PROVOCATION \u00b7 RAW DATA [DP.C2.2.1] source=Mapillary | type=feature | distance=\u00b13.20m | feature=object | value=\"object--manhole\" [DP.C2.2.2] source=Mapillary | type=feature | distance=\u00b15.50m | feature=object | value=\"object--support--utility-pole\" SITUATION \u00b7 SPATIAL SCORE"
    },
    {
      "code": "DP.C2.2.2",
      "prefix": "DP",
      "page": 17,
      "context": "ng DATA PROVOCATION \u00b7 RAW DATA [DP.C2.2.1] source=Mapillary | type=feature | distance=\u00b13.20m | feature=object | value=\"object--manhole\" [DP.C2.2.2] source=Mapillary | type=feature | distance=\u00b15.50m | feature=object | value=\"object--support--utility-pole\" SITUATION \u00b7 SPATIAL SCORE"
    },
    {
      "code": "ST.C2.2.1",
      "prefix": "ST",
      "page": 18,
      "context": "CODE SCORE \u00b7 SENTENCE [ST.C2.2.1] Places one [GROUND_TEXTURE_OBJECT] at \u00b13.20 metres as metal cover under [ELEVATION], with foot reading the sub-surface discontinuity. [ST.C2.2.2] Places one [SOLID_MASS_OBJECT] vertical at \u00b15.50 metres as adjacent anchor under [MASS], the substrate is not continuous. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.2.1] Executes sole absorption at the [SOLE] and [KNEE] under [ALERT], producing contai"
    },
    {
      "code": "ST.C2.2.2",
      "prefix": "ST",
      "page": 18,
      "context": "1] Places one [GROUND_TEXTURE_OBJECT] at \u00b13.20 metres as metal cover under [ELEVATION], with foot reading the sub-surface discontinuity. [ST.C2.2.2] Places one [SOLID_MASS_OBJECT] vertical at \u00b15.50 metres as adjacent anchor under [MASS], the substrate is not continuous. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.2.1] Executes sole absorption at the [SOLE] and [KNEE] under [ALERT], producing contained [SLIP_POTENTIAL], referring to [ST.C2.2.1]. [RT.C2.2.2] Performs [RECOVER] at the [PELVIS] and [LUMBAR] spine under [CONSTANT], with balance"
    },
    {
      "code": "RT.C2.2.1",
      "prefix": "RT",
      "page": 18,
      "context": "ical at \u00b15.50 metres as adjacent anchor under [MASS], the substrate is not continuous. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.2.1] Executes sole absorption at the [SOLE] and [KNEE] under [ALERT], producing contained [SLIP_POTENTIAL], referring to [ST.C2.2.1]. [RT.C2.2.2] Performs [RECOVER] at the [PELVIS] and [LUMBAR] spine under [CONSTANT], with balance re-set, referring to [ST.C2.2.2]. [C2.3] Driveway Tilt DATA PROVOCATION \u00b7 RAW DATA [DP.C2.3.1] source=Mapillary | type=feature | distance=\u00b17.80m | feature=construction | value=\"constru"
    },
    {
      "code": "ST.C2.2.1",
      "prefix": "ST",
      "page": 18,
      "context": "SENTENCE [RT.C2.2.1] Executes sole absorption at the [SOLE] and [KNEE] under [ALERT], producing contained [SLIP_POTENTIAL], referring to [ST.C2.2.1]. [RT.C2.2.2] Performs [RECOVER] at the [PELVIS] and [LUMBAR] spine under [CONSTANT], with balance re-set, referring to [ST.C2.2.2]. [C2.3] Driveway Tilt DATA PROVOCATION \u00b7 RAW DATA [DP.C2.3.1] source=Mapillary | type=feature | distance=\u00b17.80m | feature=construction | value=\"construction--flat--driveway\" [DP.C2.3.2] source=Mapillary | type=feature | distance=\u00b19.15m | feature=regulatory | value=\"regulatory--m"
    },
    {
      "code": "RT.C2.2.2",
      "prefix": "RT",
      "page": 18,
      "context": "C2.2.1] Executes sole absorption at the [SOLE] and [KNEE] under [ALERT], producing contained [SLIP_POTENTIAL], referring to [ST.C2.2.1]. [RT.C2.2.2] Performs [RECOVER] at the [PELVIS] and [LUMBAR] spine under [CONSTANT], with balance re-set, referring to [ST.C2.2.2]. [C2.3] Driveway Tilt DATA PROVOCATION \u00b7 RAW DATA [DP.C2.3.1] source=Mapillary | type=feature | distance=\u00b17.80m | feature=construction | value=\"construction--flat--driveway\" [DP.C2.3.2] source=Mapillary | type=feature | distance=\u00b19.15m | feature=regulatory | value=\"regulatory--merge--g1\" SIT"
    },
    {
      "code": "ST.C2.2.2",
      "prefix": "ST",
      "page": 18,
      "context": "ng to [ST.C2.2.1]. [RT.C2.2.2] Performs [RECOVER] at the [PELVIS] and [LUMBAR] spine under [CONSTANT], with balance re-set, referring to [ST.C2.2.2]. [C2.3] Driveway Tilt DATA PROVOCATION \u00b7 RAW DATA [DP.C2.3.1] source=Mapillary | type=feature | distance=\u00b17.80m | feature=construction | value=\"construction--flat--driveway\" [DP.C2.3.2] source=Mapillary | type=feature | distance=\u00b19.15m | feature=regulatory | value=\"regulatory--merge--g1\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.3.1] Places one [TEXTURE_OBJECT] at \u00b17.80 metres under [ELEVATIO"
    },
    {
      "code": "DP.C2.3.1",
      "prefix": "DP",
      "page": 18,
      "context": "S] and [LUMBAR] spine under [CONSTANT], with balance re-set, referring to [ST.C2.2.2]. [C2.3] Driveway Tilt DATA PROVOCATION \u00b7 RAW DATA [DP.C2.3.1] source=Mapillary | type=feature | distance=\u00b17.80m | feature=construction | value=\"construction--flat--driveway\" [DP.C2.3.2] source=Mapillary | type=feature | distance=\u00b19.15m | feature=regulatory | value=\"regulatory--merge--g1\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.3.1] Places one [TEXTURE_OBJECT] at \u00b17.80 metres under [ELEVATION], with slope descending, the pelvis rotates against the inclin"
    },
    {
      "code": "DP.C2.3.2",
      "prefix": "DP",
      "page": 18,
      "context": "N \u00b7 RAW DATA [DP.C2.3.1] source=Mapillary | type=feature | distance=\u00b17.80m | feature=construction | value=\"construction--flat--driveway\" [DP.C2.3.2] source=Mapillary | type=feature | distance=\u00b19.15m | feature=regulatory | value=\"regulatory--merge--g1\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.3.1] Places one [TEXTURE_OBJECT] at \u00b17.80 metres under [ELEVATION], with slope descending, the pelvis rotates against the incline. [ST.C2.3.2] Reads one [REGULATORY_OBJECT] at \u00b19.15 metres under [AUTHORITY], applying direction=merge imposed, the route"
    },
    {
      "code": "ST.C2.3.1",
      "prefix": "ST",
      "page": 18,
      "context": "| type=feature | distance=\u00b19.15m | feature=regulatory | value=\"regulatory--merge--g1\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.3.1] Places one [TEXTURE_OBJECT] at \u00b17.80 metres under [ELEVATION], with slope descending, the pelvis rotates against the incline. [ST.C2.3.2] Reads one [REGULATORY_OBJECT] at \u00b19.15 metres under [AUTHORITY], applying direction=merge imposed, the route narrows toward convergence. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.3.1] Executes [ROTATE] on the incline at the [PELVIS] and [SPINE] under [ASYMME"
    },
    {
      "code": "ST.C2.3.2",
      "prefix": "ST",
      "page": 18,
      "context": "ST.C2.3.1] Places one [TEXTURE_OBJECT] at \u00b17.80 metres under [ELEVATION], with slope descending, the pelvis rotates against the incline. [ST.C2.3.2] Reads one [REGULATORY_OBJECT] at \u00b19.15 metres under [AUTHORITY], applying direction=merge imposed, the route narrows toward convergence. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.3.1] Executes [ROTATE] on the incline at the [PELVIS] and [SPINE] under [ASYMMETRIC], with trunk vertical and right side loading earlier, referring to [ST.C2.3.1]. [RT.C2.3.2] Performs [MERGE] preparation at the [SPIN"
    },
    {
      "code": "RT.C2.3.1",
      "prefix": "RT",
      "page": 18,
      "context": "r [AUTHORITY], applying direction=merge imposed, the route narrows toward convergence. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.3.1] Executes [ROTATE] on the incline at the [PELVIS] and [SPINE] under [ASYMMETRIC], with trunk vertical and right side loading earlier, referring to [ST.C2.3.1]. [RT.C2.3.2] Performs [MERGE] preparation at the [SPINE] and [PELVIS] under [ALERT], with cursor pre-aligned toward the convergence line, referring to [ST.C2.3.2]. [C2.4] Merge Authority \u00b7 Arterial Convergence DATA PROVOCATION \u00b7 RAW DATA [DP.C2.4.1] sou"
    },
    {
      "code": "ST.C2.3.1",
      "prefix": "ST",
      "page": 18,
      "context": "s [ROTATE] on the incline at the [PELVIS] and [SPINE] under [ASYMMETRIC], with trunk vertical and right side loading earlier, referring to [ST.C2.3.1]. [RT.C2.3.2] Performs [MERGE] preparation at the [SPINE] and [PELVIS] under [ALERT], with cursor pre-aligned toward the convergence line, referring to [ST.C2.3.2]. [C2.4] Merge Authority \u00b7 Arterial Convergence DATA PROVOCATION \u00b7 RAW DATA [DP.C2.4.1] source=Mapillary | type=feature | distance=\u00b110.40m | feature=object | value=\"object--traffic-cone\" [DP.C2.4.2] source=Mapillary | type=feature | distance=\u00b111.90m"
    },
    {
      "code": "RT.C2.3.2",
      "prefix": "RT",
      "page": 18,
      "context": "the incline at the [PELVIS] and [SPINE] under [ASYMMETRIC], with trunk vertical and right side loading earlier, referring to [ST.C2.3.1]. [RT.C2.3.2] Performs [MERGE] preparation at the [SPINE] and [PELVIS] under [ALERT], with cursor pre-aligned toward the convergence line, referring to [ST.C2.3.2]. [C2.4] Merge Authority \u00b7 Arterial Convergence DATA PROVOCATION \u00b7 RAW DATA [DP.C2.4.1] source=Mapillary | type=feature | distance=\u00b110.40m | feature=object | value=\"object--traffic-cone\" [DP.C2.4.2] source=Mapillary | type=feature | distance=\u00b111.90m | feature=obj"
    },
    {
      "code": "ST.C2.3.2",
      "prefix": "ST",
      "page": 18,
      "context": "Performs [MERGE] preparation at the [SPINE] and [PELVIS] under [ALERT], with cursor pre-aligned toward the convergence line, referring to [ST.C2.3.2]. [C2.4] Merge Authority \u00b7 Arterial Convergence DATA PROVOCATION \u00b7 RAW DATA [DP.C2.4.1] source=Mapillary | type=feature | distance=\u00b110.40m | feature=object | value=\"object--traffic-cone\" [DP.C2.4.2] source=Mapillary | type=feature | distance=\u00b111.90m | feature=object | value=\"object--sign--advertisement\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.4.1] Places one [SOLID_MASS_OBJECT] knee-high at"
    },
    {
      "code": "DP.C2.4.1",
      "prefix": "DP",
      "page": 18,
      "context": "aligned toward the convergence line, referring to [ST.C2.3.2]. [C2.4] Merge Authority \u00b7 Arterial Convergence DATA PROVOCATION \u00b7 RAW DATA [DP.C2.4.1] source=Mapillary | type=feature | distance=\u00b110.40m | feature=object | value=\"object--traffic-cone\" [DP.C2.4.2] source=Mapillary | type=feature | distance=\u00b111.90m | feature=object | value=\"object--sign--advertisement\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.4.1] Places one [SOLID_MASS_OBJECT] knee-high at \u00b110.40 metres under [MASS], the corridor channelled by the traffic-cone. [ST.C2.4.2] Re"
    },
    {
      "code": "DP.C2.4.2",
      "prefix": "DP",
      "page": 18,
      "context": "TA PROVOCATION \u00b7 RAW DATA [DP.C2.4.1] source=Mapillary | type=feature | distance=\u00b110.40m | feature=object | value=\"object--traffic-cone\" [DP.C2.4.2] source=Mapillary | type=feature | distance=\u00b111.90m | feature=object | value=\"object--sign--advertisement\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.4.1] Places one [SOLID_MASS_OBJECT] knee-high at \u00b110.40 metres under [MASS], the corridor channelled by the traffic-cone. [ST.C2.4.2] Reads one [SEMANTIC_OBJECT] at \u00b111.90 metres under [SEMANTIC], with gaze competing with the trajectory at eye leve"
    },
    {
      "code": "ST.C2.4.1",
      "prefix": "ST",
      "page": 18,
      "context": "type=feature | distance=\u00b111.90m | feature=object | value=\"object--sign--advertisement\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.4.1] Places one [SOLID_MASS_OBJECT] knee-high at \u00b110.40 metres under [MASS], the corridor channelled by the traffic-cone. [ST.C2.4.2] Reads one [SEMANTIC_OBJECT] at \u00b111.90 metres under [SEMANTIC], with gaze competing with the trajectory at eye level, reading and moving happen at the same time. BODY IMPULSE \u00b7 BODY SCORE"
    },
    {
      "code": "ST.C2.4.2",
      "prefix": "ST",
      "page": 18,
      "context": "NTENCE [ST.C2.4.1] Places one [SOLID_MASS_OBJECT] knee-high at \u00b110.40 metres under [MASS], the corridor channelled by the traffic-cone. [ST.C2.4.2] Reads one [SEMANTIC_OBJECT] at \u00b111.90 metres under [SEMANTIC], with gaze competing with the trajectory at eye level, reading and moving happen at the same time. BODY IMPULSE \u00b7 BODY SCORE"
    },
    {
      "code": "RT.C2.4.1",
      "prefix": "RT",
      "page": 19,
      "context": "CODE SCORE \u00b7 SENTENCE [RT.C2.4.1] Executes [NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], producing [COMPRESSED_VOLUME] threaded through the cone corridor, referring to [ST.C2.4.1]. [RT.C2.4.2] Performs [FIXATE] with micro [ROTATE] at the [CERVICAL] spine and [EYE] under [FIXATION], producing [FIXATION_HOLD] that competes with forward motion, referring to [ST.C2.4.2]. [C2.5] Node B \u00b7 Final Contact DATA PROVOCATION \u00b7 RAW DATA [D"
    },
    {
      "code": "ST.C2.4.1",
      "prefix": "ST",
      "page": 19,
      "context": "[NARROW] at the [SHOULDER] and [ELBOW] under [COMPRESSION], producing [COMPRESSED_VOLUME] threaded through the cone corridor, referring to [ST.C2.4.1]. [RT.C2.4.2] Performs [FIXATE] with micro [ROTATE] at the [CERVICAL] spine and [EYE] under [FIXATION], producing [FIXATION_HOLD] that competes with forward motion, referring to [ST.C2.4.2]. [C2.5] Node B \u00b7 Final Contact DATA PROVOCATION \u00b7 RAW DATA [DP.C2.5.1] source=Mapillary | type=feature | distance=\u00b113.55m | feature=regulatory | value=\"regulatory--weight-limit--g1\" [DP.C2.5.2] source=Mapillary | type=fea"
    },
    {
      "code": "RT.C2.4.2",
      "prefix": "RT",
      "page": 19,
      "context": "e [SHOULDER] and [ELBOW] under [COMPRESSION], producing [COMPRESSED_VOLUME] threaded through the cone corridor, referring to [ST.C2.4.1]. [RT.C2.4.2] Performs [FIXATE] with micro [ROTATE] at the [CERVICAL] spine and [EYE] under [FIXATION], producing [FIXATION_HOLD] that competes with forward motion, referring to [ST.C2.4.2]. [C2.5] Node B \u00b7 Final Contact DATA PROVOCATION \u00b7 RAW DATA [DP.C2.5.1] source=Mapillary | type=feature | distance=\u00b113.55m | feature=regulatory | value=\"regulatory--weight-limit--g1\" [DP.C2.5.2] source=Mapillary | type=feature | distanc"
    },
    {
      "code": "ST.C2.4.2",
      "prefix": "ST",
      "page": 19,
      "context": "ro [ROTATE] at the [CERVICAL] spine and [EYE] under [FIXATION], producing [FIXATION_HOLD] that competes with forward motion, referring to [ST.C2.4.2]. [C2.5] Node B \u00b7 Final Contact DATA PROVOCATION \u00b7 RAW DATA [DP.C2.5.1] source=Mapillary | type=feature | distance=\u00b113.55m | feature=regulatory | value=\"regulatory--weight-limit--g1\" [DP.C2.5.2] source=Mapillary | type=feature | distance=\u00b114.00m | feature=bounds | value=\"Node_B terminal\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.5.1] Reads one [REGULATORY_OBJECT] at \u00b113.55 metres under [AUTHOR"
    },
    {
      "code": "DP.C2.5.1",
      "prefix": "DP",
      "page": 19,
      "context": "[FIXATION_HOLD] that competes with forward motion, referring to [ST.C2.4.2]. [C2.5] Node B \u00b7 Final Contact DATA PROVOCATION \u00b7 RAW DATA [DP.C2.5.1] source=Mapillary | type=feature | distance=\u00b113.55m | feature=regulatory | value=\"regulatory--weight-limit--g1\" [DP.C2.5.2] source=Mapillary | type=feature | distance=\u00b114.00m | feature=bounds | value=\"Node_B terminal\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.5.1] Reads one [REGULATORY_OBJECT] at \u00b113.55 metres under [AUTHORITY], applying weight-limit declared, the field closes at the merge termi"
    },
    {
      "code": "DP.C2.5.2",
      "prefix": "DP",
      "page": 19,
      "context": "ON \u00b7 RAW DATA [DP.C2.5.1] source=Mapillary | type=feature | distance=\u00b113.55m | feature=regulatory | value=\"regulatory--weight-limit--g1\" [DP.C2.5.2] source=Mapillary | type=feature | distance=\u00b114.00m | feature=bounds | value=\"Node_B terminal\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.5.1] Reads one [REGULATORY_OBJECT] at \u00b113.55 metres under [AUTHORITY], applying weight-limit declared, the field closes at the merge terminus. [ST.C2.5.2] Declares [SYSTEM] Node_B reached, with route complete and cursor arrived, the body carries residual load."
    },
    {
      "code": "ST.C2.5.1",
      "prefix": "ST",
      "page": 19,
      "context": "Mapillary | type=feature | distance=\u00b114.00m | feature=bounds | value=\"Node_B terminal\" SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.5.1] Reads one [REGULATORY_OBJECT] at \u00b113.55 metres under [AUTHORITY], applying weight-limit declared, the field closes at the merge terminus. [ST.C2.5.2] Declares [SYSTEM] Node_B reached, with route complete and cursor arrived, the body carries residual load. [ST.C2.5.3] Reads one [LINEAR_OBJECT] held in contact with tension release pending, the utility line has not been let go. [ST.C2.5.4] Holds [FIXATION_HOL"
    },
    {
      "code": "ST.C2.5.2",
      "prefix": "ST",
      "page": 19,
      "context": "Reads one [REGULATORY_OBJECT] at \u00b113.55 metres under [AUTHORITY], applying weight-limit declared, the field closes at the merge terminus. [ST.C2.5.2] Declares [SYSTEM] Node_B reached, with route complete and cursor arrived, the body carries residual load. [ST.C2.5.3] Reads one [LINEAR_OBJECT] held in contact with tension release pending, the utility line has not been let go. [ST.C2.5.4] Holds [FIXATION_HOLD] at the weight-limit sign, the terminal object is read even as the body stops. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.5.1] Execut"
    },
    {
      "code": "ST.C2.5.3",
      "prefix": "ST",
      "page": 19,
      "context": "e merge terminus. [ST.C2.5.2] Declares [SYSTEM] Node_B reached, with route complete and cursor arrived, the body carries residual load. [ST.C2.5.3] Reads one [LINEAR_OBJECT] held in contact with tension release pending, the utility line has not been let go. [ST.C2.5.4] Holds [FIXATION_HOLD] at the weight-limit sign, the terminal object is read even as the body stops. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.5.1] Executes [FIXATE] with micro [ROTATE] at the [CERVICAL] spine and [EYE] under [FIXATION], producing [FIXATION_HOLD] on the reg"
    },
    {
      "code": "ST.C2.5.4",
      "prefix": "ST",
      "page": 19,
      "context": "esidual load. [ST.C2.5.3] Reads one [LINEAR_OBJECT] held in contact with tension release pending, the utility line has not been let go. [ST.C2.5.4] Holds [FIXATION_HOLD] at the weight-limit sign, the terminal object is read even as the body stops. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.5.1] Executes [FIXATE] with micro [ROTATE] at the [CERVICAL] spine and [EYE] under [FIXATION], producing [FIXATION_HOLD] on the regulatory sign, referring to [ST.C2.5.1]. [RT.C2.5.2] Performs weight-aware [HOLD] on the [LINEAR_OBJECT] at the [FINGER] and"
    },
    {
      "code": "RT.C2.5.1",
      "prefix": "RT",
      "page": 19,
      "context": "ON_HOLD] at the weight-limit sign, the terminal object is read even as the body stops. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.5.1] Executes [FIXATE] with micro [ROTATE] at the [CERVICAL] spine and [EYE] under [FIXATION], producing [FIXATION_HOLD] on the regulatory sign, referring to [ST.C2.5.1]. [RT.C2.5.2] Performs weight-aware [HOLD] on the [LINEAR_OBJECT] at the [FINGER] and [PALM] under [CONSTANT], with tonus at threshold and load calibrated, referring to [ST.C2.5.2]. [RT.C2.5.3] Executes [DECELERATE] with [BRACE] at the [SPINE] and"
    },
    {
      "code": "ST.C2.5.1",
      "prefix": "ST",
      "page": 19,
      "context": "TE] with micro [ROTATE] at the [CERVICAL] spine and [EYE] under [FIXATION], producing [FIXATION_HOLD] on the regulatory sign, referring to [ST.C2.5.1]. [RT.C2.5.2] Performs weight-aware [HOLD] on the [LINEAR_OBJECT] at the [FINGER] and [PALM] under [CONSTANT], with tonus at threshold and load calibrated, referring to [ST.C2.5.2]. [RT.C2.5.3] Executes [DECELERATE] with [BRACE] at the [SPINE] and [CG] under [ALERT], with cursor arrived, referring to [ST.C2.5.3]. [RT.C2.5.4] Sustains [HOLD] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT],"
    },
    {
      "code": "RT.C2.5.2",
      "prefix": "RT",
      "page": 19,
      "context": "[ROTATE] at the [CERVICAL] spine and [EYE] under [FIXATION], producing [FIXATION_HOLD] on the regulatory sign, referring to [ST.C2.5.1]. [RT.C2.5.2] Performs weight-aware [HOLD] on the [LINEAR_OBJECT] at the [FINGER] and [PALM] under [CONSTANT], with tonus at threshold and load calibrated, referring to [ST.C2.5.2]. [RT.C2.5.3] Executes [DECELERATE] with [BRACE] at the [SPINE] and [CG] under [ALERT], with cursor arrived, referring to [ST.C2.5.3]. [RT.C2.5.4] Sustains [HOLD] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], held in [MECHA"
    },
    {
      "code": "ST.C2.5.2",
      "prefix": "ST",
      "page": 19,
      "context": "aware [HOLD] on the [LINEAR_OBJECT] at the [FINGER] and [PALM] under [CONSTANT], with tonus at threshold and load calibrated, referring to [ST.C2.5.2]. [RT.C2.5.3] Executes [DECELERATE] with [BRACE] at the [SPINE] and [CG] under [ALERT], with cursor arrived, referring to [ST.C2.5.3]. [RT.C2.5.4] Sustains [HOLD] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], held in [MECHANICAL_GRIP] with weight-aware release still pending, referring to [ST.C2.5.4]. [PHASE 02] END STATE \u00b7 Score 02 At the end of the linear trajectory the body arrives at"
    },
    {
      "code": "RT.C2.5.3",
      "prefix": "RT",
      "page": 19,
      "context": "n the [LINEAR_OBJECT] at the [FINGER] and [PALM] under [CONSTANT], with tonus at threshold and load calibrated, referring to [ST.C2.5.2]. [RT.C2.5.3] Executes [DECELERATE] with [BRACE] at the [SPINE] and [CG] under [ALERT], with cursor arrived, referring to [ST.C2.5.3]. [RT.C2.5.4] Sustains [HOLD] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], held in [MECHANICAL_GRIP] with weight-aware release still pending, referring to [ST.C2.5.4]. [PHASE 02] END STATE \u00b7 Score 02 At the end of the linear trajectory the body arrives at Node_B on the"
    },
    {
      "code": "ST.C2.5.3",
      "prefix": "ST",
      "page": 19,
      "context": "to [ST.C2.5.2]. [RT.C2.5.3] Executes [DECELERATE] with [BRACE] at the [SPINE] and [CG] under [ALERT], with cursor arrived, referring to [ST.C2.5.3]. [RT.C2.5.4] Sustains [HOLD] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], held in [MECHANICAL_GRIP] with weight-aware release still pending, referring to [ST.C2.5.4]. [PHASE 02] END STATE \u00b7 Score 02 At the end of the linear trajectory the body arrives at Node_B on the Score 02 axis. The following register carries residues that must be preserved into iteration. OUTPUT END STATE \u00b7 OE CO"
    },
    {
      "code": "RT.C2.5.4",
      "prefix": "RT",
      "page": 19,
      "context": "]. [RT.C2.5.3] Executes [DECELERATE] with [BRACE] at the [SPINE] and [CG] under [ALERT], with cursor arrived, referring to [ST.C2.5.3]. [RT.C2.5.4] Sustains [HOLD] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], held in [MECHANICAL_GRIP] with weight-aware release still pending, referring to [ST.C2.5.4]. [PHASE 02] END STATE \u00b7 Score 02 At the end of the linear trajectory the body arrives at Node_B on the Score 02 axis. The following register carries residues that must be preserved into iteration. OUTPUT END STATE \u00b7 OE CODE END STATE"
    },
    {
      "code": "ST.C2.5.4",
      "prefix": "ST",
      "page": 19,
      "context": "NGER] and [PALM] on the [LINEAR_OBJECT] under [CONSTANT], held in [MECHANICAL_GRIP] with weight-aware release still pending, referring to [ST.C2.5.4]. [PHASE 02] END STATE \u00b7 Score 02 At the end of the linear trajectory the body arrives at Node_B on the Score 02 axis. The following register carries residues that must be preserved into iteration. OUTPUT END STATE \u00b7 OE CODE END STATE \u00b7 SENTENCE [OE.C2.END.1] Holds contact with the [LINEAR_OBJECT] maintained, producing [MECHANICAL_GRIP] that is weight-aware. [OE.C2.END.2] Holds gaze in residual [FIXATION],"
    },
    {
      "code": "OE.C2.END.1",
      "prefix": "OE",
      "page": 19,
      "context": "2 axis. The following register carries residues that must be preserved into iteration. OUTPUT END STATE \u00b7 OE CODE END STATE \u00b7 SENTENCE [OE.C2.END.1] Holds contact with the [LINEAR_OBJECT] maintained, producing [MECHANICAL_GRIP] that is weight-aware. [OE.C2.END.2] Holds gaze in residual [FIXATION], with head returned to neutral but a micro-delay remaining in the [CERVICAL] spine. [OE.C2.END.3] Holds posture narrow as residual, producing [COMPRESSED_VOLUME] not fully released."
    },
    {
      "code": "OE.C2.END.2",
      "prefix": "OE",
      "page": 19,
      "context": "END STATE \u00b7 SENTENCE [OE.C2.END.1] Holds contact with the [LINEAR_OBJECT] maintained, producing [MECHANICAL_GRIP] that is weight-aware. [OE.C2.END.2] Holds gaze in residual [FIXATION], with head returned to neutral but a micro-delay remaining in the [CERVICAL] spine. [OE.C2.END.3] Holds posture narrow as residual, producing [COMPRESSED_VOLUME] not fully released."
    },
    {
      "code": "OE.C2.END.3",
      "prefix": "OE",
      "page": 19,
      "context": "re. [OE.C2.END.2] Holds gaze in residual [FIXATION], with head returned to neutral but a micro-delay remaining in the [CERVICAL] spine. [OE.C2.END.3] Holds posture narrow as residual, producing [COMPRESSED_VOLUME] not fully released."
    },
    {
      "code": "OE.C2.END.4",
      "prefix": "OE",
      "page": 20,
      "context": "CODE END STATE \u00b7 SENTENCE [OE.C2.END.4] Holds direction toward merge as residual, producing residual [MERGE_PULL] in the [PELVIS]. [OE.C2.END.5] Declares [SYSTEM] the score awaiting its next command, opening either [ITERATION_BUFFER] or [NODE_TRANSFER]."
    },
    {
      "code": "OE.C2.END.5",
      "prefix": "OE",
      "page": 20,
      "context": "CODE END STATE \u00b7 SENTENCE [OE.C2.END.4] Holds direction toward merge as residual, producing residual [MERGE_PULL] in the [PELVIS]. [OE.C2.END.5] Declares [SYSTEM] the score awaiting its next command, opening either [ITERATION_BUFFER] or [NODE_TRANSFER]."
    },
    {
      "code": "KS.C2.6.1",
      "prefix": "KS",
      "page": 21,
      "context": "Object Insertion [C2.6] Iteration Register \u00b7 Impulse Variation and Object Insertion SOURCE CODE \u00b7 REGISTER (KS) CODE SOURCE \u00b7 SENTENCE [KS.C2.6.1] Carries all active checkpoints from [ST.C2.1] through [ST.C2.5], forming the source register that iteration must traverse at least once. [KS.C2.6.2] Re-activates the situation set : [ST.C2.1] Initial Traction, [ST.C2.2] Sub-Surface Footing, [ST.C2.3] Driveway Tilt, [ST.C2.4] Merge Authority, [ST.C2.5] Node B Final Contact. [KS.C2.6.3] Re-activates the impulse set under [ACCELERATION], [COMPRESSION], [GLITCH],"
    },
    {
      "code": "ST.C2.1",
      "prefix": "ST",
      "page": 21,
      "context": "ulse Variation and Object Insertion SOURCE CODE \u00b7 REGISTER (KS) CODE SOURCE \u00b7 SENTENCE [KS.C2.6.1] Carries all active checkpoints from [ST.C2.1] through [ST.C2.5], forming the source register that iteration must traverse at least once. [KS.C2.6.2] Re-activates the situation set : [ST.C2.1] Initial Traction, [ST.C2.2] Sub-Surface Footing, [ST.C2.3] Driveway Tilt, [ST.C2.4] Merge Authority, [ST.C2.5] Node B Final Contact. [KS.C2.6.3] Re-activates the impulse set under [ACCELERATION], [COMPRESSION], [GLITCH], [FIXATION], [ALERT] and [CONSTANT], already d"
    },
    {
      "code": "ST.C2.5",
      "prefix": "ST",
      "page": 21,
      "context": "Object Insertion SOURCE CODE \u00b7 REGISTER (KS) CODE SOURCE \u00b7 SENTENCE [KS.C2.6.1] Carries all active checkpoints from [ST.C2.1] through [ST.C2.5], forming the source register that iteration must traverse at least once. [KS.C2.6.2] Re-activates the situation set : [ST.C2.1] Initial Traction, [ST.C2.2] Sub-Surface Footing, [ST.C2.3] Driveway Tilt, [ST.C2.4] Merge Authority, [ST.C2.5] Node B Final Contact. [KS.C2.6.3] Re-activates the impulse set under [ACCELERATION], [COMPRESSION], [GLITCH], [FIXATION], [ALERT] and [CONSTANT], already declared in Phase 0"
    },
    {
      "code": "KS.C2.6.2",
      "prefix": "KS",
      "page": 21,
      "context": "Carries all active checkpoints from [ST.C2.1] through [ST.C2.5], forming the source register that iteration must traverse at least once. [KS.C2.6.2] Re-activates the situation set : [ST.C2.1] Initial Traction, [ST.C2.2] Sub-Surface Footing, [ST.C2.3] Driveway Tilt, [ST.C2.4] Merge Authority, [ST.C2.5] Node B Final Contact. [KS.C2.6.3] Re-activates the impulse set under [ACCELERATION], [COMPRESSION], [GLITCH], [FIXATION], [ALERT] and [CONSTANT], already declared in Phase 02. [KS.C2.6.4] Permits additional obstacles to enter the register during iteration wi"
    },
    {
      "code": "ST.C2.1",
      "prefix": "ST",
      "page": 21,
      "context": "through [ST.C2.5], forming the source register that iteration must traverse at least once. [KS.C2.6.2] Re-activates the situation set : [ST.C2.1] Initial Traction, [ST.C2.2] Sub-Surface Footing, [ST.C2.3] Driveway Tilt, [ST.C2.4] Merge Authority, [ST.C2.5] Node B Final Contact. [KS.C2.6.3] Re-activates the impulse set under [ACCELERATION], [COMPRESSION], [GLITCH], [FIXATION], [ALERT] and [CONSTANT], already declared in Phase 02. [KS.C2.6.4] Permits additional obstacles to enter the register during iteration without becoming new checkpoints. ACTIVE SIT"
    },
    {
      "code": "ST.C2.2",
      "prefix": "ST",
      "page": 21,
      "context": "the source register that iteration must traverse at least once. [KS.C2.6.2] Re-activates the situation set : [ST.C2.1] Initial Traction, [ST.C2.2] Sub-Surface Footing, [ST.C2.3] Driveway Tilt, [ST.C2.4] Merge Authority, [ST.C2.5] Node B Final Contact. [KS.C2.6.3] Re-activates the impulse set under [ACCELERATION], [COMPRESSION], [GLITCH], [FIXATION], [ALERT] and [CONSTANT], already declared in Phase 02. [KS.C2.6.4] Permits additional obstacles to enter the register during iteration without becoming new checkpoints. ACTIVE SITUATION CODES \u00b7 SPATIAL SCORE"
    },
    {
      "code": "ST.C2.3",
      "prefix": "ST",
      "page": 21,
      "context": "ion must traverse at least once. [KS.C2.6.2] Re-activates the situation set : [ST.C2.1] Initial Traction, [ST.C2.2] Sub-Surface Footing, [ST.C2.3] Driveway Tilt, [ST.C2.4] Merge Authority, [ST.C2.5] Node B Final Contact. [KS.C2.6.3] Re-activates the impulse set under [ACCELERATION], [COMPRESSION], [GLITCH], [FIXATION], [ALERT] and [CONSTANT], already declared in Phase 02. [KS.C2.6.4] Permits additional obstacles to enter the register during iteration without becoming new checkpoints. ACTIVE SITUATION CODES \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2"
    },
    {
      "code": "ST.C2.4",
      "prefix": "ST",
      "page": 21,
      "context": "t once. [KS.C2.6.2] Re-activates the situation set : [ST.C2.1] Initial Traction, [ST.C2.2] Sub-Surface Footing, [ST.C2.3] Driveway Tilt, [ST.C2.4] Merge Authority, [ST.C2.5] Node B Final Contact. [KS.C2.6.3] Re-activates the impulse set under [ACCELERATION], [COMPRESSION], [GLITCH], [FIXATION], [ALERT] and [CONSTANT], already declared in Phase 02. [KS.C2.6.4] Permits additional obstacles to enter the register during iteration without becoming new checkpoints. ACTIVE SITUATION CODES \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.6.1] Declares [SYSTEM]"
    },
    {
      "code": "ST.C2.5",
      "prefix": "ST",
      "page": 21,
      "context": "tivates the situation set : [ST.C2.1] Initial Traction, [ST.C2.2] Sub-Surface Footing, [ST.C2.3] Driveway Tilt, [ST.C2.4] Merge Authority, [ST.C2.5] Node B Final Contact. [KS.C2.6.3] Re-activates the impulse set under [ACCELERATION], [COMPRESSION], [GLITCH], [FIXATION], [ALERT] and [CONSTANT], already declared in Phase 02. [KS.C2.6.4] Permits additional obstacles to enter the register during iteration without becoming new checkpoints. ACTIVE SITUATION CODES \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.6.1] Declares [SYSTEM] the grid from Node_A to Nod"
    },
    {
      "code": "KS.C2.6.3",
      "prefix": "KS",
      "page": 21,
      "context": "2.1] Initial Traction, [ST.C2.2] Sub-Surface Footing, [ST.C2.3] Driveway Tilt, [ST.C2.4] Merge Authority, [ST.C2.5] Node B Final Contact. [KS.C2.6.3] Re-activates the impulse set under [ACCELERATION], [COMPRESSION], [GLITCH], [FIXATION], [ALERT] and [CONSTANT], already declared in Phase 02. [KS.C2.6.4] Permits additional obstacles to enter the register during iteration without becoming new checkpoints. ACTIVE SITUATION CODES \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.6.1] Declares [SYSTEM] the grid from Node_A to Node_B complete and Node_C closed, wit"
    },
    {
      "code": "KS.C2.6.4",
      "prefix": "KS",
      "page": 21,
      "context": "ctivates the impulse set under [ACCELERATION], [COMPRESSION], [GLITCH], [FIXATION], [ALERT] and [CONSTANT], already declared in Phase 02. [KS.C2.6.4] Permits additional obstacles to enter the register during iteration without becoming new checkpoints. ACTIVE SITUATION CODES \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.6.1] Declares [SYSTEM] the grid from Node_A to Node_B complete and Node_C closed, with cursor in transit. [ST.C2.6.2] Reads one [LINEAR_OBJECT] across 14m, held in contact with full tension throughout iteration. [ST.C2.6.3] Reads two [R"
    },
    {
      "code": "ST.C2.6.1",
      "prefix": "ST",
      "page": 21,
      "context": "to enter the register during iteration without becoming new checkpoints. ACTIVE SITUATION CODES \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.6.1] Declares [SYSTEM] the grid from Node_A to Node_B complete and Node_C closed, with cursor in transit. [ST.C2.6.2] Reads one [LINEAR_OBJECT] across 14m, held in contact with full tension throughout iteration. [ST.C2.6.3] Reads two [REGULATORY_OBJECT] (merge, weight-limit) under [AUTHORITY], both authorities remain active per iteration. [ST.C2.6.4] Reads [SOLID_MASS_OBJECT] under [MASS], with narrowing patter"
    },
    {
      "code": "ST.C2.6.2",
      "prefix": "ST",
      "page": 21,
      "context": "CODE SCORE \u00b7 SENTENCE [ST.C2.6.1] Declares [SYSTEM] the grid from Node_A to Node_B complete and Node_C closed, with cursor in transit. [ST.C2.6.2] Reads one [LINEAR_OBJECT] across 14m, held in contact with full tension throughout iteration. [ST.C2.6.3] Reads two [REGULATORY_OBJECT] (merge, weight-limit) under [AUTHORITY], both authorities remain active per iteration. [ST.C2.6.4] Reads [SOLID_MASS_OBJECT] under [MASS], with narrowing pattern repeated on every pass. [ST.C2.6.5] Reads one [TEXTURE_OBJECT] descending under [ELEVATION], with foot slip-pot"
    },
    {
      "code": "ST.C2.6.3",
      "prefix": "ST",
      "page": 21,
      "context": "sed, with cursor in transit. [ST.C2.6.2] Reads one [LINEAR_OBJECT] across 14m, held in contact with full tension throughout iteration. [ST.C2.6.3] Reads two [REGULATORY_OBJECT] (merge, weight-limit) under [AUTHORITY], both authorities remain active per iteration. [ST.C2.6.4] Reads [SOLID_MASS_OBJECT] under [MASS], with narrowing pattern repeated on every pass. [ST.C2.6.5] Reads one [TEXTURE_OBJECT] descending under [ELEVATION], with foot slip-potential re-encountered. [ST.C2.6.6] Reads one [SEMANTIC_OBJECT] under [SEMANTIC], with gaze in fixation loo"
    },
    {
      "code": "ST.C2.6.4",
      "prefix": "ST",
      "page": 21,
      "context": "ation. [ST.C2.6.3] Reads two [REGULATORY_OBJECT] (merge, weight-limit) under [AUTHORITY], both authorities remain active per iteration. [ST.C2.6.4] Reads [SOLID_MASS_OBJECT] under [MASS], with narrowing pattern repeated on every pass. [ST.C2.6.5] Reads one [TEXTURE_OBJECT] descending under [ELEVATION], with foot slip-potential re-encountered. [ST.C2.6.6] Reads one [SEMANTIC_OBJECT] under [SEMANTIC], with gaze in fixation loop. [ST.C2.6.7] Holds route complete in parallel with impulse unfinished under [PARADOX]. IMPULSE VARIATION \u00b7 BODY SCORE (VI) COD"
    },
    {
      "code": "ST.C2.6.5",
      "prefix": "ST",
      "page": 21,
      "context": "orities remain active per iteration. [ST.C2.6.4] Reads [SOLID_MASS_OBJECT] under [MASS], with narrowing pattern repeated on every pass. [ST.C2.6.5] Reads one [TEXTURE_OBJECT] descending under [ELEVATION], with foot slip-potential re-encountered. [ST.C2.6.6] Reads one [SEMANTIC_OBJECT] under [SEMANTIC], with gaze in fixation loop. [ST.C2.6.7] Holds route complete in parallel with impulse unfinished under [PARADOX]. IMPULSE VARIATION \u00b7 BODY SCORE (VI) CODE SCORE \u00b7 SENTENCE [VI.C2.6.1] Executes [COMPRESS] at the [SHOULDER] and [ELBOW] within a range of"
    },
    {
      "code": "ST.C2.6.6",
      "prefix": "ST",
      "page": 21,
      "context": "repeated on every pass. [ST.C2.6.5] Reads one [TEXTURE_OBJECT] descending under [ELEVATION], with foot slip-potential re-encountered. [ST.C2.6.6] Reads one [SEMANTIC_OBJECT] under [SEMANTIC], with gaze in fixation loop. [ST.C2.6.7] Holds route complete in parallel with impulse unfinished under [PARADOX]. IMPULSE VARIATION \u00b7 BODY SCORE (VI) CODE SCORE \u00b7 SENTENCE [VI.C2.6.1] Executes [COMPRESS] at the [SHOULDER] and [ELBOW] within a range of five to twelve centimetres under [COMPRESSION]. [VI.C2.6.2] Performs [MERGE] shift within a variable range at"
    },
    {
      "code": "ST.C2.6.7",
      "prefix": "ST",
      "page": 21,
      "context": "VATION], with foot slip-potential re-encountered. [ST.C2.6.6] Reads one [SEMANTIC_OBJECT] under [SEMANTIC], with gaze in fixation loop. [ST.C2.6.7] Holds route complete in parallel with impulse unfinished under [PARADOX]. IMPULSE VARIATION \u00b7 BODY SCORE (VI) CODE SCORE \u00b7 SENTENCE [VI.C2.6.1] Executes [COMPRESS] at the [SHOULDER] and [ELBOW] within a range of five to twelve centimetres under [COMPRESSION]. [VI.C2.6.2] Performs [MERGE] shift within a variable range at the [PELVIS] and [SPINE] under [ASYMMETRIC]. [VI.C2.6.3] Executes micro [MERGE] at th"
    },
    {
      "code": "VI.C2.6.1",
      "prefix": "VI",
      "page": 21,
      "context": "7] Holds route complete in parallel with impulse unfinished under [PARADOX]. IMPULSE VARIATION \u00b7 BODY SCORE (VI) CODE SCORE \u00b7 SENTENCE [VI.C2.6.1] Executes [COMPRESS] at the [SHOULDER] and [ELBOW] within a range of five to twelve centimetres under [COMPRESSION]. [VI.C2.6.2] Performs [MERGE] shift within a variable range at the [PELVIS] and [SPINE] under [ASYMMETRIC]. [VI.C2.6.3] Executes micro [MERGE] at the [PELVIS] and [SPINE] under [ASYMMETRIC], the axis may pull slightly left but must not open a new route. [VI.C2.6.4] Performs weight-aware [HOLD]"
    },
    {
      "code": "VI.C2.6.2",
      "prefix": "VI",
      "page": 21,
      "context": "ENTENCE [VI.C2.6.1] Executes [COMPRESS] at the [SHOULDER] and [ELBOW] within a range of five to twelve centimetres under [COMPRESSION]. [VI.C2.6.2] Performs [MERGE] shift within a variable range at the [PELVIS] and [SPINE] under [ASYMMETRIC]. [VI.C2.6.3] Executes micro [MERGE] at the [PELVIS] and [SPINE] under [ASYMMETRIC], the axis may pull slightly left but must not open a new route. [VI.C2.6.4] Performs weight-aware [HOLD] on the [LINEAR_OBJECT] at the [FINGER] and [PALM] under [CONSTANT], with tonus at threshold when the weight register is active."
    },
    {
      "code": "VI.C2.6.3",
      "prefix": "VI",
      "page": 21,
      "context": "imetres under [COMPRESSION]. [VI.C2.6.2] Performs [MERGE] shift within a variable range at the [PELVIS] and [SPINE] under [ASYMMETRIC]. [VI.C2.6.3] Executes micro [MERGE] at the [PELVIS] and [SPINE] under [ASYMMETRIC], the axis may pull slightly left but must not open a new route. [VI.C2.6.4] Performs weight-aware [HOLD] on the [LINEAR_OBJECT] at the [FINGER] and [PALM] under [CONSTANT], with tonus at threshold when the weight register is active. [VI.C2.6.5] Executes [GRIP] at the [FINGER] under [CONSTANT], pressure may rise, fall, or hold but never ful"
    },
    {
      "code": "VI.C2.6.4",
      "prefix": "VI",
      "page": 21,
      "context": "3] Executes micro [MERGE] at the [PELVIS] and [SPINE] under [ASYMMETRIC], the axis may pull slightly left but must not open a new route. [VI.C2.6.4] Performs weight-aware [HOLD] on the [LINEAR_OBJECT] at the [FINGER] and [PALM] under [CONSTANT], with tonus at threshold when the weight register is active. [VI.C2.6.5] Executes [GRIP] at the [FINGER] under [CONSTANT], pressure may rise, fall, or hold but never fully release. [VI.C2.6.6] Holds [HOLD] for one to four seconds under [FREEZE], producing [RIGID_POSTURE]. [VI.C2.6.7] Executes [SHIFT] with catch a"
    },
    {
      "code": "VI.C2.6.5",
      "prefix": "VI",
      "page": 21,
      "context": "re [HOLD] on the [LINEAR_OBJECT] at the [FINGER] and [PALM] under [CONSTANT], with tonus at threshold when the weight register is active. [VI.C2.6.5] Executes [GRIP] at the [FINGER] under [CONSTANT], pressure may rise, fall, or hold but never fully release. [VI.C2.6.6] Holds [HOLD] for one to four seconds under [FREEZE], producing [RIGID_POSTURE]. [VI.C2.6.7] Executes [SHIFT] with catch and drift at the [WRIST] and [SHOULDER] on the [LINEAR_OBJECT] under [GLITCH], the material must not be corrected back to a clean line."
    },
    {
      "code": "VI.C2.6.6",
      "prefix": "VI",
      "page": 21,
      "context": "ster is active. [VI.C2.6.5] Executes [GRIP] at the [FINGER] under [CONSTANT], pressure may rise, fall, or hold but never fully release. [VI.C2.6.6] Holds [HOLD] for one to four seconds under [FREEZE], producing [RIGID_POSTURE]. [VI.C2.6.7] Executes [SHIFT] with catch and drift at the [WRIST] and [SHOULDER] on the [LINEAR_OBJECT] under [GLITCH], the material must not be corrected back to a clean line."
    },
    {
      "code": "VI.C2.6.7",
      "prefix": "VI",
      "page": 21,
      "context": "ise, fall, or hold but never fully release. [VI.C2.6.6] Holds [HOLD] for one to four seconds under [FREEZE], producing [RIGID_POSTURE]. [VI.C2.6.7] Executes [SHIFT] with catch and drift at the [WRIST] and [SHOULDER] on the [LINEAR_OBJECT] under [GLITCH], the material must not be corrected back to a clean line."
    },
    {
      "code": "VI.C2.6.8",
      "prefix": "VI",
      "page": 22,
      "context": "CODE SCORE \u00b7 SENTENCE [VI.C2.6.8] Executes [TREMOR] at the [WRIST], [SHOULDER], [KNEE] and [SOLE] under [GLITCH], producing [TREMOR_LOOP] triggered by sub-surface pressure in parallel with authority pressure. ADDITIONAL OBSTACLES \u00b7 REGISTER (TR) CODE OBSTACLE \u00b7 SENTENCE [TR.C2.6.1] Introduces one [SOLID_MASS_OBJECT] vertical near the axis as utility-pressure amplifier. [TR.C2.6.2] Introduces one [SOLID_MASS_OBJECT] low near the trajectory,"
    },
    {
      "code": "TR.C2.6.1",
      "prefix": "TR",
      "page": 22,
      "context": "] triggered by sub-surface pressure in parallel with authority pressure. ADDITIONAL OBSTACLES \u00b7 REGISTER (TR) CODE OBSTACLE \u00b7 SENTENCE [TR.C2.6.1] Introduces one [SOLID_MASS_OBJECT] vertical near the axis as utility-pressure amplifier. [TR.C2.6.2] Introduces one [SOLID_MASS_OBJECT] low near the trajectory, functioning as trash-can or traffic-cone register. [TR.C2.6.3] Introduces one [GROUND_TEXTURE_OBJECT] small under one foot, functioning as catch-basin, manhole, or driveway register. [TR.C2.6.4] Introduces one [REGULATORY_OBJECT] labelled MERGE or W"
    },
    {
      "code": "TR.C2.6.2",
      "prefix": "TR",
      "page": 22,
      "context": "TER (TR) CODE OBSTACLE \u00b7 SENTENCE [TR.C2.6.1] Introduces one [SOLID_MASS_OBJECT] vertical near the axis as utility-pressure amplifier. [TR.C2.6.2] Introduces one [SOLID_MASS_OBJECT] low near the trajectory, functioning as trash-can or traffic-cone register. [TR.C2.6.3] Introduces one [GROUND_TEXTURE_OBJECT] small under one foot, functioning as catch-basin, manhole, or driveway register. [TR.C2.6.4] Introduces one [REGULATORY_OBJECT] labelled MERGE or WEIGHT_LIMIT as arterial-sign translator. [TR.C2.6.5] Introduces one [SEMANTIC_OBJECT] with low visua"
    },
    {
      "code": "TR.C2.6.3",
      "prefix": "TR",
      "page": 22,
      "context": "e amplifier. [TR.C2.6.2] Introduces one [SOLID_MASS_OBJECT] low near the trajectory, functioning as trash-can or traffic-cone register. [TR.C2.6.3] Introduces one [GROUND_TEXTURE_OBJECT] small under one foot, functioning as catch-basin, manhole, or driveway register. [TR.C2.6.4] Introduces one [REGULATORY_OBJECT] labelled MERGE or WEIGHT_LIMIT as arterial-sign translator. [TR.C2.6.5] Introduces one [SEMANTIC_OBJECT] with low visual noise at the grid edge. [TR.C2.6.6] Constrains additional obstacles from counting as new data, they thicken the already-ac"
    },
    {
      "code": "TR.C2.6.4",
      "prefix": "TR",
      "page": 22,
      "context": "er. [TR.C2.6.3] Introduces one [GROUND_TEXTURE_OBJECT] small under one foot, functioning as catch-basin, manhole, or driveway register. [TR.C2.6.4] Introduces one [REGULATORY_OBJECT] labelled MERGE or WEIGHT_LIMIT as arterial-sign translator. [TR.C2.6.5] Introduces one [SEMANTIC_OBJECT] with low visual noise at the grid edge. [TR.C2.6.6] Constrains additional obstacles from counting as new data, they thicken the already-active codes. [TR.C2.6.7] Constrains obstacles once touched from being tidied, moved, or corrected. REPETITION OUTPUT \u00b7 OP CODE OUT"
    },
    {
      "code": "TR.C2.6.5",
      "prefix": "TR",
      "page": 22,
      "context": "nhole, or driveway register. [TR.C2.6.4] Introduces one [REGULATORY_OBJECT] labelled MERGE or WEIGHT_LIMIT as arterial-sign translator. [TR.C2.6.5] Introduces one [SEMANTIC_OBJECT] with low visual noise at the grid edge. [TR.C2.6.6] Constrains additional obstacles from counting as new data, they thicken the already-active codes. [TR.C2.6.7] Constrains obstacles once touched from being tidied, moved, or corrected. REPETITION OUTPUT \u00b7 OP CODE OUTPUT \u00b7 SENTENCE [OP.C2.6.1] Holds posture narrow as residual, carrying [COMPRESSED_VOLUME] forward. [OP.C2.6"
    },
    {
      "code": "TR.C2.6.6",
      "prefix": "TR",
      "page": 22,
      "context": "MERGE or WEIGHT_LIMIT as arterial-sign translator. [TR.C2.6.5] Introduces one [SEMANTIC_OBJECT] with low visual noise at the grid edge. [TR.C2.6.6] Constrains additional obstacles from counting as new data, they thicken the already-active codes. [TR.C2.6.7] Constrains obstacles once touched from being tidied, moved, or corrected. REPETITION OUTPUT \u00b7 OP CODE OUTPUT \u00b7 SENTENCE [OP.C2.6.1] Holds posture narrow as residual, carrying [COMPRESSED_VOLUME] forward. [OP.C2.6.2] Holds weight shifting as residual, carrying [ASYMMETRIC_STANCE] forward. [OP.C2.6"
    },
    {
      "code": "TR.C2.6.7",
      "prefix": "TR",
      "page": 22,
      "context": "l noise at the grid edge. [TR.C2.6.6] Constrains additional obstacles from counting as new data, they thicken the already-active codes. [TR.C2.6.7] Constrains obstacles once touched from being tidied, moved, or corrected. REPETITION OUTPUT \u00b7 OP CODE OUTPUT \u00b7 SENTENCE [OP.C2.6.1] Holds posture narrow as residual, carrying [COMPRESSED_VOLUME] forward. [OP.C2.6.2] Holds weight shifting as residual, carrying [ASYMMETRIC_STANCE] forward. [OP.C2.6.3] Holds direction merge as residual, carrying residual [MERGE_PULL]. [OP.C2.6.4] Holds contact with the [LIN"
    },
    {
      "code": "OP.C2.6.1",
      "prefix": "OP",
      "page": 22,
      "context": ". [TR.C2.6.7] Constrains obstacles once touched from being tidied, moved, or corrected. REPETITION OUTPUT \u00b7 OP CODE OUTPUT \u00b7 SENTENCE [OP.C2.6.1] Holds posture narrow as residual, carrying [COMPRESSED_VOLUME] forward. [OP.C2.6.2] Holds weight shifting as residual, carrying [ASYMMETRIC_STANCE] forward. [OP.C2.6.3] Holds direction merge as residual, carrying residual [MERGE_PULL]. [OP.C2.6.4] Holds contact with the [LINEAR_OBJECT] maintained, carrying [MECHANICAL_GRIP]. [OP.C2.6.5] Declares no new route permitted, retaining residues of compression, asy"
    },
    {
      "code": "OP.C2.6.2",
      "prefix": "OP",
      "page": 22,
      "context": "ed. REPETITION OUTPUT \u00b7 OP CODE OUTPUT \u00b7 SENTENCE [OP.C2.6.1] Holds posture narrow as residual, carrying [COMPRESSED_VOLUME] forward. [OP.C2.6.2] Holds weight shifting as residual, carrying [ASYMMETRIC_STANCE] forward. [OP.C2.6.3] Holds direction merge as residual, carrying residual [MERGE_PULL]. [OP.C2.6.4] Holds contact with the [LINEAR_OBJECT] maintained, carrying [MECHANICAL_GRIP]. [OP.C2.6.5] Declares no new route permitted, retaining residues of compression, asymmetry, merge, and load. [OP.C2.6.6] Declares [SYSTEM] iteration orchestration pass"
    },
    {
      "code": "OP.C2.6.3",
      "prefix": "OP",
      "page": 22,
      "context": "as residual, carrying [COMPRESSED_VOLUME] forward. [OP.C2.6.2] Holds weight shifting as residual, carrying [ASYMMETRIC_STANCE] forward. [OP.C2.6.3] Holds direction merge as residual, carrying residual [MERGE_PULL]. [OP.C2.6.4] Holds contact with the [LINEAR_OBJECT] maintained, carrying [MECHANICAL_GRIP]. [OP.C2.6.5] Declares no new route permitted, retaining residues of compression, asymmetry, merge, and load. [OP.C2.6.6] Declares [SYSTEM] iteration orchestration passes into the residual phase. OBJECT REGISTER \u00b7 RO CODE REGISTER \u00b7 SENTENCE [RO.C2.6."
    },
    {
      "code": "OP.C2.6.4",
      "prefix": "OP",
      "page": 22,
      "context": "ifting as residual, carrying [ASYMMETRIC_STANCE] forward. [OP.C2.6.3] Holds direction merge as residual, carrying residual [MERGE_PULL]. [OP.C2.6.4] Holds contact with the [LINEAR_OBJECT] maintained, carrying [MECHANICAL_GRIP]. [OP.C2.6.5] Declares no new route permitted, retaining residues of compression, asymmetry, merge, and load. [OP.C2.6.6] Declares [SYSTEM] iteration orchestration passes into the residual phase. OBJECT REGISTER \u00b7 RO CODE REGISTER \u00b7 SENTENCE [RO.C2.6.1] Carries the [LINEAR_OBJECT] sustained across all iterations. [RO.C2.6.2] Ca"
    },
    {
      "code": "OP.C2.6.5",
      "prefix": "OP",
      "page": 22,
      "context": "as residual, carrying residual [MERGE_PULL]. [OP.C2.6.4] Holds contact with the [LINEAR_OBJECT] maintained, carrying [MECHANICAL_GRIP]. [OP.C2.6.5] Declares no new route permitted, retaining residues of compression, asymmetry, merge, and load. [OP.C2.6.6] Declares [SYSTEM] iteration orchestration passes into the residual phase. OBJECT REGISTER \u00b7 RO CODE REGISTER \u00b7 SENTENCE [RO.C2.6.1] Carries the [LINEAR_OBJECT] sustained across all iterations. [RO.C2.6.2] Carries the Score 02 baseline [SOLID_MASS_OBJECT] set. [RO.C2.6.3] Carries two [REGULATORY_OB"
    },
    {
      "code": "OP.C2.6.6",
      "prefix": "OP",
      "page": 22,
      "context": "carrying [MECHANICAL_GRIP]. [OP.C2.6.5] Declares no new route permitted, retaining residues of compression, asymmetry, merge, and load. [OP.C2.6.6] Declares [SYSTEM] iteration orchestration passes into the residual phase. OBJECT REGISTER \u00b7 RO CODE REGISTER \u00b7 SENTENCE [RO.C2.6.1] Carries the [LINEAR_OBJECT] sustained across all iterations. [RO.C2.6.2] Carries the Score 02 baseline [SOLID_MASS_OBJECT] set. [RO.C2.6.3] Carries two [REGULATORY_OBJECT] and one [SEMANTIC_OBJECT]. [RO.C2.6.4] Carries one [GROUND_TEXTURE_OBJECT] and one [TEXTURE_OBJECT]. ["
    },
    {
      "code": "RO.C2.6.1",
      "prefix": "RO",
      "page": 22,
      "context": ". [OP.C2.6.6] Declares [SYSTEM] iteration orchestration passes into the residual phase. OBJECT REGISTER \u00b7 RO CODE REGISTER \u00b7 SENTENCE [RO.C2.6.1] Carries the [LINEAR_OBJECT] sustained across all iterations. [RO.C2.6.2] Carries the Score 02 baseline [SOLID_MASS_OBJECT] set. [RO.C2.6.3] Carries two [REGULATORY_OBJECT] and one [SEMANTIC_OBJECT]. [RO.C2.6.4] Carries one [GROUND_TEXTURE_OBJECT] and one [TEXTURE_OBJECT]. [RO.C2.6.5] Permits additional obstacles from [TR.C2.6.1] through [TR.C2.6.7] but forbids reading them as new checkpoints. LOCKING RULE"
    },
    {
      "code": "RO.C2.6.2",
      "prefix": "RO",
      "page": 22,
      "context": "esidual phase. OBJECT REGISTER \u00b7 RO CODE REGISTER \u00b7 SENTENCE [RO.C2.6.1] Carries the [LINEAR_OBJECT] sustained across all iterations. [RO.C2.6.2] Carries the Score 02 baseline [SOLID_MASS_OBJECT] set. [RO.C2.6.3] Carries two [REGULATORY_OBJECT] and one [SEMANTIC_OBJECT]. [RO.C2.6.4] Carries one [GROUND_TEXTURE_OBJECT] and one [TEXTURE_OBJECT]. [RO.C2.6.5] Permits additional obstacles from [TR.C2.6.1] through [TR.C2.6.7] but forbids reading them as new checkpoints. LOCKING RULE \u00b7 AP CODE RULE \u00b7 SENTENCE [AP.C2.6.1] Locks iteration count open, the"
    },
    {
      "code": "RO.C2.6.3",
      "prefix": "RO",
      "page": 22,
      "context": "C2.6.1] Carries the [LINEAR_OBJECT] sustained across all iterations. [RO.C2.6.2] Carries the Score 02 baseline [SOLID_MASS_OBJECT] set. [RO.C2.6.3] Carries two [REGULATORY_OBJECT] and one [SEMANTIC_OBJECT]. [RO.C2.6.4] Carries one [GROUND_TEXTURE_OBJECT] and one [TEXTURE_OBJECT]. [RO.C2.6.5] Permits additional obstacles from [TR.C2.6.1] through [TR.C2.6.7] but forbids reading them as new checkpoints. LOCKING RULE \u00b7 AP CODE RULE \u00b7 SENTENCE [AP.C2.6.1] Locks iteration count open, the director decides. [AP.C2.6.2] Locks iteration from closing until me"
    },
    {
      "code": "RO.C2.6.4",
      "prefix": "RO",
      "page": 22,
      "context": "O.C2.6.2] Carries the Score 02 baseline [SOLID_MASS_OBJECT] set. [RO.C2.6.3] Carries two [REGULATORY_OBJECT] and one [SEMANTIC_OBJECT]. [RO.C2.6.4] Carries one [GROUND_TEXTURE_OBJECT] and one [TEXTURE_OBJECT]. [RO.C2.6.5] Permits additional obstacles from [TR.C2.6.1] through [TR.C2.6.7] but forbids reading them as new checkpoints. LOCKING RULE \u00b7 AP CODE RULE \u00b7 SENTENCE [AP.C2.6.1] Locks iteration count open, the director decides. [AP.C2.6.2] Locks iteration from closing until merge and weight-limit have been re-heard at least once each."
    },
    {
      "code": "RO.C2.6.5",
      "prefix": "RO",
      "page": 22,
      "context": "3] Carries two [REGULATORY_OBJECT] and one [SEMANTIC_OBJECT]. [RO.C2.6.4] Carries one [GROUND_TEXTURE_OBJECT] and one [TEXTURE_OBJECT]. [RO.C2.6.5] Permits additional obstacles from [TR.C2.6.1] through [TR.C2.6.7] but forbids reading them as new checkpoints. LOCKING RULE \u00b7 AP CODE RULE \u00b7 SENTENCE [AP.C2.6.1] Locks iteration count open, the director decides. [AP.C2.6.2] Locks iteration from closing until merge and weight-limit have been re-heard at least once each."
    },
    {
      "code": "TR.C2.6.1",
      "prefix": "TR",
      "page": 22,
      "context": "MANTIC_OBJECT]. [RO.C2.6.4] Carries one [GROUND_TEXTURE_OBJECT] and one [TEXTURE_OBJECT]. [RO.C2.6.5] Permits additional obstacles from [TR.C2.6.1] through [TR.C2.6.7] but forbids reading them as new checkpoints. LOCKING RULE \u00b7 AP CODE RULE \u00b7 SENTENCE [AP.C2.6.1] Locks iteration count open, the director decides. [AP.C2.6.2] Locks iteration from closing until merge and weight-limit have been re-heard at least once each."
    },
    {
      "code": "TR.C2.6.7",
      "prefix": "TR",
      "page": 22,
      "context": ".C2.6.4] Carries one [GROUND_TEXTURE_OBJECT] and one [TEXTURE_OBJECT]. [RO.C2.6.5] Permits additional obstacles from [TR.C2.6.1] through [TR.C2.6.7] but forbids reading them as new checkpoints. LOCKING RULE \u00b7 AP CODE RULE \u00b7 SENTENCE [AP.C2.6.1] Locks iteration count open, the director decides. [AP.C2.6.2] Locks iteration from closing until merge and weight-limit have been re-heard at least once each."
    },
    {
      "code": "AP.C2.6.1",
      "prefix": "AP",
      "page": 22,
      "context": "nal obstacles from [TR.C2.6.1] through [TR.C2.6.7] but forbids reading them as new checkpoints. LOCKING RULE \u00b7 AP CODE RULE \u00b7 SENTENCE [AP.C2.6.1] Locks iteration count open, the director decides. [AP.C2.6.2] Locks iteration from closing until merge and weight-limit have been re-heard at least once each."
    },
    {
      "code": "AP.C2.6.2",
      "prefix": "AP",
      "page": 22,
      "context": "eading them as new checkpoints. LOCKING RULE \u00b7 AP CODE RULE \u00b7 SENTENCE [AP.C2.6.1] Locks iteration count open, the director decides. [AP.C2.6.2] Locks iteration from closing until merge and weight-limit have been re-heard at least once each."
    },
    {
      "code": "AP.C2.6.3",
      "prefix": "AP",
      "page": 23,
      "context": "CODE RULE \u00b7 SENTENCE [AP.C2.6.3] Locks [GRIP] on the [LINEAR_OBJECT] to remain held throughout, pressure may vary. [AP.C2.6.4] Locks additional obstacles from being removed once introduced. [AP.C2.6.5] Triggers transition to Phase 04 once system saturation is reached."
    },
    {
      "code": "AP.C2.6.4",
      "prefix": "AP",
      "page": 23,
      "context": "CODE RULE \u00b7 SENTENCE [AP.C2.6.3] Locks [GRIP] on the [LINEAR_OBJECT] to remain held throughout, pressure may vary. [AP.C2.6.4] Locks additional obstacles from being removed once introduced. [AP.C2.6.5] Triggers transition to Phase 04 once system saturation is reached."
    },
    {
      "code": "AP.C2.6.5",
      "prefix": "AP",
      "page": 23,
      "context": "[LINEAR_OBJECT] to remain held throughout, pressure may vary. [AP.C2.6.4] Locks additional obstacles from being removed once introduced. [AP.C2.6.5] Triggers transition to Phase 04 once system saturation is reached."
    },
    {
      "code": "ST.C2.7.1",
      "prefix": "ST",
      "page": 24,
      "context": "[PHASE 04] RESIDUAL \u00b7 Score 02 [C2.7] Residual State SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.7.1] Declares [SYSTEM] at Node_B, with Score 02 closed and iteration released. [ST.C2.7.2] Reads one [LINEAR_OBJECT] with tension slack (released) and contact-hold (residual), the [PELVIS] still carries the axis. [ST.C2.7.3] Holds body stopped in parallel with impulse residue still active under [PARADOX]. [ST.C2.7.4] Reads the [SOLID_MASS_OBJECT] and [GROUND_TEXTURE_OBJECT] set as residual, the stage is not tidi"
    },
    {
      "code": "ST.C2.7.2",
      "prefix": "ST",
      "page": 24,
      "context": "SITUATION \u00b7 SPATIAL SCORE CODE SCORE \u00b7 SENTENCE [ST.C2.7.1] Declares [SYSTEM] at Node_B, with Score 02 closed and iteration released. [ST.C2.7.2] Reads one [LINEAR_OBJECT] with tension slack (released) and contact-hold (residual), the [PELVIS] still carries the axis. [ST.C2.7.3] Holds body stopped in parallel with impulse residue still active under [PARADOX]. [ST.C2.7.4] Reads the [SOLID_MASS_OBJECT] and [GROUND_TEXTURE_OBJECT] set as residual, the stage is not tidied per the locking rule. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.7.1]"
    },
    {
      "code": "ST.C2.7.3",
      "prefix": "ST",
      "page": 24,
      "context": ". [ST.C2.7.2] Reads one [LINEAR_OBJECT] with tension slack (released) and contact-hold (residual), the [PELVIS] still carries the axis. [ST.C2.7.3] Holds body stopped in parallel with impulse residue still active under [PARADOX]. [ST.C2.7.4] Reads the [SOLID_MASS_OBJECT] and [GROUND_TEXTURE_OBJECT] set as residual, the stage is not tidied per the locking rule. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.7.1] Executes [RECOVER] partial at the [SHOULDER] and [CHEST] under [ALERT], producing [PARTIAL_RECOVERY], referring to [ST.C2.7.2]. [RT.C"
    },
    {
      "code": "ST.C2.7.4",
      "prefix": "ST",
      "page": 24,
      "context": "al), the [PELVIS] still carries the axis. [ST.C2.7.3] Holds body stopped in parallel with impulse residue still active under [PARADOX]. [ST.C2.7.4] Reads the [SOLID_MASS_OBJECT] and [GROUND_TEXTURE_OBJECT] set as residual, the stage is not tidied per the locking rule. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.7.1] Executes [RECOVER] partial at the [SHOULDER] and [CHEST] under [ALERT], producing [PARTIAL_RECOVERY], referring to [ST.C2.7.2]. [RT.C2.7.2] Performs micro [RELEASE] of [GRIP] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] un"
    },
    {
      "code": "RT.C2.7.1",
      "prefix": "RT",
      "page": 24,
      "context": "[GROUND_TEXTURE_OBJECT] set as residual, the stage is not tidied per the locking rule. BODY IMPULSE \u00b7 BODY SCORE CODE SCORE \u00b7 SENTENCE [RT.C2.7.1] Executes [RECOVER] partial at the [SHOULDER] and [CHEST] under [ALERT], producing [PARTIAL_RECOVERY], referring to [ST.C2.7.2]. [RT.C2.7.2] Performs micro [RELEASE] of [GRIP] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [ALERT], with grip releasing and contact residual, referring to [ST.C2.7.2]. [RT.C2.7.3] Holds small [HOLD] at the [GAZE] under [CONSTANT], sustaining residual [FIXATION_HOLD] wit"
    },
    {
      "code": "ST.C2.7.2",
      "prefix": "ST",
      "page": 24,
      "context": "SENTENCE [RT.C2.7.1] Executes [RECOVER] partial at the [SHOULDER] and [CHEST] under [ALERT], producing [PARTIAL_RECOVERY], referring to [ST.C2.7.2]. [RT.C2.7.2] Performs micro [RELEASE] of [GRIP] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [ALERT], with grip releasing and contact residual, referring to [ST.C2.7.2]. [RT.C2.7.3] Holds small [HOLD] at the [GAZE] under [CONSTANT], sustaining residual [FIXATION_HOLD] with residual [MERGE_PULL] in the [PELVIS], referring to [ST.C2.7.3]. Score 02 does not conclude ; it thins. The field remains legi"
    },
    {
      "code": "RT.C2.7.2",
      "prefix": "RT",
      "page": 24,
      "context": ".C2.7.1] Executes [RECOVER] partial at the [SHOULDER] and [CHEST] under [ALERT], producing [PARTIAL_RECOVERY], referring to [ST.C2.7.2]. [RT.C2.7.2] Performs micro [RELEASE] of [GRIP] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [ALERT], with grip releasing and contact residual, referring to [ST.C2.7.2]. [RT.C2.7.3] Holds small [HOLD] at the [GAZE] under [CONSTANT], sustaining residual [FIXATION_HOLD] with residual [MERGE_PULL] in the [PELVIS], referring to [ST.C2.7.3]. Score 02 does not conclude ; it thins. The field remains legible even when"
    },
    {
      "code": "ST.C2.7.2",
      "prefix": "ST",
      "page": 24,
      "context": "ELEASE] of [GRIP] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [ALERT], with grip releasing and contact residual, referring to [ST.C2.7.2]. [RT.C2.7.3] Holds small [HOLD] at the [GAZE] under [CONSTANT], sustaining residual [FIXATION_HOLD] with residual [MERGE_PULL] in the [PELVIS], referring to [ST.C2.7.3]. Score 02 does not conclude ; it thins. The field remains legible even when the body has withdrawn from it. TRAJECTORY PERFORMANCE Route notes, body sequence, and final performative reading. 1. Trajectory Overview This document contains two p"
    },
    {
      "code": "RT.C2.7.3",
      "prefix": "RT",
      "page": 24,
      "context": "IP] at the [FINGER] and [PALM] on the [LINEAR_OBJECT] under [ALERT], with grip releasing and contact residual, referring to [ST.C2.7.2]. [RT.C2.7.3] Holds small [HOLD] at the [GAZE] under [CONSTANT], sustaining residual [FIXATION_HOLD] with residual [MERGE_PULL] in the [PELVIS], referring to [ST.C2.7.3]. Score 02 does not conclude ; it thins. The field remains legible even when the body has withdrawn from it. TRAJECTORY PERFORMANCE Route notes, body sequence, and final performative reading. 1. Trajectory Overview This document contains two performative tr"
    },
    {
      "code": "ST.C2.7.3",
      "prefix": "ST",
      "page": 24,
      "context": "small [HOLD] at the [GAZE] under [CONSTANT], sustaining residual [FIXATION_HOLD] with residual [MERGE_PULL] in the [PELVIS], referring to [ST.C2.7.3]. Score 02 does not conclude ; it thins. The field remains legible even when the body has withdrawn from it. TRAJECTORY PERFORMANCE Route notes, body sequence, and final performative reading. 1. Trajectory Overview This document contains two performative trajectories running in parallel but separately : Score 01 in the Lengkong / Palasari / Kosambi area (character : commercial aggression) , and Score 02 in the"
    }
  ]
}
```

---

# FILE: `proto_path_full_corpus_integration/generated_source_audit/raw_value_linkage_audit.csv`

- Size: `1905` bytes
- SHA-256: `2350497659de03b721a4e4f82b6ab52749a433b7f82f7da18c7303cea468d48f`

```csv
rawValue,datasets,globalCount,score01BoundsCount,score02BoundsCount,status,note
construction--flat--driveway,mapillary-points,4427,1520,1119,VALUE_AND_BOUNDS_AMBIGUOUS,"Value exists, but many candidate points remain. Stage distance cannot identify one geographic feature."
object--manhole,mapillary-points,942,271,153,VALUE_AND_BOUNDS_AMBIGUOUS,"Value exists, but many candidate points remain. Stage distance cannot identify one geographic feature."
object--sign--advertisement,mapillary-points,23300,7432,4147,VALUE_AND_BOUNDS_AMBIGUOUS,"Value exists, but many candidate points remain. Stage distance cannot identify one geographic feature."
object--street-light,mapillary-points,11396,3760,1863,VALUE_AND_BOUNDS_AMBIGUOUS,"Value exists, but many candidate points remain. Stage distance cannot identify one geographic feature."
object--support--utility-pole,mapillary-points,23529,7429,4637,VALUE_AND_BOUNDS_AMBIGUOUS,"Value exists, but many candidate points remain. Stage distance cannot identify one geographic feature."
object--traffic-cone,mapillary-points,2792,1208,245,VALUE_AND_BOUNDS_AMBIGUOUS,"Value exists, but many candidate points remain. Stage distance cannot identify one geographic feature."
object--trash-can,mapillary-points,2144,694,363,VALUE_AND_BOUNDS_AMBIGUOUS,"Value exists, but many candidate points remain. Stage distance cannot identify one geographic feature."
regulatory--merge--g1,,0,0,0,UNRESOLVED_RAW_VALUE,Raw value does not occur in either attached JSON dataset. Do not auto-substitute.
regulatory--no-right-turn--g1,mapillary-traffic,145,90,5,VALUE_AND_BOUNDS_AMBIGUOUS,"Value exists, but many candidate points remain. Stage distance cannot identify one geographic feature."
regulatory--weight-limit--g1,mapillary-traffic,6,3,2,VALUE_AND_BOUNDS_AMBIGUOUS,"Value exists, but many candidate points remain. Stage distance cannot identify one geographic feature."
```

---

# FILE: `proto_path_full_corpus_integration/prompts/01_MASTER_FULL_CORPUS_INTEGRATION_PROMPT.md`

- Size: `7064` bytes
- SHA-256: `1e635a50aa4858ab2b7f2776625371fb144c44236254076269bc8ca0e2efbed6`

```markdown
# MASTER PROMPT — INTEGRATE THE COMPLETE PROTO PATH CORPUS

You are working inside an existing Proto Path web application.

Your task is to ingest the complete canonical score PDF and the two full Mapillary GeoJSON datasets, then extend the existing web so every score section, notation unit, explicit body response, iteration register, residual state, and available diagram can be explored through one traceable system.

## Canonical inputs

Treat these files as immutable:

```text
source/Proto Path - WHERE ARE YOU DEPART FROM _gulangsatriya.pdf
source/mapillary-points - Large Dataset Bandung.json
source/mapillary-traffic - Large Dataset Bandung.json
```

Do not rewrite these files.

Compute and preserve hashes.

Use the generated audit files as preliminary guidance, then independently validate them.

## Required transformation

Build this traceable chain:

```text
SOURCE DOCUMENT
→ PAGE / SECTION
→ SCORE
→ PHASE
→ CHECKPOINT
→ DATA PROVOCATION
→ SOURCE CANDIDATE SET
→ SITUATION
→ BODY IMPULSE
→ SPATIAL OUTPUT
→ RESIDUAL / REGISTER
→ DIAGRAM ASSET
```

The web must also expose the raw-to-performance chain:

```text
MAPILLARY RAW FEATURE
→ DATA PROVOCATION
→ OBJECT / STIMULUS
→ SITUATION
→ BODY ACTION
→ ANATOMICAL LOCUS
→ SPATIAL OUTPUT
```

## Do not force a false one-to-one model

The latest PDF does not always contain one Situation and one Body Impulse per checkpoint.

A checkpoint may contain:

- several Data Provocations;
- several Situation rows;
- several Body Impulse rows;
- one Body Impulse that explicitly refers to a different Situation suffix;
- register rows;
- Output End State rows;
- iteration variations;
- repetition patterns;
- object registers;
- locking rules;
- additional obstacles;
- repetition outputs.

Model three levels:

```text
1. CHECKPOINT
2. NOTATION UNIT
3. EXPLICIT RELATION PAIR
```

Pair Body Impulse rows through explicit references such as:

```text
referring to [ST.C1.3.1]
```

Do not pair rows solely through matching numeric suffixes.

## Complete content scope

Ingest:

- method framework;
- document assets;
- reading scheme;
- note on data, objects, and body;
- score legend;
- material variable matrix;
- kinetic stimulus taxonomy;
- state value taxonomy;
- kinetic action taxonomy;
- anatomical locus taxonomy;
- spatial output taxonomy;
- reading example;
- Score 01:
  - C1.0 through C1.7;
- Score 02:
  - C2.0 through C2.7;
- all DP, ST, RT, KS, VI, PU, RO, AP, OE, TR, and OP units;
- Trajectory Performance;
- Research Trajectory;
- source links;
- source conflicts;
- diagram assets and their review status.

## Source extraction rules

1. Preserve verbatim text.
2. Preserve page number.
3. Preserve section path.
4. Preserve every code exactly.
5. Preserve every bracketed token.
6. Extract explicit code references.
7. Record extraction confidence.
8. Keep page image or PDF deep-link metadata.
9. Never repair source text silently.
10. Store proposed corrections separately.

## Mapillary data rules

Keep both GeoJSON files as immutable source.

Generate derived artifacts:

```text
dataset manifest
raw-value index
prefix index
bounding-box index
score-area subsets
candidate match sets
chunked JSONL
validation report
```

Do not convert the complete datasets to Markdown.

Do not load 110,299 features on initial page load.

## Source-linking rules

Use the following resolution statuses:

```text
EXACT_PROPERTY_ID
EXACT_COORDINATE
NEAR_COORDINATE_ROUNDED
VALUE_AND_SCORE_BOUNDS
VALUE_ONLY_AMBIGUOUS
MANUAL_VERIFIED
RAW_VALUE_NOT_FOUND
SCORE_SYSTEM_DATUM
UNRESOLVED
```

Stage-axis distance is not geographic distance.

Never use `±12.15m` to select a geographic point unless a documented route projection exists.

## Mandatory conflict handling

Read:

```text
generated_source_audit/KNOWN_SOURCE_CONFLICTS.md
```

Create a first-class `ContentConflict` entity.

At minimum, register:

- `regulatory--merge--g1` absent from raw JSON;
- Score 02 axis 14 m versus later 15 m summary;
- current C1.3.2 / RT.C1.3.2 Glitch diagram mismatch with the latest detailed PDF;
- summary-level Glitch claims versus detailed-row placement;
- any unresolved code reference;
- any undeclared token.

Do not hide these issues.

## Required web changes

Extend the current app with:

```text
/corpus
/document
/score/:scoreId
/checkpoint/:checkpointId
/unit/:unitId
/source/:sourceFeatureId
/conflicts
/dev/integrity
```

Update `/explore` so the user can choose:

```text
score
phase
checkpoint
notation unit
explicit pair
iteration / residual layer
diagram version
```

## Checkpoint page

Each checkpoint page must show:

1. score context;
2. stage-axis position;
3. raw Data Provocations;
4. candidate Mapillary source records;
5. Situation units;
6. Body Impulse units;
7. explicit references;
8. anatomical loci;
9. Spatial Outputs;
10. state and residue;
11. iteration carry-over;
12. diagrams;
13. source conflicts;
14. previous and next checkpoint.

## Document mode

Create a document reader synchronized with the structured score.

Features:

- page thumbnails;
- page text;
- highlighted codes;
- click code to open unit;
- click unit to open page;
- show extraction confidence;
- show source PDF;
- show section hierarchy;
- search codes and raw values.

## Corpus completeness dashboard

Show:

```text
PDF pages ingested
checkpoints ingested
code units by prefix
units with parsed references
units without parsed references
raw values found
raw values unresolved
units with diagram
units without diagram
content conflicts
human-review queue
```

These are corpus integrity indicators, not decorative business KPIs.

## Diagram asset policy

Every diagram must include:

```text
asset ID
file path
source PDF hash
content version
claimed Situation code
claimed Body Impulse code
review status
mismatch notes
```

Allowed status:

```text
CANONICAL
COMPATIBLE_PENDING_REVIEW
LEGACY_DRAFT
CONTENT_MISMATCH_REVIEW_REQUIRED
MISSING
```

Never attach a mismatched diagram as canonical.

## Performance

Use:

- lazy loading;
- route-scoped data;
- precomputed indexes;
- Web Workers for large JSON;
- virtualized source lists;
- spatial filtering;
- image lazy loading;
- cache keyed by source hash.

The initial explorer must not parse both full GeoJSON files in the main thread.

## Deliverables

Produce:

1. ingestion scripts;
2. canonical content bundle;
3. schema validation;
4. migration code;
5. complete checkpoint UI;
6. PDF document reader;
7. Mapillary source explorer;
8. conflict review interface;
9. updated diagram registry;
10. tests;
11. source and integrity reports;
12. README.

## Completion condition

Do not claim completion until:

- all 16 checkpoint IDs C1.0-C1.7 and C2.0-C2.7 are visible;
- all detected coded units are indexed;
- every unit links to a page;
- Data Provocations preserve raw values;
- both GeoJSON files are profiled and searchable;
- ambiguous matches remain ambiguous;
- unresolved raw values remain visible;
- diagram conflicts remain visible;
- production build passes;
- corpus integrity tests pass.
```

---

# FILE: `proto_path_full_corpus_integration/prompts/02_PDF_TO_SCORE_GRAPH_PROMPT.md`

- Size: `3271` bytes
- SHA-256: `b3c7412eeeab7fd38ee7196c9ea230bf53d382bbc501094334813d63c6689972`

```markdown
# PDF TO CANONICAL SCORE GRAPH PROMPT

Build a deterministic extraction pipeline for the Proto Path PDF.

## Output files

Generate:

```text
content/document.json
content/pages.jsonl
content/sections.json
content/taxonomies.json
content/scores.json
content/phases.json
content/checkpoints.json
content/units.jsonl
content/references.jsonl
content/explicit-pairs.jsonl
content/research-trajectory.json
reports/pdf-extraction-report.json
reports/pdf-human-review.csv
```

## Extraction unit

Create one `ScoreUnit` for each coded row.

Supported prefixes:

```text
DP
ST
RT
KS
RS
RO
AP
OE
PU
VI
TR
OP
```

Store undeclared prefixes without discarding them.

## Required fields

```json
{
  "id": "unit-st-c1-3-1",
  "code": "ST.C1.3.1",
  "prefix": "ST",
  "page": 10,
  "sectionPath": [
    "Score 01",
    "Phase 2",
    "C1.3 Authority Interruption",
    "Situation"
  ],
  "verbatimText": "...",
  "normalizedSearchText": "...",
  "declaredTokens": [],
  "references": [],
  "distanceMentions": [],
  "coordinateMentions": [],
  "rawValueMentions": [],
  "extractionConfidence": 0.98,
  "reviewStatus": "AUTO_EXTRACTED"
}
```

## Reading tables

The PDF contains table rows whose sentences may wrap across lines.

Use page text geometry when available.

Do not split a sentence at a visual line break.

A unit ends at:

- the next coded row;
- a new table heading;
- a new checkpoint;
- a new phase;
- end of page only when the row does not continue.

Implement continuation detection across page boundaries.

## References

Extract references in all forms:

```text
[DP.C1.3.1]
[ST.C1.3.1]
[RT.C1.3.1]
[OE.C1.END.1]
Node_A
Node_B
Node_C
±12.15m
```

Classify reference relations:

```text
provoked_by
responds_to
produces
carries
replays
locks
introduces
continues_to
mentions
```

## Explicit pairing

Build an explicit pair only when the Body Impulse text contains or structurally declares a Situation reference.

Example:

```text
RT.C1.3.2 refers to ST.C1.3.1
```

The pair key must preserve this cross-suffix relation.

Do not assume:

```text
RT.C1.3.2 → ST.C1.3.2
```

## Taxonomies

Extract:

- prefix legend;
- material object codes;
- kinetic stimuli;
- state facets and values;
- kinetic actions;
- anatomical loci;
- spatial outputs.

Validate every bracketed token used in score rows.

Classify unknown tokens:

```text
UNDECLARED_TOKEN
POSSIBLE_EXTRACTION_ERROR
SOURCE_EXTENSION
```

## Non-score sections

Keep these separate from score execution units:

```text
Method Framework
Living Text
Trajectory Performance
Research Trajectory
script fragments from earlier experiments
```

They remain searchable and can link to method concepts.

Do not turn research prose into stage instructions.

## Human review report

Create review rows for:

- low-confidence table extraction;
- broken line joins;
- duplicate code with different text;
- reference to missing unit;
- declared prefix unused;
- used prefix absent from legend;
- summary/detail contradiction;
- page count disagreement;
- axis length disagreement.

## PDF rendering link

Every unit should support:

```text
open page
highlight code region
show page image
show verbatim extraction
```

When code bounding boxes cannot be extracted reliably, preserve page number and text search anchor.
```

---

# FILE: `proto_path_full_corpus_integration/prompts/03_MAPILLARY_DATA_PIPELINE_PROMPT.md`

- Size: `2633` bytes
- SHA-256: `dddb311daf00b8afdcfbed9094f227acc86d5656c2b949d9bf3efd1e9600cc71`

```markdown
# MAPILLARY GEOJSON PIPELINE PROMPT

Build an ingestion and indexing pipeline for:

```text
mapillary-points - Large Dataset Bandung.json
mapillary-traffic - Large Dataset Bandung.json
```

## Preserve source

Keep raw files immutable.

Generate a manifest containing:

```text
file name
size
SHA-256
GeoJSON type
feature count
distinct raw-value count
bounds
parser version
```

## Normalized feature contract

```json
{
  "sourceFeatureId": "mapillary-points:347198704109391",
  "datasetId": "mapillary-points",
  "propertyId": "347198704109391",
  "geometryType": "Point",
  "coordinate": {
    "lon": 107.57509410381317,
    "lat": -6.926421521791951
  },
  "rawValue": "construction--flat--driveway",
  "valuePrefix": "construction",
  "firstSeenAt": 1655787106296,
  "lastSeenAt": 1655787106296,
  "rawRecordOffset": null
}
```

Do not change `rawValue`.

## Derived files

Generate:

```text
mapillary/dataset-manifest.json
mapillary/value-index.json
mapillary/prefix-index.json
mapillary/score-area-index.json
mapillary/features.points.jsonl
mapillary/features.traffic.jsonl
mapillary/chunks/<spatial-chunk>.jsonl
mapillary/import-report.json
```

## Score area filtering

Create subsets using the score bounds from the PDF:

```text
Score 01:
lon 107.610–107.625
lat -6.930–-6.905

Score 02:
lon 107.570–107.586
lat -6.931–-6.905
```

The subset is a search scope.

It does not prove source identity.

## Indexes

Index by:

- property ID;
- raw value;
- prefix;
- coordinate;
- score bounds;
- first seen;
- last seen.

Prepare spatial index support.

## Large-data loading

Do not bundle the complete raw dataset into the initial JavaScript chunk.

Use one of:

- build-time chunk files;
- static JSONL ranges;
- IndexedDB import;
- Web Worker parsing;
- server-side endpoint if the deployment already has a backend.

The UI must load only the active score area or raw value candidate set.

## Dataset profile verification

Expected source-level counts from the attached files:

```text
mapillary-points:
110,299 features
39 distinct raw values

mapillary-traffic:
3,778 features
91 distinct raw values
```

Fail validation when the source hash changes and counts are not re-profiled.

## Missing score raw value

The score raw value:

```text
regulatory--merge--g1
```

is not present in the attached datasets.

Record:

```text
RAW_VALUE_NOT_FOUND
```

Do not replace it with a similar traffic-sign value.

## API token behavior

The corpus explorer must work entirely from local GeoJSON.

A Mapillary token may enrich media later.

The token must never control access to the score, source metadata, or lineage.
```

---

# FILE: `proto_path_full_corpus_integration/prompts/04_SOURCE_LINKAGE_AND_AMBIGUITY_PROMPT.md`

- Size: `2262` bytes
- SHA-256: `0f6194fe28d7b12b5f85006e437f1bf15771ae66353ba39907a006f0b850911d`

```markdown
# SOURCE LINKAGE AND AMBIGUITY PROMPT

Implement evidence-based linking between Data Provocation rows and Mapillary source records.

## Core rule

A raw-value match is not an exact source match.

A score-area match is not an exact source match.

A stage-axis distance is not geographic distance.

## Resolution hierarchy

Use the strongest available evidence:

### Level 1

```text
EXACT_PROPERTY_ID
```

The score or a verified source map provides the Mapillary property ID.

### Level 2

```text
EXACT_COORDINATE
```

Exact coordinate and exact raw value match.

### Level 3

```text
NEAR_COORDINATE_ROUNDED
```

Coordinate differs only through documented rounding tolerance.

Store the tolerance and nearest alternatives.

### Level 4

```text
VALUE_AND_SCORE_BOUNDS
```

Exact raw value exists inside score bounds.

Return all candidates.

### Level 5

```text
VALUE_ONLY_AMBIGUOUS
```

Exact raw value exists in the dataset, while no reliable spatial constraint identifies the record.

### Special statuses

```text
MANUAL_VERIFIED
RAW_VALUE_NOT_FOUND
SCORE_SYSTEM_DATUM
UNRESOLVED
```

## Candidate set model

```json
{
  "dataProvocationId": "unit-dp-c1-3-1",
  "resolutionStatus": "VALUE_AND_SCORE_BOUNDS",
  "candidateCount": 90,
  "candidateFeatureIds": [],
  "query": {
    "rawValue": "regulatory--no-right-turn--g1",
    "scoreBounds": "score-01"
  },
  "selectedFeatureId": null,
  "selectionEvidence": null,
  "reviewRequired": true
}
```

For large candidate sets, store a query reference and count instead of duplicating every feature ID.

## Manual verification

A curator can select a candidate.

Store:

```text
reviewer
timestamp
evidence note
source version hash
previous status
new status
```

Never alter the raw source feature.

## Stage system data

Classify:

```text
Node_B terminal
score bounds
Node declarations
phase state
```

as score-system data.

Do not search them in Mapillary.

## UI

Show evidence strength through text and symbol.

Do not use color alone.

Required labels:

```text
CONFIRMED SOURCE
ROUNDED COORDINATE MATCH
CANDIDATE SET
AMBIGUOUS VALUE MATCH
RAW VALUE NOT FOUND
SCORE-SYSTEM DATUM
```

Allow users to open:

- Data Provocation;
- candidate list;
- source map;
- source raw JSON;
- verification history.
```

---

# FILE: `proto_path_full_corpus_integration/prompts/05_EXISTING_WEB_MIGRATION_PROMPT.md`

- Size: `2590` bytes
- SHA-256: `ec07ad6a08c66f4a0fbb10054113ea32448ffc1181ae9932283df35685e1ff4a`

```markdown
# MIGRATE THE EXISTING PROTO PATH WEB TO FULL CORPUS MODE

Extend the existing application. Preserve existing routes and working features.

## 1. Domain migration

Replace the sample-only model with a corpus model.

Add:

```text
DocumentSource
DocumentPage
Section
Score
Phase
Checkpoint
ScoreUnit
ExplicitRelationPair
Taxonomy
SourceDataset
SourceFeature
SourceCandidateSet
SpatialOutput
DiagramAssetVersion
ContentConflict
ReviewDecision
```

Keep compatibility adapters for current `NotationPair`.

## 2. Data migration

Migrate the existing two sample records.

### Existing Freeze diagram

Register as:

```text
COMPATIBLE_PENDING_REVIEW
```

when its claimed content matches the latest PDF.

### Existing Glitch diagram

Register as:

```text
CONTENT_MISMATCH_REVIEW_REQUIRED
```

because its claimed C1.3.2 / RT.C1.3.2 content conflicts with the latest detailed PDF.

Do not delete it.

Do not show it as canonical by default.

## 3. Explorer hierarchy

Change selector order to:

```text
SCORE
PHASE
CHECKPOINT
UNIT TYPE
UNIT
PAIR / RELATION
ASSET VERSION
```

## 4. Checkpoint overview

Use a checkpoint board with lanes:

```text
RAW DATA
SITUATIONS
BODY IMPULSES
OUTPUTS
REGISTERS
DIAGRAMS
CONFLICTS
```

Connect lanes through explicit references.

## 5. All-score navigator

Display:

```text
SCORE 01
C1.0 C1.1 C1.2 C1.3 C1.4 C1.5 C1.6 C1.7

SCORE 02
C2.0 C2.1 C2.2 C2.3 C2.4 C2.5 C2.6 C2.7
```

Each checkpoint shows:

- unit counts;
- unresolved count;
- diagram coverage;
- review status.

## 6. Register views

Phase 03 and Phase 04 require dedicated views.

Support:

```text
KS source register
VI impulse variation
PU repetition pattern
RO object register
AP locking rule
TR additional obstacle
OP repetition output
OE output end state
```

Do not force these into Situation or Body Impulse cards.

## 7. Document synchronization

Add a split view:

```text
PDF PAGE | STRUCTURED SCORE
```

Selecting a code in either side updates the other side.

## 8. Search

Search:

- code;
- raw value;
- token;
- checkpoint;
- anatomical locus;
- output;
- page text;
- conflict.

## 9. URL design

Use stable deep links:

```text
/unit/st-c1-3-1
/checkpoint/c1-3
/source/mapillary-traffic:123
/conflict/score02-axis-length
```

## 10. Data loading

Load:

- document manifest;
- checkpoint index;
- unit index;
- active checkpoint content.

Lazy-load:

- page text;
- page render;
- candidate features;
- raw JSON;
- diagrams;
- research trajectory.

## 11. Completion

The app is migrated when the complete score can be navigated without removing existing sample functionality.
```

---

# FILE: `proto_path_full_corpus_integration/prompts/06_CANONICAL_SCHEMA_V2.md`

- Size: `4836` bytes
- SHA-256: `d0ad05b2480b46de3f2e18ec2d372e8ca0b1cf10b28cce2c2201902110cc9ec8`

```markdown
# CANONICAL SCHEMA V2

```ts
type UnitPrefix =
  | "DP" | "ST" | "RT" | "KS" | "RS" | "RO"
  | "AP" | "OE" | "PU" | "VI" | "TR" | "OP"
  | "UNKNOWN";

type ReviewStatus =
  | "AUTO_EXTRACTED"
  | "HUMAN_REVIEW_REQUIRED"
  | "HUMAN_VERIFIED"
  | "SOURCE_CONFLICT"
  | "REJECTED";

type SourceResolutionStatus =
  | "EXACT_PROPERTY_ID"
  | "EXACT_COORDINATE"
  | "NEAR_COORDINATE_ROUNDED"
  | "VALUE_AND_SCORE_BOUNDS"
  | "VALUE_ONLY_AMBIGUOUS"
  | "MANUAL_VERIFIED"
  | "RAW_VALUE_NOT_FOUND"
  | "SCORE_SYSTEM_DATUM"
  | "UNRESOLVED";

interface SourceDocument {
  id: string;
  fileName: string;
  sha256: string;
  pageCount: number;
  contentVersion: string;
}

interface DocumentPage {
  id: string;
  documentId: string;
  pageNumber: number;
  text: string;
  renderSrc?: string;
}

interface Section {
  id: string;
  documentId: string;
  title: string;
  kind:
    | "method"
    | "taxonomy"
    | "score"
    | "trajectory"
    | "research"
    | "example";
  pageStart: number;
  pageEnd: number;
  parentSectionId: string | null;
}

interface Score {
  id: string;
  code: "C1" | "C2" | string;
  title: string;
  character: string;
  bounds: {
    lonMin: number;
    lonMax: number;
    latMin: number;
    latMax: number;
  } | null;
  axisLengthMeters: number | null;
  axisLengthClaims: Array<{
    value: number;
    page: number;
    context: string;
  }>;
}

interface Checkpoint {
  id: string;
  scoreId: string;
  code: string;
  title: string;
  phaseId: string;
  pageStart: number;
  pageEnd: number;
  axisRangeMeters?: {
    start: number;
    end: number;
  } | null;
}

interface ScoreUnit {
  id: string;
  code: string;
  prefix: UnitPrefix;
  documentId: string;
  page: number;
  sectionPath: string[];
  checkpointId: string | null;
  verbatimText: string;
  normalizedSearchText: string;
  declaredTokens: string[];
  references: UnitReference[];
  rawValueMentions: string[];
  coordinateMentions: Array<{ lon: number; lat: number }>;
  distanceMentionsMeters: number[];
  outputTokenIds: string[];
  anatomicalLocusIds: string[];
  extractionConfidence: number;
  reviewStatus: ReviewStatus;
}

interface UnitReference {
  id: string;
  fromUnitId: string;
  targetCode: string;
  targetUnitId: string | null;
  relation:
    | "provoked_by"
    | "responds_to"
    | "produces"
    | "carries"
    | "replays"
    | "locks"
    | "introduces"
    | "continues_to"
    | "mentions";
  explicit: boolean;
}

interface ExplicitRelationPair {
  id: string;
  checkpointId: string;
  situationUnitId: string;
  bodyImpulseUnitId: string;
  relationReferenceId: string;
  pairingMethod: "EXPLICIT_REFERENCE" | "TABLE_STRUCTURE" | "HUMAN_VERIFIED";
  confidence: number;
}

interface SourceDataset {
  id: string;
  fileName: string;
  sha256: string;
  featureCount: number;
  distinctRawValueCount: number;
  bounds: {
    lonMin: number;
    lonMax: number;
    latMin: number;
    latMax: number;
  };
}

interface SourceFeature {
  id: string;
  datasetId: string;
  propertyId: string;
  coordinate: {
    lon: number;
    lat: number;
  };
  rawValue: string;
  valuePrefix: string;
  firstSeenAt: number | null;
  lastSeenAt: number | null;
}

interface SourceCandidateSet {
  id: string;
  dataProvocationUnitId: string;
  status: SourceResolutionStatus;
  query: {
    propertyId?: string;
    rawValue?: string;
    coordinate?: { lon: number; lat: number };
    scoreId?: string;
    tolerance?: number;
  };
  candidateCount: number;
  candidateFeatureIds?: string[];
  selectedFeatureId: string | null;
  reviewRequired: boolean;
}

interface DiagramAssetVersion {
  id: string;
  fileName: string;
  src: string;
  sha256: string;
  claimedCodes: string[];
  sourceDocumentHash: string | null;
  contentVersion: string;
  status:
    | "CANONICAL"
    | "COMPATIBLE_PENDING_REVIEW"
    | "LEGACY_DRAFT"
    | "CONTENT_MISMATCH_REVIEW_REQUIRED"
    | "MISSING";
  mismatchNotes: string[];
  alt: string;
}

interface ContentConflict {
  id: string;
  type:
    | "RAW_VALUE_NOT_FOUND"
    | "SUMMARY_DETAIL_CONFLICT"
    | "AXIS_LENGTH_CONFLICT"
    | "DIAGRAM_CONTENT_MISMATCH"
    | "UNRESOLVED_REFERENCE"
    | "UNDECLARED_TOKEN"
    | "DUPLICATE_CODE_DIFFERENT_TEXT"
    | "OTHER";
  entityIds: string[];
  sourceClaims: Array<{
    page?: number;
    code?: string;
    text: string;
  }>;
  status: "OPEN" | "UNDER_REVIEW" | "RESOLVED" | "ACCEPTED_AS_VARIANT";
  resolutionNote: string | null;
}
```

## Storage layout

```text
content/
  document.json
  pages.jsonl
  sections.json
  scores.json
  phases.json
  checkpoints.json
  units/
    dp.jsonl
    st.jsonl
    rt.jsonl
    registers.jsonl
  explicit-pairs.jsonl
  references.jsonl
  taxonomies.json
  conflicts.json
  diagrams.json

mapillary/
  dataset-manifest.json
  value-index.json
  score-area-index.json
  chunks/
```
```

---

# FILE: `proto_path_full_corpus_integration/prompts/07_DIAGRAM_ASSET_RECONCILIATION_PROMPT.md`

- Size: `1717` bytes
- SHA-256: `3d0e89f2141a538d721b5ce58df823bbd47f1d2ba1d660c0407b13ab4300f5ed`

```markdown
# DIAGRAM ASSET RECONCILIATION PROMPT

Audit every generated architectural diagram against the current canonical PDF.

## Required metadata

For each image:

```text
file hash
image dimensions
visible title
claimed Situation code
claimed Body Impulse code
claimed source raw value
claimed distance
claimed anatomical locus
claimed output
source document hash
creation version
review status
```

## Reconciliation steps

1. Read the visible diagram text.
2. Read the current PDF units for the claimed codes.
3. Compare:
   - source value;
   - Situation text;
   - Body Impulse text;
   - anatomical locus;
   - Spatial Output;
   - checkpoint;
   - axis length.
4. Assign a status.
5. Record every mismatch.
6. Keep the image accessible under version history.

## Existing asset decisions

### Freeze board

Expected claim:

```text
ST.C1.3.1
RT.C1.3.1
regulatory--no-right-turn--g1
SPINE + PELVIS
LOCKED_AXIS
```

Register as `COMPATIBLE_PENDING_REVIEW` until visual and source text are verified.

### Glitch board

Current visible claim:

```text
ST.C1.3.2 — CONFLICTING VECTORS
RT.C1.3.2 — GLITCH RESPONSE
WRIST + SHOULDER
TREMOR LOOP
```

The latest detailed PDF does not assign this content to those codes.

Register as:

```text
CONTENT_MISMATCH_REVIEW_REQUIRED
```

Possible curator actions:

- preserve as an earlier draft;
- reassign to an iteration unit such as `VI.C1.6.5`;
- regenerate against the latest PDF;
- accept as a summary-level visualization with explicit variant labeling.

Do not decide automatically.

## Web behavior

Canonical view hides mismatched assets by default.

A `SHOW DRAFT / VARIANT ASSETS` control reveals them with a warning banner.

The warning must identify the mismatch.
```

---

# FILE: `proto_path_full_corpus_integration/prompts/08_QA_AND_COMPLETENESS_PROMPT.md`

- Size: `2116` bytes
- SHA-256: `14e16f74459086a4a8db3c1a153b3d398566b59a5720d654dc29019136637280`

```markdown
# QA AND COMPLETENESS PROMPT

Audit the complete corpus integration.

## Source checks

- PDF hash recorded.
- PDF page count recorded.
- both GeoJSON hashes recorded.
- raw feature counts match.
- distinct raw-value counts match.
- no source file mutated.

## PDF completeness

Confirm checkpoint IDs:

```text
C1.0 C1.1 C1.2 C1.3 C1.4 C1.5 C1.6 C1.7
C2.0 C2.1 C2.2 C2.3 C2.4 C2.5 C2.6 C2.7
```

Confirm indexed prefixes:

```text
DP ST RT KS RO AP OE PU VI TR OP
```

Report any legend prefix with zero extracted units.

## Reference integrity

- every explicit reference resolves or appears in conflicts;
- cross-suffix references remain intact;
- no inferred relation replaces an explicit relation;
- no Body Impulse is paired only by suffix when an explicit reference disagrees.

## Raw value checks

- exact punctuation preserved;
- `regulatory--merge--g1` flagged;
- `Node_B terminal` classified as score-system;
- candidate counts generated;
- no ambiguous candidate selected automatically.

## Diagram checks

- each asset has version metadata;
- each asset has alt text;
- latest source hash recorded;
- C1.3.2 Glitch mismatch visible;
- missing diagrams do not block the score.

## UI checks

- complete checkpoint navigator;
- document split view;
- page-to-unit synchronization;
- unit-to-source candidate view;
- Phase 03 registers;
- Phase 04 residuals;
- conflict queue;
- search;
- mobile;
- keyboard;
- reduced motion.

## Performance checks

- initial route does not load 110,299 features;
- candidate list virtualized;
- raw JSON lazy-loaded;
- PDF page renders lazy-loaded;
- images lazy-loaded;
- parsing moved off main thread.

## Required reports

Generate:

```text
reports/corpus-integrity.json
reports/unresolved-references.csv
reports/undeclared-tokens.csv
reports/raw-value-resolution.csv
reports/diagram-reconciliation.csv
reports/human-review-queue.csv
```

## Definition of complete

The integration is complete only when all content is either:

```text
ingested and linked
or
ingested and explicitly flagged for review
```

No source content may disappear because extraction failed.
```

---

# FILE: `proto_path_full_corpus_integration/prompts/09_AGENT_EXECUTION_SEQUENCE.md`

- Size: `1585` bytes
- SHA-256: `1e1c7331e38090e134a84d077ca51c5303c6880822214f12eb03df21ea893c22`

```markdown
# AGENT EXECUTION SEQUENCE

Use this sequence in Antigravity, Google AI Studio, or Firebase Studio.

## Run 1 — Audit and plan

```text
Read all prompt files and generated source audits.

Inspect the canonical PDF and both GeoJSON files.

Do not write application code yet.

Produce:
- source audit;
- migration plan;
- schema-difference report;
- conflict list;
- proposed generated-file tree.
```

## Run 2 — Build ingestion pipeline

```text
Implement PDF extraction, GeoJSON profiling, code inventory, Data Provocation extraction, source candidate generation, and validation.

Run the pipeline against the attached sources.

Do not migrate the UI until canonical outputs validate.
```

## Run 3 — Review extraction

```text
Open the generated human-review queue.

Fix deterministic parsing defects.

Keep semantic conflicts open.

Confirm all 16 checkpoints and all code prefixes.
```

## Run 4 — Migrate the web

```text
Extend the existing Proto Path application with corpus mode, document reader, checkpoint pages, register views, source candidate views, and conflict views.

Preserve existing working features.
```

## Run 5 — Reconcile diagrams

```text
Register existing diagrams with version metadata.

Mark mismatches.

Do not overwrite source images.

Attach only compatible assets to canonical units.
```

## Run 6 — QA

```text
Run production build, unit tests, end-to-end tests, corpus validation, token-free mode, large-data loading checks, keyboard checks, and responsive checks.

Fix critical failures.

Report unresolved content conflicts honestly.
```
```

---

# FILE: `proto_path_full_corpus_integration/prompts/PROTO_PATH_FULL_CORPUS_ALL_IN_ONE.md`

- Size: `28130` bytes
- SHA-256: `387a8891f95f5037a0dca2872f175c8ba79a58ee7b45f5ae8aded7931af6d6ef`

```markdown
# MASTER PROMPT — INTEGRATE THE COMPLETE PROTO PATH CORPUS

You are working inside an existing Proto Path web application.

Your task is to ingest the complete canonical score PDF and the two full Mapillary GeoJSON datasets, then extend the existing web so every score section, notation unit, explicit body response, iteration register, residual state, and available diagram can be explored through one traceable system.

## Canonical inputs

Treat these files as immutable:

```text
source/Proto Path - WHERE ARE YOU DEPART FROM _gulangsatriya.pdf
source/mapillary-points - Large Dataset Bandung.json
source/mapillary-traffic - Large Dataset Bandung.json
```

Do not rewrite these files.

Compute and preserve hashes.

Use the generated audit files as preliminary guidance, then independently validate them.

## Required transformation

Build this traceable chain:

```text
SOURCE DOCUMENT
→ PAGE / SECTION
→ SCORE
→ PHASE
→ CHECKPOINT
→ DATA PROVOCATION
→ SOURCE CANDIDATE SET
→ SITUATION
→ BODY IMPULSE
→ SPATIAL OUTPUT
→ RESIDUAL / REGISTER
→ DIAGRAM ASSET
```

The web must also expose the raw-to-performance chain:

```text
MAPILLARY RAW FEATURE
→ DATA PROVOCATION
→ OBJECT / STIMULUS
→ SITUATION
→ BODY ACTION
→ ANATOMICAL LOCUS
→ SPATIAL OUTPUT
```

## Do not force a false one-to-one model

The latest PDF does not always contain one Situation and one Body Impulse per checkpoint.

A checkpoint may contain:

- several Data Provocations;
- several Situation rows;
- several Body Impulse rows;
- one Body Impulse that explicitly refers to a different Situation suffix;
- register rows;
- Output End State rows;
- iteration variations;
- repetition patterns;
- object registers;
- locking rules;
- additional obstacles;
- repetition outputs.

Model three levels:

```text
1. CHECKPOINT
2. NOTATION UNIT
3. EXPLICIT RELATION PAIR
```

Pair Body Impulse rows through explicit references such as:

```text
referring to [ST.C1.3.1]
```

Do not pair rows solely through matching numeric suffixes.

## Complete content scope

Ingest:

- method framework;
- document assets;
- reading scheme;
- note on data, objects, and body;
- score legend;
- material variable matrix;
- kinetic stimulus taxonomy;
- state value taxonomy;
- kinetic action taxonomy;
- anatomical locus taxonomy;
- spatial output taxonomy;
- reading example;
- Score 01:
  - C1.0 through C1.7;
- Score 02:
  - C2.0 through C2.7;
- all DP, ST, RT, KS, VI, PU, RO, AP, OE, TR, and OP units;
- Trajectory Performance;
- Research Trajectory;
- source links;
- source conflicts;
- diagram assets and their review status.

## Source extraction rules

1. Preserve verbatim text.
2. Preserve page number.
3. Preserve section path.
4. Preserve every code exactly.
5. Preserve every bracketed token.
6. Extract explicit code references.
7. Record extraction confidence.
8. Keep page image or PDF deep-link metadata.
9. Never repair source text silently.
10. Store proposed corrections separately.

## Mapillary data rules

Keep both GeoJSON files as immutable source.

Generate derived artifacts:

```text
dataset manifest
raw-value index
prefix index
bounding-box index
score-area subsets
candidate match sets
chunked JSONL
validation report
```

Do not convert the complete datasets to Markdown.

Do not load 110,299 features on initial page load.

## Source-linking rules

Use the following resolution statuses:

```text
EXACT_PROPERTY_ID
EXACT_COORDINATE
NEAR_COORDINATE_ROUNDED
VALUE_AND_SCORE_BOUNDS
VALUE_ONLY_AMBIGUOUS
MANUAL_VERIFIED
RAW_VALUE_NOT_FOUND
SCORE_SYSTEM_DATUM
UNRESOLVED
```

Stage-axis distance is not geographic distance.

Never use `±12.15m` to select a geographic point unless a documented route projection exists.

## Mandatory conflict handling

Read:

```text
generated_source_audit/KNOWN_SOURCE_CONFLICTS.md
```

Create a first-class `ContentConflict` entity.

At minimum, register:

- `regulatory--merge--g1` absent from raw JSON;
- Score 02 axis 14 m versus later 15 m summary;
- current C1.3.2 / RT.C1.3.2 Glitch diagram mismatch with the latest detailed PDF;
- summary-level Glitch claims versus detailed-row placement;
- any unresolved code reference;
- any undeclared token.

Do not hide these issues.

## Required web changes

Extend the current app with:

```text
/corpus
/document
/score/:scoreId
/checkpoint/:checkpointId
/unit/:unitId
/source/:sourceFeatureId
/conflicts
/dev/integrity
```

Update `/explore` so the user can choose:

```text
score
phase
checkpoint
notation unit
explicit pair
iteration / residual layer
diagram version
```

## Checkpoint page

Each checkpoint page must show:

1. score context;
2. stage-axis position;
3. raw Data Provocations;
4. candidate Mapillary source records;
5. Situation units;
6. Body Impulse units;
7. explicit references;
8. anatomical loci;
9. Spatial Outputs;
10. state and residue;
11. iteration carry-over;
12. diagrams;
13. source conflicts;
14. previous and next checkpoint.

## Document mode

Create a document reader synchronized with the structured score.

Features:

- page thumbnails;
- page text;
- highlighted codes;
- click code to open unit;
- click unit to open page;
- show extraction confidence;
- show source PDF;
- show section hierarchy;
- search codes and raw values.

## Corpus completeness dashboard

Show:

```text
PDF pages ingested
checkpoints ingested
code units by prefix
units with parsed references
units without parsed references
raw values found
raw values unresolved
units with diagram
units without diagram
content conflicts
human-review queue
```

These are corpus integrity indicators, not decorative business KPIs.

## Diagram asset policy

Every diagram must include:

```text
asset ID
file path
source PDF hash
content version
claimed Situation code
claimed Body Impulse code
review status
mismatch notes
```

Allowed status:

```text
CANONICAL
COMPATIBLE_PENDING_REVIEW
LEGACY_DRAFT
CONTENT_MISMATCH_REVIEW_REQUIRED
MISSING
```

Never attach a mismatched diagram as canonical.

## Performance

Use:

- lazy loading;
- route-scoped data;
- precomputed indexes;
- Web Workers for large JSON;
- virtualized source lists;
- spatial filtering;
- image lazy loading;
- cache keyed by source hash.

The initial explorer must not parse both full GeoJSON files in the main thread.

## Deliverables

Produce:

1. ingestion scripts;
2. canonical content bundle;
3. schema validation;
4. migration code;
5. complete checkpoint UI;
6. PDF document reader;
7. Mapillary source explorer;
8. conflict review interface;
9. updated diagram registry;
10. tests;
11. source and integrity reports;
12. README.

## Completion condition

Do not claim completion until:

- all 16 checkpoint IDs C1.0-C1.7 and C2.0-C2.7 are visible;
- all detected coded units are indexed;
- every unit links to a page;
- Data Provocations preserve raw values;
- both GeoJSON files are profiled and searchable;
- ambiguous matches remain ambiguous;
- unresolved raw values remain visible;
- diagram conflicts remain visible;
- production build passes;
- corpus integrity tests pass.


---

# PDF TO CANONICAL SCORE GRAPH PROMPT

Build a deterministic extraction pipeline for the Proto Path PDF.

## Output files

Generate:

```text
content/document.json
content/pages.jsonl
content/sections.json
content/taxonomies.json
content/scores.json
content/phases.json
content/checkpoints.json
content/units.jsonl
content/references.jsonl
content/explicit-pairs.jsonl
content/research-trajectory.json
reports/pdf-extraction-report.json
reports/pdf-human-review.csv
```

## Extraction unit

Create one `ScoreUnit` for each coded row.

Supported prefixes:

```text
DP
ST
RT
KS
RS
RO
AP
OE
PU
VI
TR
OP
```

Store undeclared prefixes without discarding them.

## Required fields

```json
{
  "id": "unit-st-c1-3-1",
  "code": "ST.C1.3.1",
  "prefix": "ST",
  "page": 10,
  "sectionPath": [
    "Score 01",
    "Phase 2",
    "C1.3 Authority Interruption",
    "Situation"
  ],
  "verbatimText": "...",
  "normalizedSearchText": "...",
  "declaredTokens": [],
  "references": [],
  "distanceMentions": [],
  "coordinateMentions": [],
  "rawValueMentions": [],
  "extractionConfidence": 0.98,
  "reviewStatus": "AUTO_EXTRACTED"
}
```

## Reading tables

The PDF contains table rows whose sentences may wrap across lines.

Use page text geometry when available.

Do not split a sentence at a visual line break.

A unit ends at:

- the next coded row;
- a new table heading;
- a new checkpoint;
- a new phase;
- end of page only when the row does not continue.

Implement continuation detection across page boundaries.

## References

Extract references in all forms:

```text
[DP.C1.3.1]
[ST.C1.3.1]
[RT.C1.3.1]
[OE.C1.END.1]
Node_A
Node_B
Node_C
±12.15m
```

Classify reference relations:

```text
provoked_by
responds_to
produces
carries
replays
locks
introduces
continues_to
mentions
```

## Explicit pairing

Build an explicit pair only when the Body Impulse text contains or structurally declares a Situation reference.

Example:

```text
RT.C1.3.2 refers to ST.C1.3.1
```

The pair key must preserve this cross-suffix relation.

Do not assume:

```text
RT.C1.3.2 → ST.C1.3.2
```

## Taxonomies

Extract:

- prefix legend;
- material object codes;
- kinetic stimuli;
- state facets and values;
- kinetic actions;
- anatomical loci;
- spatial outputs.

Validate every bracketed token used in score rows.

Classify unknown tokens:

```text
UNDECLARED_TOKEN
POSSIBLE_EXTRACTION_ERROR
SOURCE_EXTENSION
```

## Non-score sections

Keep these separate from score execution units:

```text
Method Framework
Living Text
Trajectory Performance
Research Trajectory
script fragments from earlier experiments
```

They remain searchable and can link to method concepts.

Do not turn research prose into stage instructions.

## Human review report

Create review rows for:

- low-confidence table extraction;
- broken line joins;
- duplicate code with different text;
- reference to missing unit;
- declared prefix unused;
- used prefix absent from legend;
- summary/detail contradiction;
- page count disagreement;
- axis length disagreement.

## PDF rendering link

Every unit should support:

```text
open page
highlight code region
show page image
show verbatim extraction
```

When code bounding boxes cannot be extracted reliably, preserve page number and text search anchor.


---

# MAPILLARY GEOJSON PIPELINE PROMPT

Build an ingestion and indexing pipeline for:

```text
mapillary-points - Large Dataset Bandung.json
mapillary-traffic - Large Dataset Bandung.json
```

## Preserve source

Keep raw files immutable.

Generate a manifest containing:

```text
file name
size
SHA-256
GeoJSON type
feature count
distinct raw-value count
bounds
parser version
```

## Normalized feature contract

```json
{
  "sourceFeatureId": "mapillary-points:347198704109391",
  "datasetId": "mapillary-points",
  "propertyId": "347198704109391",
  "geometryType": "Point",
  "coordinate": {
    "lon": 107.57509410381317,
    "lat": -6.926421521791951
  },
  "rawValue": "construction--flat--driveway",
  "valuePrefix": "construction",
  "firstSeenAt": 1655787106296,
  "lastSeenAt": 1655787106296,
  "rawRecordOffset": null
}
```

Do not change `rawValue`.

## Derived files

Generate:

```text
mapillary/dataset-manifest.json
mapillary/value-index.json
mapillary/prefix-index.json
mapillary/score-area-index.json
mapillary/features.points.jsonl
mapillary/features.traffic.jsonl
mapillary/chunks/<spatial-chunk>.jsonl
mapillary/import-report.json
```

## Score area filtering

Create subsets using the score bounds from the PDF:

```text
Score 01:
lon 107.610–107.625
lat -6.930–-6.905

Score 02:
lon 107.570–107.586
lat -6.931–-6.905
```

The subset is a search scope.

It does not prove source identity.

## Indexes

Index by:

- property ID;
- raw value;
- prefix;
- coordinate;
- score bounds;
- first seen;
- last seen.

Prepare spatial index support.

## Large-data loading

Do not bundle the complete raw dataset into the initial JavaScript chunk.

Use one of:

- build-time chunk files;
- static JSONL ranges;
- IndexedDB import;
- Web Worker parsing;
- server-side endpoint if the deployment already has a backend.

The UI must load only the active score area or raw value candidate set.

## Dataset profile verification

Expected source-level counts from the attached files:

```text
mapillary-points:
110,299 features
39 distinct raw values

mapillary-traffic:
3,778 features
91 distinct raw values
```

Fail validation when the source hash changes and counts are not re-profiled.

## Missing score raw value

The score raw value:

```text
regulatory--merge--g1
```

is not present in the attached datasets.

Record:

```text
RAW_VALUE_NOT_FOUND
```

Do not replace it with a similar traffic-sign value.

## API token behavior

The corpus explorer must work entirely from local GeoJSON.

A Mapillary token may enrich media later.

The token must never control access to the score, source metadata, or lineage.


---

# SOURCE LINKAGE AND AMBIGUITY PROMPT

Implement evidence-based linking between Data Provocation rows and Mapillary source records.

## Core rule

A raw-value match is not an exact source match.

A score-area match is not an exact source match.

A stage-axis distance is not geographic distance.

## Resolution hierarchy

Use the strongest available evidence:

### Level 1

```text
EXACT_PROPERTY_ID
```

The score or a verified source map provides the Mapillary property ID.

### Level 2

```text
EXACT_COORDINATE
```

Exact coordinate and exact raw value match.

### Level 3

```text
NEAR_COORDINATE_ROUNDED
```

Coordinate differs only through documented rounding tolerance.

Store the tolerance and nearest alternatives.

### Level 4

```text
VALUE_AND_SCORE_BOUNDS
```

Exact raw value exists inside score bounds.

Return all candidates.

### Level 5

```text
VALUE_ONLY_AMBIGUOUS
```

Exact raw value exists in the dataset, while no reliable spatial constraint identifies the record.

### Special statuses

```text
MANUAL_VERIFIED
RAW_VALUE_NOT_FOUND
SCORE_SYSTEM_DATUM
UNRESOLVED
```

## Candidate set model

```json
{
  "dataProvocationId": "unit-dp-c1-3-1",
  "resolutionStatus": "VALUE_AND_SCORE_BOUNDS",
  "candidateCount": 90,
  "candidateFeatureIds": [],
  "query": {
    "rawValue": "regulatory--no-right-turn--g1",
    "scoreBounds": "score-01"
  },
  "selectedFeatureId": null,
  "selectionEvidence": null,
  "reviewRequired": true
}
```

For large candidate sets, store a query reference and count instead of duplicating every feature ID.

## Manual verification

A curator can select a candidate.

Store:

```text
reviewer
timestamp
evidence note
source version hash
previous status
new status
```

Never alter the raw source feature.

## Stage system data

Classify:

```text
Node_B terminal
score bounds
Node declarations
phase state
```

as score-system data.

Do not search them in Mapillary.

## UI

Show evidence strength through text and symbol.

Do not use color alone.

Required labels:

```text
CONFIRMED SOURCE
ROUNDED COORDINATE MATCH
CANDIDATE SET
AMBIGUOUS VALUE MATCH
RAW VALUE NOT FOUND
SCORE-SYSTEM DATUM
```

Allow users to open:

- Data Provocation;
- candidate list;
- source map;
- source raw JSON;
- verification history.


---

# MIGRATE THE EXISTING PROTO PATH WEB TO FULL CORPUS MODE

Extend the existing application. Preserve existing routes and working features.

## 1. Domain migration

Replace the sample-only model with a corpus model.

Add:

```text
DocumentSource
DocumentPage
Section
Score
Phase
Checkpoint
ScoreUnit
ExplicitRelationPair
Taxonomy
SourceDataset
SourceFeature
SourceCandidateSet
SpatialOutput
DiagramAssetVersion
ContentConflict
ReviewDecision
```

Keep compatibility adapters for current `NotationPair`.

## 2. Data migration

Migrate the existing two sample records.

### Existing Freeze diagram

Register as:

```text
COMPATIBLE_PENDING_REVIEW
```

when its claimed content matches the latest PDF.

### Existing Glitch diagram

Register as:

```text
CONTENT_MISMATCH_REVIEW_REQUIRED
```

because its claimed C1.3.2 / RT.C1.3.2 content conflicts with the latest detailed PDF.

Do not delete it.

Do not show it as canonical by default.

## 3. Explorer hierarchy

Change selector order to:

```text
SCORE
PHASE
CHECKPOINT
UNIT TYPE
UNIT
PAIR / RELATION
ASSET VERSION
```

## 4. Checkpoint overview

Use a checkpoint board with lanes:

```text
RAW DATA
SITUATIONS
BODY IMPULSES
OUTPUTS
REGISTERS
DIAGRAMS
CONFLICTS
```

Connect lanes through explicit references.

## 5. All-score navigator

Display:

```text
SCORE 01
C1.0 C1.1 C1.2 C1.3 C1.4 C1.5 C1.6 C1.7

SCORE 02
C2.0 C2.1 C2.2 C2.3 C2.4 C2.5 C2.6 C2.7
```

Each checkpoint shows:

- unit counts;
- unresolved count;
- diagram coverage;
- review status.

## 6. Register views

Phase 03 and Phase 04 require dedicated views.

Support:

```text
KS source register
VI impulse variation
PU repetition pattern
RO object register
AP locking rule
TR additional obstacle
OP repetition output
OE output end state
```

Do not force these into Situation or Body Impulse cards.

## 7. Document synchronization

Add a split view:

```text
PDF PAGE | STRUCTURED SCORE
```

Selecting a code in either side updates the other side.

## 8. Search

Search:

- code;
- raw value;
- token;
- checkpoint;
- anatomical locus;
- output;
- page text;
- conflict.

## 9. URL design

Use stable deep links:

```text
/unit/st-c1-3-1
/checkpoint/c1-3
/source/mapillary-traffic:123
/conflict/score02-axis-length
```

## 10. Data loading

Load:

- document manifest;
- checkpoint index;
- unit index;
- active checkpoint content.

Lazy-load:

- page text;
- page render;
- candidate features;
- raw JSON;
- diagrams;
- research trajectory.

## 11. Completion

The app is migrated when the complete score can be navigated without removing existing sample functionality.


---

# CANONICAL SCHEMA V2

```ts
type UnitPrefix =
  | "DP" | "ST" | "RT" | "KS" | "RS" | "RO"
  | "AP" | "OE" | "PU" | "VI" | "TR" | "OP"
  | "UNKNOWN";

type ReviewStatus =
  | "AUTO_EXTRACTED"
  | "HUMAN_REVIEW_REQUIRED"
  | "HUMAN_VERIFIED"
  | "SOURCE_CONFLICT"
  | "REJECTED";

type SourceResolutionStatus =
  | "EXACT_PROPERTY_ID"
  | "EXACT_COORDINATE"
  | "NEAR_COORDINATE_ROUNDED"
  | "VALUE_AND_SCORE_BOUNDS"
  | "VALUE_ONLY_AMBIGUOUS"
  | "MANUAL_VERIFIED"
  | "RAW_VALUE_NOT_FOUND"
  | "SCORE_SYSTEM_DATUM"
  | "UNRESOLVED";

interface SourceDocument {
  id: string;
  fileName: string;
  sha256: string;
  pageCount: number;
  contentVersion: string;
}

interface DocumentPage {
  id: string;
  documentId: string;
  pageNumber: number;
  text: string;
  renderSrc?: string;
}

interface Section {
  id: string;
  documentId: string;
  title: string;
  kind:
    | "method"
    | "taxonomy"
    | "score"
    | "trajectory"
    | "research"
    | "example";
  pageStart: number;
  pageEnd: number;
  parentSectionId: string | null;
}

interface Score {
  id: string;
  code: "C1" | "C2" | string;
  title: string;
  character: string;
  bounds: {
    lonMin: number;
    lonMax: number;
    latMin: number;
    latMax: number;
  } | null;
  axisLengthMeters: number | null;
  axisLengthClaims: Array<{
    value: number;
    page: number;
    context: string;
  }>;
}

interface Checkpoint {
  id: string;
  scoreId: string;
  code: string;
  title: string;
  phaseId: string;
  pageStart: number;
  pageEnd: number;
  axisRangeMeters?: {
    start: number;
    end: number;
  } | null;
}

interface ScoreUnit {
  id: string;
  code: string;
  prefix: UnitPrefix;
  documentId: string;
  page: number;
  sectionPath: string[];
  checkpointId: string | null;
  verbatimText: string;
  normalizedSearchText: string;
  declaredTokens: string[];
  references: UnitReference[];
  rawValueMentions: string[];
  coordinateMentions: Array<{ lon: number; lat: number }>;
  distanceMentionsMeters: number[];
  outputTokenIds: string[];
  anatomicalLocusIds: string[];
  extractionConfidence: number;
  reviewStatus: ReviewStatus;
}

interface UnitReference {
  id: string;
  fromUnitId: string;
  targetCode: string;
  targetUnitId: string | null;
  relation:
    | "provoked_by"
    | "responds_to"
    | "produces"
    | "carries"
    | "replays"
    | "locks"
    | "introduces"
    | "continues_to"
    | "mentions";
  explicit: boolean;
}

interface ExplicitRelationPair {
  id: string;
  checkpointId: string;
  situationUnitId: string;
  bodyImpulseUnitId: string;
  relationReferenceId: string;
  pairingMethod: "EXPLICIT_REFERENCE" | "TABLE_STRUCTURE" | "HUMAN_VERIFIED";
  confidence: number;
}

interface SourceDataset {
  id: string;
  fileName: string;
  sha256: string;
  featureCount: number;
  distinctRawValueCount: number;
  bounds: {
    lonMin: number;
    lonMax: number;
    latMin: number;
    latMax: number;
  };
}

interface SourceFeature {
  id: string;
  datasetId: string;
  propertyId: string;
  coordinate: {
    lon: number;
    lat: number;
  };
  rawValue: string;
  valuePrefix: string;
  firstSeenAt: number | null;
  lastSeenAt: number | null;
}

interface SourceCandidateSet {
  id: string;
  dataProvocationUnitId: string;
  status: SourceResolutionStatus;
  query: {
    propertyId?: string;
    rawValue?: string;
    coordinate?: { lon: number; lat: number };
    scoreId?: string;
    tolerance?: number;
  };
  candidateCount: number;
  candidateFeatureIds?: string[];
  selectedFeatureId: string | null;
  reviewRequired: boolean;
}

interface DiagramAssetVersion {
  id: string;
  fileName: string;
  src: string;
  sha256: string;
  claimedCodes: string[];
  sourceDocumentHash: string | null;
  contentVersion: string;
  status:
    | "CANONICAL"
    | "COMPATIBLE_PENDING_REVIEW"
    | "LEGACY_DRAFT"
    | "CONTENT_MISMATCH_REVIEW_REQUIRED"
    | "MISSING";
  mismatchNotes: string[];
  alt: string;
}

interface ContentConflict {
  id: string;
  type:
    | "RAW_VALUE_NOT_FOUND"
    | "SUMMARY_DETAIL_CONFLICT"
    | "AXIS_LENGTH_CONFLICT"
    | "DIAGRAM_CONTENT_MISMATCH"
    | "UNRESOLVED_REFERENCE"
    | "UNDECLARED_TOKEN"
    | "DUPLICATE_CODE_DIFFERENT_TEXT"
    | "OTHER";
  entityIds: string[];
  sourceClaims: Array<{
    page?: number;
    code?: string;
    text: string;
  }>;
  status: "OPEN" | "UNDER_REVIEW" | "RESOLVED" | "ACCEPTED_AS_VARIANT";
  resolutionNote: string | null;
}
```

## Storage layout

```text
content/
  document.json
  pages.jsonl
  sections.json
  scores.json
  phases.json
  checkpoints.json
  units/
    dp.jsonl
    st.jsonl
    rt.jsonl
    registers.jsonl
  explicit-pairs.jsonl
  references.jsonl
  taxonomies.json
  conflicts.json
  diagrams.json

mapillary/
  dataset-manifest.json
  value-index.json
  score-area-index.json
  chunks/
```


---

# DIAGRAM ASSET RECONCILIATION PROMPT

Audit every generated architectural diagram against the current canonical PDF.

## Required metadata

For each image:

```text
file hash
image dimensions
visible title
claimed Situation code
claimed Body Impulse code
claimed source raw value
claimed distance
claimed anatomical locus
claimed output
source document hash
creation version
review status
```

## Reconciliation steps

1. Read the visible diagram text.
2. Read the current PDF units for the claimed codes.
3. Compare:
   - source value;
   - Situation text;
   - Body Impulse text;
   - anatomical locus;
   - Spatial Output;
   - checkpoint;
   - axis length.
4. Assign a status.
5. Record every mismatch.
6. Keep the image accessible under version history.

## Existing asset decisions

### Freeze board

Expected claim:

```text
ST.C1.3.1
RT.C1.3.1
regulatory--no-right-turn--g1
SPINE + PELVIS
LOCKED_AXIS
```

Register as `COMPATIBLE_PENDING_REVIEW` until visual and source text are verified.

### Glitch board

Current visible claim:

```text
ST.C1.3.2 — CONFLICTING VECTORS
RT.C1.3.2 — GLITCH RESPONSE
WRIST + SHOULDER
TREMOR LOOP
```

The latest detailed PDF does not assign this content to those codes.

Register as:

```text
CONTENT_MISMATCH_REVIEW_REQUIRED
```

Possible curator actions:

- preserve as an earlier draft;
- reassign to an iteration unit such as `VI.C1.6.5`;
- regenerate against the latest PDF;
- accept as a summary-level visualization with explicit variant labeling.

Do not decide automatically.

## Web behavior

Canonical view hides mismatched assets by default.

A `SHOW DRAFT / VARIANT ASSETS` control reveals them with a warning banner.

The warning must identify the mismatch.


---

# QA AND COMPLETENESS PROMPT

Audit the complete corpus integration.

## Source checks

- PDF hash recorded.
- PDF page count recorded.
- both GeoJSON hashes recorded.
- raw feature counts match.
- distinct raw-value counts match.
- no source file mutated.

## PDF completeness

Confirm checkpoint IDs:

```text
C1.0 C1.1 C1.2 C1.3 C1.4 C1.5 C1.6 C1.7
C2.0 C2.1 C2.2 C2.3 C2.4 C2.5 C2.6 C2.7
```

Confirm indexed prefixes:

```text
DP ST RT KS RO AP OE PU VI TR OP
```

Report any legend prefix with zero extracted units.

## Reference integrity

- every explicit reference resolves or appears in conflicts;
- cross-suffix references remain intact;
- no inferred relation replaces an explicit relation;
- no Body Impulse is paired only by suffix when an explicit reference disagrees.

## Raw value checks

- exact punctuation preserved;
- `regulatory--merge--g1` flagged;
- `Node_B terminal` classified as score-system;
- candidate counts generated;
- no ambiguous candidate selected automatically.

## Diagram checks

- each asset has version metadata;
- each asset has alt text;
- latest source hash recorded;
- C1.3.2 Glitch mismatch visible;
- missing diagrams do not block the score.

## UI checks

- complete checkpoint navigator;
- document split view;
- page-to-unit synchronization;
- unit-to-source candidate view;
- Phase 03 registers;
- Phase 04 residuals;
- conflict queue;
- search;
- mobile;
- keyboard;
- reduced motion.

## Performance checks

- initial route does not load 110,299 features;
- candidate list virtualized;
- raw JSON lazy-loaded;
- PDF page renders lazy-loaded;
- images lazy-loaded;
- parsing moved off main thread.

## Required reports

Generate:

```text
reports/corpus-integrity.json
reports/unresolved-references.csv
reports/undeclared-tokens.csv
reports/raw-value-resolution.csv
reports/diagram-reconciliation.csv
reports/human-review-queue.csv
```

## Definition of complete

The integration is complete only when all content is either:

```text
ingested and linked
or
ingested and explicitly flagged for review
```

No source content may disappear because extraction failed.


---

# AGENT EXECUTION SEQUENCE

Use this sequence in Antigravity, Google AI Studio, or Firebase Studio.

## Run 1 — Audit and plan

```text
Read all prompt files and generated source audits.

Inspect the canonical PDF and both GeoJSON files.

Do not write application code yet.

Produce:
- source audit;
- migration plan;
- schema-difference report;
- conflict list;
- proposed generated-file tree.
```

## Run 2 — Build ingestion pipeline

```text
Implement PDF extraction, GeoJSON profiling, code inventory, Data Provocation extraction, source candidate generation, and validation.

Run the pipeline against the attached sources.

Do not migrate the UI until canonical outputs validate.
```

## Run 3 — Review extraction

```text
Open the generated human-review queue.

Fix deterministic parsing defects.

Keep semantic conflicts open.

Confirm all 16 checkpoints and all code prefixes.
```

## Run 4 — Migrate the web

```text
Extend the existing Proto Path application with corpus mode, document reader, checkpoint pages, register views, source candidate views, and conflict views.

Preserve existing working features.
```

## Run 5 — Reconcile diagrams

```text
Register existing diagrams with version metadata.

Mark mismatches.

Do not overwrite source images.

Attach only compatible assets to canonical units.
```

## Run 6 — QA

```text
Run production build, unit tests, end-to-end tests, corpus validation, token-free mode, large-data loading checks, keyboard checks, and responsive checks.

Fix critical failures.

Report unresolved content conflicts honestly.
```
```

---
