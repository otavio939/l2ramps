## **L2 Ramps**
An open source web page to list and compare on/off ramp providers that support Ethereum Layer 2s.
The United States version is maintained by [otavio.eth](https://otavio.me/) and can be found at [l2ramps.com](htpps://leramps.com/)

### **Mission**
This site aim to help users reduce costs, comprehend risks, and avoid unnecessary KYCs by going directly to the right service for their needs. 

### **Values**
The project values neutrality (no sponsors, only grants and donations), decentralization (contributions are welcome, DMs are open), and transparency (the code is open source with MIT License).

---

## **Roadmap**
The work on all these fronts are going to happen in parallel. This way I do not get stuck in something or leaving important features behind.

### **The Verge**
_Feeding the website with reliable data_
* Find most of L2 ramps currently available for US persons - 90% done
* Structure a JSON database - 70% done
* Design a decent card layout - 50% done
* Get data from the ramp's websites - 40% done
* Create a calendar of ramp's website visits and test - Q4/22
* Monitor the ramps by following Twitter accounts and join the Discord channels - Q4/22
* Sign-up (KYC) to ramps that does not display clear info - Q1/23
* Test ramps - Q1/23

### **The Surge**
_Increasing the traffic to the website_
* Write threads and repply to tweets when opportune - Q1/23 -> Ever
* Reach out to the main Ethereum evangelist for shout outs - Q1/23
* Create a logo and better slogan - Q1/23
* Come out with a creative design for the website - Q2/23
* Issue a POAP for donations - Q2/23
* Issue a GitPOAP for repository contribuitions - Q2/23
* Launch a Discord channel - Q3/23

### **The Scourge**
_Incentivizing decentralization_
* Document the necessary KYC of each ramp - Q1/23
* Document how long funds needs to remain at ramp's custody - Q1/23
* Create videos on how to use the best ramps - Q2/23
* Add a list of recommend self-custody wallets - Q3/23

### **The Purge**
_Fixing the website_
* Improve accessibility - Q1/23
* Make correctios for W3C complaince - Q1/23
* Optimize images, css, and js - Q1/23
* Test the forking instructions on Linux, Mac, and Windows - Q2/23
* Optimize the repository for forks - Q2/23

---

## **Forking this repository**
> This website was coded to be host like any static website. Everything is pre-processed offline, no database configuration is necessary.

> Make sure you have Git and NPM installed in the machine.

1. Clone this repository using Git

    `gh repo clone otavio939/l2ramps`

2. Install all dependencies

    `npm install --no-optional`

3. Run parcel's live server and modify the files in the data folder

    `npx parcel src/markup/index.hbs --no-cache`

4. Compile the production files

    `npx parcel build src/index.html`

5. Copy the files in the "dist" folder to your hosting.

    `Done!`