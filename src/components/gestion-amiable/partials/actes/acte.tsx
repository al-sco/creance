import { Row, Col } from "react-bootstrap";
import Calendars from "../../../compound-component/form/Calendars";
import InputText from "../../../compound-component/form/InputField";
import SeletectField from "../../../compound-component/form/SeletectField";
import { Controller, UseFormReturn } from "react-hook-form";
import { useActeController } from "./controller";
import { InputField } from "../controller";

interface Props {
  form: UseFormReturn<InputField, any>;
}

export function Acte({ form }: Props) {
  const ctrl = useActeController(form);

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
                  <Calendars label="Date de création" id="bloc" {...field} />
                )}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={8} md={8}>
              <Controller
                name="acteDatecrea"
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
                name="acteDatecrea"
                control={form.control}
                render={({ field }) => (
                  <InputText label="Nombre de pièce" id="bloc" {...field} />
                )}
              />
            </Col>
          </Row>
          <Row className="g-2">
            <Col xs={6} md={6}>
              <SeletectField
                options={[]}
                label="Acte lié (procédure)"
                placeholder="Selectionnée"
                id="bloc"
                dropdownClassName="mt-3"
                labelStyles={300}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <Controller
                name="acteRang"
                control={form.control}
                render={({ field }) => (
                  <InputText label="Rang de l'acte" id="acteRang" {...field} />
                )}
              />
            </Col>
          </Row>
        </Col>

        <Col md={5} className="">
          {!ctrl.typeActeLibelle.includes("CONVOCATION") && (
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
          )}
        </Col>
      </Row>
    </div>
  );
}
