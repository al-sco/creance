import { Button } from "primereact/button";
import { TabPanel, TabView } from "primereact/tabview";
import { LogementForm } from "./logements";
import { useState } from "react";
import { Terrain } from "./terrain";
import { Mutations } from "./mutations";
import { GarantiePersonnels } from "./garantie-personnels";
import { GarantieReelle } from "./garanti-reels";
import { AutreAxiliaireJustice } from "./autre-auxiliaire-justice";
import TabsContent from "../../../compound-component/TabsContent";
import { useGestionAmiableStores } from "../../use-gestion-amiable-stores";

export function GestionLogements() {
  const stores = useGestionAmiableStores();
  const [activeIndex, setAciveIndex] = useState(0);
  const onTabChange = (event: any) => {
    setAciveIndex(event.index);
  };


  return (
    <>
      <TabsContent
        actions={
          <div>
            <Button
              onClick={() => setAciveIndex(0)}
              className={`w-2rem h-2rem p-0 border-orange-500 border-1 rounded mr-2 ${
                activeIndex === 0 && "bg-orange-300 rounded"
              }`}
              rounded
              outlined={activeIndex !== 0}
              label="1"
            />
            <Button
              onClick={() => setAciveIndex(1)}
              className={`w-2rem h-2rem p-0 border-orange-500 border-1 rounded mr-2 ${
                activeIndex === 1 && "bg-orange-300 rounded"
              }`}
              rounded
              outlined={activeIndex !== 1}
              label="2"
            />
            <Button
              onClick={() => setAciveIndex(2)}
              className={`w-2rem h-2rem p-0 border-orange-500 border-1 rounded mr-2 ${
                activeIndex === 2 && "bg-orange-300 rounded"
              }`}
              rounded
              outlined={activeIndex !== 2}
              label="3"
            />
            <Button
              onClick={() => setAciveIndex(3)}
              className={`w-2rem h-2rem p-0 border-orange-500 border-1 rounded mr-2 ${
                activeIndex === 3 && "bg-orange-300 rounded"
              }`}
              rounded
              outlined={activeIndex !== 3}
              label="4"
            />
            <Button
              onClick={() => setAciveIndex(4)}
              className={`w-2rem h-2rem p-0 border-orange-500 border-1 rounded mr-2 ${
                activeIndex === 4 && "bg-orange-300 rounded"
              }`}
              rounded
              outlined={activeIndex !== 4}
              label="5"
            />
            <Button
              onClick={() => setAciveIndex(5)}
              className={`w-2rem h-2rem p-0 border-orange-500 border-1 rounded mr-2 ${
                activeIndex === 5 && "bg-orange-300 rounded"
              }`}
              rounded
              outlined={activeIndex !== 5}
              label="6"
            />
            {/* <Button
              onClick={() => setAciveIndex(6)}
              className={`w-2rem h-2rem p-0 border-orange-500 border-1 rounded mr-2 ${
                activeIndex === 6 && "bg-orange-300 rounded"
              }`}
              rounded
              outlined={activeIndex !== 6}
              label="7"
            /> */}
          </div>
        }
      >
        <TabView activeIndex={activeIndex} onTabChange={onTabChange}>
          <TabPanel
            header={
              <span
                className={`${
                  activeIndex === 0 && "border-bottom-3 border-orange-500"
                } pb-1`}
                onClick={() => stores.setAccordionLib("LOGEMENTS")}
              >
                LOGEMENT
              </span>
            }
          >
            <p className="m-0">
              <LogementForm />
            </p>
          </TabPanel>
          <TabPanel
            header={
              <span
                className={`${
                  activeIndex === 1 && "border-bottom-3 border-orange-500"
                } pb-1`}
                onClick={() => stores.setAccordionLib("TERRAINS")}
              >
                TERRAIN
              </span>
            }
          >
            <p className="m-0">
              <Terrain />
            </p>
          </TabPanel>
          <TabPanel
            header={
              <span
                className={`${
                  activeIndex === 2 && "border-bottom-3 border-orange-500"
                } pb-1`}
                onClick={() => stores.setAccordionLib("MUTATIONS")}
              >
                MUTATION
              </span>
            }
          >
            <p className="m-0">
              <Mutations />
            </p>
          </TabPanel>
          {/* <TabPanel
            header={
              <span
                className={`${
                  activeIndex === 3 && "border-bottom-3 border-orange-500"
                } pb-1`}
                onClick={() => stores.setAccordionLib("OVP")}
              >
                OVP
              </span>
            }
          >
            <p className="m-0">
              <Ovp />
            </p>
          </TabPanel> */}
          <TabPanel
            header={
              <span
                className={`${
                  activeIndex === 3 && "border-bottom-3 border-orange-500"
                } pb-1`}
                onClick={() => stores.setAccordionLib("GARANTIE PERSONNELLE")}
              >
                Garantie Personnelle
              </span>
            }
          >
            <p className="m-0">
              <GarantiePersonnels />
            </p>
          </TabPanel>
          <TabPanel
            header={
              <span
                className={`${
                  activeIndex === 4 && "border-bottom-3 border-orange-500"
                } pb-1`}
                onClick={() => stores.setAccordionLib("GARRANITE REEL")}
              >
                Garantie Réelle
              </span>
            }
          >
            <p className="m-0">
              <GarantieReelle />
            </p>
          </TabPanel>
          <TabPanel
            header={
              <span
                className={`${
                  activeIndex === 5 && "border-bottom-3 border-orange-500"
                } pb-1`}
                onClick={() => stores.setAccordionLib("AUXILIAIRE DE JUSTICE")}
              >
                Autres Auxiliaire de justice
              </span>
            }
          >
            <p className="m-0">
              <AutreAxiliaireJustice />
            </p>
          </TabPanel>
        </TabView>
      </TabsContent>
    </>
  );
}
