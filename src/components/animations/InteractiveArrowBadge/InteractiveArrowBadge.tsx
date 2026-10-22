import { useRef, useState } from "react";
import Box from "@mui/material/Box";


export default function InteractiveArrowBadge() {

    const badgeRef = useRef(null);
    const [arrowAngle, setArrowAngle] = useState(180);

    const handleMouseMove = (event) => {
        if (!badgeRef.current) return;

        const rect = badgeRef.current.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = event.clientX - centerX;
        const deltaY = event.clientY - centerY;

        // Ionicons arrow-down-sharp normally points down at 180deg.
        const angle =
            (Math.atan2(deltaY, deltaX) * 180) / Math.PI;

        setArrowAngle(angle);
    };

    const handleMouseEnter = () => {
        setArrowAngle(180);
    };

    const handleMouseLeave = () => {
        setArrowAngle(180);
    };

    {/* Icon precisely at the center */ }
    return (

        // < Box
        //     sx={{
        //         position: "absolute",
        //         inset: 0,
        //         display: "flex",
        //         alignItems: "center",
        //         justifyContent: "center",
        //         pointerEvents: "none",
        //     }
        //     }
        // >
        //     <ion-icon
        //         name="arrow-down-sharp"
        //         style={{
        //             fontSize: "3rem",
        //             display: "block",
        //         }}
        //     />
        // </Box >

        <Box
            ref={badgeRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
                position: "absolute",
                zIndex: 2,
                bottom: -10,
                right: -10,
                width: { xs: 92, md: 110 },
                height: { xs: 92, md: 110 },
                borderRadius: "50%",
                bgcolor: "background.paper",
                border: `1px solid ${theme.palette.divider}`,
                boxShadow:
                    theme.palette.mode === "light"
                        ? "0 10px 24px -8px rgba(20, 18, 26, 0.25)"
                        : "0 10px 24px -8px rgba(0, 0, 0, 0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
            }}
        >
            {/* Circular text */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    pointerEvents: "none",
                }}
            >
                <CircularText
                    text="UI/UX • FRONTEND • BACKEND • "
                    onHover="speedUp"
                    spinDuration={16}
                    className="circular-text-custom"
                />
            </Box>

            {/* Cursor-following arrow */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    pointerEvents: "none",
                }}
            >
                <ion-icon
                    name="arrow-down-sharp"
                    style={{
                        fontSize: "1.5rem",
                        display: "block",
                        transform: `rotate(${arrowAngle - 180}deg)`,
                        transition: "transform 120ms ease-out",
                        willChange: "transform",
                    }}
                />
            </Box>
        </Box>
    )
}