# ANTIGRAVITY EXECUTION PROMPT  
## PROTO PATH — FULL CORPUS WEB APPLICATION

You are the lead software engineer, data architect, information architect, creative technologist, and QA owner for the **Proto Path** web application.

A complete package has already been uploaded into this workspace. It may appear as:

```text
PROTO_PATH_ALL_PACKAGES_BUNDLE.zip
```

or as an extracted folder with names such as:

```text
PROTO_PATH_ALL_PACKAGES_BUNDLE/
proto_path_web_prompt_package/
proto_path_full_corpus_integration/
ready_to_send_zip_packages/
```

Your task is to inspect the workspace, read the complete package, resolve the instruction hierarchy, and build the actual working web application.

Do not stop after producing a plan, wireframe, mockup, or code snippets.

Create, run, test, repair, and document the complete application.

---

# 1. FIRST ACTION — INSPECT THE WORKSPACE

Before writing application code:

1. Recursively inspect the current workspace.
2. Locate every uploaded ZIP, folder, Markdown file, JSON file, PDF, PNG, CSV, and script.
3. Extract the outer bundle when it is still compressed.
4. Do not repeatedly extract nested copies of packages into duplicate working trees.
5. Identify:
   - canonical source files;
   - prompt and specification files;
   - generated audit files;
   - scripts;
   - diagram assets;
   - duplicate packaged copies.
6. Produce a concise source audit in:

```text
docs/SOURCE_AUDIT.md
```

The source audit must list:

```text
file path
file role
file size
hash when practical
canonical / derived / legacy status
whether it will be used by the application
```

Do not begin implementation before the audit identifies the canonical files.

---

# 2. INSTRUCTION PRECEDENCE

When files overlap, follow this precedence:

## Highest authority — canonical sources

```text
proto_path_full_corpus_integration/source/
```

Expected canonical files:

```text
Proto Path - WHERE ARE YOU DEPART FROM _gulangsatriya.pdf
mapillary-points - Large Dataset Bandung.json
mapillary-traffic - Large Dataset Bandung.json
```

Treat these three files as immutable.

Do not edit, rewrite, clean, shorten, or replace them.

## Second authority — latest full-corpus specifications

Read every file under:

```text
proto_path_full_corpus_integration/prompts/
```

Start with:

```text
00_README.md
01_MASTER_FULL_CORPUS_INTEGRATION_PROMPT.md
02_PDF_TO_SCORE_GRAPH_PROMPT.md
03_MAPILLARY_DATA_PIPELINE_PROMPT.md
04_SOURCE_LINKAGE_AND_AMBIGUITY_PROMPT.md
05_EXISTING_WEB_MIGRATION_PROMPT.md
06_CANONICAL_SCHEMA_V2.md
07_DIAGRAM_ASSET_RECONCILIATION_PROMPT.md
08_QA_AND_COMPLETENESS_PROMPT.md
09_AGENT_EXECUTION_SEQUENCE.md
PROTO_PATH_FULL_CORPUS_ALL_IN_ONE.md
```

The individual files clarify the all-in-one prompt. Use them together.

## Third authority — generated source audits

Read every file under:

```text
proto_path_full_corpus_integration/generated_source_audit/
```

Pay special attention to:

```text
SOURCE_PROFILE.md
KNOWN_SOURCE_CONFLICTS.md
checkpoint_inventory.json
pdf_code_inventory.json
data_provocations_extracted.json
raw_value_linkage_audit.csv
explicit_coordinate_match_audit.json
proto_path_score_text_by_page.md
source_manifest.json
dataset_profiles.json
```

Treat these as preliminary generated aids.

Verify them against the canonical PDF and JSON before using them as final truth.

## Fourth authority — initial web specification

Read every file under:

```text
proto_path_web_prompt_package/
```

Use these files for product experience, UI, interaction, visual language, initial application architecture, and acceptance behavior:

