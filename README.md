# Monster Quest

Gamified task manager and productivity app where users complete quests (tasks) to defeat monsters, earn XP, and track progress.

## MVP Features
- User registration / login
- Create quests with difficulty
- Monster assigned to each quest
- Complete quest → gain XP / defeat monster
- XP / Level system
- Log of completed quests

## Tech Stack
**Frontend:**  
- React + TypeScript + Vite  
- Tailwind CSS
- React Router  

**Backend:**  
- Java 25 + Spring Boot + Spring Web  
- Spring Security + JWT  
- JPA / Hibernate  
- PostgreSQL  

**Dev Tools:**  
- GitHub (repo + project board)  
- Docker

## How to Run Locally

```bash
# Clone repo
git clone <repo-url>

# Database
docker compose up -d
# Starts PostgreSQL (5432) and pgAdmin (5050).

# Frontend
cd frontend
npm install
npm run dev

# Backend
cd backend
.\mvnw clean spring-boot:run