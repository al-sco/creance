import { Row, Col, Button } from "react-bootstrap";
import Calendars from "../../../compound-component/form/Calendars";
import InputText from "../../../compound-component/form/InputField";
import { useCreanceController } from "./controller";
import { Controller, UseFormReturn } from "react-hook-form";
import { InputField } from "../controller";
import { CardLink } from "../../../compound-component/CardLink";
import Alerts from "../../../compound-component/Alerts";
import moment from "moment";

interface Props {
  form: UseFormReturn<InputField, any>;
  visible?: boolean;
}
export function CreanceDialog({ form, visible }: Props) {
  const ctrl = useCreanceController(form, visible);
  return (
    <div className="m-2">
      <Alerts {...ctrl.alerts} />
      <Row className=" border-1 p-2">
        <Col md={9} className="card m-2 border-1 ">
          <b className="text-orange-500">Creance</b>
    
              <div className="pt-4 d-flex align-items-center">
                <Controller
                  name="codeCreance"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <InputText
                    label="Code créance"
                    placeholder="Saisir le code créance"
                    id="codeCreance"
                    {...field}
                    onChange={(event) => {
                      field.onChange(event);
                      ctrl.handleChangeCreance(event);
                    }}
                    className="w-full"
                    value={ctrl.creanceCode}
                    error={fieldState.error?.message}
                  />
                  )}
                />
                <Button className="ml-2 border-none" onClick={ctrl.afficher}>Afficher</Button>
              </div>
            
        
          <Row className="m-2">
            <Col xs={4} md={4} lg={4} sm={6}>
              <Controller
                name="debCode"
                control={form.control}
                render={({ field }) => (
                  <InputText
                    disabled
                    label="Débiteur"
                    id="debCode"
                    {...field}
                  />
                )}
              />
            </Col>
            <Col xs={6} md={6} lg={6} sm={6}>
              <Controller
                name="debiteur"
                control={form.control}
                render={({ field }) => (
                  <InputText disabled id="debiteur" {...field} />
                )}
              />
            </Col>
          </Row>

          <Row className="m-2">
            <Col xs={3} md={3}>
              <Controller
                name="groupeCreance"
                control={form.control}
                render={({ field }) => (
                  <InputText
                    disabled
                    label="Groupe créance"
                    id="groupeCreance"
                    {...field}
                  />
                )}
              />
            </Col>
            <Col xs={4} md={4}>
              <Controller
                name="grpCreanceLib"
                control={form.control}
                render={({ field }) => (
                  <InputText disabled label="" id="grpCreanceLib" {...field} />
                )}
              />
            </Col>

            <Col xs={2} md={2}>
              <Controller
                name="objCreanCode"
                control={form.control}
                render={({ field }) => (
                  <InputText disabled label="Objet" id="objCreanCode" {...field} />
                )}
              />
            </Col>
            <Col xs={3} md={3}>
              <Controller
                name="obCreanceLib"
                control={form.control}
                render={({ field }) => (
                  <InputText disabled label="" id="obCreanceLib" {...field} />
                )}
              />
            </Col>
          </Row>

          <Row className="g-2 algin-items-center m-2">
            <Col xs={6} md={6} lg={6} sm={6}>
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
            <Col xs={6} md={6} lg={6} sm={6}>
            <Controller
                name="creanDatech"
                control={form.control}
                render={({ field }) => (
              <Calendars
                label="Date de 1ère Echt"
                placeholder="JJ/MM/AA"
                disabled
                id="creanDatech"
                {...field}
                />
              )}
            />
            </Col>
            </Row>
            <Row className="g-2 algin-items-center m-2">
            <Col xs={6} md={6} lg={6} sm={6}>
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
            <Col xs={2} md={2} lg={2} sm={2}>
              <Controller
                name="duree"
                control={form.control}
                render={({ field }) => (
                  <InputText disabled label="Durée" id="duree" {...field} />
                )}
              />
            </Col>
          </Row>
          <Row>
          {/* <Col xs={2} md={2} lg={2} sm={2}>
              <Controller
                name="duree"
                control={form.control}
                render={({ field }) => (
                  <InputText disabled label="Durée" id="duree" {...field} />
                )}
              />
            </Col> */}
            <Col xs={4} md={4} lg={4} sm={4}>
              <Controller
                name="periodicite"
                control={ctrl.form.control}
                render={({ field }) => (
                  <InputText
                    disabled
                    label="code périodicité"
                    id="periodicite"
                    {...field}
                  />
                )}
              />
            </Col>
            <Col xs={6} md={6} lg={6} sm={6}>
              <Controller
                name="periodiciteLib"
                control={ctrl.form.control}
                render={({ field }) => (
                  <InputText
                    disabled
                    label="Périodicité"
                    id="periodiciteLib"
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
                name="creanNbech"
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
                  value={moment(new Date()).format("DD/MM/YYYY")}
                />
              )}
            />
          </Col>
          <Col xs={12} md={12}>
            <Controller
              name="creanDejRemb"
              control={form.control}
              render={({ field }) => (
                <InputText
                  disabled
                  label=""
                  placeholder={""}
                  id="creanDejRemb"
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
