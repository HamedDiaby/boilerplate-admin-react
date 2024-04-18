import { Nullable } from "primereact/ts-helpers";

export interface ICalendar {
    value: Nullable<Date>
    placeholder?: string
    disabled?: boolean
    onChange: (e: Nullable<Date>)=> void
}
