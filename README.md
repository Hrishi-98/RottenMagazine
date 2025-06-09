🎬 **Movies App (Angular Learning Project)**

A simple Angular-based frontend project built to practice and demonstrate core Angular concepts like routing, standalone components, and basic UI structuring. This project showcases static content and navigation as part of learning Angular fundamentals.

🧠 **Purpose**

This project was developed as part of a hands-on learning process with Angular. It emphasizes:

    Component creation
    
    Routing with parameters
    
    UI structuring using standalone components
    
    Static content rendering without backend/API integration

🚀 **Features**

    🧾 Login Page: Static form component for user login.
    
    🏠 Home Page: Central page after login with links to movie details.
    
    🎥 Movie Page: Renders static movie data based on URL params.
    
    🧭 Routing Setup: Clean routing using Angular's RouterModule.
    
    🎨 Component Styling: Basic layout using CSS.

🧱 **Project Structure**

    src/app/
    ├── app.component.*         # Root component
    ├── app.config.ts           # App configuration (Router + Zone setup)
    ├── app.routes.ts           # Route definitions
    ├── login/                  # LoginComponent (static)
    ├── home/                   # HomeComponent (navigation or overview)
    └── movie/                  # MovieComponent (uses route params)
    
⚙️ **Technologies Used**

    Angular 18 with Standalone Components
    
    TypeScript
    
    HTML & CSS
    
    No external libraries or backend integration

🧪 How to Run

Ensure you have Node.js and Angular CLI installed.

    # 1. Install dependencies
    npm install
    
    # 2. Run the app
    ng serve
    
    # 3. Open in browser
    http://localhost:4200
    
📌 Future Enhancements

This project is currently static. Future learning steps may include:

    Integrating with a movie API (e.g., TMDb)
    
    Adding reactive forms and validation
    
    Implementing authentication logic
    
    Applying Angular Material for UI polish
