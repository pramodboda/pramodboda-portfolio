// SkillCard.tsx
import type { IconType } from "react-icons";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export interface ISkillProps {
    title: string;
    logo?: IconType;
}

export default function SkillCard({ logo: Icon, title }: ISkillProps) {
    return (
        <Card
            sx={{
                height: 48,
                px: 2,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 1.25,
                borderRadius: 2,
                flexShrink: 0,
                bgcolor: "background.paper",
            }}
        >
            {Icon && <Icon size={20} />}

            <Typography
                sx={{
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    lineHeight: 1,
                    whiteSpace: "nowrap",
                    color: "text.primary",
                }}
            >
                {title}
            </Typography>
        </Card>
    );
}
