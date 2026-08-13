// src/components/AppLoaderComponent/AppLoaderComponent
import SplitTextAnimation from "../animations/SplitTextAnimation/SplitTextAnimation";
import Box from "@mui/material/Box";

// export default function AppLoaderComponent() {

//     return (<Box sx={{ fontSize: "20rem" }}>

//         <SplitTextAnimation text="Pramod Boda" />
//     </Box>)
// }

export default function AppLoaderComponent() {
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                // padding: "1rem"
            }}
        >
            <SplitTextAnimation text="Pramod Boda" />
        </Box>
    );
}