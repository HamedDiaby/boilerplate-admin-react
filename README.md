# Getting Started

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Architecture du projet (FR)

Le projet est structuré de manière à suivre une architecture atomique dans le dossier `src` :

### `/components`
Contient les éléments de l'interface utilisateur, organisés en atomes, molécules, organismes et templates.
- **`/atomes`** : Composants de niveau le plus basique.
- **`/molécules`** : Groupes d'atomes fonctionnant ensemble.
- **`/organismes`** : Ensembles complexes de molécules et/ou atomes.
- **`/templates`** : Compositions d'organismes pour former des sections de pages.
- Pour un composant (par exemple, `Text`), la structure est `/text` avec `text.tsx`, `interfaces.ts`, et `styles.css`.

### `/themes`
Contient des fichiers CSS pour les variables globales partagées par tous les composants.

### `/data`
Gère la logique de données, utilisant Redux pour la gestion d'état, Redux Saga pour les effets secondaires, et la persistance des données.

### `/navigation`
Contient toute la logique de navigation de l'application.

### `/utilities`
- **`/types`** : Pour les types TypeScript et les interfaces.
- **`/functions`** : Contient des fonctions réutilisables.
- **`/enums`** : Pour les énumérations.
- **`/hooks`** : Contient les hooks personnalisés.

### `/pages`
Chaque page de l'application est organisée ici avec la structure suivante :
- `component.tsx` : Le composant UI de la page.
- `container.tsx` : Logique et état de la page.
- `styles.css` : Feuille de style de la page.
- `interface.ts` : Types et interfaces spécifiques à la page.

## Project Architecture (EN)

The project is structured to follow an atomic architecture within the `src` folder:

### `/components`
Contains UI elements, organized into atoms, molecules, organisms, and templates.
- **`/atoms`**: Most basic UI components.
- **`/molecules`**: Groups of atoms working together.
- **`/organisms`**: Complex combinations of molecules and/or atoms.
- **`/templates`**: Compositions of organisms to form page sections.
- For a component (e.g., `Text`), the structure is `/text` with `text.tsx`, `interfaces.ts`, and `styles.css`.

### `/themes`
Contains CSS files for global variables shared across all components.

### `/data`
Manages data logic, using Redux for state management, Redux Saga for side effects, and data persistence.

### `/navigation`
Contains all the navigation logic of the application.

### `/utilities`
- **`/types`**: For TypeScript types and interfaces.
- **`/functions`**: Contains reusable functions.
- **`/enums`**: For enumerations.
- **`/hooks`**: Contains custom hooks.

### `/pages`
Each page of the application is organized here with the following structure:
- `page.component.tsx`: The UI component of the page.
- `page.container.tsx`: Logic and state of the page.
- `styles.css`: Stylesheet of the page.
- `interface.ts`: Specific types and interfaces for the page.
