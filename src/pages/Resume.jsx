import { useState, useEffect } from 'react';
import resumeData from '../data/resume';

const Resume = () => {
  const [resume, setResume] = useState({ studies: [], experiences: [] });

  useEffect(() => {
    setResume(resumeData);
  }, []);

  return (
    <div>
      <h1>Currículum</h1>
      <h2>Experiencia Laboral</h2>
      <ul>
        {resume.experiences.map(exp => (
          <li key={exp.id}>
            <h3>{exp.title}</h3>
            <p>{exp.company} - {exp.date}</p>
          </li>
        ))}
      </ul>
      <h2>Educación</h2>
      <ul>
        {resume.studies.map(study => (
          <li key={study.id}>
            <h3>{study.title}</h3>
            <p>{study.institution} - {study.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resume;
