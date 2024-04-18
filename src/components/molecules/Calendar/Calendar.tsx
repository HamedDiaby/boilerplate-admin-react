import React from "react";
import './styles.css';
import { ICalendar } from "./interface";

import { Calendar as CalendarComponent } from 'primereact/calendar';
import { addLocale } from 'primereact/api';

export const Calendar:React.FC<ICalendar> = ({
    value,
    placeholder,
    disabled,
    onChange,
})=> {

    addLocale('fr', {
        dayNames: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
        dayNamesShort: ['dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam'],
        dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
        monthNames: ['janvier', 'fevrié', 'mars', 'avri', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'decembre'],
        monthNamesShort: ['jan', 'fev', 'mar', 'avr', 'mai', 'juin', 'juil', 'août', 'sep', 'oct', 'nov', 'dec'],
        today: "Aujourd'hui",
        clear: 'Netoyer'
    });

    return (
        <CalendarComponent 
            locale="fr"
            value={value} 
            onChange={(e) => onChange(e.value)} 
            view="month" dateFormat="mm/yy" 
            placeholder={placeholder}
            className="tf_calendar"
            disabled={disabled}
        />
    )
}