# Frontend World (React + TS)

Welcome to **Frontend World**, a repo designed for practicing and solving frontend problems, and exploring React concepts. This project is intended solely for personal use and practice.

This repository is structured with workspaces to focus on various aspects of frontend development. These workspaces allows to organize examples, problems, and learning resources efficiently while sharing common dependencies like **React**, **TypeScript**, **Vite**, and others inside the root folder.

## Structure

```
frontend-world/
├── node_modules/            ← Shared dependencies
├── package.json             ← Root package.json for common dependencies
├── yarn.lock                ← Yarn lockfile to ensure consistent dependencies
├── problems/                ← Contains frontend problems to solve
│   ├── problem-1/           ← A specific problem to solve
│   ├── problem-2/           ← Another problem to solve
│   └── ...
└── examples/                ← Tutorials or React concept practice
    ├── example-1/           ← Example or tutorial project
    ├── example-2/           ← Another tutorial/example
    └── ...
```

### Workspaces

This repo is organized into two main workspaces:

- **`problems/`**: Focuses on solving **frontend problems**, often involving algorithms, UI challenges, and other problem-solving exercises. This is a great place to practice and refine skills.

- **`examples/`**: Includes **example concepts** to help **practice React concepts** or follow along with **tutorials**. These examples might be based on tutorials, exercises, or just experimental React code.
---

## Getting Started

To get started with this repo, follow these steps:

### 1. Clone the repository

Clone the repository to your local machine:

```bash
git clone https://github.com/shafiqshams/frontend-world.git
cd frontend-world
```

### 2. Install dependencies

Run the following command to install all dependencies for the project:

```bash
yarn install
```

This will install all shared dependencies at the root level and set up the individual workspaces.

### 3. Run a specific workspace

We can work with any of the workspaces. Here’s how to run a development server for any of them:

#### For a frontend problem (from `problems/`):

1. Navigate to the problem folder (e.g., `problems/problem-1`):

   ```bash
   cd problems/problem-1
   ```

2. Run the development server (if applicable):

   ```bash
   yarn dev
   ```

#### For an example project or tutorial (from `examples/`):

1. Navigate to the example folder (e.g., `examples/example-1`):

   ```bash
   cd examples/example-1
   ```

2. Run the development server:

   ```bash
   yarn dev
   ```

#### Instead running it direclty from the root folder

1. Navigate to the root folder (`frontend-world`):
```bash
   cd frontend-world
   ```
2. Run the development server:

   ```bash
   yarn workspace project-name dev
   ```

### 4. Add New Workspaces

Also, We can add new workspace as projects, problems, or examples by creating new folders under the respective directories. Follow the structure and rest will work automatically.

---

## License

This project is for **personal use and practice only**, and is **not open-source**. Feel free to use it for your own learning and experimentation.

---