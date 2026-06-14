<div align="center">

# 🏥 UniDiag Platform

![Next.js](https://img.shields.io/badge/Next.js_14-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

**A modern healthcare laboratory management platform built with Next.js — featuring specialized screens for diagnostics, pathology review, operation theatre, and urine analysis workflows.**

[🐛 Report Bug](https://github.com/grammerpro/unidiag-platform/issues) · [💡 Request Feature](https://github.com/grammerpro/unidiag-platform/issues)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- - [Features](#-features)
  - - [Modules](#-modules)
    - - [Tech Stack](#-tech-stack)
      - - [Getting Started](#-getting-started)
        - - [Project Structure](#-project-structure)
          - - [Roadmap](#-roadmap)
            - - [Contributing](#-contributing)
              - - [License](#-license)
               
                - ---

                ## 🔍 About

                UniDiag is a unified diagnostic management platform built for healthcare facilities. It provides purpose-built UI screens for different departments — from the dashboard overview to specialized laboratory workflows — enabling clinical staff to manage test results, reviews, and patient data efficiently.

                ---

                ## ✨ Features

                - 🖥️ **Multi-module Dashboard** — Unified overview across all lab departments
                - - 🔬 **Pathologist Review** — Streamlined interface for reviewing and annotating test results
                  - - 🧪 **Urine Analysis** — Dedicated workflow for urinalysis result entry and reporting
                    - - 🏥 **Operation Theatre** — Pre/post-op diagnostic tracking screen
                      - - 📱 **Responsive Design** — Works on tablets and desktops used in clinical environments
                        - - 🎨 **Component Library** — Reusable UI components following a consistent design system
                         
                          - ---

                          ## 🧩 Modules

                          | Module | Route | Description |
                          |--------|-------|-------------|
                          | Dashboard | `/dashboard` | Overview of all lab activity and KPIs |
                          | Pathologist Review | `/pathologist-review` | Review and annotate diagnostic reports |
                          | Urine Analysis | `/urine-analysis` | Urinalysis result entry and reporting |
                          | Operation Theatre | `/operation-theatre` | Pre/post-op diagnostic tracking |

                          ---

                          ## 🛠️ Tech Stack

                          | Layer | Technology |
                          |-------|-----------|
                          | Framework | Next.js 14 (App Router) |
                          | Language | TypeScript |
                          | Styling | Tailwind CSS |
                          | Components | Custom UI component library (`/components/ui`) |

                          ---

                          ## 🚀 Getting Started

                          ### Prerequisites

                          - **Node.js** v18+
                          - - **npm** v9+
                           
                            - ### Installation
                           
                            - ```bash
                              git clone https://github.com/grammerpro/unidiag-platform.git
                              cd unidiag-platform
                              npm install
                              npm run dev
                              ```

                              Open [http://localhost:3000](http://localhost:3000) to view the platform.

                              ---

                              ## 📁 Project Structure

                              ```
                              unidiag-platform/
                              ├── src/
                              │   ├── app/
                              │   │   ├── dashboard/           # Main dashboard screen
                              │   │   ├── pathologist-review/  # Pathology review module
                              │   │   ├── urine-analysis/      # Urinalysis module
                              │   │   ├── operation-theatre/   # Operation theatre module
                              │   │   ├── layout.tsx
                              │   │   └── page.tsx
                              │   └── components/
                              │       └── ui/                  # Reusable UI component library
                              ├── public/
                              ├── tailwind.config.ts
                              └── package.json
                              ```

                              ---

                              ## 🗺️ Roadmap

                              - [ ] Patient data management module
                              - [ ] - [ ] Real-time result updates via WebSocket
                              - [ ] - [ ] PDF report generation per patient
                              - [ ] - [ ] Role-based access control (Doctor / Lab Technician / Admin)
                              - [ ] - [ ] Integration with lab equipment APIs
                             
                              - [ ] ---
                             
                              - [ ] ## 🤝 Contributing
                             
                              - [ ] 1. Fork the repository
                              - [ ] 2. Create a branch: `git checkout -b feature/your-module`
                              - [ ] 3. Follow the existing component patterns in `/components/ui`
                              - [ ] 4. Open a Pull Request
                             
                              - [ ] ---
                             
                              - [ ] ## 📄 License & Contact
                             
                              - [ ] Released under the **MIT License**.
                             
                              - [ ] **Vardhan** · [vardhana1209@gmail.com](mailto:vardhana1209@gmail.com) · [github.com/grammerpro](https://github.com/grammerpro)
