# Bowtie Todo Project
   This App was made for a take home project for Bowtie.co. This app uses React Typescript with Context API for data management and Firebase OAuth.
   
   Users will sign up/sign in to the app and have access to make todo projects where they can individually add todos to a project, rename a project 
   and or delete a project. When a user has a project they can add a todo to a curtain project, mark it as complet and/or delete a todo
   
   ### THIS APP USES FIREBASE O-AUTH IN IT. YOU WILL NEED YOUR OWN FIREBASE SDK TO RUN THIS APP LOCALLY!
	 
## Get started
Clone repo and run ```npm install```. 
  
### Connect Firebase

Go to firebase.google.com and make an account if you do not have one already. After you log in click ```getting started``` and then add a project.

Once you click add a project give the project a name, you do not need to have google anatlytics added then click continue. You will need to register the 

app, you do that by clicking the ```</>``` symbol and give your app a nickname. After clicking register app button you will be given a Firebase SDK.

to add a Firebase SDK key make a ```.env.local``` file, with the variables being
 
```REACT_APP_FIREBASE_API_KEY=firebaseApiKey(no string quotes)
REACT_APP_FIREBASE_AUTH_DOMAIN=FirebaseAuthDomain(no string quotes)
REACT_APP_FIREBASE_PROJECT_ID=FirebaseProjectId(no string quotes)
REACT_APP_FIREBASE_STORAGE_BUCKET=FirebaseStorageBucket(no string quotes)
REACT_APP_FIREBASE_MESSENGING_SENDER_ID=MessengingSenderId(no string quotes)
REACT_APP_FIREBASE_APP_ID=FirebaseAppId(no string quotes)
```

After you add the Firebase SDK you are ready to run ```npm start``` run the development server
