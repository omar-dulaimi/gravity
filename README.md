# Gravity

**Gravity** is a full-stack framework that provides **end-to-end typesafe API** with an **enjoyable developer experience**.

> This projet is in active development. The documentation is incomplete, some features and integrations are still missing and it is highly discouraged to use it in production.
  If you are interested about the project's development, you can follow the [roadmap](#roadmap).

### Highlights

- **Types are shared** between client and server: no more unsafe REST or GraphQL code-generation.
- **Natural function invocation**: call your api functions as if it's _just a javascript function_. Gravity will handle all the server ↔ client communication for you.
- **Typescript-oriented**: just relax and enjoy type-safety and autocompletion on your api calls.
- **No schema declaration**: your Typescript types _are_ your schema.
- **Simple authorization flow**: Gravity services implement a simple and enjoyable interface to make sure that anyone cannot do anything.
- **Modular and scalable architecture**: by working with _services_, you can be sure your code will remain well-organized even for the largest codebases.
- **Back-end agnostic**: you can use a vanilla node server or any back-end framework like Express, Polka, h3, Next, SvelteKit, etc...
- **Front-end agnostic**: use Gravity with Svelte, React, Vue, or any other front-end framework.
- **Client-side api composables**: built-in React or Svelte composables unlock powerful features like data caching and automatic polling.
- **Simple**: The same api written with Nest and GraphQL needs 3x more code. **Do in one day what you used to do in three days.**


### Simple example of back ↔ front communication with Gravity

Gravity is meant to be super-easy and intuitive to use. Here is a simple demonstration of how you can call a server function from your client:
```ts
// [back]
// server/services/users.ts

/**
 * We define a service "users" that we will expose to our client
 * The client will be able to invoke any of the public methods of the service
 */
export class users extends Service {
  getFullName(firstName = "", lastName = ""): string {
    if (!firstName) return lastName;
    if (!lastName) return firstName;
    return `${firstName} ${lastName}`;
  }
}
```

```ts
// [front]
// client/main.ts

import { api } from "../api";

/**
 * Client-side, all exposed services are available under the `api` object
 * Methods signatures are strictly identic server and client-side
 * The only difference is that client-side the return type of a service method will be promisified
 */
const fullName = await api.users.getFullName("Foo", "Bar");
console.log("Full name is:", fullName); // will print "Full name is: Foo Bar"
```


*Want to know more?*

**Go to the documentation and [get started!](documentation)**


# <a name="roadmap"></a> Roadmap

### Core features

<table>
  <tr>
    <td>✅</td>
    <td>Server / client communication</td>
  </tr>
  <tr>
    <td>✅</td>
    <td>Context</td>
  </tr>
  <tr>
    <td>✅</td>
    <td>Use other services in service</td>
  </tr>
  <tr>
    <td>✅</td>
    <td>Low-level metadata API for services and operations</td>
  </tr>
  <tr>
    <td>✅</td>
    <td>Guard decorators</td>
  </tr>
  <tr>
    <td>✅</td>
    <td>Tag decorators</td>
  </tr>
  <tr>
    <td>✅</td>
    <td>Gravity callbacks</td>
  </tr>
  <tr>
    <td>✅</td>
    <td>Error handling</td>
  </tr>
  <tr>
    <td>🚧</td>
    <td>Automatic schema generation</td>
  </tr>
  
  <tr>
    <td>🚧</td>
    <td>Parameters validation at runtime</td>
  </tr>
  
  <tr>
    <td>🚧</td>
    <td>Validation decorators</td>
</tr>

  </tr>
</table>


### Integrations

#### Back-end frameworks

<table>
  <tr>
    <td>✅</td>
    <td>Express, Polka, h3, Connect, and similar</td>
  </tr>
  <tr>
    <td>✅</td>
    <td>SvelteKit</td>
  </tr>
  <tr>
    <td>✅</td>
    <td>Vanilla Node server</td>
  </tr>
  <tr>
    <td>❌</td>
    <td>Next.js</td>
  </tr>
  <tr>
    <td>❌</td>
    <td>Nuxt</td>
  </tr>
</table>

#### Front-end frameworks
<table>
  <tr>
    <td>✅</td>
    <td>Svelte</td>
  </tr>
  <tr>
    <td>❌</td>
    <td>React</td>
  </tr>
  <tr>
    <td>❌</td>
    <td>Vue 3</td>
  </tr>
</table>

#### ORMs
<table>
  <tr>
    <td>🚧</td>
    <td>Prisma</td>
  </tr>
  <tr>
    <td>❌</td>
    <td>MikroOrm</td>
  </tr>
  <tr>
    <td>❌</td>
    <td>Vue 3</td>
  </tr>
</table>
