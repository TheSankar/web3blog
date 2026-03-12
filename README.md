# Fair Blog — Decentralized Blogging on NEAR Protocol
 
A decentralized blog dApp built on NEAR Protocol where users can read posts, connect their NEAR wallet, publish content, and appreciate authors by sending NEAR tokens.
 
---
 
## 🧑‍💻 Project Members
 
- M. Gomathi Sankar ( lead )
- S. Angelin Arun
- S. Anbu Prakash
 
---
 
## 📌 Overview
 
Traditional blogging platforms like WordPress, Medium, and Blogger store all user data on centralized servers controlled by a single entity. This introduces risks like censorship, data monetization, privacy concerns, and security vulnerabilities.
 
**Fair Blog** solves this by building a censorship-resistant, user-owned blogging experience on the NEAR blockchain — giving full control back to creators.
 
---
 
## ✨ Features
 
- 📖 Read blog posts without connecting a wallet
- 🔐 Connect NEAR wallet (Auth via NEAR Wallet)
- ✍️ Publish blog posts on-chain
- 💰 Appreciate authors by sending NEAR tokens
- 🚫 No centralized control or data monetization
 
---
 
## 🛠️ Tech Stack
 
| Layer | Technology |
|---|---|
| Frontend | React.js |
| Backend | Node.js |
| Smart Contract | AssemblyScript + near-sdk-as |
| Blockchain | NEAR Protocol |
| IDE | VS Code |
| OS | Ubuntu 20.04 |
 
---
 
## 📐 Architecture
 
### Frontend Modules
- **Authentication Module** — Manages NEAR wallet login
- **Dashboard Module** — Displays the blog post feed
 
### Backend Modules
- **Authentication Module** — Handles login/signup logic
- **Blog Module** — Routes for fetching and creating posts
- **Database Module** — Stores data as on-chain transactions
 
### Smart Contract
Built with **AssemblyScript** using the `near-sdk-as` library. The contract handles:
- Storing blog posts on-chain
- Managing appreciation (token transfers)
- User authentication via NEAR Wallet
 
---
 
## 🗂️ System Design
 
### Class Structure
- `NEAR WALLET` — Auth entry point
- `User` — AccountID, Public Key, Signature
- `Writer` (extends User) — ADDBLOG, Title, BlogContent, AppreciationCost
- `Reader` (extends User) — StudentNumber, AverageMark, EligibilityStatus
 
### Activity Flow
1. User connects wallet
2. Wallet validity is checked
3. If valid and NEAR balance is sufficient → publishing is allowed
4. If balance is insufficient → blocked with warning
 
---
 
## ⚙️ Hardware Requirements
 
| Component | Spec |
|---|---|
| Processor | Intel i5-11 @ 2.70GHz |
| RAM | 512 MB |
| Storage | 8 GB |
 
---
 
## 🚀 Getting Started
 
### Prerequisites
- Node.js & npm
- NEAR CLI
- AssemblyScript
 
### Installation
 
```bash
# Clone the repository
git clone https://github.com/TheSankar/<repo-name>.git
cd <repo-name>
 
# Install frontend dependencies
cd frontend
npm install
 
# Install contract dependencies
cd ../contract
npm install
```
 
### Deploy Smart Contract
 
```bash
# Login to NEAR
near login
 
# Build the contract
npm run build
 
# Deploy to testnet
near deploy --accountId <your-account>.testnet --wasmFile build/release/contract.wasm
```
 
### Run Frontend
 
```bash
cd frontend
npm start
```
 
The app will be live at `http://localhost:3000`
 
---
 
## 📸 Screenshots
 
| Feed | Wallet Connect | Create Post |
|---|---|---|
| Blog post feed with appreciations | NEAR wallet auth screen | Add Blog form with title, content & appreciation cost |
 
---
 
## 📚 References
 
1. N. Barnes, A. Lescault (2011) — *Social Media Adoption Soars as Higher-Ed Experiments and Reevaluates Its Use of New Communication Tools*
2. G. Crisp, I. Cruz — *Mentoring College Students: A Critical Review of the Literature Between 1990 and 2007*, Research in Higher Education, pp. 525–545
 
---
 
## 📝 Conclusion
 
Developing a decentralized blog on NEAR Protocol is streamlined thanks to AssemblyScript for smart contracts and the NEAR SDK for content storage, retrieval, and wallet-based authentication. NEAR's comprehensive documentation provides a solid foundation for building censorship-resistant publishing tools with confidence.
 
---
 
## 📄 License
 
This project was developed as a final year academic project. Feel free to fork and build on it.
 
