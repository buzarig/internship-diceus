# Account Management Dashboard – Test Assignment

This project is a frontend test assignment that implements an **Account Management Dashboard** based on the provided design and requirements.  
The main goal was to reproduce the UI as accurately as possible, build a clean component-based architecture, and demonstrate the ability to work with structured mock data.

---

## Brief Description

### Technologies Used
- **React** (Vite)
- **JavaScript (ES6+)**
- **HTML5**
- **CSS Modules**
- **Modern CSS** (Flexbox, CSS Grid, responsive units)
- **Static mock data (JSON)**

All UI components were implemented manually without using third-party UI libraries.

---

### AI Tools Used
- **ChatGPT (GPT-5)** — used for:
  - Component architecture planning
  - Layout and CSS troubleshooting
  - Refactoring and optimization suggestions
  - Mock data structuring

No Figma-to-code or automatic UI generation tools (such as Anima or similar) were used.  
The interface was built manually based on the provided design.

---

## Project Structure

The project follows a modular and scalable structure:

- `components/` — page sections and feature components
- `ui/` — reusable UI elements (Card, buttons, etc.)
- `layouts/` — shared layout components (Shell, Topbar, TopNav)
- `mocks/` — centralized mock data
- `assets/` — images and icons

Each page section is implemented as an independent, reusable component.

---

## Layout & Navigation

- Shared **Shell layout** is used across all pages
- Common **Topbar** and **Top Navigation** reused between Dashboard and Account pages
- Active navigation state is controlled via props
- Breadcrumbs are rendered dynamically from mock data

---

## Data Handling

- The application uses **static mock data** instead of a backend
- Data is passed to components via props
- Components are not hardcoded and are ready for API integration
- Mock data structure is centralized and easy to extend

---

## Responsive Design

- Desktop-first approach
- Tablet responsiveness implemented via media queries
- Flexible sizing using `fr`, `clamp()`, and content-based layouts
- No hardcoded pixel values for key layout elements

---

## Notes

- Backend, authentication, and routing were not required for this task
- No external UI frameworks were used intentionally
- Focus was placed on clean code, readability, and scalability
- The project is prepared for future extension (API integration, state management)

---

Thank you for reviewing this test assignment.
