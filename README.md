# S3 File Uploader

## About

Simple web application to upload multiple files to an S3 Bucket.

## Getting Started

Install AWS Amplify CLI
```bash
npm install -g @aws-amplify/cli
```

Inside the project folder, initialize Amplify:

```
~ amplify init
```

Add authentication:
```
~ amplify add auth
```

Add storage:

```
~ amplify add storage

? Please select from one of the below mentioned services (Use arrow keys): Content (Images, audio, video, etc.)
...
? What kind of access do you want for Authenticated users? create/update
...
```

### Prerequisites

- AWS account
- Permissions to create resources in the AWS account
- Node.js 16.x or higher
