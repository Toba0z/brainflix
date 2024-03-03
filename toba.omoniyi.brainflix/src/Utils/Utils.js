
const dateAndTimeOfComment = (date) => {
        const now = new Date();
        const CommentDate = new Date(date);
        const differenceInSeconds = Math.round((now - CommentDate) / 1000);
        if (differenceInSeconds < 60) {
          return `${differenceInSeconds} seconds ago`;
        } else if (differenceInSeconds < 3600) {
          return `${Math.round(differenceInSeconds / 60)} minutes ago`;
        } else if (differenceInSeconds < 86400) {
          return `${Math.round(differenceInSeconds / 3600)} hours ago`;
        } else if (differenceInSeconds < 2592000) {
          return `${Math.round(differenceInSeconds / 86400)} days ago`;
        } else if (differenceInSeconds < 31104000) {
          return `${Math.round(differenceInSeconds / 2592000)} months ago`;
        } else {
          return `${Math.round(differenceInSeconds / 31104000)} years ago`;
        }
      };
export default dateAndTimeOfComment; 

      



