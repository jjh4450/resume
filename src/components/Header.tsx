import React from "react";
import {image} from "../data/profile.ts";

export const Header = ({name, title, contacts}) => (
    <div className="row mt-5">
        <div className="col-md-3 col-sm-12 pb-3 text-md-end text-center">
            <img className="img-fluid rounded profile-img" src={image} alt="Profile"/>
        </div>
        <div className="col-md-9 col-sm-12">
            <div className="row">
                <div className="col text-center text-md-start">
                    <h1 className="blue">{name} {title&&<small>({title})</small>}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col pt-3">
                    {contacts.map((contact, index) => (
                        <div className="row pb-2" key={index}>
                            <div className="col-1 text-end">
                                <i className={`fa fa-${contact.icon}`} aria-hidden="true"></i>
                            </div>
                            <div className="col-auto">
                                {contact.link ? (
                                    <a href={contact.link} target="_blank" rel="noopener noreferrer">{contact.text}</a>
                                ) : (
                                    <span className="bg bg-light">{contact.text}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);