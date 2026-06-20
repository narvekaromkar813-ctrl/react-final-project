export const sortCampaigns = (campaigns, direction = "desc") =>
  [...campaigns].sort((a, b) => (direction === "desc" ? b.roi - a.roi : a.roi - b.roi));
