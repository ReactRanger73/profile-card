import Skill from "./Skill";
export default function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="👶" color="blue"></Skill>
      <Skill skill="HTML" emoji="💪" color="orange"></Skill>
      <Skill skill="CSS" emoji="👶" color="orangered"></Skill>
      <Skill skill="Node.js" emoji="👶" color="green" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
    </div>
  );
}
