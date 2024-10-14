import React from "react";

export const Footer = () => {
    return (<div className="row">
            <div className="col footer-cover">
                <div className="footer text-center">
                    <small>CSS by <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap
                        5</a>. Thanks for <a href="https://blog.outsider.ne.kr/1234" target="_blank"
                                             rel="noopener noreferrer">Outsider</a> & <a href="https://github.com/uyu423/resume-legacy">uyu423</a></small><br/>
                    <small>Last Modified at 2018.01.02, <a href="https://github.com/uyu423/resume/commits/master"
                                                           target="_blank" rel="noopener noreferrer">Changelog. </a><a
                        href="https://github.com/uyu423/resume" target="_blank" rel="noopener noreferrer"><i
                        className="fa fa-github"></i> Github</a></small>
                </div>
            </div>
        </div>
    )
}