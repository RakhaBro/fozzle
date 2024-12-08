import React, { useEffect, useState } from "react";
import "./skill.css";

const SkillElement = React.memo(() => {

    // SKILL CONTROLLER ======================
    // =======================================
    const [skill, setSkill] = useState("");
    useEffect(() => {
        console.log("Skill: " + skill);
        if (skill !== "") {
            switch (skill) {
                case "galaxy":
                    document.querySelector(".skillelement_galaxy").classList.add("runskill_galaxy");
                    break;
                default:
                    break;
            }
            setTimeout(() => {
                setSkill("");
            }, 4000);
        }
    }, [skill])
    // =======================================
    

    useEffect(() => {
        const handleKeyDown = (event) => {
            
            if (skill == "") {
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
        <div className="skillelement">
            {skill == "galaxy" && <SkillElemment_Galaxy />}
        </div>
    );
})


function SkillElemment_Galaxy() {

    let shots = [];
    for (let i = 0; i < 30; i++) {
        shots.push(<SkillElement_Galaxy_Shot key={"galaxyshot" + i} id={i} delay={i > 15 ? 1000 : null} />);
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
}

function SkillElement_Galaxy_Shot({id, delay}) {

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
}

export default SkillElement;