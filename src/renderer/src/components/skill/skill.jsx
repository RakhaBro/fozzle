import React, { useEffect, useRef, useState } from "react";
import "./skill.css";

const SkillElement = React.memo(({verticalPosition}) => {

    // SKILL CONTROLLER ======================
    // =======================================
    const [skill, setSkill] = useState("");
    const skillRef = useRef(skill);
    var skillTimeout;
    useEffect(() => {
        skillRef.current = skill;
        clearTimeout(skillTimeout);
        console.log("Skill: " + skill);
        if (skill !== "") {
            switch (skill) {
                case "galaxy":
                    document.querySelector(".skillelement_galaxy").classList.add("runskill_galaxy");
                    break;
                case "lightparticle":
                    document.querySelector(".skillelement_lightparticle").classList.add("runskill_lightparticle");
                    break;
                case "butterfly":
                    document.querySelector(".skillelement_butterfly").classList.add("runskill_butterfly");
                    break;
                default:
                    break;
            }
            skillTimeout = setTimeout(() => {
                setSkill("");
            }, 4000);
        }
    }, [skill])
    // =======================================
    

    useEffect(() => {
        const handleKeyDown = (event) => {
            
            if (skillRef.current == "") {
                if (event.key === '1') {
                    setSkill("galaxy");
                } else if (event.key === '2') {
                    setSkill("lightparticle");
                } else if (event.key === '3') {
                    setSkill("butterfly");
                } else if (event.key === '4') {
                    setSkill("network");
                }
            }

        };
        window.addEventListener("keydown", handleKeyDown);
        
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }
    }, []);


    return(
        <div className="skillelement"
            style={
                skill == "lightparticle"
                ? {}
                : {
                    transform: `translateY(${verticalPosition}px)`,
                    transition: ".25s",
                    left: "150px"
                }
            }
        >
            {skill == "galaxy" && <SkillElemment_Galaxy verticalPosition={verticalPosition} />}
            {skill == "lightparticle" && <SkillElemment_LightParticle />}
            {skill == "butterfly" && <SkillElemment_Butterfly />}
        </div>
    );
})


// ==================================================================================
//                  GALAXY
// ==================================================================================


const SkillElemment_Galaxy = React.memo(({verticalPosition}) => {

    let shots = [];
    for (let i = 0; i < 20; i++) {
        shots.push(<SkillElement_Galaxy_Shot key={"galaxyshot" + i} id={i} delay={i > 10 ? 800 : null} />);
    }

    return(
        <>
            <div className="skillelement_galaxy shot">
                <div className="skillelement_galaxy_orbit1">
                    <div className="skillelement_galaxy_planet1_1 shot">
                        <div className="skillelement_galaxy_subplanet1_1 shot"></div>
                    </div>
                    <div className="skillelement_galaxy_planet1_2"></div>
                </div>
                <div className="skillelement_galaxy_orbit2 shot">
                    <div className="skillelement_galaxy_planet2 shot"></div>
                </div>
                <div className="skillelement_galaxy_orbit3">
                    <div className="skillelement_galaxy_planet3 shot"></div>
                </div>
            </div>
            {shots}
        </>
    );
})

const SkillElement_Galaxy_Shot = React.memo(({id, delay}) => {

    const elementId = "galaxyshot" + id;
    useEffect(() => {
        setTimeout(() => {
            document.getElementById(elementId).classList.add("pushgalaxybullet");
        }, delay ?? 10);
    }, []);

    return(
        <div className="galaxybullet_initialrotation"
            style={{transform: `rotate(${Math.floor(Math.random() * (120 - (-120) + 1)) + (-120)}deg)`}}
        >
            <div className="galaxybullet shot" id={elementId}></div>
        </div>
    );
})




// ==================================================================================
//                  LIGHT PARTICLE
// ==================================================================================

const SkillElemment_LightParticle = React.memo(() => {

    let shots = [];
    for (let i = 0; i < 20; i++) {
        shots.push(
            <SkillElemment_LightParticle_Shot
                key={"lightparticlebullet_" + i}
                id={i}
                delay={Math.floor(Math.random() * (1000 - (0) + 1000)) + (-0)}
            />
        );
    }

    return(
        <div className="skillelement_lightparticle shot">
            {shots}
        </div>
    );
})

const SkillElemment_LightParticle_Shot = React.memo(({id, delay}) => {

    const elementId = "lightparticleshot" + id;
    useEffect(() => {
        setTimeout(() => {
            document.getElementById(elementId).classList.add("push_lightparticle_bullet");
        }, delay ?? 0);
    }, []);

    return(
        <div className="lightparticlebullet_verticalposition"
            style={{transform: `translateY(${Math.floor(Math.random() * (295 - (-295) + 1)) + (-295)}px)`}}
        >
            <div className="lightparticlebullet shot" id={elementId}>
                <SkillElemment_LightParticle_Child />
                <SkillElemment_LightParticle_Child />
                <SkillElemment_LightParticle_Child />
                <SkillElemment_LightParticle_Child />
            </div>
        </div>
    );
})

const SkillElemment_LightParticle_Child = React.memo(() => {
    return(
        <div className="lightparticlebullet_child_goingleft">
            <div
                className="lightparticlebullet_child shot"
                style={{
                    transform: `translate(${
                        Math.floor(Math.random() * (-40 - (-100) + 1)) + (-40)
                    }px, ${
                        Math.floor(Math.random() * (80 - (-80) + 1)) + (-80)
                    }px)
                    rotate(45deg)
                    scale(${Math.floor(Math.random() * (1 - (-.5) + 1)) + (-.5)})`
                }}
            ></div>
        </div>
    );
})





// ==================================================================================
//                  BUTTERFLY
// ==================================================================================



const SkillElemment_Butterfly = React.memo(() => {
    return(
        <div className="skillelement_butterfly shot">
            <div className="skillelement_butterfly_child">
                <SkillElement_Butterfly_Element />
                <SkillElement_Butterfly_Element />
                <SkillElement_Butterfly_Element />
                <SkillElement_Butterfly_Element />
                <SkillElement_Butterfly_Element />
            </div>
        </div>
    );
})

const SkillElement_Butterfly_Element = React.memo(() => {
    return(
        <div className="skillelement_butterfly_element"
            style={{
                transform: `translate(${
                    Math.floor(Math.random() * (140 - (-140) + 1)) + (-140)
                }px, ${
                    Math.floor(Math.random() * (140 - (-140) + 1)) + (-140)
                }px)`
            }}
        ></div>
    );
})




export default SkillElement;