Simple Single-Page Application that main objective is to get users informed about health benefits and collect email addresses for mailing list.
It is bootrstraped with _create-react-app_ and it is using _styled-components_ for styling and _react-pose_ for animations. It also uses _react-snapshot_ for generating a static website.
The project is fully responsive (from big screens to mobile devices).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

## Project

Project was designed in Sketch. First mock can be found here:
https://zciluk.github.io/smoothie_delight/task/project_smoothiedelight - desktop.png

## Components

The project is using two basic components: Button and Input, which can be easily reused in future modifications.
InfoSection component just takes titile, description, image props, so it is highly reusable. Moreover, it has "opposite" prop, for changing image/text position.
Other components are more specific, however modifing them should not be problematic.

## SEO and accessibility

###Accessibility:

- Project is using semantic HTML
- it is checked with Chrome Plugin "Wave" for accesiblity
- Automatic focused input field (especially important when there is an error in validation)
- Improved contrast between font and background colors (comparing to project design)
- Added labels and alt tags whenever possible
- Plugin A11y for Visual Studio code is automatically pointing wrong written code
- responsive for different resolutions. Used big fonts

###SEO:

- Provided title, description, keywords
- Semantic HTML
- React-snapshot for static website and better crawling (however, it is not needed so much in this project as it contains no links)
