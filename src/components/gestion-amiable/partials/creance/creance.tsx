import { Row, Col } from "react-bootstrap";
import Calendars from "../../../compound-component/form/Calendars";
import InputText from "../../../compound-component/form/InputField";
import SeletectField from "../../../compound-component/form/SeletectField";
import { useCreanceController } from "./controller";
import { Controller, UseFormReturn } from "react-hook-form";
import { InputField } from "../controller";
import { CardLink } from "../../../compound-component/CardLink";

interface Props {
  form: UseFormReturn<InputField, any>;
}
export function CreanceDialog({ form }: Props) {
  const ctrl = useCreanceController(form);
  return (
    <div className="m-2">
      <Row className=" border-1 p-2">
        <Col md={9} className="card m-2 border-1 ">
          <b className="text-orange-500">Creance</b>
          <Row className="m-2">
            <Col xs={4} md={4} className="pt-3">
              <span className="pt-4">
                <Controller
                  name="codeCreance"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <SeletectField
                      label="Code"
                      options={ctrl.creances || []}
                      optionLabel="creanCode"
                      optionValue="creanCode"
                      placeholder="Selectionnée"
                      id="codeCreance"
                      {...field}
                      onChange={(event) => {
                        field.onChange(event);
                        ctrl.handleChangeCreance(event);
                      }}
                      value={ctrl.creanceCode}
                      error={fieldState.error?.message}
                    />
                  )}
                />
              </span>
            </Col>

            <Col xs={2} md={2}>
              <Controller
                name="debiteur"
                control={form.control}
                render={({ field }) => (
                  <InputText
                    disabled
                    label="Débiteur"
                    id="logeCode"
                    {...field}
                  />
                )}
              />
            </Col>
            <Col xs={4} md={4}>
              <Controller
                name="groupeCreance"
                control={form.control}
                render={({ field }) => (
                  <InputText disabled id="groupeCreance" {...field} />
                )}
              />
            </Col>
          </Row>

          <Row className="m-2">
            <Col xs={3} md={3}>
              <Controller
                name="objet"
                control={form.control}
                render={({ field }) => (
                  <InputText
                    disabled
                    label="Groupe créance"
                    id="objet"
                    {...field}
                  />
                )}
              />
            </Col>
            <Col xs={4} md={4}>
              <Controller
                name="objet"
                control={form.control}
                render={({ field }) => (
                  <InputText disabled label="" id="objet" {...field} />
                )}
              />
            </Col>

            <Col xs={2} md={2}>
              <Controller
                name="objet"
                control={form.control}
                render={({ field }) => (
                  <InputText disabled label="Objet" id="objet" {...field} />
                )}
              />
            </Col>
            <Col xs={3} md={3}>
              <Controller
                name="objet"
                control={form.control}
                render={({ field }) => (
                  <InputText disabled label="" id="objet" {...field} />
                )}
              />
            </Col>
          </Row>

          <Row className="g-2 algin-items-center m-2">
            <Col xs={2} md={4}>
              <Controller
                name="capitalInitial"
                control={form.control}
                render={({ field }) => (
                  <InputText
                    disabled
                    label="Capital initial"
                    id="capitalInitial"
                    {...field}
                  />
                )}
              />
            </Col>
            <Col xs={4} md={4}>
              <Calendars
                label="Date de 1ère Echt"
                placeholder="JJ/MM/AA"
                disabled
                id="bloc"
              />
            </Col>
            <Col xs={2} md={2}>
              <Controller
                name="dateOctroi"
                control={form.control}
                render={({ field }) => (
                  <Calendars
                    disabled
                    label="Date de Octroi"
                    placeholder="JJ/MM/AA"
                    id="dateOctroi"
                    {...field}
                  />
                )}
              />
            </Col>
            <Col xs={2} md={2}>
              <Controller
                name="duree"
                control={form.control}
                render={({ field }) => (
                  <InputText disabled label="Durée" id="duree" {...field} />
                )}
              />
            </Col>
            <Col xs={2} md={2}>
              <Controller
                name="periodicite"
                control={ctrl.form.control}
                render={({ field }) => (
                  <InputText
                    disabled
                    label="Périodicité"
                    id="periodicite"
                    {...field}
                  />
                )}
              />
            </Col>
          </Row>
          <Row className="m-2">
            <Col xs={4} md={4}>
              <Controller
                name="montantDebloque"
                control={form.control}
                render={({ field }) => (
                  <InputText
                    disabled
                    label="Montant debloqué"
                    id="montantDebloque"
                    {...field}
                  />
                )}
              />
            </Col>
            <Col xs={4} md={4}>
              <Controller
                name="nbEcheance"
                control={form.control}
                render={({ field }) => (
                  <InputText
                    disabled
                    label="Nb Ech"
                    id="nbEcheance"
                    {...field}
                  />
                )}
              />
            </Col>
            <Col xs={4} md={4}>
              <Controller
                name="dateFinEcheance"
                control={form.control}
                render={({ field }) => (
                  <Calendars
                    disabled
                    label="Date fin Ech"
                    placeholder="JJ/MM/AA"
                    id="status"
                    {...field}
                  />
                )}
              />
            </Col>
          </Row>
        </Col>

        <Col md={2} className="card m-2 border-1 ">
          <b className="text-orange-500">SOLDE DEBITEUR</b>
          <Col xs={12} md={12}>
            <Controller
              name="montantDebloque"
              control={form.control}
              render={({ field }) => (
                <InputText
                  disabled
                  label="DU"
                  placeholder="20/01/2024"
                  id="montantDebloque"
                  {...field}
                />
              )}
            />
          </Col>
          <Col xs={12} md={12}>
            <Controller
              name="montantDebloque"
              control={form.control}
              render={({ field }) => (
                <InputText
                  disabled
                  label=""
                  placeholder={""}
                  id="montantDebloque"
                  {...field}
                />
              )}
            />
          </Col>
          <Col xs={12} md={12}>
            <CardLink>Auxiliaire de justice</CardLink>
          </Col>
          <Col xs={12} md={12}>
            <CardLink>Extrait de compte</CardLink>
          </Col>
          <Col xs={12} md={12}>
            <CardLink>Rechercher un débiteur</CardLink>
          </Col>
          <Col xs={12} md={12}>
            <CardLink>Rechercher n° de créance</CardLink>
          </Col>
        </Col>
      </Row>
    </div>
  );
}
