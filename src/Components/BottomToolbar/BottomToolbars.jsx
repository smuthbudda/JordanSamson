import "./BottomToolbars.css"
import React from "react";
import * as Unicons from '@iconscout/react-unicons';

function Toolbars() {
    
    return (
        <>
            <div className={"toolbar left"}>
                <div className="toolbar__icons " >
                    <a href="https://github.com/smuthbudda?tab=repositories" target="_blank">
                        <Unicons.UilGithubAlt size="1.5rem" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCACRIvYPVdscGnHulrqfZoQ" target="_blank"> 
                        <Unicons.UilYoutube size="1.5rem" />
                    </a>
                    <a href="https://www.linkedin.com/in/jordan-samson-51a800231/" target="_blank">
                        <Unicons.UilLinkedinAlt size="1.5rem" />
                    </a>
                    <a href="https://github.com/smuthbudda?tab=repositories" target="_blank">
                        <Unicons.UilInstagram size="1.5rem" />
                    </a>
                </div>
            </div>
            <div className={"toolbar right"}>
                <div className="toolbar__contact" >
                    <a href="mailto: jkdsamson@outlook.com">
                        jkdsamson@outlook.com
                    </a>
                </div>
            </div>
            
        </>
    )

}

export default Toolbars;