```text
00_README_PROTO_PATH_WEB.md
01_MASTER_BUILD_PROMPT_PROTO_PATH_WEB.md
02_INFORMATION_ARCHITECTURE_UI_SPEC.md
03_DATA_CONTRACT_SCHEMA_AND_SAMPLE.md
04_IMPLEMENTATION_PLAN_AND_TASKS.md
05_QA_ACCEPTANCE_TESTS.md
06_CONTENT_INGESTION_GUIDE.md
07_PLATFORM_ADAPTERS.md
PROTO_PATH_WEB_E2E_ALL_IN_ONE.md
```

Where the initial sample model conflicts with the full-corpus schema, use **Canonical Schema V2** and preserve compatibility through adapters.

## Fifth authority — legacy diagram assets

Read:

```text
proto_path_full_corpus_integration/legacy_diagram_assets/
```

and any equivalent diagram folder in the initial web package.

Do not assume every image matches the latest PDF.

Use the asset status and reconciliation rules.

---

# 3. REQUIRED READING CHECKPOINT

Before implementation, create:

```text
docs/READING_CONFIRMATION.md
```

It must confirm that you read:

- the canonical PDF;
- both GeoJSON datasets;
- every Markdown specification;
- every generated audit;
- every script;
- the diagram manifest;
- the bundle index.

Include a compact table:

```text
FILE / FOLDER
READ STATUS
ROLE
KEY REQUIREMENTS EXTRACTED
CONFLICTS FOUND
```

Do not claim a file was read when it was not inspected.

---

# 4. PRODUCT GOAL

Build a highly legible interactive web application titled:

```text
PROTO PATH
DATA TO BODY / ARCHITECTURAL STAGE NOTATION
```

The application must make this chain visible:

```text
MAPILLARY RAW FEATURE
→ DATA PROVOCATION
→ OBJECT / STIMULUS
→ SITUATION / SPATIAL SCORE
→ BODY IMPULSE / BODY SCORE
→ ANATOMICAL LOCUS
→ SPATIAL OUTPUT
→ RESIDUAL / REGISTER
→ ARCHITECTURAL DIAGRAM
```

The viewer must be able to move in both directions:

```text
raw data → performance score
performance score → raw source
```

Do not build a disconnected image gallery.

Do not build a generic SaaS dashboard.

Do not reduce the project to two sample diagrams.

The final application must expose the complete PDF corpus and both full Mapillary datasets through a performant indexed system.

---

# 5. COMPLETE CONTENT SCOPE

Ingest and expose:

## Method and controlled vocabulary

- introductory note;
- Method Framework;
- Dataset;
- MFI — Mapillary Feature Index;
- Data as Performance;
- Living Text;
- Document Assets;
- Reading Scheme;
- note on Data, Objects, and Body;
- Reading Chain;
- Score Legend;
- Material Variable Matrix;
- Kinetic Stimulus Taxonomy;
- State Value Taxonomy;
- Kinetic Action Taxonomy;
- Anatomical Locus Taxonomy;
- Spatial Output Taxonomy;
- Reading Example.

## Score 01

```text
C1.0
C1.1
C1.2
C1.3
C1.4
C1.5
C1.6
C1.7
```

## Score 02

```text
C2.0
C2.1
C2.2
C2.3
C2.4
C2.5
C2.6
C2.7
```

## Unit prefixes

Support and index:

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

Keep unknown or undeclared prefixes visible for review.

## Additional sections

- Trajectory Performance;
- Research Trajectory;
- prior practice references;
- source links;
- generated diagram variants;
- source conflicts;
- human-review queue.

---

# 6. CORE DOMAIN MODEL

Do not force one Situation and one Body Impulse into every checkpoint.

Use three levels:

```text
CHECKPOINT
→ NOTATION UNIT
→ EXPLICIT RELATION PAIR
```

A checkpoint may contain:

- several Data Provocations;
- several Situation rows;
- several Body Impulse rows;
- cross-suffix references;
- Output End States;
- source registers;
- impulse variations;
- repetition patterns;
- object registers;
- locking rules;
- additional obstacles;
- repetition outputs;
- residual states.

Pair Body Impulse units through explicit source references such as:

```text
referring to [ST.C1.3.1]
```

Do not pair units only because their numeric suffixes match.

Implement the types and storage model from:

```text
06_CANONICAL_SCHEMA_V2.md
```

