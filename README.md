# **L2 Ramps**
An open source web page to list and compare on/off ramp providers that support Ethereum Layer 2s.
* The United States version is maintained by [otavio.eth](https://twitter.com/otavio_eth) and can be found at [l2ramps.web.app](https://l2ramps.web.app/)

### **Mission**
This site aim to help users reduce costs, comprehend risks, and avoid unnecessary KYCs by going directly to the right service for their needs. 

### **Values**
The project values neutrality (no sponsors, only grants and donations), decentralization (contributions are welcome, DMs are open), and transparency (the code is open source with MIT License).

# **Roadmap**
The work on all these fronts are going to happen in parallel. This way I do not get stuck in something or leaving important features behind.

### **The Verge**
_Feeding the website with reliable data_
* ~~Create a static website with file based database~~ - Done
* ~~Initial search for L2 ramps available for U.S. Person~~ - Done
* Improve card layout and include legend - 80% done - Dec/22
* ~~List ramps with icons~~ - Done
* ~~Check and list the terms of services of each ramp~~ Done
* ~~Check and list the privacy police of each ramp~~ Done
* Check and list funding methods of each ramp - Dec/22
* Check and list purchase options of each ramp - Dec/22
* Check and list withdraw options of each ramp - Dec/22
* Public launch of the website - Jan/23
* Start monitoring ramps Twitter accounts and Discord channels - Q1/23
* Sign-up (KYC) to ramps that does not display clear info - Q1/23
* Test on/off ramp routes - Q1/23
* Find a way to automatically monitor changes on ramp's websites - Q2/23

### **The Surge**
_Increasing the traffic to the website_
* Write threads and reply to tweets when opportune - Q1/23
* Reach out to the main Ethereum evangelist for shout outs - Q1/23
* Create a logo and better slogan - Q1/23
* Re-design the website for a more creative style - Q2/23
* Issue a POAP for donors - Q2/23
* Issue a GitPOAP for contributors - Q2/23
* Launch a Discord channel - Q3/23

### **The Scourge**
_Incentivizing decentralization_
* Check and list the necessary KYC of each ramp - Q1/23
* Document how long funds needs to remain at ramp's custody - Q1/23
* Create a methodology to rate websites based on decentralization and cost – Q2/23
* Sort providers based on rating instead of alphabetically – Q2/23
* Write pros, cons, and recommend uses for each ramp - Q2/23
* Create videos on best practices for self-custody and safety - Q2/23
* Start section focus on wallets - Q3/23

### **The Purge**
_Fixing the website_
* ~~Add dark mode~~ - Done
* Improve accessibility - Q1/23
* Make correctios for W3C compliance - Q1/23
* Optimize images, CSS, and JS - Q1/23
* Test the forking instructions on Linux, Mac, and Windows - Q2/23
* Optimize the repository for forks - Q2/23
* Remove unnecessary dependencies - Q2/23

# **Forking this repository**
> This website was coded to be hosted like a static website. Everything is pre-processed offline, no database configuration or knowledge is necessary.

> Make sure you have Git and NPM installed on your machine.

1. Clone this repository using Git

    `gh repo clone otavio939/l2ramps`

2. Install all dependencies

    `npm install --no-optional`

3. Run parcel's live server and modify the files in the data folder

    `npm run dev`

4. Compile the production files and host

    `npm run build`
    `npm run deply`