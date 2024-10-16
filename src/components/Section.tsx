import {SectionData} from "../types/sectionData.ts";

export const Section = ({title, children}: SectionData) => (
    <div className="row pt-5">
        <div className="col">
            <div className="row pb-3">
                <div className="col">
                    <h2 className="blue">{title}</h2>
                </div>
            </div>
            {children}
        </div>
    </div>
);