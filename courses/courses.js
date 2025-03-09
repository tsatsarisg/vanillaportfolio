const courses = [
  {
    title: "The Complete JavaScript Course 2024: From Zero to Expert!",
    image: "./assets/certificates/javascript.jpg",
    url: "https://www.udemy.com/certificate/UC-bb5fc2be-f64c-4152-a13e-49ad3ea86201/",
  },
  {
    title: "React - The Complete Guide 2023 (incl. React Router & Redux)",
    image: "./assets/certificates/react.jpg",
    url: "https://www.udemy.com/certificate/UC-e61c9403-9c8c-4b16-a4b9-92ae39727848/",
  },
  {
    title: " Understanding TypeScript",
    image: "./assets/certificates/typescript.jpg",
    url: "https://www.udemy.com/certificate/UC-0879dd29-2e8f-4b16-a104-69447a4020ce/",
  },
  {
    title: "Git & GitHub - The Practical Guide",
    image: "./assets/certificates/git.jpg",
    url: "https://www.udemy.com/certificate/UC-5823dfc3-b47b-4d1f-973e-f39849d4aceb/",
  },
  {
    title: "Clean Code",
    image: "./assets/certificates/clean.jpg",
    url: "https://www.udemy.com/certificate/UC-428fea1f-5b79-4766-9e6d-8ae74420d995/",
  },
  {
    title: "C# .NET Core 8",
    image: "./assets/certificates/csharp.jpg",
    url: "https://www.udemy.com/certificate/UC-471d89cb-c436-4687-9606-71b027d01c4b/",
  },
  {
    title: "Docker & Kubernetes: The Practical Guide",
    image: "./assets/certificates/coming-soon.jpg",
    url: "https://www.udemy.com/course/docker-kubernetes-the-practical-guide",
  },
  {
    title: "Spring Boot 3, Spring 6 & Hibernate for Beginners",
    image: "./assets/certificates/coming-soon.jpg",
    url: "https://www.udemy.com/course/spring-hibernate-tutorial/",
  },
  {
    title: "NestJS: The Complete Developer's Guide",
    image: "./assets/certificates/nest.jpg",
    url: "https://www.udemy.com/certificate/UC-9b675eaf-f690-44de-b41e-f1e626ac5b20/",
  },
];

function renderCertificates() {
  const container = document.getElementById("course-cards-container");

  courses.forEach((course) => {
    const template = `
        <div class="course-card">
        <a href="${course.url}" target="_blank">
          <img src="${course.image}" alt="${course.title}">
          <h3>${course.title}</h3>
          </a>
        </div>
      `;
    container.innerHTML += template;
  });
}

renderCertificates();
