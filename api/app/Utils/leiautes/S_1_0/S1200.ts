import { LeiauteExtractType } from "App/Dtos/Leiaute";

export const S1200: LeiauteExtractType = {
  ideEvento: [
    {
      name: "indRetif",
      type: "number",
    },
    {
      name: "nrRecibo",
      type: "number",
    },
    {
      name: "indApuracao",
      type: "number",
    },
    {
      name: "perApur",
      type: "string",
    },
    {
      name: "indGuia",
      type: "number",
    },
    {
      name: "tpAmb",
      type: "number",
    },
    {
      name: "procEmi",
      type: "number",
    },
    {
      name: "verProc",
      type: "string",
    },
  ],
  ideEmpregador: [
    {
      name: "tpInsc",
      type: "number",
    },
    {
      name: "nrInsc",
      type: "string",
    },
  ],
  ideTrabalhador: [
    {
      name: "cpfTrab",
      type: "string",
    },
  ],
  infoMV: [{ name: "indMV", type: "number" }],
  remunOutrEmpr: [
    {
      name: "tpInsc",
      type: "number",
    },
    {
      name: "nrInsc",
      type: "string",
    },
    {
      name: "codCateg",
      type: "number",
    },
    {
      name: "vlrRemunOE",
      type: "number",
    },
  ],
  infoComplem: [
    {
      name: "nmTrab",
      type: "string",
    },
    {
      name: "dtNascto",
      type: "string",
    },
  ],
  sucessaoVinc: [
    {
      name: "tpInsc",
      type: "number",
    },
    {
      name: "nrInsc",
      type: "string",
    },
    {
      name: "matricAnt",
      type: "string",
    },
    {
      name: "dtAdm",
      type: "string",
    },
    {
      name: "observacao",
      type: "string",
    },
  ],
  procJudTrab: [
    {
      name: "tpTrib",
      type: "number",
    },
    {
      name: "nrProcJud",
      type: "string",
    },
    {
      name: "codSusp",
      type: "string",
    },
  ],
  infoInterm: [
    {
      name: "dia",
      type: "number",
    },
  ],
  dmDev: [
    {
      name: "ideDmDev",
      type: "string",
    },
    {
      name: "codCateg",
      type: "number",
    },
    {
      name: "indRRA",
      type: "string",
    },
  ],
  infoRRA: [
    {
      name: "tpProcRRA",
      type: "number",
    },
    {
      name: "nrProcRRA",
      type: "string",
    },
    {
      name: "descRRA",
      type: "string",
    },
    {
      name: "qtdMesesRRA",
      type: "number",
    },
  ],
  despProcJud: [
    {
      name: "vlrDespCustas",
      type: "number",
    },
    {
      name: "vlrDespAdvogados",
      type: "number",
    },
  ],
  ideAdv: [
    {
      name: "tpInsc",
      type: "number",
    },
    {
      name: "nrInsc",
      type: "string",
    },
    {
      name: "vlrAdv",
      type: "number",
    },
  ],
  infoPerApur: [],
  ideEstabLot: [
    {
      name: "tpInsc",
      type: "number",
    },
    {
      name: "nrInsc",
      type: "string",
    },
    {
      name: "codLotacao",
      type: "string",
    },
    {
      name: "qtdDiasAv",
      type: "number",
    },
  ],
  remunPerAnt: [
    {
      name: "matricula",
      type: "string",
    },
    {
      name: "indSimples",
      type: "number",
    },
  ],
  remunPerApur: [
    {
      name: "matricula",
      type: "string",
    },
    {
      name: "indSimples",
      type: "number",
    },
  ],
  itensRemun: [
    {
      name: "codRubr",
      type: "string",
    },
    {
      name: "ideTabRubr",
      type: "string",
    },
    {
      name: "qtdRubr",
      type: "number",
    },
    {
      name: "fatorRubr",
      type: "number",
    },
    {
      name: "vrRubr",
      type: "number",
    },
    {
      name: "indApurIR",
      type: "number",
    },
  ],
  infoAgNocivo: [
    {
      name: "grauExp",
      type: "number",
    },
  ],
  infoPerAnt: [],
  ideADC: [
    {
      name: "dtAcConv",
      type: "string",
    },
    {
      name: "tpAcConv",
      type: "string",
    },
    {
      name: "dsc",
      type: "string",
    },
    {
      name: "remunSuc",
      type: "string",
    },
  ],
  idePeriodo: [
    {
      name: "perRef",
      type: "string",
    },
  ],
  infoComplCont: [
    {
      name: "codCBO",
      type: "string",
    },
    {
      name: "natAtividade",
      type: "number",
    },
    {
      name: "qtdDiasTrab",
      type: "number",
    },
  ],
};
