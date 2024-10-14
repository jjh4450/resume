import React from "react";

export const SkillCategory = ({category, skills}) => (
    <div className="row">
        <div className="col-12 col-md-3 text-md-right">
            <h4 className="gray">{category}</h4>
        </div>
        <div className="col-12 col-md-9">
            <div className="row">
                {skills.map((skillSet, index) => (
                    <div className="col" key={index}>
                        <ul>
                            {skillSet.map((skill, skillIndex) => (
                                <li key={skillIndex}>
                                    {skill.level && (
                                        <span
                                            className={`bg bg-pill bg-${skill.level === 3 ? 'primary' : skill.level === 2 ? 'secondary' : 'light'}`}>
                      {skill.level}
                    </span>
                                    )}
                                    {skill.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </div>
);