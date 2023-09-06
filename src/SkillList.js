export default function SkillList() {
  const skills = [
    {
      skill: "React",
      level: "beginner",
      color: "blue",
    },
    {
      skill: "HTML",
      level: "advanced",
      color: "orange",
    },
    {
      skill: "CSS",
      level: "beginner",
      color: "orangered",
    },
    {
      skill: "Node.js",
      level: "beginner",
      color: "green",
    },
    {
      skill: "JavaScript",
      level: "advanced",
      color: "yellow",
    },
    {
      skill: "Git and Github",
      level: "intermediate",
      color: "lightblue",
    },
  ];

  const levels = {
    beginner: "👶",
    intermediate: "👍",
    advanced: "💪",
  };
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <div className="skill" style={{ backgroundColor: skill.color }}>
          <span>{skill.skill}</span>
          <span>{levels[skill.level]}</span>
        </div>
      ))}
    </div>
  );
}
