// FR: Définit une fonction pour formater une date dans un format lisible, en utilisant les paramètres de localisation.
// EN: Defines a function to format a date into a readable format, using locale settings.
export const formatDate = (
    date: any, 
    locale: string = 'default'
): string => {

    date = new Date(date);

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
    };

    return new Intl.DateTimeFormat(locale, options).format(date);
}

// FR: Définit une fonction pour formater l'heure dans un format lisible, en utilisant les paramètres de localisation.
// EN: Defines a function to format time into a readable format, using locale settings.
export const formatTime = (
    date: any, 
    locale: string = 'default'
): string => {

    date = new Date(date);

    const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        // second: '2-digit',
        hour12: false,
    };

    return new Intl.DateTimeFormat(locale, options).format(date);
}

export const getMonth = (date: Date)=> {
    const formatteur = new Intl.DateTimeFormat('fr', { month: 'numeric' });
    return Number(formatteur.format(date));
}

export const getYear = (date: Date)=> {
    const formatteur = new Intl.DateTimeFormat('fr', { year: 'numeric' });
    return Number(formatteur.format(date));
}  
  