Add compatibility adapters for the earlier `NotationPair` model.

---

# 7. SOURCE EXTRACTION PIPELINE

Build a reproducible ingestion pipeline.

Expected generated structure:

```text
generated/
  content/
    document.json
    pages.jsonl
    sections.json
    taxonomies.json
    scores.json
    phases.json
    checkpoints.json
    units/
      dp.jsonl
      st.jsonl
      rt.jsonl
      registers.jsonl
    references.jsonl
    explicit-pairs.jsonl
    conflicts.json
    diagrams.json

  mapillary/
    dataset-manifest.json
    value-index.json
    prefix-index.json
    score-area-index.json
    features.points.jsonl
    features.traffic.jsonl
    chunks/

  reports/
    pdf-extraction-report.json
    pdf-human-review.csv
    corpus-integrity.json
    unresolved-references.csv
    undeclared-tokens.csv
    raw-value-resolution.csv
    diagram-reconciliation.csv
    human-review-queue.csv
```

## PDF extraction requirements

For every coded row, store:

```text
code
prefix
page
section path
checkpoint
verbatim text
normalized search text
bracketed tokens
explicit references
raw values
coordinates
stage distances
extraction confidence
review status
```

Preserve the original PDF page number.

Keep the PDF as the visual authority.

Use page-marked text only as a searchable companion.

## GeoJSON requirements

Keep both full GeoJSON files unchanged.

Generate derived indexes.

Do not convert the complete datasets into Markdown.

Do not load 110,299 records on the initial page.

Use:

- lazy loading;
- chunked JSONL;
- Web Workers;
- virtualized lists;
- spatial indexes;
- score-bound filtering;
- raw-value indexes;
- cache keyed by source hash.

---

# 8. SOURCE LINKAGE RULES

Use these statuses:

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

Core rule:

```text
stage-axis distance ≠ geographic distance
```

A value such as:

```text
±12.15m
```

cannot select one geographic Mapillary point unless a documented route projection or verified source identifier exists.

A raw-value match creates a candidate set.

It does not create a confirmed source link.

The UI must show evidence strength and candidate count.

Provide a manual verification flow with:

```text
reviewer
timestamp
selected source
evidence note
source hash
previous status
new status
```

Never modify the raw source record.

---

# 9. MANDATORY CONFLICTS

Read and implement every item in:

```text
generated_source_audit/KNOWN_SOURCE_CONFLICTS.md
```

At minimum, register these conflicts:

## Missing raw value

```text
regulatory--merge--g1
```

does not occur in the attached JSON.

Do not replace it automatically with:

```text
warning--traffic-merges-left--g1
```

Use:

```text
RAW_VALUE_NOT_FOUND
```

## Score-system data

```text
Node_B terminal
```

comes from the score system.

Do not search for it in Mapillary.

## Score 02 axis length conflict

Store both source claims:

```text
14 m
15 m
```

Use the detailed score claim for current stage rendering.

Keep the conflict visible until reviewed.

## Diagram mismatch

The current Glitch diagram claims:

```text
ST.C1.3.2 — Conflicting Vectors
RT.C1.3.2 — Glitch Response
WRIST + SHOULDER
TREMOR LOOP
```

The latest detailed PDF does not assign this complete content to those codes.

Register the asset as:

```text
CONTENT_MISMATCH_REVIEW_REQUIRED
```

Do not attach it as the canonical diagram by default.

Keep it accessible as a draft or variant.

Do not silently delete it.

---

# 10. APPLICATION ROUTES

Build or preserve:

```text
/
```

Landing and project orientation.

```text
/explore
```

Primary synchronized explorer.

```text
/corpus
```

Full corpus overview and completeness.

```text
/document
```

PDF reader synchronized with structured score units.

```text
/score/:scoreId
```

Score overview.

```text
/checkpoint/:checkpointId
```

Complete checkpoint board.

```text
/unit/:unitId
```

One coded unit with source, references, body, output, and page link.

```text
/source/:sourceFeatureId
```

Raw Mapillary feature view.

```text
/dataset
```

Dataset browser and local import tools.

```text
/method
```

Method, taxonomy, and reading chain.

