
import axios from "axios";
import { getUrl } from "../../../common/configs/api/api_configs";
import { Identifiable } from '../../AcData.types'
import { signal, Signal } from "@preact/signals-react";



export default abstract class ICrudStateProvider<T extends Identifiable> {
    // State 
    private state: Signal<T[] | {}>
    // REST API path on which to send request
    basePath: string

    getState = () => this.state

    constructor(basePath: string, initialState?: {}) {
        this.state = signal(initialState ?? [])
        this.basePath = basePath
    }

    // fetch data
    find = async (): Promise<T[] | {}> => {
        let { data, status } = await axios.get(getUrl(this.basePath),
            {
                headers: {
                    'ngrok-skip-browser-warning': true
                }
            })
        if (status == 200) {

            console.log(data);

            this.state.value = data.map(this.mapEntitieFrom)
        }
        return this.state.value
    }

    // Update data 
    update = async (updatedData: T): Promise<void> => {
        console.log(updatedData)
        console.log(this.mapDataToJson(updatedData))
        let { status } = await axios.patch(getUrl(this.basePath), this.mapDataToJson(updatedData), {
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': true
            }
        })
        if (status == 200) {
            await this.find()
        }
    }

    findRequiredState = async (providers: ICrudStateProvider<any>[]): Promise<T[] | {}> => {
        for (let index = 0; index < providers.length; index++) {
            await providers[index].find()
        }
        return await this.find()
    }

    // delete data
    delete = async (data: T): Promise<void> => {
        let { status } = await axios.delete(getUrl(`${this.basePath}/${data.id}`),
            {
                headers: {
                    'ngrok-skip-browser-warning': true
                }
            }
        )
        if (status == 200) {
            await this.find()
        }
    }

    // create a new entry 

    create = async (data: T): Promise<T | void> => {
        // console.log(this.create)
        console.log(this.mapDataToJson(data))
        let { status } = await axios.post(getUrl(this.basePath), this.mapDataToJson(data), {
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': true
            }
        })
        if (status == 201) {
            await this.find()
        }

    }


    // map Entitie from Json
    abstract mapEntitieFrom(json: any): T
    // map entities to correspond to json key sent by server 
    abstract mapDataToJson(data: T): {}

}

