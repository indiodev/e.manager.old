// import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
// import { ExportToCSVFactory } from "App/Factories/leiaute/export-to-csv";
// export async function exportToCSV({
//   request,
//   response,
// }: HttpContextContract): Promise<void> {
//   try {
//     const { _id, final_date, initial_date, prefix } = request.qs() as {
//       prefix: string;
//       initial_date: string;
//       final_date: string;
//       _id: string;
//     };

//     console.log({ _id, final_date, initial_date, prefix });

//     const exportToCSVUseCase = ExportToCSVFactory();

//     // const { path, filename } = await exportToCSVUseCase.execute({
//     //   prefix,
//     //   _id,
//     //   date: {
//     //     initial: initial_date,
//     //     final: final_date,
//     //   },
//     // } as ExportToCSVRequest);

//     // return response.attachment(path, filename);
//     return response.send({});
//   } catch (error) {
//     console.log(error);
//     return response.conflict(error);
//   }
// }
