import { Stack } from "@mui/material";

const TopAgentCard = () => {
  return (
    <Stack className={"top-agent-card"}>
      <img src="/img/banner/agents.webp" alt="" />
      <strong className={"title"}> Harvey</strong>
      <p className={"desc"}> AGENT </p>
    </Stack>
  );
};

export default TopAgentCard;
