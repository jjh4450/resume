import React from 'react';
import {Section} from "../components/Section.tsx";
import {SkillCategory} from "../components/SkillCategory.tsx";
import {ExperienceItem} from "../components/ExperienceItem.tsx";
import {skills} from "../data/skills.ts";
import {myData} from "../data/detail";
import {Footer} from "../components/Footer.tsx";

const Resume = () => {

    return (
        <div className="container resume">
            <Section title="SKILLS">
                {Object.entries(skills).map(([category, skillSet]) => (
                    <React.Fragment key={category}>
                        <SkillCategory category={category} skills={skillSet}/>
                        <hr/>
                    </React.Fragment>
                ))}
            </Section>

            {
                Object.entries(myData).map(([section, items]) => (
                    items.length > 0 &&
                    <Section key={section} title={section}>
                        {items.map((item, index) => (
                            <React.Fragment key={index}>
                                <ExperienceItem {...item}/>
                                <hr/>
                            </React.Fragment>
                        ))}
                    </Section>
                ))
            }
        </div>
    );
};

export default Resume;