
## 👉 Get Started
Install dependencies
```
npm install
```
Update your `.env` file with values for each environment variable
```
API_KEY=AIzaSyBkkFF0XhNZeWuDmOfEhsgdfX1VBG7WTas
etc ...
```

Run the development server
```
npm run start
```
When the above command completes you'll be able to view your website at `http://localhost:3000`

## 🥞 Stack
This project uses the following libraries and services:
- Framework - [Create React App](https://create-react-app.dev) with React Router
- UI Kit - [Tailwind](https://tailwindcss.com)
- Analytics - [Google Analytics](https://googleanalytics.com)
- Hosting - [Netlify](https://netlify.com)


## 📚 Guide

<details> <summary><b>Styles</b></summary> <p> Styles are applied within each component using Tailwind classes. You can customize your Tailwind colors, breakpoints, and other high-level values in <code>tailwind.config.js</code> (<a href="https://tailwindcss.com/docs/configuration">docs</a>). You can add new global classes in <code>src/styles/global.css</code> (<a href="https://tailwindcss.com/docs/adding-custom-styles#adding-component-classes">docs</a>). Your template contains Tailwind components designed by <a href="https://tailkit.com">Tailkit</a>. You can find a larger selection of nicely designed components at <a href="https://tailkit.com">tailkit.com</a>. </p> </details>

<details>
<summary><b>Routing</b></summary>
<p>
  This project uses <a target="_blank" href="https://reacttraining.com/react-router/web/guides/quick-start">React Router</a> and includes a convenient <code>useRouter</code> hook (located in <code><a href="src/util/router.js">src/util/router.js</a></code>) that wraps React Router and gives all the route methods and data you need.

```js
import { Link, useRouter } from "./../util/router.js";

function MyComponent() {
  // Get the router object
  const router = useRouter();

  // Get value from query string (?postId=123) or route param (/:postId)
  console.log(router.query.postId);

  // Get current pathname
  console.log(router.pathname);

  // Navigate with the <Link> component or with router.push()
  return (
    <div>
      <Link to="/about">About</Link>
      <button onClick={(e) => router.push("/about")}>About</button>
    </div>
  );
}
```
</p>
</details>





<details>
<summary><b>Deployment</b></summary>
<p>
Install the Netlify CLI

```
npm install netlify-cli -g
```

Link codebase to a Netlify project (choose the "create and deploy manually" option)

```
netlify init
```

Add each variable from your `.env` file to your Netlify project, including ones prefixed with "REACT_APP\_". You can also use the Netlify UI for this by going to your Site settings → Build & Deploy → Environment.

```
netlify env:set VARIABLE_NAME value
```

Build for production

```
npm run build
```

Then run this command to deploy to Netlify
```
netlify deploy
```

See the <a target="_blank" href="https://docs.netlify.com/cli/get-started/#manual-deploys">Netlify docs</a> for more details.
</p>
</details>

<details>
<summary><b>Other</b></summary>
<p>
  This project was created using <a href="https://divjoy.com?ref=readme_other">Divjoy</a>, the React codebase generator. You can find more info in the <a href="https://docs.divjoy.com">Divjoy Docs</a>.
</p>
</details>
  