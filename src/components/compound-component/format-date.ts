import moment from 'moment';
import 'moment/locale/fr';
moment.updateLocale('fr', {
    months : [
        "janvier", "février", "mars", "avril", "mai", "juin",
        "juillet", "août", "septembre", "octobre", "novembre", "décembre"
    ]
});

export function formatedDate(date: string, withHours?: boolean, format?: string) {
    moment.locale('fr');
    return moment && moment(date).format(format || `DD MMMM YYYY ${withHours ? "hh:mm" : ""}`);
}
