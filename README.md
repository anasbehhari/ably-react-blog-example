# How to Integrate WebSockets in Your React App Using Ably
<p align="center">
<img src="https://miro.medium.com/max/720/1*HTHJfogOwsH3aYD15Omf_g@2x.webp"  width="700px">
</p>

<p>
WebSockets are a powerful tool for real-time communication between a client and a server. Ably is a real-time messaging platform that makes it easy to add WebSockets to your React application. In this blog post, we will go over the steps to set up Ably and integrate it with a React application.
</p>
<p>
Today, I’m excited to show you how to add real-time functionality to your React application using WebSockets and the powerful messaging platform, Ably. Whether you’re building a chat app, a live analytics dashboard, or any other type of application that requires instant updates and notifications, WebSockets and Ably are the perfect tools to help you achieve your goals. In this blog, we’ll go over the steps to set up Ably, integrate it with your React app, and start sending and receiving messages in real-time. So, let’s get started!
</p>

<p align="center">
click here to finish the Blog https://medium.com/@anasbehhari/how-to-integrate-websockets-in-your-react-app-using-ably-ae79a3410338
<P/>

## Installation
1. clone the repo and create in each `client` and `server` folders a `.env` file containing your envirenoment variables : 

inside `client` : 
```Bash
VITE_APP_BASE_URL=http://localhost:1234/
VITE_APP_API_KEY= YOUR API ABLY KEY
```
inside `server` : 

```Bash
PORT=1234
DBURI=mongodb://127.0.0.1:27017/DBNAME
APIKEY=YOUR API ABLY KEY
```
2. Run `npm run dev` on both `server` and `client`

3. Head to `http://localhost:5173/` 

4. follow the command from there  ✅ 👋
