// Defines a function that calculates the elapsed time since a given date
const dateAndTimeOfComment = (date) => {
  // Current date and time
  const now = new Date();
  // Converts the passed date argument into a Date object
  const CommentDate = new Date(date);

  // Calculates the difference in seconds between now and the comment date
  const differenceInSeconds = Math.ceil((now - CommentDate) / 1000);

  // Less than 1 minute
  if (differenceInSeconds < 60) {
    return `${differenceInSeconds} seconds ago`;
  }
  // Less than 1 hour
  else if (differenceInSeconds < 3600) {
    return `${Math.ceil(differenceInSeconds / 60)} minutes ago`;
  }
  // Less than 1 day
  else if (differenceInSeconds < 86400) {
    return `${Math.ceil(differenceInSeconds / 3600)} hours ago`;
  }
  // Less than 1 month
  else if (differenceInSeconds < 2592000) {
    return `${Math.ceil(differenceInSeconds / 86400)} days ago`;
  }
  // Less than 1 year
  else if (differenceInSeconds < 31104000) {
    return `${Math.ceil(differenceInSeconds / 2592000)} months ago`;
  }
  // More than 1 year
  else {
    return `${Math.ceil(differenceInSeconds / 31104000)} years ago`;
  }
};
export default dateAndTimeOfComment;
