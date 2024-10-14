import React from "react";

export const ExperienceItem = ({title, company, period, duration, description, skills}) => (
    <div className="row">
        <div className="col-md-3 col-12 text-md-right">
            <div className="row">
                <div className="col-md-12 col">
                    <h4 className="gray">{period}<br/></h4>
                </div>
                <div className="col-md-12 col-3 text-center text-md-right">
                    <span className={`bg bg-${duration === '재직 중' ? 'primary' : 'info'}`}>{duration}</span>
                </div>
            </div>
        </div>
        <div className="col-md-9 col-12">
            <h4>{title}</h4>
            <i className="gray">{company}</i>
            <ul className="pt-3">
                {description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
                <li><strong>Skill Keywords</strong></li>
                <div>
                    {skills.map((skill, index) => (
                        <span className="bg bg-secondary" key={index}>{skill}</span>
                    ))}
                </div>
            </ul>
        </div>
    </div>
);