```text
/conflicts
```

Content conflict and review queue.

```text
/exhibition
```

Fullscreen guided presentation.

```text
/dev/integrity
```

Development-only corpus integrity dashboard.

---

# 11. PRIMARY EXPLORE EXPERIENCE

Use a coordinated architectural board.

Desktop structure:

```text
TOP CONTROL BAR

SOURCE PANEL
|
TRANSFORMATION SPINE
|
STAGE / BODY / DIAGRAM PANEL

BOTTOM SEQUENCE AND REGISTER RAIL
```

The exact layout may use coordinated columns, provided the lineage stays visually clear.

## Top controls

Include:

- Score;
- Phase;
- Checkpoint;
- Unit Type;
- Unit;
- Explicit Pair;
- Register Layer;
- Diagram Version;
- Previous / Next;
- Play / Pause;
- Compare;
- Raw / Interpreted / Lineage;
- Fullscreen;
- EN / ID-ready structure;
- corpus status.

## Source panel

Show:

- dataset;
- source file;
- raw value;
- feature type;
- coordinate;
- stage distance;
- source candidates;
- evidence status;
- raw JSON;
- page source;
- validation status.

## Transformation spine

Show:

```text
RAW FEATURE
DATA PROVOCATION
OBJECT / STIMULUS
SITUATION
BODY IMPULSE
ANATOMICAL LOCUS
SPATIAL OUTPUT
RESIDUAL
DIAGRAM
```

Clicking any step must highlight all related data across the interface.

## Stage and body panel

Tabs:

```text
STAGE PLAN
BODY STUDY
FORCE RELATION
ARCHITECTURAL BOARD
PDF SOURCE
```

Generate the stage plan from structured data even when no image exists.

## Bottom rail

Support:

- sequence frames;
- previous and next checkpoint;
- Phase 03 register layers;
- Phase 04 residual layers;
- playback;
- iteration indicators;
- carried residue.

---

# 12. CHECKPOINT PAGE

Every checkpoint page must expose:

1. score identity;
2. phase;
3. title;
4. page range;
5. axis length;
6. Data Provocations;
7. source candidate sets;
8. Situation units;
9. Body Impulse units;
10. explicit references;
11. anatomical loci;
12. Spatial Outputs;
13. state values;
14. register carry-over;
15. iteration constraints;
16. diagram assets;
17. source conflicts;
18. previous and next checkpoint.

Use separate lanes:

```text
RAW DATA
SITUATIONS
BODY IMPULSES
OUTPUTS
REGISTERS
DIAGRAMS
CONFLICTS
```

Do not collapse every unit into one oversized card.

---

# 13. DOCUMENT READER

Build a synchronized split view:

```text
PDF PAGE
|
STRUCTURED SCORE
```

Features:

- page thumbnails;
- page navigation;
- searchable extracted text;
- code highlighting;
- click code to open unit;
- click unit to open PDF page;
- show extraction confidence;
- show section hierarchy;
- raw-value search;
- token search;
- conflict markers;
- source PDF download or open action.

When code bounding boxes are unavailable, use page number and search anchor.

---

# 14. CORPUS OVERVIEW

Show integrity indicators:

```text
PDF pages ingested
checkpoints ingested
units by prefix
explicit references resolved
unresolved references
raw values found
raw values not found
candidate-set counts
canonical diagrams
draft diagrams
missing diagrams
content conflicts
human-review queue
```

These indicators must open the related records.

Do not render them as decorative business KPI cards.

Use an architectural registry or analytical table.

---

# 15. MAPILLARY DATASET EXPLORER

Support:

- dataset selector;
- score-bound filtering;
- raw-value filtering;
- prefix filtering;
- coordinate filtering;
- candidate-set filtering;
- linked / unlinked filtering;
- virtualized feature list;
- map;
- raw JSON inspector;
- provenance;
- local import validation.

The app must work without a Mapillary access token.

An optional token may enrich live media later.

Never hardcode or expose a token.

---

# 16. DIAGRAM ASSET SYSTEM

For every image, store:

```text
asset ID
file path
hash
dimensions
claimed codes
claimed raw value
claimed anatomical loci
claimed output
source document hash
content version
review status
mismatch notes
alt text
```

