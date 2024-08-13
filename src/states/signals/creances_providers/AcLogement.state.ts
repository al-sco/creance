// import { AcLogement } from "../../AcData.types";
// import ICrudStateProvider from "../parameter_providers/ICrudStateProvider";




// class AcCreanceStateProvider extends ICrudStateProvider<AcLogement> {
//   mapDataToJson(data: AcLogement): {} {
//     return {
//       logeCode: data["logeCode"],
//       contCode: data["contCode"],
//       circonsCode: data["circonsCode"],
//       sectCadCode: data["sectCadCode"],
//       tfCode: data["tfCode"],
//       gareelCode: data["gareelCode"],
//       typeLogeCode: data["typeLogeCode"],
//       operatCode: data["operatCode"],
//       contVteCode: data["contVteCode"],
//       modacCode: data["modacCode"],
//       creanCode: data["creanCode"],
//       logePorteNum: data["logePorteNum"],
//       logeNbpiece: data["logeNbpiece"],
//       logeLotNum: data["logeLotNum"],
//       logeIlotNum: data["logeIlotNum"],
//       logeBlocNum: data["logeBlocNum"],
//       logeDesign: data["logeDesign"],
//       logeDatmpatrim: data["logeDatmpatrim"],
//       logeValeur: data["logeValeur"],
//       logeTerValeur: data["logeTerValeur"],
//       logeDatjou: data["logeDatjou"],
//       quartCode: data["quartCode"],
//       propCode: data["propCode"],
//       logeBlocLib: data["logeBlocLib"],
//       logeCodeCharg: data["logeCodeCharg"],
//       logeStanding: data["logeStanding"],
//       logeContAnc: data["logeContAnc"],
//       ancCreanCode: data["ancCreanCode"],
//       logeMotif: data["logeMotif"],
//       logeMotifDate: data["logeMotifDate"]
//     };
//   }


//   mapEntitieFrom(json: any): AcLogement {
//     return {
//       logeCode: json["logeCode"],
//       contCode: json["contCode"],
//       circonsCode: json["circonsCode"],
//       sectCadCode: json["sectCadCode"],
//       tfCode: json["tfCode"],
//       gareelCode: json["gareelCode"],
//       typeLogeCode: json["typeLogeCode"],
//       operatCode: json["operatCode"],
//       contVteCode: json["contVteCode"],
//       modacCode: json["modacCode"],
//       creanCode: json["creanCode"],
//       logePorteNum: json["logePorteNum"],
//       logeNbpiece: json["logeNbpiece"],
//       logeLotNum: json["logeLotNum"],
//       logeIlotNum: json["logeIlotNum"],
//       logeBlocNum: json["logeBlocNum"],
//       logeDesign: json["logeDesign"],
//       logeDatmpatrim: json["logeDatmpatrim"],
//       logeValeur: json["logeValeur"],
//       logeTerValeur: json["logeTerValeur"],
//       logeDatjou: json["logeDatjou"],
//       quartCode: json["quartCode"],
//       propCode: json["propCode"],
//       logeBlocLib: json["logeBlocLib"],
//       logeCodeCharg: json["logeCodeCharg"],
//       logeStanding: json["logeStanding"],
//       logeContAnc: json["logeContAnc"],
//       ancCreanCode: json["ancCreanCode"],
//       logeMotif: json["logeMotif"],
//       logeMotifDate: json["logeMotifDate"]
//     };
//   }

// }      