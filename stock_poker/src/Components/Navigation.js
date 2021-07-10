import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from 'react-spring';
import NavigationMenu from "./NavigationMenu";


export default function Navigation() {
    const [showMenu, setShowMenu] = useState(false) 

    const maskTransitions = useTransition(showMenu, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        // config: config.molasses,
        // onRest: () => setShowMenu(showMenu),
    })

    const menuTransitions = useTransition(showMenu, {
        from: { opacity: 0, transform: "translateX(-100%)" },
        enter: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(-100%)" },
        // config: config.molasses,
        // onRest: () => setShowMenu(showMenu),
    })


    // className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"
    // mask className="fixed bg-black-t-50 top-0 left-0 w-full h-full z-50"
    

    return(
        <nav>
            <span className="text-xl cursor-pointer">
                <FontAwesomeIcon 
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>
            {
                maskTransitions((styles, item) => 
                    item && 
                    <animated.div 
                        style={styles}
                        className="fixed bg-black-t-50 top-0 left-0 w-full h-full z-50"
                        onClick={() => setShowMenu(false)}
                    >
                    </animated.div>
                )
            }
            {
                menuTransitions((styles, item) => 
                    item && 
                    <animated.div 
                        style={styles}
                        className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"
                    >
                        <NavigationMenu 
                            closeMenu={() => setShowMenu(false)}
                        />
                    </animated.div>
                )
            }
        </nav>
    )
}