Statuses:

```text
CANONICAL
COMPATIBLE_PENDING_REVIEW
LEGACY_DRAFT
CONTENT_MISMATCH_REVIEW_REQUIRED
MISSING
```

Viewer controls:

- fit;
- 100%;
- zoom;
- pan;
- reset;
- fullscreen;
- metadata;
- alt text;
- source version;
- show draft or variant assets.

Do not create image hotspots unless their positions were supplied or verified.

---

# 17. VISUAL LANGUAGE

Use the architectural drawing language from the uploaded diagrams.

Palette:

```text
paper       #F7F7F3
surface     #FFFFFF
ink         #111111
muted ink   #505050
grid        #D9D9D3
panel       #EFEFEB
accent      #E6461A
warning     #A6321B
```

Use:

- white or paper background;
- thin black linework;
- subtle gray technical grid;
- one red-orange accent;
- square nodes;
- outlined checkpoints;
- double-line linear objects;
- measured distances;
- restrained uppercase labels;
- monospace raw data;
- explicit connector lines.

Avoid:

- glassmorphism;
- colorful SaaS KPI cards;
- glowing nodes;
- science-fiction HUD;
- decorative gradients;
- stock photography;
- oversized rounded cards;
- multiple accent colors;
- floating particles;
- dramatic parallax;
- generic dashboard styling.

---

# 18. ACCESSIBILITY

Implement:

- keyboard navigation;
- visible focus;
- semantic headings;
- skip links;
- reduced-motion mode;
- structured diagram alt text;
- screen-reader lineage description;
- sufficient contrast;
- touch-safe controls;
- no meaning carried only by color;
- mobile pan and zoom for boards and maps.

---

# 19. TECHNICAL DIRECTION

Preferred stack:

```text
React
TypeScript strict mode
Vite
Tailwind CSS
Zod
Zustand or equivalent small store
D3 for custom SVG and lineage
MapLibre GL
Framer Motion with restrained use
Vitest
Playwright
```

A different stack may be used only when the current repository already uses it and migration would be wasteful.

Keep:

- domain logic separate;
- source repository separate;
- presentation separate;
- local JSON repository available;
- future Firebase or backend repository behind an interface.

Do not introduce authentication during the first complete corpus release unless the current app already requires it.

---

# 20. REQUIRED IMPLEMENTATION PHASES

Execute these phases in order.

## Phase 0 — Audit

- inspect;
- extract;
- classify;
- hash;
- confirm precedence;
- create source audit;
- create reading confirmation;
- create migration plan.

## Phase 1 — Ingestion

- PDF extraction;
- page index;
- unit extraction;
- reference extraction;
- taxonomy extraction;
- GeoJSON profiling;
- raw-value indexes;
- score-area indexes;
- source candidate sets;
- conflict registry.

## Phase 2 — Validation

- validate codes;
- validate references;
- validate tokens;
- validate checkpoint coverage;
- validate source counts;
- validate hashes;
- generate human-review queue.

Do not build final UI until the canonical generated content passes structural validation.

## Phase 3 — Application foundation

- repository interface;
- corpus data loader;
- router;
- application shell;
- source cache;
- selectors;
- URL state;
- error states.

## Phase 4 — Complete explorer

- source panel;
- transformation spine;
- stage plan;
- body study;
- output;
- residual;
- checkpoint pages;
- register views;
- diagrams;
- compare;
- sequence playback.

## Phase 5 — Document and datasets

- synchronized PDF reader;
- corpus overview;
- Mapillary explorer;
- conflict review;
- method page;
- exhibition mode.

## Phase 6 — QA

- unit tests;
- end-to-end tests;
- corpus integrity;
- production build;
- keyboard review;
- mobile review;
- token-free review;
- missing-image review;
- large-data performance review.

Fix all critical failures.

---

# 21. ERROR AND EMPTY STATES

Use explicit states:

