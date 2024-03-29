export enum LeiautePrefix {
  // TABELAS/EVENTOS INICIAIS
  S1000 = "S1000",
  S1005 = "S1005",
  S1010 = "S1010",
  S1020 = "S1020",
  S1070 = "S1070",

  // EVENTOS PERIÓDICOS
  S1200 = "S1200",
  S1202 = "S1202",
  S1207 = "S1207",
  S1210 = "S1210",
  S1260 = "S1260",
  S1270 = "S1270",
  S1280 = "S1280",
  S1298 = "S1298",
  S1299 = "S1299",

  // EVENTOS NÃO PERIÓDICOS

  S2190 = "S2190",
  S2200 = "S2200",
  S2205 = "S2205",
  S2206 = "S2206",
  S2210 = "S2210",
  S2220 = "S2220",
  S2230 = "S2230",
  S2240 = "S2240",
  S2231 = "S2231",
  S2298 = "S2298",
  S2299 = "S2299",
  S2300 = "S2300",
  S2306 = "S2306",
  S2399 = "S2399",
  S2400 = "S2400",
  S2405 = "S2405",
  S2410 = "S2410",
  S2416 = "S2416",
  S2418 = "S2418",
  S2420 = "S2420",
  S3000 = "S3000",
  S2500 = "S2500",
  S2501 = "S2501",
  S3500 = "S3500",

  // RETORNOS
  S5001 = "S5001",
  S5002 = "S5002",
  S5003 = "S5003",
  S5011 = "S5011",
  S5012 = "S5012",
  S5013 = "S5013",
}

export enum LeiauteVersion {
  S_1_0 = "S_1_0",
  S_1_1 = "S_1_1",
}

export enum ColumnType {
  number = "numeric",
  string = "text",
}

export enum TypeColumn {
  "numeric" = "number",
  "text" = "string",
  "uuid" = "string",
  "character varying" = "string",
  "timestamp with time zone" = "string",
}
