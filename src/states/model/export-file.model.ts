export interface ExportFileModel {
    actetId: number,
    format: "PDF" | "EXCEL" | "HTML" | "WORD";
    typeFichier:   "CONVOCATION" | "LETTRE_RAPPEL" | "MISE_EN_DEMEURE" | "SOMMATION_DE_PAYER"
}