import React, { useContext, useEffect, useRef, useState } from "react";
import { HealthContext } from "../../providers/healthProvider";
import "./skill.css";

const SkillElement = React.memo(({verticalPosition}) => {

    // SKILL CONTROLLER ======================
    // =======================================
    const [skill, setSkill] = useState("");
    const skillRef = useRef(skill);
    const {setHealth} = useContext(HealthContext);
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
                    setHealth(100);
                    break;
                case "interconnection":
                    document.querySelector(".skillelement_interconnection").classList.add("runskill_interconnection");
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
                    setSkill("interconnection");
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
                skill == "lightparticle" || skill == "interconnection"
                ? {}
                : {
                    transform: `translateY(${verticalPosition}px)`,
                    transition: ".3s",
                    left: "150px"
                }
            }
        >
            {skill == "galaxy" && <SkillElemment_Galaxy verticalPosition={verticalPosition} />}
            {skill == "lightparticle" && <SkillElemment_LightParticle />}
            {skill == "butterfly" && <SkillElemment_Butterfly />}
            {skill == "interconnection" && <SkillElemment_Interconnection />}
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
                delay={Math.floor(Math.random() * (1000 - (0) + 1000)) + (0)}
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

    var skillElement_butterfly_elements = []
    for (let i = 0; i < 7; i++) {
        skillElement_butterfly_elements.push(
            <SkillElement_Butterfly_Element key={'skillelement_butterfly_element_' + i} />
        );
    }

    return(
        <div className="skillelement_butterfly shot">
            <div className="skillelement_butterfly_child"></div>
            {skillElement_butterfly_elements}
        </div>
    );
})

const SkillElement_Butterfly_Element = React.memo(() => {

    return(
        <div className="skillelement_butterfly_element_container"
            style={{
                animation: `${Math.random() * (6.5 - (3.6) + 1) + (3.6)}s butterfly_rotating infinite linear`,
            }}
        >
            <div className="skillelement_butterfly_element_initialrotation"
                style={{transform: `rotate(${Math.floor(Math.random() * (360 - (0) + 1)) + (0)}deg)`}}
            >
                <div>
                    <div className="skillelement_butterfly_element"
                        style={{
                            transform: `translateX(${
                                Math.floor(Math.random() * (180 - (100) + 1)) + (100)
                            }px)
                            rotate(15deg)
                            scale(${Math.random() * (1.35 - (.6)) + (.6)})`,
                            animationDelay: `${Math.random() * (1.5 - (0)) + (0)}s`
                        }}
                    >
                        <svg
                            width={`40px`} height={`40px`}
                        >
                            <path d="M1 0 L10 6 L15 12 L18 12 L22 6 L31 0 L30 18 L25
                                22 L30 26 L31 43 L20 35 L16 25 L13 35 L1 43 L2 26 L7 22 L2 18 Z"
                                fill="#ffffff"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
})





// ==================================================================================
//                  INTERCONNECTION
// ==================================================================================



const SkillElemment_Interconnection = React.memo(() => {
    
    var points = [];
    for (let i = 0; i < 15; i++) {
        points.push(
            <SkillElemment_Interconnection_Point
                key={"skillelement_interconnection_point_" + i}
                id={"skillelement_interconnection_point_" + i}
            />
        );
    }
    
    return(
        <>
            <div className="skillelement_interconnection shot"></div>
            <div className="skillelement_interconnection_leftshine shot"></div>
            <div className="skillelement_interconnection_pointscontainer">
                {points}
            </div>
        </>
    );
})

const SkillElemment_Interconnection_Point = React.memo(({id}) => {
    return(
        <div className="skillelement_interconnection_point_scalestretch"
            style={{
                top: `${Math.floor(Math.random() * (600 - (0))) + (0)}px`,
                left: `${Math.floor(Math.random() * (1000 - (200))) + (200)}px`
            }}
        >
            <div className="skillelement_interconnection_point shot"
                id={id}
                style={{animationDelay: `${Math.random() * (1.5 - (0)) + (0)}s`}}
            ></div>
        </div>
    );
});




export default SkillElement;