**FurnituRistic**
FurnituRistic is a web application that lets users position and work with 3D models within an augmented reality (AR) setting.

**Functionalities**
This application offers simple functionalities like:

###### In frontend:
1. Putting on display of furniture catalog.
2. Showing comprehensive details about a certain furniture product.
3. Switching to a PlayCanvas application for better interaction.

Users can alter a 3D model in the PlayCanvas app by specifying characteristics such as name, position, and scale. These are obtained dynamically via the URL query. Users can interact with the 3D models in an AR scenario by clicking a button and superimposing them in their real-world space using the camera.

###### In PlayCanvas:
1. Obtaining model information from the URL, including name, location, rotation, scale, and color options.
2. Starting the 3D model in an AR perspective.
3. Changing the model's orientation, rotation, and scale.
4. Changing the model's appearance with different colors and textures.

The PlayCanvas application's source is accessible at the FurnituRistic PlayCanvas project page.

**Assets**
The 3D assets are sourced from sketchfab for educational use.

**Developer Instructions:**

In the project directory, you can use the following commands:

**npm start**
This command sets the program into development mode. You can access it through your browser by going to http://localhost:3000. If you change the code, the app will instantly update, and any lint mistakes will be displayed in the console.

**npm test**
This command launches the test runner in interactive mode. For more information about test execution, please see the test execution guide.

**npm run build**
This builds the application for production and places it in the build directory. It bundles React in production mode and optimizes the build for maximum efficiency, including minification and hashing of filenames. Following this, your app is ready for deployment.

For more details about deployment you can check the official documents.

**Deployment Information**
The app is set up for deployment on an AWS amplify instance.








