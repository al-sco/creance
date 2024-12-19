import moment from 'moment';

export function formatedDate(date: string, withHours?: boolean, format?: string) {
    return moment && moment(date).format(format || `DD/MM/YYYY ${withHours ? "hh:mm" : ""}`);
}
