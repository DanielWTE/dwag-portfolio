---
title: 'Solun Services'
metaTitle: 'Solun Services'
metaDesc: 'This article is about the creation and the idea behind solun.'
website: 'https://solun.pm'
github: 'https://github.com/solun-pm'
---

## What is Solun?
Solun is a service that enables you to securely share files, texts, and send emails with end-to-end encryption, providing peace of mind for your privacy. Additionally, it offers the ability to create a free email account and the option to add custom domains.

## What is the purpose of Solun?
Solun's mission is to bridge the privacy gap by providing an independent and open service for secure file sharing, text communication, and email transmission with end-to-end encryption. Our goal is to offer a comprehensive solution that eliminates the need for external platforms such as WhatsApp, Telegram, Signal, and others.

Furthermore, we aim to simplify the process of using your own domain with our email accounts, removing any concerns related to the technical aspects involved.

## Which technologies are used?
- **Next.js**: Next.js is a technology used in this project for server-side rendering and building React applications.

- **Express**: Express is a web application framework for Node.js that provides a set of features for building web servers and APIs.

- **MongoDB**: MongoDB is a NoSQL database used in this project to store and manage data.

- **Docker**: Docker is a platform used for containerization, allowing applications to be packaged and run in isolated environments.

- **Git**: Git is a version control system used for tracking changes in code and collaborating with other developers.

- **TypeScript**: TypeScript is a superset of JavaScript that adds static typing, providing improved developer productivity and code quality.

## What will I talk about in this article regarding Solun?

In this article, I will delve into the coding aspects of Solun and provide insights into the individual repositories involved. For those interested in exploring the technical server-side details further, I recommend referring to the dedicated section on my friend and colleague Jannik's website, [Solun - Technical Server-Side Details](https://jsde.me/posts/solun/).

## How is Solun structured?
Solun is structured using a combination of eight repositories that are essential for the overall application functionality.

- **Solun** -> [Repository (Web Frontend)](https://github.com/solun-pm/solun)
- **Solun Auth** -> [Repository (Web Frontend)](https://github.com/solun-pm/solun-auth)
- **Solun Webmail** -> [Repository (Web Frontend)](https://github.com/solun-pm/solun-webmail)
- **Solun API** -> [Repository (Backend)](https://github.com/solun-pm/solun-api)
- **Solun-Delete-Bird** -> [Repository (Script)](https://github.com/solun-pm/solun-delete-bird)
- **Solun-Check-DNS** -> [Repository (Script)](https://github.com/solun-pm/solun-check-dns)
- **Solun-General-Package** -> [Repository (Package)](https://github.com/solun-pm/solun-general-package)
- **Solun-Database-Package** -> [Repository (Package)](https://github.com/solun-pm/solun-database-package)
- **Solun-Server-Encryption-Package** -> [Repository (Package)](https://github.com/solun-pm/solun-server-encryption-package)

These applications, scripts, and packages collectively form the foundation of Solun, enabling its smooth and functional operation for secure file sharing, text communication, and email services.

## Solun
The Solun repository contains the frontend code for the Solun website, which is built using Next.js and TypeScript. You can access the website at [https://solun.pm](https://solun.pm).

On the Solun website, users can explore detailed information about the platform and its features. Additionally, users have the opportunity to sign up for a free account and utilize the email services.

### Encrypted message
One of the notable features available is the "One-Time Secret" functionality, which allows users to send confidential messages that will be automatically deleted after the first view. This feature is particularly useful for securely sharing sensitive information such as passwords, credit card details, and other private data.

At Solun a user can choose from various security features like
* End to end encryption
* Password
* Bruteforce Safe
to make the message more secure.

The text content will be encrypted on the client-side, this feature uses an symmetric encrypting process, this means we're generating a unique secret key for every message, if the "E2EE" option is enabled we will not store this secret key - the key will be added to the message URL.

The code which we use to encrypt messages from [Solun-General-Package@clientEncryption.ts](https://github.com/solun-pm/solun-general-package/blob/main/src/utils/encryption/clientEncryption.ts)

Algorithm: AES-256-CBC
Package: Crypto

```typescript
  export async function encrypt(message: string, key: string) {
    try {
      const iv = crypto.randomBytes(ivLength);
      const keyBuffer = Buffer.from(key, 'hex');
      const cipher = crypto.createCipheriv(algorithm, keyBuffer, iv);
      let encrypted = cipher.update(message, 'utf8', 'hex');
      encrypted += cipher.final('hex');
      return iv.toString('hex') + ':' + encrypted;
    } catch (err) {
      return "";
    }
  }
```

To view a message the user needs to click on the link and verify the interaction with "View", after that the encrypted message will be sent to the frontend where we will decrypt the encrypted message with a new function from [Solun-General-Package@clientEncryption.ts](https://github.com/solun-pm/solun-general-package/blob/main/src/utils/encryption/clientEncryption.ts)

```typescript
  export async function decrypt(message: string, key: string) {
    try {
      const components = message.split(':');
      // @ts-ignore: Works fine with it
      const iv = Buffer.from(components.shift(), 'hex');
      const encryptedText = Buffer.from(components.join(':'), 'hex');
      const keyBuffer = Buffer.from(key, 'hex');
      const decipher = crypto.createDecipheriv(algorithm, keyBuffer, iv);
      // @ts-ignore: Works fine with it
      let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
      // @ts-ignore: Works fine with it
      decrypted += decipher.final('utf8');
      return decrypted;
    } catch (err) {
      return "";
    }
  }
```
We are fetching the secret key from the user URL or if E2EE is not enabled, from our database.
So, if the right options are set - we are not able to view the content of your message.

### Encrypted file upload
Another notable feature is the "File Sharing" capability, enabling users to upload files and share them with others. These shared files are automatically deleted after a user-defined timeframe, ensuring privacy and control over shared content.

Here we have the same features as above.

If you upload a file to Solun, it gets encrypted after it successfully uploaded, we're using the same techniques from the message feature.

You can find the full code here: [Solun-Server-Encryption-Package@encryption.ts]([https://github.com/solun-pm/solun-general-package/blob/main/src/utils/encryption/clientEncryption.ts](https://github.com/solun-pm/solun-server-encryption-package/blob/main/src/utils/encryption/encryption.ts))
```typescript
export async function encryptFile(path: string, key: string, iv: Buffer) {
  try {
    const keyBuffer = Buffer.from(key, 'hex');
    const cipher = crypto.createCipheriv(algorithm, keyBuffer, iv);
    const fileBuffer = readFileSync(path);
    const encryptedBuffer = Buffer.concat([cipher.update(fileBuffer), cipher.final()]);
    
    writeFileSync(path, encryptedBuffer);
  } catch (err) {
    birdLog('encryptFile', err, 'error');
    console.error(err);
    return;
  }
}
```

Decrypting process:
```typescript
export async function decryptFile(path: string, key: string, iv: string) {
  try {
    const keyBuffer = Buffer.from(key, 'hex');
    const ivBuffer = Buffer.from(iv, 'hex');
    const encryptedData = readFileSync(path);
    const decipher = crypto.createDecipheriv(algorithm, keyBuffer, ivBuffer);
    const decryptedData = Buffer.concat([decipher.update(encryptedData), decipher.final()]);
    
    writeFileSync(path, decryptedData);
  } catch (err) {
    birdLog('decryptFile', err, 'error');
    console.error(err);
    return;
  }
}
```

All features on the Solun website are accessible without the need to sign up for an account. However, users who wish to use a free email account or add a custom domain must create an account.
