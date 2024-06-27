import { AcJournal } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";

class AcJournalStateProvider extends ICrudStateProvider<AcJournal> {
  mapEntitieFrom(json: any): AcJournal {
    return {
      id: json["id"],
      code: json["id"],
      libelle: json["libJournal"],
    };
  }
}

const acJournalProvider = new AcJournalStateProvider("/journal");
export default acJournalProvider;
