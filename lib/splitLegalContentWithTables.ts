export type LegalDocumentPart =
  | { type: "text"; text: string }
  | { type: "table"; rows: string[][] };

export type LegalTableSpec = {
  /** Unique substring; table cells start immediately after this string. */
  anchor: string;
  rowCount: number;
  colCount: number;
};

function chunkLines(lines: string[], cols: number): string[][] {
  const rows: string[][] = [];
  for (let i = 0; i < lines.length; i += cols) {
    rows.push(lines.slice(i, i + cols));
  }
  return rows;
}

/**
 * Splits legal plain text (from DOCX extraction) into prose blocks and tables.
 * Tables are stored one cell per line, row-major: each row uses `colCount` consecutive lines.
 */
export function splitContentWithTables(content: string, tables: readonly LegalTableSpec[]): LegalDocumentPart[] {
  const parts: LegalDocumentPart[] = [];
  let rest = content;

  for (const spec of tables) {
    const idx = rest.indexOf(spec.anchor);
    if (idx === -1) {
      throw new Error(`Legal document: anchor not found:\n${spec.anchor.slice(0, 120)}`);
    }
    const before = rest.slice(0, idx + spec.anchor.length);
    parts.push({ type: "text", text: before });
    rest = rest.slice(idx + spec.anchor.length);

    const lines = rest.split("\n");
    const need = spec.rowCount * spec.colCount;
    if (lines.length < need) {
      throw new Error(`Legal document: need ${need} table lines, have ${lines.length}`);
    }
    const flat = lines.slice(0, need);
    parts.push({ type: "table", rows: chunkLines(flat, spec.colCount) });
    rest = lines.slice(need).join("\n");
  }

  parts.push({ type: "text", text: rest });
  return parts;
}
