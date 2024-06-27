import { signal } from "@preact/signals-core";
import { Signal } from "@preact/signals-react";
import { AcZone } from "../../AcData.types";
import ICrudStateProvider from "./ICrudStateProvider";

export const zoneList: Signal<AcZone[]> = signal([]);



class AcZoneStateProvider extends ICrudStateProvider<AcZone> {
    mapEntitieFrom(json: any): AcZone {
      return {
        id: json["zoneId"],
        code: json["zoneCode"],
        libelle: json["zoneLib"],
        description:json["zonedescription"]
      };
    }
  }
  
  const acZoneProvider = new AcZoneStateProvider("/zone");
  export default acZoneProvider;