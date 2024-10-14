import React from "react";

export const SkillCategory = ({category, skills}) => (
    <div className="row">
        <div className="col-12 col-md-3 text-md-end">
            <h4 className="text-muted">{category}</h4>
        </div>
        <div className="col-12 col-md-9">
            <div className="row">
                {skills.map((skillSet, index) => (
                    <div className="col" key={index}>
                        <ul className="list-unstyled">
                            {skillSet.map((skill, skillIndex) => (
                                <li key={skillIndex}>
                                    {skill.level && (
                                        <span
                                            className={`badge rounded-pill me-1 ${skill.level === 3 ? 'bg-primary' : skill.level === 2 ? 'bg-secondary' : 'bg-light text-dark'}`}>
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