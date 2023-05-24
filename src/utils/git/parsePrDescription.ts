type PRDescription = {
  title: string;
  description: string;
};

export function parsePRDescription(prDescription: string): PRDescription {
  // Extract title using regex
  const titlePattern = /<title>(.*?)<\/title>/;
  const titleMatch = prDescription.match(titlePattern);
  let title = titleMatch ? titleMatch[1] : "";

  // Remove title from the description
  const description = prDescription.replace(titlePattern, "").trim();

  // Return the formatted object
  return {
    title,
    description,
  };
}
