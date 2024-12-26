import { Row, Col } from "react-bootstrap";
import Calendars from "../../../compound-component/form/Calendars";
import InputText from "../../../compound-component/form/InputField";
import SeletectField from "../../../compound-component/form/SeletectField";
import { Controller, UseFormReturn } from "react-hook-form";
import { useActeController } from "./controller";
import { InputField } from "../controller";
import { useGestionAmiableStores } from "../../use-gestion-amiable-stores";
import emptyImage from "../../../../assets/empty3.png";
import InputsTextarea from "../../../compound-component/form/InputsTextarea";

interface Props {
  form: UseFormReturn<InputField, any>;
}

export function Acte({ form }: Props) {
  const ctrl = useActeController(form);
  const stores = useGestionAmiableStores();

  return (
    <div className="m-2">
      <Row>
        <Col md={6} className="card border-1 m-1 p-2">
          <b className="text-orange-500">Actes</b>
          <Row>
            <Col xs={6} md={6} className="pt-">
              <span className="pt-4">
                <Controller
                  name="acterCode"
                  control={form.control}
                  render={({ field }) => (
                    <InputText
                      label="Type d'acte"
                      disabled
                      id="code"
                      {...field}
                    />
                  )}
                />
              </span>
            </Col>
            <Col xs={6} md={6} className="mt-3">
              <Controller
                name="typacteCode"
                control={form.control}
                render={({ field }) => (
                  <SeletectField
                    options={ctrl.typeActes}
                    optionLabel={"typacteLib"}
                    optionValue={"typeActeCode"}
                    placeholder="Selectionnée"
                    id="bloc"
                    {...field}
                    onChange={(event) => {
                      field.onChange(event);
                      ctrl.handleChangeTypeActe(event);
                    }}
                    value={ctrl.typeActeCode}
                  />
                )}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={4} md={4}>
              <Controller
                name="acteDelai"
                control={form.control}
                render={({ field }) => (
                  <InputText
                    disabled
                    label="Délait Acte (Jour)"
                    id="acteDelai"
                    {...field}
                  />
                )}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <Controller
                name="acteDatecrea"
                control={form.control}
                render={({ field }) => (
                  <Calendars label="Date de création" id="bloc" {...field}
                    value={field.value ? field.value : new Date()} />
                )}
              />
            </Col>
          </Row>

          {
            stores.actId &&
           <>
             <Row>
              <Col xs={6} md={6}>
                <Controller
                  name="acteDateSignat"
                  control={form.control}
                  render={({ field }) => (
                    <Calendars label="Date signature" id="bloc" {...field}
                      value={field.value} />
                  )}
                />
              </Col>

              <Col xs={6} md={6}>
                <Controller
                  name="acteDatreact"
                  control={form.control}
                  render={({ field }) => (
                    <Calendars label="Date réactuon debiteur" id="bloc" {...field}
                      value={field.value} />
                  )}
                />
              </Col>

              <Col xs={6} md={6}>
                <Controller
                  name="notification"
                  control={form.control}
                  render={({ field }) => (
                    <Calendars label="Date de notification" id="bloc" {...field}
                      value={field.value} />
                  )}
                />
              </Col>
            </Row>
            <Row className="">
            <Col xs={12} md={12}>
                {/* <Controller
                  name=""
                  control={form.control}
                  render={({ field }) => ( */}
                    <InputsTextarea label="Nature de la réaction" id="bloc" 
                       />
                  {/* )}
                /> */}
              </Col>
            </Row>
           </>
          }

          <Row>
            <Col xs={8} md={8}>
              <Controller
                name="initialGestionnaire"
                control={form.control}
                render={({ field }) => (
                  <InputText
                    label={
                      (
                        <span className="text-danger">
                          Initial-gestionnaire
                        </span>
                      ) as any
                    }
                    id="bloc"
                    {...field}
                  />
                )}
              />
            </Col>
            <Col xs={4} md={4}>
              <Controller
                name="initialGestionnaire"
                control={form.control}
                render={({ field }) => (
                  <InputText label="Nombre de pièce" id="bloc" {...field} />
                )}
              />
            </Col>
          </Row>
          <Row className="g-2">
            <Col xs={6} md={6}>
              <Controller name="acteCodeGlob" control={form.control}
                render={({ field }) =>
                  <SeletectField
                    options={stores.actes || []} optionLabel="id" optionValue="id"
                    label="Acte lié (procédure)"
                    placeholder="Selectionnée"
                    id="bloc"
                    dropdownClassName="mt-3"
                    labelStyles={300} {...field}
                  />} />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <Controller
                name="typacteOrdEmis"
                control={form.control}
                render={({ field }) => (
                  <InputText label="Rang de l'acte" id="acteRang" disabled {...field} />
                )}
              />
            </Col>
          </Row>
        </Col>

        <Col md={5} className="">
          {!ctrl.typeActeLibelle.includes("CONVOCATION") ?
            <>
              <div className="card m-1 p-2 m-">
                <div className="card border-1 m-1 p-2">
                  <b className="text-orange-500">Auxiliaire de justice</b>
                  <Row>
                    {/* <SectionTitle title="" subTitle="Ajouter un auxiliaire de justice" /> */}
                    <Row className="g-2">
                      <Col xs={4} md={4}>
                        <SeletectField
                          options={[]}
                          label="Code"
                          placeholder="Selectionnée"
                          id="bloc"
                        />
                      </Col>
                      <Col xs={4} md={4}>
                        <InputText
                          label="Type auxiliaire"
                          disabled
                          id="nPorte"
                        />
                      </Col>
                      <Col xs={4} md={4}>
                        <InputText
                          placeholder="L'initial de l'auxiliaire"
                          disabled
                          id="bloc"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4} md={4}>
                        <InputText label="Nom" disabled id="bloc" />
                      </Col>
                      <Col xs={8} md={8}>
                        <InputText
                          placeholder="L'initial du nom "
                          disabled
                          id="bloc"
                        />
                      </Col>
                    </Row>
                  </Row>
                </div>
                {/* <SectionTitle title="" subTitle="Ajouter un agent de justice" className="pb-1" /> */}
                <div className="card m-1 p-2">
                  <b className="text-orange-500">Agent de poursuite</b>
                  <Row className="g-2 ">
                    <Col xs={4} md={4}>
                      <SeletectField
                        options={[]}
                        label="Code"
                        placeholder="Selectionnée"
                        id="bloc"
                      />
                    </Col>

                    <Col xs={4} md={4}>
                      <InputText label="Type Agent" disabled id="nPorte" />
                    </Col>
                    <Col xs={4} md={4}>
                      <InputText
                        placeholder="L'initial de l'agent de poursuite"
                        disabled
                        id="bloc"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4} md={4}>
                      <InputText label="Nom" disabled id="bloc" />
                    </Col>
                    <Col xs={8} md={8}>
                      <InputText
                        placeholder="L'initial du nom"
                        disabled
                        id="bloc"
                      />
                    </Col>
                  </Row>
                </div>
              </div>
            </>
            :
            <div className="ml-5 justify-items-center align-items-center">
              <img src={emptyImage} alt="Image" style={{ width: "60%", marginLeft: "20%" }} />
            </div>
          }
        </Col>
      </Row>
    </div>
  );
}