```text
NO UNIT SELECTED
SOURCE RECORD MISSING
RAW FILE NOT LOADED
DIAGRAM ASSET MISSING
LIVE MAPILLARY MEDIA UNAVAILABLE
INVALID LINEAGE
UNDECLARED TOKEN
UNRESOLVED REFERENCE
RAW VALUE NOT FOUND
CANDIDATE SET REQUIRES REVIEW
CONTENT MISMATCH REVIEW REQUIRED
PDF EXTRACTION REQUIRES REVIEW
```

Every state must explain the available next action.

Never replace missing information with invented content.

---

# 22. REQUIRED TESTS

Write and run tests for:

- exact raw-value preservation;
- source hashes;
- checkpoint coverage;
- code inventory;
- explicit reference resolution;
- cross-suffix relation preservation;
- candidate-set generation;
- absent raw-value handling;
- score-system datum handling;
- axis-length conflict;
- diagram mismatch;
- map token fallback;
- lazy loading;
- source-to-unit highlighting;
- PDF-to-unit synchronization;
- sequence playback;
- register navigation;
- compare mode;
- keyboard;
- mobile;
- missing diagrams;
- imported JSON safety;
- production build.

---

# 23. REQUIRED DOCUMENTATION

Generate:

```text
README.md
docs/ARCHITECTURE.md
docs/DATA_MODEL.md
docs/SOURCE_AUDIT.md
docs/READING_CONFIRMATION.md
docs/INGESTION_PIPELINE.md
docs/CONTENT_INGESTION.md
docs/CONFLICT_POLICY.md
docs/DIAGRAM_VERSIONING.md
docs/DEPLOYMENT.md
docs/KNOWN_LIMITATIONS.md
```

README must include:

- install;
- run;
- build;
- test;
- data generation;
- adding a notation unit;
- adding a diagram;
- source conflict review;
- Mapillary token fallback;
- deployment.

---

# 24. WORKING BEHAVIOR

Use these rules throughout execution:

1. Do not ask for confirmation when the package already supplies the answer.
2. Ask a question only when a missing external decision blocks implementation.
3. Make grounded engineering decisions.
4. Record assumptions in documentation.
5. Preserve unresolved source conflicts.
6. Do not silently rewrite the artistic score.
7. Do not stop after planning.
8. Run commands.
9. inspect runtime output;
10. fix errors;
11. keep source files immutable;
12. report failures honestly.

When a source instruction conflicts with a generated audit, verify the canonical PDF or JSON.

When two canonical sections conflict, preserve both claims and register a conflict.

---

# 25. FINAL COMPLETION GATE

Do not report completion until all conditions below pass:

- the application runs;
- production build succeeds;
- all 16 checkpoints are visible;
- the complete PDF is navigable;
- all detected units are indexed;
- every unit links to a PDF page;
- both GeoJSON files are profiled;
- full datasets are not loaded on initial page;
- raw values remain exact;
- ambiguous source links remain ambiguous;
- `regulatory--merge--g1` stays unresolved;
- score-system data is separated from Mapillary;
- diagram variants show correct status;
- the Glitch diagram mismatch stays visible;
- checkpoint, unit, source, document, and conflict routes work;
- keyboard navigation works;
- mobile layout works;
- token-free mode works;
- tests pass;
- corpus integrity reports exist;
- known limitations are documented.

---

# 26. FINAL RESPONSE FORMAT

When the work is complete, respond with:

## Build result

```text
RUNNING / PARTIAL / BLOCKED
```

## Preview

Provide the local or deployed preview location.

## Repository

Provide the final repository tree.

## Source ingestion

Report:

- PDF pages;
- checkpoint count;
- unit count by prefix;
- GeoJSON record counts;
- raw-value resolution counts;
- conflict count;
- diagram status counts.

## Commands executed

List the important commands.

## Test results

List:

- unit tests;
- end-to-end tests;
- data integrity;
- production build;
- accessibility checks;
- responsive checks.

## Open review items

List unresolved content conflicts and missing assets.

## Next content batch

Recommend the next concrete step.

Do not state that something works unless it was run or tested.

---

# START NOW

Begin with workspace inspection and source audit.

Read the full package before coding.

Use the existing application when one is present.

Create a new application only when no application repository exists.

Then execute the complete ingestion, migration, implementation, testing, and repair workflow.
