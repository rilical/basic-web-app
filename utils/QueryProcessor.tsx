export default function QueryProcessor(query: string): string {
  const lowerCaseQuery = query.toLowerCase().trim();

  if (lowerCaseQuery.includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (lowerCaseQuery === "what is your andrew id?") {
    return "My Andrew ID is oghabaye";
  }

  return "";
}