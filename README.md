# project_starfall
`EMK{0$1pm_i0p3_p3g_$v4ky}`

> An unknown alien entity has infiltrated human digital infrastructure by stealing identities and blending into normal systems.
>
> Through careful OSINT, you have traced the entity to an internal web portal believed to be hosting sensitive stolen data.
>
> Your task is to access the system, understand how it works, and retrieve the hidden data before it is lost or exfiltrated.

---

## Getting the Challenge Files

Clone the repository using Git:

```bash
git clone https://github.com/iamalien442-star/project_starfall.git
cd project_starfall
```

Make sure you have the following installed before continuing:

- **Git**
- **Docker** (or Docker Desktop)

---

## Environment

- The application runs locally using Docker
- It simulates a real-world internal service
- All actions can be performed offline
- No external internet access is required once the container is running

---

## How to Run

### Using Docker (recommended)

```bash
docker build -t project-starfall . && docker run --rm -p 3000:3000 project-starfall
```

Then open your browser:

```
http://localhost:3000
```

### Using Docker Compose (optional)

```bash
docker compose up --build
```

---

## Rules

- No denial-of-service attacks
- No brute-force password attacks
- No container or host escape attempts
- Focus on application-level vulnerabilities only
- Everything needed to solve the challenge is intentionally present
