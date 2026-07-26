# PROTO PATH — FILE SET YANG BISA LANGSUNG DIBACA ANTIGRAVITY

File set ini menggantikan `PROTO_PATH_ALL_PACKAGES_BUNDLE.zip`.

Semua materi penting sudah diubah menjadi file teks biasa:

- `.md` untuk prompt, spesifikasi, audit, naskah, dan indeks;
- `.jsonl` untuk seluruh feature dari dua dataset Mapillary;
- tidak ada PDF, PNG, atau ZIP yang wajib dibaca agent.

## File yang perlu diunggah ke workspace Antigravity

Unggah file berikut dalam urutan ini:

1. `00_UPLOAD_ORDER_AND_START_PROMPT.md`
2. `01_MASTER_CONTEXT_ALL_PACKAGE_TEXT.md`
3. `02_CANONICAL_SCORE_COMPLETE_TEXT.md`
4. `03_SOURCE_AND_DATASET_MANIFEST.md`
5. `04_DIAGRAM_ASSET_TEXT_DESCRIPTIONS.md`
6. `05_ANTIGRAVITY_MASTER_EXECUTION_PROMPT.md`
7. seluruh file dalam folder `data_chunks/`

## Instruksi yang ditempel setelah semua file terunggah

```text
Read 00_UPLOAD_ORDER_AND_START_PROMPT.md first.

Then read every uploaded Markdown and JSONL file completely.

Treat 02_CANONICAL_SCORE_COMPLETE_TEXT.md as the searchable text companion of the canonical Proto Path score.

Treat every JSONL line in data_chunks as one immutable source feature from the original Mapillary GeoJSON.

Treat 01_MASTER_CONTEXT_ALL_PACKAGE_TEXT.md as the complete merged specification, audit, schema, and implementation context.

Execute 05_ANTIGRAVITY_MASTER_EXECUTION_PROMPT.md from beginning to end.

Build the actual web application, run it, test it, fix failures, and report only verified results.
```

## Aturan pembacaan data

Setiap file `.jsonl` memakai format:

```text
satu baris = satu GeoJSON Feature asli
```

Jangan menggabungkan data dengan asumsi baru.

Jangan mengubah `properties.value`.

Jangan memilih satu feature geografis dari jarak sumbu panggung saja.

## Catatan aset visual

Dua diagram PNG tidak dimasukkan sebagai syarat baca.

Isi, kode, status, dan deskripsi visualnya tersedia dalam:

```text
04_DIAGRAM_ASSET_TEXT_DESCRIPTIONS.md
```

Agent boleh membangun ulang diagram secara SVG dari structured data.
