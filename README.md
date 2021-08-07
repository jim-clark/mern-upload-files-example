# Upload Files to S3 Using AJAX (Fetch API) and Express

## Install Necessary Node Modules

[multer](https://github.com/expressjs/multer) is Express middleware that will be used on any route used to process a file send in the HTTP request's body.

```
npm install multer
```

[@aws-sdk/client-s3](https://www.npmjs.com/package/@aws-sdk/client-s3) provides a client used to communicate between Node and AWS's S3 web service.

```
npm install @aws-sdk/client-s3
```

More Info: [AWS SDK Version 3 for JavaScript Developer Guide](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-started-nodejs.html)

## Review and Follow the Code Flow

1. src/pages/App/App.jsx
2. src/utilities/photo-api.js
3. routes/api/photos.js (note the multer middleware on the route)
4. controllers/api/photos.js
5. config/upload-file.js
