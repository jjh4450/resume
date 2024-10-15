import {project} from "./project.ts";
import {education} from "./education.ts";
import {experience} from "./experience.ts";
import {openSource} from "./openSource.ts";
import {presentation} from "./presentation.ts";
import {article} from "./article.ts";
import {etc} from "./etc.ts";
import {detailData} from "../../types/myDataType.ts";

export const myData: detailData =
    {
        "EXPERIENCE": experience,
        "PROJECT": project,
        "OPEN SOURCE": openSource,
        "PRESENTATION": presentation,
        "ARTICLE": article,
        "EDUCATION": education,
        "ETC": etc,
    };