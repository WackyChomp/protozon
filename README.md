# protozon

<!-- PROJECT LOGO -->
<br />
<div align="center" id='readme-top'>
  <img src="https://i.pinimg.com/originals/76/47/0f/76470f55efbc8cc7ec81778d18febc91.gif" alt="Logo" target='blank' width="100" height="80">
  <img src="https://i.pinimg.com/originals/76/47/0f/76470f55efbc8cc7ec81778d18febc91.gif" alt="Logo" target='blank' width="100" height="80">
  <img src="https://i.pinimg.com/originals/76/47/0f/76470f55efbc8cc7ec81778d18febc91.gif" alt="Logo" target='blank' width="100" height="80">

  <h3 align="center">Protozon</h3>

  <p align="center">
    Gallery of Ideas and Visions
    <br />
    <br />
    <a href="https://github.com/WackyChomp/protozon"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://github.com/WackyChomp/protozon">View Demo</a>
    ·
    <a href="https://github.com/WackyChomp/protozon/issues">Report Bug</a>
    ·
    <a href="https://github.com/WackyChomp/protozon/issues">Request Feature</a>
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
    <li><a href="#folder-structure">Folder Structure</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installations">Installations</a></li>
        <li><a href="#setup">Setup</a></li>
      </ul>
    </li>
    <!-- <li><a href="#"></a></li> -->
    <!-- <li><a href="#"></a></li> -->
  </ol>
</details>


## About The Project
Under creativity, there are no limitations to where inspiration is drawn from. In fact, it is how innovation happens!
<br/><br/>
If you are searching for a place to share you ideas or thoughts in a judgement-free zone, look no further with <b><u>Protozon</u></b>.

<u><b>Project Features / Vision:</b></u>
* Multiple-page application (MPA) for better SEO performance
* Quick loading experience and content management from <u><b>Sanity.io</u></b>
* Sleek and responsive design for satisfying seamless user experience with <u><b>Tailwind CSS</u></b>
* Deployed with <u><b>Vercel</b></u> for accessibility and reliability no matter your situation
* Utilizing open source tools for swift template setup, continuous updates, and transparent development


<!-- BUILT WITH -->
## Built With
Here are some frameworks/libraries used in this project:
* [![TypeScript][TypeScript]][TypeScript-url]
* [![React][React.js]][React-url]
* [![Tailwind][Tailwind.css]][Tailwind-url]
* [![Next][Next.js]][Next-url]
* [![Sanity][Sanity.io]][Sanity-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Folder Structure
General overview of folder/files
```
|--- app/
  |--- (root)
    |--- idea
      |--- [id]
        |-- page.tsx
      |--- create
        |-- page.tsx
    |-- layout.tsx
    |-- page.tsx
  |--- api
    |--- auth
      |--- [[...route]]
        |-- route.ts
  |--- studio
    |--- [[...tool]]       <-- sanity -->
  |-- globals.css
  |-- layout.tsx

|--- components/
  |--- ui        <-- shadcn-ui components -->
  |---           <-- custom components -->

|--- lib/
  |-- queries.ts    <-- sanity -->
  |-- utils.ts

|--- public/

|--- sanity
  |--- lib
    |-- client.ts
    |-- image.ts
    |-- live.ts
    |-- write-client.ts
  |--- schemaTypes
    |-- author.ts
    |-- idea.ts
    |-- index.ts
  |-- env.ts
  |-- extract.json
  |-- structure.ts
  |-- types.ts
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

### Installations
1. Some libraries and packages used
    ```sh
    npm install next-auth@beta
    npm install server-only

    npm install tailwindcss-animate
    npm install @tailwindcss/typography

    npx shadcn@latest init
    npx shadcn@latest add avatar button input textarea skeleton toast

    npm install markdown-it
    npm i @uiw/react-md-editor
    npm install slugify

    npm install next-sanity@canary

    npx sanity@latest typegen generate
    *** Only run to update sanity when new schemas or queries are added ***
    ```

### Setup
Quickly running locally
1. Clone the repo
   ```sh
   git clone https://github.com/WackyChomp/protozon.git
   ```
2. Install NPM packages into root directory or same directory as "<u>package.json</u>"
   ```sh
   npm install
   ```
3. Running on local computer <b>[Run this in root directory]</b>
   ```
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments 
🌟🤗🌟<br>
List of incredible resources that give you inspiration or point you into a direction:

* [Choose an Open Source License](https://choosealicense.com)
<br><br>
* [Next.js](https://nextjs.org/) - React Framework
* [Shadcn/ui](https://ui.shadcn.com/docs) - Customizable UI components
* [Tailwind CSS](https://tailwindcss.com/docs/installation) - CSS framework
* [Sanity.io](https://www.sanity.io/) - Manage content across websites, apps, and platforms

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[TypeScript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Tailwind.css]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/

[Sanity.io]: https://img.shields.io/badge/Sanity-EF3939?style=for-the-badge&logo=Sanity&logoColor=white
[Sanity-url]: https://www.sanity.io/

<!--
Initialize project with CLI
npm create sanity@latest -- --project [FOUND IN PROJECT PROFILE] --dataset production --template clean

npm install next-sanity@canary
-->